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
  shadowTokens,
  typographyScale,
  spacingScale,
} from '../content/design-system-tokens'
import styles from './DesignSystemPage.module.css'

export default function DesignSystemPage() {
  const { lang } = useLanguage()
  const c = lang === 'en' ? enContent : ptContent

  const typographyRows = typographyScale.map((item) => ({
    figma: `${item.figmaName} — ${item.size}`,
    spec: `${item.weight} · ${item.lineHeight} · ${item.letterSpacing}`,
    usage: c.foundations.typography.usage[item.key],
    token: c.foundations.typography.tokenAbsent,
  }))

  const spacingRows = spacingScale.map((item) => ({
    figma: item.figmaName,
    value: item.value,
    token: c.foundations.spacing.tokenAbsent,
  }))

  const radiusRows = [...radiusTokens, ...shadowTokens].map((item) => ({
    token: item.name,
    value: <TokenValue name={item.name} />,
    usage: c.foundations.radiusElevation.rows[item.name],
  }))

  return (
    <Layout>
      <Seo
        title={c.seo.title}
        description={c.seo.description}
        path={c.seo.path}
        lang={c.seo.lang}
        robots={c.seo.robots}
      />
      <div className={styles.content}>
        <header className={styles.hero}>
          <h1 className={styles.heading}>{c.hero.heading}</h1>
          <p className={styles.lead}>{c.hero.lead}</p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{c.overview.title}</h2>
          {c.overview.paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.bodyText}>
              {paragraph}
            </p>
          ))}
        </section>

        <section className={styles.section}>
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

        {/* ── Foundations ──────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{c.foundations.title}</h2>
          <p className={styles.bodyText}>{c.foundations.intro}</p>

          <div className={styles.subsection}>
            <h3 className={styles.subsectionTitle}>{c.foundations.color.title}</h3>
            <p className={styles.bodyText}>{c.foundations.color.intro}</p>

            <p className={styles.groupLabel}>{c.foundations.color.primitivesTitle}</p>
            <div className={styles.swatchGrid}>
              {primitiveColorTokens.map((token) => (
                <TokenSwatch
                  key={token.name}
                  name={token.name}
                  figmaName={token.figmaName}
                  role={c.foundations.color.roles[token.name]}
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

            <p className={styles.note}>{c.foundations.color.divergenceNote}</p>
          </div>

          <div className={styles.subsection}>
            <h3 className={styles.subsectionTitle}>{c.foundations.typography.title}</h3>
            <p className={styles.bodyText}>{c.foundations.typography.intro}</p>
            <TokenTable
              columns={[
                { key: 'figma', label: c.foundations.typography.columns.figma },
                { key: 'spec', label: c.foundations.typography.columns.spec },
                { key: 'usage', label: c.foundations.typography.columns.usage },
                { key: 'token', label: c.foundations.typography.columns.token },
              ]}
              rows={typographyRows}
            />
          </div>

          <div className={styles.subsection}>
            <h3 className={styles.subsectionTitle}>{c.foundations.spacing.title}</h3>
            <p className={styles.bodyText}>{c.foundations.spacing.intro}</p>
            <TokenTable
              columns={[
                { key: 'figma', label: c.foundations.spacing.columns.figma },
                { key: 'value', label: c.foundations.spacing.columns.value },
                { key: 'token', label: c.foundations.spacing.columns.token },
              ]}
              rows={spacingRows}
            />
            <p className={styles.groupLabel}>{c.foundations.spacing.usageTitle}</p>
            <ul className={styles.list}>
              {c.foundations.spacing.usageItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.subsection}>
            <h3 className={styles.subsectionTitle}>{c.foundations.radiusElevation.title}</h3>
            <p className={styles.bodyText}>{c.foundations.radiusElevation.intro}</p>
            <TokenTable
              columns={[
                { key: 'token', label: c.foundations.radiusElevation.columns.token },
                { key: 'value', label: c.foundations.radiusElevation.columns.value },
                { key: 'usage', label: c.foundations.radiusElevation.columns.usage },
              ]}
              rows={radiusRows}
            />
            <p className={styles.note}>{c.foundations.radiusElevation.reserveNote}</p>
          </div>
        </section>

        {/* ── Themes ───────────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{c.themes.title}</h2>
          {c.themes.paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.bodyText}>
              {paragraph}
            </p>
          ))}
          <ComponentPreview label={c.themes.previewLabel}>
            <ThemeToggle />
          </ComponentPreview>
        </section>

        {/* ── Components ───────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{c.components.title}</h2>
          <p className={styles.bodyText}>{c.components.intro}</p>

          <div className={styles.subsection}>
            <h3 className={styles.subsectionTitle}>{c.components.buttonsLinks.title}</h3>
            {c.components.buttonsLinks.paragraphs.map((paragraph, index) => (
              <p key={index} className={styles.bodyText}>
                {paragraph}
              </p>
            ))}
            <TokenTable
              columns={[
                { key: 'pattern', label: c.components.buttonsLinks.columns.pattern },
                { key: 'sizes', label: c.components.buttonsLinks.columns.sizes },
                { key: 'states', label: c.components.buttonsLinks.columns.states },
                { key: 'usage', label: c.components.buttonsLinks.columns.usage },
              ]}
              rows={c.components.buttonsLinks.rows}
            />
          </div>

          <div className={styles.subsection}>
            <h3 className={styles.subsectionTitle}>{c.components.navigation.title}</h3>
            <p className={styles.bodyText}>{c.components.navigation.intro}</p>

            <p className={styles.groupLabel}>{c.components.navigation.anatomyTitle}</p>
            <ul className={styles.list}>
              {c.components.navigation.anatomyItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <p className={styles.groupLabel}>{c.components.navigation.behaviorTitle}</p>
            <ul className={styles.list}>
              {c.components.navigation.behaviorItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <ComponentPreview label={c.components.navigation.previewLabel}>
              <LanguageSwitcher />
            </ComponentPreview>
          </div>
        </section>

        {/* ── Responsive behavior ──────────────────────────────────── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{c.responsive.title}</h2>
          <p className={styles.bodyText}>{c.responsive.intro}</p>
          <TokenTable
            columns={[
              { key: 'section', label: c.responsive.columns.section },
              { key: 'desktop', label: c.responsive.columns.desktop },
              { key: 'mobile', label: c.responsive.columns.mobile },
            ]}
            rows={c.responsive.rows}
          />
          <p className={styles.note}>{c.responsive.breakpointsNote}</p>
        </section>

        {/* ── Accessibility ────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{c.accessibility.title}</h2>
          <p className={styles.bodyText}>{c.accessibility.intro}</p>
          <dl className={styles.definitionList}>
            {c.accessibility.items.map((item) => (
              <div key={item.label} className={styles.definitionItem}>
                <dt className={styles.definitionTerm}>{item.label}</dt>
                <dd className={styles.definitionDetail}>{item.detail}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </Layout>
  )
}
