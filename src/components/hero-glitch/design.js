import { copyCanvas } from './canvas'

/* ─── v3 · design ──────────────────────────────────────────────────────────
   A foto selecionada no Figma: borda azul, alças, medida e nome do frame.
   ───────────────────────────────────────────────────────────────────────── */

const FIGMA_BLUE = '#0d99ff'

export function buildDesign({ photo, box, visible, dpr, scale }) {
  const canvas = copyCanvas(photo)
  const ctx = canvas.getContext('2d')

  const unit = dpr * scale
  const inset = 4 * unit
  const left = Math.max(visible.x + inset, box.x - 6 * unit)
  const top = Math.max(visible.y + inset, box.y - 6 * unit)
  const right = Math.min(visible.x + visible.w - inset, box.x + box.w + 6 * unit)
  const bottom = Math.min(visible.y + visible.h - inset, box.y + box.h + 6 * unit)

  ctx.strokeStyle = FIGMA_BLUE
  ctx.lineWidth = Math.max(1, Math.round(1.5 * dpr))
  ctx.strokeRect(left, top, right - left, bottom - top)

  const handle = Math.round(8 * unit)
  ctx.fillStyle = '#ffffff'
  for (const [x, y] of [[left, top], [right, top], [left, bottom], [right, bottom]]) {
    ctx.fillRect(x - handle / 2, y - handle / 2, handle, handle)
    ctx.strokeRect(x - handle / 2, y - handle / 2, handle, handle)
  }

  const fontPx = Math.round(11 * unit)
  ctx.font = `600 ${fontPx}px "Inter Tight", system-ui, sans-serif`
  ctx.textBaseline = 'middle'
  ctx.textAlign = 'center'

  const size = `${Math.round((right - left) / dpr)} × ${Math.round((bottom - top) / dpr)}`
  const pillW = ctx.measureText(size).width + 12 * unit
  const pillH = fontPx + 8 * unit
  let pillY = bottom + 6 * unit
  if (pillY + pillH > visible.y + visible.h - inset) pillY = bottom - pillH - 8 * unit
  const pillX = (left + right) / 2 - pillW / 2

  ctx.fillStyle = FIGMA_BLUE
  ctx.beginPath()
  if (ctx.roundRect) ctx.roundRect(pillX, pillY, pillW, pillH, 3 * unit)
  else ctx.rect(pillX, pillY, pillW, pillH)
  ctx.fill()
  ctx.fillStyle = '#ffffff'
  ctx.fillText(size, pillX + pillW / 2, pillY + pillH / 2)

  ctx.textAlign = 'left'
  ctx.textBaseline = 'bottom'
  ctx.fillStyle = FIGMA_BLUE
  let nameY = top - 6 * unit
  if (nameY - fontPx < visible.y + inset) nameY = top + fontPx + 8 * unit
  ctx.fillText('Henrique / Hero', left + 2 * unit, nameY)

  return canvas
}
