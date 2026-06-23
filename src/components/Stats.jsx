import styles from './Stats.module.css'

const items = [
  { value: '19 Anos', label: 'De experiência' },
  { value: '8+ Anos', label: 'Em posições de liderança' },
  { value: 'Brasil + EUA', label: 'Atuando com produtos e stakeholders internacionais' },
]

export default function Stats() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {items.map((item) => (
          <div key={item.value} className={styles.card}>
            <span className={styles.value}>{item.value}</span>
            <span className={styles.label}>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
