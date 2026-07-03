export default {
  seo: {
    title: 'Gerdau Storeroom — Product Design Case Study | Henrique Silva',
    description:
      "Product Design case study for Gerdau's storeroom operation, reducing an inventory count from up to two hours to about 15 minutes.",
    path: '/en/work/gerdau-storeroom',
    lang: 'en',
    robots: 'noindex, follow',
  },
  hero: {
    titleLines: ['Gerdau', 'Storeroom'],
    subtitle: 'Industrial inventory · Product design',
    description:
      'An experience co-created with the operations team to reduce time and rework in inventory counting, without losing touch with the reality of the process and the rules of SAP.',
  },
  metadata: {
    ariaLabel: 'Project information',
    imageAlt:
      'Storeroom App interface with the Gerdau brand, showing an inventory count',
    fields: [
      { label: 'Client', value: 'Gerdau Steel' },
      { label: 'Year', value: '2018' },
      { label: 'Role', value: 'Product Designer' },
    ],
    result: {
      label: 'Result',
      main: '90~120 min → ~15 min',
      sub: 'More than 80% reduction in counting time',
    },
    contribution: {
      label: 'My contribution',
      value: 'Research · Co-creation · Prototyping · Usability testing',
    },
  },
  panoramic: {
    alt: 'Wall of sticky notes with the mapping and synthesis of the Gerdau Storeroom project',
  },
  problem: {
    title: 'The problem',
    paragraphs: [
      'In theory, the job was simple: locate the items, check the quantities and update SAP.',
      'In practice, the count depended on printed lists, long walks across a huge warehouse and manual checks. When a piece of information did not match, the operator had to go back to the computer, review the data and redo the inventory validation.',
    ],
  },
  centralQuestion: {
    ariaLabel: 'Central question of the project',
    label: 'The question that guided the work:',
    text: 'How could we reduce time and rework in inventory counting without ignoring the rules of SAP and the reality of the operation in the field?',
  },
  shadowing: {
    videoTitle:
      'Shadowing the operators during the inventory count, following the real process and the friction points in the field.',
    videoCaption:
      'Following the count in the field to understand where the process actually got stuck.',
    title: 'How the process worked before:',
    body: 'To understand where this flow really got stuck, I followed the count alongside the operators — from freezing the inventory in SAP to updating the data after the trip to the warehouse.',
    flowAlt:
      'Previous inventory counting flow, from the item list to the final validation in SAP.',
    flowMobileAriaLabel: 'Previous inventory counting flow',
    flowTop: [
      'Receive the item list',
      'Look up each item in SAP',
      'Freeze the inventory in SAP',
      'Print the item list',
    ],
    flowBottom: [
      'Validate in SAP',
      'Return to the computer',
      'Count manually on paper',
      'Search for items in the warehouse',
    ],
    breakLabel: 'Where did the process break?',
    breakLines: [
      'Any exception turned into rework:',
      'An item out of place, a quantity mismatch or another validation in SAP.',
    ],
  },
  mapping: {
    title: 'Mapping the real flow',
    paragraphs: [
      'After the field observation, I organized the steps, exceptions and decisions that were part of the count.',
      'The map helped separate what was a necessary rule of the operation from what existed only to work around limitations of the current process. That made it easier to discuss where to simplify without losing control.',
    ],
    imgAlt:
      'Mapping of the real inventory counting flow with operators and stakeholders',
    caption: 'Mapping the real flow with operators and stakeholders from the operation.',
  },
  cocreation: {
    title: 'Co-creation',
    paragraphs: [
      'With the main friction points mapped, I brought operators and the areas involved together to imagine a process with less rework.',
      'Instead of starting with screens, we discussed the decisions that structured the flow: which steps had to remain in SAP, where operators needed more clarity and what could be solved by the product itself.',
    ],
    imgAlt: 'Co-creation session with the team and operators, exploring solution ideas',
    caption: 'Exploring solution ideas with the people who lived the process every day.',
  },
  decide: {
    imgAlt: 'Synthesis of the co-creation with friction points and opportunities identified by the operators',
    caption:
      'Synthesis of the main friction points, exceptions and opportunities identified during the co-creation.',
    title: 'What we needed to decide',
    list: [
      'Which rules had to remain in SAP',
      'Which steps could be solved within the flow itself',
      'How to guide the operator through exceptions',
    ],
    body: 'It was when the system rules met the knowledge of the people who lived the operation that the solution started to take shape.',
  },
  prototype: {
    title: 'From idea to prototype',
    paragraphs: [
      'The ideas raised in the co-creation were combined into a first version of the solution — almost a Frankenstein built from the parts that seemed to work best.',
      'At that point, the concern was not polish. It was getting the flow up quickly, taking the prototype back to the operators and finding out where the logic still needed to change.',
    ],
    imgAlt:
      'Low-fidelity wireframes of the Storeroom App flow drawn on a whiteboard',
    caption:
      'First version of the flow, built from the ideas prioritized during the co-creation.',
  },
  testing: {
    title: 'Testing with the operators',
    paragraphs: [
      'We tested the first version with different operators, both in a room and in the real work environment. I observed where questions came up, what information they looked for and which decisions still needed explanation.',
      'Each round helped adjust the sequence and the content before implementation.',
    ],
    video1Title:
      'Testing the low-fidelity prototype with an operator, validating the sequence, content and decisions of the flow.',
    img02Alt: 'Operator testing the app in a real warehouse environment during the inventory',
    img04Alt: 'Prototype test with an operator in a room, checking understanding of the flow',
    video2Title:
      'Validating the prototype with the main stakeholder, aligning the flow with the needs of the operation and the business.',
    caption:
      'Tests carried out with different operators, in a room and in the field, to identify questions and opportunities to improve the flow.',
  },
  refined: {
    title: 'The refined solution',
    paragraphs: [
      'The final solution brought lookup, counting and data updates together into a single flow on a tablet.',
      'With that, the operator could complete the process in the field, without going back to the computer at every step.',
    ],
    imgAlt: 'Screens of the refined Storeroom App flow for inventory counting on a tablet',
    caption: 'Main screens of the refined flow supporting inventory counting in the field.',
  },
  operation: {
    videoTitle: 'Gerdau Storeroom in operation during an inventory count in the field.',
    title: 'The product in operation',
    body: 'The solution was implemented by Gerdau and adopted by the Cartersville operation. With the new flow, a count that used to take between 90 and 120 minutes was completed in about 15.',
  },
  testimonial: {
    ariaLabel: 'Testimonial',
    paragraphs: [
      'You were not the first ones to come here and try to help us. The difference is that the previous companies wanted to change our processes and teach us a new way of working.',
      'You listened to us, and we took an active part in the creation process. That was very enriching.',
    ],
    author: '— Peter, Logistics Manager at Gerdau North America',
  },
  team: {
    imgAlt:
      'The team that took part in the research, co-creation and validation of Gerdau Storeroom in Cartersville',
    caption:
      'The team that took part in the research, co-creation and validation of the solution in Cartersville.',
  },
}
