# Especificação: Sobre mim — AboutPage

## Referências Figma
- Frame desktop: `375:343` — "Desktop / About-me" — 1440 × 4927 px (página `02 - Desktop`)
- Frame mobile: `439:3401` — "Mobile / About-me" — 390 px de largura
- Arquivo: `vioGrjQQ89aQbcA0cd2Ios`

## Contexto de implementação
Arquivo: `src/pages/AboutPage.jsx` / rota `/sobre`. Navbar, Footer, menus e Layout global já implementados. A AboutPage contém apenas o conteúdo entre Navbar e Footer. Arredondamento inferior aplicado globalmente pelo Layout — não reimplementar.

## Seções (em ordem visual)

### 1. Hero
**Desktop** — duas colunas (texto esquerda, foto direita):
- Foto retrato (imgRectangle37): w 607px, h 616px, top 142px, left `calc(50% + 65px)`, sem border-radius
- Título: `"Design é a forma como eu entendo e transformo problemas."` — 72px/1.0, tracking -0.72px, left 94px, top 229px, w 724px
- Barra decorativa preta 3px: left 93px, top 445px, w 702px (separador visual entre título e parágrafo)
- Descrição: `"Os papéis mudaram ao longo da minha carreira, mas meu ponto de partida permaneceu o mesmo: compreender contextos, organizar complexidade e construir soluções que façam sentido para as pessoas e para o negócio."` — 20px/1.45, left 94px, top 472px, w 705px
- Divisor 1px preto: left 48px, right 48px, top 758px

**Mobile** — empilhado, centralizado:
- Título: 36px/1.15, tracking -0.54px, centralizado, w 350px, top 137px
- Foto: w 307px, h 252px, centralizada, top 271px
- Linha 1px: left 24px, w 342px, top 523px
- Descrição: 14px/1.45, centralizada, w 338px, top 533px

### 2. Carreira
**Conteúdo:**
- Subtítulo: `"Minha carreira cresceu ao redor do Design, não para longe dele."` — 48px/1.1, tracking -1.44px
- Texto: `"A liderança apareceu quando comecei a assumir responsabilidades além da minha própria entrega: apoiar outros designers, conectar áreas, organizar decisões e criar condições para que equipes trabalhassem melhor. / Isso ampliou meu campo de atuação sem me afastar do Design."` — 20px/1.45
- Três empresas (timeline):

| Empresa | Cargo | Texto |
|---------|-------|-------|
| 3PH Alliance | Product Designer Specialist → Head of Design | Entrei como designer e assumi a liderança de Design durante o crescimento da empresa, mantendo participação em discovery, estratégia, direção de produto e desenvolvimento da equipe. |
| Sciensa | Product Designer Specialist → Head of Design | Atuei diretamente em projetos e, depois, passei a liderar a disciplina de Design em oito squads, apoiando profissionais e fortalecendo a prática dentro da consultoria. |
| Netfarma | Designer → Coordenação de Design | Comecei desenhando produtos e experiências e, mais tarde, passei a coordenar a equipe e participar de decisões mais amplas sobre o negócio digital.|

- Pullquote: `"O que aumentou foi a dimensão da responsabilidade, não a distância da prática."` — 72px/1.0, tracking -0.72px

**Desktop** — timeline com eixo central vertical:
- Subtítulo e texto introdutório: coluna direita (left ≈ `calc(50% + 116px)`, w 850–1116px)
- Eixo vertical ao centro (left 50%) com imgLine5 (linhas tracejadas de 160px h, rotated -90deg)
- Marcadores: diamante externo border 1px (24px rotado 45°) + diamante interno sólido (8px)
- Ordem visual: 3PH direita (top 1097px), Sciensa esquerda (top 1323px), Netfarma direita (top 1549px)
- Por empresa: nome 36px/1.15 tracking -0.54px, cargo 20px/1.45, descrição 20px/1.45, w 560px
- Pullquote centralizado, w 1012px, top 1794px

