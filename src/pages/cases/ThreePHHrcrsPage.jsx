import { useState, useEffect, useRef } from 'react'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import OtherProjectsSection from '../../components/OtherProjectsSection'
import TypingTitle from '../../components/TypingTitle'
import RevealSection from '../../components/RevealSection'
import { useLanguage } from '../../context/LanguageContext'
import ptContent from '../../content/pt/case-3ph-hrcrs'
import enContent from '../../content/en/case-3ph-hrcrs'
import styles from './ThreePHHrcrsPage.module.css'

import heroImg from '../../media/cases/3ph-hrcrs/3ph-hrcrs-hero.jpg'
import benchmarkImg from '../../media/cases/3ph-hrcrs/3ph-hrcrs-benchmark.webp'
import contentStructureImg from '../../media/cases/3ph-hrcrs/3ph-hrcrs-content-structure.webp'
import designSystemImg from '../../media/cases/3ph-hrcrs/3ph-hrcrs-design-system.jpg'
import cmsScreenImg from '../../media/cases/3ph-hrcrs/3ph-hrcrs-cms-screen-03.webp'
import governanceImg from '../../media/cases/3ph-hrcrs/3ph-hrcrs-governance-presentations.webp'
import postLaunchImg from '../../media/cases/3ph-hrcrs/3ph-hrcrs-post-launch-03.webp'
import metricTimeImg from '../../media/cases/3ph-hrcrs/3ph-hrcrs-metric-publication-time.png'
import metricRatingImg from '../../media/cases/3ph-hrcrs/3ph-hrcrs-metric-visual-rating.png'
import metricPagesImg from '../../media/cases/3ph-hrcrs/3ph-hrcrs-metric-pages.png'
import implementationIconImg from '../../media/cases/3ph-hrcrs/box-governanca-design.png'
import quoteOpenImg from '../../media/shared/quotes/quote-open.png'
import quoteCloseImg from '../../media/shared/quotes/quote-close.png'

const METRIC_ICONS = {
  time: metricTimeImg,
  rating: metricRatingImg,
  pages: metricPagesImg,
}

function EvidencePlaceholder({ evidence, className = '' }) {
  return (
    <figure className={`${styles.evidenceFigure} ${className}`.trim()}>
      <div className={styles.evidencePlaceholder}>
        <span className={styles.evidencePlaceholderLabel}>{evidence.label}</span>
      </div>
      <figcaption className={styles.caption}>{evidence.caption}</figcaption>
    </figure>
  )
}

