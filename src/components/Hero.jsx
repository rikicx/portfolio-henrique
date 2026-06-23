import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.name}>
            Henrique<br />M. Silva
          </h1>
          <p className={styles.title}>Design Leader &amp; Product Strategist</p>
          <p className={styles.tagline}>
            Transformando complexidade em experiências mais claras e decisões melhores.
          </p>
          <a href="#projetos" className={styles.cta}>
            Ver projetos selecionados ↓
          </a>
        </div>
        <div className={styles.photoWrapper}>
          <div className={styles.photoPlaceholder} aria-label="Foto de Henrique M. Silva" />
        </div>
      </div>
    </section>
  )
}
