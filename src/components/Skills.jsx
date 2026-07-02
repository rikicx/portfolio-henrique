import { useInView } from '../hooks/useInView'
import styles from './Skills.module.css'
import iconEstrategia from '../media/home/experience/icon-estrategia.svg'
import iconExperiencia from '../media/home/experience/icon-experiencia.svg'
import iconDados from '../media/home/experience/icon-dados.svg'
import iconLideranca from '../media/home/experience/icon-lideranca.svg'
import iconFerramentas from '../media/home/experience/icon-ferramentas.svg'
import { useLanguage } from '../context/LanguageContext'
import pt from '../content/pt/skills'
import en from '../content/en/skills'

const ICONS_BY_KEY = {
  estrategia: iconEstrategia,
  experiencia: iconExperiencia,
  dados: iconDados,
  lideranca: iconLideranca,
  ferramentas: iconFerramentas,
}

export default function Skills() {
  const { lang } = useLanguage()
  const c = lang === 'en' ? en : pt
  const [sectionRef, isVisible] = useInView({ threshold: 0.14 })

  return (
    <section className={styles.section} id="competencias" ref={sectionRef} data-visible={isVisible}>
      <h2 className={styles.sectionTitle}>
        {c.titleBeforeBreak}{' '}
        <br className={styles.mobileBr} />
        {c.titleAfterBreak}
      </h2>
      <div className={styles.card}>
        <ul className={styles.items}>
          {c.items.map((item) => (
            <li key={item.key} className={styles.item}>
              <div className={styles.iconWrapper}>
                <img
                  src={ICONS_BY_KEY[item.key]}
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
