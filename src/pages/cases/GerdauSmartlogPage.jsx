import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import OtherProjectsSection from '../../components/OtherProjectsSection'
import TypingTitle from '../../components/TypingTitle'
import RevealSection from '../../components/RevealSection'
import { useLanguage } from '../../context/LanguageContext'
import ptContent from '../../content/pt/case-gerdau-smartlog'
import enContent from '../../content/en/case-gerdau-smartlog'
import styles from './GerdauSmartlogPage.module.css'

import heroImg from '../../media/cases/gerdau-smartlog/smartlog-hero.webp'
import cocriacaoPanoramicaImg from '../../media/cases/gerdau-smartlog/smartlog-cocriacao-panoramica.jpg'
import estruturando01Img from '../../media/cases/gerdau-smartlog/smartlog-estruturando-01.jpg'
import estruturando02Img from '../../media/cases/gerdau-smartlog/smartlog-estruturando-02.webp'
import projetandoImg from '../../media/cases/gerdau-smartlog/smartlog-projetando.webp'
import validandoImg from '../../media/cases/gerdau-smartlog/smartlog-validando.jpg'
import produtoImg from '../../media/cases/gerdau-smartlog/smartlog-produto-cropped.webp'
import smartlogLogoSvg from '../../media/cases/gerdau-smartlog/smartlog-logo.svg'
import quoteOpenImg from '../../media/shared/quotes/quote-open.png'
import quoteCloseImg from '../../media/shared/quotes/quote-close.png'

export default function GerdauSmartlogPage() {
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
              {c.metadata.fields.map((field) => (
                <div key={field.label} className={styles.metaItem}>
                  <p className={styles.metaLabel}>{field.label}</p>
                  <p className={styles.metaValue}>{field.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 3. O problema */}
      <RevealSection as="section" aria-labelledby="problema-title" className={styles.problema}>
        <div className={styles.container}>
          <div className={styles.problemaLayout}>
            <h2 id="problema-title" className={styles.sectionHeading}>
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
          <img
            src={quoteCloseImg}
            alt=""
            aria-hidden="true"
            className={styles.quoteIconClose}
          />
        </div>
      </RevealSection>

      {/* 5. Cocriação como parte do processo */}
      <RevealSection as="section" aria-labelledby="cocriacao-title" className={styles.cocriacao}>
        <div className={styles.container}>
          <div className={styles.cocriacaoLayout}>
            <h2 id="cocriacao-title" className={styles.sectionHeading}>
              {c.cocreation.title}
            </h2>

            <div className={styles.cocriacaoText}>
              {c.cocreation.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <p className={styles.cocriacaoBreak}>
                {c.cocreation.breakParagraph}
              </p>
            </div>

            <div className={styles.cocriacaoPanoramica}>
              <img
                src={cocriacaoPanoramicaImg}
                alt={c.cocreation.imgAlt}
                className={styles.panoramicImg}
              />
              <p className={styles.mediaCaption}>
                {c.cocreation.caption}
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 6. Estruturando a complexidade */}
      <RevealSection as="section" aria-labelledby="estruturando-title" className={styles.estruturando}>
        <div className={styles.container}>
          <div className={styles.estruturandoLayout}>
            <div className={styles.estruturandoText}>
              <h2 id="estruturando-title" className={styles.sectionHeading}>
                {c.structuring.title}
              </h2>
              <div className={styles.bodyBlock}>
                <p>
                  {c.structuring.paragraphs[0]}
                </p>
                <p className={styles.textGap}>
                  {c.structuring.paragraphs[1]}
                </p>
              </div>
            </div>
            <div className={styles.estruturandoImages}>
              <div className={styles.processFigure}>
                <img
                src={estruturando01Img}
                alt={c.structuring.img1Alt}
                className={styles.estruturandoImg}
              />
                <p className={styles.mediaCaption}>
                  {c.structuring.caption1}
                </p>
              </div>
              <div className={styles.processFigure}>
                <img
                src={estruturando02Img}
                alt={c.structuring.img2Alt}
                className={styles.estruturandoImg}
              />
                <p className={styles.mediaCaption}>
                  {c.structuring.caption2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 7. Projetando para a ação */}
      <RevealSection as="section" aria-labelledby="projetando-title" className={styles.projetando}>
        <div className={styles.container}>
          <div className={styles.projetandoLayout}>
            <div className={styles.projetandoMedia}>
              <img
                src={projetandoImg}
                alt={c.designing.imgAlt}
                className={styles.projetandoImg}
              />
              <p className={styles.mediaCaption}>
                {c.designing.caption}
              </p>
            </div>
            <div className={styles.projetandoText}>
              <h2 id="projetando-title" className={styles.sectionHeading}>
                {c.designing.title}
              </h2>
              <div className={styles.bodyBlock}>
                {c.designing.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 8. Validando a lógica com a operação */}
      <RevealSection as="section" aria-labelledby="validando-title" className={styles.validando}>
        <div className={styles.container}>
          <div className={styles.validandoLayout}>
            <div className={styles.validandoMedia}>
              <img
                src={validandoImg}
                alt={c.validating.imgAlt}
                className={styles.validandoImg}
              />
              <p className={styles.mediaCaption}>
                {c.validating.caption}
              </p>
            </div>
            <div className={styles.validandoText}>
              <h2 id="validando-title" className={styles.sectionHeading}>
                {c.validating.title}
              </h2>
              <div className={styles.bodyBlock}>
                <p>
                  {c.validating.paragraphs[0]}
                </p>
                <p className={styles.textGap}>
                  {c.validating.paragraphs[1]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 9. Produto em operação */}
      <RevealSection as="section" aria-labelledby="produto-title" className={styles.produto}>
        <div className={styles.container}>
          <h2 id="produto-title" className={styles.sectionHeadingCenter}>
            {c.product.title}
          </h2>
          <p className={styles.produtoDesc}>
            {c.product.description}
          </p>
          <div className={styles.smartlogLogoWrap}>
            <img src={smartlogLogoSvg} alt={c.product.logoAlt} className={styles.smartlogLogo} />
          </div>
          <div className={styles.produtoImgWrap}>
            <img
              src={produtoImg}
              alt={c.product.imgAlt}
              className={styles.produtoImg}
            />
          </div>
        </div>
      </RevealSection>

      {/* 10. Outros Projetos */}
      <OtherProjectsSection currentSlug="gerdau-smartlog" />
    </Layout>
  )
}
