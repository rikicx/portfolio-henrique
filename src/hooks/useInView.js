import { useRef, useEffect, useState } from 'react'

/**
 * Observes whether an element has entered the viewport.
 *
 * @param {Object} options
 * @param {number}  options.threshold  - Fraction of element visible to trigger (default 0.12)
 * @param {string}  options.rootMargin - Margin around root (default "0px")
 * @param {boolean} options.once       - Disconnect after first intersection (default true)
 * @returns {[React.RefObject, boolean]} [ref, isVisible]
 *
 * Usage:
 *   const [sectionRef, isVisible] = useInView()
 *   const [ref, seen] = useInView({ threshold: 0.2, once: false })
 */
export function useInView({ threshold = 0.12, rootMargin = '0px', once = true } = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Treat as visible in environments without IntersectionObserver (SSR, old browsers)
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (once) {
          if (entry.isIntersecting) {
            setVisible(true)
            obs.disconnect()
          }
        } else {
          setVisible(entry.isIntersecting)
        }
      },
      { threshold, rootMargin }
    )

    obs.observe(el)

    return () => obs.disconnect()
  }, [threshold, rootMargin, once])

  return [ref, visible]
}
