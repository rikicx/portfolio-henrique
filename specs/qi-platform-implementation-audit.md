# Auditoria técnica — QI Platform

Data da auditoria: 2026-06-24  
Branch informada: `codex/qi-platform`  
Página local: `/trabalhos/qi-platform`  
Escopo: leitura de implementação atual, sem correções de JSX/CSS/assets.

## 0. Limitações da comparação com Figma

Os node IDs informados foram:

| Referência | Node |
|---|---:|
| QI Platform desktop | `335:957` |
| Gerdau Storeroom desktop | `295:539` |
| Gerdau Storeroom mobile | `447:1523` |

Não havia file key/URL do Figma nos arquivos locais lidos. As ferramentas MCP de Figma exigem `fileKey` além do `nodeId`, então a auditoria não reconsultou o Figma. A comparação abaixo registra diferenças verificáveis a partir do código, dos assets locais, das regras em `CLAUDE.md`, dos specs locais disponíveis e dos nomes/dimensões dos assets. Onde a correspondência visual exata dependeria do frame `335:957`, o relatório marca como "não confirmável sem Figma MCP".

## 1. Estrutura de arquivos

### Arquivos usados pela página

| Arquivo | Responsabilidade |
|---|---|
| `src/pages/cases/QiPlatformPage.jsx` | Implementa todo o conteúdo do case QI Platform, dados de metadados, perguntas, métricas, cards de outros projetos e componentes internos. |
| `src/pages/cases/QiPlatformPage.module.css` | Define todo o layout, tipografia, grid, responsividade, cards, quote blocks, placeholders e seção Outros Projetos do case. |
| `src/components/Layout.jsx` | Envolve a página com `Navbar`, `<main>` e `Footer`. |
| `src/components/Layout.module.css` | Aplica fundo preto, `main` branco, `overflow: hidden` e raio inferior antes do Footer. |
| `src/components/Navbar.jsx` | Header global, navegação principal, dropdown desktop, painel mobile e link da rota QI Platform. |
| `src/components/Navbar.module.css` | Estilos do header sticky, dropdown, menu mobile e estados. |
| `src/components/Footer.jsx` | Footer global usado após o conteúdo do case. |
| `src/components/Footer.module.css` | Estilos do footer, CTA, foto, links e responsividade. |
| `src/App.jsx` | Declara a rota `/trabalhos/qi-platform`. |
| `src/main.jsx` | Monta o app React e importa `src/styles/global.css`. |
| `src/styles/global.css` | Reset, tokens globais de cor, raio, layout, fonte e foco. |
| `package.json` | Scripts disponíveis: `dev`, `build`, `lint`, `typecheck`. |
| `CLAUDE.md` | Regras de fonte de verdade, Figma, responsividade, assets, footer, cases e validação. |
| `PORTFOLIO-CONTEXT.md` | Contexto editorial, papéis dos projetos e regras de tom/conteúdo. |
| `src/components/Projects.jsx` | Componente compartilhado de cards de projetos da Home; não é usado pelo QI, mas é a referência local do padrão mobile de cards citado por `CLAUDE.md`. |
| `src/components/Projects.module.css` | Define o padrão Home: cards 420x480 no desktop e rail horizontal 342x360 no mobile. |

### Specs locais relacionadas

Não existe spec local específica para QI Platform em `specs/`. Arquivos existentes no diretório:

| Spec | Relação com QI |
|---|---|
| `specs/about-page.md` | Não é específico do QI; contém regras Figma da página Sobre. |
| `specs/home-about.md` | Não é específico do QI; contém padrão Home. |
| `specs/home-experience.md` | Não é específico do QI; contém padrão Home/mobile. |
| `specs/home-skills.md` | Não é específico do QI; contém padrão Home. |

### Componentes reutilizados

| Componente | Origem | Uso na página |
|---|---|---|
| `Layout` | `src/components/Layout.jsx` | Wrapper global da página; injeta Navbar, main e Footer. |
| `Navbar` | `src/components/Navbar.jsx` | Indireto via `Layout`; contém link para QI Platform no dropdown de Trabalhos. |
| `Footer` | `src/components/Footer.jsx` | Indireto via `Layout`; aparece após o conteúdo arredondado branco. |
| `Link` | `react-router-dom` | Usado nos cards de Outros Projetos. |

### Componentes definidos dentro da página

| Componente | Função | Observações |
|---|---|---|
| `MetaValue` | Renderiza valores simples ou arrays de metadados em `.metaValue`. | Não recebe `className`; sempre usa layout vertical. |
| `QuoteBlock` | Renderiza citação com ícones `quote-open.png` e `quote-close.png`, label opcional e variação compacta. | Usa imagens decorativas com `alt=""` e `aria-hidden="true"`. |
| `MissingAssetFigure` | Placeholder visual para assets ausentes. | Renderiza um `div` cinza com `role="img"` e `aria-label="Asset não encontrado"`. |
| `ProjectCard` | Card de Outros Projetos com imagens absolutas, overlay e CTA. | Implementação local; não reutiliza `src/components/Projects.jsx`. |

## 2. Estrutura do JSX

### Ordem geral

1. `Layout`
2. `<article className={styles.page}>`
3. Hero
4. O problema
5. Citação principal
6. Antes de desenhar qualquer coisa
7. Citação compacta
8. Transformando perguntas em produto
9. Comparar sem expor
10. Meu papel como Head de Design
11. Uma plataforma em evolução
12. Impacto e Escala
13. Outros Projetos
14. Footer global via `Layout`

### Hero

| Item | Detalhe |
|---|---|
| Ordem | 1 |
| Classes | `.hero`, `.heroIntro`, `.heroTitle`, `.heroCopy`, `.heroKicker`, `.rule`, `.heroDetails`, `.figure`, `.heroFigure`, `.imageCover`, `.metaGrid`, `.metaItem`, `.metaLabel`, `.metaValue` |
| Assets | `QI-Platform-tablet.png` |
| Conteúdo | H1 `QI / Platform`; kicker `Benchmarking clínico · Estratégia de produto`; parágrafo introdutório; divisor; imagem tablet; metadados Empresa/Ano/Papel/Impacto/Escala/Atuação. |
| Desktop | Container 1440 com padding lateral 48; intro em grid 2 colunas; título à esquerda e copy à direita; divisor abaixo; detalhes em grid com imagem 461x639 e metadados em 12 colunas. |
| Mobile | Intro vira coluna; H1 36px; copy abaixo; imagem 244px de altura; metadados viram lista label/value em duas colunas pequenas. |
| Técnica | Grid desktop, flex mobile, imagem com `object-fit: cover`, altura fixa no container. |

