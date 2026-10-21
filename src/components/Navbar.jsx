import { NavLink, Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useCallback, useRef } from 'react'
import styles from './Navbar.module.css'
import logoUrl from '../media/shared/branding/hsd-logo.svg'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'
import { useLanguage } from '../context/LanguageContext'
import pt from '../content/pt/nav'
import en from '../content/en/nav'

// Two-line nav label: primary stays always visible; secondary is a
// complementary hint (aria-hidden — the link's accessible name stays just
// the primary label, unchanged from before this was added).
function NavLabel({ primary, secondary }) {
  return (
    <span className={styles.navLabelStack}>
      <span>{primary}</span>
      <span className={styles.navLabelSecondary} aria-hidden="true">
        {secondary}
      </span>
    </span>
  )
}

// Same two-line stack as NavLabel, but for triggers that also carry a
// chevron — the chevron sits inside the primary-line row so it aligns with
// "Trabalhos", not with the full two-line block height.
function NavTriggerLabel({ primary, secondary, chevron }) {
  return (
    <span className={styles.navLabelStack}>
      <span className={styles.triggerPrimaryRow}>
        <span>{primary}</span>
        {chevron}
      </span>
      <span className={styles.navLabelSecondary} aria-hidden="true">
        {secondary}
      </span>
    </span>
  )
}

