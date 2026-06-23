import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer id="contato" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.identity}>
          <div className={styles.avatarPlaceholder} aria-label="Foto de Henrique M. Silva" />
          <div>
            <p className={styles.identityName}>Henrique M. Silva</p>
            <p className={styles.identityRole}>Design Leader &amp; Product Strategist</p>
          </div>
        </div>

        <div className={styles.cta}>
          <h2 className={styles.ctaHeading}>
            Tem um desafio complexo para resolver?
          </h2>
          <a href="mailto:contato@henriquemsilva.com" className={styles.ctaBtn}>
            Vamos conversar →
          </a>
        </div>

        <hr className={styles.divider} />

        <nav className={styles.links} aria-label="Links de contato">
          <a
            href="https://linkedin.com/in/"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <span className={styles.dot} aria-hidden="true">·</span>
          <a href="mailto:contato@henriquemsilva.com" className={styles.link}>
            E-mail ↗
          </a>
          <span className={styles.dot} aria-hidden="true">·</span>
          <a
            href="#"
            className={styles.link}
            aria-label="Currículo (em breve)"
          >
            Currículo ↗
          </a>
        </nav>

        <p className={styles.copyright}>
          © 2026 Henrique M. Silva — São Paulo, Brasil
        </p>
      </div>
    </footer>
  )
}
