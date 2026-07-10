import { useEffect, useRef, useState } from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import ThemeToggle from '../components/ThemeToggle'
import LanguageSwitcher from '../components/LanguageSwitcher'
import TokenSwatch from '../components/design-system/TokenSwatch'
import TokenTable from '../components/design-system/TokenTable'
import TokenValue from '../components/design-system/TokenValue'
import ComponentPreview from '../components/design-system/ComponentPreview'
import { useLanguage } from '../context/LanguageContext'
import ptContent from '../content/pt/design-system'
import enContent from '../content/en/design-system'
import {
  primitiveColorTokens,
  semanticColorTokens,
  radiusTokens,
  typographyScale,
  spacingScale,
} from '../content/design-system-tokens'
import styles from './DesignSystemPage.module.css'

// Weight names come from the Figma spec ('Medium'/'Regular').
const FONT_WEIGHTS = { Medium: 500, Regular: 400 }

// Letter-spacing arrives as a percentage string ('-2.5%') → em units.
function trackingToEm(percent) {
  return `${parseFloat(percent) / 100}em`
}

// Responsive comparison wireframes are keyed by section, in content order.
const RESPONSIVE_WIRE_KEYS = ['hero', 'projects', 'experience', 'nav']

export default function DesignSystemPage() {
  const { lang } = useLanguage()
  const c = lang === 'en' ? enContent : ptContent

  const sectionNavSlotRef = useRef(null)
  const sectionNavRef = useRef(null)
  const sectionLinkRefs = useRef(new Map())
  const [isSectionNavFixed, setIsSectionNavFixed] = useState(false)
  const [sectionNavHeight, setSectionNavHeight] = useState(0)
  const [activeSectionId, setActiveSectionId] = useState(c.sectionNav.items[0]?.id ?? '')

  useEffect(() => {
    const slot = sectionNavSlotRef.current
    const nav = sectionNavRef.current

    if (!slot || !nav) return undefined

    const getNavbarOffset = () => (window.innerWidth <= 768 ? 88 : 64)

    const updateSectionNav = () => {
      const nextHeight = nav.getBoundingClientRect().height
      const shouldFix = slot.getBoundingClientRect().top <= getNavbarOffset()

      setSectionNavHeight(nextHeight)
      setIsSectionNavFixed(shouldFix)
    }

    updateSectionNav()

    window.addEventListener('scroll', updateSectionNav, { passive: true })
    window.addEventListener('resize', updateSectionNav)

    const resizeObserver = new ResizeObserver(updateSectionNav)
    resizeObserver.observe(nav)

    return () => {
      window.removeEventListener('scroll', updateSectionNav)
      window.removeEventListener('resize', updateSectionNav)
      resizeObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    const sectionIds = c.sectionNav.items.map((item) => item.id)
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) return undefined

    const getActivationOffset = () => (window.innerWidth <= 768 ? 188 : 164)

    const updateActiveSection = () => {
      const offset = getActivationOffset()
      let nextActiveId = sections[0].id

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= offset) {
          nextActiveId = section.id
        } else {
          break
        }
      }

      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4

      if (nearBottom) {
        nextActiveId = sections[sections.length - 1].id
      }

      setActiveSectionId((current) =>
        current === nextActiveId ? current : nextActiveId
      )
    }

    updateActiveSection()

    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [c.sectionNav.items])

  useEffect(() => {
    const activeLink = sectionLinkRefs.current.get(activeSectionId)

    if (!activeLink || !isSectionNavFixed) return

    activeLink.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    })
  }, [activeSectionId, isSectionNavFixed])

  return (
    <Layout>
      <Seo
        title={c.seo.title}
        description={c.seo.description}
        path={c.seo.path}
        lang={c.seo.lang}
        robots={c.seo.robots}
      />
      <div className={styles.page}>
        {/* ── Hero ─────────────────────────────────────────────────── */}
        <header className={styles.hero}>
          <span className={styles.heroKanji} aria-hidden="true">
            {c.hero.kanji}
          </span>
          <div className={styles.heroInner}>
            <p className={styles.heroEyebrow}>{c.hero.label}</p>
            <h1 className={styles.heroTitle}>{c.hero.heading}</h1>
            <div className={styles.heroIntro}>
              {c.hero.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </header>

        <div
          ref={sectionNavSlotRef}
          className={styles.sectionNavSlot}
          style={isSectionNavFixed ? { height: `${sectionNavHeight}px` } : undefined}
        >
          <nav
            ref={sectionNavRef}
            className={`${styles.sectionNav} ${
              isSectionNavFixed ? styles.sectionNavFixed : ''
            }`}
            aria-label={c.sectionNav.label}
          >
            <ul className={styles.sectionNavList}>
              {c.sectionNav.items.map((item) => {
                const isActive = item.id === activeSectionId

                return (
                  <li key={item.id}>
                    <a
                      ref={(element) => {
                        if (element) {
                          sectionLinkRefs.current.set(item.id, element)
                        } else {
                          sectionLinkRefs.current.delete(item.id)
                        }
                      }}
                      href={`#${item.id}`}
                      className={isActive ? styles.sectionNavLinkActive : undefined}
                      aria-current={isActive ? 'location' : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>

        {/* ── 01 Overview ──────────────────────────────────────────── */}
        <section id="overview" className={styles.section}>
          <p className={styles.eyebrow}>KIHON — 01</p>
          <div className={styles.splitRow}>
            <h2 className={styles.sectionTitle}>{c.overview.title}</h2>
            <div className={styles.splitBody}>
              {c.overview.paragraphs.map((paragraph, index) => (
                <p key={index} className={styles.bodyText}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

        </section>

        {/* ── 02 Principles ────────────────────────────────────────── */}
        <section id="principles" className={styles.section}>
          <p className={styles.eyebrow}>KIHON — 02</p>
          <h2 className={styles.sectionTitle}>{c.principles.title}</h2>
          <div className={styles.principlesGrid}>
            {c.principles.items.map((item) => (
              <div key={item.number} className={styles.principle}>
                <p className={styles.principleNumber}>{item.number}</p>
                <h3 className={styles.principleTitle}>{item.title}</h3>
                <p className={styles.principleText}>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 03 Foundations ───────────────────────────────────────── */}
        <section id="foundations" className={styles.section}>
          <p className={styles.eyebrow}>KIHON — 03</p>
          <div className={styles.splitRow}>
            <h2 className={styles.sectionTitle}>{c.foundations.title}</h2>
            <div className={styles.splitBody}>
              <p className={styles.bodyText}>{c.foundations.intro}</p>
            </div>
          </div>

          {/* Color */}
          <div className={styles.subsection}>
            <h3 className={styles.subsectionTitle}>{c.foundations.color.title}</h3>
            <p className={styles.bodyText}>{c.foundations.color.intro}</p>

            <p className={styles.groupLabel}>{c.foundations.color.primitivesTitle}</p>
            <div className={styles.primitivesRow}>
              {primitiveColorTokens.map((token) => (
                <TokenSwatch
                  key={token.name}
                  name={token.name}
                  figmaName={token.figmaName}
                  role={c.foundations.color.roles[token.name]}
                  large
                />
              ))}
            </div>

            <p className={styles.groupLabel}>{c.foundations.color.semanticTitle}</p>
            <div className={styles.swatchGrid}>
              {semanticColorTokens.map((token) => (
                <TokenSwatch
                  key={token.name}
                  name={token.name}
                  figmaName={token.figmaName}
                  role={c.foundations.color.roles[token.name]}
                />
              ))}
            </div>

          </div>

          {/* Typography — live specimens, true size, editorial bleed */}
          <div className={styles.subsection}>
            <h3 className={styles.subsectionTitle}>{c.foundations.typography.title}</h3>
            <p className={styles.bodyText}>{c.foundations.typography.intro}</p>

            <div className={styles.typeList}>
              {typographyScale.map((item) => (
                <div key={item.key} className={styles.typeRow}>
                  <div className={styles.typeSpec}>
                    <p className={styles.typeName}>{item.figmaName}</p>
                    <p className={styles.typeMeta}>
                      {item.size} · {item.weight} · lh {item.lineHeight} · ls {item.letterSpacing}
                    </p>
                    <p className={styles.typeUsage}>
                      {c.foundations.typography.usage[item.key]}
                    </p>
                  </div>
                  <p
                    className={styles.typeSpecimen}
                    style={{
                      fontSize: `min(${item.size}, 16vw)`,
                      fontWeight: FONT_WEIGHTS[item.weight],
                      lineHeight: item.lineHeight,
                      letterSpacing: trackingToEm(item.letterSpacing),
                    }}
                  >
                    {c.foundations.typography.specimens[item.key]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Spacing — proportional bars */}
          <div className={styles.subsection}>
            <h3 className={styles.subsectionTitle}>{c.foundations.spacing.title}</h3>
            <p className={styles.bodyText}>{c.foundations.spacing.intro}</p>

            <div className={styles.spacingScale}>
              {spacingScale.map((item) => (
                <div key={item.figmaName} className={styles.spacingRow}>
                  <span className={styles.spacingName}>{item.figmaName}</span>
                  <span
                    className={styles.spacingBar}
                    style={{ width: `min(${parseInt(item.value, 10) * 7}px, 100%)` }}
                    aria-hidden="true"
                  />
                  <span className={styles.spacingValue}>{item.value}</span>
                </div>
              ))}
            </div>

            <p className={styles.groupLabel}>{c.foundations.spacing.usageTitle}</p>
            <ul className={styles.twoColList}>
              {c.foundations.spacing.usageItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Radius & elevation — real boxes */}
          <div className={styles.subsection}>
            <h3 className={styles.subsectionTitle}>{c.foundations.radiusElevation.title}</h3>
            <p className={styles.bodyText}>{c.foundations.radiusElevation.intro}</p>

            <div className={styles.radiusRow}>
              {radiusTokens.map((token) => (
                <div key={token.name} className={styles.radiusItem}>
                  <span
                    className={styles.radiusBox}
                    style={{ borderRadius: `var(${token.name})` }}
                    aria-hidden="true"
                  />
                  <p className={styles.radiusName}>{token.name}</p>
                  <p className={styles.radiusValue}>
                    <TokenValue name={token.name} /> · {c.foundations.radiusElevation.rows[token.name]}
                  </p>
                </div>
              ))}
              <div className={styles.radiusItem}>
                <span className={`${styles.radiusBox} ${styles.shadowBox}`} aria-hidden="true" />
                <p className={styles.radiusName}>--shadow-card</p>
                <p className={styles.radiusValue}>
                  {c.foundations.radiusElevation.rows['--shadow-card']}
                </p>
              </div>
            </div>
            <p className={styles.note}>{c.foundations.radiusElevation.reserveNote}</p>
          </div>
        </section>

        {/* ── 04 Themes ────────────────────────────────────────────── */}
        <section id="themes" className={styles.section}>
          <p className={styles.eyebrow}>KIHON — 04</p>
          <div className={styles.splitRow}>
            <h2 className={styles.sectionTitle}>{c.themes.title}</h2>
            <div className={styles.splitBody}>
              {c.themes.paragraphs.map((paragraph, index) => (
                <p key={index} className={styles.bodyText}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className={styles.themeDemo}>
            <div className={styles.themeDemoText}>
              <h3 className={styles.themeDemoTitle}>{c.themes.demoTitle}</h3>
              <p className={styles.bodyText}>{c.themes.demoText}</p>
            </div>
            <div className={styles.themeDemoToggle}>
              <ThemeToggle />
              <p className={styles.specimenCaption}>{c.themes.previewLabel}</p>
            </div>
          </div>
        </section>

        {/* ── 05 Components ────────────────────────────────────────── */}
        <section id="components" className={styles.section}>
          <p className={styles.eyebrow}>KIHON — 05</p>
          <div className={styles.splitRow}>
            <h2 className={styles.sectionTitle}>{c.components.title}</h2>
            <div className={styles.splitBody}>
              <p className={styles.bodyText}>{c.components.intro}</p>
            </div>
          </div>

          {/* Buttons & links — documentation specimens */}
          <div className={styles.subsection}>
            <h3 className={styles.subsectionTitle}>{c.components.buttonsLinks.title}</h3>
            {c.components.buttonsLinks.paragraphs.map((paragraph, index) => (
              <p key={index} className={styles.bodyText}>
                {paragraph}
              </p>
            ))}

            <p className={styles.groupLabel}>{c.components.buttonsLinks.sizesTitle}</p>
            <div className={styles.specimenRow} aria-hidden="true">
              {c.components.buttonsLinks.sizes.map((size) => (
                <div key={size.key} className={styles.specimenItem}>
                  <span className={`${styles.pill} ${styles[`pill_${size.key}`]}`}>
                    {c.components.buttonsLinks.specimenLabel}
                  </span>
                  <span className={styles.specimenCaption}>{size.label}</span>
                </div>
              ))}
            </div>

            <p className={styles.groupLabel}>{c.components.buttonsLinks.statesTitle}</p>
            <div className={styles.specimenRow} aria-hidden="true">
              {c.components.buttonsLinks.states.map((state) => (
                <div key={state.key} className={styles.specimenItem}>
                  <span className={`${styles.pill} ${styles.pill_m} ${styles[`state_${state.key}`]}`}>
                    {c.components.buttonsLinks.specimenLabel}
                  </span>
                  <span className={styles.specimenCaption}>{state.label}</span>
                </div>
              ))}
            </div>

            <p className={styles.groupLabel}>{c.components.buttonsLinks.linksTitle}</p>
            <div className={styles.specimenRow} aria-hidden="true">
              {c.components.buttonsLinks.linkSpecimens.map((link) => (
                <div key={link.key} className={styles.specimenItem}>
                  <span className={`${styles.linkSpecimen} ${styles[`link_${link.key}`]}`}>
                    {link.label}
                  </span>
                  <span className={styles.specimenCaption}>{link.caption}</span>
                </div>
              ))}
            </div>

            <p className={styles.note}>{c.components.buttonsLinks.specimenNote}</p>
          </div>

          {/* Navigation — schematic anatomy, real switcher */}
          <div className={styles.subsection}>
            <h3 className={styles.subsectionTitle}>{c.components.navigation.title}</h3>
            <p className={styles.bodyText}>{c.components.navigation.intro}</p>

            <div className={styles.navWire} aria-hidden="true">
              <span className={styles.navWireLogo} />
              <span className={styles.navWireLinks}>
                <span className={styles.navWireLink} />
                <span className={styles.navWireLink} />
                <span className={styles.navWireLink} />
              </span>
              <span className={styles.navWireControls}>
                <span className={styles.navWireCircle} />
                <span className={styles.navWireCircle} />
                <span className={styles.navWirePill} />
              </span>
            </div>

            <div className={styles.anatomyColumns}>
              <div>
                <p className={styles.groupLabel}>{c.components.navigation.anatomyTitle}</p>
                <ul className={styles.list}>
                  {c.components.navigation.anatomyItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className={styles.groupLabel}>{c.components.navigation.behaviorTitle}</p>
                <ul className={styles.list}>
                  {c.components.navigation.behaviorItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <ComponentPreview label={c.components.navigation.previewLabel}>
              <LanguageSwitcher />
            </ComponentPreview>
          </div>

          {/* Cards & metrics — schematic specimens */}
          <div className={styles.subsection}>
            <h3 className={styles.subsectionTitle}>{c.components.cardsMetrics.title}</h3>
            {c.components.cardsMetrics.paragraphs.map((paragraph, index) => (
              <p key={index} className={styles.bodyText}>
                {paragraph}
              </p>
            ))}

            <div className={styles.cardSpecimens} aria-hidden="true">
              <div className={styles.specimenItem}>
                <div className={styles.projectCardWire}>
                  <span className={styles.projectCardImage} />
                  <span className={styles.projectCardTitle}>
                    {c.components.cardsMetrics.projectSpecimen.title}
                  </span>
                  <span className={styles.projectCardMeta}>
                    {c.components.cardsMetrics.projectSpecimen.meta}
                  </span>
                </div>
                <span className={styles.specimenCaption}>
                  {c.components.cardsMetrics.projectSpecimen.captionDefault}
                </span>
              </div>

              <div className={styles.specimenItem}>
                <div className={`${styles.projectCardWire} ${styles.projectCardWireHover}`}>
                  <span className={styles.projectCardImage} />
                  <span className={styles.projectCardOverlay}>
                    {c.components.cardsMetrics.projectSpecimen.overlay}
                  </span>
                  <span className={styles.projectCardTitle}>
                    {c.components.cardsMetrics.projectSpecimen.title}
                  </span>
                  <span className={styles.projectCardMeta}>
                    {c.components.cardsMetrics.projectSpecimen.meta}
                  </span>
                </div>
                <span className={styles.specimenCaption}>
                  {c.components.cardsMetrics.projectSpecimen.captionHover}
                </span>
              </div>

              <div className={styles.specimenItem}>
                <div className={styles.statCardWire}>
                  <span className={styles.statValue}>
                    {c.components.cardsMetrics.statSpecimen.value}
                    <em>{c.components.cardsMetrics.statSpecimen.suffix}</em>
                  </span>
                  <span className={styles.statLabel}>
                    {c.components.cardsMetrics.statSpecimen.label}
                  </span>
                </div>
                <span className={styles.specimenCaption}>
                  {c.components.cardsMetrics.statSpecimen.caption}
                </span>
              </div>
            </div>

            <p className={styles.groupLabel}>{c.components.cardsMetrics.rulesTitle}</p>
            <ul className={styles.twoColList}>
              {c.components.cardsMetrics.rulesItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Form — field anatomy specimens */}
          <div className={styles.subsection}>
            <h3 className={styles.subsectionTitle}>{c.components.forms.title}</h3>
            <p className={styles.bodyText}>{c.components.forms.intro}</p>

            <div className={styles.fieldSpecimens} aria-hidden="true">
              <div className={styles.specimenItem}>
                <div className={styles.fieldWire}>
                  <span className={styles.fieldLabel}>
                    {c.components.forms.fieldSpecimens.defaultField.label}
                  </span>
                  <span className={styles.fieldValue}>
                    {c.components.forms.fieldSpecimens.defaultField.value}
                  </span>
                  <span className={styles.fieldLine} />
                </div>
                <span className={styles.specimenCaption}>
                  {c.components.forms.fieldSpecimens.defaultField.caption}
                </span>
              </div>

              <div className={styles.specimenItem}>
                <div className={styles.fieldWire}>
                  <span className={styles.fieldLabel}>
                    {c.components.forms.fieldSpecimens.errorField.label}
                  </span>
                  <span className={styles.fieldValue}>
                    {c.components.forms.fieldSpecimens.errorField.value}
                  </span>
                  <span className={`${styles.fieldLine} ${styles.fieldLineError}`} />
                  <span className={styles.fieldError}>
                    {c.components.forms.fieldSpecimens.errorField.error}
                  </span>
                </div>
                <span className={styles.specimenCaption}>
                  {c.components.forms.fieldSpecimens.errorField.caption}
                </span>
              </div>
            </div>

            <p className={styles.groupLabel}>{c.components.forms.fieldsTitle}</p>
            <TokenTable
              columns={[
                { key: 'field', label: c.components.forms.columns.field },
                { key: 'type', label: c.components.forms.columns.type },
                { key: 'required', label: c.components.forms.columns.required },
                { key: 'notes', label: c.components.forms.columns.notes },
              ]}
              rows={c.components.forms.fields}
            />

            <p className={styles.groupLabel}>{c.components.forms.statesTitle}</p>
            <ul className={styles.twoColList}>
              {c.components.forms.statesItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

          </div>

          {/* Footer — schematic anatomy */}
          <div className={styles.subsection}>
            <h3 className={styles.subsectionTitle}>{c.components.footer.title}</h3>
            <p className={styles.bodyText}>{c.components.footer.intro}</p>

            <div className={styles.footerWire} aria-hidden="true">
              <span className={styles.footerWireAvatar} />
              <span className={styles.footerWireName} />
              <span className={styles.footerWireHeading} />
              <span className={styles.footerWirePill} />
              <span className={styles.footerWireLinks}>
                <span /><i /><span /><i /><span />
              </span>
              <span className={styles.footerWireDivider} />
            </div>

            <div className={styles.anatomyColumns}>
              <div>
                <p className={styles.groupLabel}>{c.components.footer.anatomyTitle}</p>
                <ul className={styles.list}>
                  {c.components.footer.anatomyItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className={styles.groupLabel}>{c.components.footer.behaviorTitle}</p>
                <ul className={styles.list}>
                  {c.components.footer.behaviorItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 06 Responsive — visual study ─────────────────────────── */}
        <section id="responsive" className={styles.section}>
          <p className={styles.eyebrow}>KIHON — 06</p>
          <div className={styles.splitRow}>
            <h2 className={styles.sectionTitle}>{c.responsive.title}</h2>
            <div className={styles.splitBody}>
              <p className={styles.bodyText}>{c.responsive.intro}</p>
            </div>
          </div>

          <div className={styles.compareList}>
            {c.responsive.rows.map((row, index) => {
              const wireKey = RESPONSIVE_WIRE_KEYS[index]
              return (
                <div key={row.section} className={styles.compareRow}>
                  <div className={styles.compareHead}>
                    <h3 className={styles.compareTitle}>{row.section}</h3>
                    <p className={styles.compareInsight}>{row.insight}</p>
                  </div>
                  <div className={styles.compareFrames}>
                    <div className={styles.compareCol}>
                      <div
                        className={`${styles.wireDesktop} ${styles[`wire_${wireKey}_desktop`]}`}
                        aria-hidden="true"
                      >
                        <span /><span /><span />
                      </div>
                      <p className={styles.deviceLabel}>{c.responsive.deviceLabels.desktop}</p>
                    </div>
                    <div className={styles.compareCol}>
                      <div
                        className={`${styles.wireTablet} ${styles[`wire_${wireKey}_desktop`]}`}
                        aria-hidden="true"
                      >
                        <span /><span /><span />
                      </div>
                      <p className={styles.deviceLabel}>{c.responsive.deviceLabels.tablet}</p>
                    </div>
                    <div className={styles.compareCol}>
                      <div
                        className={`${styles.wireMobile} ${styles[`wire_${wireKey}_mobile`]}`}
                        aria-hidden="true"
                      >
                        <span /><span /><span />
                      </div>
                      <p className={styles.deviceLabel}>{c.responsive.deviceLabels.mobile}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <p className={styles.note}>
            {c.responsive.tabletNote} {c.responsive.breakpointsNote}
          </p>
        </section>

        {/* ── 07 Accessibility ─────────────────────────────────────── */}
        <section id="accessibility" className={styles.section}>
          <p className={styles.eyebrow}>KIHON — 07</p>
          <div className={styles.splitRow}>
            <h2 className={styles.sectionTitle}>{c.accessibility.title}</h2>
            <div className={styles.splitBody}>
              <p className={styles.bodyText}>{c.accessibility.intro}</p>
            </div>
          </div>

          <p className={styles.groupLabel}>{c.accessibility.contrastTitle}</p>
          <div className={styles.contrastTiles}>
            {c.accessibility.contrastTiles.map((tile) => (
              <div key={tile.pair} className={styles.contrastTile}>
                <p className={styles.contrastValue}>{tile.value}</p>
                <p className={styles.contrastBadge}>{tile.badge}</p>
                <p className={styles.contrastPair}>{tile.pair}</p>
              </div>
            ))}
          </div>

          <div className={styles.focusDemo}>
            <span className={`${styles.pill} ${styles.pill_m} ${styles.state_focus}`} aria-hidden="true">
              {c.accessibility.focusDemo.label}
            </span>
            <p className={styles.specimenCaption}>{c.accessibility.focusDemo.caption}</p>
          </div>

          <dl className={styles.definitionList}>
            {c.accessibility.items.map((item) => (
              <div key={item.label} className={styles.definitionItem}>
                <dt className={styles.definitionTerm}>{item.label}</dt>
                <dd className={styles.definitionDetail}>{item.detail}</dd>
              </div>
            ))}
          </dl>
        </section>


        {/* ── 08 Evolution — Manen Shoho ───────────────────────────── */}
        <section id="evolution" className={`${styles.section} ${styles.evolution}`}>
          <p className={styles.eyebrow}>KIHON — 08</p>
          <div className={styles.evolutionHeader}>
            <h2 className={styles.sectionTitle}>{c.evolution.title}</h2>
            <p className={styles.evolutionKanji} aria-hidden="true">
              {c.evolution.kanji}
            </p>
          </div>
          <p className={`${styles.bodyText} ${styles.evolutionIntro}`}>{c.evolution.intro}</p>
        </section>

        {/* ── 09 Built to be adapted ───────────────────────────────── */}
        <section id="adapted" className={styles.section}>
          <p className={styles.eyebrow}>KIHON — 09</p>
          <h2 className={styles.sectionTitle}>{c.adapted.title}</h2>
          <div className={styles.adaptedBody}>
            {c.adapted.paragraphs.map((paragraph, index) => (
              <p key={index} className={styles.bodyText}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}
