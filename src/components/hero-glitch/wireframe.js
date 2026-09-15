import { SOURCE_SIZE, createCanvas, tint } from './canvas'

/* ─── v2 · exploration ─────────────────────────────────────────────────────
   Wireframe no formato exato do corpo: a silhueta real vira o bloco cinza,
   e por dentro entram os componentes do rascunho do Henrique (tronco, ombros,
   braços, mãos, notebook, pernas, pés), recortados pela silhueta.
   Grid de colunas, medidas e um fluxo ligando estratégia à inovação.
   Coordenadas no espaço da foto original.
   ───────────────────────────────────────────────────────────────────────── */

const LABEL_FONT = 'ui-monospace, "SF Mono", Menlo, Consolas, monospace'

const GLASSES = {
  lenses: [[549, 218, 36, 30], [636, 206, 34, 28]],
  bar: [[468, 230], [738, 191]],
}
// Maxilar em "V" (separa o rosto do capuz) e pescoço entre o queixo e o tronco.
const JAW = [[512, 250], [548, 336], [606, 372], [676, 330], [706, 250]]
const NECK = { from: [610, 352], to: [610, 402], width: 76 }
const TORSO = [[392, 420], [560, 390], [700, 390], [880, 418], [872, 770], [404, 770]]
const SHOULDERS = [[412, 482, 62], [868, 476, 62]]
const ARMS = [
  [[335, 470], [305, 770], 115],
  [[310, 780], [430, 815], 95],
  [[930, 470], [965, 770], 115],
  [[960, 780], [845, 815], 95],
]
const HANDS = [[430, 818, 42], [845, 815, 42]]
const LAPTOP = [408, 640, 442, 235]
const LEGS = [
  { cx: 462, cy: 977, rx: 275, ry: 72, angle: 24.4, label: 'R LEG' },
  { cx: 805, cy: 955, rx: 278, ry: 72, angle: -21.2, label: 'L LEG' },
]
const FEET = [
  { cx: 435, cy: 1070, rx: 108, ry: 62, angle: -6 },
  { cx: 828, cy: 1088, rx: 125, ry: 64, angle: 6 },
]
// Medidas (redlines) e o fluxo cabeça → notebook.
const DIMENSIONS = [
  { from: [408, 664], to: [850, 664], label: '442' },
  { from: [744, 70], to: [744, 368], label: '298' },
]
const FLOW = { from: [700, 300], control: [760, 470], to: [772, 632] }
const GRID_COLUMNS = 6

const rad = (degrees) => (degrees * Math.PI) / 180

function polygonPath(ctx, points) {
  ctx.beginPath()
  points.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)))
  ctx.closePath()
}

function capsulePath(ctx, [x1, y1], [x2, y2], width) {
  const r = width / 2
  const length = Math.hypot(x2 - x1, y2 - y1)
  ctx.save()
  ctx.translate(x1, y1)
  ctx.rotate(Math.atan2(y2 - y1, x2 - x1))
  ctx.beginPath()
  ctx.moveTo(0, -r)
  ctx.lineTo(length, -r)
  ctx.arc(length, 0, r, -Math.PI / 2, Math.PI / 2)
  ctx.lineTo(0, r)
  ctx.arc(0, 0, r, Math.PI / 2, (Math.PI * 3) / 2)
  ctx.closePath()
  ctx.restore()
}

function ellipsePath(ctx, { cx, cy, rx, ry, angle }) {
  ctx.beginPath()
  ctx.ellipse(cx, cy, rx, ry, rad(angle), 0, Math.PI * 2)
}

function circlePath(ctx, [cx, cy, r]) {
  ctx.beginPath()
  ctx.arc(cx, cy, r, 0, Math.PI * 2)
}

function clippedLines(ctx, clip, lines) {
  ctx.save()
  clip()
  ctx.clip()
  ctx.beginPath()
  for (const [[x1, y1], [x2, y2]] of lines) {
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
  }
  ctx.stroke()
  ctx.restore()
}

