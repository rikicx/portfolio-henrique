import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import RevealSection from '../components/RevealSection'
import TypingTitle from '../components/TypingTitle'
import { useLanguage } from '../context/LanguageContext'
import ptContent from '../content/pt/about'
import enContent from '../content/en/about'
import ptSeo from '../content/pt/about-seo'
import enSeo from '../content/en/about-seo'
import styles from './AboutPage.module.css'

import heroImg from '../media/about/about-henrique.webp'
import karateImg from '../media/about/henrique-karate.webp'
import manemShohoImg from '../media/about/manem-shoho.png'
import comeceProbImg from '../media/about/comece-pelo-problema.png'
import aproxPersImg from '../media/about/aproximacao-com-pessoas.png'
import uxImg from '../media/about/ux.png'
import hyperlineSvg from '../media/home/experience/hyperline.svg'

const principleIcons = {
  problem: comeceProbImg,
  perspectives: aproxPersImg,
  close: uxImg,
}

function HyperLink({ to = null, href = null, children }) {
  const inner = (
    <span className={styles.hyperlinkText}>{children}</span>
  )
  if (to) {
    return <Link to={to} className={styles.hyperlink}>{inner}</Link>
  }
  return <a href={href} className={styles.hyperlink}>{inner}</a>
}

export default function AboutPage() {
  const { lang } = useLanguage()
  const c = lang === 'en' ? enContent : ptContent
  const seo = lang === 'en' ? enSeo : ptSeo

  const timeline = c.career.timeline
  const principles = c.principles.items

  return (
    <Layout>
      <Seo
        title={seo.title}
        description={seo.description}
        path={seo.path}
        lang={seo.lang}
        robots={seo.robots}
      />

      {/* ── 1. Hero ─────────────────────────────────────────────────── */}
      {/* Desktop: photo left=calc(50%+65px) top=36px (142-106), title top=123px (229-106).
          Mobile order: title → photo → divider → desc (uses flex + order). */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <TypingTitle
            className={styles.heroTitle}
            lines={c.hero.titleLines}
            underline={c.hero.titleUnderline}
          />
          <div className={styles.heroPhotoCol}>
            <img
              src={heroImg}
              alt={c.hero.photoAlt}
              className={styles.heroImg}
            />
          </div>
          <hr className={styles.heroMobileDivider} aria-hidden="true" />
          <p className={styles.heroDesc}>
            {c.hero.description}
          </p>
        </div>
        <hr className={styles.heroDivider} aria-hidden="true" />
      </section>

      {/* ── 2. Carreira ──────────────────────────────────────────────── */}
      <RevealSection as="section" rootMargin="0px 0px -10% 0px" className={styles.carreira}>
        <div className={styles.carreiraOuter}>

          <div className={styles.carreiraIntroRow}>
            <div className={styles.carreiraIntroContent}>
              <h2 className={styles.carreiraTitle}>
                {c.career.title}
              </h2>
              {c.career.paragraphs.map((paragraph, index) => (
                <p key={index} className={styles.carreiraDesc}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Desktop timeline — alternating sides, central axis */}
          <div className={styles.timelineDesktop}>
            <div className={styles.timelineAxis} aria-hidden="true" />
            {timeline.map((company) => (
              <div
                key={company.key}
                className={`${styles.timelineEntry} ${company.side === 'left' ? styles.entryLeft : styles.entryRight}`}
              >
                {company.side === 'right' ? (
                  <>
                    <div className={styles.timelineEmpty} />
                    <div className={styles.timelineMarkerWrapper} aria-hidden="true">
                      <div className={styles.markerOuter} />
                      <div className={styles.markerInner} />
                    </div>
                    <div className={styles.timelineContent}>
                      <p className={styles.companyName}>{company.name}</p>
                      <p className={styles.companyRole}>{company.role}</p>
                      <p className={styles.companyDesc}>{company.description}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={`${styles.timelineContent} ${styles.timelineContentLeft}`}>
                      <p className={styles.companyName}>{company.name}</p>
                      <p className={styles.companyRole}>{company.role}</p>
                      <p className={styles.companyDesc}>{company.description}</p>
                    </div>
                    <div className={styles.timelineMarkerWrapper} aria-hidden="true">
                      <div className={styles.markerOuter} />
                      <div className={styles.markerInner} />
                    </div>
                    <div className={styles.timelineEmpty} />
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Mobile timeline — left axis */}
          <div className={styles.timelineMobile}>
            <div className={styles.timelineMobileAxis} aria-hidden="true" />
            {timeline.map((company) => (
              <div key={company.key} className={styles.timelineMobileEntry}>
                <div className={styles.timelineMobileMarkerWrapper} aria-hidden="true">
                  <div className={styles.markerMobileOuter} />
                  <div className={styles.markerMobileInner} />
                </div>
                <div className={styles.timelineMobileContent}>
                  <p className={styles.companyNameMobile}>{company.name}</p>
                  <p className={styles.companyRoleMobile}>{company.role}</p>
                  <p className={styles.companyDescMobile}>{company.description}</p>
                </div>
              </div>
            ))}
          </div>

          <blockquote className={styles.carreiraPullquote}>
            {c.career.pullquote}
          </blockquote>
        </div>
      </RevealSection>

      {/* ── 3. Princípios ────────────────────────────────────────────── */}
      <RevealSection as="section" rootMargin="0px 0px -10% 0px" className={styles.principios}>
        <div className={styles.principiosOuter}>
          <h2 className={styles.principiosTitle}>
            {c.principles.title}
          </h2>
          <div className={styles.principiosGrid}>
            {principles.map((p) => (
              <div key={p.key} className={styles.principio}>
                <img
                  src={principleIcons[p.key]}
                  alt=""
                  aria-hidden="true"
                  className={styles.principioIcon}
                />
                <h3 className={styles.principioName}>{p.title}</h3>
                <p className={styles.principioText}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ── 4. Liderança ─────────────────────────────────────────────── */}
      <RevealSection as="section" rootMargin="0px 0px -10% 0px" className={styles.lideranca}>
        <div className={styles.liderancaOuter}>
          <div className={styles.liderancaInner}>
            <h2 className={styles.liderancaTitle}>{c.leadership.title}</h2>
            <div className={styles.liderancaRight}>
              {c.leadership.paragraphs.map((paragraph, index) => (
                <p key={index} className={styles.liderancaText}>
                  {paragraph}
                </p>
              ))}
              <blockquote className={styles.liderancaPullquote}>
                {c.leadership.pullquote}
              </blockquote>
            </div>
          </div>
        </div>
        <hr className={styles.liderancaDivider} aria-hidden="true" />
      </RevealSection>

      {/* ── 5. Sempre Iniciante ──────────────────────────────────────── */}
      <RevealSection as="section" rootMargin="0px 0px -10% 0px" className={styles.iniciante}>
        <div className={styles.inicianteOuter}>
          <div className={styles.inicianteInner}>
            <div className={styles.iniciantePhotos}>
              <img
                src={karateImg}
                alt={c.beginner.karateAlt}
                className={styles.inicianteKarateImg}
              />
              <img
                src={manemShohoImg}
                alt={c.beginner.shohoAlt}
                className={styles.inicianteShohoImg}
              />
            </div>
            <div className={styles.inicianteText}>
              <h2 className={styles.inicianteTitle}>{c.beginner.title}</h2>
              {c.beginner.paragraphs.map((paragraph, index) => (
                <p key={index} className={styles.inicianteBody}>
                  {paragraph}
                </p>
              ))}
              <p className={styles.inicianteBodyDesktop}>
                {c.beginner.lastParagraph}
              </p>
            </div>

            <p className={styles.inicianteBodyFull}>
              {c.beginner.lastParagraph}
            </p>
          </div>
        </div>
        <hr className={styles.inicianteDivider} aria-hidden="true" />
      </RevealSection>

      {/* ── 6. Closing ───────────────────────────────────────────────── */}
      <RevealSection as="section" rootMargin="0px 0px -10% 0px" className={styles.closing}>
        <div className={styles.closingOuter}>
          <h2 className={styles.closingTitle}>
            {c.closing.title}
          </h2>
          {c.closing.paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.closingText}>
              {paragraph}
            </p>
          ))}
          <div className={styles.closingLinks}>
            <HyperLink to={c.closing.worksTo}>{c.closing.worksLabel}</HyperLink>
            <HyperLink href={c.closing.contactHref}>{c.closing.contactLabel}</HyperLink>
          </div>
        </div>
      </RevealSection>

    </Layout>
  )
}
