import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { useLanguage } from '../context/LanguageContext'
import ptContent from '../content/pt/design-system'
import enContent from '../content/en/design-system'
import styles from './DesignSystemPage.module.css'

export default function DesignSystemPage() {
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
      <div className={styles.content}>
        <header className={styles.hero}>
          <h1 className={styles.heading}>{c.hero.heading}</h1>
          <p className={styles.lead}>{c.hero.lead}</p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{c.overview.title}</h2>
          {c.overview.paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.overviewText}>
              {paragraph}
            </p>
          ))}
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{c.principles.title}</h2>
          <div className={styles.principlesGrid}>
            {c.principles.items.map((item) => (
              <div key={item.number} className={styles.principle}>
                <p className={styles.principleNumber}>{item.number}</p>
                <h3 className={styles.principleTitle}>{item.title}</h3>
                <p className={styles.principleText}>{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}
