// Tamanho da foto original do Hero; as coordenadas das etapas usam esse espaço.
export const SOURCE_SIZE = 1254

// A foto tem sombra semitransparente no chão; só alpha acima disso conta como silhueta.
export const SILHOUETTE_ALPHA = 220

export function createCanvas(width, height) {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  return canvas
}

export function copyCanvas(source) {
  const canvas = createCanvas(source.width, source.height)
  canvas.getContext('2d').drawImage(source, 0, 0)
  return canvas
}

export function tint(source, color) {
  const canvas = copyCanvas(source)
  const ctx = canvas.getContext('2d')
  ctx.globalCompositeOperation = 'source-in'
  ctx.fillStyle = color
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  return canvas
}

export function parseColor(color) {
  const ctx = createCanvas(1, 1).getContext('2d', { willReadFrequently: true })
  ctx.fillStyle = color
  ctx.fillRect(0, 0, 1, 1)
  return ctx.getImageData(0, 0, 1, 1).data
}

// Silhueta com borda dura (sem a sombra do chão), no tamanho do canvas.
export function buildSilhouette(img, width, height) {
  const canvas = createCanvas(width, height)
  const ctx = canvas.getContext('2d', { willReadFrequently: true })
  ctx.drawImage(img, 0, 0, width, height)
  const data = ctx.getImageData(0, 0, width, height)
  for (let p = 3; p < data.data.length; p += 4) {
    data.data[p] = data.data[p] > SILHOUETTE_ALPHA ? 255 : 0
  }
  ctx.putImageData(data, 0, 0)
  return canvas
}
