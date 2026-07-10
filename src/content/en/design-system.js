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
}
