import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import OtherProjectsSection from '../../components/OtherProjectsSection'
import TypingTitle from '../../components/TypingTitle'
import RevealSection from '../../components/RevealSection'
import { useLanguage } from '../../context/LanguageContext'
import ptContent from '../../content/pt/case-gerdau-storeroom'
import enContent from '../../content/en/case-gerdau-storeroom'
import styles from './GerdauStoreroomPage.module.css'

import heroImg from '../../media/cases/gerdau-storeroom/gerdau-storeroom-inventory-counting-hero.jpg'
import panoramicImg from '../../media/cases/gerdau-storeroom/gerdau-storeroom-synthesis-overview.webp'
import processMappingImg from '../../media/cases/gerdau-storeroom/gerdau-storeroom-process-mapping.webp'
import cocreationSessionImg from '../../media/cases/gerdau-storeroom/gerdau-storeroom-cocreation-session.webp'
import cocreationSynthesisImg from '../../media/cases/gerdau-storeroom/gerdau-storeroom-cocreation-synthesis.webp'
import prototypeSketchImg from '../../media/cases/gerdau-storeroom/gerdau-storeroom-prototype-sketch.webp'
import testImg02 from '../../media/cases/gerdau-storeroom/gerdau-storeroom-usability-test-02.webp'
import testImg04 from '../../media/cases/gerdau-storeroom/gerdau-storeroom-usability-test-04.webp'
import refinedInterfaceImg from '../../media/cases/gerdau-storeroom/gerdau-storeroom-refined-interface.png'
import projectTeamImg from '../../media/cases/gerdau-storeroom/gerdau-storeroom-project-team.webp'
import quoteOpenImg from '../../media/shared/quotes/quote-open.png'
import quoteCloseImg from '../../media/shared/quotes/quote-close.png'
import fluxogramaImg from '../../media/cases/gerdau-storeroom/fluxograma.svg';


const VIMEO_SHADOWING = '1202496239'
const VIMEO_TEST_OPERATOR = '1204273143'
const VIMEO_STAKEHOLDER = '1204273144'
const VIMEO_OPERATION = '1204342753'


