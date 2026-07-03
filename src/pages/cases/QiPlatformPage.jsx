import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import OtherProjectsSection from '../../components/OtherProjectsSection'
import TypingTitle from '../../components/TypingTitle'
import RevealSection from '../../components/RevealSection'
import { useLanguage } from '../../context/LanguageContext'
import ptContent from '../../content/pt/case-qi-platform'
import enContent from '../../content/en/case-qi-platform'
import styles from './QiPlatformPage.module.css'
import headOfDesignRoleImg from '../../media/cases/qi-platform/head-of-design-role.png'
import qiMiroCocreationImg from '../../media/cases/qi-platform/QI-Miro-Cocreation.png'

import heroTabletImg from '../../media/cases/qi-platform/qi-platform-tablet.webp'
import comparisonImg from '../../media/cases/qi-platform/comparar-sem-expor.png'
import evolutionImg from '../../media/cases/qi-platform/emr-evolution-charts.webp'
import myEvolutionIcon from '../../media/cases/qi-platform/evolucao.svg'
import groupsIcon from '../../media/cases/qi-platform/grupos-preferencia.svg'
import networkIcon from '../../media/cases/qi-platform/visao-rede.svg'
import investigationIcon from '../../media/cases/qi-platform/investigacao.svg'
import quoteOpenImg from '../../media/shared/quotes/quote-open.png'
import quoteCloseImg from '../../media/shared/quotes/quote-close.png'

const QUESTION_ICONS = {
  evolution: myEvolutionIcon,
  groups: groupsIcon,
  network: networkIcon,
  investigation: investigationIcon,
}

