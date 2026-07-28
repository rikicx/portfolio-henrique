export default {
  seo: {
    title: '3PH & HRCRS — Case de Product Design | Henrique Silva',
    description:
      'Case de liderança hands-on, estratégia de conteúdo, Design System, IA aplicada ao processo de Design e implementação de um ecossistema digital para pesquisa clínica e saúde cardiovascular.',
    path: '/trabalhos/3ph-hrcrs-digital-ecosystem',
    lang: 'pt',
    robots: 'index, follow',
  },
  hero: {
    titleLines: ['3PH Alliance &', 'HRCRS', 'Digital Ecosystem'],
    description:
      'Dois sites conectados por uma base visual e editorial, preparados para evoluir — com IA supervisionada do benchmark ao protótipo executável.',
  },
  metadata: {
    ariaLabel: 'Informações do projeto',
    imageAlt:
      'Tela de laptop exibindo o site da 3PH Alliance com o design visual criado para o projeto',
    fields: [
      { label: 'Empresa', value: '3PH Alliance + HRCRS' },
      { label: 'Ano', value: '2025–2026' },
      { label: 'Papel', value: 'Head of Design — atuação hands-on' },
    ],
    strategic: {
      label: 'Minha atuação',
      value:
        'Liderança de Design · Estratégia de conteúdo · Arquitetura da Informação · Fluxos assistidos por IA · Governança · Lançamento',
    },
  },
  problem: {
    label: 'O problema',
    title: 'O site já nascia desatualizado',
    paragraphs: [
      'Os sites da 3PH Alliance e da HRCRS não atendiam nossas expectativas.',
      'Tinham sido feitos em HTML puro e qualquer mudança de conteúdo dependia de desenvolvimento. Isso já seria um problema em qualquer empresa. Para nós era ainda pior, porque nosso modelo de negócio mudava praticamente todo mês.',
      'Toda semana surgia um serviço novo, uma prioridade diferente ou outra forma de explicar o que a empresa fazia. Quando o conteúdo finalmente era publicado, muitas vezes já precisava ser alterado de novo.',
      'A relação entre as duas empresas também não ajudava. A HRCRS faz parte da 3PH Alliance, mas muita gente entendia o contrário. Outras pessoas nem percebiam que existia uma relação entre elas.',
    ],
  },
  centralQuestion: {
    ariaLabel: 'Pergunta central do projeto',
    label: 'A pergunta que orientou o trabalho:',
    text: 'Como criar dois sites que acompanhassem um negócio em constante mudança, deixassem clara a relação entre as empresas e não dependessem de desenvolvimento para cada atualização?',
  },
  benchmark: {
    imgAlt:
      'Benchmark de sites de empresas do setor para identificar padrões de conteúdo, estrutura e diferenciais',
    caption:
      'Benchmark estrutural com critérios definidos para identificar padrões recorrentes nas páginas do setor.',
    kicker: 'Primeiro, precisávamos organizar o discurso',
    title: 'Comparar o setor com critérios verificáveis',
    introParagraphs: [
      'Já conhecíamos os principais concorrentes. O desafio não era descobrir quem observar, mas comparar os sites de forma consistente. Antes de iniciar a coleta, definimos os parâmetros da análise: estrutura de navegação, organização dos menus, tempo de leitura, padrões recorrentes e formas de apresentar serviços e diferenciais.',
      'Esses critérios foram transformados em um prompt usado com Claude. O modelo navegou por informações públicas dos concorrentes e organizou uma primeira análise em Markdown, registrando a estrutura dos sites e as fontes de cada achado. Capturas das páginas complementavam o material de referência.',
    ],
    reviewBlocks: [
      {
        heading: 'O documento não era tratado como uma conclusão pronta',
        paragraphs: [
          'Voltávamos aos sites para verificar os pontos levantados, completar extrações incompletas e corrigir interpretações que iam além do que a fonte permitia afirmar.',
          'Quando uma leitura parecia plausível, mas não podia ser comprovada, ela permanecia explicitamente marcada como “aparente”. Quando não havia sustentação suficiente, era removida.',
        ],
      },
      {
        heading: 'Sem transformar inferências da IA em fatos',
        paragraphs: [
          'Com isso, o trabalho manual deixou de se concentrar na coleta integral de todos os concorrentes e passou a se concentrar na verificação, na correção e no preenchimento de lacunas.',
          'O benchmark nos deu uma base comum para discutir conteúdo e navegação.',
        ],
      },
    ],
    evidence: {
      label: 'Imagem pendente: benchmark com fontes e revisão',
      caption:
        'Trecho da análise em Markdown com fontes registradas e distinção entre observações, interpretações aparentes e conclusões removidas.',
    },
  },
  contentStructure: {
    title: 'Traduzir uma apresentação comercial para uma experiência que funcionasse sozinha',
    blocks: [
      {
        heading: 'O site já havia chegado ao projeto com o prazo pressionado',
        paragraphs: [
          'A produção de conteúdo não fazia parte do escopo inicial de Design, mas precisou ser absorvida pela área para que a entrega avançasse.',
        ],
      },
      {
        heading: 'Decks, manual de marca e exemplos da linguagem da empresa',
        paragraphs: [
          'Esses materiais eram institucionais e comerciais; nenhum dado de pacientes ou outra informação sensível entrou nesse fluxo.',
          'Antes de pedir propostas de texto, solicitávamos que a IA explicasse o modelo de negócio com suas próprias palavras. O time confrontava essa interpretação com os materiais e com seu conhecimento do negócio, corrigindo inconsistências antes de avançar.',
        ],
      },
      {
        heading: 'Propósito narrativo, emoção desejada e mensagem central',
        paragraphs: [
          'Para cada página, explorávamos duas ou três alternativas de conteúdo. Cada bloco precisava responder de forma coerente a esses três critérios. Quando uma proposta não sustentava o storytelling pretendido, ajustávamos o contexto e as orientações e iniciávamos uma nova rodada de criação ou adaptação.',
          'A IA produzia primeiras alternativas; Design refinava e selecionava uma direção. Depois dessa escolha, o conteúdo era revisado e validado pelas lideranças de Marketing e Vendas.',
        ],
      },
      {
        emphasis: true,
        paragraphs: [
          'Essa distinção era importante: um slide deck conta com alguém para apresentá-lo. O site precisava comunicar a mesma proposta de valor para uma audiência mais ampla, sem depender do contexto de uma reunião.',
        ],
      },
    ],
    lightboxOpenAriaLabel: 'Ampliar arquitetura de conteúdo',
    imgAlt:
      'Documento de arquitetura de conteúdo com propósito narrativo, emoção desejada e mensagem central definidos para cada seção dos sites',
    tapHint: 'Toque para ampliar',
    caption:
      'Estrutura de conteúdo definindo propósito narrativo, emoção desejada e mensagem central para cada seção.',
  },
  designSystem: {
    title: 'Uma base visual para os dois sites',
    baseParagraphs: [
      'Os sites precisavam parecer parte da mesma organização sem parecer cópias um do outro. Meu time criou um Design System do zero, compartilhando cores, tipografia, espaçamentos, componentes e padrões de interação.',
      'A base visual era a mesma. O que mudava era o discurso, o tom e a forma como cada empresa apresentava seus serviços. Meu papel era orientar essas decisões e garantir que as duas experiências continuassem coerentes.',
    ],
    aiBlocks: [
      {
        heading: 'Hipóteses de layout',
        paragraphs: [
          'Depois que essa base e seus componentes já estavam disponíveis no Figma, centralizei a operação do Claude Code conectado ao arquivo por Figma MCP. A partir do conteúdo e da direção já definidos, o modelo sugeria possíveis composições para as páginas.',
          'A IA não criou o Design System nem determinou a solução final: suas propostas eram tratadas como hipóteses de layout.',
        ],
      },
      {
        heading: 'Exploração, refinamento e QA',
        paragraphs: [
          'Os designers conduziam a exploração, o refinamento e a entrega dos layouts, além do QA, com alinhamentos frequentes ao longo do processo. Eu revisava o material antes das discussões de maior risco.',
        ],
      },
      {
        heading: 'O critério não era preferência visual',
        paragraphs: [
          'As propostas refinadas eram discutidas com C-levels, stakeholders e Marketing.',
          'Avaliávamos se cada direção preservava a narrativa usada nas apresentações comerciais e, ao mesmo tempo, conseguia ser autoexplicativa para quem chegava ao site sem contexto prévio.',
        ],
      },
    ],
    imgAlt:
      'Design System compartilhado entre os sites da 3PH Alliance e HRCRS, com cores, tipografia, componentes e padrões de interação',
    caption:
      'Design System compartilhado entre os dois sites, reunindo fundamentos visuais, componentes e padrões de interação.',
    evidence: {
      label: 'Imagem pendente: sugestão, refinamento e layout aprovado',
      caption:
        'Da composição sugerida pelo modelo ao layout refinado e selecionado pelo time de Design.',
    },
  },
  cms: {
    title: 'O site precisava continuar vivo',
    paragraphs: [
      'Não adiantava lançar dois sites novos e continuar dependendo de desenvolvimento para cada mudança. A solução passou a ter um CMS independente para cada site. O time de Scientific Affairs, por exemplo, passou a publicar abstracts, artigos e vídeos educacionais com autonomia, sem acionar desenvolvimento em toda atualização.',
      'Meu time ainda acompanhava páginas mais sensíveis para evitar que a consistência visual se perdesse. Antes, uma atualização tinha um SLA de dois a três dias. Depois que meu time assumiu a operação dos sites, as mudanças passaram a ser publicadas em minutos.',
    ],
    imgAlt:
      'Composição mostrando o site da 3PH Alliance e o painel do CMS utilizado para gerenciar e publicar conteúdos',
    caption:
      'CMS independente para organizar e publicar conteúdos sem depender de desenvolvimento a cada atualização.',
  },
  governance: {
    imgAlt:
      'Apresentações e materiais utilizados nos status semanais para alinhar decisões com stakeholders ao longo do projeto',
    caption:
      'Cerimônias semanais conectando stakeholders, Tecnologia, Design e Scientific Affairs em torno de decisões e próximos passos.',
    title: 'Fazer o projeto andar também fazia parte do trabalho',
    blocks: [
      {
        paragraphs: [
          'As demandas chegavam com urgência, mas as decisões envolviam diferentes áreas e níveis de liderança.',
        ],
      },
      {
        heading: 'Pontos de maior risco',
        paragraphs: [
          'Como Head hands-on, eu delegava aos designers a exploração, a entrega dos layouts e boa parte do QA, mantendo alinhamentos frequentes. Assumia pessoalmente os pontos de maior risco: revisão das análises, arquitetura de conteúdo, operação do fluxo entre Claude Code e Figma, revisão do que seria apresentado e condução das conversas com C-levels e stakeholders.',
        ],
      },
      {
        heading: 'Decisões preparadas',
        paragraphs: [
          'Para evitar que o projeto ficasse parado, organizei status semanais com o contexto resumido, as opções disponíveis e uma recomendação clara.',
          'Em vez de levar problemas abertos para as reuniões, eu levava decisões preparadas.',
        ],
      },
      {
        heading: 'Interface entre Design e o contractor',
        paragraphs: [
          'Depois das definições, eu também funcionava como interface entre Design e o contractor, acompanhando o que seria entregue e garantindo que a solução funcionasse no ambiente real.',
        ],
      },
    ],
  },
  implementation: {
    title: 'Do Figma a um protótipo executável',
    introBlocks: [
      {
        paragraphs: [
          'O Figma continuava sendo a referência visual do projeto, mas o handoff não se limitava às telas estáticas. Com Claude Code conectado ao Figma por MCP, transformamos os layouts aprovados em um protótipo executável que complementava o arquivo de Design.',
        ],
      },
      {
        heading: 'Não era código de produção',
        paragraphs: [
          'Esse protótipo não tinha integração entre front-end, back-end e CMS e não era tratado como código de produção.',
          'Antes da entrega, o time comparava visualmente o resultado com o Figma e realizava testes em diferentes resoluções e dispositivos. As inconsistências eram corrigidas antes de o material chegar ao contractor.',
        ],
      },
    ],
    continuationBlocks: [
      {
        heading: 'Referências complementares',
        paragraphs: [
          'O contractor recebia o Figma e o protótipo como referências complementares. Ele conseguia reaproveitar partes da estrutura em vez de partir apenas de telas estáticas, enquanto assumia as rotas, as funcionalidades de back-end e a integração com o CMS. Isso tornou a passagem para a implementação mais direta.',
          'Meu time continuava próximo durante a implementação, acompanhando responsividade, busca, formulários, CMS e ajustes visuais. Eu coordenava a comunicação entre contractor, Tecnologia, Design e stakeholders, além das rodadas de QA e validação antes de cada publicação.',
        ],
      },
      {
        heading: 'A regra era a mesma em todas as etapas',
        emphasis: true,
        paragraphs: [
          'Um output da IA só avançava depois do checkpoint adequado — verificação das fontes no benchmark, revisão editorial e validação de negócio no conteúdo, refinamento de Design nos layouts ou testes visuais no protótipo.',
          'A IA acelerava a exploração e a tradução entre artefatos; a responsabilidade pelas decisões permanecia com as pessoas.',
        ],
      },
    ],
    evidence: {
      label: 'Imagem pendente: protótipo executável em diferentes resoluções',
      caption:
        'Comparação entre o Figma e o protótipo executável validado em diferentes resoluções antes do handoff.',
    },
  },
  postLaunch: {
    title: 'Depois do lançamento, começou a operação editorial.',
    paragraphs: [
      'As primeiras versões dos dois sites entraram no ar em julho de 2025.',
      'Depois disso, vieram rodadas de atualização de conteúdo, ajustes visuais e novas necessidades do negócio. Os sites continuaram evoluindo até chegar às versões atuais. O lançamento não encerrou o projeto. Ele criou uma base que podia ser corrigida, ampliada e atualizada sem precisar recomeçar toda vez.',
    ],
    imgAlt:
      'Composição das versões atuais dos sites da 3PH Alliance e HRCRS após as rodadas de evolução editorial',
    caption:
      'Homepages atuais da 3PH Alliance e da HRCRS, evoluídas a partir de uma mesma base visual.',
  },
  impact: {
    title: 'Impacto além dos sites',
    paragraphs: [
      'A entrega não terminou em dois sites redesenhados. As áreas com autonomia editorial passaram a publicar conteúdo com pouca ou nenhuma dependência de desenvolvimento, enquanto os formulários começaram a receber contatos comerciais praticamente todos os dias.',
      'O impacto também apareceu fora dos sites. Apresentações e outros materiais da empresa começaram a seguir a mesma linguagem, reforçando uma régua visual comum para a 3PH Alliance e a HRCRS.',
    ],
    metrics: [
      {
        key: 'time',
        main: '2–3 dias → minutos',
        sub: 'SLA para atualização depois que Design assumiu a operação',
      },
      {
        key: 'rating',
        main: '4,67 de 5',
        sub: 'Avaliação visual em pesquisa interna e anônima',
      },
      {
        key: 'cms',
        main: '2 CMS independentes',
        sub: 'Autonomia editorial para 3PH Alliance e HRCRS',
      },
      {
        key: 'pages',
        main: 'Todas as páginas reestruturadas',
        sub: 'Nos sites da 3PH Alliance e HRCRS',
      },
    ],
  },
  lightbox: {
    dialogAriaLabel: 'Arquitetura de conteúdo ampliada',
    closeAriaLabel: 'Fechar imagem ampliada',
    closeLabel: 'Fechar imagem',
    imgAlt:
      'Documento de arquitetura de conteúdo com propósito narrativo, emoção desejada e mensagem central',
  },
}
