import { NavLink, Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useCallback, useRef } from 'react'
import styles from './Navbar.module.css'
import logoUrl from '../media/HSD-LOGO.svg'

const TRABALHOS_ITEMS = [
  { label: 'Ver todos os trabalhos', to: '/trabalhos' },
  { label: 'Gerdau Storeroom', to: '/trabalhos/gerdau-storeroom' },
  { label: 'QI Platform', to: '/trabalhos/qi-platform' },
  { label: 'EMR Integration', to: '/trabalhos/emr-integration' },
  { label: 'Gerdau Smartlog', to: '/trabalhos/gerdau-smartlog' },
  {
    label: '3PH / HRCRS Ecosystem',
    to: '/trabalhos/3ph-hrcrs-digital-ecosystem',
  },
  { label: 'Itaú Empreendedora', to: '/trabalhos/itau-empreendedor' },
]

export default function Navbar() {
  const location = useLocation()

  // Mobile menu
  const [openedAtPathname, setOpenedAtPathname] = useState(null)
  const isOpen =
    openedAtPathname !== null &&
    openedAtPathname === location.pathname

  const [accordionOpen, setAccordionOpen] = useState(false)

  const open = () => setOpenedAtPathname(location.pathname)

  const close = useCallback(() => {
    setOpenedAtPathname(null)
    setAccordionOpen(false)
  }, [])

  const toggle = () => (isOpen ? close() : open())

  // Desktop works menu
  const [dropdownOpenedAt, setDropdownOpenedAt] = useState(null)

  const dropdownOpen =
    dropdownOpenedAt !== null &&
    dropdownOpenedAt === location.pathname

  const dropdownRef = useRef(null)

  const closeDropdown = useCallback(() => {
    setDropdownOpenedAt(null)
  }, [])

  const toggleDropdown = () => {
    if (dropdownOpen) {
      closeDropdown()
      return
    }

    setDropdownOpenedAt(location.pathname)
  }

  const isTrabalhos = location.pathname.startsWith('/trabalhos')

  // Close desktop menu with Escape
  useEffect(() => {
    if (!dropdownOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeDropdown()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [dropdownOpen, closeDropdown])

  // Close desktop menu when clicking outside
  useEffect(() => {
    if (!dropdownOpen) return undefined

    const onMouseDown = (event) => {
      if (!dropdownRef.current?.contains(event.target)) {
        closeDropdown()
      }
    }

    document.addEventListener('mousedown', onMouseDown)

    return () => {
      document.removeEventListener('mousedown', onMouseDown)
    }
  }, [dropdownOpen, closeDropdown])

  // Close mobile menu with Escape
  useEffect(() => {
    if (!isOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        close()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, close])

  // Lock page scrolling while either menu is open
  useEffect(() => {
    const shouldLockScroll = isOpen || dropdownOpen

    document.body.style.overflow = shouldLockScroll ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen, dropdownOpen])

  const navLinkClass = ({ isActive }) =>
    isActive
      ? `${styles.link} ${styles.linkActive}`
      : styles.link

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.leftArea}>
          <NavLink
            to="/"
            className={styles.brand}
            aria-label="Henrique M. Silva — página inicial"
          >
            <img
              src={logoUrl}
              alt=""
              width="46"
              height="74"
              aria-hidden="true"
            />
          </NavLink>
        </div>

        <nav
          className={styles.centerArea}
          aria-label="Navegação principal"
        >
          <div
            ref={dropdownRef}
            className={styles.dropdownWrapper}
          >
            <button
              type="button"
              className={`${styles.dropdownTrigger}${
                isTrabalhos
                  ? ` ${styles.dropdownTriggerActive}`
                  : ''
              }`}
              onClick={toggleDropdown}
              aria-expanded={dropdownOpen}
              aria-controls="desktop-dropdown"
              aria-haspopup="true"
            >
              Trabalhos

              <svg
                className={`${styles.chevron}${
                  dropdownOpen
                    ? ` ${styles.chevronOpen}`
                    : ''
                }`}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 4L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <div
                id="desktop-dropdown"
                className={styles.dropdown}
                onMouseDown={(event) => {
                  if (event.target === event.currentTarget) {
                    closeDropdown()
                  }
                }}
              >
                <div className={styles.dropdownContent}>
                  {TRABALHOS_ITEMS.map((item, index) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={`${styles.dropdownItem}${
                        index === 0
                          ? ` ${styles.dropdownItemFirst}`
                          : ''
                      }`}
                      onClick={closeDropdown}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className={styles.desktopMenuFooter}>
                  <span>
                    © 2026 Henrique M. Silva. Todos os direitos
                    reservados.
                  </span>
                </div>
              </div>
            )}
          </div>

          <NavLink
            to="/sobre"
            className={navLinkClass}
          >
            Sobre Mim
          </NavLink>

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
          <a
            href="mailto:contato@henriquemsilva.com"
            className={styles.ctaBtn}
          >
            Entre em contato
          </a>

          <button
            type="button"
            className={`${styles.hamburger}${
              isOpen
                ? ` ${styles.hamburgerOpen}`
                : ''
            }`}
            onClick={toggle}
            aria-label={
              isOpen
                ? 'Fechar menu de navegação'
                : 'Abrir menu de navegação'
            }
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
        className={`${styles.mobilePanel}${
          isOpen
            ? ` ${styles.mobilePanelOpen}`
            : ''
        }`}
        aria-hidden={!isOpen}
      >
        <nav
          className={styles.mobileNav}
          aria-label="Menu mobile"
        >
          <button
            type="button"
            className={styles.accordionTrigger}
            onClick={() => {
              setAccordionOpen((previousValue) => !previousValue)
            }}
            aria-expanded={accordionOpen}
            aria-controls="mobile-accordion"
            tabIndex={isOpen ? 0 : -1}
          >
            Trabalhos

            <svg
              className={`${styles.chevron}${
                accordionOpen
                  ? ` ${styles.chevronOpen}`
                  : ''
              }`}
              width="16"
              height="16"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 4L6 8L10 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div
            id="mobile-accordion"
            className={`${styles.accordionContent}${
              accordionOpen
                ? ` ${styles.accordionContentOpen}`
                : ''
            }`}
          >
            {TRABALHOS_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={styles.accordionSubItem}
                onClick={close}
              >
                {item.label}
              </Link>
            ))}
          </div>

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
          <span>
            © 2026 Henrique M. Silva. Todos os direitos reservados.
          </span>
        </div>
      </div>
    </header>
  )
}