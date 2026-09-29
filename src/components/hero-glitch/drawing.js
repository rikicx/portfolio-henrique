import { createCanvas, parseColor } from './canvas'

/* ─── v1 · hypothesis e v2 · exploration ───────────────────────────────────
   Ilustrações em SVG (manequim e HQ), desenhadas no mesmo enquadramento da
   foto (viewBox 1254). O SVG é preto no branco; aqui ele vira tinta e papel
   do tema: preto → texto, branco → fundo, com o antialiasing preservado.
   ───────────────────────────────────────────────────────────────────────── */

export function loadArt(url) {
  const art = new Image()
  art.decoding = 'async'
  art.src = url
  return art.decode().then(() => art)
}

export function buildDrawing({ art, width, height, ink, paper }) {
  const canvas = createCanvas(width, height)
  const ctx = canvas.getContext('2d', { willReadFrequently: true })
  ctx.imageSmoothingQuality = 'high'
  ctx.drawImage(art, 0, 0, width, height)

  const [ir, ig, ib] = parseColor(ink)
  const [pr, pg, pb] = parseColor(paper)
  const data = ctx.getImageData(0, 0, width, height)
  const px = data.data
  for (let p = 0; p < px.length; p += 4) {
    if (!px[p + 3]) continue
    const t = 1 - px[p] / 255
    px[p] = pr + (ir - pr) * t
    px[p + 1] = pg + (ig - pg) * t
    px[p + 2] = pb + (ib - pb) * t
  }
  ctx.putImageData(data, 0, 0)
  return canvas
}
