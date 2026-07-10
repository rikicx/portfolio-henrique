export default {
  seo: {
    title: 'Design System — Henrique Silva',
    description:
      'Como o sistema de design deste portfólio conecta produto, código e Figma — fundamentos, princípios e decisões.',
    path: '/design-system',
    lang: 'pt',
    robots: 'noindex, nofollow',
  },
  hero: {
    heading: 'Design System',
    lead: 'A linguagem editorial deste portfólio, documentada: preto e branco, tipografia expressiva, grid rigoroso e espaço negativo generoso — organizados como sistema reutilizável.',
  },
  overview: {
    title: 'Visão geral',
    paragraphs: [
      'Este Design System documenta o que já está em produção — não é um sistema paralelo nem uma proposta à espera de validação. Cada token, componente e decisão citados aqui existem hoje em henriquesilva.design.',
      'A documentação segue uma ordem de prioridade: o produto publicado manda; o código na branch main confirma como isso foi implementado; o arquivo de Design System no Figma registra a decisão e o raciocínio por trás dela. Quando as três fontes divergem, a divergência é registrada aqui como parte do sistema — não escondida.',
      'Esse processo existe porque consistência visual não se mantém sozinha. Ela depende de rastrear como uma decisão de design chega ao código, e de revisar com honestidade onde o sistema ainda tem lacunas.',
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
      divergenceNote: 'Um ponto real de atenção: --color-border-primary aponta hoje para #D7D7D7 no código, enquanto o Figma já consolidou o valor oficial de borda em #D9D9D9 (o mesmo de --color-border-subtle). A diferença é quase imperceptível (ΔE≈1), e a migração já está registrada como tarefa técnica no próprio Design System — não foi corrigida aqui.',
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
      intro: 'Uma única família (Inter Tight, dois pesos) e uma escala expressiva — a variação está no tamanho, não na variedade. Nenhum desses nomes existe como CSS variable no código: cada font-size é escrito localmente, por componente. A tabela mostra a especificação do Figma ao lado do que está de fato em produção.',
      columns: { figma: 'Figma', spec: 'Peso · line-height', usage: 'Uso em produção', token: 'Token no código' },
      tokenAbsent: '—',
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
      intro: 'Escala em múltiplos de 8 (4px como exceção mínima). Como a tipografia, não existe --space-* no código — os valores abaixo são o que a produção usa, lidos direto dos componentes.',
      columns: { figma: 'Figma', value: 'Valor', token: 'Token no código' },
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
      columns: { token: 'Token', value: 'Valor', usage: 'Uso' },
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
      'O sistema de cor tem duas camadas: primitivas (valores brutos, como --color-black) e tokens semânticos (papéis, como --color-text-primary). Componentes deveriam consumir só a camada semântica — é ela que muda de valor entre os temas; as primitivas continuam fixas.',
      'Light é o tema padrão. Dark ativa por um atributo data-theme="dark" na tag <html>, que redefine os mesmos nomes de token semântico com novos valores — nenhum componente precisa saber qual tema está ativo, ele só lê a variável.',
      'A preferência é salva em localStorage (chave portfolio-theme) e aplicada antes da primeira renderização, para evitar o flash de tema errado no carregamento.',
      'O Figma hoje documenta só a camada light — o dark theme e o próprio Theme Toggle foram implementados depois da última atualização da página de Design System no Figma. É uma lacuna real, não um erro de documentação.',
    ],
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
      columns: { pattern: 'Padrão', sizes: 'Tamanhos', states: 'Estados', usage: 'Onde aparece' },
      rows: [
        { pattern: 'Button', sizes: 'S 38px · M 48px · L 64px', states: 'Default, Hover, Focus, Disabled/Loading', usage: 'CTA do Hero, envio do formulário, CTA do Footer' },
        { pattern: 'Text Link', sizes: 'S/M/L — mesmas alturas do Button', states: 'Default, Hover', usage: 'Navegação, "Ver mais"' },
        { pattern: 'HyperLink', sizes: 'Altura única', states: 'Default, Hover', usage: 'Links externos (LinkedIn), target="_blank" + rel="noopener noreferrer"' },
      ],
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
  },

  responsive: {
    title: 'Comportamento responsivo',
    intro: 'A regra é recompor, não só encolher: em telas menores a composição muda de forma intencional — ordem, hierarquia e até conteúdo se ajustam. Não é a mesma tela com fontes menores.',
    columns: { section: 'Seção', desktop: 'Desktop', mobile: 'Mobile' },
    rows: [
      { section: 'Hero', desktop: 'Nome em Display/XXL sangrando à direita, foto sobreposta com parallax', mobile: 'Nome em escala própria (96px — não é uma redução do desktop), foto no fluxo normal, CTA em largura total' },
      { section: 'Projetos selecionados', desktop: 'Grid de 3 colunas', mobile: 'Scroll horizontal, com a ordem dos cards mudando (Gerdau · QI · EMR) — decisão de design, não acidente' },
      { section: 'Experiência', desktop: 'Composição horizontal, todos os cargos visíveis ao mesmo tempo', mobile: 'Accordion por empresa, um aberto por vez' },
      { section: 'Navegação', desktop: 'Logo + nav central + CTA', mobile: 'Logo + hambúrguer; painel full-screen com accordion' },
    ],
    breakpointsNote: 'Breakpoints reais do código: 768px (mobile ↔ tablet) e 1024px (tablet ↔ desktop).',
  },

  accessibility: {
    title: 'Acessibilidade',
    intro: 'Práticas verificáveis no código e no produto publicado — não uma auditoria formal de conformidade com WCAG.',
    items: [
      { label: 'Foco visível global', detail: ':focus-visible { outline: 2px solid #000; outline-offset: 3px }, aplicado a qualquer elemento focável, em qualquer tema.' },
      { label: 'Fluxo por teclado', detail: 'Tab percorre a Navbar na ordem visual; Escape fecha dropdown/menu; painéis fechados usam tabIndex -1 para não capturar foco invisível.' },
      { label: 'Contraste medido', detail: 'Preto sobre branco 21:1 (AAA) · cinza 600 sobre branco 4,9:1 (AA texto normal) · cinza 500 sobre branco 3,5:1 (só texto grande) · cinza 200 sobre preto 15:1 (AAA).' },
      { label: 'Motion reduzido', detail: 'prefers-reduced-motion zera todas as durações (0.01ms) globalmente; parallax e elementos flutuantes do Hero são desativados por completo.' },
      { label: 'Hierarquia de headings', detail: 'Um H1 por rota, sem pular níveis — inclusive nesta página.' },
      { label: 'Links externos', detail: 'target="_blank" sempre acompanhado de rel="noopener noreferrer".' },
      { label: 'Elementos decorativos', detail: 'Ícones e imagens puramente visuais usam aria-hidden="true" ou alt="".' },
    ],
  },
}