function VideoPortrait({ vimeoId, title }) {
  return (
    <div className={styles.videoPortrait}>
      <iframe
        src={`https://player.vimeo.com/video/${vimeoId}`}
        title={title}
        frameBorder="0"
        allow="fullscreen; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}

function VideoWide({ vimeoId, title }) {
  return (
    <div className={styles.videoWide}>
      <iframe
        src={`https://player.vimeo.com/video/${vimeoId}`}
        title={title}
        frameBorder="0"
        allow="fullscreen; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}


export default function GerdauStoreroomPage() {
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
      <section aria-labelledby="hero-title" className={styles.hero}>
        <TypingTitle id="hero-title" className={styles.heroTitle} lines={c.hero.titleLines} />
        <div className={styles.heroMeta}>
          <p className={styles.heroSubtitle}>{c.hero.subtitle}</p>
          <p className={styles.heroDesc}>
            {c.hero.description}
          </p>
        </div>
      </section>

      <hr className={styles.dividerFull} aria-hidden="true" />

      {/* 2. Metadata */}
      <RevealSection as="section" aria-label={c.metadata.ariaLabel} className={styles.metadata}>
        <div className={styles.container}>
          <div className={styles.metaLayout}>
            <div className={styles.metaImage}>
              <img
                src={heroImg}
                alt={c.metadata.imageAlt}
                className={styles.metaImg}
              />
            </div>
            <div className={styles.metaFields}>
              <div className={styles.metaRow}>
                {c.metadata.fields.map((field) => (
                  <div key={field.label} className={styles.metaItem}>
                    <p className={styles.metaLabel}>{field.label}</p>
                    <p className={styles.metaValue}>{field.value}</p>
                  </div>
                ))}
              </div>
              <div className={styles.metaResultBlock}>
                <p className={styles.metaLabel}>{c.metadata.result.label}</p>
                <p className={styles.metaResultMain}>{c.metadata.result.main}</p>
                <p className={styles.metaResultSub}>{c.metadata.result.sub}</p>
              </div>
              <div className={styles.metaAtuacao}>
                <p className={styles.metaLabel}>{c.metadata.contribution.label}</p>
                <p className={styles.metaAtuacaoVal}>
                  {c.metadata.contribution.value}
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 3. Panoramic */}
      <div className={styles.panoramic}>
        <div className={styles.container}>
          <img
            src={panoramicImg}
            alt={c.panoramic.alt}
            className={styles.panoramicImg}
          />
        </div>
      </div>

      {/* 4. O problema */}
      <RevealSection as="section" aria-labelledby="problema-title" className={styles.problema}>
        <div className={styles.container}>
          <div className={styles.problemaLayout}>
            <h2 id="problema-title" className={styles.sectionHeading}>{c.problem.title}</h2>
            <div className={styles.problemaText}>
              {c.problem.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 5. Pergunta central */}
      <RevealSection as="section" aria-label={c.centralQuestion.ariaLabel} className={styles.centralQuestion}>
        <div className={styles.container}>
          <img src={quoteOpenImg} alt="" aria-hidden="true" className={styles.quoteIconOpen} />
          <p className={styles.quoteLabel}>{c.centralQuestion.label}</p>
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

      {/* 6. Processo anterior + shadowing em campo */}
      <RevealSection as="section" aria-labelledby="shadowing-title" className={styles.shadowing}>
        <div className={styles.container}>
          <div className={styles.shadowingLayout}>
            <div className={styles.shadowingVideo}>
              <VideoPortrait
                vimeoId={VIMEO_SHADOWING}
                title={c.shadowing.videoTitle}
              />
              <p className={styles.caption}>
                {c.shadowing.videoCaption}
              </p>
            </div>

            <div className={styles.shadowingText}>
              <h2 id="shadowing-title" className={styles.sectionHeading}>
                {c.shadowing.title}
              </h2>

              <p className={styles.bodyTextWide}>
                {c.shadowing.body}
              </p>

              <div className={styles.flowDiagram}>
                <img
                  src={fluxogramaImg}
                  alt={c.shadowing.flowAlt}
                  className={styles.flowDiagramImage}
                />

                <div
                  className={styles.flowDiagramMobile}
                  aria-label={c.shadowing.flowMobileAriaLabel}
                >
                  <div className={styles.flowRow}>
                    {c.shadowing.flowTop.map((step, i) => (
                      <span key={step} className={styles.flowPillGroup}>
                        <span className={styles.flowPill}>{step}</span>

                        {i < c.shadowing.flowTop.length - 1 && (
                          <span className={styles.flowArrow} aria-hidden="true">
                            ↓
                          </span>
                        )}
                      </span>
                    ))}
                  </div>

                  <span
                    className={styles.flowRowConnector}
                    aria-hidden="true"
                  >
                    ↓
                  </span>

                  <div className={styles.flowRow}>
                    {c.shadowing.flowBottom.slice().reverse().map((step, i, steps) => (
                      <span key={step} className={styles.flowPillGroup}>
                        <span className={styles.flowPill}>{step}</span>

                        {i < steps.length - 1 && (
                          <span className={styles.flowArrow} aria-hidden="true">
                            ↓
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.excecaoBlock}>
                <p className={styles.bodyTextLabel}>{c.shadowing.breakLabel}</p>
                <p className={styles.excecaoText}>
                  {c.shadowing.breakLines[0]}
                  <br />
                  {c.shadowing.breakLines[1]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 8. Mapeando o fluxo real */}
      <RevealSection as="section" aria-labelledby="mapping-title" className={styles.mappingSection}>
        <div className={styles.container}>
          <h2 id="mapping-title" className={styles.sectionHeadingLeft}>
            {c.mapping.title}
          </h2>
          <div className={styles.mappingText}>
            {c.mapping.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <img
            src={processMappingImg}
            alt={c.mapping.imgAlt}
            className={styles.sectionImg}
          />
          <p className={styles.caption}>
            {c.mapping.caption}
          </p>
        </div>
      </RevealSection>

      {/* 9. Cocriação */}
      <RevealSection as="section" aria-labelledby="cocriacao-title" className={styles.cocriacaoSection}>
        <div className={styles.container}>
          <div className={styles.cocriacaoLayout}>
            <div className={styles.cocriacaoText}>
              <h2 id="cocriacao-title" className={styles.sectionHeading}>{c.cocreation.title}</h2>
              {c.cocreation.paragraphs.map((paragraph, index) => (
                <p key={index} className={styles.bodyText}>{paragraph}</p>
              ))}
            </div>
            <div className={styles.cocriacaoRight}>
              <img
                src={cocreationSessionImg}
                alt={c.cocreation.imgAlt}
                className={styles.twoColImg}
              />
              <p className={styles.caption}>
                {c.cocreation.caption}
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 10. O que precisávamos decidir */}
      <RevealSection as="section" aria-labelledby="decidir-title" className={styles.decidirSection}>
        <div className={styles.container}>
          <div className={styles.decidirLayout}>
            <div className={styles.decidirLeft}>
              <img
                src={cocreationSynthesisImg}
                alt={c.decide.imgAlt}
                className={styles.twoColImg}
              />
              <p className={styles.caption}>
                {c.decide.caption}
              </p>
            </div>
            <div className={styles.decidirText}>
              <h2 id="decidir-title" className={styles.sectionHeading}>
                {c.decide.title}
              </h2>
              <ul className={styles.decisionList}>
                {c.decide.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className={styles.bodyText}>
                {c.decide.body}
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 11. Da ideia ao protótipo */}
      <RevealSection as="section" aria-labelledby="prototipo-title" className={styles.prototypeSection}>
        <div className={styles.container}>
          <div className={styles.prototypeLayout}>
            <div className={styles.prototypeText}>
              <h2 id="prototipo-title" className={styles.sectionHeading}>
                {c.prototype.title}
              </h2>
              {c.prototype.paragraphs.map((paragraph, index) => (
                <p key={index} className={styles.bodyText}>{paragraph}</p>
              ))}
            </div>
            <div className={styles.prototypeRight}>
              <img
                src={prototypeSketchImg}
                alt={c.prototype.imgAlt}
                className={styles.twoColImg}
              />
              <p className={styles.caption}>
                {c.prototype.caption}
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 12. Testando com os operadores */}
      {/* Grid: [Video2] [test-02] / [test-04] [Video3] */}
      <RevealSection as="section" aria-labelledby="testing-title" className={styles.testingSection}>
        <div className={styles.container}>
          <h2 id="testing-title" className={styles.sectionHeadingCenter}>
            {c.testing.title}
          </h2>
          <div className={styles.testingText}>
            {c.testing.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className={styles.testGrid}>
            {/* Top-left: Video 2 (Vimeo 1204273143) */}
            <div className={styles.testCell}>
              <VideoWide
                vimeoId={VIMEO_TEST_OPERATOR}
                title={c.testing.video1Title}
              />
            </div>
            {/* Top-right: test-02.jpg */}
            <div className={styles.testCell}>
              <img
                src={testImg02}
                alt={c.testing.img02Alt}
                className={styles.testImg}
              />
            </div>
            {/* Bottom-left: test-04.jpg */}
            <div className={styles.testCell}>
              <img
                src={testImg04}
                alt={c.testing.img04Alt}
                className={styles.testImg}
              />
            </div>
            {/* Bottom-right: Video 3 (Vimeo 1204273144) */}
            <div className={styles.testCell}>
              <VideoWide
                vimeoId={VIMEO_STAKEHOLDER}
                title={c.testing.video2Title}
              />
            </div>
          </div>
          <p className={styles.caption}>
            {c.testing.caption}
          </p>
        </div>
      </RevealSection>

      {/* 13. A solução refinada */}
      <RevealSection as="section" aria-labelledby="refined-title" className={styles.refinedSection}>
        <div className={styles.container}>
          <h2 id="refined-title" className={styles.sectionHeadingCenter}>{c.refined.title}</h2>
          <div className={styles.refinedText}>
            {c.refined.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className={styles.refinedImgWrap}>
            <img
              src={refinedInterfaceImg}
              alt={c.refined.imgAlt}
              className={styles.refinedImg}
            />
          </div>
          <p className={styles.caption}>
            {c.refined.caption}
          </p>
        </div>
      </RevealSection>

      {/* 14. O produto em operação */}
      <RevealSection as="section" aria-labelledby="operation-title" className={styles.operationSection}>
        <div className={styles.container}>
          <div className={styles.operationLayout}>
            <div className={styles.operationMedia}>
              <VideoWide
                vimeoId={VIMEO_OPERATION}
                title={c.operation.videoTitle}
              />
            </div>

            <div className={styles.operationText}>
              <h2 id="operation-title" className={styles.sectionHeading}>
                {c.operation.title}
              </h2>
              <p className={styles.bodyText}>
                {c.operation.body}
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 15. Depoimento */}
      <RevealSection as="section" aria-label={c.testimonial.ariaLabel} className={styles.testimonial}>
        <div className={styles.container}>
          <img
            src={quoteOpenImg}
            alt=""
            aria-hidden="true"
            className={styles.testimonialQuoteOpen}
          />
          <blockquote className={styles.testimonialText}>
            {c.testimonial.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </blockquote>
          <img
            src={quoteCloseImg}
            alt=""
            aria-hidden="true"
            className={styles.testimonialQuoteClose}
          />
          <p className={styles.testimonialAuthor}>
            {c.testimonial.author}
          </p>
        </div>
      </RevealSection>

      {/* 16. Foto da equipe */}
      <div className={styles.teamSection}>
        <div className={styles.container}>
          <img
            src={projectTeamImg}
            alt={c.team.imgAlt}
            className={styles.teamImg}
          />
          <p className={styles.caption}>
            {c.team.caption}
          </p>
        </div>
      </div>

      {/* 17. Outros Projetos */}
      <OtherProjectsSection currentSlug="gerdau-storeroom" />
    </Layout>
  )
}
