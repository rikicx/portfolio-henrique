export default {
  seo: {
    title: 'QI Platform — Product Design Case Study | Henrique Silva',
    description:
      'Product strategy, design leadership and applied AI for a premium clinical benchmarking module inside 3PH Cloud.',
    path: '/en/work/qi-platform',
    lang: 'en',
    robots: 'noindex, follow',
  },
  hero: {
    titleLines: ['QI', 'Platform'],
    kicker: 'Clinical benchmarking · Product strategy · Applied AI',
    description:
      'How we turned data hospitals already held into a premium module for clinical comparison and improvement.',
  },
  metadata: {
    ariaLabel: 'Project information',
    imageAlt: 'QI Platform desktop overview exported from Figma',
    items: [
      { label: 'Company', value: '3PH Alliance' },
      { label: 'Year', value: '2024' },
      { label: 'Role', value: 'Head of Design' },
      { label: 'Product', value: 'Premium module within 3PH Cloud' },
      { label: 'Team led', value: '3 UX Designers' },
      {
        label: 'Measured adoption',
        value: '23,000+ comparative analyses in 12 months',
      },
      {
        label: 'Contribution',
        value:
          'Product strategy · Discovery · Design leadership · Research · Applied AI · Validation · Handoff',
      },
    ],
  },
  problem: {
    title: 'The problem',
    lead: 'The data existed. The comparison did not.',
    paragraphs: [
      '3PH Cloud was a free EDC for clinical studies in which hospitals retained ownership of their data after each study ended — an important difference from other products in the market.',
      'That history, however, was still compared through many spreadsheets. Keeping cuts, variables and versions consistent made it difficult to answer a simple question from physicians: “how is my hospital doing compared with others?”.',
      'QI Platform was created within 3PH Cloud to turn that history into continuous comparison. For the business, it became part of the premium plan; for hospitals, a way to investigate techniques, devices and procedures using data they already owned.',
    ],
  },
  centralQuestion: {
    label: 'The question that guided the work:',
    text: 'How could we turn the clinical data accumulated by hospitals into trustworthy, actionable comparisons while protecting the privacy of patients, centres and specialists?',
  },
  discovery: {
    title: 'Discovery before interface design',
    imgAlt: 'Collaborative board used in the remote QI Platform co-creation workshop',
    caption:
      'Remote co-creation workshop with specialists and product teams. The board contains process material, not patient data.',
    paragraphs: [
      'We tested insights raised by physicians through qualitative interviews with physicians, technicians and data managers, alongside Product and Technology stakeholders.',
      'We investigated how each role checked data, built comparisons and decided to examine a difference. A co-creation workshop combined Lean Inception and Design Sprint to organise the product questions.',
      'With consent and sensitive information removed beforehand, we used ChatGPT to improve guides, transcribe interviews and support the initial search for patterns. Interpretation remained with the team.',
    ],
  },
  compactQuote:
    'After identifying a difference, what did the specialist need to understand before deciding the next step?',
  product: {
    title: 'Organising the product around the questions that mattered',
    intro:
      'Instead of one dashboard, we structured the experience as a sequence of questions leading from overview to investigation.',
    questions: [
      {
        key: 'evolution',
        title: 'My evolution',
        text: 'How have my centre’s results changed over time?',
      },
      {
        key: 'groups',
        title: 'Reference groups',
        text: 'Where does my result sit among centres with a similar profile?',
      },
      {
        key: 'network',
        title: 'Network view',
        text: 'What patterns appear across the wider group without identifying participants?',
      },
      {
        key: 'investigation',
        title: 'Investigation',
        text: 'Which period, technique, profile or device concentrates the observed difference?',
      },
    ],
    noteLines: [
      'The journey followed one principle:',
      'find a difference, compare and investigate without losing context.',
    ],
    imgAlt: 'Desktop network view in QI Platform',
    caption:
      'Network view: the user’s centre is highlighted while all others remain anonymous. Demonstration data.',
  },
  ai: {
    title: 'AI at three points in the process',
    intro:
      'We used AI to expand the team’s capacity, with data protection and human validation.',
    items: [
      {
        title: 'Discovery',
        text: 'ChatGPT supported guides, consented transcription and the initial search for patterns after sensitive data was removed.',
      },
      {
        title: 'Exploration',
        text: 'During prototyping, AI introduced paths beyond the workshop; the team discussed, refined and validated the alternatives.',
      },
      {
        title: 'Handoff',
        text: 'AI coded the web prototype with animation and microinteractions within the constraints supplied by IT.',
      },
    ],
    imgAlt: 'QI Platform question library in Figma',
    caption:
      'Question library and availability states in Figma. Demonstration data.',
    prototype: {
      label: 'Explore the functional prototype',
      href: '/en/work/qi-platform/prototype',
      note: 'Interactive prototype with demonstration data. Opens in a new tab.',
    },
  },
  comparison: {
    imgAlt: 'Anonymity-protected comparison state in QI Platform',
    caption:
      'When filters narrow the group too far, comparison stops and offers recovery paths. Demonstration data.',
    title: 'Anonymity as a product rule',
    paragraphs: [
      '3PH Cloud operated under HIPAA compliance requirements. Beyond protecting patient data, QI needed to stop combinations of filters from indirectly identifying a centre or specialist.',
      'When the reference group became too small, the platform kept the hospital’s own results, stopped the comparison and explained how to broaden the cut. Anonymity became a visible experience rule, not just a technical restriction.',
    ],
  },
  role: {
    title: 'Leading without separating strategy from execution',
    imgAlt: 'Detailed comparison between one centre and an anonymous reference group',
    caption:
      'A detailed comparison that preserves scope, context and an anonymous reference. Demonstration data.',
    paragraphs: [
      'I led three UX Designers, connecting research, strategy, experience and technical feasibility. Specialists brought clinical context; Product set priorities; Engineering exposed data and implementation constraints.',
      'Weekly stakeholder meetings, design critiques and mentoring kept evidence, alternatives and decisions aligned. My role was to organise that conversation and preserve product coherence.',
    ],
  },
  evolution: {
    title: 'From overview to investigation',
    imgAlt: 'QI Platform investigation screen segmented by catheter model',
    caption:
      'The comparison remains visible as the specialist investigates a segment in greater depth. Demonstration data.',
    paragraphs: [
      'The product did not say whether a result was good or bad. It helped specialists identify a difference and investigate period, profile, technique or device without starting again in another spreadsheet.',
      'Because comparison does not establish causality, the flows preserved sample size, availability and warnings. The functional prototype allowed filters, protected states and microinteractions to be evaluated before real-data integration.',
    ],
  },
  impact: {
    title: 'Adoption, scale and signals of value',
    stats: [
      {
        value: '23,000+',
        label: 'Comparative analyses in 12 months',
        wide: true,
      },
      {
        value: '270+',
        label: 'Cardiovascular specialists',
      },
      {
        value: '4 countries',
        label: 'Using the platform',
      },
      {
        value: '3+',
        label: 'New centres added per month',
        wide: true,
      },
    ],
    paragraphs: [
      'In 12 months, specialists ran more than 23,000 comparative analyses. This is a measure of adoption and scale, not an isolated clinical outcome.',
      'Comparisons supported discussions and revisions to some practices and techniques. Since contracts were confidential, the commercial signal available was positive feedback from Sales and QI’s inclusion in the premium plan.',
    ],
  },
}