function arrowHead(ctx, [x, y], angle, size) {
  ctx.beginPath()
  ctx.moveTo(x - Math.cos(angle - 0.45) * size, y - Math.sin(angle - 0.45) * size)
  ctx.lineTo(x, y)
  ctx.lineTo(x - Math.cos(angle + 0.45) * size, y - Math.sin(angle + 0.45) * size)
  ctx.stroke()
}

// Silhueta deslocada em volta: contorno (menos a própria silhueta) ou versão engordada.
function spread(silhouette, color, distance, keepInside) {
  const canvas = createCanvas(silhouette.width, silhouette.height)
  const ctx = canvas.getContext('2d')
  const source = tint(silhouette, color)
  for (let k = 0; k < 8; k += 1) {
    const angle = (k * Math.PI) / 4
    ctx.drawImage(source, Math.cos(angle) * distance, Math.sin(angle) * distance)
  }
  ctx.globalCompositeOperation = keepInside ? 'source-over' : 'destination-out'
  ctx.drawImage(keepInside ? source : silhouette, 0, 0)
  return canvas
}

export function buildWireframe({ silhouette, dpr, unit, ink, paper, fill, visible, compact }) {
  const { width: W, height: H } = silhouette
  const canvas = createCanvas(W, H)
  const ctx = canvas.getContext('2d')

  // Grid de colunas atrás do corpo, só na área visível da foto.
  const margin = 16 * unit
  const gutter = 12 * unit
  const columnW = (visible.w - margin * 2 - gutter * (GRID_COLUMNS - 1)) / GRID_COLUMNS
  ctx.fillStyle = ink
  ctx.globalAlpha = 0.045
  for (let i = 0; i < GRID_COLUMNS; i += 1) {
    ctx.fillRect(visible.x + margin + i * (columnW + gutter), visible.y, columnW, visible.h)
  }
  ctx.globalAlpha = 1

  // Corpo: a silhueta real em cinza de wireframe (cobre o nome atrás da foto) com contorno.
  ctx.drawImage(tint(silhouette, fill), 0, 0)
  ctx.globalAlpha = 0.9
  ctx.drawImage(spread(silhouette, ink, 1.8 * unit, false), 0, 0)
  ctx.globalAlpha = 1

  const k = W / SOURCE_SIZE
  const px = (value) => value / k

  // Componentes internos, desenhados à parte e recortados pela silhueta.
  const parts = createCanvas(W, H)
  const partsCtx = parts.getContext('2d')
  partsCtx.setTransform(k, 0, 0, k, 0, 0)
  partsCtx.lineCap = 'round'
  partsCtx.lineJoin = 'round'
  partsCtx.strokeStyle = ink

  partsCtx.fillStyle = paper
  partsCtx.fillRect(...LAPTOP)

  partsCtx.lineWidth = px(1.3 * unit)
  partsCtx.globalAlpha = 0.75
  const shapes = [
    () => polygonPath(partsCtx, TORSO),
    () => capsulePath(partsCtx, NECK.from, NECK.to, NECK.width),
    ...ARMS.map(([from, to, size]) => () => capsulePath(partsCtx, from, to, size)),
    ...SHOULDERS.map((circle) => () => circlePath(partsCtx, circle)),
    ...HANDS.map((circle) => () => circlePath(partsCtx, circle)),
    ...LEGS.map((leg) => () => ellipsePath(partsCtx, leg)),
    ...FEET.map((foot) => () => ellipsePath(partsCtx, foot)),
  ]
  for (const shape of shapes) {
    shape()
    partsCtx.stroke()
  }

  partsCtx.globalAlpha = 0.9
  partsCtx.lineWidth = px(1.6 * unit)
  partsCtx.strokeRect(...LAPTOP)

  // Marcações: cruz nos ombros, X nas mãos (placeholder de imagem).
  partsCtx.globalAlpha = 0.5
  partsCtx.lineWidth = px(1.1 * unit)
  for (const circle of SHOULDERS) {
    const [cx, cy, r] = circle
    clippedLines(partsCtx, () => circlePath(partsCtx, circle), [
      [[cx - r, cy + 10], [cx + r, cy + 10]],
      [[cx, cy - r], [cx, cy + r]],
    ])
  }
  for (const circle of HANDS) {
    const [cx, cy, r] = circle
    clippedLines(partsCtx, () => circlePath(partsCtx, circle), [
      [[cx - r, cy - r], [cx + r, cy + r]],
      [[cx + r, cy - r], [cx - r, cy + r]],
    ])
  }

  partsCtx.setTransform(1, 0, 0, 1, 0, 0)
  partsCtx.globalAlpha = 1
  partsCtx.globalCompositeOperation = 'destination-in'
  partsCtx.drawImage(spread(silhouette, '#000', 1.5 * unit, true), 0, 0)
  ctx.drawImage(parts, 0, 0)

  ctx.setTransform(k, 0, 0, k, 0, 0)
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  ctx.strokeStyle = ink
  ctx.fillStyle = ink

  // Maxilar e óculos (a haste passa do rosto, como no rascunho).
  ctx.globalAlpha = 0.9
  ctx.lineWidth = px(1.6 * unit)
  ctx.beginPath()
  JAW.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)))
  ctx.moveTo(...GLASSES.bar[0])
  ctx.lineTo(...GLASSES.bar[1])
  ctx.stroke()
  for (const [cx, cy, rx, ry] of GLASSES.lenses) {
    ctx.beginPath()
    ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2)
    ctx.fillStyle = paper
    ctx.fill()
    ctx.stroke()
  }
  ctx.fillStyle = ink

  const label = (text, x, y, size, angle = 0) => {
    const fontSize = px(Math.max(8 * dpr, size * k))
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(rad(angle))
    ctx.font = `600 ${fontSize}px ${LABEL_FONT}`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(text, 0, 0)
    ctx.restore()
  }

  // Medidas: linha fina com terminais e o valor.
  ctx.globalAlpha = 0.7
  ctx.lineWidth = px(1 * unit)
  const tick = px(5 * unit)
  for (const { from, to, label: value } of DIMENSIONS) {
    const vertical = from[0] === to[0]
    ctx.beginPath()
    ctx.moveTo(...from)
    ctx.lineTo(...to)
    for (const [x, y] of [from, to]) {
      ctx.moveTo(vertical ? x - tick : x, vertical ? y : y - tick)
      ctx.lineTo(vertical ? x + tick : x, vertical ? y : y + tick)
    }
    ctx.stroke()
    if (!compact) {
      const mid = [(from[0] + to[0]) / 2, (from[1] + to[1]) / 2]
      label(value, vertical ? mid[0] + 16 : mid[0], vertical ? mid[1] : mid[1] - 14, 16, vertical ? 90 : 0)
    }
  }

  // Fluxo: da estratégia (cabeça) para a inovação (notebook).
  ctx.setLineDash([px(4 * unit), px(3 * unit)])
  ctx.beginPath()
  ctx.moveTo(...FLOW.from)
  ctx.quadraticCurveTo(...FLOW.control, ...FLOW.to)
  ctx.stroke()
  ctx.setLineDash([])
  const flowAngle = Math.atan2(FLOW.to[1] - FLOW.control[1], FLOW.to[0] - FLOW.control[0])
  arrowHead(ctx, FLOW.to, flowAngle, px(7 * unit))

  ctx.globalAlpha = 0.85
  label('STRATEGY', 600, 112, 23)
  label('MACHINE', 600, 140, 23)
  label('"INNOVATION', 629, 742, 28)
  label('BAKERY"', 629, 778, 28)

  if (!compact) {
    label('CHEST', 632, 556, 22)
    label('NECK', NECK.from[0], (NECK.from[1] + NECK.to[1]) / 2 + 4, 14)
    SHOULDERS.forEach(([cx, cy]) => label('SHOULDER', cx, cy - 26, 15))
    LEGS.forEach((leg) => label(leg.label, leg.cx, leg.cy, 22, leg.angle))
    FEET.forEach((foot) => label('FOOT', foot.cx, foot.cy, 18, foot.angle))
  }

  ctx.setTransform(1, 0, 0, 1, 0, 0)
  ctx.globalAlpha = 1
  return canvas
}
