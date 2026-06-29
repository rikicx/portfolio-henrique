let _isTransitioning = false
const listeners = new Set()

export function setTransitioning(val) {
  _isTransitioning = val
  listeners.forEach((fn) => fn(val))
}

export function getIsTransitioning() {
  return _isTransitioning
}

export function subscribe(fn) {
  listeners.add(fn)
  return () => listeners.delete(fn)
}