### O problema

| Item | Detalhe |
|---|---|
| Ordem | 2 |
| Classes | `.problemSection`, `.bodyText` |
| Assets | Nenhum |
| Conteúdo | H2 `O problema` e três parágrafos sobre volume de dados, contexto clínico e anonimato. |
| Desktop | Grid 4fr/8fr, gap 48, padding-top 88. |
| Mobile | Flex column, gap 24, padding-top 72. |
| Técnica | Grid desktop, flex mobile, fluxo normal. |

### Citação principal

| Item | Detalhe |
|---|---|
| Ordem | 3 |
| Classes | `.quoteBlock`, `.quoteIcon`, `.quoteIconOpen`, `.quoteLabel`, `.quoteText`, `.quoteIconClose` |
| Assets | `quote-open.png`, `quote-close.png` |
| Conteúdo | Label `A pergunta que orientou o trabalho:`; pergunta longa sobre comparações claras, confiáveis e anônimas. |
| Desktop | `figure` com `position: relative`, margem superior 136, padding horizontal 96, ícones absolutos, texto 48px. |
| Mobile | Margem 56, padding 64px 24px 0, ícones 48x40, texto 36px. |
| Técnica | Fluxo normal com ícones em posição absoluta. |

### Antes de desenhar qualquer coisa

| Item | Detalhe |
|---|---|
| Ordem | 4 |
| Classes | `.storyGrid`, `.imageLeft`, `.storyFigure`, `.missingAsset`, `.bodyText` |
| Assets | Placeholder CSS, nenhum arquivo de imagem. |
| Conteúdo | H2 e três parágrafos sobre trabalho remoto, entrevistas e entendimento de leitura dos resultados. |
| Desktop | Grid 2 colunas com áreas `media title` e `media body`; placeholder à esquerda; título/corpo à direita. |
| Mobile | Ordem forçada: título, figura, texto; placeholder 192px. |
| Técnica | CSS Grid com `grid-template-areas`; flex column no mobile; placeholder com altura fixa. |

### Citação compacta

| Item | Detalhe |
|---|---|
| Ordem | 5 |
| Classes | `.quoteBlock`, `.quoteCompact`, `.quoteIcon`, `.quoteText` |
| Assets | `quote-open.png`, `quote-close.png` |
| Conteúdo | `Depois de encontrar uma diferença, o que você precisa entender?` |
| Desktop | Mesma estrutura da citação principal, mas `margin-top: 72px` e `padding-top: 96px`. |
| Mobile | Igual ao quote normal porque `.quoteBlock, .quoteCompact` compartilham regra. |
| Técnica | Fluxo normal com ícones absolutos. |

### Transformando perguntas em produto

| Item | Detalhe |
|---|---|
| Ordem | 6 |
| Classes | `.productSection`, `.productIntro`, `.questionGrid`, `.questionCard`, `.questionIcon`, `.productNote` |
| Assets | `my-evolution.svg`, `grupos-pref.svg`, `visao-rede.svg`, `investigacao.svg` |
| Conteúdo | H2, intro, 4 cards: Minha evolução, Grupos de referência, Visão da rede, Investigação; nota final com quebra de linha. |
| Desktop | Intro centralizada; grid de 4 colunas; cards 300px min-height, conteúdo centralizado. |
| Mobile | Intro alinhada à esquerda; grid 1 coluna; cards alinhados à esquerda, ícones 56px. |
| Técnica | Grid desktop/tablet, flex interno nos cards. |

### Comparar sem expor

| Item | Detalhe |
|---|---|
| Ordem | 7 |
| Classes | `.storyGrid`, `.imageLeft`, `.figure`, `.storyFigure`, `.imageCover`, `.caption`, `.bodyText` |
| Assets | `QI-mac-chartbars.png` |
| Conteúdo | H2, imagem de comparação entre grupos, legenda `Tela de comparação entre grupos`, parágrafo sobre filtros e anonimato. |
| Desktop | Imagem à esquerda, título/texto à direita. Container da imagem tem altura 466px via `.storyFigure .imageCover`. |
| Mobile | Título, imagem 192px, legenda, texto. |
| Técnica | Grid areas desktop; flex column mobile; `object-fit: cover`. |

### Meu papel como Head de Design

| Item | Detalhe |
|---|---|
| Ordem | 8 |
| Classes | `.storyGrid`, `.imageRight`, `.storyFigure`, `.missingAsset`, `.bodyText` |
| Assets | Placeholder CSS. |
| Conteúdo | H2 e três parágrafos sobre papel entre pesquisa, produto, especialistas e engenharia. |
| Desktop | Grid invertido: título/body à esquerda, placeholder à direita. |
| Mobile | Ordem igual às demais: título, placeholder, texto. |
| Técnica | `grid-template-areas` alternado por `.storyGrid.imageRight`. |

### Uma plataforma em evolução

| Item | Detalhe |
|---|---|
| Ordem | 9 |
| Classes | `.storyGrid`, `.imageLeft`, `.figure`, `.storyFigure`, `.imageCover`, `.caption`, `.bodyText` |
| Assets | `QI-laptop.png` |
| Conteúdo | H2, imagem laptop, legenda sobre síntese de atritos/oportunidades, três parágrafos. |
| Desktop | Imagem à esquerda; título/texto à direita. |
| Mobile | Título, imagem 192px, legenda, texto. |
| Técnica | Grid areas desktop; flex column mobile; `object-fit: cover`. |

### Impacto e Escala

| Item | Detalhe |
|---|---|
| Ordem | 10 |
| Classes | `.impactSection`, `.impactGrid`, `.statCard`, `.statWide`, `.statValue`, `.statLabel`, `.bodyText`, `.impactText` |
| Assets | Nenhum |
| Conteúdo | H2 `Impacto e Escala`; quatro métricas; dois parágrafos de fechamento. |
| Desktop | Grid 4 colunas; H2 ocupa 2 colunas; cards wide ocupam 2 colunas; texto centralizado abaixo. |
| Mobile | Flex column; cards empilhados; texto alinhado à esquerda. |
| Técnica | CSS Grid desktop; flex column mobile. |

### Outros Projetos

