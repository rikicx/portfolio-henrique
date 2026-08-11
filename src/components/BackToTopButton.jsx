import { useEffect, useState } from 'react'
import styles from './BackToTopButton.module.css'

const SHOW_AFTER_PX = 600

export default function BackToTopButton({ label = 'Voltar ao topo' }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY >= SHOW_AFTER_PX)
    }

    updateVisibility()

    window.addEventListener('scroll', updateVisibility, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', updateVisibility)
    }
  }, [])

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      type="button"
      className={styles.button}
      onClick={scrollToTop}
      aria-label={label}
      title={label}
    >
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M6 15.5 12 9l6 6.5" />
      </svg>
    </button>
  )
}
