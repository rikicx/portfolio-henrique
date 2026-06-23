import styles from './About.module.css'

export default function About() {
  return (
    <section id="sobre" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageCol}>
          <div className={styles.photoPlaceholder} aria-label="Foto de Henrique trabalhando" />
          <div className={styles.overlay} />
          <div className={styles.headingWrapper}>
            <h2 className={styles.heading}>Sobre mim</h2>
          </div>
        </div>

        <div className={styles.contentCol}>
          <div
            className={styles.methodPlaceholder}
            role="img"
            aria-label="Visual do método — em breve"
          />
          <h3 className={styles.methodTitle}>Método</h3>
          <p className={styles.bio}>
            Atuo na interseção entre design, negócio e tecnologia.
          </p>
          <p className={styles.bio}>
            Ao longo da minha trajetória, liderei iniciativas em saúde, consultoria e produtos
            digitais complexos, ajudando times a transformar cenários ambíguos em decisões mais
            claras, prioridades mais objetivas e experiências melhores.
          </p>
          <p className={styles.bio}>
            Minha abordagem combina estratégia, colaboração com stakeholders e capacidade de
            execução.
          </p>
          <div className={styles.actions}>
            <a
              href="#"
              className={styles.btnSecondary}
              aria-label="Ver Currículo (em breve)"
            >
              Ver Currículo →
            </a>
            <a
              href="https://linkedin.com/in/"
              className={styles.btnPrimary}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn→
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
