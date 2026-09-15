import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'
import { buildSilhouette, copyCanvas, createCanvas } from './hero-glitch/canvas'
import { buildSketch } from './hero-glitch/sketch'
import { buildWireframe } from './hero-glitch/wireframe'
import { buildDesign } from './hero-glitch/design'
import { buildCode, paintCell } from './hero-glitch/code'

/* ─── HeroGlitch ───────────────────────────────────────────────────────────
   "Da hipótese ao produto", em looping sobre a foto do Hero.
   A foto buga em faixas (glitch) e atravessa as etapas do processo:
   v1 hypothesis (estudo a lápis) → v2 exploration (wireframe) →
   v3 design (Figma) → v4 prototype (código digitado) → v5 product (foto).
   O produto fica parado alguns segundos e o ciclo recomeça.
   Todas as etapas são geradas da própria foto: a pose é sempre idêntica.
   Hover (mouse, com o produto parado): uma lente revela a camada de código.
   ───────────────────────────────────────────────────────────────────────── */

const DPR_MAX = 2
const NOTE_FONT = 'Caveat, "Bradley Hand", "Segoe Print", cursive'
const CAPTION_FONT = 'ui-monospace, "SF Mono", Menlo, Consolas, monospace'

const STAGES = [
  { id: 'sketch', label: 'v1 · hypothesis', hold: 1300 },
  { id: 'wireframe', label: 'v2 · exploration', hold: 1600 },
  { id: 'design', label: 'v3 · design', hold: 1000 },
  { id: 'code', label: 'v4 · prototype', hold: 3000, enter: 'codeEmpty' },
  { id: 'product', label: 'v5 · product' },
]

// A foto termina o fade de entrada em ~980ms.
const FIRST_DELAY = 1400
const PRODUCT_HOLD = 7000
const TRANSITION = 460
// O glitch muda em degraus, não em interpolação suave.
const TRANSITION_STEP = 60
// Digitação: linhas começam em cascata dentro desse intervalo; cada caractere leva TYPE_CHAR.
const TYPE_SPAN = 1500
const TYPE_CHAR = 8
const CURSOR_BLINK = 530
const LENS_RADIUS = 96

function drawCaption(canvas, label, visible, unit, color) {
  const ctx = canvas.getContext('2d')
  ctx.save()
  ctx.font = `500 ${Math.round(12 * unit)}px ${CAPTION_FONT}`
  ctx.textBaseline = 'bottom'
  ctx.textAlign = 'left'
  ctx.fillStyle = color
  ctx.globalAlpha = 0.8
  ctx.fillText(label, visible.x + 12 * unit, visible.y + visible.h - 12 * unit)
  ctx.restore()
}

function drawTransition(ctx, layers, from, to, progress) {
  const { W, H, dpr } = layers
  ctx.clearRect(0, 0, W, H)

  const toChance = progress < 0.25 ? 0.1 : progress < 0.5 ? 0.4 : progress < 0.75 ? 0.75 : 0.95
  const shake = progress < 0.75 ? 1 - progress * 0.6 : 0.15
  // Faixas de código escapam no meio das trocas: a "Matrix" aparecendo por trás.
  const touchesCode = from.startsWith('code') || to.startsWith('code')
  const codeChance = touchesCode ? 0 : 0.2 * Math.sin(Math.PI * progress)

  let y = 0
  while (y < H) {
    const h = Math.min(H - y, Math.max(3, Math.round(H * (0.01 + Math.random() ** 2 * 0.16))))
    const source = Math.random() < codeChance ? 'code' : Math.random() < toChance ? to : from
    const dx = Math.random() < 0.4 ? Math.round((Math.random() * 2 - 1) * 22 * shake * dpr) : 0
    ctx.drawImage(layers[source], 0, y, W, h, dx, y, W, h)
    y += h
  }
}