function MetaValue({ value }) {
  if (Array.isArray(value)) {
    return (
      <span className={styles.metaValue}>
        {value.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </span>
    )
  }

  return <span className={styles.metaValue}>{value}</span>
}

function QuoteBlock({ label = null, children, compact = false }) {
  return (
    <figure
      className={`${styles.quoteBlock}${compact ? ` ${styles.quoteCompact}` : ''}`}
    >
      <img
        src={quoteOpenImg}
        alt=""
        className={`${styles.quoteIcon} ${styles.quoteIconOpen}`}
        aria-hidden="true"
      />
      {label && <figcaption className={styles.quoteLabel}>{label}</figcaption>}
      <blockquote className={styles.quoteText}>{children}</blockquote>
      <img
        src={quoteCloseImg}
        alt=""
        className={`${styles.quoteIcon} ${styles.quoteIconClose}`}
        aria-hidden="true"
      />
    </figure>
  )
}


export default function QiPlatformPage() {
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
        <section className={styles.hero} aria-labelledby="qi-title">
          <TypingTitle id="qi-title" className={styles.heroTitle} lines={c.hero.titleLines} />

          <div className={styles.heroMeta}>
            <p className={styles.heroKicker}>
              {c.hero.kicker}
            </p>
            <p className={styles.heroDescription}>
              {c.hero.description}
            </p>
          </div>
        </section>

        <hr className={styles.dividerFull} aria-hidden="true" />

        <RevealSection as="section"
          className={styles.metadata}
          aria-label={c.metadata.ariaLabel}
        >
          <div className={styles.container}>
            <div className={styles.metaLayout}>
              <figure className={`${styles.figure} ${styles.metaImage}`}>
                <img
                  src={heroTabletImg}
                  alt={c.metadata.imageAlt}
                  className={styles.metaImg}
                />
              </figure>

              <dl className={styles.metaFields}>
                <div className={styles.metaRow}>
                  {c.metadata.items.slice(0, 3).map((item) => (
                    <div key={item.label} className={styles.metaItem}>
                      <dt className={styles.metaLabel}>{item.label}</dt>
                      <dd>
                        <MetaValue value={item.value} />
                      </dd>
                    </div>
                  ))}
                </div>

                {c.metadata.items.slice(3).map((item) => (
                  <div key={item.label} className={styles.metaBlock}>
                    <dt className={styles.metaLabel}>{item.label}</dt>
                    <dd>
                      <MetaValue value={item.value} />
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </RevealSection>

        <RevealSection as="section" className={styles.problemSection}>
          <h2>{c.problem.title}</h2>
          <div className={styles.bodyText}>
            {c.problem.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </RevealSection>

        <QuoteBlock label={c.centralQuestion.label}>
          {c.centralQuestion.text}
        </QuoteBlock>

        <RevealSection as="section"
          className={`${styles.storyGrid} ${styles.imageLeft} ${styles.discoverySection}`}
        >
          <h2>{c.discovery.title}</h2>
          <figure className={`${styles.figure} ${styles.storyFigure}`}>
            <img
              src={qiMiroCocreationImg}
              alt={c.discovery.imgAlt}
              className={`${styles.imageCover} ${styles.miroImage}`}
            />
          </figure>
          <div className={styles.bodyText}>
            {c.discovery.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </RevealSection>

        <QuoteBlock compact>
          {c.compactQuote}
        </QuoteBlock>

        <RevealSection as="section" className={styles.productSection}>
          <div className={styles.productIntro}>
            <h2>{c.product.title}</h2>
            <p>
              {c.product.intro}
            </p>
          </div>

          <div className={styles.questionGrid}>
            {c.product.questions.map((item) => (
              <article key={item.key} className={styles.questionCard}>
                <img src={QUESTION_ICONS[item.key]} alt="" className={styles.questionIcon} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>

          <p className={styles.productNote}>
            {c.product.noteLines[0]}
            <br />
            {c.product.noteLines[1]}
          </p>
        </RevealSection>

        <RevealSection as="section"
          className={`${styles.storyGrid} ${styles.imageLeft} ${styles.comparisonSection}`}
        >
          <figure className={`${styles.figure} ${styles.storyFigure}`}>
            <img
              src={comparisonImg}
              alt={c.comparison.imgAlt}
              className={`${styles.imageCover} ${styles.comparisonImage}`}
            />
            <figcaption className={styles.caption}>
              {c.comparison.caption}
            </figcaption>
          </figure>

          <div className={styles.comparisonContent}>
            <h2>{c.comparison.title}</h2>
            <div className={styles.bodyText}>
              <p>
                {c.comparison.body}
              </p>
            </div>
          </div>
        </RevealSection>

        <RevealSection as="section"
          className={`${styles.storyGrid} ${styles.imageRight} ${styles.roleMobileSection}`}
        >
          <h2>{c.role.title}</h2>

          <figure className={`${styles.figure} ${styles.storyFigure}`}>
            <img
              src={headOfDesignRoleImg}
              alt={c.role.imgAlt}
              className={`${styles.imageCover} ${styles.roleImage}`}
            />
          </figure>

          <div className={styles.bodyText}>
            {c.role.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </RevealSection>

        <RevealSection as="section"
          className={`${styles.storyGrid} ${styles.imageLeft} ${styles.evolutionSection}`}
        >
          <h2>{c.evolution.title}</h2>
          <figure className={`${styles.figure} ${styles.storyFigure}`}>
            <img
              src={evolutionImg}
              alt={c.evolution.imgAlt}
              className={`${styles.imageCover} ${styles.evolutionImage}`}
            />
            <figcaption className={styles.caption}>
              {c.evolution.caption}
            </figcaption>
          </figure>
          <div className={styles.bodyText}>
            {c.evolution.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </RevealSection>

        <RevealSection as="section" className={styles.impactSection}>
          <div className={styles.impactGrid}>
            <h2>{c.impact.title}</h2>
            {c.impact.stats.map((stat) => (
              <article
                key={stat.value}
                className={`${styles.statCard}${stat.wide ? ` ${styles.statWide}` : ''}`}
              >
                <p className={styles.statValue}>{stat.value}</p>
                <p className={styles.statLabel}>{stat.label}</p>
              </article>
            ))}
          </div>

          <div className={`${styles.bodyText} ${styles.impactText}`}>
            {c.impact.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </RevealSection>

        <OtherProjectsSection currentSlug="qi-platform" />
      </article>
    </Layout>
  )
}
