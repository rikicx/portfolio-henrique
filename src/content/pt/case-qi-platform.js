export default {
  seo: {
    title: 'QI Platform — Case de Product Design | Henrique Silva',
    description:
      'Case de estratégia de produto, liderança de design e AI aplicada a um módulo premium de benchmarking clínico do 3PH Cloud.',
    path: '/trabalhos/qi-platform',
    lang: 'pt',
    robots: 'index, follow',
  },
  hero: {
    titleLines: ['QI', 'Platform'],
    kicker: 'Benchmarking clínico · Estratégia de produto · AI aplicada',
    description:
      'Como transformamos dados já acumulados pelos hospitais em um módulo premium de comparação e melhoria clínica.',
  },
  metadata: {
    ariaLabel: 'Informações do projeto',
    imageAlt: 'Overview desktop do QI Platform exportado do Figma',
    items: [
      { label: 'Empresa', value: '3PH Alliance' },
      { label: 'Ano', value: '2024' },
      { label: 'Papel', value: 'Head of Design' },
      { label: 'Produto', value: 'Módulo premium do 3PH Cloud' },
      { label: 'Time liderado', value: '3 UX Designers' },
      {
        label: 'Adoção medida',
        value: '23.000+ análises comparativas em 12 meses',
      },
      {
        label: 'Atuação',
        value:
          'Estratégia de produto · Discovery · Liderança de design · Pesquisa · AI aplicada · Validação · Handoff',
      },
    ],
  },
  problem: {
    title: 'O problema',
    lead: 'O dado existia. A comparação ainda não.',
    paragraphs: [
      'O 3PH Cloud era um EDC gratuito para estudos clínicos no qual os hospitais continuavam donos dos dados após o fim de cada estudo — uma diferença relevante em relação a outras soluções do mercado.',
      'Esse histórico, porém, ainda era comparado por meio de muitas planilhas. Manter recortes, variáveis e versões consistentes tornava difícil responder a uma pergunta simples dos médicos: “como o meu hospital está indo em relação aos outros?”.',
      'O QI Platform nasceu dentro do 3PH Cloud para transformar esse histórico em comparação contínua. Para o negócio, tornou-se parte do plano premium; para os hospitais, uma forma de investigar técnicas, dispositivos e procedimentos usando os dados que já possuíam.',
    ],
  },
  centralQuestion: {
    label: 'A pergunta que orientou o trabalho:',
    text: 'Como transformar dados clínicos acumulados pelos hospitais em comparações confiáveis e acionáveis, preservando a privacidade de pacientes, centros e especialistas?',
  },
  discovery: {
    title: 'Discovery antes da interface',
    imgAlt: 'Quadro colaborativo usado no workshop remoto de cocriação do QI Platform',
    caption:
      'Workshop remoto de cocriação com especialistas e áreas de produto. O material contém registros do processo, não dados de pacientes.',
    paragraphs: [
      'Partimos de insights levantados por médicos e os confrontamos em entrevistas qualitativas com médicos, técnicos e data managers, além de stakeholders de Produto e Tecnologia.',
      'Investigamos como cada perfil verificava os dados, construía comparações e decidia aprofundar uma diferença. Um workshop de cocriação combinou Lean Inception e Design Sprint para organizar as perguntas do produto.',
      'Com consentimento e remoção prévia de informações sensíveis, usamos ChatGPT para melhorar roteiros, transcrever entrevistas e apoiar a busca inicial por padrões. A interpretação permaneceu com o time.',
    ],
  },
  compactQuote:
    'Depois de identificar uma diferença, o que o especialista precisava entender para decidir o próximo passo?',
  product: {
    title: 'Organizar o produto pelas perguntas que importavam',
    intro:
      'Em vez de um dashboard único, estruturamos a experiência como uma sequência de perguntas que levava do panorama à investigação.',
    questions: [
      {
        key: 'evolution',
        title: 'Minha evolução',
        text: 'Como os resultados do meu centro mudaram ao longo do tempo?',
      },
      {
        key: 'groups',
        title: 'Grupos de referência',
        text: 'Como meu resultado se distribui entre centros com perfil semelhante?',
      },
      {
        key: 'network',
        title: 'Visão da rede',
        text: 'Que padrões aparecem quando observamos o conjunto sem identificar participantes?',
      },
      {
        key: 'investigation',
        title: 'Investigação',
        text: 'Que período, técnica, perfil ou dispositivo concentra a diferença observada?',
      },
    ],
    noteLines: [
      'A jornada seguia um princípio simples:',
      'encontrar uma diferença, comparar e aprofundar sem perder o contexto.',
    ],
    imgAlt: 'Visão desktop da rede de centros no QI Platform',
    caption:
      'Visão da rede: o próprio centro é destacado e os demais permanecem anônimos. Dados demonstrativos.',
  },
  ai: {
    title: 'AI em três momentos do trabalho',
    intro:
      'Usamos AI para ampliar a capacidade do time, com proteção de dados e validação humana.',
    items: [
      {
        title: 'Discovery',
        text: 'ChatGPT apoiou roteiros, transcrições consentidas e a busca inicial por padrões após a remoção de dados sensíveis.',
      },
      {
        title: 'Exploração',
        text: 'Na prototipação, AI trouxe caminhos além dos gerados no workshop; o time discutiu, refinou e validou as alternativas.',
      },
      {
        title: 'Handoff',
        text: 'AI codificou o protótipo web com animações e microinterações dentro das limitações informadas por TI.',
      },
    ],
    imgAlt: 'Biblioteca de perguntas do QI Platform no Figma',
    caption:
      'Biblioteca de perguntas e estados de disponibilidade no Figma. Dados demonstrativos.',
    prototype: {
      label: 'Explorar o protótipo funcional',
      href: '/trabalhos/qi-platform/prototipo',
      note: 'Protótipo navegável com dados demonstrativos. Abre em uma nova aba.',
    },
  },
  comparison: {
    imgAlt: 'Estado de comparação protegida por anonimato no QI Platform',
    caption:
      'Quando os filtros estreitam demais o grupo, a comparação é interrompida e oferece caminhos de recuperação. Dados demonstrativos.',
    title: 'Anonimato como regra do produto',
    paragraphs: [
      'O 3PH Cloud operava sob requisitos de conformidade com HIPAA. Além de proteger dados de pacientes, o QI precisava impedir que combinações de filtros identificassem indiretamente um centro ou especialista.',
      'Quando o grupo de referência ficava pequeno demais, a plataforma mantinha os resultados do próprio hospital, interrompia a comparação e explicava como ampliar o recorte. O anonimato virou uma regra visível da experiência, não apenas uma restrição técnica.',
    ],
  },
  role: {
    title: 'Liderar sem separar estratégia de execução',
    imgAlt: 'Comparação detalhada entre um centro e um grupo de referência anônimo',
    caption:
      'Comparação detalhada que preserva escopo, contexto e referência anônima. Dados demonstrativos.',
    paragraphs: [
      'Liderei três UX Designers, conectando pesquisa, estratégia, experiência e viabilidade técnica. Especialistas traziam o contexto clínico; Produto definia prioridades; Engenharia mostrava os limites dos dados e da implementação.',
      'Reuniões semanais com stakeholders, design critiques e mentorias mantinham evidências, alternativas e decisões alinhadas. Meu papel era organizar essa conversa e preservar a coerência do produto.',
    ],
  },
  evolution: {
    title: 'Do panorama à investigação',
    imgAlt: 'Tela de investigação do QI Platform segmentada por modelo de cateter',
    caption:
      'A comparação permanece visível enquanto o especialista aprofunda a análise por segmento. Dados demonstrativos.',
    paragraphs: [
      'O produto não dizia se um resultado era bom ou ruim. Ele permitia identificar uma diferença e investigar período, perfil, técnica ou dispositivo sem recomeçar em outra planilha.',
      'Como comparação não significa causalidade, os fluxos preservavam amostra, disponibilidade e avisos. O protótipo funcional permitiu avaliar filtros, estados protegidos e microinterações antes da integração com os dados reais.',
    ],
  },
  impact: {
    title: 'Adoção, escala e sinais de valor',
    stats: [
      {
        value: '23.000+',
        label: 'Análises comparativas em 12 meses',
        wide: true,
      },
      {
        value: '270+',
        label: 'Especialistas cardiovasculares',
      },
      {
        value: '4 países',
        label: 'Utilizando a plataforma',
      },
      {
        value: '3+',
        label: 'Novos centros incorporados por mês',
        wide: true,
      },
    ],
    paragraphs: [
      'Em 12 meses, especialistas realizaram mais de 23 mil análises comparativas. É uma medida de adoção e escala, não de resultado clínico isolado.',
      'As comparações alimentaram discussões e revisões de práticas e técnicas. Como os contratos eram confidenciais, o sinal comercial disponível foi o retorno positivo do time de vendas e a inclusão do QI no plano premium.',
    ],
  },
}
