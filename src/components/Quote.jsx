import { useInView } from '../hooks/useInView'
import styles from './Quote.module.css'
import { useLanguage } from '../context/LanguageContext'
import pt from '../content/pt/quote'
import en from '../content/en/quote'

export default function Quote() {
  const { lang } = useLanguage()
  const c = lang === 'en' ? en : pt
  const [sectionRef, isVisible] = useInView({ threshold: 0.18 })

  return (
    <section className={styles.section} ref={sectionRef} data-visible={isVisible}>
      <div className={styles.inner}>
        <h2 className={styles.statement}>
          <span className={styles.expand}>{c.statementLead}</span>{' '}
          <span className={styles.direct}>{c.statementFocus}</span>
        </h2>

        <p className={styles.description}>{c.description}</p>

        {c.ctaHref ? (
          <a className={styles.cta} href={c.ctaHref} aria-label={c.ctaAriaLabel}>
            <span>{c.ctaLabel}</span>
            <span aria-hidden="true">↗︎</span>
          </a>
        ) : (
          <p className={styles.ctaPending}>{c.ctaPendingLabel}</p>
        )}
      </div>
    </section>
  )
}