export default function Navbar() {
  const { lang } = useLanguage()
  const c = lang === 'en' ? en : pt

  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOverFooter, setIsOverFooter] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    const updateScrolledState = () => {
      setIsScrolled(window.scrollY > 96)

      // O footer mobile é mais alto que a tela: quando ele começa a passar
      // sob o header, o header sai de cena em vez de cobrir o avatar.
      const main = document.getElementById('conteudo')
      const header = headerRef.current
      if (main && header) {
        setIsOverFooter(main.getBoundingClientRect().bottom < header.offsetHeight)
      }
    }

    updateScrolledState()

    window.addEventListener('scroll', updateScrolledState, {
      passive: true,
    })
    window.addEventListener('resize', updateScrolledState)

    return () => {
      window.removeEventListener('scroll', updateScrolledState)
      window.removeEventListener('resize', updateScrolledState)
    }
  }, [])

  // ── Mobile menu ───────────────────────────────────────
  const [openedAtPathname, setOpenedAtPathname] = useState(null)
  const isOpen =
    openedAtPathname !== null && openedAtPathname === location.pathname

  const [accordionOpen, setAccordionOpen] = useState(false)

  const hamburgerRef = useRef(null)
  const firstMobileItemRef = useRef(null)

  const open = useCallback(
    (byKeyboard = false) => {
      setOpenedAtPathname(location.pathname)
      if (byKeyboard) {
        requestAnimationFrame(() => {
          firstMobileItemRef.current?.focus()
        })
      }
    },
    [location.pathname]
  )

  const close = useCallback(() => {
    setOpenedAtPathname(null)
    setAccordionOpen(false)
    hamburgerRef.current?.focus()
  }, [])

  const toggle = (event) => (isOpen ? close() : open(event.detail === 0))

  // ── Desktop works dropdown ────────────────────────────
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const dropdownRef = useRef(null)
  const dropdownPanelRef = useRef(null)
  const dropdownFirstItemRef = useRef(null)

  const closeDropdown = useCallback(() => {
    setDropdownOpen(false)
  }, [])

  const toggleDropdown = (event) => {
    if (dropdownOpen) {
      closeDropdown()
      return
    }

    setDropdownOpen(true)

    if (event.detail === 0) {
      requestAnimationFrame(() => {
        dropdownFirstItemRef.current?.focus()
      })
    }
  }

  const isTrabalhos = location.pathname.startsWith('/trabalhos')

  // Close desktop dropdown with Escape
  useEffect(() => {
    if (!dropdownOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeDropdown()
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [dropdownOpen, closeDropdown])

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    if (!dropdownOpen) return undefined

    const onMouseDown = (event) => {
      const clickedTrigger = dropdownRef.current?.contains(event.target)
      const clickedPanel = dropdownPanelRef.current?.contains(event.target)

      if (!clickedTrigger && !clickedPanel) {
        closeDropdown()
      }
    }

    document.addEventListener('mousedown', onMouseDown)

    return () => {
      document.removeEventListener('mousedown', onMouseDown)
    }
  }, [dropdownOpen, closeDropdown])

  // Close mobile menu with Escape — accordion first if open
  useEffect(() => {
    if (!isOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        if (accordionOpen) {
          setAccordionOpen(false)
        } else {
          close()
        }
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, accordionOpen, close])

  // Lock page scrolling while either menu is open
  useEffect(() => {
    const shouldLockScroll = isOpen || dropdownOpen

    if (!shouldLockScroll) return undefined

    const previousOverflow = document.body.style.overflow
    const previousPaddingRight = document.body.style.paddingRight
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth

    document.body.style.overflow = 'hidden'

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`
    }

    return () => {
      document.body.style.overflow = previousOverflow
      document.body.style.paddingRight = previousPaddingRight
    }
  }, [isOpen, dropdownOpen])

  const navLinkClass = ({ isActive }) =>
    isActive
      ? `${styles.link} ${styles.linkActive}`
      : styles.link

  return (
    <>
      <header
      ref={headerRef}
      className={`${styles.header}${
        isScrolled ? ` ${styles.headerScrolled}` : ''
      }${isOverFooter && !isOpen ? ` ${styles.headerOverFooter}` : ''}`}
    >
      <div className={styles.inner}>
        <div className={styles.leftArea}>
          <NavLink
            to={c.logoTo}
            className={styles.brand}
            aria-label={c.brandAriaLabel}
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
          aria-label={c.navAriaLabel}
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
              <NavTriggerLabel
                primary={c.trabalhosLabel}
                secondary={c.trabalhosDescription}
                chevron={
                  <svg
                    className={`${styles.chevron}${
                      dropdownOpen ? ` ${styles.chevronOpen}` : ''
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
                }
              />
            </button>


          </div>

          <NavLink
            to={c.sobreTo}
            className={navLinkClass}
          >
            <NavLabel
              primary={c.sobreLabelDesktop}
              secondary={c.sobreDescription}
            />
          </NavLink>

          <NavLink
            to={c.kihonTo}
            className={navLinkClass}
          >
            <NavLabel
              primary={c.kihonLabel}
              secondary={c.kihonDescription}
            />
          </NavLink>

          <a
            href="https://www.linkedin.com/in/henrique-m-silva/"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <NavLabel
              primary={c.linkedinLabelDesktop}
              secondary={c.linkedinDescription}
            />
          </a>
        </nav>

        <div className={styles.rightArea}>
          <div className={styles.navControls}>
            <ThemeToggle />
            <LanguageSwitcher className={styles.navSwitcher} />
          </div>

          <Link
            to={c.ctaTo}
            className={styles.ctaBtn}
          >
            {c.ctaLabel}
          </Link>

          <button
            ref={hamburgerRef}
            type="button"
            className={`${styles.hamburger}${
              isOpen ? ` ${styles.hamburgerOpen}` : ''
            }`}
            onClick={toggle}
            aria-label={
              isOpen
                ? c.closeMenuAriaLabel
                : c.openMenuAriaLabel
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
      </header>

      {/* Always in DOM — visibility controlled by CSS class */}
      <div
        ref={dropdownPanelRef}
        id="desktop-dropdown"
        className={`${styles.dropdown}${
          dropdownOpen ? ` ${styles.dropdownOpen}` : ''
        }${isScrolled ? ` ${styles.dropdownScrolled}` : ''}`}
        aria-hidden={!dropdownOpen}
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            closeDropdown()
          }
        }}
      >
        <div className={styles.dropdownContent}>
          {c.trabalhosItems.map((item, index) => (
            <Link
              key={item.to}
              to={item.to}
              ref={index === 0 ? dropdownFirstItemRef : undefined}
              className={`${styles.dropdownItem}${
          index === 0 ? ` ${styles.dropdownItemFirst}` : ''
              }`}
              style={{ '--item-index': index }}
              onClick={closeDropdown}
              tabIndex={dropdownOpen ? 0 : -1}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className={styles.desktopMenuFooter}>
          <span>{c.copyright}</span>
        </div>
            </div>

      <div
        id="mobile-nav"
        className={`${styles.mobilePanel}${
          isOpen ? ` ${styles.mobilePanelOpen}` : ''
        }`}
        aria-hidden={!isOpen}
      >
        <nav
          className={styles.mobileNav}
          aria-label={c.mobileNavAriaLabel}
        >
          <button
            ref={firstMobileItemRef}
            type="button"
            className={styles.accordionTrigger}
            onClick={() => {
              setAccordionOpen((prev) => !prev)
            }}
            aria-expanded={accordionOpen}
            aria-controls="mobile-accordion"
            tabIndex={isOpen ? 0 : -1}
          >
            <NavTriggerLabel
              primary={c.trabalhosLabel}
              secondary={c.trabalhosDescription}
              chevron={
                <svg
                  className={`${styles.chevron}${
                    accordionOpen ? ` ${styles.chevronOpen}` : ''
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
              }
            />
          </button>

          <div
            id="mobile-accordion"
            className={`${styles.accordionContent}${
              accordionOpen ? ` ${styles.accordionContentOpen}` : ''
            }`}
          >
            {/* Wrapper required for grid-template-rows animation */}
            <div className={styles.accordionInner}>
              {c.trabalhosItems.map((item, index) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={styles.accordionSubItem}
                  style={{ '--item-index': index }}
                  onClick={close}
                  tabIndex={accordionOpen && isOpen ? 0 : -1}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <NavLink
            to={c.sobreTo}
            className={styles.mobileLink}
            onClick={close}
            tabIndex={isOpen ? 0 : -1}
          >
            <NavLabel
              primary={c.sobreLabelMobile}
              secondary={c.sobreDescription}
            />
          </NavLink>

          <NavLink
            to={c.kihonTo}
            className={styles.mobileLink}
            onClick={close}
            tabIndex={isOpen ? 0 : -1}
          >
            <NavLabel
              primary={c.kihonLabel}
              secondary={c.kihonDescription}
            />
          </NavLink>

          <a
            href="https://www.linkedin.com/in/henrique-m-silva/"
            className={styles.mobileLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            tabIndex={isOpen ? 0 : -1}
          >
            <NavLabel
              primary={c.linkedinLabelMobile}
              secondary={c.linkedinDescription}
            />
          </a>

          <Link
            to={c.ctaTo}
            className={styles.mobileCta}
            onClick={close}
            tabIndex={isOpen ? 0 : -1}
          >
            {c.ctaLabel}
          </Link>
        </nav>

        <div className={styles.mobileFooter}>
          <div className={styles.mobileControls}>
            <ThemeToggle compact />
            <LanguageSwitcher
              onNavigate={close}
              tabIndex={isOpen ? 0 : -1}
            />
          </div>
          <span>{c.copyright}</span>
        </div>
      </div>
    </>
  )
}
