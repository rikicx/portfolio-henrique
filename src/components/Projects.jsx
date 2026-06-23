import { Link } from 'react-router-dom'
import styles from './Projects.module.css'
import qiImg from '../media/card-qi-platform.png'
import gerdauImg from '../media/card-gerdau-storeroom.png'
import emrBgImg from '../media/card-emr-bg.png'
import emrOverlayImg from '../media/card-emr-overlay.jpg'

// Desktop order: QI Platform → Gerdau Storeroom → EMR Integration (Figma left=48/510/972)
// Mobile order:  Gerdau → QI → EMR (via CSS nth-child order override)
const projects = [
  {
    slug: 'qi-platform',
    title: 'QI Platform',
    category: 'Saúde · Head of Design',
    images: [{ src: qiImg, alt: 'QI Platform — plataforma de dados clínicos' }],
  },
  {
    slug: 'gerdau-storeroom',
    title: 'Gerdau Storeroom',
    category: 'Indústria · Product Designer',
    images: [{ src: gerdauImg, alt: 'Gerdau Storeroom — gestão de almoxarifado' }],
  },
  {
    slug: 'emr-integration',
    title: 'EMR Integration',
    category: 'Saúde · Head of Design',
    images: [
      { src: emrBgImg, alt: 'EMR Integration — integração de prontuários' },
      { src: emrOverlayImg, alt: '' },
    ],
  },
]

function ProjectCard({ project }) {
  return (
    <article className={styles.card}>
      {project.images.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt={img.alt}
          className={styles.cardImg}
          aria-hidden={i > 0 ? 'true' : undefined}
        />
      ))}
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <p className={styles.category}>{project.category}</p>
          <h3 className={styles.cardTitle}>{project.title}</h3>
        </div>
        <Link to={`/trabalhos/${project.slug}`} className={styles.link}>
          <span>Ver Projeto</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projetos" className={styles.section}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.heading}>Projetos selecionados</h2>
      </div>
      <div className={styles.rail}>
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  )
}
