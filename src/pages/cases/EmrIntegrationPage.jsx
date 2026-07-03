import { Fragment } from 'react'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import OtherProjectsSection from '../../components/OtherProjectsSection'
import TypingTitle from '../../components/TypingTitle'
import RevealSection from '../../components/RevealSection'
import { useLanguage } from '../../context/LanguageContext'
import ptContent from '../../content/pt/case-emr-integration'
import enContent from '../../content/en/case-emr-integration'
import styles from './EmrIntegrationPage.module.css'

import heroImg from '../../media/cases/emr-integration/emr-hero.webp'
import experienciaImg from '../../media/cases/emr-integration/emr-experiencia.webp'
import mudouImg from '../../media/cases/emr-integration/emr-mudou.webp'
import iconIdentificar from '../../media/cases/emr-integration/emr-icon-identificar.png'
import iconReunir from '../../media/cases/emr-integration/emr-icon-reunir.png'
import iconApoiar from '../../media/cases/emr-integration/emr-icon-apoiar.png'
import iconRegistrar from '../../media/cases/emr-integration/emr-icon-registrar.png'
import clinicalIcon from '../../media/cases/emr-integration/emr-clinical-evidence-icon.svg'
import connectorIcon from '../../media/cases/emr-integration/emr-connector.svg'
import quoteOpenImg from '../../media/shared/quotes/quote-open.png'
import quoteCloseImg from '../../media/shared/quotes/quote-close.png'

const STEP_ICONS = {
  identificar: iconIdentificar,
  reunir: iconReunir,
  apoiar: iconApoiar,
  registrar: iconRegistrar,
}

