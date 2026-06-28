import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import styles from './Experience.module.css'
import hyperlineSvg from '../media/home/experience/hyperline.svg'
import logo3ph from '../media/home/experience/logo-3ph.png'
import logoSciensa from '../media/home/experience/logo-sciensa.png'
import logoNetfarma from '../media/home/experience/logo-netfarma.png'

const companies = [
  {
    key: '3ph',
    logo: logo3ph,
    logoAlt: '3PH Alliance',
    logoClass: 'mobileLogo3ph',
    positions: [
      {
        title: 'Head of Design · 2021–2026',
        mobileTitle: 'Head of Design · 2021–2026',
        description:
          'A evolução para Head of Design veio como consequência da atuação próxima a produto, tecnologia e C-level. Passei a liderar designers, estruturar rituais, padrões de qualidade e processos de design, mantendo a prática hands-on quando necessário e conectando estratégia, governança visual e evolução do ecossistema digital da empresa.',
        isSenior: true,
      },
      {
        title: 'Product Designer Specialist · 2020–2021',
        mobileTitle: 'Product Designer Specialist · 2020–2021',
        description:
          'Entrei como designer hands-on em um contexto de produto altamente complexo, atuando na evolução de plataformas digitais para pesquisa clínica, RWE e operações em saúde. Trabalhei do discovery à entrega, traduzindo fluxos técnicos, necessidades de usuários e objetivos de negócio em experiências mais claras, protótipos e decisões de produto mais bem fundamentadas.',
        isSenior: false,
      },
    ],
  },
  {
    key: 'sciensa',
    logo: logoSciensa,
    logoAlt: 'Sciensa',
    logoClass: 'mobileLogoSciensa',
    positions: [
      {
        title: 'Head of Design · 2019–2021',
        mobileTitle: 'Head of Design · 2019–2021',
        description:
          'A transição para liderança aconteceu a partir da atuação transversal entre squads, clientes e designers. Passei a liderar o capítulo de design, apoiar profissionais em diferentes projetos, conduzir críticas e rituais de design, além de ajudar a estruturar padrões, processos e qualidade das entregas em um ambiente de consultoria.',
        isSenior: true,
      },
      {
        title: 'Product Designer Specialist (UX/UI) · 2018–2019',
        mobileTitle: 'Product Designer Specialist (UX/UI) · 2018–2019',
        description:
          'Entrei como Product Designer em uma consultoria de inovação, atuando em squads multidisciplinares e projetos de alta complexidade para grandes clientes. Minha atuação combinava discovery, facilitação, prototipação e desenho de experiências digitais, sempre aproximando usuários, negócio e tecnologia para transformar problemas pouco definidos em caminhos mais claros de solução.',
        isSenior: false,
      },
    ],
  },
  {
    key: 'netfarma',
    logo: logoNetfarma,
    logoAlt: 'Netfarma',
    logoClass: 'mobileLogoNetfarma',
    positions: [
      {
        title: 'Design Coordinator · 2015–2016',
        mobileTitle: 'Design Coordinator · 2015–2016',
        description:
          'A evolução para coordenação veio a partir da capacidade de organizar problemas, orientar entregas e apoiar outros profissionais. Passei a liderar uma equipe multidisciplinar de design e conteúdo, contribuindo para a evolução da experiência do e-commerce, iniciativas mobile e padrões de entrega entre design, marketing e tecnologia.',
        isSenior: true,
      },
      {
        title: 'UX/UI Senior  · 2012–2015',
        mobileTitle: 'UX/UI Designer Senior· 2012–2015',
        description:
          'Comecei como designer hands-on em um e-commerce em crescimento, criando interfaces, campanhas e experiências digitais com foco em clareza, conversão e consistência visual. A proximidade com tecnologia, marketing e operação ampliou meu papel para além da execução visual, trazendo visão de jornada, usabilidade e produto.',
        isSenior: false,
      },
    ],
  },
]

export default function Experience() {
  const [openKey, setOpenKey] = useState(null)
  const [sectionRef, isVisible] = useInView({ threshold: 0.12 })

  function toggle(key) {
    setOpenKey((prev) => (prev === key ? null : key))
  }

  return (
    <section id="experiencia" className={styles.section} ref={sectionRef} data-visible={isVisible}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Experiência</h2>

        {/* Desktop layout — untouched */}
        <div className={styles.desktopCompanies}>
          {companies.map((company) => (
            <div key={company.key} className={styles.companyRow}>
              <div className={styles.experienceBody}>
                <div className={styles.positions}>
                  {company.positions.map((pos) => (
                    <div key={pos.title} className={styles.position}>
                      <p className={styles.positionTitle}>{pos.title}</p>
                      <p className={styles.positionDesc}>{pos.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <img
                src={company.logo}
                alt={company.logoAlt}
                className={styles.companyLogo}
              />
            </div>
          ))}
        </div>

        {/* Mobile accordion */}
        <div className={styles.mobileCompanies}>
          {companies.map((company) => {
            const isOpen = openKey === company.key
            const contentId = `exp-content-${company.key}`
            return (
              <div key={company.key} className={styles.mobileCompany}>
                <button
                  type="button"
                  className={styles.mobileHeader}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggle(company.key)}
                >
                  {isOpen ? (
                    <img
                      src={company.logo}
                      alt={company.logoAlt}
                      className={styles[company.logoClass]}
                    />
                  ) : (
                    <div className={styles.mobilePositions}>
                      <span className={styles.mobileTitleSenior}>
                        {company.positions[0].mobileTitle}
                      </span>
                      <span className={styles.mobileTitleJunior}>
                        {company.positions[1].mobileTitle}
                      </span>
                    </div>
                  )}
                  <svg
                    className={`${styles.chevron}${isOpen ? ` ${styles.chevronOpen}` : ''}`}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 6l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div
                  id={contentId}
                  role="region"
                  className={`${styles.mobileContent}${isOpen ? ` ${styles.mobileContentOpen}` : ''}`}
                >
                  <div className={styles.mobileContentInner}>
                    {company.positions.map((pos) => (
                      <div key={pos.mobileTitle} className={styles.mobilePositionExpanded}>
                        <p className={styles.mobileExpandedTitle}>{pos.mobileTitle}</p>
                        <p className={styles.mobileExpandedDesc}>{pos.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <a
          href="https://linkedin.com/in/"
          className={styles.linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.linkedinText}>
            Ver trajetória completa no LinkedIn ↗
          </span>
          <span className={styles.hyperlineDecor} aria-hidden="true">
            <img src={hyperlineSvg} alt="" className={styles.hyperlineImg} />
          </span>
        </a>
      </div>
    </section>
  )
}
