import { useLayoutEffect, useState } from 'react'
import { getIsTransitioning, subscribe } from '../routeTransitionState'
import { useInView } from '../hooks/useInView'
import styles from './RevealSection.module.css'

export default function RevealSection({ children, className = '', as: Tag = 'div', rootMargin = '0px' }) {
  const [ref, visible] = useInView({ threshold: 0.18, rootMargin, once: true })
  const [transitioning, setTransitioning] = useState(false)

  useLayoutEffect(() => {
    setTransitioning(getIsTransitioning())
    const unsub = subscribe((val) => setTransitioning(val))
    return unsub
  }, [])

  const shown = visible && !transitioning

  return (
    <Tag
      ref={ref}
      className={`${styles.reveal}${shown ? ` ${styles.visible}` : ''}${className ? ` ${className}` : ''}`}
    >
      {children}
    </Tag>
  )
}
