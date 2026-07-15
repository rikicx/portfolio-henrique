import { useEffect, useRef, useState } from 'react'
import styles from './CustomCursor.module.css'

// Tuning constants — no magic numbers scattered through the RAF loop.
const RING_EASE = 0.2
const SCALE_EASE = 0.18
const HOVER_EASE = 0.25
const HOVER_SCALE = 1.4
const PRESSED_SCALE = 0.85
const SCROLL_STRETCH_X = 0.82
const SCROLL_STRETCH_Y = 1.32
const SCROLL_DEBOUNCE_MS = 150

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input[type="submit"], input[type="button"], summary, label'
const TEXT_INPUT_SELECTOR = 'input, textarea, [contenteditable="true"]'
const DISABLED_SELECTOR = '[disabled], [aria-disabled="true"]'
// Marks a surface whose background contrasts with the page (e.g. the
// Footer, which is always the inverse of the current theme). While over
// it, the ring/dot swap to --color-text-on-inverse instead of computing
// any color — that token already tracks the surface's real contrast.
const CURSOR_INVERSE_SELECTOR = '[data-cursor-theme="light"]'

/**
 * Minimalist custom cursor: a soft outer ring (light lag) plus a precise
 * center dot. The ring stretches vertically while the page is scrolling and
 * relaxes back once scrolling settles. Position is applied every animation
 * frame straight to the DOM (refs, not state) so the rest of the app never
 * re-renders because the pointer moved.
 *
 * Keyboard focus (:focus-visible) on a link/button reproduces the same
 * enlarged ring as mouse hover, at that element's position — Tab-only users
 * get the same feedback as pointer users. Pressing an interactive target
 * (mouse or Enter/Space) compresses the ring slightly.
 *
 * Inactive on touch devices (pointer: coarse) and simplified under
 * prefers-reduced-motion (no easing lag, no scroll deformation).
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  const ringRef = useRef(null)
  const dotRef = useRef(null)

  // Mutable animation state — refs so updates never trigger a re-render.
  const pointer = useRef({ x: -100, y: -100 })
  const ring = useRef({ x: -100, y: -100, scaleX: 1, scaleY: 1 })
  const hoverScale = useRef(1)
  const isVisible = useRef(false)
  const isScrolling = useRef(false)
  const isHoveringInteractive = useRef(false)
  const isOverText = useRef(false)
  const isPressed = useRef(false)
  const focusTarget = useRef(null) // { x, y } while a :focus-visible target is active
  const isOverInverseSurface = useRef(false)

  const rafId = useRef(null)
  const scrollTimeoutId = useRef(null)

  // React to pointer-precision / reduced-motion changes for the lifetime of
  // the page (e.g. a touch-capable laptop plugging in a mouse mid-session).
  useEffect(() => {
    const pointerFineQuery = window.matchMedia('(pointer: fine)')
    const reducedMotionQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    )

    const updatePointer = () => setEnabled(pointerFineQuery.matches)
    const updateMotion = () => setReducedMotion(reducedMotionQuery.matches)

    updatePointer()
    updateMotion()

    pointerFineQuery.addEventListener('change', updatePointer)
    reducedMotionQuery.addEventListener('change', updateMotion)

    return () => {
      pointerFineQuery.removeEventListener('change', updatePointer)
      reducedMotionQuery.removeEventListener('change', updateMotion)
    }
  }, [])

  useEffect(() => {
    if (!enabled) return undefined

    document.body.classList.add(styles.hideNativeCursor)

    const handlePointerMove = (event) => {
      pointer.current.x = event.clientX
      pointer.current.y = event.clientY
      isVisible.current = true
      // Real mouse movement always reclaims the cursor from a stale
      // keyboard-focus position.
      focusTarget.current = null
    }

    const handlePointerLeaveWindow = () => {
      isVisible.current = false
    }

    const triggerScrollState = () => {
      isScrolling.current = true
      if (scrollTimeoutId.current) {
        window.clearTimeout(scrollTimeoutId.current)
      }
      scrollTimeoutId.current = window.setTimeout(() => {
        isScrolling.current = false
      }, SCROLL_DEBOUNCE_MS)
    }

    const handlePointerOver = (event) => {
      const target = event.target
      if (!(target instanceof Element)) return

      isOverInverseSurface.current = !!target.closest(CURSOR_INVERSE_SELECTOR)

      if (target.closest(DISABLED_SELECTOR)) {
        isHoveringInteractive.current = false
        isOverText.current = false
        return
      }

      if (target.closest(TEXT_INPUT_SELECTOR)) {
        isOverText.current = true
        isHoveringInteractive.current = false
        return
      }

      isOverText.current = false
      isHoveringInteractive.current = !!target.closest(INTERACTIVE_SELECTOR)
    }

    const handlePointerOut = (event) => {
      const related = event.relatedTarget
      const stillInside =
        related instanceof Element &&
        (related.closest(INTERACTIVE_SELECTOR) ||
          related.closest(TEXT_INPUT_SELECTOR))

      if (!stillInside) {
        isHoveringInteractive.current = false
        isOverText.current = false
      }

      const stillInsideInverseSurface =
        related instanceof Element && !!related.closest(CURSOR_INVERSE_SELECTOR)

      if (!stillInsideInverseSurface) {
        isOverInverseSurface.current = false
      }
    }

    const handlePointerDown = (event) => {
      const target = event.target
      if (!(target instanceof Element)) return
      if (target.closest(DISABLED_SELECTOR)) return
      if (target.closest(INTERACTIVE_SELECTOR)) {
        isPressed.current = true
      }
    }

    const handlePointerUp = () => {
      isPressed.current = false
    }

    // Keyboard focus mirrors hover: move the ring to the focused element
    // and treat it as if it were being pointed at. Only :focus-visible
    // (keyboard-style focus) triggers this — a mouse click that happens to
    // focus a button is already covered by the hover path.
    const handleFocusIn = (event) => {
      const target = event.target
      if (!(target instanceof Element)) return
      if (target.closest(DISABLED_SELECTOR)) return

      const isKeyboardFocus =
        typeof target.matches === 'function' &&
        target.matches(':focus-visible')

      if (isKeyboardFocus && target.closest(INTERACTIVE_SELECTOR)) {
        const rect = target.getBoundingClientRect()
        focusTarget.current = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        }
        isVisible.current = true
        isOverInverseSurface.current = !!target.closest(CURSOR_INVERSE_SELECTOR)
      } else {
        focusTarget.current = null
      }
    }

    const handleFocusOut = (event) => {
      focusTarget.current = null

      const related = event.relatedTarget
      const stillInsideInverseSurface =
        related instanceof Element && !!related.closest(CURSOR_INVERSE_SELECTOR)

      if (!stillInsideInverseSurface) {
        isOverInverseSurface.current = false
      }
    }

    window.addEventListener('pointermove', handlePointerMove, {
      passive: true,
    })
    window.addEventListener('pointerleave', handlePointerLeaveWindow, {
      passive: true,
    })
    window.addEventListener('wheel', triggerScrollState, { passive: true })
    window.addEventListener('scroll', triggerScrollState, { passive: true })
    window.addEventListener('pointerup', handlePointerUp, { passive: true })
    window.addEventListener('pointercancel', handlePointerUp, {
      passive: true,
    })
    document.addEventListener('pointerover', handlePointerOver, {
      passive: true,
    })
    document.addEventListener('pointerout', handlePointerOut, {
      passive: true,
    })
    document.addEventListener('pointerdown', handlePointerDown, {
      passive: true,
    })
    document.addEventListener('focusin', handleFocusIn, { passive: true })
    document.addEventListener('focusout', handleFocusOut, { passive: true })

    const tick = () => {
      const ringEl = ringRef.current
      const dotEl = dotRef.current

      if (ringEl && dotEl) {
        const focused = focusTarget.current
        const targetX = focused ? focused.x : pointer.current.x
        const targetY = focused ? focused.y : pointer.current.y
        const effectivelyHovering = !!focused || isHoveringInteractive.current

        if (reducedMotion) {
          // No lag, no scroll deformation — position only.
          ring.current.x = targetX
          ring.current.y = targetY
          ring.current.scaleX = 1
          ring.current.scaleY = 1
        } else {
          ring.current.x += (targetX - ring.current.x) * RING_EASE
          ring.current.y += (targetY - ring.current.y) * RING_EASE

          const targetScaleX = isScrolling.current ? SCROLL_STRETCH_X : 1
          const targetScaleY = isScrolling.current ? SCROLL_STRETCH_Y : 1
          ring.current.scaleX +=
            (targetScaleX - ring.current.scaleX) * SCALE_EASE
          ring.current.scaleY +=
            (targetScaleY - ring.current.scaleY) * SCALE_EASE
        }

        const targetHoverScale = effectivelyHovering ? HOVER_SCALE : 1
        const targetPressedMultiplier = isPressed.current ? PRESSED_SCALE : 1
        const combinedTarget = targetHoverScale * targetPressedMultiplier

        hoverScale.current += reducedMotion
          ? combinedTarget - hoverScale.current
          : (combinedTarget - hoverScale.current) * HOVER_EASE

        const opacity = isVisible.current && !isOverText.current ? '1' : '0'
        ringEl.style.opacity = opacity
        dotEl.style.opacity = opacity

        ringEl.classList.toggle(styles.inverse, isOverInverseSurface.current)
        dotEl.classList.toggle(styles.inverse, isOverInverseSurface.current)

        ringEl.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%) scale(${
          ring.current.scaleX * hoverScale.current
        }, ${ring.current.scaleY * hoverScale.current})`

        dotEl.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`
      }

      rafId.current = requestAnimationFrame(tick)
    }

    rafId.current = requestAnimationFrame(tick)

    return () => {
      document.body.classList.remove(styles.hideNativeCursor)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeaveWindow)
      window.removeEventListener('wheel', triggerScrollState)
      window.removeEventListener('scroll', triggerScrollState)
      window.removeEventListener('pointerup', handlePointerUp)
      window.removeEventListener('pointercancel', handlePointerUp)
      document.removeEventListener('pointerover', handlePointerOver)
      document.removeEventListener('pointerout', handlePointerOut)
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('focusin', handleFocusIn)
      document.removeEventListener('focusout', handleFocusOut)
      if (rafId.current) cancelAnimationFrame(rafId.current)
      if (scrollTimeoutId.current) {
        window.clearTimeout(scrollTimeoutId.current)
      }
    }
  }, [enabled, reducedMotion])

  if (!enabled) return null

  return (
    <>
      <div ref={ringRef} className={styles.ring} aria-hidden="true" />
      <div ref={dotRef} className={styles.dot} aria-hidden="true" />
    </>
  )
}