| Item | Detalhe |
|---|---|
| Ordem | 11 |
| Classes | `.otherProjects`, `.rule`, `.projectsGrid`, `.projectsColumn`, `.projectsColumnOffset`, `.projectCard`, `.projectLink`, `.projectImage`, `.projectOverlay`, `.projectContent`, `.projectText`, `.projectCategory`, `.projectTitle`, `.projectCta` |
| Assets | `itau-cover.jpg`, `card-emr-bg.png`, `card-emr-overlay.jpg`, `card-gerdau-storeroom.png`, `Captura de Tela 2026-06-16 às 00.14.57.png`, `Smartlog/cocriacao_ov_alocacao (1).jpeg` |
| Conteúdo | Título `Outros Projetos`; 5 cards em duas colunas: Itaú, EMR, Gerdau Storeroom, 3PH/HRCRS, Gerdau Smartlog. |
| Desktop | Grid 2 colunas, gap 64; segunda coluna com offset 120; cards 684px de altura. |
| Mobile | Colunas e grid viram flex column; offset removido; cards 360px; não vira rail horizontal. |
| Técnica | Grid desktop, flex mobile; imagens absolutas com overlay gradiente. |

## 3. Mapeamento completo de CSS da página

### Base e containers

| Seletor | Propriedades principais | Breakpoint | Elementos afetados | Dependências e riscos |
|---|---|---|---|---|
| `.page` | `background: white`, `color: black` | Sem alteração | `<article>` raiz | Depende dos tokens globais. |
| `.hero, .problemSection, .storyGrid, .productSection, .impactSection, .otherProjects` | `max-width: var(--max-width)`, `margin: 0 auto`, `padding-left/right: 48px` | Mobile: padding 24px | Todas as seções principais | Unifica margem; qualquer seção fora desse grupo precisa repetir regra. |
| `.figure` | `margin: 0` | Sem alteração | Figures de imagens/placeholders | Classe base combinada com `.heroFigure`/`.storyFigure`. |
| `.imageCover` | `width/height: 100%`, `object-fit: cover` | Sem alteração direta | Imagens hero/story/cards indiretas | Pode cortar telas/diagramas; `CLAUDE.md` diz que diagramas/fluxos não devem ser cropados quando escondem informação. |
| `.rule` | `height: 1px`, `margin-top: 64px`, `background: border` | Mobile: `margin-top: 40px` | Divisor hero e divisor Outros Projetos | `.otherProjects .rule` sobrescreve `margin-top` para 0 no desktop. |

### Hero, título, subtítulo, divisor, imagem inicial e metadados

| Seletor | Propriedades principais | Breakpoint | Elementos afetados | Dependências e riscos |
|---|---|---|---|---|
| `.hero` | `padding-top: 116px` | Mobile: 43px | Seção hero | Após Navbar sticky; sem compensação explícita da altura do header. |
| `.heroIntro` | Grid 2 colunas `repeat(2, 1fr)`, gap `clamp(64px, 6.67vw, 96px)`, `align-items: start` | Mobile: flex column, gap 24 | Título + coluna direita | Correção principal contra sobreposição: grid + gap + `max-width` no título/copy. Entre 769 e 1024 continua grid. |
| `.heroTitle` | `max-width: 608px`, `font-size: clamp(80px, 10.7vw, 154px)`, weight 500, `line-height: .96`, `letter-spacing: 0` | Mobile: 36px, line-height 1.15, max-width none | H1 `QI Platform` | Em 769-1439 o clamp pode gerar título muito grande dentro da coluna; risco médio de composição apertada em tablets landscape. |
| `.heroCopy` | `max-width: 584px`, `padding-top: clamp(72px, 9.72vw, 140px)`, font 18-20, weight 500 | Mobile: padding 0, font 14 | Kicker + texto | O padding-top é a propriedade que baixa a coluna direita no desktop. Pode divergir do Figma se o alinhamento for por coordenada fixa. |
| `.heroKicker` | `margin-bottom: 24px`, font 24-36, line 1.15 | Mobile: margin 12, font 20, line 1.45 | Subtítulo/kicker | No mobile o kicker fica visualmente mais alto que o corpo mas usa line-height de corpo. |
| `.heroDetails` | Grid `minmax(320px, 461px) minmax(0, 1fr)`, gap 56, padding-top 92 | Mobile: flex column, gap 32, padding-top 24 | Imagem inicial + metadata | Desktop fixa largura máxima da imagem em 461 e empurra metadados. |
| `.heroFigure` | `height: 639px`, `overflow: hidden`, radius 16, background surface | Mobile: `height: 244px`, radius 8 | Imagem tablet | Container 461x639 desktop dá proporção ~0,72; asset é 1122x1402 (~0,80). Há crop. Mobile 342x244 aprox. proporção ~1,40; crop severo de imagem vertical. |
| `.metaGrid` | Grid 12 colunas, gap 52x32 | Mobile: flex column, gap 8 | `<dl>` de metadados | Layout depende de nth-child; adicionar/reordenar item quebra spans. |
| `.metaItem` | `min-width: 0`; nth-child define spans | Mobile: grid `auto 1fr`, gap 12 | Cada par dt/dd | Uso de `nth-child` acopla layout à ordem do array. |
| `.metaItem:nth-child(1)` | `grid-column: span 4` | Desktop | Empresa | Acoplado à posição. |
| `.metaItem:nth-child(2)` | `grid-column: span 2` | Desktop | Ano | Acoplado à posição. |
| `.metaItem:nth-child(3)` | `grid-column: span 6` | Desktop | Papel | Acoplado à posição. |
| `.metaItem:nth-child(4..6)` | `grid-column: 1 / -1` | Desktop | Impacto, Escala, Atuação | Acoplado à posição. |
| `.metaLabel` | margin-bottom 8, font 20/500/1.45 | Mobile: bold 20, no margin | `dt` | Mobile adiciona dois-pontos via pseudo-elemento. |
| `.metaLabel::after` | `content: ":"` | Mobile | Labels metadata | Pontuação só aparece no mobile. |
| `.metaValue` | flex column, gap 2, font 36/500/1.15 | Mobile: gap 0, padding-top 3, font 16/400/1.5 | `dd` values | Texto longo de Atuação pode ficar muito grande no desktop; no mobile depende da primeira coluna `auto`. |

### Problema e body text

