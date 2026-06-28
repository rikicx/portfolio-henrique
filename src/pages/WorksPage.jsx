import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import styles from './WorksPage.module.css'

import qiImg from '../media/shared/projects/card-qi-platform.webp'
import itauImg from '../media/shared/projects/itau-cover.jpg'
import emrImg from '../media/shared/projects/emr-integration-cover.png'
import storeroomImg from '../media/shared/projects/card-gerdau-storeroom.png'
import threePhImg from '../media/shared/projects/3ph-hrcrs-cover.jpg'
import smartlogImg from '../media/shared/projects/gerdau-smartlog-cover.webp'
import worksInfographic from '../media/works/works-infographic.svg?raw'

const PROJECTS = [
  {
    slug: 'gerdau-storeroom',
    title: 'Gerdau Storeroom',
    category: 'Indústria · Product Designer',
    img: storeroomImg,
    alt: 'Gerdau Storeroom — gestão de almoxarifado industrial',
  },
  {
    slug: 'qi-platform',
    title: 'QI Platform',
    category: 'Saúde · Head of Design',
    img: qiImg,
    alt: 'Interface da QI Platform — plataforma de dados clínicos',
  },
  {
    slug: 'emr-integration',
    title: 'EMR Integration',
    category: 'Saúde · Head of Design',
    img: emrImg,
    alt: 'EMR Integration — integração de prontuários eletrônicos',
  },
  {
    slug: 'gerdau-smartlog',
    title: 'Gerdau Smartlog',
    category: 'Indústria · Product Designer',
    img: smartlogImg,
    alt: 'Gerdau Smartlog — logística e rastreamento industrial',
  },
  {
    slug: '3ph-hrcrs-digital-ecosystem',
    title: '3PH Alliance & HRCRS Digital Ecosystem',
    category: 'Saúde · Head of Design',
    img: threePhImg,
    alt: '3PH Alliance e HRCRS Digital Ecosystem — ecossistema digital na saúde',
  },
  {
    slug: 'itau-empreendedor',
    title: 'Itaú Empreendedora',
    category: 'Finanças · Product Designer',
    img: itauImg,
    alt: 'Itaú Empreendedora — experiência financeira para mulheres empreendedoras',
  },
]

const LEFT_PROJECTS = PROJECTS.filter((_, index) => index % 2 === 0)
const RIGHT_PROJECTS = PROJECTS.filter((_, index) => index % 2 !== 0)

function ProjectCard({ project }) {
  return (
    <Link
      to={`/trabalhos/${project.slug}`}
      className={styles.card}
      aria-label={`Ver projeto ${project.title}`}
    >
      <img
        src={project.img}
        alt={project.alt}
        className={styles.cardImg}
      />

      <span className={styles.cardOverlay} aria-hidden="true" />

      <span className={styles.cardContent}>
        <span className={styles.cardTextBlock}>
          <span className={styles.cardCategory}>{project.category}</span>
          <span className={styles.cardTitle}>{project.title}</span>
        </span>

        <span className={styles.cardCta}>Ver Projeto →</span>
      </span>
    </Link>
  )
}

export default function WorksPage() {
  return (
    <Layout>
      <section className={styles.page} aria-label="Todos os trabalhos">
        <div className={styles.header}>
          <div className={styles.headerText}>
            <h1 className={styles.pageTitle}>
              <span>Trabalhos</span>
              <span>Selecionados</span>
            </h1>

            <p className={styles.pageDescription}>
              Uma seleção de projetos em que atuei entre estratégia, pesquisa, produto,
              experiência e liderança de design.
            </p>
          </div>

          <div
            className={styles.infographic}
            aria-hidden="true"
          >
            <div
              className={styles.infographicSvg}
              dangerouslySetInnerHTML={{ __html: worksInfographic }}
            />
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.colLeft}>
            {LEFT_PROJECTS.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className={styles.colRight}>
            {RIGHT_PROJECTS.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
