import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import styles from './Projects.module.css'
import qiImg from '../media/shared/projects/card-qi-platform.webp'
import gerdauImg from '../media/shared/projects/card-gerdau-storeroom.png'
import emrBgImg from '../media/shared/projects/card-emr-bg.png'
import emrOverlayImg from '../media/shared/projects/card-emr-overlay.jpg'

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

// Card is the link — no nested anchors.
// aria-label provides the accessible name from the project title.
// "Ver Projeto →" is a visual affordance only (aria-hidden).
function ProjectCard({ project }) {
  return (
    <Link
      to={`/trabalhos/${project.slug}`}
      className={styles.card}
      aria-label={project.title}
    >
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
        <div className={styles.link} aria-hidden="true">
          <span>Ver Projeto</span>
          <span>→</span>
        </div>
      </div>
    </Link>
  )
}

export default function Projects() {
  const [sectionRef, isVisible] = useInView({ threshold: 0.16 })

  return (
    <section id="projetos" className={styles.section} ref={sectionRef} data-visible={isVisible}>
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
