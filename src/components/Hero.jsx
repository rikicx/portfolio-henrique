import styles from './Hero.module.css'
import heroUrl from '../media/home/hero/henrique-hero.png'

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Name overflows right intentionally — section clips overflow */}
        <p className={styles.name} aria-hidden="true">Henrique</p>

        {/* Desktop: absolute left=831px top=32px. Mobile: in-flow, pulled up to overlap name */}
        <div className={styles.photoWrapper} aria-hidden="true">
          <img src={heroUrl} alt="" className={styles.photo} />
        </div>

        <div className={styles.textStack}>
          <h1 className={styles.subtitle}>Design Leader · Product Strategist</h1>
          <p className={styles.body}>
            Transformo contextos complexos em experiências digitais mais claras, combinando dados, pesquisa e visão de produto.
          </p>
          <a href="#projetos" className={styles.cta}>
            Ver projetos selecionados&nbsp;↓
          </a>
        </div>
      </div>
    </section>
  )
}
