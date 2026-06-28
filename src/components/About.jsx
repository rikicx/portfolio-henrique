import { useInView } from '../hooks/useInView'
import styles from './About.module.css'
import arrowLink from '../media/shared/icons/arrow-link.svg'
import henriqueWorking from '../media/home/hero/henrique-working.webp'

export default function About() {
  const [sectionRef, isVisible] = useInView({ threshold: 0.16 })

  return (
    <section id="sobre" className={styles.section} ref={sectionRef} data-visible={isVisible}>
      <div className={styles.container}>
        <div className={styles.imageCol}>
          <img
            src={henriqueWorking}
            alt="Henrique Silva trabalhando"
            className={styles.photo}
          />
          <div className={styles.overlay} />
          <div className={styles.overlayContent}>
            <h2 className={styles.overlayHeading}>Sobre mim</h2>
            <a href="/sobre" className={styles.saibaMaisLink}>
              <img src={arrowLink} alt="" aria-hidden="true" className={styles.arrowIcon} />
              <span>Saiba mais</span>
            </a>
          </div>
        </div>

        <div className={styles.contentCol}>
          <div className={styles.methBlock}>
            <h3 className={styles.methodTitle}>Método</h3>
            <p className={styles.highlight}>
              Meu trabalho é dar clareza a problemas complexos.
            </p>
            <p className={`${styles.body} ${styles.bodyDesktop}`}>
              Conecto necessidades dos usuários, objetivos de negócio e viabilidade técnica para
              orientar decisões, estruturar experiências e acompanhar as soluções da descoberta
              à implementação e evolução.
            </p>
            <p className={`${styles.body} ${styles.bodyMobile}`}>
              Conecto usuários, negócio e tecnologia para orientar decisões, desenhar experiências
              e acompanhar sua evolução do primeiro entendimento ao produto em operação e escala.
            </p>
          </div>
          <div className={styles.actions}>
            <a href="#" className={styles.btn}>
              Ver Currículo →
            </a>
            <a
              href="https://linkedin.com/in/"
              className={styles.btn}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
