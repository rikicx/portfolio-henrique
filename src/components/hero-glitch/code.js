import { SILHOUETTE_ALPHA, createCanvas, tint } from './canvas'

/* ─── v4 · prototype ───────────────────────────────────────────────────────
   Editor com as cores do VS Code recortado na silhueta. O código é digitado
   linha a linha (o plano de digitação sai daqui; quem anima é o HeroGlitch).
   Tema claro do site → Dark+ · tema escuro do site → Light+.
   ───────────────────────────────────────────────────────────────────────── */

export const EDITOR_FONT = 'Menlo, Monaco, Consolas, "Courier New", monospace'

const SNIPPET = [
  '// hypothesis → product',
  "import { discovery, explore } from '@henrique/process'",
  "import { ai } from '@henrique/tools'",
  '',
  'export function Henrique() {',
  "  const insights = discovery.run({ depth: 'deep' })",
  '  const flows = explore(insights, { paths: 12 })',
  '',
  '  return (',
  '    <DesignLeader focus="Product + AI">',
  '      {flows.map((flow) => (',
  '        <Prototype key={flow.id} flow={flow} />',
  '      ))}',
  '    </DesignLeader>',
  '  )',
  '}',
  '',
  'const product = await ai.build(hypothesis)',
]

const PALETTES = {
  dark: {
    bg: '#1e1e1e', punct: '#d4d4d4', control: '#c586c0', keyword: '#569cd6',
    fn: '#dcdcaa', variable: '#9cdcfe', string: '#ce9178', comment: '#6a9955',
    component: '#4ec9b0', attr: '#9cdcfe', number: '#b5cea8', cursor: '#aeafad',
    brackets: ['#ffd700', '#da70d6', '#179fff'],
  },
  light: {
    bg: '#ffffff', punct: '#000000', control: '#af00db', keyword: '#0000ff',
    fn: '#795e26', variable: '#001080', string: '#a31515', comment: '#008000',
    component: '#267f99', attr: '#e50000', number: '#098658', cursor: '#000000',
    brackets: ['#0431fa', '#319331', '#7b3814'],
  },
}

const CONTROL = new Set(['import', 'export', 'from', 'return', 'await'])
const STORAGE = new Set(['const', 'function'])
const TOKEN = /\/\/.*$|'[^']*'|"[^"]*"|<\/?[A-Z]\w*|\d+|[A-Za-z_$][\w$]*/g

// Cor de cada caractere, com colorização de pares de colchetes como no VS Code.
function colorize(palette) {
  let depth = 0

  return SNIPPET.map((line) => {
    const types = new Array(line.length).fill('punct')
    const set = (start, end, type) => types.fill(type, start, end)

    for (const match of line.matchAll(TOKEN)) {
      const text = match[0]
      const start = match.index
      const end = start + text.length
      const next = line[end]

      if (text.startsWith('//')) set(start, end, 'comment')
      else if (text[0] === "'" || text[0] === '"') set(start, end, 'string')
      else if (text[0] === '<') set(start + (text[1] === '/' ? 2 : 1), end, 'component')
      else if (/^\d/.test(text)) set(start, end, 'number')
      else if (CONTROL.has(text)) set(start, end, 'control')
      else if (STORAGE.has(text)) set(start, end, 'keyword')
      else if (next === '(') set(start, end, 'fn')
      else if (next === '=' && line[end + 1] !== '>' && line.includes('<')) set(start, end, 'attr')
      else if (/^[A-Z]/.test(text)) set(start, end, 'component')
      else set(start, end, 'variable')
    }

    const colors = types.map((type) => palette[type])
    for (let i = 0; i < line.length; i += 1) {
      if (types[i] !== 'punct') continue
      const char = line[i]
      if ('({['.includes(char)) {
        colors[i] = palette.brackets[depth % 3]
        depth += 1
      } else if (')}]'.includes(char)) {
        depth = Math.max(0, depth - 1)
        colors[i] = palette.brackets[depth % 3]
      }
    }

    return { text: line, colors }
  })
}

