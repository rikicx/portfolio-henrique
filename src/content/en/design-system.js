export default {
  seo: {
    title: 'Kihon Design System — Henrique Silva',
    description:
      "How this portfolio's design system connects product, code, and Figma: foundations, components, themes, and the decisions between them.",
    path: '/en/kihon',
    lang: 'en',
    robots: 'noindex, nofollow',
  },
  hero: {
    label: 'Design System',
    heading: 'Kihon',
    kanji: '基本',
    paragraphs: [
      'In Karate, Kihon (基本) means fundamentals — the basic techniques practiced until they become second nature. I chose this name because I believe good digital products are built the same way: mastering the essentials before chasing complexity.',
      "Everything documented here starts from that idea — and it's the same system that builds this very page.",
    ],
  },
  sectionNav: {
    label: 'Sections on this page',
    items: [
      { id: 'overview', label: 'Overview' },
      { id: 'principles', label: 'Principles' },
      { id: 'foundations', label: 'Foundations' },
      { id: 'themes', label: 'Themes' },
      { id: 'components', label: 'Components' },
      { id: 'responsive', label: 'Responsive' },
      { id: 'accessibility', label: 'Accessibility' },
      { id: 'evolution', label: 'Evolution' },
      { id: 'adapted', label: 'Adaptation' },
    ],
  },
  overview: {
    title: 'Overview',
    paragraphs: [
      'Kihon documents the foundations behind this portfolio. More than a component catalogue, it brings together the decisions that keep the interface consistent as the product evolves.',
      'Every principle shown here has been applied to the real product. The goal is not to reproduce a specific interface, but to show how simple, well-defined decisions can become an adaptable system.',
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
      intro: 'A single family (Inter Tight, two weights) and an expressive scale — the variation is in size, not in variety. None of these names exist as CSS variables in the code: every font-size is written locally, per component. The specimens below render at true size.',
      tokenAbsent: '—',
      specimens: {
        displayXXL: 'Henrique',
        displayHero: 'Kihon',
        displayXL: 'Design System',
        displayL: 'Selected work',
        h1: 'Selected projects',
        h2: 'Skills & tools',
        h3: 'Strategy and discovery',
        bodyL: 'I turn complex contexts into clearer digital experiences.',
        bodyM: 'I connect user needs, business goals, and technical feasibility.',
        bodyS: 'Short description of the selected project.',
        labelL: 'View selected projects ↓',
        labelM: 'Get in touch',
        labelS: 'Healthcare · Head of Design',
      },
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
      intro: "An 8-based scale (4px as the minimum exception). Like typography, there's no --space-* token in the code — the values below are what production actually uses, read straight from the components. Bars drawn to proportional scale.",
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
      'The system separates raw values from semantic roles. Components consume tokens such as --color-text-primary and --color-bg-surface, allowing the same structure to work across light and dark themes.',
      'The visitor preference is applied before the first render. The entire interface can therefore respond to the active theme without each component needing to know which theme is selected.',
    ],
    demoTitle: 'This page is the demo',
    demoText: 'Switch themes and watch the colors, specimens, and surfaces respond through the same tokens used by the product.',
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
      specimenLabel: 'Get in touch',
      sizesTitle: 'Sizes',
      sizes: [
        { key: 's', label: 'S · 38px' },
        { key: 'm', label: 'M · 48px' },
        { key: 'l', label: 'L · 64px' },
      ],
      statesTitle: 'States',
      states: [
        { key: 'default', label: 'Default' },
        { key: 'hover', label: 'Hover — shifts tone, never shape' },
        { key: 'focus', label: 'Focus — global ring, 2px, 3px offset' },
        { key: 'disabled', label: 'Disabled — 0.55 opacity' },
      ],
      linksTitle: 'Links',
      linkSpecimens: [
        { key: 'textLink', label: 'View all work', caption: 'Text Link — internal navigation, underline on hover' },
        { key: 'hyperLink', label: 'LinkedIn ↗︎', caption: 'HyperLink — external, always with rel="noopener noreferrer"' },
      ],
      specimenNote: 'Documentation specimens — not interactive. The real CTAs live on their own pages.',
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

    cardsMetrics: {
      title: 'Cards and metrics',
      paragraphs: [
        'Project Card is a grid on desktop and a horizontal slider on mobile. Hover darkens the image and reveals "View Project →"; the whole card is the link, with an aria-label matching the project title — there is no separate button inside it.',
        'Stat Card shows the Home metrics (19 Years, 8+ Years, Brazil + US): a large value in Heading/H1, a short label in Body. The Wide variant spans two columns.',
        "Like Button and Link, these cards aren't standalone, reusable React components outside where they already live — Project Card sits in Projects.jsx and OtherProjectsSection.jsx, Stat Card in Stats.jsx. Documenting them here doesn't mean remounting them with made-up data.",
      ],
      projectSpecimen: {
        title: 'Gerdau Storeroom',
        meta: 'Industry · Product Design',
        overlay: 'View Project →',
        captionDefault: 'Project Card — Default · 420×480, radius 16',
        captionHover: 'Hover — overlay darkens, "View Project →" reveals',
      },
      statSpecimen: {
        value: '19',
        suffix: 'Years',
        label: 'of experience in digital products',
        caption: 'Stat Card — value in Heading/H1, label in Body',
      },
      rulesTitle: 'Metric rules',
      rulesItems: [
        'Metrics always come from approved content — never invented or rounded.',
        'Desktop and mobile variants can diverge by design decision (e.g. "8+ Years" on desktop, "8 Years +" on mobile in the Portuguese copy).',
        'No superfluous ARIA: value and label already form a readable sentence in the order they appear in the DOM.',
      ],
    },

    forms: {
      title: 'Form',
      intro: 'The form prioritizes clarity at every stage — completion, validation, submission, success, and error. The examples below show its structure and key states without creating a second functional instance.',
      fieldSpecimens: {
        defaultField: { label: 'Name', value: 'Henrique Silva', caption: 'Field — bottom line only, no box' },
        errorField: { label: 'Email', value: 'henrique@', error: 'Enter a valid email.', caption: 'Error — text message + color, never color alone' },
      },
      fieldsTitle: 'Fields',
      columns: { field: 'Field', type: 'Type', required: 'Required', notes: 'Notes' },
      fields: [
        { field: 'Name', type: 'text', required: 'Yes', notes: 'autoComplete="name"' },
        { field: 'Email', type: 'email', required: 'Yes', notes: 'Regex validation on top of required' },
        { field: 'Company', type: 'text', required: 'No', notes: 'Labeled "— optional"' },
        { field: 'Subject', type: 'text', required: 'Yes', notes: 'Filled in by the visitor — different from the hidden "subject" field sent to Formspree' },
        { field: 'Message', type: 'textarea', required: 'Yes', notes: '3 visible rows, vertically resizable' },
      ],
      statesTitle: 'States and submission',
      statesItems: [
        'Validation happens on submission, with messages directly associated with each invalid field.',
        'While processing, the form communicates its submission state and prevents duplicate actions.',
        'Success and failure receive distinct, accessible feedback without relying on color alone.',
        'An invisible spam protection reduces automated submissions without interfering with keyboard navigation.',
        'Portuguese and English share the same flow while adapting the messages to each language.',
      ],
    },

    footer: {
      title: 'Footer',
      intro: 'A single Footer, reused on every page through Layout — per-page variations are not allowed. The real instance is already at the bottom of this very page; what follows is its anatomy, not a second mount.',
      anatomyTitle: 'Anatomy',
      anatomyItems: [
        'Identity block — photo (159×159), name, and role',
        'Final CTA — a Display-scale heading and a pill button to /contact',
        'Contact links — LinkedIn, Email, and Resume, separated by dots, opening in a new tab with rel="noopener noreferrer"',
        'A divider, then the copyright line with the site version (e.g. "Version 4.1") on the same line',
      ],
      behaviorTitle: 'Behavior',
      behaviorItems: [
        'Desktop: identity on the left, CTA on the right. Mobile: everything centered and stacked, with the photo never cropping the head on iOS Safari.',
        "The footer stays sticky behind the page content and is revealed by scrolling — it doesn't animate on its own, the content above it slides up.",
        'With prefers-reduced-motion, the reveal effect is preserved because it is native scrolling, not an extra transition to turn off.',
        'PT and EN only change the copy — same structure, same behavior.',
      ],
    },
  },

  responsive: {
    title: 'Responsive behavior',
    intro: "The rule is recompose, not just shrink: on smaller screens the composition changes on purpose — order, hierarchy, and even content adjust.",
    deviceLabels: { desktop: 'Desktop', tablet: 'Tablet', mobile: 'Mobile' },
    tabletNote: "Tablet compresses the desktop composition — it doesn't recompose it.",
    rows: [
      { section: 'Hero', insight: "The name gets its own scale on mobile — never a shrunk desktop." },
      { section: 'Featured projects', insight: 'From grid to horizontal slider — and card order changes by design, not by accident.' },
      { section: 'Experience', insight: 'From horizontal composition to accordion — one role open at a time.' },
      { section: 'Navigation', insight: 'From a full bar to logo + hamburger, with a full-screen panel.' },
    ],
    breakpointsNote: 'Real breakpoints in the code: 768px and 1024px.',
  },

  accessibility: {
    title: 'Accessibility',
    intro: 'Practices verifiable in the code and in the published product — not a formal WCAG conformance audit.',
    contrastTitle: 'Measured contrast',
    contrastTiles: [
      { value: '21:1', badge: 'AAA', pair: '#000 on #FFF' },
      { value: '4.9:1', badge: 'AA', pair: '#6D6D6D on #FFF' },
      { value: '3.5:1', badge: 'large text', pair: '#888 on #FFF' },
      { value: '15:1', badge: 'AAA', pair: '#D9D9D9 on #000' },
    ],
    focusDemo: {
      label: 'Get in touch',
      caption: 'Global focus ring — 2px outline, 3px offset, in either theme',
    },
    items: [
      { label: 'Keyboard flow', detail: 'Tab moves through the Navbar in visual order; Escape closes the dropdown/menu; closed panels use tabIndex -1 so they never trap focus on invisible content.' },
      { label: 'Reduced motion', detail: 'prefers-reduced-motion zeroes every duration (0.01ms) globally; the Hero\'s parallax and floating elements are fully disabled.' },
      { label: 'Heading hierarchy', detail: 'One H1 per route, with no skipped levels — including on this page.' },
      { label: 'External links', detail: 'target="_blank" is always paired with rel="noopener noreferrer".' },
      { label: 'Decorative elements', detail: 'Purely visual icons and images use aria-hidden="true" or alt="".' },
    ],
  },
  evolution: {
    title: 'Continuous evolution',
    kanjiName: 'Manen Shoho',
    kanji: '万年初歩',
    intro: 'Another principle behind this system is Manen Shoho (万年初歩) — remain a beginner. It is a reminder that every component, pattern, and decision can be questioned, refined, and improved. The system evolves without treating any solution as final.',
  },

  adapted: {
    title: 'Built to be adapted',
    paragraphs: [
      "Kihon was built for this portfolio. But its foundations weren't built only for it.",
      'Swap the brand, the colors, the typography — keep the architecture: semantic tokens before fixed values, decisions documented before they\'re implemented, accessibility as part of the system, not a final review.',
      "Kihon isn't meant to be copied. It is a starting point for new design systems: adapt the identity, preserve the foundations, and build something that is truly your own.",
    ],
  },
}
