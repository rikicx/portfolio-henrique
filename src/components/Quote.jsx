import { useInView } from '../hooks/useInView'
import styles from './Quote.module.css'
import quoteOpenImg from '../media/shared/quotes/quote-open.png'
import quoteCloseImg from '../media/shared/quotes/quote-close.png'
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
        <img src={quoteOpenImg} alt="" aria-hidden="true" className={styles.quoteOpen} />

        <blockquote className={styles.quoteText}>{c.quoteText}</blockquote>

        <img src={quoteCloseImg} alt="" aria-hidden="true" className={styles.quoteClose} />

        <p className={styles.author}>{c.author}</p>

        <hr className={styles.divider} aria-hidden="true" />

        <p className={styles.description}>{c.description}</p>

        <a href="#" className={styles.cta} aria-label={c.ctaAriaLabel}>
          <span>{c.ctaLabel}</span>
          <span aria-hidden="true">↗︎</span>
        </a>
      </div>
    </section>
  )
}
