import TokenValue from './TokenValue'
import styles from './TokenSwatch.module.css'

// A single color token: a live swatch (CSS resolves the background via
// var(), so it always matches the active theme with no JS involved) plus
// its name, resolved value, role, and Figma counterpart when one exists.
export default function TokenSwatch({ name, role, figmaName, large = false }) {
  return (
    <div className={styles.swatch}>
      <span
        className={`${styles.preview}${large ? ` ${styles.previewLarge}` : ''}`}
        style={{ background: `var(${name})` }}
        aria-hidden="true"
      />
      <div className={styles.meta}>
        <p className={styles.name}>{name}</p>
        <p className={styles.value}>
          <TokenValue name={name} />
        </p>
        {role && <p className={styles.role}>{role}</p>}
        <p className={styles.figma}>
          Figma: {figmaName || '—'}
        </p>
      </div>
    </div>
  )
}
