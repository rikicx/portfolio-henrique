import { useEffect } from 'react'

/**
 * Flags <html data-footer-revealed> while the footer is showing at the
 * bottom of the viewport, so fixed UI outside the page tree (floating
 * actions) can step aside in CSS.
 *
 * The footer is position: sticky; bottom: 0 behind <main>, so it always
 * intersects the viewport geometrically — observing it says nothing. What
 * reveals it is <main>'s bottom edge rising above the viewport's bottom
 * edge. The root is shrunk to a zero-height line at the bottom of the
 * viewport: <main> intersects that line until the footer starts to show.
 *
 * @param {React.RefObject<HTMLElement>} mainRef
 */
export function useFooterRevealed(mainRef) {
  useEffect(() => {
    const main = mainRef.current
    const root = document.documentElement
    if (!main || typeof IntersectionObserver === 'undefined') return undefined

    const obs = new IntersectionObserver(
      // <main> starts at the top of the page, so it can only leave the
      // line by rising above it.
      ([entry]) => root.toggleAttribute('data-footer-revealed', !entry.isIntersecting),
      { rootMargin: '-100% 0px 0px 0px' },
    )

    obs.observe(main)

    return () => {
      obs.disconnect()
      root.removeAttribute('data-footer-revealed')
    }
  }, [mainRef])
}
