import { useInView } from '../hooks/useInView'
import styles from './Stats.module.css'

const items = [
  {
    value: '19 Anos',
    mobileValue: '19 Anos',
    label: 'De experiência',
  },
  {
    value: '8+ Anos',
    mobileValue: '8 Anos +',
    label: 'Em posições de Liderança',
  },
  {
    value: 'Brasil + EUA',
    mobileValue: 'Brasil + EUA',
    label: 'Atuando com produtos e stakeholders internacionais',
    wide: true,
  },
]

export default function Stats() {
  const [sectionRef, isVisible] = useInView({ threshold: 0.28 })

  return (
    <section className={styles.section} ref={sectionRef} data-visible={isVisible}>
      <div className={styles.container}>
        {items.map((item) => (
          <div
            key={item.label}
            className={item.wide ? `${styles.card} ${styles.cardWide}` : styles.card}
          >
            <span className={styles.valueDesktop}>{item.value}</span>
            <span className={styles.valueMobile}>{item.mobileValue}</span>
            <span className={styles.label}>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