**Mobile** — lista vertical, eixo lateral esquerdo:
- Subtítulo: 36px/1.15, centralizado, w 360px
- Eixo: linha vertical (imgLine5), left 26px; diamantes: border 18×18px / sólido 6×6px, left 17–23px
- Entradas: left 45px; nome 24px Regular/1.25, cargo 16px/1.5, descrição 14px/1.45, w 321px
- Pullquote: 24px Regular/1.25, centralizado, w 338px

### 3. Princípios
**Conteúdo:**
- Título: `"O processo muda. Alguns princípios permanecem."` — 48px/1.1, tracking -1.44px
- **Começo pelo problema** (src/media/ComeceProb.png ≈ 124×111px): `"Antes de pensar em uma solução, procuro entender o que estamos tentando resolver, para quem aquilo importa e qual mudança esperamos provocar."`
- **Aproximo perspectivas** (src/media/AproxPers.png ≈ 124×122px): `"Meu trabalho acontece entre usuários, negócio, produto e tecnologia, tornando decisões, riscos e limitações mais claros para todos."`
- **Lidero de perto** (ícone UX vector group ≈ mesmo porte): `"Mesmo em posições de liderança, continuo envolvido nas hipóteses, fluxos, protótipos, validações e decisões que definem a experiência."`

**Desktop** — três colunas iguais, centralizadas, sem bordas:
- Por coluna: ícone (topo) + título 36px/1.15 + texto 20px/1.45, w ≈ 408–432px, text-align center
- Título da seção centralizado, w 850px

**Mobile** — empilhado verticalmente, centralizado:
- Ícone ≈ 80px w; título 24px Regular/1.25; texto 14–16px/1.45–1.5; gap ≈ 225–254px entre princípios

### 4. Liderança
**Conteúdo:**
- Título: `"Liderar também é criar espaço."` — Display/XL 96px/1.0, tracking -2.88px
- Texto: `"Quando o contexto pede liderança, eu assumo esse espaço. / Acredito que equipes maduras não são construídas apenas com processos e ferramentas, mas com confiança, contexto e autonomia. Como líder, procuro criar ambientes em que as pessoas possam expor dúvidas, discordar com respeito e assumir responsabilidade pelo próprio trabalho. / Liderar, para mim, não significa ter todas as respostas. Significa fazer perguntas melhores e criar condições para que outras pessoas façam um ótimo trabalho."`
- Pullquote: `"Tento ser o líder que gostaria de ter encontrado ao longo da minha carreira."` — 48px/1.1, tracking -1.44px

**Desktop** — assimétrico (título esquerda, texto e pullquote direita):
- Título: left ≈ 48px, top 2744px, w 519px (96px)
- Texto: left ≈ `calc(50% + 49px)`, top 2758px, w 774px (20px/1.45)
- Pullquote: left ≈ `calc(41.67% + 18px)`, top 3098px, w 774px (48px/1.1)
- Divisor 1px: top 3284px

**Mobile** — tudo centralizado:
- Título: 36px/1.15, w 341px
- Texto: 14px/1.45, w 342px
- Pullquote: 36px/1.15, w 340px
- Divisor 1px: left 26px, w 340px

### 5. Sempre Iniciante
**Conteúdo:**
- Título: `"Sempre Iniciante."` — Display/Hero 160px/0.96, tracking -4.8px
- Texto parte 1: `"Sou pai de três, casado com uma gaúcha e pratico Karatê Shotokan há mais de dez anos. / No dojo onde treino existe uma faixa com a expressão Manen Shōho: um lembrete para preservar a postura de quem continua aprendendo, principalmente quando a experiência começa a nos convencer de que já sabemos o suficiente. / Essa ideia também me acompanha no trabalho."`
- Texto parte 2: `"A experiência ajuda a reconhecer padrões, mas não deveria nos tornar rápidos demais para concluir. Cada produto, equipe e contexto exige disposição para observar, escutar e perguntar novamente."`
- Foto pessoal/karatê grande (src/media/henriqueKarate.png) + foto vertical pequena (imgImage273, desktop only)

