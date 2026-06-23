import { NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import styles from './Navbar.module.css'
import logoUrl from '../media/HSD-LOGO.svg'

export default function Navbar() {
  const location = useLocation()

  // Store the pathname when the menu was opened.
  // isOpen is derived: if the current pathname differs, the menu is already closed.
  const [openedAtPathname, setOpenedAtPathname] = useState(null)
  const isOpen = openedAtPathname !== null && openedAtPathname === location.pathname

  const open = () => setOpenedAtPathname(location.pathname)
  const close = useCallback(() => setOpenedAtPathname(null), [])
  const toggle = () => (isOpen ? close() : open())

  // Escape key
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => { if (e.key === 'Escape') close() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, close])

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

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

          <button
            className={`${styles.hamburger}${isOpen ? ` ${styles.hamburgerOpen}` : ''}`}
            onClick={toggle}
            aria-label={isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`${styles.mobilePanel}${isOpen ? ` ${styles.mobilePanelOpen}` : ''}`}
        aria-hidden={!isOpen}
      >
        <nav className={styles.mobileNav} aria-label="Menu mobile">
          <NavLink
            to="/trabalhos"
            className={styles.mobileLink}
            onClick={close}
            tabIndex={isOpen ? 0 : -1}
          >
            Trabalhos
          </NavLink>
          <NavLink
            to="/sobre"
            className={styles.mobileLink}
            onClick={close}
            tabIndex={isOpen ? 0 : -1}
          >
            Sobre mim
          </NavLink>
          <a
            href="https://linkedin.com/in/henriquemsilva"
            className={styles.mobileLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            tabIndex={isOpen ? 0 : -1}
          >
            LinkedIn
          </a>
          <a
            href="mailto:contato@henriquemsilva.com"
            className={styles.mobileCta}
            onClick={close}
            tabIndex={isOpen ? 0 : -1}
          >
            Entre em contato
          </a>
        </nav>
          <div className={styles.mobileFooter}>
             <span>© 2026 Henrique M. Silva. Todos os direitos reservados.</span>
          </div>
      </div>
    </header>
  )
}
