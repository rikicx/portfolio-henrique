import styles from './ComponentPreview.module.css'

// A documentation frame only — it never re-implements, styles, or alters
// the component it wraps. Reserved for real instances confirmed safe to
// mount twice (ThemeToggle, LanguageSwitcher). Anything with global
// side-effects (scroll lock, focus trapping, document-level listeners)
// is documented structurally instead, never wrapped here.
export default function ComponentPreview({ label, children }) {
  return (
    <div className={styles.frame}>
      <div className={styles.stage}>{children}</div>
      {label && <p className={styles.label}>{label}</p>}
    </div>
  )
}
