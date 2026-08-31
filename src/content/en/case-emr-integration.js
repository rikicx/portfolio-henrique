export default {
  seo: {
    title: 'EMR Integration — Product Design Case Study | Henrique Silva',
    description:
      'How we prioritized and designed an EMR–EDC integration that reduced the average time to conclude a query from 22 to 3 hours.',
    path: '/en/work/emr-integration',
    lang: 'en',
    robots: 'index, follow',
  },
  hero: {
    titleLines: ['EMR', 'Integration'],
    kicker: 'EMR–EDC integration · Product strategy · Applied AI',
    description:
      'How we prioritized a quick win at the core of 3PH Cloud and turned manual synchronization into an experience supported by history, statistics, and human judgment.',
  },
  metadata: {
    ariaLabel: 'Project information',
    imageAlt:
      'EMR Integration field evidence screen comparing an incoming value with historical distributions',
    imageCaption:
      'Evidence sits beside the decision: source history, distribution, and paths to approve, keep, or open a query. Demonstration data.',
    items: [
      { label: 'Company', value: '3PH Alliance' },
      { label: 'Year', value: '2024' },
      { label: 'Role', value: 'Head of Design' },
      { label: 'Product', value: 'Core feature of the 3PH Cloud EDC' },
      { label: 'Team led', value: '3 UX Designers' },
      {
        label: 'Contribution',
        value:
          'Product strategy · Discovery · Prioritization · Design leadership · Applied AI · Validation',
      },
    ],
  },
  problem: {
    title: 'The problem',
    lead: 'Two systems. One clinical database that had to remain trustworthy.',
    paragraphs: [
      'The EDC collected clinical-trial data. Hospitals also maintained information in their EMR and had to keep both systems synchronized manually.',
      'Typing errors, updates made at different times, and other inconsistencies caused the same patient or procedure to appear with conflicting values. Collecting data was not enough: the operation had to trust the database.',
      'Data Managers compared forms, searched for evidence, and opened queries before reaching a conclusion. The cost appeared as hours of work, rework, and decisions scattered outside the platform.',
    ],
  },
  centralQuestion: {
    label: 'The question that guided the work:',
    text: 'How could we reduce the cost of reconciliation without automating a decision that needed to remain in professional hands?',
  },
  strategy: {
    title: 'Why EMR came before other projects',
    paragraphs: [
      'The company was evaluating other product initiatives, but they required broader discovery and much longer development cycles.',
      'EMR–EDC integration addressed a known friction point, sat closer to the product core, and offered a faster return in operational time and data quality.',
    ],
    decisionLabel: 'Portfolio decision',
    decision:
      'Prioritize a quick win with measurable impact while keeping the remaining opportunities on the product horizon.',
  },
  discovery: {
    title: 'Lean discovery to reach a V1',
    intro:
      'Speed did not remove discovery. It changed its scale and focused the team on the first workflow that needed to be solved.',
    imageAlt:
      'Main EMR Integration V1 screen showing the participant form and reconciliation queue',
    imageCaption:
      'The V1 brought reconciliation into the participant form. Demonstration data.',
    items: [
      {
        title: 'Understand the real workflow',
        text: 'We mapped manual synchronization and interviewed professionals involved in the operation.',
      },
      {
        title: 'Define the first version',
        text: 'Design workshops and lean co-creation turned that understanding into a prioritized V1.',
      },
      {
        title: 'Validate strategy and use',
        text: 'We iterated on both the problem we were solving and usability through tests with Data Managers.',
      },
    ],
    roleTitle: 'My leadership',
    roleParagraphs: [
      'I led experience decisions and prioritization with three UX Designers, stakeholders, and users.',
      'Weekly stakeholder meetings, design critiques, and mentoring kept the team aligned. Technology established time and feasibility boundaries that protected the V1 scope.',
    ],
  },
  ai: {
    title: 'AI increased the pace. Prioritization preserved the focus.',
    paragraphs: [
      'AI adoption allowed Design and Product to explore and iterate on possibilities faster than the organization could implement them.',
      'The risk shifted from having too few ideas to creating an oversized backlog. Every possibility had to pass through the V1 strategy, operational value, and the constraints brought by Technology.',
    ],
    note:
      'The advantage was not producing more screens. It was deciding clearly which ones deserved to become product.',
  },
  model: {
    title: 'Reliability without removing human judgment',
    paragraphs: [
      'The feature used history and a mathematical and statistical model to indicate which value appeared more reliable. The distribution showed where the incoming data sat against previous records.',
      'An expected weight of 82 kg entered as 892 kg could be flagged as an obvious error. In less clear situations, the platform organized the evidence while keeping the decision with the user.',
    ],
    principles: [
      {
        title: 'Source history',
        text: 'Correction frequency and consistency across previous records.',
      },
      {
        title: 'Statistical context',
        text: 'Distribution, median, and plausible range made the discrepancy visible.',
      },
      {
        title: 'Human agency',
        text: 'Approve the value, keep the study data, or open a query.',
      },
    ],
    overviewAlt:
      'Participant form showing EMR-populated fields, discrepancies, and evidence for a decision',
    overviewCaption:
      'The reconciliation queue took users from the form to the field that needed a decision. Demonstration data.',
  },
  journey: {
    title: 'From discrepancy to a recorded decision',
    intro:
      'The flow brought context to the decision point without forcing users to reconstruct the case across other screens.',
    steps: [
      {
        number: '01',
        title: 'Synchronize',
        text: 'Data already present in the EMR appeared inside EDC forms.',
      },
      {
        number: '02',
        title: 'Compare',
        text: 'Discrepancies, history, and distribution came together in one context.',
      },
      {
        number: '03',
        title: 'Decide',
        text: 'Users could approve, keep the study value, or start a query.',
      },
      {
        number: '04',
        title: 'Record',
        text: 'Author, time, previous value, and new value remained in the audit log.',
      },
    ],
  },
  queries: {
    title: 'The query became part of the flow, not a side conversation',
    paragraphs: [
      'When the evidence was not sufficient, technicians, Data Managers, and researchers could open a query and talk with the clinical site without losing the field context.',
      'The answer returned to the same workflow, where it could be accepted, closed without changing the value, or escalated. The evidence behind the decision remained visible.',
    ],
    listAlt: 'List of open queries and their states in EMR Integration',
    listCaption:
      'A list organized by state, subject, form, and query age. Demonstration data.',
    threadAlt: 'Query thread showing values, the site response, and closure actions',
    threadCaption:
      'The conversation preserves values, the response, attached evidence, and next actions. Demonstration data.',
  },
  governance: {
    title: 'Permission, privacy, and traceability',
    paragraphs: [
      'Each hospital accessed its own patient list. Technicians, Data Managers, and researchers received permissions aligned with their role; privacy and HIPAA rules also applied to access and exports.',
      'A decision never erased history. The audit log preserved who acted, when, the previous value, and the new value.',
    ],
    auditAlt: 'Audit log recording synchronizations, approvals, rejections, and queries',
    auditCaption:
      'The history is immutable and tied to the person making the decision. Demonstration data.',
    modalAlt: 'Modal for opening a query and sending context to the clinical site',
    modalCaption:
      'The query starts with a reason, message, and field evidence attached. Demonstration data.',
  },
  demo: {
    href: '/en/work/emr-integration/prototype',
    label: 'Explore the functional demo',
    note: 'Interactive prototype with demonstration data. Opens in a new tab.',
  },
  impact: {
    title: 'Less time reconciling. More time for the study.',
    stats: [
      {
        value: '22h → 3h',
        label: 'Average time to reach a query conclusion',
      },
      {
        value: '3,400',
        label: 'Forms processed by the integration in 12 months',
      },
      {
        value: '37% → 18%',
        label: 'Query opening rate',
      },
    ],
    paragraphs: [
      'The integration reduced the work required to keep EMR and EDC data consistent. Data Managers spent less time reconstructing evidence and more time on other parts of the study.',
      'For the business, the quick win demonstrated value through a leaner scope and measurable impact on time, operating cost, and data quality.',
    ],
  },
}
