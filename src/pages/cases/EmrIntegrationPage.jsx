import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import OtherProjectsSection from '../../components/OtherProjectsSection'
import TypingTitle from '../../components/TypingTitle'
import RevealSection from '../../components/RevealSection'
import { useLanguage } from '../../context/LanguageContext'
import ptContent from '../../content/pt/case-emr-integration'
import enContent from '../../content/en/case-emr-integration'
import styles from './EmrIntegrationPage.module.css'

import formParticipantImg from '../../media/cases/emr-integration/01-form-participant-information.png'
import fieldEvidenceImg from '../../media/cases/emr-integration/02-field-evidence.png'
import queriesListImg from '../../media/cases/emr-integration/03-queries-list.png'
import queryThreadImg from '../../media/cases/emr-integration/04-query-thread.png'
import auditLogImg from '../../media/cases/emr-integration/05-audit-log.png'
import queryModalImg from '../../media/cases/emr-integration/06-open-query-modal.png'
import quoteOpenImg from '../../media/shared/quotes/quote-open.png'
import quoteCloseImg from '../../media/shared/quotes/quote-close.png'

function MediaFigure({ src, alt, caption, className = '', imageClassName = '' }) {
  return (
    <figure className={`${styles.figure}${className ? ` ${className}` : ''}`}>
      <img
        src={src}
        alt={alt}
        className={`${styles.figureImage}${imageClassName ? ` ${imageClassName}` : ''}`}
        loading="lazy"
      />
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  )
}

