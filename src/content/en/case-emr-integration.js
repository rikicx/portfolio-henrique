export default {
  seo: {
    title: 'EMR Integration — Product Design Case Study | Henrique Silva',
    description:
      'Case study on integrating electronic medical records with clinical data capture, cutting the SLA from 22 to 3 hours and queries from 37% to 18%.',
    path: '/en/work/emr-integration',
    lang: 'en',
    robots: 'noindex, follow',
  },
  hero: {
    titleLines: ['EMR', 'Integration'],
    kicker: 'EMR–EDC integration · Product strategy',
    description:
      'An experience created to reconcile data between EMR and EDC, bringing together discrepancies, history and evidence so Data Managers could make decisions with more speed and traceability.',
  },
  metadata: {
    ariaLabel: 'Project information',
    imageAlt: 'EMR Integration platform interface with a data reconciliation panel',
    topFields: [
      { label: 'Company', value: '3PH Alliance' },
      { label: 'Year', value: '2024' },
      { label: 'Role', value: 'Head of Design' },
    ],
    blocks: [
      {
        label: 'Measured Impact',
        value: '22h → 3h in the average time to resolve discrepancies',
      },
      {
        label: 'Scale',
        value: '3,400 forms processed in 12 months',
      },
      {
        label: 'Contribution',
        value:
          'Product strategy · Discovery · Design leadership · Experience definition',
      },
    ],
  },
  problem: {
    label: 'The problem',
    paragraphs: [
      'The data collected in the EMR had to be synchronized with the EDC, but the two systems frequently showed different information for the same patient or procedure.',
      'Without a structured reconciliation flow, Data Managers had to compare the sources manually, look for information in other forms and open between two and four queries per field.',
      'Part of these decisions still happened through messages and conversations outside the platform. The process was slow, hard to trace and highly dependent on operational effort.',
    ],
  },
  centralQuestion: {
    ariaLabel: 'Central question of the project',
    label: 'The question that guided the work:',
    text: 'How could we turn discrepancies between EMR and EDC into faster, traceable decisions supported by evidence?',
  },
  decide: {
    title: 'Deciding without starting from scratch',
    paragraphs: [
      'Showing that two values were different did not solve the problem.',
      'Users needed to understand which one seemed more reliable before approving any change. So the platform gathered the information needed to support the decision:',
    ],
    evidenceList: [
      'Change history;',
      'Values recorded in related forms;',
      'Source and date of each piece of information;',
      'Related previous records;',
      'Consistency of the new value against the available history.',
    ],
    roleNote:
      'As Head of Design, I translated the understanding of the operation into product and experience decisions, guiding the structure of the flow, the information needed for the decision and the validation of the solution with the areas involved.',
  },
  experience: {
    imgAlt: 'Platform interface showing data reconciliation between EMR and EDC',
    caption:
      'Structure of the experience created to support data reconciliation between EMR and EDC.',
    title: 'How the experience was organized',
    steps: [
      {
        key: 'identificar',
        title: '1. Identify the discrepancy',
        description: 'The values coming from the EMR and the EDC were presented side by side.',
      },
      {
        key: 'reunir',
        title: '2. Gather the evidence',
        description:
          'The platform retrieved the history and related records to explain why that value might be incorrect.',
      },
      {
        key: 'apoiar',
        title: '3. Support the decision',
        description:
          'With the context already available, the user could approve the update, reject the suggestion or keep the query open for investigation.',
      },
      {
        key: 'registrar',
        title: '4. Record the action',
        description:
          'The decision stayed inside the platform, increasing traceability and reducing side conversations.',
      },
    ],
  },
  changed: {
    title: 'What changed',
    paragraphs: [
      'Before, a large part of the time was spent trying to find out what had happened and which source should be considered more reliable. With the solution, users reached the moment of decision with the conflict identified and the main evidence already organized.',
      'The manual work did not disappear completely. It became directed at the cases that truly required human judgment.',
    ],
    footerParagraphs: [
      'The reduction in queries did not come from hiding the conflicts.',
      'It came from presenting enough context so that more decisions could be made inside the platform itself.',
    ],
    impactTitle: 'Impact & Scale',
    stats: [
      {
        value: '22h → 3h',
        label: 'Average time to resolve discrepancies',
        wide: true,
      },
      {
        value: '3,400 forms',
        label: 'Processed in 12 months',
        wide: true,
      },
      {
        value: '37% → 18%',
        label: 'Query opening rate',
        wide: false,
      },
    ],
    imgAlt:
      'Professional using the EMR Integration platform in a clinical data reconciliation context',
    caption:
      'The solution in operational use, reducing manual steps and centralizing data checks.',
  },
}
