import { SILHOUETTE_ALPHA, SOURCE_SIZE, createCanvas, tint } from './canvas'

/* ─── v1 · hypothesis ──────────────────────────────────────────────────────
   Estudo a lápis e nanquim gerado da foto, por traços (não por filtro):
   contorno com peso maior no lado da sombra, traços curtos seguindo as bordas,
   manchas de preto chapado, hachura em duas direções, linhas de construção
   na cabeça e uma anotação à mão.
   ───────────────────────────────────────────────────────────────────────── */

// Primeiro esboço: traço solto e pouca massa. A fidelidade sobe nas etapas seguintes.
const EDGE_FROM = 0.09
const EDGE_WIDTHS = [0.5, 0.75, 1, 1.3]
const EDGE_ALPHAS = [0.28, 0.45, 0.62, 0.82]
const CONTOUR_WIDTHS = [1, 1.6, 2.3]
// Preto chapado só no mais escuro (cabelo, fundo da jaqueta).
const SPOT_FROM = 0.93
const SPOT_TO = 0.98
const HATCHES = [
  { angle: -60, spacing: 5, from: 0.72, alpha: 0.36, width: 0.65 },
  { angle: 25, spacing: 6, from: 0.86, alpha: 0.3, width: 0.6 },
]

// Coordenadas na foto original.
const CONSTRUCTION = {
  center: [[595, 36], [608, 398]],
  eyes: [[466, 231], [744, 190]],
  skull: { cx: 600, cy: 166, r: 106 },
}
const NOTE = { text: 'laptop = product?', x: 446, y: 700, size: 34, angle: -4 }

function blur(values, w, h) {
  const out = new Float32Array(values.length)
  for (let y = 0; y < h; y += 1) {
    for (let x = 0; x < w; x += 1) {
      let sum = 0
      let count = 0
      for (let dy = -1; dy <= 1; dy += 1) {
        const yy = y + dy
        if (yy < 0 || yy >= h) continue
        for (let dx = -1; dx <= 1; dx += 1) {
          const xx = x + dx
          if (xx < 0 || xx >= w) continue
          sum += values[yy * w + xx]
          count += 1
        }
      }
      out[y * w + x] = sum / count
    }
  }
  return out
}

const smoothstep = (from, to, value) => {
  const t = Math.min(1, Math.max(0, (value - from) / (to - from)))
  return t * t * (3 - 2 * t)
}

