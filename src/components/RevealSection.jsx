import { useInView } from '../hooks/useInView'
import styles from './RevealSection.module.css'

export default function RevealSection({ children, className = '', as: Tag = 'div' }) {
  const [ref, visible] = useInView({ threshold: 0.12, rootMargin: '0px', once: true })

  return (
    <Tag
      ref={ref}
      className={`${styles.reveal}${visible ? ` ${styles.visible}` : ''}${className ? ` ${className}` : ''}`}
    >
      {children}
    </Tag>
  )
}
