import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { useLanguage } from '../context/LanguageContext'
import ptContent from '../content/pt/works'
import enContent from '../content/en/works'
import styles from './WorksPage.module.css'

import qiImg from '../media/shared/projects/card-qi-platform.webp'
import itauImg from '../media/shared/projects/itau-cover.jpg'
import emrImg from '../media/shared/projects/emr-integration-cover.png'
import storeroomImg from '../media/shared/projects/card-gerdau-storeroom.png'
import threePhImg from '../media/shared/projects/3ph-hrcrs-cover.jpg'
import smartlogImg from '../media/shared/projects/gerdau-smartlog-cover.webp'
import worksInfographicPt from '../media/works/works-infographic.svg?raw'
import worksInfographicEn from '../media/works/works-infographic-en.svg?raw'

const IMAGES_BY_SLUG = {
  'gerdau-storeroom': storeroomImg,
  'qi-platform': qiImg,
  'emr-integration': emrImg,
  'gerdau-smartlog': smartlogImg,
  '3ph-hrcrs-digital-ecosystem': threePhImg,
  'itau-empreendedor': itauImg,
}

function ProjectCard({ project, viewProjectLabel }) {
  const cardRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        setIsVisible(true)
        observer.disconnect()
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px',
      }
    )

    observer.observe(card)

    return () => observer.disconnect()
  }, [])

  return (
    <Link
      ref={cardRef}
      to={project.to}
      className={`${styles.card} ${styles.cardReveal} ${
        isVisible ? styles.cardVisible : ''
      }`}
      aria-label={project.ariaLabel}
    >
      <img
        src={IMAGES_BY_SLUG[project.slug]}
        alt={project.alt}
        className={styles.cardImg}
      />

      <span className={styles.cardOverlay} aria-hidden="true" />

      <span className={styles.cardContent}>
        <span className={styles.cardTextBlock}>
          <span className={styles.cardCategory}>{project.category}</span>
          <span className={styles.cardTitle}>{project.title}</span>
        </span>

        <span className={styles.cardCta}>{viewProjectLabel}</span>
      </span>
    </Link>
  )
}

export default function WorksPage() {
  const { lang } = useLanguage()
  const c = lang === 'en' ? enContent : ptContent
  const worksInfographic = lang === 'en' ? worksInfographicEn : worksInfographicPt

  const leftProjects = c.items.filter((_, index) => index % 2 === 0)
  const rightProjects = c.items.filter((_, index) => index % 2 !== 0)

  const infographicRef = useRef(null)

  useEffect(() => {
    const el = infographicRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        el.classList.toggle(styles.flowRunning, entry.isIntersecting)
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <Layout>
      <Seo
        title={c.seo.title}
        description={c.seo.description}
        path={c.seo.path}
        lang={c.seo.lang}
        robots={c.seo.robots}
      />
      <section className={styles.page} aria-label={c.pageAriaLabel}>
        <div className={styles.header}>
          <div className={styles.headerText}>
            <h1 className={styles.pageTitle}>
              {c.titleLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h1>

            <p className={styles.pageDescription}>
              {c.description}
            </p>
          </div>

          <div
            ref={infographicRef}
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
            {leftProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                viewProjectLabel={c.viewProjectLabel}
              />
            ))}
          </div>

          <div className={styles.colRight}>
            {rightProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                viewProjectLabel={c.viewProjectLabel}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
