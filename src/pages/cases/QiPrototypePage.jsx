import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import { useLanguage } from '../../context/LanguageContext'
import styles from './QiPrototypePage.module.css'

const COPY = {
  pt: {
    seoTitle: 'Protótipo QI Platform | Henrique Silva',
    seoDescription: 'Protótipo funcional do QI Platform com dados demonstrativos.',
    seoPath: '/trabalhos/qi-platform/prototipo',
    backLabel: 'Voltar ao case',
    backHref: '/trabalhos/qi-platform',
    eyebrow: 'QI Platform · protótipo funcional',
    title: 'Explore o produto em funcionamento',
    description:
      'Uma demonstração navegável do handoff, com dados simulados e experiência projetada para desktop.',
    windowTitle: 'QI Platform — ambiente demonstrativo',
    openLabel: 'Abrir em tela cheia',
    frameTitle: 'Protótipo funcional do QI Platform',
  },
  en: {
    seoTitle: 'QI Platform Prototype | Henrique Silva',
    seoDescription: 'Functional QI Platform prototype with demonstration data.',
    seoPath: '/en/work/qi-platform/prototype',
    backLabel: 'Back to case study',
    backHref: '/en/work/qi-platform',
    eyebrow: 'QI Platform · functional prototype',
    title: 'Explore the product in action',
    description:
      'A navigable handoff demonstration with simulated data, designed for desktop use.',
    windowTitle: 'QI Platform — demonstration environment',
    openLabel: 'Open full screen',
    frameTitle: 'QI Platform functional prototype',
  },
}

export default function QiPrototypePage() {
  const { lang } = useLanguage()
  const c = COPY[lang === 'en' ? 'en' : 'pt']
  const prototypeUrl = '/demos/qi-platform/index.html'

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