function drawLens(ctx, layers, lens) {
  const { W, H, dpr, lensCanvas } = layers
  const cx = lens.x * dpr
  const cy = lens.y * dpr
  const r = lens.r * dpr
  const sx = Math.max(0, Math.floor(cx - r))
  const sy = Math.max(0, Math.floor(cy - r))
  const ex = Math.min(W, Math.ceil(cx + r))
  const ey = Math.min(H, Math.ceil(cy + r))
  if (ex <= sx || ey <= sy) return

  const lensCtx = lensCanvas.getContext('2d')
  lensCtx.clearRect(0, 0, W, H)
  lensCtx.drawImage(layers.code, sx, sy, ex - sx, ey - sy, sx, sy, ex - sx, ey - sy)

  const fade = lensCtx.createRadialGradient(cx, cy, r * 0.8, cx, cy, r)
  fade.addColorStop(0, '#000')
  fade.addColorStop(1, 'rgba(0, 0, 0, 0)')
  lensCtx.globalCompositeOperation = 'destination-in'
  lensCtx.fillStyle = fade
  lensCtx.fillRect(sx, sy, ex - sx, ey - sy)
  lensCtx.globalCompositeOperation = 'source-over'

  ctx.drawImage(lensCanvas, sx, sy, ex - sx, ey - sy, sx, sy, ex - sx, ey - sy)
}

