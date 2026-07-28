export default {
  seo: {
    title: '3PH & HRCRS — Product Design Case Study | Henrique Silva',
    description:
      'A hands-on leadership case study spanning content strategy, Design Systems, AI-assisted Design workflows and the delivery of a digital ecosystem for clinical research and cardiovascular health.',
    path: '/en/work/3ph-hrcrs-digital-ecosystem',
    lang: 'en',
    robots: 'noindex, follow',
  },
  hero: {
    titleLines: ['3PH Alliance &', 'HRCRS', 'Digital Ecosystem'],
    description:
      'Two websites built on one visual and editorial foundation, designed to evolve — with supervised AI from benchmark to executable prototype.',
  },
  metadata: {
    ariaLabel: 'Project information',
    imageAlt:
      'Laptop screen showing the 3PH Alliance website with the visual design created for the project',
    fields: [
      { label: 'Company', value: '3PH Alliance + HRCRS' },
      { label: 'Year', value: '2025–2026' },
      { label: 'Role', value: 'Head of Design — hands-on leadership' },
    ],
    strategic: {
      label: 'My contribution',
      value:
        'Design Leadership · Content Strategy · Information Architecture · AI-assisted Workflows · Governance · Launch',
    },
  },
  problem: {
    label: 'The problem',
    title: 'The website was born outdated',
    blocks: [
      {
        paragraphs: [
          'The 3PH Alliance and HRCRS websites had been built in plain HTML. Any content change depended on development. That would already be a problem in any company. For us it was even worse, because the business model changed practically every month.',
          'Every week there was a new service, a different priority or another way of explaining what the company did. By the time the content was published, it often already needed another update.',
        ],
      },
      {
        heading: 'The relationship between the two companies was also unclear',
        paragraphs: [
          'HRCRS is part of the 3PH Alliance, but many people understood it the other way around. Others did not even realize there was a relationship between them.',
        ],
      },
      {
        heading: 'The work also began under schedule pressure',
        paragraphs: [
          'Beyond redesigning the experience, we would need to organize a discourse that was still evolving and create a sustainable way to publish its next versions.',
        ],
      },
    ],
  },
  centralQuestion: {
    ariaLabel: 'Central question of the project',
    label: 'The question that guided the work:',
    text: 'How could we create two websites that kept up with a constantly changing business, made the relationship between the companies clear and did not depend on development for every update?',
  },
  benchmark: {
    imgAlt:
      'Benchmark of websites from companies in the sector to identify patterns in content, structure and differentiators',
    caption:
      'Structural benchmark using defined criteria to identify recurring patterns across pages in the sector.',
    kicker: 'First, we needed to organize the discourse',
    title: 'Comparing the sector with verifiable criteria',
    introParagraphs: [
      'We already knew the main competitors. The challenge was not deciding who to observe, but comparing the websites consistently. Before collecting anything, we defined the analysis criteria: navigation structure, menu organization, reading time, recurring patterns and the way services and differentiators were presented.',
      'We turned those criteria into a prompt used with Claude. The model navigated public competitor information and organized a first analysis in Markdown, recording website structure and the source of each finding. Page captures complemented the reference material.',
    ],
    reviewBlocks: [
      {
        heading: 'We did not treat the document as a finished conclusion',
        paragraphs: [
          'We returned to the websites to verify findings, complete partial extractions and correct interpretations that went beyond what the source supported.',
          'When an interpretation was plausible but could not be proved, it stayed explicitly marked as “apparent.” When there was not enough support, we removed it.',
        ],
      },
      {
        heading: 'Without turning AI inferences into facts',
        paragraphs: [
          'This shifted the manual work away from collecting every competitor in full and toward verification, correction and gap filling.',
          'The benchmark gave us a common basis for discussing content and navigation.',
        ],
      },
    ],
    evidence: {
      label: 'Image pending: benchmark with sources and review',
      caption:
        'Excerpt from the Markdown analysis with registered sources and the distinction between observations, apparent interpretations and removed conclusions.',
    },
  },
  contentStructure: {
    title: 'Turning a sales presentation into an experience that could stand on its own',
    blocks: [
      {
        heading: 'The website had already reached the project under schedule pressure',
        paragraphs: [
          'Content production was not part of Design’s original scope, but the area needed to absorb it for the delivery to move forward.',
        ],
      },
      {
        heading: 'Sales decks, brand guidelines and examples of the company’s language',
        paragraphs: [
          'These were institutional and commercial materials; no patient data or other sensitive information entered this workflow.',
          'Before requesting copy proposals, we asked the AI to explain the business model in its own words. The team compared that interpretation with the materials and its business knowledge, correcting inconsistencies before moving on.',
        ],
      },
      {
        heading: 'Narrative purpose, target emotion and core message',
        paragraphs: [
          'For each page, we explored two or three content alternatives. Every block had to respond coherently to those three criteria. When a proposal did not sustain the intended storytelling, we adjusted the context and instructions and started another creation or adaptation round.',
          'AI produced first alternatives; Design refined them and selected a direction. Once that path had been chosen, Marketing and Sales leadership reviewed and validated the content.',
        ],
      },
      {
        emphasis: true,
        paragraphs: [
          'That distinction mattered: a slide deck has someone presenting it. The website needed to communicate the same value proposition to a broader audience without relying on the context of a meeting.',
        ],
      },
    ],
    lightboxOpenAriaLabel: 'Enlarge content architecture',
    imgAlt:
      'Content architecture document with narrative purpose, target emotion and core message defined for each section of the websites',
    tapHint: 'Tap to enlarge',
    caption:
      'Content structure defining narrative purpose, target emotion and core message for each section.',
  },
  designSystem: {
    title: 'One visual foundation for both websites',
    baseParagraphs: [
      'The websites needed to feel like part of the same organization without looking like copies of each other. My team created a Design System from scratch, sharing colors, typography, spacing, components and interaction patterns.',
      'The visual foundation was the same. What changed was the discourse, the tone and the way each company presented its services. My role was to guide those decisions and keep the two experiences coherent.',
    ],
    aiBlocks: [
      {
        heading: 'Layout hypotheses',
        paragraphs: [
          'Once that foundation and its components were available in Figma, I centralized the operation of Claude Code connected to the file through Figma MCP. Using the content and direction we had already defined, the model suggested possible page compositions.',
          'AI did not create the Design System or determine the final solution: we treated its proposals as layout hypotheses.',
        ],
      },
      {
        heading: 'Exploration, refinement and QA',
        paragraphs: [
          'The designers led the exploration, refinement and delivery of the layouts, as well as QA, with frequent alignment throughout the process. I reviewed the material before higher-risk discussions.',
        ],
      },
      {
        heading: 'The criterion was not visual preference',
        paragraphs: [
          'We discussed the refined proposals with C-level leaders, stakeholders and Marketing.',
          'We assessed whether each direction preserved the narrative used in sales presentations while remaining self-explanatory for someone arriving at the website without prior context.',
        ],
      },
    ],
    imgAlt:
      'Design System shared between the 3PH Alliance and HRCRS websites, with colors, typography, components and interaction patterns',
    caption:
      'Design System shared between the two websites, bringing together visual foundations, components and interaction patterns.',
    evidence: {
      label: 'Image pending: suggestion, refinement and approved layout',
      caption:
        'From a model-suggested composition to the layout refined and selected by the Design team.',
    },
  },
  cms: {
    title: 'The website needed to stay alive',
    paragraphs: [
      'There was no point in launching two new websites and still depending on development for every change. The solution included an independent CMS for each website. The Scientific Affairs team, for example, started publishing abstracts, articles and educational videos autonomously, without calling on development for every update.',
      'My team still followed the more sensitive pages to preserve visual consistency. Previously, an update had a two-to-three-day SLA. After my team took over website operations, changes could be published within minutes.',
    ],
    imgAlt:
      'Composition showing the 3PH Alliance website and the CMS panel used to manage and publish content',
    caption:
      'Independent CMS to organize and publish content without depending on development for every update.',
  },
  governance: {
    imgAlt:
      'Presentations and materials used in the weekly status meetings to align decisions with stakeholders throughout the project',
    caption:
      'Weekly ceremonies connecting stakeholders, Technology, Design and Scientific Affairs around decisions and next steps.',
    title: 'Keeping the project moving was also part of the job',
    blocks: [
      {
        paragraphs: [
          'Demands arrived with urgency, but decisions involved different areas and leadership levels.',
        ],
      },
      {
        heading: 'Higher-risk points',
        paragraphs: [
          'As a hands-on Head, I delegated exploration, layout delivery and much of the QA to the designers, with frequent alignment. I personally took on the higher-risk points: reviewing the analysis, leading the content architecture, operating the Claude Code–Figma workflow, reviewing what would be presented and leading conversations with C-level leaders and stakeholders.',
        ],
      },
      {
        heading: 'Prepared decisions',
        paragraphs: [
          'To keep the project from stalling, I organized weekly status meetings with the context summarized, the available options and a clear recommendation.',
          'Instead of bringing open problems to the meetings, I brought prepared decisions.',
        ],
      },
      {
        heading: 'Interface between Design and the contractor',
        paragraphs: [
          'After decisions were made, I also acted as the interface between Design and the contractor, following what would be delivered and making sure the solution worked in the real environment.',
        ],
      },
    ],
  },
  implementation: {
    title: 'From Figma to an executable prototype',
    introBlocks: [
      {
        paragraphs: [
          'Figma remained the visual reference for the project, but the handoff was not limited to static screens. With Claude Code connected to Figma through MCP, we turned the approved layouts into an executable prototype that complemented the Design file.',
        ],
      },
      {
        heading: 'It was not production code',
        paragraphs: [
          'The prototype had no front-end, back-end or CMS integration and was not treated as production code.',
          'Before handoff, the team visually compared the result with Figma and tested it at different resolutions and on different devices. We corrected inconsistencies before the material reached the contractor.',
        ],
      },
    ],
    continuationBlocks: [
      {
        heading: 'Complementary references',
        paragraphs: [
          'The contractor received Figma and the prototype as complementary references. They could reuse parts of its structure instead of starting from static screens alone, while taking responsibility for routes, back-end functionality and CMS integration. This made the transition to implementation more direct.',
          'My team stayed close throughout implementation, following responsiveness, search, forms, CMS and visual adjustments. I coordinated communication between the contractor, Technology, Design and stakeholders, as well as QA and validation rounds before each release.',
        ],
      },
      {
        heading: 'The same rule applied at every stage',
        emphasis: true,
        paragraphs: [
          'An AI output advanced only after the appropriate checkpoint — source verification in the benchmark, editorial review and business validation for content, Design refinement for layouts or visual testing for the prototype.',
          'AI accelerated exploration and translation between artifacts; responsibility for decisions remained with people.',
        ],
      },
    ],
    evidence: {
      label: 'Image pending: executable prototype at different resolutions',
      caption:
        'Comparison between Figma and the executable prototype validated at different resolutions before handoff.',
    },
  },
  postLaunch: {
    title: 'After the launch, the editorial operation began.',
    paragraphs: [
      'The first versions of the two websites went live in July 2025.',
      'After that came rounds of content updates, visual adjustments and new business needs. The websites kept evolving until they reached their current versions. The launch did not end the project. It created a foundation that could be corrected, expanded and updated without starting over every time.',
    ],
    imgAlt:
      'Composition of the current versions of the 3PH Alliance and HRCRS websites after the rounds of editorial evolution',
    caption:
      'Current homepages of 3PH Alliance and HRCRS, evolved from the same visual foundation.',
  },
  impact: {
    title: 'Impact beyond the websites',
    paragraphs: [
      'The delivery did not end with two redesigned websites. The areas with editorial autonomy started publishing content with little or no dependence on development, while the forms began receiving business inquiries practically every day.',
      'The impact also showed up outside the websites. Presentations and other company materials started following the same language, reinforcing a shared visual standard for 3PH Alliance and HRCRS.',
    ],
    metrics: [
      {
        key: 'time',
        main: '2–3 days → minutes',
        sub: 'Update SLA after Design took over operations',
      },
      {
        key: 'rating',
        main: '4.67 out of 5',
        sub: 'Visual rating in an anonymous internal survey',
      },
      {
        key: 'cms',
        main: '2 independent CMSs',
        sub: 'Editorial autonomy for 3PH Alliance and HRCRS',
      },
      {
        key: 'pages',
        main: 'All pages restructured',
        sub: 'Across the 3PH Alliance and HRCRS websites',
      },
    ],
  },
  lightbox: {
    dialogAriaLabel: 'Enlarged content architecture',
    closeAriaLabel: 'Close enlarged image',
    closeLabel: 'Close image',
    imgAlt:
      'Content architecture document with narrative purpose, target emotion and core message',
  },
}
