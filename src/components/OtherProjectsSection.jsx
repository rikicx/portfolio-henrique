import { Link } from 'react-router-dom'
import styles from './OtherProjectsSection.module.css'
import { useLanguage } from '../context/LanguageContext'
import pt from '../content/pt/other-projects'
import en from '../content/en/other-projects'

import qiImg from '../media/shared/projects/card-qi-platform-hd.png'
import itauImg from '../media/shared/projects/itau-cover.jpg'
import emrImg from '../media/shared/projects/card-emr-integration-hd.png'
import storeroomImg from '../media/shared/projects/card-gerdau-storeroom.png'
import smartlogImg from '../media/shared/projects/gerdau-smartlog-cover.webp'
import threePhImg from '../media/shared/projects/3ph-hrcrs-cover.jpg'

const IMAGES_BY_SLUG = {
  'qi-platform': [{ src: qiImg, alt: '' }],
  'itau-empreendedor': [{ src: itauImg, alt: '' }],
  'emr-integration': [{ src: emrImg, alt: '' }],
  'gerdau-storeroom': [{ src: storeroomImg, alt: '' }],
  'gerdau-smartlog': [{ src: smartlogImg, alt: '' }],
  '3ph-hrcrs-digital-ecosystem': [{ src: threePhImg, alt: '' }],
}

function ProjectCard({ project, viewProjectLabel }) {
  const images = IMAGES_BY_SLUG[project.slug]

  return (
    <Link
      to={project.to}
      className={styles.card}
      aria-label={project.ariaLabel}
    >
      {images.map((image, index) => (
        <img
          key={`${project.slug}-${index}`}
          src={image.src}
          alt={image.alt}
          aria-hidden="true"
          className={`${styles.cardImg}${
            index > 0 ? ` ${styles.cardImgOverlay}` : ''
          }${
            project.slug === 'qi-platform' || project.slug === 'emr-integration'
              ? ` ${styles.prototypeCardImg}`
              : ''
          }`}
        />
      ))}

      <span className={styles.cardOverlay} aria-hidden="true" />

      <span className={styles.cardContent}>
        <span className={styles.cardTextBlock}>
          <span className={styles.cardCategory}>{project.category}</span>
          <span className={styles.cardTitle}>{project.title}</span>
        </span>

        <span className={styles.cardLink}>
          <span>{viewProjectLabel}</span>
          <span>→</span>
        </span>
      </span>
    </Link>
  )
}

export default function OtherProjectsSection({ currentSlug }) {
  const { lang } = useLanguage()
  const c = lang === 'en' ? en : pt

  const projects = c.items.filter(
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
          {c.title}
        </h2>
      </div>

      <div className={styles.grid}>
        <div className={styles.leftColumn}>
          {projects.slice(0, 3).map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              viewProjectLabel={c.viewProjectLabel}
            />
          ))}
        </div>

        <div className={styles.rightColumn}>
          {projects.slice(3).map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              viewProjectLabel={c.viewProjectLabel}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
