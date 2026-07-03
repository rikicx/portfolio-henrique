import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { useLanguage } from '../context/LanguageContext'
import ptContent from '../content/pt/not-found'
import enContent from '../content/en/not-found'
import styles from './NotFoundPage.module.css'

export default function NotFoundPage() {
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
        <p className={styles.code}>404</p>
        <h1 className={styles.heading}>
          {c.heading}
        </h1>
        <p className={styles.body}>
          {c.bodyLine1}
          <br />
          {c.bodyLine2}
        </p>
        <div className={styles.links}>
          <Link to={c.worksTo} className={styles.hyperlink}>{c.worksLabel}</Link>
          <Link to={c.aboutTo} className={styles.hyperlink}>{c.aboutLabel}</Link>
        </div>
      </div>
    </Layout>
  )
}
