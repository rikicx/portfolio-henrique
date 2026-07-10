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
        <h1 className={styles.heading}>{c.heading}</h1>
        <p className={styles.body}>{c.body}</p>
      </div>
    </Layout>
  )
}