export function buildSketch({ img, silhouette, width, height, dpr, ink, paper, inkIsLight, noteFont }) {
  const w = Math.round(width)
  const h = Math.round(height)
  const size = w * h

  const sample = createCanvas(w, h)
  const sampleCtx = sample.getContext('2d', { willReadFrequently: true })
  sampleCtx.drawImage(img, 0, 0, w, h)
  const pixels = sampleCtx.getImageData(0, 0, w, h).data

  const inside = new Uint8Array(size)
  const insideSoft = new Float32Array(size)
  const tone = new Float32Array(size)
  const bbox = { minX: w, minY: h, maxX: 0, maxY: 0 }

  for (let i = 0; i < size; i += 1) {
    const p = i * 4
    if (pixels[p + 3] <= SILHOUETTE_ALPHA) continue
    const lum = (0.2126 * pixels[p] + 0.7152 * pixels[p + 1] + 0.0722 * pixels[p + 2]) / 255
    const x = i % w
    const y = (i / w) | 0
    inside[i] = 1
    insideSoft[i] = 1
    // Tinta escura (tema claro): áreas escuras recebem traço. Tinta clara: o inverso.
    tone[i] = inkIsLight ? lum : 1 - lum
    bbox.minX = Math.min(bbox.minX, x)
    bbox.minY = Math.min(bbox.minY, y)
    bbox.maxX = Math.max(bbox.maxX, x)
    bbox.maxY = Math.max(bbox.maxY, y)
  }

  const soft = blur(blur(tone, w, h), w, h)
  const maskSoft = blur(insideSoft, w, h)

  const magnitude = new Float32Array(size)
  const gradX = new Float32Array(size)
  const gradY = new Float32Array(size)
  for (let y = 1; y < h - 1; y += 1) {
    for (let x = 1; x < w - 1; x += 1) {
      const i = y * w + x
      const gx =
        soft[i - w + 1] + 2 * soft[i + 1] + soft[i + w + 1] -
        soft[i - w - 1] - 2 * soft[i - 1] - soft[i + w - 1]
      const gy =
        soft[i + w - 1] + 2 * soft[i + w] + soft[i + w + 1] -
        soft[i - w - 1] - 2 * soft[i - w] - soft[i - w + 1]
      gradX[i] = gx
      gradY[i] = gy
      magnitude[i] = Math.sqrt(gx * gx + gy * gy) / 4
    }
  }

  const canvas = createCanvas(silhouette.width, silhouette.height)
  const ctx = canvas.getContext('2d')

  // Papel: a silhueta cobre o que está atrás da foto (o nome no Hero), como a foto faz.
  ctx.drawImage(tint(silhouette, paper), 0, 0)

  // Manchas de preto chapado nas áreas mais densas, com borda orgânica.
  const spotW = Math.ceil(w / 3)
  const spotH = Math.ceil(h / 3)
  const spotSmall = createCanvas(spotW, spotH)
  const spotSmallCtx = spotSmall.getContext('2d')
  const spotData = spotSmallCtx.createImageData(spotW, spotH)
  for (let y = 0; y < spotH; y += 1) {
    for (let x = 0; x < spotW; x += 1) {
      const i = Math.min(h - 1, y * 3 + 1) * w + Math.min(w - 1, x * 3 + 1)
      if (!inside[i]) continue
      spotData.data[(y * spotW + x) * 4 + 3] = Math.round(smoothstep(SPOT_FROM, SPOT_TO, soft[i]) * 255)
    }
  }
  spotSmallCtx.putImageData(spotData, 0, 0)

  const spots = createCanvas(canvas.width, canvas.height)
  const spotsCtx = spots.getContext('2d', { willReadFrequently: true })
  spotsCtx.imageSmoothingQuality = 'high'
  spotsCtx.drawImage(spotSmall, 0, 0, spots.width, spots.height)
  const spotPixels = spotsCtx.getImageData(0, 0, spots.width, spots.height)
  for (let p = 3; p < spotPixels.data.length; p += 4) {
    spotPixels.data[p] = spotPixels.data[p] >= 128 ? 255 : 0
  }
  spotsCtx.putImageData(spotPixels, 0, 0)
  ctx.globalAlpha = 0.94
  ctx.drawImage(tint(spots, ink), 0, 0)
  ctx.globalAlpha = 1

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  ctx.strokeStyle = ink
  ctx.fillStyle = ink
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'

  // Linhas de construção: centro do rosto, linha dos olhos e volume do crânio.
  const k = width / SOURCE_SIZE
  ctx.globalAlpha = 0.32
  ctx.lineWidth = 0.75
  ctx.beginPath()
  ctx.moveTo(CONSTRUCTION.center[0][0] * k, CONSTRUCTION.center[0][1] * k)
  ctx.lineTo(CONSTRUCTION.center[1][0] * k, CONSTRUCTION.center[1][1] * k)
  ctx.moveTo(CONSTRUCTION.eyes[0][0] * k, CONSTRUCTION.eyes[0][1] * k)
  ctx.lineTo(CONSTRUCTION.eyes[1][0] * k, CONSTRUCTION.eyes[1][1] * k)
  ctx.stroke()
  ctx.beginPath()
  ctx.arc(
    CONSTRUCTION.skull.cx * k,
    CONSTRUCTION.skull.cy * k,
    CONSTRUCTION.skull.r * k,
    Math.PI * 0.95,
    Math.PI * 2.05,
  )
  ctx.stroke()

  // Hachura: linhas paralelas quebradas, só onde há volume.
  for (const hatch of HATCHES) {
    const angle = (hatch.angle * Math.PI) / 180
    const dx = Math.cos(angle)
    const dy = Math.sin(angle)
    const nx = -dy
    const ny = dx
    const corners = [[0, 0], [w, 0], [0, h], [w, h]]
    const offsets = corners.map(([x, y]) => x * nx + y * ny)
    const along = corners.map(([x, y]) => x * dx + y * dy)
    const path = new Path2D()

    for (let o = Math.min(...offsets); o <= Math.max(...offsets); o += hatch.spacing) {
      let runStart = null
      let last = null
      for (let t = Math.min(...along); t <= Math.max(...along); t += 1.5) {
        const x = nx * o + dx * t
        const y = ny * o + dy * t
        const valid = x >= 0 && y >= 0 && x < w && y < h
        const i = valid ? (y | 0) * w + (x | 0) : -1
        const on = valid && inside[i] && soft[i] >= hatch.from && Math.random() > 0.025

        if (on) {
          if (!runStart) runStart = [x, y]
          last = [x, y]
        } else if (runStart) {
          if (Math.hypot(last[0] - runStart[0], last[1] - runStart[1]) > 5) {
            path.moveTo(runStart[0] + (Math.random() - 0.5) * 0.8, runStart[1] + (Math.random() - 0.5) * 0.8)
            path.lineTo(last[0] + (Math.random() - 0.5) * 0.8, last[1] + (Math.random() - 0.5) * 0.8)
          }
          runStart = null
        }
      }
    }

    ctx.globalAlpha = hatch.alpha
    ctx.lineWidth = hatch.width
    ctx.stroke(path)
  }

  // Traços curtos ao longo das bordas internas, com peso pela força da borda.
  const edgePaths = EDGE_WIDTHS.map(() => new Path2D())
  for (let y = 2; y < h - 2; y += 2) {
    for (let x = 2; x < w - 2; x += 2) {
      const i = y * w + x
      if (!inside[i]) continue
      const m = magnitude[i]
      if (m < EDGE_FROM) continue

      const ux = gradX[i] / (m * 4)
      const uy = gradY[i] / (m * 4)
      const ahead = magnitude[Math.round(y + uy * 1.5) * w + Math.round(x + ux * 1.5)] || 0
      const behind = magnitude[Math.round(y - uy * 1.5) * w + Math.round(x - ux * 1.5)] || 0
      if (m < ahead || m < behind) continue

      const strength = Math.min(1, (m - EDGE_FROM) / 0.3)
      const bucket = Math.min(3, Math.floor(strength * 4))
      const length = 3 + 8 * strength
      const turn = (Math.random() - 0.5) * 0.2
      const tx = -uy * Math.cos(turn) - ux * Math.sin(turn)
      const ty = ux * Math.cos(turn) - uy * Math.sin(turn)
      edgePaths[bucket].moveTo(x - (tx * length) / 2, y - (ty * length) / 2)
      edgePaths[bucket].lineTo(x + (tx * length) / 2, y + (ty * length) / 2)
    }
  }
  edgePaths.forEach((path, bucket) => {
    ctx.globalAlpha = EDGE_ALPHAS[bucket]
    ctx.lineWidth = EDGE_WIDTHS[bucket]
    ctx.stroke(path)
  })

  // Contorno: mais pesado onde a normal aponta para a sombra (baixo/direita), com um repasse solto.
  const contourPaths = CONTOUR_WIDTHS.map(() => new Path2D())
  const loosePath = new Path2D()
  let boundaryCount = 0
  for (let y = 1; y < h - 1; y += 1) {
    for (let x = 1; x < w - 1; x += 1) {
      const i = y * w + x
      if (!inside[i] || (x + y) % 2) continue
      if (inside[i - 1] && inside[i + 1] && inside[i - w] && inside[i + w]) continue

      let nx = maskSoft[i - 1] - maskSoft[i + 1]
      let ny = maskSoft[i - w] - maskSoft[i + w]
      const length = Math.hypot(nx, ny) || 1
      nx /= length
      ny /= length
      const shade = Math.max(0, nx * 0.55 + ny * 0.83)
      const bucket = shade < 0.3 ? 0 : shade < 0.7 ? 1 : 2
      const tx = -ny
      const ty = nx
      contourPaths[bucket].moveTo(x - tx * 2.5, y - ty * 2.5)
      contourPaths[bucket].lineTo(x + tx * 2.5, y + ty * 2.5)

      boundaryCount += 1
      if (boundaryCount % 5 === 0) {
        const drift = (Math.random() - 0.3) * 2.2
        loosePath.moveTo(x - tx * 4.5 + nx * drift, y - ty * 4.5 + ny * drift)
        loosePath.lineTo(x + tx * 4.5 + nx * drift, y + ty * 4.5 + ny * drift)
      }
    }
  }
  ctx.globalAlpha = 0.95
  contourPaths.forEach((path, bucket) => {
    ctx.lineWidth = CONTOUR_WIDTHS[bucket]
    ctx.stroke(path)
  })
  ctx.globalAlpha = 0.45
  ctx.lineWidth = 0.6
  ctx.stroke(loosePath)

  // Anotação de estudo, à mão.
  if (noteFont) {
    const fontSize = Math.max(11, NOTE.size * k)
    ctx.save()
    ctx.translate(NOTE.x * k, NOTE.y * k)
    ctx.rotate((NOTE.angle * Math.PI) / 180)
    ctx.globalAlpha = 0.9
    ctx.font = `600 ${fontSize}px ${noteFont}`
    ctx.textBaseline = 'alphabetic'
    ctx.fillText(NOTE.text, 0, 0)

    const textWidth = ctx.measureText(NOTE.text).width
    ctx.lineWidth = 1
    ctx.beginPath()
    for (let x = 0; x <= textWidth; x += 4) {
      const y = fontSize * 0.28 + Math.sin(x / 7) * 1.4
      if (x === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.stroke()
    ctx.restore()
  }

  ctx.setTransform(1, 0, 0, 1, 0, 0)
  ctx.globalAlpha = 1

  return {
    canvas,
    bbox: { x: bbox.minX, y: bbox.minY, w: bbox.maxX - bbox.minX, h: bbox.maxY - bbox.minY },
  }
}