export default function EmrIntegrationPage() {
  const { lang } = useLanguage()
  const c = lang === 'en' ? enContent : ptContent

  return (
    <Layout>
      <Seo
        title={c.seo.title}
        description={c.seo.description}
        path={c.seo.path}
        lang={c.seo.lang}
        robots={c.seo.robots}
      />
      {/* 1. Hero */}
      <section aria-labelledby="emr-title" className={styles.hero}>
        <TypingTitle id="emr-title" className={styles.heroTitle} lines={c.hero.titleLines} />
        <div className={styles.heroMeta}>
          <p className={styles.heroKicker}>
            {c.hero.kicker}
          </p>
          <p className={styles.heroDesc}>
            {c.hero.description}
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className={styles.dividerFull} aria-hidden="true" />

      {/* 2. Metadata */}
      <RevealSection as="section" aria-label={c.metadata.ariaLabel} className={styles.metadata}>
        <div className={styles.container}>
          <div className={styles.metaLayout}>
            <div className={styles.metaImageWrap}>
              <img
                src={heroImg}
                alt={c.metadata.imageAlt}
                className={styles.metaImg}
              />
            </div>
            <dl className={styles.metaFields}>
              <div className={styles.metaRowTop}>
                {c.metadata.topFields.map((field) => (
                  <div key={field.label} className={styles.metaItem}>
                    <dt className={styles.metaLabel}>{field.label}</dt>
                    <dd className={styles.metaValue}>{field.value}</dd>
                  </div>
                ))}
              </div>
              {c.metadata.blocks.map((block) => (
                <div key={block.label} className={styles.metaItem}>
                  <dt className={styles.metaLabel}>{block.label}</dt>
                  <dd className={styles.metaValue}>
                    {block.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </RevealSection>

      {/* 3. O problema */}
      <RevealSection as="section" aria-labelledby="emr-problema" className={styles.problema}>
        <div className={styles.container}>
          <div className={styles.problemaLayout}>
            <div className={styles.problemaLabelCol}>
              <p id="emr-problema" className={styles.problemaLabel}>
                {c.problem.label}
              </p>
            </div>
            <div className={styles.problemaText}>
              <p>
                {c.problem.paragraphs[0]}
              </p>
              <p className={styles.textGap}>
                {c.problem.paragraphs[1]}
              </p>
              <p className={styles.textGap}>
                {c.problem.paragraphs[2]}
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 4. Pergunta central */}
      <RevealSection as="section" aria-label={c.centralQuestion.ariaLabel} className={styles.pergunta}>
        <div className={styles.container}>
          <img
            src={quoteOpenImg}
            alt=""
            aria-hidden="true"
            className={styles.quoteIconOpen}
          />
          <p className={styles.quoteLabel}>
            {c.centralQuestion.label}
          </p>
          <blockquote className={styles.quoteText}>
            {c.centralQuestion.text}
          </blockquote>
          <img
            src={quoteCloseImg}
            alt=""
            aria-hidden="true"
            className={styles.quoteIconClose}
          />
        </div>
      </RevealSection>

      {/* 5. Decidir sem começar do zero */}
      <RevealSection as="section" aria-labelledby="emr-decidir" className={styles.decidir}>
        <div className={styles.container}>
          <h2 id="emr-decidir" className={styles.sectionHeading}>
            {c.decide.title}
          </h2>
          <div className={styles.decidirText}>
            <p>
              {c.decide.paragraphs[0]}
            </p>
            <p className={styles.textGap}>
              {c.decide.paragraphs[1]}
            </p>
          </div>
        </div>

        {/* Gray evidence box — spans full content width */}
        <div className={styles.evidenceBox}>
          <img
            src={clinicalIcon}
            alt=""
            aria-hidden="true"
            className={styles.clinicalIcon}
          />
          <ul className={styles.evidenceList}>
            {c.decide.evidenceList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.container}>
          <p className={styles.decidirRole}>
            {c.decide.roleNote}
          </p>
        </div>
      </RevealSection>

      {/* 6. Como a experiência foi organizada */}
      <RevealSection as="section"
        aria-labelledby="emr-experiencia"
        className={styles.experiencia}
      >
        <div className={styles.container}>
          <div className={styles.experienciaLayout}>
            <div className={styles.experienciaImageCol}>
              <img
                src={experienciaImg}
                alt={c.experience.imgAlt}
                className={styles.experienciaImg}
              />
              <p className={styles.mediaCaption}>
                {c.experience.caption}
              </p>
            </div>
            <div className={styles.experienciaRightCol}>
              <h2 id="emr-experiencia" className={styles.sectionHeading}>
                {c.experience.title}
              </h2>
              <div className={styles.directionSteps}>
                {c.experience.steps.map((step, index) => (
                  <Fragment key={step.key}>
                    {index > 0 && (
                      <img
                        src={connectorIcon}
                        alt=""
                        aria-hidden="true"
                        className={styles.connector}
                      />
                    )}
                    <div className={styles.directionBox}>
                      <img
                        src={STEP_ICONS[step.key]}
                        alt=""
                        aria-hidden="true"
                        className={styles.directionIcon}
                      />
                      <div className={styles.directionText}>
                        <p className={styles.directionTitle}>
                          {step.title}
                        </p>
                        <p className={styles.directionDesc}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 7. O que mudou */}
      <RevealSection as="section" aria-labelledby="emr-mudou" className={styles.mudou}>
        <div className={styles.container}>
          <div className={styles.mudouLayout}>
            <div className={styles.mudouTextCol}>
              <h2 id="emr-mudou" className={styles.sectionHeading}>
                {c.changed.title}
              </h2>

              <div className={styles.mudouText}>
                <p>
                  {c.changed.paragraphs[0]}
                </p>
                <p className={styles.textGap}>
                  {c.changed.paragraphs[1]}
                </p>
              </div>

              <div className={styles.mudouFooter}>
                <p>{c.changed.footerParagraphs[0]}</p>
                <p className={styles.textGap}>
                  {c.changed.footerParagraphs[1]}
                </p>
              </div>

              <div className={styles.impactoBlock}>
                <h2 id="emr-impacto" className={styles.impactoTitle}>
                  {c.changed.impactTitle}
                </h2>

                <div className={styles.statCards}>
                  {c.changed.stats.map((stat) => (
                    <div
                      key={stat.value}
                      className={stat.wide ? styles.statCardWide : styles.statCardNarrow}
                    >
                      <p className={styles.statValue}>{stat.value}</p>
                      <p className={styles.statLabel}>
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.mudouImageCol}>
              <img
                src={mudouImg}
                alt={c.changed.imgAlt}
                className={styles.mudouImg}
              />
              <p className={styles.mediaCaption}>
                {c.changed.caption}
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 9. Outros Projetos */}
      <OtherProjectsSection currentSlug="emr-integration" />
    </Layout>
  )
}