| Seletor | Propriedades principais | Breakpoint | Elementos afetados | Dependências e riscos |
|---|---|---|---|---|
| `.problemSection` | Grid 4fr/8fr, gap 48, padding-top 88 | Mobile: flex column, gap 24, padding-top 72 | Problema | Boa recomposição, mas sem ajuste intermediário 769-1024. |
| `.problemSection h2, .storyGrid h2, .productIntro h2` | font 48/500/1.1 | Mobile: junto com hero/outros, font 36/1.15 | H2s principais | `letter-spacing: 0`, diferente dos specs Home que usam tracking negativo em alguns títulos. |
| `.bodyText` | flex column, gap 29, font 20/500/1.45 | Mobile: gap 24, font 16/400/1.5 | Parágrafos narrativos | Gap 29 é valor incomum e fixo; peso muda de 500 para 400 no mobile. |

### Blocos de citação

| Seletor | Propriedades principais | Breakpoint | Elementos afetados | Dependências e riscos |
|---|---|---|---|---|
| `.quoteBlock` | `position: relative`, max-width 1440, margin 136 auto 0, padding 104 96 0 | Mobile: margin 56, padding 64 24 0 | Figure quote | Não usa padding lateral 48 como seções; usa 96 no desktop. |
| `.quoteCompact` | margin-top 72, padding-top 96 | Mobile: mesmas regras de `.quoteBlock` | Segunda citação | Perde diferença compacta no mobile. |
| `.quoteIcon` | absolute, 103x86, `object-fit: contain` | Mobile: 48x40 | Ícones quote | Absolute pode sobrepor texto se a citação crescer ou viewport intermediário apertar. |
| `.quoteIconOpen` | `top: 0`, `left: 96px` | Mobile: left 24 | Ícone abre | Depende do padding horizontal. |
| `.quoteIconClose` | `right: 96px`, `bottom: -6px` | Mobile: right 24, bottom -8 | Ícone fecha | Bottom negativo pode invadir seção seguinte. |
| `.quoteLabel` | margin-bottom 24, padding-left 57, font 24/400/1.25 | Mobile: padding 0, font 16/1.5 | Figcaption | Padding-left desktop alinha label depois do quote icon. |
| `.quoteText` | max-width 1244, margin auto, font 48/500/1.1 | Mobile: font 36/1.15 | Blockquote | Texto longo em 390px fica muito grande; risco de quebras agressivas. |

### Seções alternadas e placeholders

| Seletor | Propriedades principais | Breakpoint | Elementos afetados | Dependências e riscos |
|---|---|---|---|---|
| `.storyGrid` | Grid 2 colunas; areas `"media title" "media body"`, gap 24x48, padding-top 128 | Mobile: flex column, gap 24, padding-top 72 | Seções alternadas | Sem breakpoint tablet; grids continuam até 769px. |
| `.imageLeft` | Define custom property `--story-image-side: left` | Sem uso prático | Sections imageLeft | A variável não é consumida; classe só funciona como marcador. |
| `.storyGrid.imageRight` | Areas `"title media" "body media"` | Mobile: flex column | Seção Meu papel | Alternância depende da classe composta. |
| `.storyGrid h2` | `grid-area: title` | Mobile: `order: 1` | H2s story | Ordem mobile explícita. |
| `.storyGrid .bodyText` | `grid-area: body` | Mobile: `order: 3` | Texto story | Acoplado a `.bodyText` dentro de `.storyGrid`. |
| `.storyFigure` | `grid-area: media`; depois `display:flex`, column, gap 12 | Mobile: `order: 2`, gap 8 | Figures e placeholders | Seletor duplicado em duas declarações separadas. |
| `.storyFigure .imageCover, .missingAsset` | height 466, overflow hidden, radius 16, background surface | Mobile: height 192, radius 8 | Imagens story + placeholders | Altura fixa e `object-fit: cover` podem cortar telas. |
| `.missingAsset` | width 100%, border 1px rgba preto 0.08 | Sem alteração extra | Placeholder CSS | Pode passar despercebido como bloco intencional cinza. |
| `.caption` | max-width 560, margin auto, muted, font 14/500/1.45, center | Mobile: width 100%, font 14 | Legendas | Centralização em desktop e mobile; não há margem superior própria além do gap da figure. |

### Produto, cards de perguntas e nota

| Seletor | Propriedades principais | Breakpoint | Elementos afetados | Dependências e riscos |
|---|---|---|---|---|
| `.productSection` | padding-top 104 | Mobile: 72 | Seção perguntas | Separação distinta das story sections. |
| `.productIntro` | max-width 961, margin auto, center | Mobile: text-align left | Intro produto | Central no desktop. |
| `.productIntro p` | margin-top 32, font 20/500/1.45 | Mobile: margin 24 e herda regra com `.bodyText` | Parágrafo intro | Selector combinado mobile muda peso para 400. |
| `.questionGrid` | Grid 4 colunas, gap 24, margin-top 40 | <=1024: 2 colunas; mobile: 1 coluna, gap 16, margin 24 | Cards de perguntas | Tem breakpoint intermediário só para grid, não para tipografia. |
| `.questionCard` | min-height 300, flex column, center, gap 24, padding 48 30, radius 16, surface, center | Mobile: min-height 0, align left, padding 24, text left | Cards | Sem link/button; cards são artigos estáticos. |
| `.questionIcon` | 88x88, object-fit contain | Mobile: 56x56 | Ícones SVG | SVGs têm viewBox pequeno; escala aumenta linhas finas. |
| `.questionCard h3` | margin-bottom 8, font 24/400/1.25 | Sem alteração | Títulos cards | Desktop e mobile iguais. |
| `.questionCard p` | font 16/400/1.5 | Sem alteração | Textos cards | Pode ficar pequeno em card desktop grande. |
| `.productNote` | max-width 888, margin 40 auto 0, font 24/400/1.25, center | Mobile: margin 32, mesmo font, center | Nota final | Usa `<br />` manual; pode criar quebra inadequada em larguras intermediárias. |

### Impacto

