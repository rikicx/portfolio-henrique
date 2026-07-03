import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import OtherProjectsSection from '../../components/OtherProjectsSection'
import TypingTitle from '../../components/TypingTitle'
import RevealSection from '../../components/RevealSection'
import { useLanguage } from '../../context/LanguageContext'
import ptContent from '../../content/pt/case-itau-empreendedor'
import enContent from '../../content/en/case-itau-empreendedor'
import styles from './ItauEmpreendedorPage.module.css'

import metaHeroImg from '../../media/cases/itau-empreendedor/itau-meta-hero.jpg'
import cocriacao01 from '../../media/cases/itau-empreendedor/itau-cocriacao-01.webp'
import cocriacao02 from '../../media/cases/itau-empreendedor/itau-cocriacao-02.jpg'
import cocriacao03 from '../../media/cases/itau-empreendedor/itau-cocriacao-03.jpg'
import cocriacao04 from '../../media/cases/itau-empreendedor/itau-cocriacao-04.jpg'
import daConversaImg from '../../media/cases/itau-empreendedor/itau-da-conversa.jpg'
import produtoImg from '../../media/cases/itau-empreendedor/itau-produto.webp'
import quoteOpenImg from '../../media/shared/quotes/quote-open.png'
import quoteCloseImg from '../../media/shared/quotes/quote-close.png'

const COCRIACAO_PHOTOS = [cocriacao01, cocriacao02, cocriacao03, cocriacao04]

export default function ItauEmpreendedorPage() {
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
      <section aria-labelledby="itau-title" className={styles.hero}>
        <TypingTitle id="itau-title" className={styles.heroTitle} lines={c.hero.titleLines} />
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
                src={metaHeroImg}
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
              {c.metadata.fields.map((field) => (
                <div key={field.label} className={styles.metaItem}>
                  <dt className={styles.metaLabel}>{field.label}</dt>
                  <dd className={styles.metaValue}>
                    {field.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </RevealSection>

      {/* 3. O problema */}
      <RevealSection as="section" aria-labelledby="itau-problema" className={styles.desafio}>
        <div className={styles.container}>
          <div className={styles.desafioLayout}>
            <div className={styles.desafioLabelCol}>
              <p id="itau-problema" className={styles.desafioLabel}>
                {c.problem.label}
              </p>
            </div>
            <div className={styles.desafioText}>
              <p>
                {c.problem.paragraphs[0]}
              </p>
              <p>{c.problem.paragraphs[1]}</p>
              <p className={styles.textGap}>
                {c.problem.paragraphs[2]}
              </p>
              <p className={styles.textGap}>
                {c.problem.paragraphs[3]}
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

      {/* 5. Construindo com as empreendedoras */}
      <RevealSection as="section" aria-labelledby="itau-construindo" className={styles.construindo}>
        <div className={styles.container}>
          <h2 id="itau-construindo" className={styles.sectionHeading}>
            {c.building.title}
          </h2>
          <div className={styles.construindoText}>
            <p>
              {c.building.paragraphs[0]}
            </p>
            <p className={styles.questionsIntro}>
              {c.building.questionsIntro}
            </p>

            <div
              className={styles.questionsGrid}
              aria-label={c.building.questionsAriaLabel}
            >
              {c.building.questions.map((question) => (
                <div key={question.number} className={styles.questionCard}>
                  <span className={styles.questionNumber}>{question.number}</span>
                  <p className={styles.questionText}>{question.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.fotoGrid}>
          {COCRIACAO_PHOTOS.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={c.building.photoAlts[index]}
              className={styles.fotoItem}
            />
          ))}
        </div>

        <div className={styles.container}>
          <p className={styles.fotoCaption}>
            {c.building.photoCaption}
          </p>
        </div>
      </RevealSection>

      {/* 6. Da conversa para o protótipo */}
      <RevealSection as="section" aria-labelledby="itau-conversa" className={styles.conversa}>
        <div className={styles.container}>
          <div className={styles.conversaLayout}>
            <div className={styles.conversaTextCol}>
              <h2 id="itau-conversa" className={styles.sectionHeading}>
                {c.conversation.titleLines[0]}{' '}<br aria-hidden="true" />{c.conversation.titleLines[1]}
              </h2>
              <div className={styles.conversaText}>
                <p>
                  {c.conversation.paragraphs[0]}
                </p>
                <p className={styles.textGap}>
                  {c.conversation.paragraphs[1]}
                </p>
                <p className={styles.textGap}>
                  {c.conversation.paragraphs[2]}
                </p>
              </div>
            </div>
            <div className={styles.conversaImageCol}>
              <img
                src={daConversaImg}
                alt={c.conversation.imgAlt}
                className={styles.conversaImg}
              />
              <p className={styles.conversaCaption}>
                {c.conversation.caption}
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 7. Aprendizado e prática no mesmo produto */}
      <RevealSection as="section" aria-labelledby="itau-aprendizado" className={styles.aprendizado}>
        <div className={styles.container}>
          <h2 id="itau-aprendizado" className={styles.sectionHeading}>
            {c.learning.title}
          </h2>
          <p className={styles.aprendizadoText}>
            {c.learning.body}
          </p>
        </div>

        <div className={styles.produtoWrap}>
          <img
            src={produtoImg}
            alt={c.learning.imgAlt}
            className={styles.produtoImg}
          />
          <p className={styles.produtoCaption}>
            {c.learning.caption}
          </p>
        </div>
      </RevealSection>

      {/* 8. Outros Projetos */}
      <OtherProjectsSection currentSlug="itau-empreendedor" />
    </Layout>
  )
}
