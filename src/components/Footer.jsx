import styles from './Footer.module.css'
import photoUrl from '../media/home/hero/henrique-footer.png'

export default function Footer() {
  return (
    <footer id="contato" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.profileCta}>
          <div className={styles.profile}>
            <img
              src={photoUrl}
              alt="Foto de Henrique M. Silva"
              className={styles.photo}
              width="159"
              height="159"
            />
            <div className={styles.profileText}>
              <p className={styles.name}>Henrique M. Silva</p>
              <p className={styles.role}>Design Leader &amp; Product Strategist</p>
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
        </div>

        <nav className={styles.links} aria-label="Links de contato">
          <a
            href="https://linkedin.com/in/"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <span className={styles.dot} aria-hidden="true" />
          <a href="mailto:contato@henriquemsilva.com" className={styles.link}>
            E-mail ↗
          </a>
          <span className={styles.dot} aria-hidden="true" />
          <a href="#" className={styles.link} aria-label="Currículo (em breve)">
            Currículo ↗
          </a>
        </nav>

        <hr className={styles.divider} />

        <p className={styles.copyright}>
          © 2026 Henrique M. Silva - São Paulo, Brasil
        </p>
      </div>
    </footer>
  )
}