| Seletor | Propriedades principais | Breakpoint | Elementos afetados | Dependências e riscos |
|---|---|---|---|---|
| `.impactSection` | padding-top 80, padding-bottom 120 | Mobile: 72/72 | Seção impacto | Define distância antes de Outros Projetos. |
| `.impactGrid` | Grid 4 colunas, gap 24, stretch | Mobile: flex column, gap 12 | H2 + cards | `statWide` depende de grid; no mobile regra conjunta remove efeito. |
| `.impactGrid h2` | span 2, align center, padding-left 66, font 72/500/1 | Mobile: padding 0, margin-bottom 4 | Título impacto | Padding-left desktop é offset fixo. |
| `.statCard` | min-height 128, flex column, gap 8, padding 24, radius 16, surface | Mobile: min-height 0, padding 16 | Cards métricas | Sem border/semântica especial; apenas `<article>`. |
| `.statWide` | `grid-column: span 2` | Mobile: tratado junto com `.statCard` | Métricas wide | Só funciona no grid. |
| `.statValue` | font 48/500/1.1 | Mobile: 24/1.25 | Valor | `4 Países` mistura número/texto no valor. |
| `.statLabel` | font 20/500/1.45 | Mobile: 14/1.45 | Label | Peso 500 mantido no mobile. |
| `.impactText` | margin-top 40, text-align center | Mobile: margin 24, left | Texto final | Classe combinada com `.bodyText`. |

### Outros Projetos e transição para Footer

| Seletor | Propriedades principais | Breakpoint | Elementos afetados | Dependências e riscos |
|---|---|---|---|---|
| `.otherProjects` | padding-bottom 176 | Mobile: 96 | Última seção antes do Footer | Junto com `.main` arredondado controla transição para Footer. |
| `.otherProjects .rule` | margin-top 0 | Sem alteração | Divisor interno | Sobrescreve `.rule`. |
| `.otherProjects h2` | margin-top 0, padding `10px 0 10px 1px`, font 96/500/1 | Mobile: padding 0, margin-top 24, font 36 | Título Outros Projetos | Desktop não usa offset negativo como `Projects.module.css`; pode diferir da Home/Figma. |
| `.projectsGrid` | Grid 2 colunas, gap 64, margin-top 18 | <=1024: gap 32; mobile: flex column, gap 16, margin 24 | Wrapper cards | No mobile não segue rail horizontal do componente Home. |
| `.projectsColumn` | flex column, gap 64 | Mobile: gap 16, padding-top 0 | Colunas | Duas colunas viram duas pilhas consecutivas. |
| `.projectsColumnOffset` | padding-top 120 | Mobile: padding 0 | Segunda coluna | Offset desktop cria composição masonry. |
| `.projectCard, .projectLink` | height 684 | Mobile: height 360 | Cards outros | Altura desktop fixa; mobile igual ao card Home em altura, mas largura é fluida. |
| `.projectCard` | overflow hidden, radius 16, placeholder bg | Sem mobile radius override | `<article>` card | Radius fica 16 no mobile, enquanto várias imagens mobile usam 8. |
| `.projectLink` | position relative, block, white text | Sem alteração | Link inteiro | Área clicável total. |
| `.projectImage, .projectOverlay` | position absolute, inset 0 | Sem alteração | Mídia e overlay | Empilhamento depende da ordem DOM. |
| `.projectImage` | width/height 100, max-width none, object-fit cover | Sem alteração | Imagens cards | EMR usa duas imagens absolutas com mesma classe, sem posicionamento específico para overlay. |
| `.projectOverlay` | gradient transparente 3% para rgba preto .75 | Sem alteração | Overlay | Igual ao padrão Home. |
| `.projectContent` | absolute right/bottom/left 32/33/32, flex column gap 24 | Mobile: 24/24/24, gap 16 | Textos do card | Pode cobrir áreas importantes de imagem. |
| `.projectText` | flex column gap 12 | Mobile: gap 8 | Categoria + título | Sem max-width. |
| `.projectCategory, .projectCta` | font 24/500/1.25 | Mobile: 14 | Categoria e CTA | Categoria desktop maior que padrão Home. |
| `.projectTitle` | font 48/500/1.1 | Mobile: 24/400/1.25 | Título card | Desktop muito maior que padrão Home 36. |
| `.projectCta` | inline-flex gap 10 | Sem gap mobile específico | CTA | Usa seta textual. |

### CSS do Layout relevante para a página

| Seletor | Propriedades principais | Impacto no QI |
|---|---|---|
| `Layout.module.css .pageBackground` | `background: black` | Cria fundo preto atrás do Footer e atrás do raio inferior do main. |
| `Layout.module.css .main` | `position: relative`, `z-index: 1`, `overflow: hidden`, `background: white`, `border-radius: 0 0 64px 64px` | Controla transição para Footer; `overflow: hidden` pode cortar conteúdo que ultrapasse horizontalmente/verticalmente. |
| `Layout.module.css @media <=768 .main` | raio inferior 32px | Footer mobile fica atrás de main arredondado menor. |

## 4. Assets

### Assets importados direta ou indiretamente pela página

