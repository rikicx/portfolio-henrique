import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { getAlternateRoute } from '../content/routes'
import styles from './LanguageSwitcher.module.css'

const LABELS = { pt: 'PT', en: 'EN' }

export default function LanguageSwitcher({
  className = '',
  onNavigate = null,
  tabIndex = undefined,
}) {
  const { lang } = useLanguage()
  const location = useLocation()

  const target = lang === 'pt' ? 'en' : 'pt'
  const to = getAlternateRoute(location.pathname, target)

  const label =
    target === 'en'
      ? 'Switch language to English'
      : 'Mudar idioma para português'

  const tooltip =
    target === 'en'
      ? 'View in English'
      : 'Ver em português'

  const classNames = `${styles.switcher}${className ? ` ${className}` : ''}`

  if (!to) {
    return (
      <span
        className={`${classNames} ${styles.disabled}`}
        aria-disabled="true"
        title={tooltip}
      >
        {LABELS[target]}
      </span>
    )
  }

  return (
    <Link
      to={to}
      className={classNames}
      aria-label={label}
      onClick={onNavigate ?? undefined}
      tabIndex={tabIndex}
      title={tooltip}
    >
      <span className={styles.label}>{LABELS[target]}</span>
      <span className={styles.tooltip} role="tooltip">
        {tooltip}
      </span>
    </Link>
  )
}
