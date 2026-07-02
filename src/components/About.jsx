import { useInView } from '../hooks/useInView'
import styles from './About.module.css'
import arrowLink from '../media/shared/icons/arrow-link.svg'
import henriqueWorking from '../media/home/hero/henrique-working.webp'
import { useLanguage } from '../context/LanguageContext'
import pt from '../content/pt/about-section'
import en from '../content/en/about-section'

export default function About() {
  const { lang } = useLanguage()
  const c = lang === 'en' ? en : pt
  const [sectionRef, isVisible] = useInView({ threshold: 0.16 })

  return (
    <section id="sobre" className={styles.section} ref={sectionRef} data-visible={isVisible}>
      <div className={styles.container}>
        <div className={styles.imageCol}>
          <img
            src={henriqueWorking}
            alt={c.photoAlt}
            className={styles.photo}
          />
          <div className={styles.overlay} />
          <div className={styles.overlayContent}>
            <h2 className={styles.overlayHeading}>{c.overlayHeading}</h2>
            <a href={c.saibaMaisTo} className={styles.saibaMaisLink}>
              <img src={arrowLink} alt="" aria-hidden="true" className={styles.arrowIcon} />
              <span>{c.saibaMaisLabel}</span>
            </a>
          </div>
        </div>

        <div className={styles.contentCol}>
          <div className={styles.methBlock}>
            <h3 className={styles.methodTitle}>{c.methodTitle}</h3>
            <p className={styles.highlight}>{c.highlight}</p>
            <p className={`${styles.body} ${styles.bodyDesktop}`}>
              {c.bodyDesktop}
            </p>
            <p className={`${styles.body} ${styles.bodyMobile}`}>
              {c.bodyMobile}
            </p>
          </div>
          <div className={styles.actions}>
            <a
              href={c.curriculoHref}
              className={styles.btn}
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.curriculoLabel}
            </a>
            <a
              href="https://www.linkedin.com/in/henrique-m-silva/"
              className={styles.btn}
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.linkedinLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
