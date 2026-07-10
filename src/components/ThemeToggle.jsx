import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import styles from './ThemeToggle.module.css'

function MoonIcon() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20 15.6A8.5 8.5 0 0 1 8.4 4a7.4 7.4 0 1 0 11.6 11.6Z" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2.2" />
      <path d="M12 19.3v2.2" />
      <path d="M4.7 4.7l1.6 1.6" />
      <path d="M17.7 17.7l1.6 1.6" />
      <path d="M2.5 12h2.2" />
      <path d="M19.3 12h2.2" />
      <path d="M4.7 19.3l1.6-1.6" />
      <path d="M17.7 6.3l1.6-1.6" />
    </svg>
  )
}

export default function ThemeToggle({ className = '' }) {
  const { lang } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  const isDark = theme === 'dark'

  const label = isDark
    ? lang === 'pt'
      ? 'Mudar para tema claro'
      : 'Switch to light theme'
    : lang === 'pt'
      ? 'Mudar para tema escuro'
      : 'Switch to dark theme'

  const tooltip = isDark
    ? lang === 'pt'
      ? 'Ativar tema claro'
      : 'Turn on light theme'
    : lang === 'pt'
      ? 'Ativar tema escuro'
      : 'Turn on dark theme'

  return (
    <button
      type="button"
      className={`${styles.toggle}${className ? ` ${className}` : ''}`}
      onClick={toggleTheme}
      aria-label={label}
      title={tooltip}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
      <span className={styles.tooltip} role="tooltip">
        {tooltip}
      </span>
    </button>
  )
}