**Desktop:**
- src/media/henriqueKarate.png: left 48px, top 3365px, w 429px, h 873px, border-radius 16px
- imgImage273: left `calc(25% + 71px)`, top 3455px, w 94px, h 279px, border-radius 16px
- Título: left `calc(62.5% - 321px)`, top 3439px, w 631px (sobreposto verticalmente à foto)
- Texto parte 1: left `calc(62.5% - 309px)`, top 3771px, w 608px (20px/1.45)
- Texto parte 2: idem continuação
- Divisor 1px: top 4318px

**Mobile** — layout side-by-side foto + texto, depois texto full-width:
- src/media/henriqueKarate.png: left 23px, top 3187px, w 134px, h 361px, border-radius 8px
- Título "Sempre Iniciante.": 48px/1.1, tracking -1.44px, left `calc(70% - 110px)`, top 3187px, w 197px
- Texto parte 1: 14px/1.45, left `calc(70% - 103px)`, top 3293px, w 196px (ao lado da foto)
- Texto parte 2: 14px/1.45, left `calc(50% - 169px)`, top 3558px, w 340px (full-width abaixo)
- imgImage273: ausente no mobile
- Divisor 1px: left 26px, w 340px

### 6. Closing
**Conteúdo:**
- Título: `"Continuo interessado nos problemas difíceis."` — 72px/1.0, tracking -0.72px
- Texto: `"Aqueles que ainda não têm uma resposta clara e exigem estratégia, colaboração e coragem para decidir. / O papel pode mudar. Minha forma de contribuir permanece: perto do problema, das pessoas e das decisões que moldam a experiência."` — 24px Regular/1.25, tracking -0.24px (desktop); 14px/1.45 (mobile)
- Dois links HyperLink (componente já existente):
  - `"Ver meus trabalhos →"`
  - `"Entrar em contato →"`

**Desktop:** título centralizado w 1012px; texto centralizado w 774px; links lado a lado (left ≈ `calc(25%+76px)` e `calc(50%+66px)`)
**Mobile:** título 36px/1.15 w 340px centralizado; links empilhados verticalmente, left ≈ 79–85px

---

## Assets

| Figma | Descrição | Arquivo em src/media | Status |
|-------|-----------|----------------------|--------|
| imgRectangle37 | Retrato do Hero | `src/media/about-henrique.png` | Confirmado |
| src/media/henriqueKarate.png | Foto pessoal/karatê, grande | `src/media/henriqueKarate.png` | Confirmado |
| imgImage273 | Foto vertical pequena (desktop only, 94×279px) | Não identificada | Possivelmente ausente |
| src/media/ComeceProb.png | Ícone "Começo pelo problema" (≈124×111px) | `src/media/ComeceProb.png` | Confirmado |
| src/media/AproxPers.png | Ícone "Aproximo perspectivas" (≈124×122px) | `src/media/AproxPers.png` | Confirmado |
| Vector group | Ícone "Lidero de perto" (UX, ≈mesmo porte) | Não identificado | Possivelmente ausente |
| imgLine5 | Linha tracejada da timeline de carreira | `timeline.svg` (provável) | Verificar |
| imgHyperline | Sublinhado animado do HyperLink | `hyperline.svg` | Presente |
| HyperLink | Componente de link com sublinhado | Já usado no projeto (Home/Footer) | Reutilizar |

---

## Espaçamento final antes do Footer
- Desktop: ≈ 97px após os links de CTA (frame tem 4927px, links em ~4830px)
- Mobile: ≈ 80px padding-bottom após os links (último link top ~4180px)
- O arredondamento da transição branco→preto é aplicado pelo Layout global

---

## Incertezas a confirmar na implementação
1. **imgImage273** — foto vertical pequena, exibida apenas no desktop na seção Sempre Iniciante (94×279px); arquivo local ainda não confirmado. Não substituir por outra imagem sem validação.
2. **imgLine5** — não utilizar o arquivo timeline.svg atual. Recriar a timeline com CSS, preservando linha, marcadores e alinhamentos do Figma.

## Regra de fluxo da página
- No desktop, implementar em fluxo normal nesta ordem: Princípios completo → Liderança. Não reproduzir a sobreposição de coordenadas absolutas encontrada na leitura do Figma.
