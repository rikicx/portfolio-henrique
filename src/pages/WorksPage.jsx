import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
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
      to={`/trabalhos/${project.slug}`}
      className={`${styles.card} ${styles.cardReveal} ${
        isVisible ? styles.cardVisible : ''
      }`}
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
        title="Projetos de UX e Product Design — Henrique Silva"
        description="Cases de UX, Product Design e liderança em saúde, indústria e serviços financeiros, da descoberta à implementação e evolução dos produtos."
        path="/trabalhos"
      />
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
