import { useInView } from '../hooks/useInView'
import styles from './Stats.module.css'
import { useLanguage } from '../context/LanguageContext'
import pt from '../content/pt/stats'
import en from '../content/en/stats'

export default function Stats() {
  const { lang } = useLanguage()
  const c = lang === 'en' ? en : pt
  const [sectionRef, isVisible] = useInView({ threshold: 0.28 })

  return (
    <section className={styles.section} ref={sectionRef} data-visible={isVisible}>
      <div className={styles.container}>
        {c.items.map((item) => (
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
