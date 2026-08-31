import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import { useLanguage } from '../../context/LanguageContext'
import styles from './QiPrototypePage.module.css'

const COPY = {
  pt: {
    seoTitle: 'Protótipo EMR Integration | Henrique Silva',
    seoDescription: 'Protótipo funcional do EMR Integration com dados demonstrativos.',
    seoPath: '/trabalhos/emr-integration/prototipo',
    backLabel: 'Voltar ao case',
    backHref: '/trabalhos/emr-integration',
    eyebrow: 'EMR Integration · protótipo funcional',
    title: 'Explore a reconciliação em funcionamento',
    description:
      'Uma demonstração navegável do fluxo entre formulário, evidências, queries e audit log, com dados simulados e experiência projetada para desktop.',
    windowTitle: 'EMR Integration — ambiente demonstrativo',
    openLabel: 'Abrir em tela cheia',
    frameTitle: 'Protótipo funcional do EMR Integration',
  },
  en: {
    seoTitle: 'EMR Integration Prototype | Henrique Silva',
    seoDescription: 'Functional EMR Integration prototype with demonstration data.',
    seoPath: '/en/work/emr-integration/prototype',
    backLabel: 'Back to case study',
    backHref: '/en/work/emr-integration',
    eyebrow: 'EMR Integration · functional prototype',
    title: 'Explore reconciliation in action',
    description:
      'A navigable walkthrough across the form, evidence, queries, and audit log, with simulated data and a desktop-first experience.',
    windowTitle: 'EMR Integration — demonstration environment',
    openLabel: 'Open full screen',
    frameTitle: 'EMR Integration functional prototype',
  },
}

export default function EmrPrototypePage() {
  const { lang } = useLanguage()
  const c = COPY[lang === 'en' ? 'en' : 'pt']
  const prototypeUrl = '/demos/emr-integration/index.html'

  return (
    <Layout>
      <Seo
        title={c.seoTitle}
        description={c.seoDescription}
        path={c.seoPath}
        lang={lang === 'en' ? 'en' : 'pt'}
        robots="noindex, nofollow"
      />

      <article className={styles.page}>
        <a className={styles.backLink} href={c.backHref}>
          ← {c.backLabel}
        </a>

        <header className={styles.intro}>
          <div>
            <p className={styles.eyebrow}>{c.eyebrow}</p>
            <h1>{c.title}</h1>
          </div>
          <p className={styles.description}>{c.description}</p>
        </header>

        <section className={styles.window} aria-label={c.windowTitle}>
          <div className={styles.windowBar}>
            <div className={styles.windowDots} aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <p>{c.windowTitle}</p>
            <a href={prototypeUrl} target="_blank" rel="noreferrer">
              {c.openLabel} ↗
            </a>
          </div>

          <div className={styles.frameScroll}>
            <iframe
              className={styles.frame}
              src={prototypeUrl}
              title={c.frameTitle}
              loading="eager"
            />
          </div>
        </section>
      </article>
    </Layout>
  )
}
