import { useInView } from '../hooks/useInView'
import styles from './Quote.module.css'
import quoteOpenImg from '../media/shared/quotes/quote-open.png'
import quoteCloseImg from '../media/shared/quotes/quote-close.png'

export default function Quote() {
  const [sectionRef, isVisible] = useInView({ threshold: 0.18 })

  return (
    <section className={styles.section} ref={sectionRef} data-visible={isVisible}>
      <div className={styles.inner}>
        <img src={quoteOpenImg} alt="" aria-hidden="true" className={styles.quoteOpen} />

        <blockquote className={styles.quoteText}>
          Decidir o que não construir também é design.
        </blockquote>

        <img src={quoteCloseImg} alt="" aria-hidden="true" className={styles.quoteClose} />

        <p className={styles.author}>Henrique M. Silva</p>

        <hr className={styles.divider} aria-hidden="true" />

        <p className={styles.description}>
          Uma reflexão sobre como decisões de produto, restrições e foco também fazem parte do trabalho de design.
        </p>

        <a href="#" className={styles.cta} aria-label="Ler artigo (em breve)">
          Ler artigo →
        </a>
      </div>
    </section>
  )
}
