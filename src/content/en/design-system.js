export default {
  seo: {
    title: 'Design System — Henrique Silva',
    description:
      "How this portfolio's design system connects product, code, and Figma — foundations, principles, and decisions.",
    path: '/en/design-system',
    lang: 'en',
    robots: 'noindex, nofollow',
  },
  hero: {
    heading: 'Design System',
    lead: "This portfolio's editorial language, documented: black and white, expressive typography, a strict grid, and generous negative space — organized as a reusable system.",
  },
  overview: {
    title: 'Overview',
    paragraphs: [
      "This Design System documents what is already in production — not a parallel system, and not a proposal waiting to be validated. Every token, component, and decision referenced here exists today at henriquesilva.design.",
      'The documentation follows a clear order of priority: the published product leads; the code on the main branch confirms how it was implemented; the Design System file in Figma records the decision and the reasoning behind it. When the three sources diverge, that divergence is documented here as part of the system — not hidden.',
      "This process exists because visual consistency doesn't maintain itself. It depends on tracing how a design decision reaches the code, and on honestly reviewing where the system still has gaps.",
    ],
  },
  principles: {
    title: 'Principles',
    items: [
      {
        number: '01',
        title: 'Black and white decide',
        text: "The palette is neutral by decision, not by absence. Maximum contrast between black and white is the identity — decorative color doesn't enter without a content reason.",
      },
      {
        number: '02',
        title: 'Typography is the image',
        text: 'Display-scale headings (72–320px) carry the composition. When text is the protagonist, images and ornament step aside.',
      },
      {
        number: '03',
        title: 'Negative space is structure',
        text: 'The breathing room between sections (96–120px) and editorial pauses are part of the reading rhythm. Density is controlled, never accidental.',
      },
      {
        number: '04',
        title: 'Rigorous grid, asymmetric composition',
        text: 'The 1440px grid with 48px margins is the base; asymmetry happens inside it, never against it.',
      },
      {
        number: '05',
        title: 'Discreet states, visible focus',
        text: 'Hover shifts tone (black → gray 600), never shape. Keyboard focus is always visible: 2px black outline, 3px offset.',
      },
      {
        number: '06',
        title: 'Motion with purpose',
        text: "Short reveals (320ms, soft easing), moderate staggers, and full respect for prefers-reduced-motion. Nothing animates just for decoration.",
      },
    ],
  },

  foundations: {
    title: 'Foundations',
    intro: "The system's base elements — color, typography, spacing, radius, and elevation. Each one shows what actually exists today: in Figma, in production, and in code.",

    color: {
      title: 'Color',
      intro: 'A neutral palette. Primitives are the raw values; semantic tokens give those values a role and are what components should consume — that layer is what changes between themes.',
      primitivesTitle: 'Primitives',
      semanticTitle: 'Semantic',
      divergenceNote: "One real point worth flagging: --color-border-primary currently resolves to #D7D7D7 in code, while Figma already consolidated the official border value at #D9D9D9 (the same as --color-border-subtle). The difference is barely perceptible (ΔE≈1), and the migration is already logged as a technical task inside the Design System itself — it wasn't fixed here.",
      roles: {
        '--color-black': 'Black — base for text, inverse backgrounds, and actions',
        '--color-white': 'White — default background, inverse text',
        '--color-muted': 'Gray 600 — secondary text, hover',
        '--color-surface': 'Gray 100 — subtle surfaces',
        '--color-divider': 'Gray 200 — borders, dividers, placeholders',
        '--color-border': 'Used today only for form field borders',
        '--color-bg-page': 'Default page background',
        '--color-bg-surface': 'Surfaces and discreet cards',
        '--color-bg-elevated': "The main content card's background, sitting on the structural background",
        '--color-bg-inverse': 'Black bands, the footer, inverted blocks',
        '--color-text-primary': 'Primary text',
        '--color-text-secondary': 'Supporting text, metadata',
        '--color-text-muted': 'Quieter text — dimmer than secondary in dark mode',
        '--color-text-inverse': 'Text over a dark or black background',
        '--color-border-primary': 'Default border (see the divergence note above)',
        '--color-border-subtle': 'Dividers and discreet borders',
        '--color-icon-primary': 'Default icons',
        '--color-link': 'Text links',
        '--color-focus-ring': 'Keyboard focus outline',
        '--color-bg-action-primary': 'Background for buttons and CTAs',
        '--color-text-on-action-primary': 'Text on buttons and CTAs',
        '--color-danger': "Form errors — the system's only non-neutral color",
      },
    },

    typography: {
      title: 'Typography',
      intro: "A single family (Inter Tight, two weights) and an expressive scale — the variation is in size, not in variety. None of these names exist as CSS variables in the code: every font-size is written locally, per component. The table shows the Figma spec next to what's actually in production.",
      columns: { figma: 'Figma', spec: 'Weight · line-height', usage: 'Used in production for', token: 'Token in code' },
      tokenAbsent: '—',
      usage: {
        displayXXL: '"Henrique" name in the desktop Hero',
        displayHero: 'Case study titles (TypingTitle)',
        displayXL: 'Desktop page titles',
        displayL: 'Large section titles, footer CTA',
        h1: 'Section H1s, metric values',
        h2: 'Section subtitles',
        h3: 'Item titles, case study subtitles',
        bodyL: 'Lead and highlighted text',
        bodyM: 'Standard body copy',
        bodyS: 'Support text, card metadata',
        labelL: 'Large CTAs',
        labelM: 'Buttons, navigation',
        labelS: 'Categories, copyright line',
      },
    },

    spacing: {
      title: 'Spacing and grid',
      intro: "An 8-based scale (4px as the minimum exception). Like typography, there's no --space-* token in the code — the values below are what production actually uses, read straight from the components.",
      columns: { figma: 'Figma', value: 'Value', token: 'Token in code' },
      tokenAbsent: '—',
      usageTitle: 'Canonical applications',
      usageItems: [
        'Page margin — 48px on desktop (--page-padding-desktop), fluid between 24 and 48px on mobile',
        'Section vertical padding — 96–120px desktop, 64–80px mobile',
        'Space between title and content — 32–48px',
        'Inline spacing (icon ↔ label) — 8–16px',
        'Card padding — 24–32px',
        'Project grid gap — 24px on desktop',
        'Reading width — 720–880px, 1440px max content width',
      ],
    },

    radiusElevation: {
      title: 'Radius and elevation',
      intro: 'An essentially flat system: a small radius for buttons and fields, a larger one for cards, and pill for CTAs and chips. A single shadow level, reserved for cards.',
      columns: { token: 'Token', value: 'Value', usage: 'Used for' },
      rows: {
        '--radius-8': 'Buttons, fields',
        '--radius-card': 'Cards',
        '--radius-pill': 'Pill CTAs, chips',
        '--shadow-card': 'Card elevation',
      },
      reserveNote: "Figma also reserves radius/24, radius/32, and radius/64 for future use — none of the three has a token or a use in production today.",
    },
  },

  themes: {
    title: 'Themes',
    paragraphs: [
      'The color system has two layers: primitives (raw values, like --color-black) and semantic tokens (roles, like --color-text-primary). Components should only consume the semantic layer — that is what changes value between themes; primitives stay fixed.',
      'Light is the default theme. Dark is switched on by a data-theme="dark" attribute on the <html> tag, which redefines the same semantic token names with new values — no component needs to know which theme is active, it just reads the variable.',
      "The preference is saved to localStorage (key portfolio-theme) and applied before the first render, to avoid a flash of the wrong theme on load.",
      "Figma today only documents the light layer — dark mode, and the Theme Toggle itself, were built after the Design System page in Figma was last updated. That is a real gap, not a documentation mistake.",
    ],
    previewLabel: 'The real component — the same one that appears in the Navbar.',
  },

  components: {
    title: 'Components',
    intro: "This section documents what exists: some components are real instances, safe to render more than once on the page; others — the Navbar, its dropdown, the mobile menu — carry global side effects (scroll lock, focus, keyboard listeners) and are therefore documented structurally, without a second mount.",

    buttonsLinks: {
      title: 'Buttons and links',
      paragraphs: [
        'Figma documents three patterns: Button (12 variants — Dark/Light × S/M/L), Text Link (12 variants), and HyperLink (2 variants, for external links). Hover shifts tone, never shape. Keyboard focus uses the same global ring on all three.',
        "The code has no shared <Button> or <Link> component. Every CTA — the one in the Hero, the one in the contact form, the one in the footer — is styled locally in that page's own CSS Module. The visual language is consistent because the decisions (radius, typography, hover tone, focus) are the same everywhere; the implementation, today, is distributed.",
        'The only disabled/loading state observed in production is the contact form\'s submit button: a quieter surface and text, with the label switching to "Sending…".',
      ],
      columns: { pattern: 'Pattern', sizes: 'Sizes', states: 'States', usage: 'Where it appears' },
      rows: [
        { pattern: 'Button', sizes: 'S 38px · M 48px · L 64px', states: 'Default, Hover, Focus, Disabled/Loading', usage: 'Hero CTA, form submit, footer CTA' },
        { pattern: 'Text Link', sizes: 'S/M/L — same heights as Button', states: 'Default, Hover', usage: 'Navigation, "Read more"' },
        { pattern: 'HyperLink', sizes: 'Single height', states: 'Default, Hover', usage: 'External links (LinkedIn), target="_blank" + rel="noopener noreferrer"' },
      ],
    },

    navigation: {
      title: 'Navigation',
      intro: 'The Navbar is a single component, present on every route through Layout. The documentation below describes the real component, without mounting a second instance — which would duplicate landmarks, listeners, and ARIA state.',
      anatomyTitle: 'Anatomy',
      anatomyItems: [
        'Logo — SVG, 46×74, links to Home',
        'Center nav — "Work" dropdown, "About Me", external LinkedIn link',
        'Right area — Theme Toggle, Language Switcher, "Get in touch" CTA, hamburger (mobile)',
      ],
      behaviorTitle: 'Behavior',
      behaviorItems: [
        'The bar compacts ("scrolled") after 96px of scroll.',
        'The "Work" dropdown: a full-page panel, aria-expanded and aria-haspopup on the trigger. Closes on Escape, on an outside click, or on a click in the panel\'s empty area. Opening via keyboard moves focus to the first item — unlike the mobile menu, closing does not automatically return focus to the trigger.',
        'Mobile menu: a full-screen panel, the "Work" accordion animates via grid-template-rows. Escape closes the accordion first (if open), then the menu. Scroll locks while open, compensating for scrollbar width. Closing returns focus to the hamburger button.',
        'Closed panels set tabIndex -1 on their internal links, so Tab never lands on invisible content.',
        'Theme Toggle and Language Switcher appear twice in the DOM — in the bar\'s right area and in the mobile menu\'s footer — always present, with visibility controlled by CSS and aria-hidden, not by conditional mounting.',
      ],
      previewLabel: 'Language switcher — a real instance, the same one that appears in the Navbar (this is the second simultaneous instance; the first already lives in the bar above).',
    },
  },

  responsive: {
    title: 'Responsive behavior',
    intro: "The rule is recompose, not just shrink: on smaller screens the composition changes on purpose — order, hierarchy, and even content adjust. It's not the same screen with smaller fonts.",
    columns: { section: 'Section', desktop: 'Desktop', mobile: 'Mobile' },
    rows: [
      { section: 'Hero', desktop: 'Name in Display/XXL bleeding off the right edge, photo overlapping with parallax', mobile: "Name at its own scale (96px — not a shrunk desktop version), photo in normal flow, full-width CTA" },
      { section: 'Featured projects', desktop: 'A 3-column grid', mobile: 'Horizontal scroll, with card order changing (Gerdau · QI · EMR) — a design decision, not an accident' },
      { section: 'Experience', desktop: 'Horizontal composition, every role visible at once', mobile: 'Accordion per company, one open at a time' },
      { section: 'Navigation', desktop: 'Logo + center nav + CTA', mobile: 'Logo + hamburger; full-screen panel with accordion' },
    ],
    breakpointsNote: 'Real breakpoints in the code: 768px (mobile ↔ tablet) and 1024px (tablet ↔ desktop).',
  },

  accessibility: {
    title: 'Accessibility',
    intro: 'Practices verifiable in the code and in the published product — not a formal WCAG conformance audit.',
    items: [
      { label: 'Global visible focus', detail: ':focus-visible { outline: 2px solid #000; outline-offset: 3px }, applied to every focusable element, in either theme.' },
      { label: 'Keyboard flow', detail: 'Tab moves through the Navbar in visual order; Escape closes the dropdown/menu; closed panels use tabIndex -1 so they never trap focus on invisible content.' },
      { label: 'Measured contrast', detail: 'Black on white 21:1 (AAA) · gray 600 on white 4.9:1 (AA normal text) · gray 500 on white 3.5:1 (large text only) · gray 200 on black 15:1 (AAA).' },
      { label: 'Reduced motion', detail: 'prefers-reduced-motion zeroes every duration (0.01ms) globally; the Hero\'s parallax and floating elements are fully disabled.' },
      { label: 'Heading hierarchy', detail: 'One H1 per route, with no skipped levels — including on this page.' },
      { label: 'External links', detail: 'target="_blank" is always paired with rel="noopener noreferrer".' },
      { label: 'Decorative elements', detail: 'Purely visual icons and images use aria-hidden="true" or alt="".' },
    ],
  },
}