| Arquivo | Caminho | Tipo/dimensões | Seção | Alt/legenda/title | Proporção usada desktop | Proporção usada mobile | Correspondência ao Figma | Observação |
|---|---|---:|---|---|---|---|---|---|
| `QI-Platform-tablet.png` | `src/media/QI-Platform-tablet.png` | PNG 1122x1402 | Hero | Alt: `Tela do QI Platform em um tablet` | Container ~461x639, cover; ratio ~0,72 | Container ~342x244, cover; ratio ~1,40 | Não confirmável sem frame `335:957` | Mobile corta drasticamente imagem vertical. |
| `QI-mac-chartbars.png` | `src/media/QI-mac-chartbars.png` | PNG 1448x1086 | Comparar sem expor | Alt e legenda `Tela de comparação entre grupos` | Container largura coluna x 466, cover | Largura útil x 192, cover | Provável asset QI correto | Pode cortar notebook/diagrama por altura fixa. |
| `QI-laptop.png` | `src/media/QI-laptop.png` | PNG 1240x1199 | Uma plataforma em evolução | Alt: `Tela do QI Platform em um laptop`; legenda sobre cocriação | Container largura coluna x 466, cover | Largura útil x 192, cover | Provável asset QI correto | Mesmo conteúdo de `card-qi-platform.png`. |
| `my-evolution.svg` | `src/media/my-evolution.svg` | SVG viewBox 29.48x22.08 | Card pergunta | Decorativo `alt=""` | Render 88x88 | Render 56x56 | Não confirmável sem Figma | Versão PNG local também existe. |
| `grupos-pref.svg` | `src/media/grupos-pref.svg` | SVG viewBox 29.31x31.59 | Card pergunta | Decorativo `alt=""` | 88x88 | 56x56 | Não confirmável sem Figma | Versão PNG local também existe. |
| `visao-rede.svg` | `src/media/visao-rede.svg` | SVG viewBox 25.18x29.04 | Card pergunta | Decorativo `alt=""` | 88x88 | 56x56 | Não confirmável sem Figma | Versão PNG local também existe. |
| `investigacao.svg` | `src/media/investigacao.svg` | SVG viewBox 28.29x26.15 | Card pergunta | Decorativo `alt=""` | 88x88 | 56x56 | Não confirmável sem Figma | Versão PNG local também existe. |
| `quote-open.png` | `src/media/quote-open.png` | PNG 206x172 | Citações | Decorativo `alt=""` | 103x86 absolute | 48x40 absolute | Provável asset correto | Usado em todos os quote blocks. |
| `quote-close.png` | `src/media/quote-close.png` | PNG 206x172 | Citações | Decorativo `alt=""` | 103x86 absolute | 48x40 absolute | Provável asset correto | Bottom negativo. |
| `itau-cover.jpg` | `src/media/itau-cover.jpg` | JPG 1440x749 | Outros Projetos | Alt: `Itaú Empreendedor` | Card 684px height, cover | Card 360px, cover | Não é QI | Categoria em inglês: `Finances`. |
| `card-emr-bg.png` | `src/media/card-emr-bg.png` | PNG 256x256 | Outros Projetos | Alt: `EMR Integration` | Cover absoluto | Cover absoluto | Não é QI | Base tile/texture baixa resolução. |
| `card-emr-overlay.jpg` | `src/media/card-emr-overlay.jpg` | JPG 4096x2160 | Outros Projetos | Alt vazio; `aria-hidden` quando índice > 0 | Cover absoluto sobre bg | Cover absoluto sobre bg | Não é QI | Empilha duas imagens com mesma classe. |
| `card-gerdau-storeroom.png` | `src/media/card-gerdau-storeroom.png` | JPEG 1484x858 apesar da extensão `.png` | Outros Projetos | Alt: `Gerdau Storeroom` | Cover | Cover | Não é QI | Extensão não corresponde ao conteúdo real. |
| `Captura de Tela 2026-06-16 às 00.14.57.png` | `src/media/Captura de Tela 2026-06-16 às 00.14.57.png` | PNG 2090x1438 | Outros Projetos | Alt: `3PH Alliance & HRCRS Digital Ecosystem` | Cover | Cover | Não é QI | Nome de arquivo frágil, com espaços e acentos. |
| `cocriacao_ov_alocacao (1).jpeg` | `src/media/Smartlog/cocriacao_ov_alocacao (1).jpeg` | JPG 1024x768 | Outros Projetos | Alt: `Gerdau Smartlog` | Cover | Cover | Não é QI | Nome com espaço e parênteses. |
| `HSD-LOGO.svg` | `src/media/HSD-LOGO.svg` | SVG | Navbar | `alt=""`, `aria-hidden` | Logo 54px height | 29x47 | Global | Indireto via Layout. |
| `henrique-footer.png` | `src/media/henrique-footer.png` | PNG 1254x1254 | Footer | Alt: `Foto de Henrique M. Silva` | Foto 159x159 | Foto 96x96 | Global | Indireto via Layout. |

### Placeholders atuais

| Onde aparece | Implementação | Asset Figma que deveria representar | Candidato local não usado | Observação |
|---|---|---|---|---|
| `Antes de desenhar qualquer coisa` | `MissingAssetFigure` com `.missingAsset` cinza | Não identificável sem frame `335:957` | Nenhum candidato claro; `qi.png` e `card-qi-platform.png` são telas de laptop, não sessão remota/pesquisa. | Placeholder pode ser confundido com bloco cinza intencional. |
| `Meu papel como Head de Design` | `MissingAssetFigure` com `.missingAsset` cinza | Não identificável sem frame `335:957` | Nenhum candidato claro. | Placeholder não tem legenda indicando falta editorial. |

### Candidatos locais não utilizados

| Arquivo | Tipo/dimensões | Relação provável | Status |
|---|---:|---|---|
| `src/media/card-qi-platform.png` | PNG 1240x1199 | Visualmente idêntico a `QI-laptop.png`; usado pela Home via `Projects.jsx`, não pelo case QI. | Duplicado/candidato para card, não resolve placeholders. |
| `src/media/qi.png` | PNG 442x540 | Versão menor/cortada do laptop QI. | Não usado; pode ser derivado antigo. |
| `src/media/my-evolution.png` | PNG 105x80 | Versão raster do ícone Minha evolução. | Não usado; SVG atual é preferível se for fiel. |
| `src/media/grupos-pref.png` | PNG 80x88 | Versão raster do ícone Grupos. | Não usado. |
| `src/media/visao-rede.png` | PNG 80x93 | Versão raster do ícone Visão da rede. | Não usado. |
| `src/media/investigacao.png` | PNG 120x120 | Versão raster do ícone Investigação. | Não usado. |

## 5. Diferenças em relação ao Figma QI Platform desktop `335:957`

Sem acesso ao frame por MCP nesta auditoria, as diferenças abaixo são objetivas a partir da implementação atual e das regras locais.

### Layout

| Área | Diferença/risco observável |
|---|---|
| Hero | Implementação usa grid fluido de duas colunas e `clamp()` para título/copy. Se o Figma usa posições absolutas ou dimensões fixas do frame, a composição pode não bater exatamente. |
| Hero details | Imagem hero é limitada a 461px de largura e 639px de altura; metadados ocupam o restante em grid 12 colunas. Sem Figma não dá para confirmar se imagem/metadados começam na mesma coordenada. |
| Seções alternadas | A implementação padroniza todas as seções em grid 50/50 com altura de imagem 466px. Se o Figma tem proporções específicas por asset, houve simplificação. |
| Outros Projetos | Implementação cria composição masonry local com duas colunas e offset 120px. Pode diferir da seleção/ordem/tamanho do desktop Figma do case. |
| Footer transition | A transição é controlada por `Layout.main` com raio inferior 64px e `overflow: hidden`; se o Figma do case tinha espaço específico antes do footer, a página atual depende de `.otherProjects { padding-bottom: 176px }`. |

### Tipografia

