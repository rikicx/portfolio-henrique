import { Fragment } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { getAlternateRoute } from '../content/routes'
import styles from './LanguageSwitcher.module.css'

const LABELS = { pt: 'PT', en: 'EN' }

// Accessible names follow the approved Design System spec:
// "Mudar idioma para English / para Português".
const SWITCH_ARIA_LABELS = {
  pt: 'Mudar idioma para Português',
  en: 'Mudar idioma para English',
}

export default function LanguageSwitcher({
  className = '',
  onNavigate = null,
  tabIndex = undefined,
}) {
  const { lang } = useLanguage()
  const location = useLocation()

  const items = ['pt', 'en'].map((target) => {
    if (target === lang) {
      return { target, type: 'active' }
    }

    const to = getAlternateRoute(location.pathname, target)

    return to
      ? { target, type: 'link', to }
      : { target, type: 'disabled' }
  })

  return (
    <nav
      className={`${styles.switcher}${className ? ` ${className}` : ''}`}
      aria-label={lang === 'en' ? 'Language selection' : 'Seleção de idioma'}
    >
      {items.map((item, index) => (
        <Fragment key={item.target}>
          {index > 0 && (
            <span className={styles.separator} aria-hidden="true">
              |
            </span>
          )}

          {item.type === 'active' && (
            <span className={styles.active} aria-current="page">
              {LABELS[item.target]}
            </span>
          )}

          {item.type === 'link' && (
            <Link
              to={item.to}
              className={styles.link}
              aria-label={SWITCH_ARIA_LABELS[item.target]}
              onClick={onNavigate ?? undefined}
              tabIndex={tabIndex}
            >
              {LABELS[item.target]}
            </Link>
          )}

          {item.type === 'disabled' && (
            <span className={styles.disabled} aria-disabled="true">
              {LABELS[item.target]}
            </span>
          )}
        </Fragment>
      ))}
    </nav>
  )
}
