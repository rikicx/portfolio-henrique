import styles from './Experience.module.css'

const jobs = [
  {
    company: '3PH Alliance',
    positions: [
      {
        title: 'Head of Design',
        period: '2021–2026',
        description:
          'Liderei iniciativas de design em produtos digitais e ecossistemas de saúde, conectando estratégia, negócio e tecnologia. Atuei próximo ao C-level na definição de prioridades, evolução de produtos e entregas para diferentes públicos e stakeholders.',
      },
      {
        title: 'Product Design Specialist',
        period: '2020–2021',
        description:
          'Atuei na evolução de produtos digitais em um contexto complexo de saúde, traduzindo necessidades de negócio e operação em experiências mais claras. O trabalho envolveu discovery, interface, alinhamento com stakeholders e colaboração com times técnicos.',
      },
    ],
  },
  {
    company: 'Skygna',
    positions: [
      {
        title: 'Head of Design',
        period: '2019–2021',
        description:
          'Liderei designers distribuídos em diferentes squads, apoiando decisões de produto e garantindo consistência entre estratégia e execução. Atuei na estruturação de processos, desenvolvimento do time e alinhamento com lideranças e clientes.',
      },
      {
        title: 'Product Design Specialist',
        period: '2018–2019',
        description:
          'Atuei estrategicamente na concepção e evolução de produtos digitais para diferentes segmentos, conectando necessidades de negócio, tecnologia e experiência do usuário.',
      },
    ],
  },
  {
    company: 'Netfarma',
    positions: [
      {
        title: 'Coordenador de Criação',
        period: '2015–2016',
        description:
          'Liderei uma equipe multidisciplinar na evolução da experiência digital de um dos principais e-commerces farmacêuticos do país, conectando marca, conversão e execução.',
      },
      {
        title: 'Senior UX/UI Designer',
        period: '2012–2015',
        description:
          'Trabalhei na evolução da experiência digital de um dos principais e-commerces farmacêuticos do país. Minha atuação envolveu fluxos de compra, interfaces, conversão e melhoria contínua da jornada do usuário.',
      },
    ],
  },
]

function JobBlock({ job }) {
  return (
    <div className={styles.jobBlock}>
      <div className={styles.timeline}>
        {job.positions.map((pos, i) => (
          <div key={pos.title} className={styles.positionRow}>
            <div className={styles.timelineMarker}>
              <span className={styles.diamond} />
              {i < job.positions.length - 1 && <span className={styles.connector} />}
            </div>
            <div className={styles.positionContent}>
              <h4 className={styles.positionTitle}>{pos.title} — {pos.period}</h4>
              <p className={styles.positionDesc}>{pos.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.companyBadge}>
        <span className={styles.companyName}>{job.company}</span>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experiencia" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Experiência</h2>
        <div className={styles.jobs}>
          {jobs.map((job) => (
            <div key={job.company} className={styles.jobWrapper}>
              <hr className={styles.divider} />
              <JobBlock job={job} />
            </div>
          ))}
        </div>
        <p className={styles.extra}>
          Experiências anteriores em e-commerce, produtos digitais, comunicação e design visual.
          <br />
          <a
            href="https://linkedin.com/in/"
            className={styles.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver trajetória completa no LinkedIn ↗
          </a>
        </p>
      </div>
    </section>
  )
}
