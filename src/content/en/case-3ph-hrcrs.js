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
      'Two websites connected by a shared visual and editorial foundation, built to evolve — with supervised AI from competitive benchmarking to an executable prototype.',
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
    title: 'The websites were already outdated before launch',
    paragraphs: [
      'The 3PH Alliance and HRCRS websites did not meet our expectations.',
      {
        parts: [
          { text: 'They had been built in plain HTML, and ' },
          { text: 'any content change depended on development', strong: true },
          { text: '. That would already be a problem in any company. For us it was even worse, because our business model changed practically every month.' },
        ],
      },
      {
        parts: [
          { text: 'Every week there was a new service, a different priority or another way of explaining what the company did. By the time the content was published, ' },
          { text: 'it often needed to be changed again', strong: true },
          { text: '.' },
        ],
      },
      {
        parts: [
          { text: 'The relationship between the two companies did not help either. HRCRS is part of the 3PH Alliance, but ' },
          { text: 'many people understood it the other way around', strong: true },
          { text: '. Others did not even realize there was a relationship between them.' },
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
      {
        parts: [
          { text: 'We already knew the main competitors. The challenge was not deciding who to observe, but comparing the websites consistently. Before collecting anything, ' },
          { text: 'we defined the analysis criteria', strong: true },
          { text: ': navigation structure, menu organization, reading time, recurring patterns and the way services and differentiators were presented.' },
        ],
      },
      {
        parts: [
          { text: 'We turned those criteria into a prompt used with Claude. The model reviewed publicly available information on competitor websites and organized an initial analysis in Markdown, documenting each website’s structure and ' },
          { text: 'the source behind every finding', strong: true },
          { text: '. Page captures completed the reference material.' },
        ],
      },
    ],
    reviewBlocks: [
      {
        heading: 'We did not treat the document as a finished conclusion',
        paragraphs: [
          'We returned to the websites to verify findings, complete partial extractions and correct interpretations that went beyond what the source supported.',
          {
            parts: [
              { text: 'When an interpretation was plausible but could not be proved, it stayed ' },
              { text: 'explicitly marked as “apparent”', strong: true },
              { text: '. When there was not enough support, ' },
              { text: 'we removed it', strong: true },
              { text: '.' },
            ],
          },
        ],
      },
      {
        heading: 'Without turning AI inferences into facts',
        paragraphs: [
          {
            parts: [
              { text: 'This shifted the manual work away from collecting every competitor in full and toward ' },
              { text: 'verification, correction and gap filling', strong: true },
              { text: '.' },
            ],
          },
          {
            parts: [
              { text: 'The benchmark gave us a ' },
              { text: 'common basis for discussing content and navigation', strong: true },
              { text: '.' },
            ],
          },
        ],
      },
    ],
    evidence: {
      label: 'Image pending: benchmark with sources and review',
      caption:
        'Excerpt from the Markdown analysis with registered sources and the distinction between observations, apparent interpretations and removed conclusions.',
      exampleAlt:
        'Synthetic reference showing benchmark criteria, registered sources and human-review states.',
    },
  },
  contentStructure: {
    title: 'Turning a sales presentation into an experience that could stand on its own',
    blocks: [
      {
        heading: 'The website had already reached the project under schedule pressure',
        paragraphs: [
          {
            parts: [
              { text: 'Content production ' },
              { text: 'was not originally part of Design’s scope', strong: true },
              { text: ', but Design took it on so the delivery could move forward.' },
            ],
          },
        ],
      },
      {
        heading: 'Sales decks, brand guidelines and examples of the company’s language',
        paragraphs: [
          {
            parts: [
              { text: 'These were institutional and commercial materials; ' },
              { text: 'no patient data or other sensitive information entered this workflow', strong: true },
              { text: '.' },
            ],
          },
          {
            parts: [
              { text: 'Before requesting copy proposals, we asked ' },
              { text: 'the AI to explain the business model in its own words', strong: true },
              { text: '. The team compared that interpretation with the materials and its business knowledge, correcting inconsistencies before moving on.' },
            ],
          },
        ],
      },
      {
        heading: 'Narrative purpose, target emotion and core message',
        paragraphs: [
          'For each page, we explored two or three content alternatives. Every block had to respond coherently to those three criteria. When a proposal did not sustain the intended storytelling, we adjusted the context and instructions and started another creation or adaptation round.',
          {
            parts: [
              { text: 'AI generated the first alternatives; ' },
              { text: 'Design refined them and selected a direction', strong: true },
              { text: '. ' },
              { text: 'Marketing and Sales leadership then reviewed and validated the chosen content', strong: true },
              { text: '.' },
            ],
          },
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
      {
        parts: [
          { text: 'The websites needed to feel like part of the same organization without looking like copies of each other. ' },
          { text: 'My team created a Design System from scratch', strong: true },
          { text: ', sharing colors, typography, spacing, components and interaction patterns.' },
        ],
      },
      {
        parts: [
          { text: 'The visual foundation was the same. What changed was the discourse, the tone and the way each company presented its services. My role was to guide those decisions and ' },
          { text: 'keep the two experiences coherent', strong: true },
          { text: '.' },
        ],
      },
    ],
    aiBlocks: [
      {
        heading: 'Layout hypotheses',
        paragraphs: [
          {
            parts: [
              { text: 'Once that foundation and its components were available in Figma, ' },
              { text: 'I centralized the Claude Code workflow connected to the file through Figma MCP', strong: true },
              { text: '. Based on the content and direction we had already defined, the model suggested possible page compositions.' },
            ],
          },
          {
            parts: [
              { text: 'AI did not create the Design System or determine the final solution', strong: true },
              { text: ': we treated its proposals as layout hypotheses.' },
            ],
          },
        ],
      },
      {
        heading: 'Exploration, refinement and QA',
        paragraphs: [
          {
            parts: [
              { text: 'The designers led the exploration, refinement and delivery of the layouts, as well as QA, with frequent alignment throughout the process. ' },
              { text: 'I reviewed the material before higher-risk discussions', strong: true },
              { text: '.' },
            ],
          },
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
      exampleAlt:
        'Synthetic reference comparing an initial suggestion, Design refinement and the approved layout.',
    },
  },
  cms: {
    title: 'The website needed to stay alive',
    paragraphs: [
      'There was no point in launching two new websites and still depending on development for every change. The solution included an independent CMS for each website. The Scientific Affairs team, for example, started publishing abstracts, articles and educational videos autonomously, without calling on development for every update.',
      {
        parts: [
          { text: 'My team continued to oversee the more sensitive pages to preserve visual consistency. Previously, an update had a ' },
          { text: 'two-to-three-day SLA', strong: true },
          { text: '. After my team took over website operations, changes could be ' },
          { text: 'published within minutes', strong: true },
          { text: '.' },
        ],
      },
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
          {
            parts: [
              { text: 'As a hands-on Head of Design, I delegated exploration, layout delivery and much of the QA to the designers, maintaining frequent alignment. ' },
              { text: 'I personally took ownership of the higher-risk work', strong: true },
              { text: ': reviewing analyses, shaping the content architecture, operating the Claude Code–Figma MCP workflow, reviewing what would be presented and leading conversations with C-level leaders and stakeholders.' },
            ],
          },
        ],
      },
      {
        heading: 'Prepared decisions',
        paragraphs: [
          'To keep the project from stalling, I organized weekly status meetings with the context summarized, the available options and a clear recommendation.',
          {
            parts: [
              { text: 'Instead of bringing open problems to the meetings, ' },
              { text: 'I brought prepared decisions', strong: true },
              { text: '.' },
            ],
          },
        ],
      },
      {
        heading: 'Interface between Design and the contractor',
        paragraphs: [
          {
            parts: [
              { text: 'After decisions were made, I also acted as the interface between Design and the contractor, following what would be delivered and ' },
              { text: 'making sure the solution worked in the real environment', strong: true },
              { text: '.' },
            ],
          },
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
          {
            parts: [
              { text: 'There was no technical integration between the prototype’s front end, a back end and the CMS. ' },
              { text: 'We did not treat it as production code', strong: true },
              { text: '.' },
            ],
          },
          'Before handoff, the team visually compared the result with Figma and tested it at different resolutions and on different devices. We corrected inconsistencies before the material reached the contractor.',
        ],
      },
    ],
    continuationBlocks: [
      {
        heading: 'Complementary references',
        paragraphs: [
          {
            parts: [
              { text: 'The contractor received the Figma file and the executable prototype as complementary references. They could ' },
              { text: 'reuse parts of the prototype’s structure instead of working from static screens alone', strong: true },
              { text: ', while taking ownership of routes, back-end functionality and CMS integration. This made the transition into implementation more direct.' },
            ],
          },
          {
            parts: [
              { text: 'My team stayed close throughout implementation, following responsiveness, search, forms, CMS and visual adjustments. ' },
              { text: 'I coordinated communication between the contractor, Technology, Design and stakeholders', strong: true },
              { text: ', as well as ' },
              { text: 'QA and validation rounds before each release', strong: true },
              { text: '.' },
            ],
          },
        ],
      },
      {
        heading: 'The same rule applied at every stage',
        emphasis: true,
        paragraphs: [
          {
            parts: [
              { text: 'An AI output ' },
              { text: 'advanced only after the appropriate checkpoint', strong: true },
              { text: ' — source verification in the benchmark, editorial review and business validation for content, Design refinement for layouts or visual testing for the prototype.' },
            ],
          },
          {
            parts: [
              { text: 'AI accelerated exploration and translation between artifacts; ' },
              { text: 'responsibility for decisions remained with people', strong: true },
              { text: '.' },
            ],
          },
        ],
      },
    ],
    evidence: {
      label: 'Image pending: executable prototype at different resolutions',
      caption:
        'Comparison between Figma and the executable prototype validated at different resolutions before handoff.',
      exampleAlt:
        'Synthetic reference showing an executable prototype validated on desktop, tablet and mobile.',
    },
  },
  postLaunch: {
    title: 'After launch, ongoing editorial work began.',
    paragraphs: [
      'The first versions of the two websites went live in July 2025.',
      {
        parts: [
          { text: 'After that came rounds of content updates, visual adjustments and new business needs. The websites kept evolving until they reached their current versions. ' },
          { text: 'The launch did not end the project', strong: true },
          { text: '. It created a foundation that could be corrected, expanded and updated without starting over every time.' },
        ],
      },
    ],
    imgAlt:
      'Composition of the current versions of the 3PH Alliance and HRCRS websites after the rounds of editorial evolution',
    caption:
      'Current homepages of 3PH Alliance and HRCRS, evolved from the same visual foundation.',
  },
  impact: {
    title: 'Impact beyond the websites',
    paragraphs: [
      {
        parts: [
          { text: 'The delivery did not end with two redesigned websites. Teams with editorial autonomy began publishing content with ' },
          { text: 'little or no dependence on development', strong: true },
          { text: ', while the forms started receiving ' },
          { text: 'business inquiries nearly every day', strong: true },
          { text: '.' },
        ],
      },
      {
        parts: [
          { text: 'The impact also showed up outside the websites. Presentations and other company materials started following the same language, ' },
          { text: 'reinforcing a shared visual standard for 3PH Alliance and HRCRS', strong: true },
          { text: '.' },
        ],
      },
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
        main: '2 independent CMS platforms',
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