export function buildCode({ img, silhouette, width, dpr, siteIsDark }) {
  const palette = siteIsDark ? PALETTES.light : PALETTES.dark
  const { width: W, height: H } = silhouette
  const size = Math.max(7, Math.min(11, width / 64))
  const cellH = Math.max(2, Math.round(size * dpr))
  const cellW = Math.max(2, Math.round(size * 0.6 * dpr))
  const cols = Math.floor(W / cellW)
  const rows = Math.floor(H / cellH)
  const font = `500 ${Math.round(cellH * 0.9)}px ${EDITOR_FONT}`

  const sample = createCanvas(cols, rows)
  const sampleCtx = sample.getContext('2d', { willReadFrequently: true })
  sampleCtx.drawImage(img, 0, 0, cols, rows)
  const pixels = sampleCtx.getImageData(0, 0, cols, rows).data
  const filled = new Uint8Array(cols * rows)
  for (let i = 0; i < filled.length; i += 1) filled[i] = pixels[i * 4 + 3] > SILHOUETTE_ALPHA ? 1 : 0

  const empty = tint(silhouette, palette.bg)
  const full = createCanvas(W, H)
  const fullCtx = full.getContext('2d')
  fullCtx.drawImage(empty, 0, 0)
  fullCtx.font = font
  fullCtx.textBaseline = 'middle'

  const lines = colorize(palette)
  const plan = []
  let lineCursor = 0

  for (let row = 0; row < rows; row += 1) {
    let from = -1
    let to = -1
    for (let col = 0; col < cols; col += 1) {
      if (!filled[row * cols + col]) continue
      if (from < 0) from = col
      to = col
    }
    if (from < 0) continue

    const entries = []
    let col = from
    const place = (line) => {
      for (let j = 0; j < line.text.length && col + j <= to; j += 1) {
        const index = row * cols + col + j
        const char = line.text[j]
        if (char === ' ' || !filled[index]) continue
        const p = index * 4
        const lum = (0.2126 * pixels[p] + 0.7152 * pixels[p + 1] + 0.0722 * pixels[p + 2]) / 255
        // Um pouco da foto sobrevive: áreas que contrastam com o editor ficam mais intensas.
        const amount = siteIsDark ? 1 - lum : lum
        entries.push({ index, char, color: line.colors[j], alpha: 0.62 + 0.38 * amount, order: col + j - from })
      }
      col += line.text.length
    }

    let line = lines[lineCursor % lines.length]
    lineCursor += 1
    place(line)
    // Linhas largas (pernas) recebem a próxima instrução, para a silhueta não ficar vazia.
    while (line.text && to - col > 22) {
      line = lines[lineCursor % lines.length]
      lineCursor += 1
      if (!line.text) break
      col += 2
      place(line)
    }

    for (const entry of entries) paintEntry(fullCtx, { cols, cellW, cellH }, entry)
    plan.push({ from, entries })
  }

  return { empty, full, plan, palette, font, cols, cellW, cellH, filled }
}

export function paintEntry(ctx, code, entry) {
  const x = (entry.index % code.cols) * code.cellW
  const y = Math.floor(entry.index / code.cols) * code.cellH
  ctx.globalAlpha = entry.alpha
  ctx.fillStyle = entry.color
  ctx.fillText(entry.char, x, y + code.cellH / 2)
  ctx.globalAlpha = 1
}

// Redesenha uma célula do editor: fundo, caractere (se houver) e cursor (se pedido).
export function paintCell(ctx, code, index, entry, cursor) {
  const x = (index % code.cols) * code.cellW
  const y = Math.floor(index / code.cols) * code.cellH
  ctx.clearRect(x, y, code.cellW, code.cellH)
  ctx.drawImage(code.empty, x, y, code.cellW, code.cellH, x, y, code.cellW, code.cellH)
  if (!code.filled[index]) return
  if (entry) paintEntry(ctx, code, entry)
  if (cursor) {
    ctx.fillStyle = code.palette.cursor
    ctx.fillRect(x, y + 1, Math.max(1, Math.round(code.cellW * 0.22)), code.cellH - 2)
  }
}
