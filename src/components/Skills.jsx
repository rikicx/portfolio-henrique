import styles from './Skills.module.css'
import iconEstrategia from '../media/icon-estrategia.svg'
import iconExperiencia from '../media/icon-experiencia.svg'
import iconDados from '../media/icon-dados.svg'
import iconLideranca from '../media/icon-lideranca.svg'
import iconFerramentas from '../media/icon-ferramentas.svg'

const items = [
  {
    icon: iconEstrategia,
    title: 'Estratégia e descoberta',
    subtitleDesktop: 'Estratégia de produto · Discovery· Pesquisa qualitativa · Jornadas · Workshops · Co-criação',
    subtitleMobile: 'Estratégia de produto · Discovery· Pesquisa qualitativa · Jornadas · Workshops · Cocriação',
  },
  {
    icon: iconExperiencia,
    title: 'Experiência e interface',
    subtitleDesktop: 'UX/UI Design · Arquitetura da informação · Fluxos · Prototipação · Testes de usabilidade · Design Systems',
    subtitleMobile: 'UX/UI Design · Arquitetura da informação · Fluxos · Prototipação · Testes de usabilidade · Design Systems',
  },
  {
    icon: iconDados,
    title: 'Dados e evolução',
    subtitleDesktop: 'Métricas de produto· Pesquisa quantitativa · Análise comportamental ·Testes A/B · NPS',
    subtitleMobile: 'Métricas de produto· Pesquisa quantitativa · Análise comportamental ·Testes A/B · NPS',
  },
  {
    icon: iconLideranca,
    title: 'Liderança de Design',
    subtitleDesktop: 'Direção de Design · Desenvolvimento de pessoas · Design Critiques · Contratação · Alinhamento com Stakeholders',
    subtitleMobile: 'Direção de Design · Desenvolvimento de pessoas · Design Critiques · Contratação · Alinhamento com Stakeholders',
  },
  {
    icon: iconFerramentas,
    title: 'Ferramentas',
    subtitleDesktop: 'Figma · Miro · Photoshop · Illustrator · PowerPoint · Jira · Azure · Google Analytics · Hotjar · Claude Code · VS Code',
    subtitleMobile: 'Figma · Miro · Photoshop · Illustrator · PowerPoint · Jira · Azure · Google Analytics · Hotjar · Claude Code · VS Code',
  },
]

export default function Skills() {
  return (
    <section className={styles.section} id="competencias">
      <h2 className={styles.sectionTitle}>
        Competências &amp;{' '}
        <br className={styles.mobileBr} />
        ferramentas
      </h2>
      <div className={styles.card}>
        <ul className={styles.items}>
          {items.map((item) => (
            <li key={item.title} className={styles.item}>
              <div className={styles.iconWrapper}>
                <img
                  src={item.icon}
                  alt=""
                  aria-hidden="true"
                  className={styles.icon}
                />
              </div>
              <div className={styles.textGroup}>
                <span className={styles.itemTitle}>{item.title}</span>
                <span className={`${styles.itemSubtitle} ${styles.itemSubtitleDesktop}`}>
                  {item.subtitleDesktop}
                </span>
                <span className={`${styles.itemSubtitle} ${styles.itemSubtitleMobile}`}>
                  {item.subtitleMobile}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
