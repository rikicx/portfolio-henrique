import { NavLink, Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useCallback, useRef } from 'react'
import styles from './Navbar.module.css'
import logoUrl from '../media/shared/branding/hsd-logo.svg'
import { useLanguage } from '../context/LanguageContext'
import pt from '../content/pt/nav'
import en from '../content/en/nav'

export default function Navbar() {
  const { lang } = useLanguage()
  const c = lang === 'en' ? en : pt

  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const updateScrolledState = () => {
      setIsScrolled(window.scrollY > 96)
    }

    updateScrolledState()

    window.addEventListener('scroll', updateScrolledState, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', updateScrolledState)
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
  const [dropdownOpenedAt, setDropdownOpenedAt] = useState(null)

  const dropdownOpen =
    dropdownOpenedAt !== null && dropdownOpenedAt === location.pathname

  const dropdownRef = useRef(null)
  const dropdownFirstItemRef = useRef(null)

  const closeDropdown = useCallback(() => {
    setDropdownOpenedAt(null)
  }, [])

  const toggleDropdown = (event) => {
    if (dropdownOpen) {
      closeDropdown()
      return
    }

    setDropdownOpenedAt(location.pathname)

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
      if (!dropdownRef.current?.contains(event.target)) {
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
    <header
      className={`${styles.header}${
        isScrolled ? ` ${styles.headerScrolled}` : ''
      }`}
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
              {c.trabalhosLabel}

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
            </button>

            {/* Always in DOM — visibility controlled by CSS class */}
            <div
              id="desktop-dropdown"
              className={`${styles.dropdown}${
                dropdownOpen ? ` ${styles.dropdownOpen}` : ''
              }`}
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
          </div>

          <NavLink
            to={c.sobreTo}
            className={navLinkClass}
          >
            {c.sobreLabelDesktop}
          </NavLink>

          <a
            href="https://www.linkedin.com/in/henrique-m-silva/"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {c.linkedinLabelDesktop}
          </a>
        </nav>

        <div className={styles.rightArea}>
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
            {c.trabalhosLabel}

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
            {c.sobreLabelMobile}
          </NavLink>

          <a
            href="https://www.linkedin.com/in/henrique-m-silva/"
            className={styles.mobileLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            tabIndex={isOpen ? 0 : -1}
          >
            {c.linkedinLabelMobile}
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
          <span>{c.copyright}</span>
        </div>
      </div>
    </header>
  )
}