| Área | Diferença/risco observável |
|---|---|
| Título `QI Platform` | Usa `font-size: clamp(80px, 10.7vw, 154px)`, `line-height: .96`, `letter-spacing: 0`. Vários specs locais da Home usam letter-spacing negativo para displays; aqui não. |
| H2s | Usam 48px desktop e 36px mobile com `letter-spacing: 0`. Pode divergir dos tokens Figma se o frame usa tracking negativo. |
| Body | Desktop usa 20px Medium; mobile vira 16px Regular. A mudança pode ser correta, mas não foi confirmada contra Gerdau mobile. |
| Outros Projetos | Título dos cards desktop usa 48px, maior que o padrão Home (`Projects.module.css`) de 36px. |

### Espaçamento e proporção

| Área | Diferença/risco observável |
|---|---|
| Hero | `padding-top: 116px`, `rule margin-top: 64px`, `heroDetails padding-top: 92px`; valores atuais parecem correção manual para evitar sobreposição, mas podem não seguir coordenadas do frame. |
| Story sections | `padding-top: 128px` uniforme; mobile 72px uniforme. Se Figma alternava respiros por seção, foi normalizado. |
| Product cards | Cards têm min-height 300, grid 4 colunas; sem confirmação se Figma usava dimensões/ícones nesse tamanho. |
| Impacto | H2 com `padding-left: 66px` é offset fixo e pode ter sido inventado para compor o grid. |
| Outros Projetos | Desktop cards 684px de altura; padrão Home usa 480px. Sem frame do case, não dá para confirmar se esse aumento é fiel. |

### Conteúdo, ordem e elementos

| Item | Situação |
|---|---|
| Seções ausentes | Há dois placeholders explícitos, indicando assets/seções visuais incompletos. Sem Figma não é possível nomear os assets ausentes. |
| Conteúdo alterado | Não há spec QI local para comparar texto. Conteúdo atual foi introduzido no JSX modificado. |
| Elementos adicionados | `MissingAssetFigure` adiciona blocos cinza com aria-label `Asset não encontrado`; isso não deveria permanecer em versão final se o Figma tem asset real. |
| Ordem diferente | A ordem é narrativa linear; sem frame QI não dá para validar se corresponde ao desktop. |
| Simplificação | Seções alternadas foram reduzidas a um mesmo componente visual (`storyGrid`) com imagens fixas ou placeholders. |

## 6. Diagnóstico do mobile contra template Gerdau Storeroom `447:1523`

O `CLAUDE.md` define que cases sem frame mobile próprio devem usar o mobile do Gerdau Storeroom como referência para tokens, margens, tipografia, regras de empilhamento, seção Outros Projetos e Footer. A implementação atual usa alguns padrões comuns, mas inventa outros.

### Onde segue o template/regras locais

| Aspecto | Evidência |
|---|---|
| Margens laterais | Todas as seções principais passam para 24px em `@media (max-width: 768px)`, conforme regra recorrente. |
| Títulos mobile | H1/H2s principais passam para 36px, próximo aos specs Home e regras de `CLAUDE.md`. |
| Empilhamento de colunas | Hero, problema, story sections, impacto e projetos viram coluna única. |
| Radius de imagens principais | Hero/story images usam `var(--radius-8)` no mobile. |
| Footer global | Usa o mesmo Footer reutilizável, conforme regra de não criar variações por página. |

### Onde se afasta do template ou foi inventado

| Aspecto | Diagnóstico |
|---|---|
| Hero image | Container mobile 244px de altura para asset vertical de tablet; isso não preserva proporção adequada e contraria a regra de não forçar imagens hero de cases a crops genéricos. |
| Imagens de telas/diagramas | Story images têm 192px fixos e `object-fit: cover`, podendo esconder interface. `CLAUDE.md` diz que diagramas/fluxos/mapas devem aparecer completos. |
| Metadados | A implementação cria lista label/value com label bold 20px e value 16px. Sem frame Gerdau não dá para confirmar se o template usa esse tratamento. |
| Citações | Texto de citação mobile permanece 36px, muito grande para perguntas longas; pode ser uma extrapolação do desktop. |
| Cards de perguntas | São cards verticais estáticos empilhados. Como a estrutura não existe no template citado, o comportamento foi inventado a partir do desktop. |
| Outros Projetos | Não reutiliza o padrão Home mobile de rail horizontal. `Projects.module.css` define slider horizontal 342x360; QI empilha todos os cards verticalmente. |
| Categorias | Mistura idiomas: `Finances`, `Industry`, `Saúde`. Isso afeta consistência editorial no mobile e desktop. |

### Possíveis quebras entre 390px e 768px

| Área | Risco |
|---|---|
| Hero title/copy | A troca para mobile só ocorre em 768px. Em 769px ainda há grid desktop com título clampado e copy com padding-top grande. |
| Hero image | Entre 390 e 768, altura fixa 244px com largura crescente cria crops progressivamente diferentes. |
| Metadados | Grid mobile `auto 1fr` pode deixar labels longos comprimindo valores, especialmente `Impacto Medido`. |
| Quote text | 36px em perguntas longas pode gerar muitas linhas e empurrar ícone de fechamento. |
| Product note | `<br />` manual pode criar quebra estranha em larguras maiores que 390. |
| Outros Projetos | Cards têm largura fluida e altura fixa 360; de 390 a 768 ficam cada vez mais panorâmicos sem ajuste de altura. |

## 7. Diagnóstico visual do início da página

### Como o hero foi corrigido para evitar sobreposição

A implementação evita sobreposição do início da página com:

| Classe/propriedade | Função |
|---|---|
| `.heroIntro { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: clamp(64px, 6.67vw, 96px); }` | Separa título e copy em colunas independentes com gap fluido. |
| `.heroTitle { max-width: 608px; font-size: clamp(80px, 10.7vw, 154px); line-height: .96; }` | Limita largura e escala do título no desktop. |
| `.heroCopy { max-width: 584px; padding-top: clamp(72px, 9.72vw, 140px); }` | Desce a coluna direita para não competir verticalmente com o topo do título. |
| `.rule { margin-top: 64px; }` | Cria separação entre intro e divisor. |
| `.heroDetails { padding-top: 92px; grid-template-columns: minmax(320px, 461px) minmax(0, 1fr); gap: 56px; }` | Cria separação depois do divisor e evita que imagem/metadados encostem. |

### Diferenças e riscos restantes

