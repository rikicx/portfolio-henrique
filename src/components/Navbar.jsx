import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import logoUrl from '../media/HSD-LOGO.svg'

export default function Navbar() {
  const navLinkClass = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.linkActive}` : styles.link

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.leftArea}>
          <NavLink to="/" className={styles.brand} aria-label="Henrique M. Silva — página inicial">
            <img src={logoUrl} alt="" width="46" height="74" aria-hidden="true" />
          </NavLink>
        </div>

        <nav className={styles.centerArea} aria-label="Navegação principal">
          <NavLink to="/trabalhos" className={navLinkClass}>Trabalhos</NavLink>
          <NavLink to="/sobre" className={navLinkClass}>Sobre Mim</NavLink>
          <a
            href="https://linkedin.com/in/henriquemsilva"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </nav>

        <div className={styles.rightArea}>
          <a href="mailto:contato@henriquemsilva.com" className={styles.ctaBtn}>
            Entre em contato
          </a>

          {/* Estado aberto do menu mobile não definido no Figma — hamburger desabilitado nesta etapa */}
          <button
            className={styles.hamburger}
            disabled
            aria-label="Menu de navegação (em breve)"
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>
      </div>
    </header>
  )
}