export default function HeroGlitch({ className, lightRef, darkRef, hoverRef }) {
  const canvasRef = useRef(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    const hoverTarget = hoverRef.current
    const images = [lightRef.current, darkRef.current].filter(Boolean)
    const img = theme === 'dark' ? darkRef.current : lightRef.current
    if (!canvas || !hoverTarget || !img) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches) return

    const ctx = canvas.getContext('2d')
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    const mountedAt = performance.now()

    let disposed = false
    let ready = false
    let noteFontReady = false
    let layers = null
    let cycle = null
    let resting = false
    let inView = true
    let raf = 0
    let last = 0
    let cycleTimer = 0
    let resizeTimer = 0
    const lens = { x: 0, y: 0, tx: 0, ty: 0, r: 0, tr: 0, running: false }

    function setPhotoVisibility(visible) {
      for (const image of images) image.style.visibility = visible ? '' : 'hidden'
    }

    // Construído só quando necessário: não disputa com o carregamento da página.
    function ensureLayers() {
      if (layers) return true
      const parent = canvas.parentElement
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      if (!ready || !parent || !width || !height) return false

      const dpr = Math.min(window.devicePixelRatio || 1, DPR_MAX)
      const W = Math.round(width * dpr)
      const H = Math.round(height * dpr)
      const dark = theme === 'dark'
      const styles = getComputedStyle(document.documentElement)
      const token = (name, fallback) => styles.getPropertyValue(name).trim() || fallback
      const text = token('--color-text-primary', dark ? '#f5f5f5' : '#000000')
      // O Hero escuro usa a superfície elevada; o claro, o fundo da página.
      const paper = dark
        ? token('--color-bg-elevated', '#1f1f1f')
        : token('--color-bg-page', '#ffffff')
      const scale = Math.max(0.8, Math.min(1, width / 713))
      const unit = dpr * scale
      // Área da foto que não é cortada pelo wrapper, em pixels do canvas.
      const visible = {
        x: -canvas.offsetLeft * dpr,
        y: -canvas.offsetTop * dpr,
        w: parent.clientWidth * dpr,
        h: parent.clientHeight * dpr,
      }

      const silhouette = buildSilhouette(img, W, H)
      const photo = createCanvas(W, H)
      photo.getContext('2d').drawImage(img, 0, 0, W, H)

      const sketch = buildSketch({
        img, silhouette, width, height, dpr,
        ink: text,
        paper,
        inkIsLight: dark,
        noteFont: noteFontReady ? NOTE_FONT : null,
      })
      const wireframe = buildWireframe({
        silhouette, dpr, unit, visible,
        ink: text,
        paper,
        fill: token('--color-bg-hover-subtle', dark ? '#242424' : '#e5e5e5'),
        compact: width < 600,
      })
      const design = buildDesign({
        photo,
        box: {
          x: sketch.bbox.x * dpr,
          y: sketch.bbox.y * dpr,
          w: sketch.bbox.w * dpr,
          h: sketch.bbox.h * dpr,
        },
        visible,
        dpr,
        scale,
      })
      const editor = buildCode({ img, silhouette, width, dpr, siteIsDark: dark })

      const typedRows = editor.plan.filter((row) => row.entries.length)
      const lastRow = typedRows[typedRows.length - 1]
      const lastEntry = lastRow.entries[lastRow.entries.length - 1]
      const afterLast = lastEntry.index + 1
      const blinkCell = afterLast % editor.cols && editor.filled[afterLast]
        ? { index: afterLast, entry: null }
        : { index: lastEntry.index, entry: lastEntry }

      layers = {
        W, H, dpr, editor, blinkCell,
        rowStagger: TYPE_SPAN / Math.max(1, editor.plan.length),
        photo,
        sketch: sketch.canvas,
        wireframe,
        design,
        codeEmpty: copyCanvas(editor.empty),
        code: copyCanvas(editor.full),
        product: copyCanvas(photo),
        caption: createCanvas(W, H),
        lensCanvas: createCanvas(W, H),
      }

      for (const stage of STAGES) {
        drawCaption(layers[stage.id], stage.label, visible, unit, text)
        if (stage.enter) drawCaption(layers[stage.enter], stage.label, visible, unit, text)
      }
      drawCaption(layers.caption, STAGES[STAGES.length - 1].label, visible, unit, text)

      canvas.width = W
      canvas.height = H
      if (resting) showResting()
      return true
    }

    function ensureRaf() {
      if (!raf) raf = requestAnimationFrame(tick)
    }

    // Relógio próprio: só avança com frames pintados, então aba em segundo plano pausa o ciclo.
    function tick(now) {
      const dt = last ? Math.min(now - last, 50) : 16
      last = now

      let busy = false
      if (cycle) busy = runCycle(cycle, dt)
      else if (lens.running) busy = runLens()

      if (busy) {
        raf = requestAnimationFrame(tick)
      } else {
        raf = 0
        last = 0
      }
    }

    /* ─── Ciclo ─── */

    function scheduleCycle(delay) {
      clearTimeout(cycleTimer)
      cycleTimer = setTimeout(tryStartCycle, delay)
    }

    function tryStartCycle() {
      if (disposed) return
      if (!inView || lens.running || !ensureLayers()) {
        scheduleCycle(800)
        return
      }

      cycle = { stage: 0, from: resting ? 'product' : 'photo', phase: 'transition', t: 0, lastStep: -1 }
      resting = false
      ensureRaf()
    }

    // Produto parado: a foto real volta a aparecer, só a legenda fica no canvas.
    function showResting() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      if (layers) ctx.drawImage(layers.caption, 0, 0)
      setPhotoVisibility(true)
    }

    function drawStage(id) {
      ctx.clearRect(0, 0, layers.W, layers.H)
      ctx.drawImage(layers[id], 0, 0)
    }

    function runCycle(c, dt) {
      c.t += dt
      const stage = STAGES[c.stage]

      if (c.phase === 'transition') {
        if (c.t >= TRANSITION) {
          if (stage.id === 'product') {
            cycle = null
            resting = true
            showResting()
            scheduleCycle(PRODUCT_HOLD)
            return false
          }
          if (stage.id === 'code') startTyping(c)
          else drawStage(stage.id)
          c.phase = 'hold'
          c.t = 0
          return true
        }

        const step = Math.floor(c.t / TRANSITION_STEP)
        if (step !== c.lastStep) {
          c.lastStep = step
          drawTransition(ctx, layers, c.from, stage.enter || stage.id, c.t / TRANSITION)
          // Esconde a foto no mesmo frame em que o canvas desenha: sem piscar.
          if (step === 0) setPhotoVisibility(false)
        }
        return true
      }

      if (stage.id === 'code') runTyping(c)

      if (c.t >= stage.hold) {
        c.from = stage.id
        c.stage += 1
        c.phase = 'transition'
        c.t = 0
        c.lastStep = -1
      }
      return true
    }

    /* ─── Digitação (v4) ─── */

    function startTyping(c) {
      drawStage('codeEmpty')
      ctx.font = layers.editor.font
      ctx.textBaseline = 'middle'
      const rows = layers.editor.plan.length
      c.typing = {
        typed: new Int32Array(rows),
        cursorAt: new Int32Array(rows).fill(-1),
        remaining: layers.editor.plan.filter((row) => row.entries.length).length,
        doneAt: -1,
        blinkOn: false,
      }
    }

    function runTyping(c) {
      const { editor, rowStagger, blinkCell } = layers
      const typing = c.typing

      editor.plan.forEach((row, k) => {
        const total = row.entries.length
        const typed = typing.typed[k]
        const start = k * rowStagger
        if (!total || typed >= total || c.t < start) return

        let next = typed
        while (next < total && start + row.entries[next].order * TYPE_CHAR <= c.t) {
          const entry = row.entries[next]
          paintCell(ctx, editor, entry.index, entry, false)
          next += 1
        }

        if (next < total) {
          // Cursor fica na célula do próximo caractere; ao digitar, a célula é repintada.
          if (typing.cursorAt[k] !== next) {
            paintCell(ctx, editor, row.entries[next].index, null, true)
            typing.cursorAt[k] = next
          }
        } else {
          typing.remaining -= 1
          if (!typing.remaining) typing.doneAt = c.t
        }
        typing.typed[k] = next
      })

      if (typing.doneAt >= 0) {
        const on = Math.floor((c.t - typing.doneAt) / CURSOR_BLINK) % 2 === 0
        if (on !== typing.blinkOn) {
          typing.blinkOn = on
          paintCell(ctx, editor, blinkCell.index, blinkCell.entry, on)
        }
      }
    }

    /* ─── Lente ─── */

    function runLens() {
      lens.x += (lens.tx - lens.x) * 0.25
      lens.y += (lens.ty - lens.y) * 0.25
      // Abre com calma, fecha rápido.
      lens.r += (lens.tr - lens.r) * (lens.tr ? 0.2 : 0.3)

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      if (resting) ctx.drawImage(layers.caption, 0, 0)

      if (lens.tr === 0 && lens.r < 0.5) {
        lens.r = 0
        lens.running = false
        return false
      }

      drawLens(ctx, layers, lens)
      return true
    }

    function onPointerMove(event) {
      if (event.pointerType !== 'mouse' || !finePointer.matches) return
      if (cycle || !ensureLayers()) {
        lens.tr = 0
        return
      }

      const clip = canvas.parentElement.getBoundingClientRect()
      const inside =
        event.clientX >= clip.left && event.clientX <= clip.right &&
        event.clientY >= clip.top && event.clientY <= clip.bottom

      if (!inside) {
        lens.tr = 0
        return
      }

      const rect = canvas.getBoundingClientRect()
      lens.tx = event.clientX - rect.left
      lens.ty = event.clientY - rect.top
      if (!lens.running) {
        lens.x = lens.tx
        lens.y = lens.ty
        lens.running = true
      }
      lens.tr = LENS_RADIUS
      ensureRaf()
    }

    function onPointerLeave() {
      lens.tr = 0
    }

    /* ─── Setup ─── */

    function onResize() {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        if (disposed || !layers) return
        if (Math.round(canvas.clientWidth * layers.dpr) === layers.W) return

        const wasPlaying = Boolean(cycle)
        cycle = null
        lens.running = false
        lens.r = 0
        lens.tr = 0
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        setPhotoVisibility(true)
        layers = null
        ensureLayers()
        if (wasPlaying) scheduleCycle(1200)
      }, 150)
    }

    const resizeObserver = new ResizeObserver(onResize)
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting
    })

    async function setup() {
      const noteFont = document.fonts
        ? Promise.race([
          document.fonts.load('600 24px Caveat').then((faces) => faces.length > 0),
          new Promise((resolve) => setTimeout(() => resolve(false), 2500)),
        ]).catch(() => false)
        : Promise.resolve(false)

      if (!img.complete) {
        await new Promise((resolve) => img.addEventListener('load', resolve, { once: true }))
      }
      try {
        await img.decode()
      } catch {
        return
      }
      noteFontReady = await noteFont
      if (disposed) return

      ready = true
      resizeObserver.observe(canvas)
      intersectionObserver.observe(canvas)
      hoverTarget.addEventListener('pointermove', onPointerMove)
      hoverTarget.addEventListener('pointerleave', onPointerLeave)
      scheduleCycle(Math.max(0, FIRST_DELAY - (performance.now() - mountedAt)))
    }

    setup()

    return () => {
      disposed = true
      clearTimeout(cycleTimer)
      clearTimeout(resizeTimer)
      cancelAnimationFrame(raf)
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
      hoverTarget.removeEventListener('pointermove', onPointerMove)
      hoverTarget.removeEventListener('pointerleave', onPointerLeave)
      setPhotoVisibility(true)
    }
  }, [theme, lightRef, darkRef, hoverRef])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
