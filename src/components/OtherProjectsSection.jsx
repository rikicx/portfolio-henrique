import { Link } from 'react-router-dom'
import styles from './OtherProjectsSection.module.css'

import qiImg from '../media/shared/projects/card-qi-platform.png'
import itauImg from '../media/shared/projects/itau-cover.jpg'
import emrBgImg from '../media/shared/projects/card-emr-bg.png'
import emrOverlayImg from '../media/shared/projects/card-emr-overlay.jpg'
import storeroomImg from '../media/shared/projects/card-gerdau-storeroom.png'
import smartlogImg from '../media/shared/projects/gerdau-smartlog-cover.png'
import threePhImg from '../media/shared/projects/3ph-hrcrs-cover.jpg'

const PROJECTS = [
  {
    slug: 'qi-platform',
    title: 'QI Platform',
    category: 'Saúde · Head of Design',
    images: [{ src: qiImg, alt: '' }],
  },
  {
    slug: 'itau-empreendedor',
    title: 'Itaú Empreendedor',
    category: 'Finanças · Product Designer',
    images: [{ src: itauImg, alt: '' }],
  },
  {
    slug: 'emr-integration',
    title: 'EMR Integration',
    category: 'Saúde · Head of Design',
    images: [
      { src: emrBgImg, alt: '' },
      { src: emrOverlayImg, alt: '' },
    ],
  },
  {
    slug: 'gerdau-storeroom',
    title: 'Gerdau Storeroom',
    category: 'Indústria · Product Designer',
    images: [{ src: storeroomImg, alt: '' }],
  },
  {
    slug: 'gerdau-smartlog',
    title: 'Gerdau Smartlog',
    category: 'Indústria · Product Designer',
    images: [{ src: smartlogImg, alt: '' }],
  },
  {
    slug: '3ph-hrcrs-digital-ecosystem',
    title: '3PH Alliance & HRCRS Digital Ecosystem',
    category: 'Saúde · Head of Design',
    images: [{ src: threePhImg, alt: '' }],
  },
]

function ProjectCard({ project }) {
  return (
    <Link
      to={`/trabalhos/${project.slug}`}
      className={styles.card}
      aria-label={`Ver projeto ${project.title}`}
    >
      {project.images.map((image, index) => (
        <img
          key={`${project.slug}-${index}`}
          src={image.src}
          alt={image.alt}
          aria-hidden="true"
          className={`${styles.cardImg}${
            index > 0 ? ` ${styles.cardImgOverlay}` : ''
          }`}
        />
      ))}

      <span className={styles.cardOverlay} aria-hidden="true" />

      <span className={styles.cardContent}>
        <span className={styles.cardTextBlock}>
          <span className={styles.cardCategory}>{project.category}</span>
          <span className={styles.cardTitle}>{project.title}</span>
        </span>

        <span className={styles.cardLink}>Ver Projeto →</span>
      </span>
    </Link>
  )
}

export default function OtherProjectsSection({ currentSlug }) {
  const projects = PROJECTS.filter(
    (project) => project.slug !== currentSlug
  )

  if (projects.length !== 5) {
    console.warn(
      `OtherProjectsSection esperava 5 projetos, mas encontrou ${projects.length}.`
    )
  }

  return (
    <section
      aria-labelledby="other-projects-title"
      className={styles.section}
    >
      <hr className={styles.divider} aria-hidden="true" />

      <div className={styles.container}>
        <h2 id="other-projects-title" className={styles.title}>
          Outros Projetos
        </h2>
      </div>

      <div className={styles.grid}>
        <div className={styles.leftColumn}>
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className={styles.rightColumn}>
          {projects.slice(3).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