function QuoteBlock({ label, children }) {
  return (
    <figure className={styles.quoteBlock}>
      <img
        src={quoteOpenImg}
        alt=""
        className={`${styles.quoteIcon} ${styles.quoteIconOpen}`}
        aria-hidden="true"
      />
      <figcaption className={styles.quoteLabel}>{label}</figcaption>
      <blockquote>{children}</blockquote>
      <img
        src={quoteCloseImg}
        alt=""
        className={`${styles.quoteIcon} ${styles.quoteIconClose}`}
        aria-hidden="true"
      />
    </figure>
  )
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

      <article className={styles.page}>
        <section className={styles.hero} aria-labelledby="emr-title">
          <TypingTitle id="emr-title" className={styles.heroTitle} lines={c.hero.titleLines} />
          <div className={styles.heroMeta}>
            <p className={styles.heroKicker}>{c.hero.kicker}</p>
            <p className={styles.heroDescription}>{c.hero.description}</p>
          </div>
        </section>

        <hr className={styles.dividerFull} aria-hidden="true" />

        <RevealSection
          as="section"
          className={styles.metadata}
          aria-label={c.metadata.ariaLabel}
        >
          <div className={styles.container}>
            <div className={styles.metaLayout}>
              <MediaFigure
                src={fieldEvidenceImg}
                alt={c.metadata.imageAlt}
                caption={c.metadata.imageCaption}
                className={styles.metaFigure}
                imageClassName={styles.metaImage}
              />

              <dl className={styles.metaFields}>
                <div className={styles.metaRow}>
                  {c.metadata.items.slice(0, 3).map((item) => (
                    <div key={item.label} className={styles.metaItem}>
                      <dt>{item.label}</dt>
                      <dd>{item.value}</dd>
                    </div>
                  ))}
                </div>

                {c.metadata.items.slice(3).map((item) => (
                  <div key={item.label} className={styles.metaBlock}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </RevealSection>

        <RevealSection as="section" className={styles.problemSection}>
          <h2>{c.problem.title}</h2>
          <div className={styles.bodyText}>
            <h3 className={styles.problemLead}>{c.problem.lead}</h3>
            {c.problem.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </RevealSection>

        <QuoteBlock label={c.centralQuestion.label}>{c.centralQuestion.text}</QuoteBlock>

        <RevealSection as="section" className={styles.strategySection}>
          <div className={styles.sectionIntro}>
            <h2>{c.strategy.title}</h2>
            <div className={styles.bodyText}>
              {c.strategy.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className={styles.decisionCard}>
            <p>{c.strategy.decisionLabel}</p>
            <h3>{c.strategy.decision}</h3>
          </aside>
        </RevealSection>

        <RevealSection as="section" className={styles.discoveryLeadFigure}>
          <MediaFigure
            src={formParticipantImg}
            alt={c.discovery.imageAlt}
            caption={c.discovery.imageCaption}
            imageClassName={styles.discoveryLeadImage}
          />
        </RevealSection>

        <RevealSection as="section" className={styles.discoverySection}>
          <div className={styles.discoveryIntro}>
            <h2>{c.discovery.title}</h2>
            <p>{c.discovery.intro}</p>
          </div>

          <div className={styles.discoveryGrid}>
            {c.discovery.items.map((item, index) => (
              <article key={item.title} className={styles.discoveryCard}>
                <p className={styles.cardNumber}>{String(index + 1).padStart(2, '0')}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className={styles.roleBlock}>
            <h3>{c.discovery.roleTitle}</h3>
            <div>
              {c.discovery.roleParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </RevealSection>

        <RevealSection as="section" className={styles.aiSection}>
          <div>
            <p className={styles.aiEyebrow}>AI × prioritization</p>
            <h2>{c.ai.title}</h2>
          </div>
          <div className={styles.aiContent}>
            {c.ai.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className={styles.aiNote}>{c.ai.note}</p>
          </div>
        </RevealSection>

        <RevealSection as="section" className={styles.modelSection}>
          <div className={styles.modelLayout}>
            <div className={styles.modelContent}>
              <div className={styles.modelIntro}>
                <h2>{c.model.title}</h2>
                <div className={styles.bodyText}>
                  {c.model.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className={styles.principleGrid}>
                {c.model.principles.map((principle) => (
                  <article key={principle.title} className={styles.principleCard}>
                    <h3>{principle.title}</h3>
                    <p>{principle.text}</p>
                  </article>
                ))}
              </div>
            </div>

            <figure className={`${styles.figure} ${styles.verticalFigure}`}>
              <img
                src={formParticipantImg}
                alt={c.model.overviewAlt}
                className={styles.verticalImage}
                loading="lazy"
              />
              <figcaption className={styles.caption}>{c.model.overviewCaption}</figcaption>
            </figure>
          </div>
        </RevealSection>

        <RevealSection as="section" className={styles.journeySection}>
          <div className={styles.journeyIntro}>
            <h2>{c.journey.title}</h2>
            <p>{c.journey.intro}</p>
          </div>

          <div className={styles.journeyGrid}>
            {c.journey.steps.map((step) => (
              <article key={step.number} className={styles.journeyCard}>
                <p>{step.number}</p>
                <h3>{step.title}</h3>
                <span>{step.text}</span>
              </article>
            ))}
          </div>
        </RevealSection>

        <RevealSection as="section" className={styles.queriesSection}>
          <div className={styles.sectionIntro}>
            <h2>{c.queries.title}</h2>
          </div>

          <div className={styles.queryStory}>
            <MediaFigure
              src={queriesListImg}
              alt={c.queries.listAlt}
              caption={c.queries.listCaption}
            />
            <div className={styles.storyCopy}>
              <p>{c.queries.paragraphs[0]}</p>
            </div>
          </div>

          <div className={`${styles.queryStory} ${styles.queryStoryReverse}`}>
            <MediaFigure
              src={queryThreadImg}
              alt={c.queries.threadAlt}
              caption={c.queries.threadCaption}
            />
            <div className={styles.storyCopy}>
              <p>{c.queries.paragraphs[1]}</p>
            </div>
          </div>
        </RevealSection>

        <RevealSection as="section" className={styles.governanceSection}>
          <div className={styles.sectionIntro}>
            <h2>{c.governance.title}</h2>
            <div className={styles.bodyText}>
              {c.governance.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className={`${styles.mediaGrid} ${styles.governanceMedia}`}>
            <MediaFigure
              src={auditLogImg}
              alt={c.governance.auditAlt}
              caption={c.governance.auditCaption}
            />
            <MediaFigure
              src={queryModalImg}
              alt={c.governance.modalAlt}
              caption={c.governance.modalCaption}
              imageClassName={styles.modalImage}
            />
          </div>
        </RevealSection>

        <RevealSection as="section" className={styles.prototypeCta}>
          {c.demo.href ? (
            <a href={c.demo.href} target="_blank" rel="noreferrer">
              {c.demo.label}
            </a>
          ) : (
            <span className={styles.prototypeLabel}>{c.demo.label}</span>
          )}
          <p>{c.demo.note}</p>
        </RevealSection>

        <RevealSection as="section" className={styles.impactSection}>
          <div className={styles.impactGrid}>
            <h2>{c.impact.title}</h2>
            {c.impact.stats.map((stat) => (
              <article key={stat.value} className={styles.statCard}>
                <p>{stat.value}</p>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>

          <div className={`${styles.bodyText} ${styles.impactText}`}>
            {c.impact.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </RevealSection>

        <OtherProjectsSection currentSlug="emr-integration" />
      </article>
    </Layout>
  )
}
