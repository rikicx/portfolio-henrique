import styles from './Quote.module.css'

export default function Quote() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.quoteBlock}>
          <span className={styles.openQuote} aria-hidden="true">&ldquo;</span>
          <blockquote className={styles.text}>
            Decidir o que não construir também é design.
          </blockquote>
          <span className={styles.closeQuote} aria-hidden="true">&rdquo;</span>
        </div>
        <div className={styles.footer}>
          <div className={styles.meta}>
            <p className={styles.description}>
              Uma reflexão sobre como decisões de produto, restrições e foco
              <br />também fazem parte do trabalho de design.
            </p>
            <a
              href="#"
              className={styles.cta}
              aria-label="Ler artigo completo (em breve)"
            >
              Ler artigo →
            </a>
          </div>
          <span className={styles.author}>Henrique M. Silva</span>
        </div>
      </div>
    </section>
  )
}