| Ponto | Diagnóstico |
|---|---|
| Composição vs Figma | Não confirmável sem frame `335:957`; a implementação é responsiva por grid/clamp, não por coordenadas exatas do frame. |
| Espaço vertical | O início tem `116 + altura do título/copy + 64 + 92` antes de imagem/metadados. Pode haver excesso vertical se o Figma era mais compacto. |
| Posição da imagem/metadados | Começam depois de `rule + 92px`; sem Figma não dá para afirmar se é a coordenada correta. |
| 769px-1439px | Não há breakpoint intermediário para hero. Em 769-1024, grid desktop permanece ativo, título mínimo 80px e copy com padding-top mínimo 72px; risco de composição apertada. |
| Mobile | Em <=768, hero fica legível, mas imagem vertical vira crop horizontal. |

## 8. Riscos técnicos

| Categoria | Risco |
|---|---|
| CSS frágil | Metadados usam `nth-child`; reordenar `metaItems` muda layout sem aviso. |
| Valores fixos | Alturas fixas: hero 639/244, story 466/192, project cards 684/360, stat min-height 128, offsets 66/120/92/116. |
| Overflows/clipping | `Layout.main { overflow: hidden }` pode ocultar conteúdo absoluto ou imagens largas; `quoteIconClose` usa bottom negativo. |
| Breakpoints | Só há mudanças relevantes em 1024 para perguntas/projetos e 768 para quase tudo; tablet entre 769-1024 mantém hero/story desktop. |
| Acessibilidade | Ícones de cards têm `alt=""`, aceitável se decorativos; `MissingAssetFigure` expõe `Asset não encontrado` ao leitor de tela, o que revela estado interno. |
| Acessibilidade | Footer tem link LinkedIn para `https://linkedin.com/in/`, diferente do Navbar (`/in/henriquemsilva`). |
| Performance | Muitas imagens grandes são importadas direto; não há lazy loading nos cards nem imagens responsivas. |
| Performance | `card-emr-overlay.jpg` tem 4096x2160 e é carregado em card. |
| Duplicação | `ProjectCard` local duplica o padrão de `src/components/Projects.jsx`; `QI-laptop.png` duplica visualmente `card-qi-platform.png`. |
| Classes sem uso real | `.imageLeft` só define `--story-image-side`, variável não consumida. |
| Imports/props | `MissingAssetFigure` aceita `caption`, mas chamadas atuais não passam caption. |
| Placeholders | Dois placeholders cinza podem passar como design intencional. |
| Conteúdo inconsistente | Categorias de Outros Projetos misturam português e inglês: `Finances`, `Industry`, `Saúde`. |
| Semântica | `ProjectCard` usa spans para conteúdo textual interno; funcional, mas menos semântico que heading/paragraph dentro do link. |
| Symlink temporário | `node_modules` é symlink não rastreado para `../portfolio-henrique/node_modules`; validações dependem desse caminho externo ao repositório. |

## 9. Validação atual

Não rodei `npm run typecheck`, `npm run lint` ou `npm run build`, conforme restrição da auditoria. Procurei registros locais de resultados anteriores e não encontrei logs/specs com resultados desses comandos.

| Comando | Último resultado conhecido | Observação |
|---|---|---|
| `npm run typecheck` | Não disponível localmente | Script existe em `package.json` como `tsc`. |
| `npm run lint` | Não disponível localmente | Script existe como `eslint src`. |
| `npm run build` | Não disponível localmente | Script existe como `vite build`. |

Limitação: o `rg` por registros de validação encontrou apenas as regras de `CLAUDE.md` e scripts em `package.json`; não havia arquivo de log de validação no nível inspecionado.

## 10. Estado do repositório

### `git status --short` no início da auditoria

```text
 M src/pages/cases/QiPlatformPage.jsx
?? node_modules
?? src/pages/cases/QiPlatformPage.module.css
```

### Arquivos alterados/não rastreados antes do relatório

| Status | Caminho | Observação |
|---|---|---|
| Modificado | `src/pages/cases/QiPlatformPage.jsx` | Implementação atual do QI Platform substitui a página mínima anterior. |
| Não rastreado | `src/pages/cases/QiPlatformPage.module.css` | CSS completo da página QI Platform. |
| Não rastreado | `node_modules` | Symlink para `../portfolio-henrique/node_modules`. |

### Symlink `node_modules`

```text
node_modules -> ../portfolio-henrique/node_modules
```

### Confirmação de alterações feitas nesta auditoria

Nenhum arquivo de JSX, CSS, asset, rota ou componente foi modificado durante a auditoria. A única alteração prevista por esta etapa é a criação deste relatório:

```text
specs/qi-platform-implementation-audit.md
```

## 11. Arquivos inspecionados

Total considerado: 41 arquivos, incluindo código, CSS, specs/regras locais e assets importados/candidatos.

### Código, CSS e documentação

1. `src/pages/cases/QiPlatformPage.jsx`
2. `src/pages/cases/QiPlatformPage.module.css`
3. `src/components/Layout.jsx`
4. `src/components/Layout.module.css`
5. `src/components/Navbar.jsx`
6. `src/components/Navbar.module.css`
7. `src/components/Footer.jsx`
8. `src/components/Footer.module.css`
9. `src/App.jsx`
10. `src/main.jsx`
11. `src/styles/global.css`
12. `src/components/Projects.jsx`
13. `src/components/Projects.module.css`
14. `CLAUDE.md`
15. `PORTFOLIO-CONTEXT.md`
16. `package.json`
17. `specs/about-page.md`
18. `specs/home-experience.md`

### Assets importados e candidatos

19. `src/media/QI-Platform-tablet.png`
20. `src/media/QI-mac-chartbars.png`
21. `src/media/QI-laptop.png`
22. `src/media/my-evolution.svg`
23. `src/media/grupos-pref.svg`
24. `src/media/visao-rede.svg`
25. `src/media/investigacao.svg`
26. `src/media/quote-open.png`
27. `src/media/quote-close.png`
28. `src/media/itau-cover.jpg`
29. `src/media/card-gerdau-storeroom.png`
30. `src/media/card-emr-bg.png`
31. `src/media/card-emr-overlay.jpg`
32. `src/media/Captura de Tela 2026-06-16 às 00.14.57.png`
33. `src/media/Smartlog/cocriacao_ov_alocacao (1).jpeg`
34. `src/media/HSD-LOGO.svg`
35. `src/media/henrique-footer.png`
36. `src/media/card-qi-platform.png`
37. `src/media/qi.png`
38. `src/media/my-evolution.png`
39. `src/media/grupos-pref.png`
40. `src/media/visao-rede.png`
41. `src/media/investigacao.png`