function EditorialBlocks({ blocks, className = '' }) {
  return (
    <div className={`${styles.editorialBlocks} ${className}`.trim()}>
      {blocks.map((block, index) => (
        <div
          key={block.heading || index}
          className={`${styles.editorialBlock} ${block.emphasis ? styles.editorialBlockEmphasis : ''}`.trim()}
        >
          {block.heading && (
            <h3 className={styles.editorialLead}>{block.heading}</h3>
          )}
          <div className={styles.editorialParagraphs}>
            {block.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>{paragraph}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function ThreePHHrcrsPage() {
  const { lang } = useLanguage()
  const c = lang === 'en' ? enContent : ptContent

  const [lightboxOpen, setLightboxOpen] = useState(false)
  const openBtnRef = useRef(null)

  const openLightbox = () => setLightboxOpen(true)
  const closeLightbox = () => {
    setLightboxOpen(false)
    openBtnRef.current?.focus()
  }

  useEffect(() => {
    if (!lightboxOpen) return
    const onKey = (e) => { if (e.key === 'Escape') closeLightbox() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightboxOpen])

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
      <section aria-labelledby="hero-title" className={styles.hero}>
        <TypingTitle id="hero-title" className={styles.heroTitle} lines={c.hero.titleLines} />
        <p className={styles.heroDesc}>
          {c.hero.description}
        </p>
      </section>

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
            <div className={styles.metaFields}>
              {c.metadata.fields.map((field) => (
                <div key={field.label} className={styles.metaItem}>
                  <p className={styles.metaLabel}>{field.label}</p>
                  <p className={styles.metaValue}>{field.value}</p>
                </div>
              ))}
              <div className={styles.metaItem}>
                <p className={styles.metaLabel}>{c.metadata.strategic.label}</p>
                <p className={styles.metaValueWide}>
                  {c.metadata.strategic.value}
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 3. O problema */}
      <RevealSection as="section" aria-labelledby="problema-heading" className={styles.problemaSection}>
        <div className={styles.container}>
          <div className={styles.problemaLayout}>
            <h2 id="problema-heading" className={styles.sectionHeading}>
              {c.problem.label}
            </h2>
            <div className={styles.problemaText}>
              <p>{c.problem.title}</p>
              {c.problem.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 4. Pergunta central */}
      <RevealSection as="section" aria-label={c.centralQuestion.ariaLabel} className={styles.centralQuestion}>
        <div className={styles.container}>
          <img src={quoteOpenImg} alt="" aria-hidden="true" className={styles.quoteIconOpen} />
          <p className={styles.quoteLabel}>{c.centralQuestion.label}</p>
          <blockquote className={styles.quoteText}>
            {c.centralQuestion.text}
          </blockquote>
          <img src={quoteCloseImg} alt="" aria-hidden="true" className={styles.quoteIconClose} />
        </div>
      </RevealSection>

      {/* 5. Benchmark */}
      <RevealSection as="section" aria-labelledby="benchmark-title" className={styles.benchmarkSection}>
        <div className={styles.container}>
          <div className={styles.benchmarkLayout}>
            <figure className={styles.benchmarkFigure}>
              <img
                src={benchmarkImg}
                alt={c.benchmark.imgAlt}
                className={styles.benchmarkImg}
              />
              <figcaption className={styles.caption}>
                {c.benchmark.caption}
              </figcaption>
            </figure>
            <div className={styles.benchmarkText}>
              <p className={styles.sectionKicker}>
                {c.benchmark.kicker}
              </p>
              <h2 id="benchmark-title" className={styles.sectionHeading}>
                {c.benchmark.title}
              </h2>
              <div className={styles.bodyTextBlock}>
                {c.benchmark.introParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.benchmarkReviewLayout}>
            <EditorialBlocks
              blocks={c.benchmark.reviewBlocks}
              className={styles.benchmarkReviewText}
            />
            <EvidencePlaceholder
              evidence={c.benchmark.evidence}
              className={styles.benchmarkEvidence}
            />
          </div>
        </div>
      </RevealSection>

      {/* 6. Arquitetura de conteúdo */}
      <RevealSection as="section" aria-labelledby="content-structure-title" className={styles.contentStructureSection}>
        <div className={styles.container}>
          <div className={styles.contentStructureLayout}>
            <div className={styles.contentStructureText}>
              <h2 id="content-structure-title" className={styles.sectionHeading}>
                {c.contentStructure.title}
              </h2>
              <EditorialBlocks blocks={c.contentStructure.blocks} />
            </div>
            <figure className={styles.contentStructureFigure}>
              <button
                ref={openBtnRef}
                onClick={openLightbox}
                aria-label={c.contentStructure.lightboxOpenAriaLabel}
                className={styles.contentStructureBtn}
              >
                <img
                  src={contentStructureImg}
                  alt={c.contentStructure.imgAlt}
                  className={styles.contentStructureImg}
                />
              </button>
              <p className={styles.contentStructureTapHint}>{c.contentStructure.tapHint}</p>
              <figcaption className={styles.caption}>
                {c.contentStructure.caption}
              </figcaption>
            </figure>
          </div>
        </div>
      </RevealSection>

      {/* 7. Design System */}
      <RevealSection as="section" aria-labelledby="design-system-title" className={styles.designSystemSection}>
        <div className={styles.container}>
          <h2 id="design-system-title" className={styles.designSystemHeading}>
            {c.designSystem.title}
          </h2>
          <div className={`${styles.bodyTextBlockWide} ${styles.designSystemBaseText}`}>
            {c.designSystem.baseParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <figure className={styles.designSystemFigure}>
            <img
              src={designSystemImg}
              alt={c.designSystem.imgAlt}
              className={styles.designSystemImg}
            />
            <figcaption className={styles.caption}>
              {c.designSystem.caption}
            </figcaption>
          </figure>
          <div className={styles.designSystemAiLayout}>
            <EvidencePlaceholder
              evidence={c.designSystem.evidence}
              className={styles.designSystemEvidence}
            />
            <EditorialBlocks
              blocks={c.designSystem.aiBlocks}
              className={styles.designSystemAiText}
            />
          </div>
        </div>
      </RevealSection>

      {/* 8. CMS — O site precisava continuar vivo */}
      <RevealSection as="section" aria-labelledby="cms-title" className={styles.cmsSection}>
        <div className={styles.container}>
          <div className={styles.cmsLayout}>
            <div className={styles.cmsText}>
              <h2 id="cms-title" className={styles.sectionHeading}>
                {c.cms.title}
              </h2>
              <div className={styles.bodyTextBlock}>
                {c.cms.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <figure className={styles.cmsImages}>
              <img
                src={cmsScreenImg}
                alt={c.cms.imgAlt}
                className={styles.cmsImg}
              />
              <figcaption className={styles.caption}>
                {c.cms.caption}
              </figcaption>
            </figure>
          </div>
        </div>
      </RevealSection>

      {/* 9. Governança — Fazer o projeto andar */}
      <RevealSection as="section" aria-labelledby="governance-title" className={styles.governanceSection}>
        <div className={styles.container}>
          <div className={styles.governanceLayout}>
            <figure className={styles.governanceFigure}>
              <img
                src={governanceImg}
                alt={c.governance.imgAlt}
                className={styles.governanceImg}
              />
              <figcaption className={styles.caption}>
                {c.governance.caption}
              </figcaption>
            </figure>
            <div className={styles.governanceText}>
              <h2 id="governance-title" className={styles.sectionHeading}>
                {c.governance.title}
              </h2>
              <EditorialBlocks blocks={c.governance.blocks} />
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 10. Implementação e governança */}
      <RevealSection as="section" aria-labelledby="implementation-title" className={styles.implementationSection}>
        <div className={styles.container}>
          <h2 id="implementation-title" className={styles.sectionHeading}>
            {c.implementation.title}
          </h2>
          <div className={styles.implementationContent}>
            <EvidencePlaceholder
              evidence={c.implementation.evidence}
              className={styles.implementationEvidence}
            />
            <div className={styles.implementationBox}>
              <div className={styles.webflowLogoWrap} aria-hidden="true">
                <img
                  src={implementationIconImg}
                  alt=""
                  className={styles.webflowLogo}
                />
              </div>
              <EditorialBlocks
                blocks={c.implementation.introBlocks}
                className={styles.implementationText}
              />
            </div>
            <EditorialBlocks
              blocks={c.implementation.continuationBlocks}
              className={`${styles.implementationText} ${styles.implementationContinuation}`}
            />
          </div>
        </div>
      </RevealSection>

      {/* 11. Pós-lançamento */}
      <RevealSection as="section" aria-labelledby="post-launch-title" className={styles.postLaunchSection}>
        <div className={styles.container}>
          <div className={styles.postLaunchLayout}>
            <div className={styles.postLaunchText}>
              <h2 id="post-launch-title" className={styles.sectionHeading}>
                {c.postLaunch.title}
              </h2>
              <div className={styles.bodyTextBlock}>
                {c.postLaunch.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <figure className={styles.postLaunchImages}>
              <img
                src={postLaunchImg}
                alt={c.postLaunch.imgAlt}
                className={styles.postLaunchImg}
              />
              <figcaption className={styles.caption}>
                {c.postLaunch.caption}
              </figcaption>
            </figure>
          </div>
        </div>
      </RevealSection>

      {/* 12. Impacto além dos sites */}
      <RevealSection as="section" aria-labelledby="impact-title" className={styles.impactSection}>
        <div className={styles.container}>
          <div className={styles.impactLayout}>
            <div className={styles.impactText}>
              <h2 id="impact-title" className={styles.sectionHeading}>
                {c.impact.title}
              </h2>
              <div className={styles.bodyTextBlock}>
                {c.impact.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className={styles.metricBoxes}>
              {c.impact.metrics.map((metric) => (
                <div key={metric.key} className={styles.metricBox}>
                  {METRIC_ICONS[metric.key] ? (
                    <img src={METRIC_ICONS[metric.key]} alt="" aria-hidden="true" className={styles.metricIcon} />
                  ) : (
                    <div className={styles.metricIconPlaceholder} aria-hidden="true">CMS</div>
                  )}
                  <div className={styles.metricContent}>
                    <p className={styles.metricMain}>{metric.main}</p>
                    <p className={styles.metricSub}>{metric.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 13. Outros Projetos */}
      <OtherProjectsSection currentSlug="3ph-hrcrs-digital-ecosystem" />

      {/* Lightbox — arquitetura de conteúdo */}
      {lightboxOpen && (
        <div
          className={styles.lightboxOverlay}
          onClick={(e) => { if (e.target === e.currentTarget) closeLightbox() }}
          role="dialog"
          aria-modal="true"
          aria-label={c.lightbox.dialogAriaLabel}
        >
          <button
            className={styles.lightboxClose}
            onClick={closeLightbox}
            aria-label={c.lightbox.closeAriaLabel}
          >
            <span>{c.lightbox.closeLabel}</span>
            <span aria-hidden="true">×</span>
          </button>
          <img
            src={contentStructureImg}
            alt={c.lightbox.imgAlt}
            className={styles.lightboxImg}
          />
        </div>
      )}

    </Layout>
  )
}
