import { useRef } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useLanguage } from '../context/LanguageContext'
import { useFooterRevealed } from '../hooks/useFooterRevealed'
import ptNav from '../content/pt/nav'
import enNav from '../content/en/nav'
import styles from './Layout.module.css'

export default function Layout({ children = null }) {
  const { lang } = useLanguage()
  const c = lang === 'en' ? enNav : ptNav
  const mainRef = useRef(null)
  useFooterRevealed(mainRef)

  return (
    <>
      {/* Primeiro elemento focável da página: pula a navegação inteira. */}
      <a className="skipLink" href="#conteudo">
        {c.skipToContent}
      </a>

      <Navbar />

      <div className={styles.pageBackground}>
        <main ref={mainRef} id="conteudo" className={styles.main} tabIndex={-1}>
          {children}
        </main>

        <Footer />
      </div>
    </>
  )
}
