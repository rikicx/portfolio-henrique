import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import photoUrl from '../media/home/hero/henrique-footer.webp'
import { useLanguage } from '../context/LanguageContext'
import pt from '../content/pt/footer'
import en from '../content/en/footer'

export default function Footer() {
  const { lang } = useLanguage()
  const c = lang === 'en' ? en : pt

  return (
    <footer id="contato" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.profileCta}>
          <div className={styles.profile}>
            <img
              src={photoUrl}
              alt={c.photoAlt}
              className={styles.photo}
              width="159"
              height="159"
            />
            <div className={styles.profileText}>
              <p className={styles.name}>{c.name}</p>
              <p className={styles.role}>{c.role}</p>
            </div>
          </div>

          <div className={styles.cta}>
            <h2 className={styles.ctaHeading}>{c.ctaHeading}</h2>
            <Link to={c.ctaTo} className={styles.ctaBtn}>
              {c.ctaLabel}
            </Link>
          </div>
        </div>

        <nav className={styles.links} aria-label={c.linksAriaLabel}>
          <a
            href="https://www.linkedin.com/in/henrique-m-silva/"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {c.linkedinLabel}
          </a>
          <span className={styles.dot} aria-hidden="true" />
          <a href="mailto:hello@henriquesilva.design" className={styles.link}>
            {c.emailLabel}
          </a>
          <span className={styles.dot} aria-hidden="true" />
          <a
            href={c.curriculoHref}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {c.curriculoLabel}
          </a>
        </nav>

        <hr className={styles.divider} />

        <p className={styles.copyright}>{c.copyright}</p>
      </div>
    </footer>
  )
}
