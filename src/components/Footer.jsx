import { useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import photoUrl from '../media/home/hero/henrique-footer.webp'
import { useLanguage } from '../context/LanguageContext'
import pt from '../content/pt/footer'
import en from '../content/en/footer'

export default function Footer() {
  const { lang } = useLanguage()
  const c = lang === 'en' ? en : pt
  const footerRef = useRef(null)
  const [fitsViewport, setFitsViewport] = useState(true)

  // A revelação sticky só funciona se o footer cabe na tela: mais alto que
  // ela, o topo (avatar incluso) fica preso acima da viewport e nunca
  // aparece. Nesse caso o footer volta ao fluxo normal da página.
  useLayoutEffect(() => {
    const footer = footerRef.current
    if (!footer) return undefined

    const update = () => {
      setFitsViewport(footer.offsetHeight <= window.innerHeight)
    }

    update()

    const resizeObserver = new ResizeObserver(update)
    resizeObserver.observe(footer)
    window.addEventListener('resize', update)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <footer
      ref={footerRef}
      id="contato"
      className={styles.footer}
      data-cursor-theme="light"
      data-pinned={fitsViewport}
    >
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
              <span>{c.ctaLabel}</span>
              <span>→</span>
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
          <span className={styles.dot} aria-hidden="true" />
          <Link to={c.designSystemTo} className={styles.link}>
            {c.designSystemLabel}
          </Link>
        </nav>

        <hr className={styles.divider} />

        <p className={styles.copyright}>
          <span>{c.copyright}</span>
          <span className={styles.copyrightSeparator} aria-hidden="true">
            {' · '}
          </span>
          <span className={styles.copyrightVersion}>{c.version}</span>
        </p>
      </div>
    </footer>
  )
}
