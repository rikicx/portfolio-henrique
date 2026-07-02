import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import styles from './Experience.module.css'
import hyperlineSvg from '../media/home/experience/hyperline.svg'
import logo3ph from '../media/home/experience/logo-3ph.png'
import logoSciensa from '../media/home/experience/logo-sciensa.png'
import logoNetfarma from '../media/home/experience/logo-netfarma.png'
import { useLanguage } from '../context/LanguageContext'
import pt from '../content/pt/experience'
import en from '../content/en/experience'

const LOGOS_BY_KEY = {
  '3ph': { logo: logo3ph, logoClass: 'mobileLogo3ph' },
  sciensa: { logo: logoSciensa, logoClass: 'mobileLogoSciensa' },
  netfarma: { logo: logoNetfarma, logoClass: 'mobileLogoNetfarma' },
}

export default function Experience() {
  const { lang } = useLanguage()
  const c = lang === 'en' ? en : pt
  const companies = c.companies.map((company) => ({
    ...company,
    ...LOGOS_BY_KEY[company.key],
  }))

  const [openKey, setOpenKey] = useState(null)
  const [sectionRef, isVisible] = useInView({ threshold: 0.12 })

  function toggle(key) {
    setOpenKey((prev) => (prev === key ? null : key))
  }

  return (
    <section id="experiencia" className={styles.section} ref={sectionRef} data-visible={isVisible}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{c.heading}</h2>

        {/* Desktop layout — untouched */}
        <div className={styles.desktopCompanies}>
          {companies.map((company) => (
            <div key={company.key} className={styles.companyRow}>
              <div className={styles.experienceBody}>
                <div className={styles.positions}>
                  {company.positions.map((pos) => (
                    <div key={pos.title} className={styles.position}>
                      <p className={styles.positionTitle}>{pos.title}</p>
                      <p className={styles.positionDesc}>{pos.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <img
                src={company.logo}
                alt={company.logoAlt}
                className={styles.companyLogo}
              />
            </div>
          ))}
        </div>

        {/* Mobile accordion */}
        <div className={styles.mobileCompanies}>
          {companies.map((company) => {
            const isOpen = openKey === company.key
            const contentId = `exp-content-${company.key}`
            return (
              <div key={company.key} className={styles.mobileCompany}>
                <button
                  type="button"
                  className={styles.mobileHeader}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggle(company.key)}
                >
                  {isOpen ? (
                    <img
                      src={company.logo}
                      alt={company.logoAlt}
                      className={styles[company.logoClass]}
                    />
                  ) : (
                    <div className={styles.mobilePositions}>
                      <span className={styles.mobileTitleSenior}>
                        {company.positions[0].mobileTitle}
                      </span>
                      <span className={styles.mobileTitleJunior}>
                        {company.positions[1].mobileTitle}
                      </span>
                    </div>
                  )}
                  <svg
                    className={`${styles.chevron}${isOpen ? ` ${styles.chevronOpen}` : ''}`}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 6l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div
                  id={contentId}
                  role="region"
                  className={`${styles.mobileContent}${isOpen ? ` ${styles.mobileContentOpen}` : ''}`}
                >
                  <div className={styles.mobileContentInner}>
                    {company.positions.map((pos) => (
                      <div key={pos.mobileTitle} className={styles.mobilePositionExpanded}>
                        <p className={styles.mobileExpandedTitle}>{pos.mobileTitle}</p>
                        <p className={styles.mobileExpandedDesc}>{pos.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <a
          href="https://www.linkedin.com/in/henrique-m-silva/"
          className={styles.linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.linkedinText}>
            {c.linkedinLabel}
          </span>
        </a>
      </div>
    </section>
  )
}
