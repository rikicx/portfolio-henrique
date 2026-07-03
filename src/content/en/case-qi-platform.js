export default {
  seo: {
    title: 'QI Platform — Product Design Case Study | Henrique Silva',
    description:
      'Product Design case study for a healthcare quality improvement platform used by 270+ specialists in four countries, with 23,000+ analyses.',
    path: '/en/work/qi-platform',
    lang: 'en',
    robots: 'noindex, follow',
  },
  hero: {
    titleLines: ['QI', 'Platform'],
    kicker: 'Clinical benchmarking · Product strategy',
    description:
      'A platform created to help cardiovascular specialists understand their own performance, compare results against relevant references and decide where it was worth investigating further.',
  },
  metadata: {
    ariaLabel: 'Project information',
    imageAlt: 'QI Platform screen on a tablet',
    items: [
      { label: 'Company', value: '3PH Alliance' },
      { label: 'Year', value: '2024' },
      { label: 'Role', value: 'Head of Design' },
      {
        label: 'Measured Impact',
        value: '23,000+ comparative analyses in 12 months',
      },
      {
        label: 'Scale',
        value: ['270+ specialists', '4 countries', '3+ new centers per month'],
      },
      {
        label: 'Contribution',
        value:
          'Product strategy · Discovery · Design leadership · Research · Validation',
      },
    ],
  },
  problem: {
    title: 'The problem',
    paragraphs: [
      'The data already existed. And there was a lot of it.',
      'The problem was turning that volume of information into comparisons the specialists could understand and use. Adding more charts to the screen would not help. A clinical comparison depends on context: time period, patient profile, type of procedure, center and reference group.',
      'And there was another layer: the comparison had to be useful without letting a center find out exactly who it was being compared against.',
    ],
  },
  centralQuestion: {
    label: 'The question that guided the work:',
    text: 'How could we turn complex clinical data into clear, trustworthy comparisons, without hiding important differences or exposing information that had to remain anonymous?',
  },
  discovery: {
    title: 'Before designing anything',
    imgAlt: 'Collaborative Miro board used in the QI Platform co-creation sessions',
    paragraphs: [
      'All the work happened remotely, connecting specialists, researchers, designers, Product and Technology across different locations.',
      'In the interviews and working sessions, we did not just want to find out which indicators should appear. We needed to understand how the specialists read the results, which comparisons made sense and what they looked for when something fell outside the pattern.',
      'That is where a more concrete question emerged, one capable of organizing the product:',
    ],
  },
  compactQuote:
    'After identifying a difference, what did the specialist need to understand in order to decide the next step?',
  product: {
    title: 'Turning questions into product',
    intro:
      'The platform needed to support different types of analysis without putting everything inside one giant dashboard.',
    questions: [
      {
        key: 'evolution',
        title: 'My evolution',
        text: 'How have my results changed over time?',
      },
      {
        key: 'groups',
        title: 'Reference groups',
        text: 'How does my performance compare with similar specialists or centers?',
      },
      {
        key: 'network',
        title: 'Network view',
        text: 'Where are there patterns or differences in a larger set?',
      },
      {
        key: 'investigation',
        title: 'Investigation',
        text: 'Which data cuts help explain why a given result happened?',
      },
    ],
    noteLines: [
      'It looks simple when it is organized like this.',
      'Before that, it was needs, data and rules scattered across many conversations.',
    ],
  },
  comparison: {
    imgAlt: 'Group comparison screen in the QI Platform',
    caption: 'Quartile-based comparison with anonymity protection.',
    title: 'Compare without exposing',
    body: 'The more filters were applied, the smaller the group became. When the cut got too specific, the platform stopped the analysis and asked for some filters to be removed to protect anonymity. The rule was simple: allow investigation without opening room for identification.',
  },
  role: {
    title: 'My role as Head of Design',
    imgAlt:
      'Representation of the Head of Design role connecting research, product, experience and engineering',
    paragraphs: [
      'My role was to keep research, product, experience and feasibility connected. I guided the team and helped organize the decisions between specialists, Product and Engineering.',
      'The specialists brought the clinical context. Product translated the needs into strategy. Engineering showed what the data allowed — and where the limits were.',
      'My work happened in the middle of these conversations: asking questions, reducing noise and preventing an apparently simple solution from creating a new problem.',
    ],
  },
  evolution: {
    title: 'A platform in evolution',
    imgAlt: 'QI Platform charts showing the evolution of results over time',
    caption:
      'Evolution of results over time, with comparison across reference groups.',
    paragraphs: [
      'The platform did not stop at the first version.',
      'New centers, indicators and needs kept arriving. The challenge was to incorporate all of this without scattering the experience into disconnected analyses.',
      'The experience had to stay coherent: start from a broader view, find a relevant difference and deepen the analysis without losing context.',
    ],
  },
  impact: {
    title: 'Impact & Scale',
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
        value: '4 Countries',
        label: 'Using the platform',
      },
      {
        value: '3+ new centers per month',
        label: 'Added to the operation',
        wide: true,
      },
    ],
    paragraphs: [
      'The platform was not validated just because it was delivered. In 12 months, the specialists ran more than 23 thousand comparative analyses. In a product like this, recurring use was the clearest sign that the comparisons were helping answer real questions.',
      'The scale confirmed that the comparisons were not just technically possible: they became part of the recurring use of the platform.',
    ],
  },
}
