import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import styles from './NotFoundPage.module.css'

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo
        title="Página não encontrada — Henrique Silva"
        description="A página que você procura não foi encontrada."
        path="/404"
        noIndex
      />
      <div className={styles.content}>
        <p className={styles.code}>404</p>
        <h1 className={styles.heading}>
          Parece que este caminho não leva a uma página.
        </h1>
        <p className={styles.body}>
          O conteúdo que você procura pode ter mudado de lugar ou simplesmente não existir mais.
          <br />
          Você pode continuar pelos meus trabalhos ou conhecer um pouco mais sobre minha trajetória.
        </p>
        <div className={styles.links}>
          <Link to="/trabalhos" className={styles.hyperlink}>Ver meus trabalhos →</Link>
          <Link to="/sobre" className={styles.hyperlink}>Sobre mim →</Link>
        </div>
      </div>
    </Layout>
  )
}
