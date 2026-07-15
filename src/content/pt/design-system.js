export default {
  seo: {
    title: 'Design System — Henrique Silva',
    description:
      'Como o sistema de design deste portfólio conecta produto, código e Figma: fundamentos, componentes, temas e as decisões entre eles.',
    path: '/design-system',
    lang: 'pt',
    robots: 'index, follow',
  },
  hero: {
    label: 'Design System',
    heading: 'Kihon',
    kanji: '基本',
    paragraphs: [
      'No karatê, Kihon (基本) são os fundamentos — as técnicas básicas repetidas até se tornarem naturais. Escolhi esse nome porque acredito que bons produtos digitais nascem do mesmo jeito: dominando o essencial antes de buscar complexidade.',
      'Tudo o que está documentado aqui parte dessa ideia — e é o mesmo sistema que constrói esta própria página.',
    ],
  },
  sectionNav: {
    label: 'Seções desta página',
    items: [
      { id: 'overview', label: 'Visão geral' },
      { id: 'principles', label: 'Princípios' },
      { id: 'foundations', label: 'Foundations' },
      { id: 'themes', label: 'Temas' },
      { id: 'components', label: 'Componentes' },
      { id: 'responsive', label: 'Responsivo' },
      { id: 'accessibility', label: 'Acessibilidade' },
      { id: 'evolution', label: 'Evolução' },
      { id: 'adapted', label: 'Adaptação' },
    ],
  },
  overview: {
    title: 'Visão geral',
    paragraphs: [
      'Kihon documenta os fundamentos que sustentam este portfólio. Mais do que um catálogo de componentes, ele reúne as decisões que mantêm a interface consistente à medida que o produto evolui.',
      'Cada princípio apresentado aqui foi aplicado no produto real. O objetivo não é reproduzir uma interface específica, mas mostrar como decisões simples e bem definidas podem formar um sistema adaptável.',
    ],
  },
  principles: {
    title: 'Princípios',
    items: [
      {
        number: '01',
        title: 'Preto e branco decide',
        text: 'A paleta é neutra por decisão, não por ausência. O contraste máximo entre preto e branco é a identidade — cor decorativa não entra sem uma razão de conteúdo.',
      },
      {
        number: '02',
        title: 'A tipografia é a imagem',
        text: 'Títulos em escala display (72–320px) carregam a composição. Quando o texto é o protagonista, imagens e ornamentos cedem espaço.',
      },
      {
        number: '03',
        title: 'Espaço negativo é estrutura',
        text: 'O respiro entre seções (96–120px) e as pausas editoriais fazem parte do ritmo de leitura. Densidade é controlada, nunca acidental.',
      },
      {
        number: '04',
        title: 'Grid rigoroso, composição assimétrica',
        text: 'O grid de 1440px com margens de 48px é a base; a assimetria acontece dentro dele, nunca contra ele.',
      },
      {
        number: '05',
        title: 'Estados discretos, foco visível',
        text: 'Hover muda tom (preto → cinza 600), nunca forma. Foco por teclado é sempre visível: outline 2px preto, offset 3px.',
      },
      {
        number: '06',
        title: 'Motion com propósito',
        text: 'Reveals curtos (320ms, easing suave), staggers moderados, e respeito integral a prefers-reduced-motion. Nada anima por decoração.',
      },
    ],
  },

  foundations: {
    title: 'Foundations',
    intro: 'Os elementos de base do sistema — cor, tipografia, espaçamento, raio e elevação. Cada um mostra o que existe hoje: no Figma, na produção e no código.',

    color: {
      title: 'Cores',
      intro: 'Paleta neutra. Primitivas são os valores brutos; tokens semânticos dão papel a esses valores e são o que os componentes deveriam consumir — é essa camada que muda entre os temas.',
      primitivesTitle: 'Primitivas',
      semanticTitle: 'Semânticos',
      roles: {
        '--color-black': 'Preto — base de texto, fundos inversos e ações',
        '--color-white': 'Branco — fundo padrão, texto inverso',
        '--color-muted': 'Cinza 600 — texto secundário, hover',
        '--color-surface': 'Cinza 100 — superfícies sutis',
        '--color-divider': 'Cinza 200 — bordas, divisores, placeholders',
        '--color-border': 'Usado hoje só na borda de campos de formulário',
        '--color-bg-page': 'Fundo padrão das páginas',
        '--color-bg-surface': 'Superfícies e cards discretos',
        '--color-bg-elevated': 'Fundo do cartão principal de conteúdo, sobre o fundo estrutural',
        '--color-bg-inverse': 'Faixas pretas, Footer, blocos invertidos',
        '--color-text-primary': 'Texto principal',
        '--color-text-secondary': 'Texto de apoio, metadados',
        '--color-text-muted': 'Texto discreto — mais apagado que o secundário no dark',
        '--color-text-inverse': 'Texto sobre fundo escuro ou preto',
        '--color-border-primary': 'Borda padrão (ver nota de divergência acima)',
        '--color-border-subtle': 'Divisores e bordas discretas',
        '--color-icon-primary': 'Ícones padrão',
        '--color-link': 'Links de texto',
        '--color-focus-ring': 'Contorno de foco por teclado',
        '--color-bg-action-primary': 'Fundo de botões e CTAs',
        '--color-text-on-action-primary': 'Texto sobre botões e CTAs',
        '--color-danger': 'Erros de formulário — única cor não neutra do sistema',
      },
    },

    typography: {
      title: 'Tipografia',
      intro: 'Uma única família (Inter Tight, dois pesos) e uma escala expressiva — a variação está no tamanho, não na variedade. Nenhum desses nomes existe como CSS variable no código: cada font-size é escrito localmente, por componente. Os specimens abaixo são renderizados no tamanho real.',
      tokenAbsent: '—',
      specimens: {
        displayXXL: 'Henrique',
        displayHero: 'Kihon',
        displayXL: 'Design System',
        displayL: 'Trabalhos',
        h1: 'Projetos selecionados',
        h2: 'Competências & ferramentas',
        h3: 'Estratégia e descoberta',
        bodyL: 'Transformo contextos complexos em experiências mais claras.',
        bodyM: 'Conecto necessidades dos usuários, objetivos de negócio e viabilidade técnica.',
        bodyS: 'Descrição breve do projeto selecionado.',
        labelL: 'Ver projetos selecionados ↓',
        labelM: 'Entre em contato',
        labelS: 'Saúde · Head of Design',
      },
      usage: {
        displayXXL: 'Nome "Henrique" no Hero desktop',
        displayHero: 'Títulos de case (TypingTitle)',
        displayXL: 'Títulos de página desktop',
        displayL: 'Títulos de seção grandes, CTA do Footer',
        h1: 'H1 de seções, valores de métricas',
        h2: 'Subtítulos de seção',
        h3: 'Títulos de item, subtítulo de case',
        bodyL: 'Texto de destaque, lead',
        bodyM: 'Corpo padrão',
        bodyS: 'Apoio, metadados de card',
        labelL: 'CTAs grandes',
        labelM: 'Botões, navegação',
        labelS: 'Categorias, copyright',
      },
    },

    spacing: {
      title: 'Espaçamento e grid',
      intro: 'Escala em múltiplos de 8 (4px como exceção mínima). Como a tipografia, não existe --space-* no código — os valores abaixo são o que a produção usa, lidos direto dos componentes. Barras em escala proporcional.',
      tokenAbsent: '—',
      usageTitle: 'Aplicações canônicas',
      usageItems: [
        'Margem de página — 48px no desktop (--page-padding-desktop), fluida entre 24 e 48px no mobile',
        'Padding vertical de seção — 96–120px desktop, 64–80px mobile',
        'Espaço entre título e conteúdo — 32–48px',
        'Espaçamento inline (ícone ↔ label) — 8–16px',
        'Padding de card — 24–32px',
        'Gap de grid de projetos — 24px no desktop',
        'Largura de leitura — 720–880px, largura de conteúdo máxima de 1440px',
      ],
    },

    radiusElevation: {
      title: 'Raio e elevação',
      intro: 'Sistema essencialmente flat: um raio pequeno para botões e campos, um raio maior para cards, e pill para CTAs e chips. Um único nível de sombra, reservado para cards.',
      rows: {
        '--radius-8': 'Botões, campos',
        '--radius-card': 'Cards',
        '--radius-pill': 'CTAs pill, chips',
        '--shadow-card': 'Elevação de card',
      },
      reserveNote: 'O Figma também reserva radius/24, radius/32 e radius/64 para uso futuro — nenhum dos três tem token ou uso em produção hoje.',
    },
  },

  themes: {
    title: 'Temas',
    paragraphs: [
      'O sistema separa valores brutos de papéis semânticos. Os componentes consomem tokens como --color-text-primary e --color-bg-surface, permitindo que a mesma estrutura funcione em light e dark.',
      'A preferência acompanha o visitante e é aplicada antes da primeira renderização. Assim, toda a interface responde ao tema sem que cada componente precise conhecer o estado ativo.',
    ],
    demoTitle: 'Esta página é a demonstração',
    demoText: 'Alterne o tema e observe como cores, specimens e superfícies respondem usando os mesmos tokens do produto.',
    previewLabel: 'Componente real — o mesmo que aparece na Navbar.',
  },

  components: {
    title: 'Componentes',
    intro: 'Esta seção documenta o que existe: alguns componentes são instâncias reais e seguras de renderizar mais de uma vez na página; outros — Navbar, dropdown, menu mobile — têm efeitos globais (scroll lock, foco, listeners de teclado) e por isso são documentados estruturalmente, sem uma segunda montagem.',

    buttonsLinks: {
      title: 'Botões e links',
      paragraphs: [
        'O Figma documenta três padrões: Button (12 variantes — Dark/Light × S/M/L), Text Link (12 variantes) e HyperLink (2 variantes, para links externos). Hover muda tom, nunca forma. Foco por teclado usa o mesmo anel global em qualquer um dos três.',
        'O código não tem um componente <Button> ou <Link> compartilhado. Cada CTA — o do Hero, o do formulário de contato, o do Footer — é estilizado localmente no CSS Module da própria página. A linguagem visual é consistente porque as decisões (raio, tipografia, tom de hover, foco) são as mesmas em todo lugar; a implementação, hoje, está distribuída.',
        'O único estado disabled/loading observado em produção é o botão de envio do formulário de contato: superfície e texto discretos, com o rótulo mudando para "Enviando…".',
      ],
      specimenLabel: 'Entre em contato',
      sizesTitle: 'Tamanhos',
      sizes: [
        { key: 's', label: 'S · 38px' },
        { key: 'm', label: 'M · 48px' },
        { key: 'l', label: 'L · 64px' },
      ],
      statesTitle: 'Estados',
      states: [
        { key: 'default', label: 'Default' },
        { key: 'hover', label: 'Hover — muda tom, nunca forma' },
        { key: 'focus', label: 'Focus — anel global 2px, offset 3px' },
        { key: 'disabled', label: 'Disabled — opacidade 0.55' },
      ],
      linksTitle: 'Links',
      linkSpecimens: [
        { key: 'textLink', label: 'Ver todos os trabalhos', caption: 'Text Link — navegação interna, sublinhado no hover' },
        { key: 'hyperLink', label: 'LinkedIn ↗︎', caption: 'HyperLink — externo, sempre com rel="noopener noreferrer"' },
      ],
      specimenNote: 'Espécimes de documentação — não interativos. Os CTAs reais vivem nas próprias páginas.',
    },

    navigation: {
      title: 'Navegação',
      intro: 'A Navbar é um componente único, presente em toda rota via Layout. A documentação abaixo descreve o componente real, sem recriar uma segunda instância — o que duplicaria landmarks, listeners e estados de ARIA.',
      anatomyTitle: 'Anatomia',
      anatomyItems: [
        'Logo — SVG, 46×74, link para a Home',
        'Nav central — dropdown "Trabalhos", "Sobre Mim", link externo para o LinkedIn',
        'Área direita — Theme Toggle, Language Switcher, CTA "Entre em contato", hambúrguer (mobile)',
      ],
      behaviorTitle: 'Comportamento',
      behaviorItems: [
        'Barra compacta ("scrolled") depois de 96px de rolagem.',
        'Dropdown "Trabalhos": painel full-page, aria-expanded e aria-haspopup no gatilho. Fecha com Escape, clique fora, ou clique na área vazia do painel. Ao abrir por teclado, o foco vai para o primeiro item — ao fechar, diferente do menu mobile, o foco não é devolvido automaticamente ao gatilho.',
        'Menu mobile: painel full-screen, accordion "Trabalhos" anima por grid-template-rows. Escape fecha primeiro o accordion (se aberto) e só depois o menu. Scroll trava enquanto aberto, compensando a largura da scrollbar. Ao fechar, o foco retorna ao botão hambúrguer.',
        'Painéis fechados usam tabIndex -1 nos links internos, para que Tab não entre em conteúdo invisível.',
        'Theme Toggle e Language Switcher aparecem duas vezes no DOM — na área direita da barra e no rodapé do menu mobile — sempre presentes, com visibilidade controlada por CSS e aria-hidden, não por montagem condicional.',
      ],
      previewLabel: 'Seletor de idioma — instância real, a mesma que aparece na Navbar (aqui é a segunda instância simultânea; a primeira já vive na barra acima).',
    },

    cardsMetrics: {
      title: 'Cards e métricas',
      paragraphs: [
        'Project Card é grid no desktop e slider horizontal no mobile. O hover escurece a imagem e revela "Ver Projeto →"; o card inteiro é o link, com aria-label igual ao título do projeto — não há um botão separado dentro dele.',
        'Stat Card mostra as métricas da Home (19 Anos, 8+ Anos, Brasil + EUA): valor grande em Heading/H1, rótulo curto em Body. A variante Wide ocupa duas colunas.',
        'Como Button e Link, esses cards não são componentes React isolados e reaproveitáveis fora de onde já aparecem — Project Card vive em Projects.jsx e OtherProjectsSection.jsx, Stat Card em Stats.jsx. Documentar aqui não significa remontar com dados fictícios.',
      ],
      projectSpecimen: {
        title: 'Gerdau Storeroom',
        meta: 'Indústria · Product Design',
        overlay: 'Ver Projeto →',
        captionDefault: 'Project Card — Default · 420×480, radius 16',
        captionHover: 'Hover — overlay escurece, "Ver Projeto →" revela',
      },
      statSpecimen: {
        value: '19',
        suffix: 'Anos',
        label: 'de experiência em produtos digitais',
        caption: 'Stat Card — valor em Heading/H1, rótulo em Body',
      },
      rulesTitle: 'Regras de métricas',
      rulesItems: [
        'Métricas vêm sempre do conteúdo aprovado — nunca inventadas ou arredondadas.',
        'Variantes desktop e mobile podem divergir por decisão de design (ex.: "8+ Anos" no desktop, "8 Anos +" no mobile em PT).',
        'Sem aria supérflua: valor e rótulo já formam uma frase legível na ordem em que aparecem no DOM.',
      ],
    },

    forms: {
      title: 'Formulário',
      intro: 'O formulário prioriza clareza em cada etapa — preenchimento, validação, envio, sucesso e erro. Os exemplos abaixo mostram sua estrutura e seus principais estados sem criar uma segunda instância funcional.',
      fieldSpecimens: {
        defaultField: { label: 'Nome', value: 'Henrique Silva', caption: 'Campo — linha inferior, sem caixa' },
        errorField: { label: 'E-mail', value: 'henrique@', error: 'Informe um e-mail válido.', caption: 'Erro — mensagem textual + cor, nunca só cor' },
      },
      fieldsTitle: 'Campos',
      columns: { field: 'Campo', type: 'Tipo', required: 'Obrigatório', notes: 'Notas' },
      fields: [
        { field: 'Nome', type: 'text', required: 'Sim', notes: 'autoComplete="name"' },
        { field: 'E-mail', type: 'email', required: 'Sim', notes: 'Validação por regex além do required' },
        { field: 'Empresa', type: 'text', required: 'Não', notes: 'Rotulado "— opcional"' },
        { field: 'Assunto', type: 'text', required: 'Sim', notes: 'Preenchido pelo visitante — diferente do campo oculto "subject" enviado ao Formspree' },
        { field: 'Mensagem', type: 'textarea', required: 'Sim', notes: '3 linhas visíveis, redimensionável na vertical' },
      ],
      statesTitle: 'Estados e envio',
      statesItems: [
        'A validação acontece no envio, com mensagens associadas diretamente a cada campo inválido.',
        'Durante o processamento, o formulário informa o estado de envio e evita ações duplicadas.',
        'Sucesso e erro recebem feedback próprio, claro e acessível, sem depender apenas de cor.',
        'Uma proteção invisível contra spam reduz envios automatizados sem interferir na navegação por teclado.',
        'Português e inglês compartilham o mesmo fluxo, preservando a estrutura e adaptando as mensagens.',
      ],
    },

    footer: {
      title: 'Footer',
      intro: 'Um único Footer, reutilizado em todas as páginas via Layout — variações por página não são permitidas. A instância real já está no rodapé desta própria página; o que segue é a anatomia, não uma segunda montagem.',
      anatomyTitle: 'Anatomia',
      anatomyItems: [
        'Bloco de identidade — foto (159×159), nome e cargo',
        'CTA final — heading em Display + botão pill para /contato',
        'Links de contato — LinkedIn, E-mail e Currículo, separados por pontos, abrindo em nova aba com rel="noopener noreferrer"',
        'Divisor, depois copyright com a versão do site (ex.: "Versão 3.0") na mesma linha',
      ],
      behaviorTitle: 'Comportamento',
      behaviorItems: [
        'Desktop: identidade à esquerda, CTA à direita. Mobile: tudo centralizado e empilhado, com a foto sem cortar a cabeça no Safari iOS.',
        'O Footer fica sticky atrás do conteúdo da página e é revelado pela rolagem — ele não anima sozinho, é o conteúdo acima que sobe.',
        'Com prefers-reduced-motion, o efeito de revelação é preservado porque é rolagem nativa do navegador, não uma transição extra a desligar.',
        'PT e EN mudam apenas o texto — mesma estrutura, mesmo comportamento.',
      ],
    },
  },

  responsive: {
    title: 'Comportamento responsivo',
    intro: 'A regra é recompor, não só encolher: em telas menores a composição muda de forma intencional — ordem, hierarquia e até conteúdo se ajustam.',
    deviceLabels: { desktop: 'Desktop', tablet: 'Tablet', mobile: 'Mobile' },
    tabletNote: 'Tablet comprime a composição do desktop — não a recompõe.',
    rows: [
      { section: 'Hero', insight: 'O nome ganha escala própria no mobile — nunca é o desktop encolhido.' },
      { section: 'Projetos selecionados', insight: 'De grid a slider horizontal — e a ordem dos cards muda por decisão, não acidente.' },
      { section: 'Experiência', insight: 'De composição horizontal a accordion — um cargo aberto por vez.' },
      { section: 'Navegação', insight: 'De barra completa a logo + hambúrguer, com painel full-screen.' },
    ],
    breakpointsNote: 'Breakpoints reais do código: 768px e 1024px.',
  },

  accessibility: {
    title: 'Acessibilidade',
    intro: 'Práticas verificáveis no código e no produto publicado — não uma auditoria formal de conformidade com WCAG.',
    contrastTitle: 'Contraste medido',
    contrastTiles: [
      { value: '21:1', badge: 'AAA', pair: '#000 sobre #FFF' },
      { value: '4.9:1', badge: 'AA', pair: '#6D6D6D sobre #FFF' },
      { value: '3.5:1', badge: 'texto grande', pair: '#888 sobre #FFF' },
      { value: '15:1', badge: 'AAA', pair: '#D9D9D9 sobre #000' },
    ],
    focusDemo: {
      label: 'Entre em contato',
      caption: 'Anel de foco global — outline 2px, offset 3px, em qualquer tema',
    },
    items: [
      { label: 'Fluxo por teclado', detail: 'Tab percorre a Navbar na ordem visual; Escape fecha dropdown/menu; painéis fechados usam tabIndex -1 para não capturar foco invisível.' },
      { label: 'Motion reduzido', detail: 'prefers-reduced-motion zera todas as durações (0.01ms) globalmente; parallax e elementos flutuantes do Hero são desativados por completo.' },
      { label: 'Hierarquia de headings', detail: 'Um H1 por rota, sem pular níveis — inclusive nesta página.' },
      { label: 'Links externos', detail: 'target="_blank" sempre acompanhado de rel="noopener noreferrer".' },
      { label: 'Elementos decorativos', detail: 'Ícones e imagens puramente visuais usam aria-hidden="true" ou alt="".' },
    ],
  },
  evolution: {
    title: 'Evolução contínua',
    kanjiName: 'Manen Shoho',
    kanji: '万年初歩',
    intro: 'Outro princípio por trás deste sistema é o Manen Shoho (万年初歩) — permanecer iniciante. É um lembrete de que cada componente, cada padrão e cada decisão pode ser questionado, refinado e melhorado. O sistema evolui sem tratar nenhuma solução como definitiva.',
  },

  adapted: {
    title: 'Feito para ser adaptado',
    paragraphs: [
      'Kihon nasceu para este portfólio. Mas seus fundamentos não foram pensados só para ele.',
      'Troque a marca, as cores, a tipografia — mantenha a arquitetura: tokens semânticos antes de valores fixos, decisões documentadas antes de implementadas, acessibilidade como parte do sistema, não como revisão final.',
      'Kihon não existe para ser copiado. Existe como ponto de partida para novos sistemas de design: adapte a identidade, preserve os fundamentos e construa algo que seja verdadeiramente seu.',
    ],
  },
}
