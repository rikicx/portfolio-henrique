import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import styles from './Projects.module.css'
import qiImg from '../media/shared/projects/card-qi-platform.webp'
import gerdauImg from '../media/shared/projects/card-gerdau-storeroom.png'
import emrBgImg from '../media/shared/projects/card-emr-bg.png'
import emrOverlayImg from '../media/shared/projects/card-emr-overlay.jpg'
import { useLanguage } from '../context/LanguageContext'
import pt from '../content/pt/projects'
import en from '../content/en/projects'

// Desktop order: QI Platform → Gerdau Storeroom → EMR Integration (Figma left=48/510/972)
// Mobile order:  Gerdau → QI → EMR (via CSS nth-child order override)
const IMAGES_BY_SLUG = {
  'qi-platform': [{ src: qiImg }],
  'gerdau-storeroom': [{ src: gerdauImg }],
  'emr-integration': [{ src: emrBgImg }, { src: emrOverlayImg }],
}

// Card is the link — no nested anchors.
// aria-label provides the accessible name from the project title.
// "Ver Projeto →" is a visual affordance only (aria-hidden).
function ProjectCard({ project, viewProjectLabel }) {
  const images = IMAGES_BY_SLUG[project.slug]

  return (
    <Link
      to={project.to}
      className={styles.card}
      aria-label={project.title}
    >
      {images.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt={project.imageAlts[i]}
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
          <span>{viewProjectLabel}</span>
          <span>→</span>
        </div>
      </div>
    </Link>
  )
}

export default function Projects() {
  const { lang } = useLanguage()
  const c = lang === 'en' ? en : pt
  const [sectionRef, isVisible] = useInView({ threshold: 0.16 })

  return (
    <section id="projetos" className={styles.section} ref={sectionRef} data-visible={isVisible}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.heading}>{c.heading}</h2>
      </div>
      <div className={styles.rail}>
        {c.items.map((p) => (
          <ProjectCard key={p.slug} project={p} viewProjectLabel={c.viewProjectLabel} />
        ))}
      </div>
    </section>
  )
}
