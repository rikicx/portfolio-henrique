# Spec — Gerdau Storeroom

Fonte de verdade: Figma `vioGrjQQ89aQbcA0cd2Ios`
- Desktop: node `295:539` — "Desktop / Works / Gerdau-Storeroom" (1440 px)
- Mobile: node `447:1523` — "Mobile / Works / Gerdau Storeroom" (390 px)

---

## Elementos globais — não recriar nesta página

- **Navbar / Header** — componente global reutilizado; posição `top: 0`.
- **Footer** — componente global; aparece após a seção Outros Projetos.
- **Brand** (logo SVG) — instância dentro do Navbar.
- **Button** "Entre em contato" — instância dentro do Navbar.
- **NavItem** — instâncias dentro do Navbar.
- **SectionTitle** — componente reutilizável; usado aqui em "Outros Projetos".
- **Project Card** — componente reutilizável; usado na grade de Outros Projetos.

---

## Tokens visuais

| Token | Valor |
|---|---|
| Fonte principal | Inter Tight |
| Cor de texto primário | `var(--text/primary, black)` |
| Cor de texto secundário | `var(--text/secondary, #6d6d6d)` |
| Cor de texto inverso | `var(--text/inverse, white)` |
| Cor de fundo primário | `var(--background/primary, white)` |
| Border-radius 16 | `var(--radius/16, 16px)` |
| Border-radius 8 | `var(--radius/8, 8px)` |
| Border-radius pill | `var(--radius/pill, 999px)` |
| Surface placeholder | `var(--surface/placeholder, #d9d9d9)` |
| Background surface | `var(--background/surface, #efefef)` |

### Escala tipográfica identificada

| Nome | Família | Peso | Tamanho | Line-height | Tracking |
|---|---|---|---|---|---|
| Display/Hero | Inter Tight | Medium 500 | 160px | 0.96 | -4.8px |
| Display/XL | Inter Tight | Medium 500 | 96px | 1.0 | -3px |
| Heading/H1 | Inter Tight | Medium 500 | 48px | 1.1 | -1.44px |
| Heading/H2 | Inter Tight | Medium 500 | 36px | 1.15 | -0.54px |
| Heading/H3 | Inter Tight | Regular 400 | 24px | 1.25 | -0.24px |
| Label/L | Inter Tight | Medium 500 | 24px | 1.25 | 0 |
| Body/L | Inter Tight | Medium 500 | 20px | 1.45 | 0 |
| Body/M | Inter Tight | Regular 400 | 16px | 1.5 | 0 |
| Body/S | Inter Tight | Medium 500 | 14px | 1.45 | 0 |

---

## Seções — Desktop (1440 px)

Margem lateral padrão: `left: 48px` / `right: 48px` (salvo indicação contrária).
Largura do conteúdo interno: `1344px` (= 1440 − 2 × 48).

---

### 1. Hero

**Posição:** `top: 199px`

**Título principal**
- Texto: `Gerdau` (linha 1) + `Storeroom` (linha 2)
- Tipografia: Display/Hero — 160px, Medium, tracking −4.8px, line-height 0.96
- Posição: `left: 43px`
- Cor: `var(--text/primary, black)`

**Subtítulo — coluna direita**
- Posição: `left: calc(50% + 51px)`, `top: 334px`, `width: 619px`
- Linha 1 (Heading/H2 — 36px, tracking −0.54px): `Inventário industrial · Design de produto`
- Linha 2 (Body/L — 20px): *(linha vazia — espaçamento editorial)*
- Linha 3 (Body/L — 20px): `Uma experiência cocriada com a operação para reduzir tempo e retrabalho na contagem de inventário, sem descolar da realidade do processo e das regras do SAP.`

**Divisor horizontal**
- Posição: `top: 587px`, `left: 48px`, `width: 1342px`, `height: 0` (borda 1px)
- Asset: `imgLine4` (SVG linha horizontal)

---

### 2. Metadados do projeto

**Posição geral:** `top: 667px`, `left: 48px`

**Imagem (Hero foto)**
- Asset: `imgRectangle17`
- Dimensões: `659 × 383px`, `border-radius: 16px`
- Posição: `left: 48px`, `top: 667px`
- `object-fit: cover`

**Colunas de metadados** (à direita da imagem, `left: calc(50% + 12px)`)

| Label | Valor | Tipografia valor |
|---|---|---|
| Cliente | Gerdau Steel | Heading/H2 (36px) |
| Ano | 2018 | Heading/H2 (36px) |
| Papel | Product Designer | Heading/H2 (36px) |

Labels: Body/L (20px), `top: 667px`
Valores: Heading/H2 (36px), `top: 704px`

**Resultado** (`top: 785px`, `left: calc(50% + 12px)`)
- Label (Body/L 20px): `Resultado`
- Valor principal (Heading/H2 36px, `top: 822px`): `90~120 min → ~15 min`
- Valor descritivo (Body/S 14px, `top: 871px`, `width: 560px`): `Mais de 80% de redução no tempo de contagem`

**Minha atuação** (`top: 931px`, `left: calc(50% + 12px)`)
- Label (Body/L 20px): `Minha atuação`
- Valor (Heading/H2 36px, `top: 968px`, `width: 588px`): `Pesquisa · Cocriação · Prototipação · Testes de usabilidade`

**Colunas Ano e Papel** ficam em posições calculadas: `left: calc(66.67% + 27px)` e `left: calc(75% + 39px)` respectivamente.

---

### 3. Imagem panorâmica secundária

- Asset: `imgRectangle18`
- Dimensões: `1344 × 280px`, `border-radius: 16px`
- Posição: `left: 48px`, `top: 1130px`
- `object-fit: cover`
- Sem legenda

---

### 4. O problema

**Posição:** `top: 1530px` (centrado)

**Título** (Heading/H1 — 48px, tracking −1.44px)
- Texto: `O problema`
- Posição: `left: calc(12.5% − 75px)`, `top: 1576px`

**Corpo do texto** (Body/L — 20px, `width: 888px`)
- Posição: `left: calc(62.5% − 453px)`, `top: 1530px`
- Parágrafo 1: `Em tese, o trabalho era simples: localizar os itens, conferir as quantidades e atualizar o SAP.`
- Parágrafo 2 *(vazio — espaçamento editorial)*
- Parágrafo 3: `Na prática, a contagem dependia de listas impressas, deslocamentos por um galpão enorme e conferências manuais. Quando alguma informação não batia, o operador precisava voltar ao computador, revisar os dados e refazer a validação do inventário.`

---

### 5. Pergunta central

**Posição:** `top: 1795px` até `top: 2009px`

**Ícone de aspas abertas** (rotacionado 180°)
- Asset: `imgQuoteIcon1`
- Dimensões: `103 × 86px`
- Posição: `left: 48px`, `top: 1795px`

**Label acima da pergunta** (Heading/H3 — 24px Regular, tracking −0.24px)
- Texto: `A pergunta que orientou o trabalho:`
- Posição: `left: calc(8.33% + 55px)`, `top: 1851px`

**Pergunta** (Heading/H1 — 48px, tracking −1.44px, `width: 1344px`)
- Texto: `Como reduzir o tempo e o retrabalho na contagem de inventário sem ignorar as regras do SAP e a realidade da operação em campo?`
- Posição: centrado, `top: 1893px`

**Ícone de aspas fechadas**
- Asset: `imgQuoteIcon2`
- Dimensões: `103 × 86px`
- Posição: `left: calc(91.67% − 33px)`, `top: 2009px`

---

### 6. Entendendo o processo em campo

**Posição:** `top: 2215px`

**Vídeo** (retrato/portrait — lateral esquerda) — **substituiu o placeholder original**
- Vimeo ID: `1202496239`
- URL embed: `https://player.vimeo.com/video/1202496239`
- Dimensões de referência: `433 × 777px` (proporção 9:16), `border-radius: 16px`
- Posição: `left: 48px`, `top: 2215px`
- Embed responsivo: `padding-top: 177.78%` (9:16); controles Vimeo visíveis; sem autoplay; sem muted; `loading="lazy"`
- `title` acessível no `<iframe>`: `Shadowing com os operadores durante a contagem de inventário, acompanhando o processo real e os pontos de atrito em campo.`
- Legenda: `Shadowing com os operadores durante a contagem de inventário, acompanhando o processo real e os pontos de atrito em campo.`

**Título** (Heading/H1 — 48px, tracking −1.44px) — **renomeado**
- Texto: `Entendendo o processo em campo`
- Posição: `left: calc(33.33% + 25px)`, `top: 2278px`

**Corpo do texto** (Body/L — 20px, `width: 702px`) — **substituído**
- Posição: `left: calc(62.5% − 395px)`, `top: 2339px`
- Parágrafo 1: `Antes de pensar na solução, acompanhei os operadores durante a contagem de inventário para entender como o trabalho realmente acontecia — do congelamento dos itens no SAP à conferência no galpão e à atualização final dos dados.`
- Parágrafo 2: `O shadowing ajudou a revelar etapas, exceções e decisões que não apareciam nos fluxos formais, mas que determinavam onde o processo travava e gerava retrabalho.`

**Diagrama de fluxo (pill badges)** — `top: 2564–2632px`

O fluxo é composto por dois grupos de etapas conectadas por setas (SVG `imgUnion` / `imgUnion1` / `imgUnion2`):

Linha superior (`top: 2564px`):
1. `Receber a lista de itens`
2. `Procurar cada item no SAP` *(com seta ← para direita)*
3. `Congelar Inventário no SAP`
4. `Imprimir lista de itens`

A linha superior dobra à direita com um arco (Union2) e continua na linha inferior (`top: 2632px`) da direita para a esquerda:

Linha inferior (`top: 2632px`, direita → esquerda):
1. `Procurar itens no galpão`
2. `Contar manualmente no papel`
3. `Voltar ao computador`
4. `Validar no SAP`

Estilo dos badges: `background: var(--background/surface, #efefef)`, `border-radius: pill`, `padding: 8px 16px`, Body/M (16px Regular).

**Sub-seção "Onde o processo quebrava?"** (`top: 2752px`)
- Label (Body/L 20px): `Onde o processo quebrava?`
- Posição label: `left: calc(33.33% + 25px)`, `top: 2752px`
- Frase em destaque (Heading/H1 — 48px, tracking −1.44px, `width: 751px`):
  `Qualquer exceção virava retrabalho: item fora do lugar, quantidade divergente ou nova validação no SAP.`
- Posição frase: `left: calc(62.5% − 395px)`, `top: 2789px`

---

### 7. Mapeando o fluxo real

**Posição:** `top: 3160px`

**Título** (Heading/H1 — 48px, tracking −1.44px, `width: 560px`)
- Texto: `Mapeando o fluxo real`
- Posição: `left: 47px`, `top: 3160px`

**Corpo do texto** (Body/L — 20px, `width: 1345px`)
- Posição: `left: calc(50% − 673px)`, `top: 3221px`
- Parágrafo 1: `Depois do acompanhamento em campo, organizei as etapas, exceções e decisões que faziam parte da contagem.`
- Parágrafo 2: `O mapa ajudou a separar o que era uma regra necessária da operação do que existia apenas para contornar limitações do processo atual. Com isso, ficou mais fácil discutir onde simplificar sem perder controle.`

**Imagem** (largura total)
- Asset: `imgRectangle23`
- Dimensões: `1344 × 280px`, `border-radius: 16px`
- Posição: `left: 48px`, `top: 3348px`
- `object-fit: cover`
- Legenda (Body/S 14px, centrada, `width: 507px`, `top: 3636px`): `Mapeamento do fluxo real com operadores e stakeholders da operação.`

---

### 8. Cocriação

**Posição:** `top: 3736px`

Layout: texto à esquerda, imagem à direita.

**Imagem**
- Asset: `imgRectangle25`
- Dimensões: `661 × 372px`, `border-radius: 16px`
- Posição: `left: calc(50% + 12px)`, `top: 3736px`
- `object-fit: cover`
- Legenda (Body/S 14px, centrada, `width: 507px`, `top: 4116px`): `Explorando ideias de solução com quem vivia o processo no dia a dia.`

**Título** (Heading/H1 — 48px, tracking −1.44px, `width: 527px`)
- Texto: `Cocriação`
- Posição: `left: 48px`, `top: 3805px`

**Corpo do texto** (Body/L — 20px, `width: 642px`)
- Posição: `left: calc(25% − 312px)`, `top: 3866px`
- Parágrafo 1: `Com os principais atritos mapeados, reuni operadores e áreas envolvidas para imaginar um processo com menos retrabalho.`
- Parágrafo 2 *(vazio)*
- Parágrafo 3: `Em vez de começar pelas telas, discutimos as decisões que estruturavam o fluxo: quais etapas precisavam permanecer no SAP, onde os operadores precisavam de mais clareza e o que poderia ser resolvido pelo próprio produto.`

---

### 9. O que precisávamos decidir

**Posição:** `top: 4216px`

Layout: imagem à esquerda, texto à direita.

**Imagem**
- Asset: `imgRectangle24`
- Dimensões: `661 × 372px`, `border-radius: 16px`
- Posição: `left: 48px`, `top: 4216px`
- `object-fit: cover`
- Legenda (Body/S 14px, centrada, `width: 560px`, `top: 4596px`): `Síntese dos principais atritos, exceções e oportunidades identificadas durante a cocriação.`

**Título** (Heading/H1 — 48px, tracking −1.44px, `width: 570px`)
- Texto: `O que precisávamos decidir`
- Posição: `left: calc(50% + 12px)`, `top: 4285px`

**Lista com marcadores + parágrafo final** (Body/L — 20px, `width: 610px`)
- Posição: `left: calc(70.83% − 288px)`, `top: 4346px`
- Itens da lista:
  - `Quais regras precisavam permanecer no SAP`
  - `Que etapas poderiam ser resolvidas no próprio fluxo`
  - `Como orientar o operador diante das exceções`
- Linha vazia (espaçamento)
- Parágrafo final: `Foi quando as regras do sistema encontraram o conhecimento de quem vivia a operação que a solução começou a tomar forma.`

---

### 10. Da ideia ao protótipo

**Posição:** `top: 4696px`

Layout: texto à esquerda, imagem à direita.

**Imagem**
- Asset: `imgRectangle26`
- Dimensões: `661 × 372px`, `border-radius: 16px`
- Posição: `left: calc(50% + 12px)`, `top: 4696px`
- `object-fit: cover`
- Legenda (Body/S 14px, centrada, `width: 548px`, `top: 5076px`): `Primeira versão do fluxo, construída a partir das ideias priorizadas durante a cocriação.`

**Título** (Heading/H1 — 48px, tracking −1.44px, `width: 527px`)
- Texto: `Da ideia ao protótipo`
- Posição: `left: 48px`, `top: 4750px`

**Corpo do texto** (Body/L — 20px, `width: 642px`)
- Posição: `left: calc(25% − 312px)`, `top: 4811px`
- Parágrafo 1: `As ideias levantadas na cocriação foram combinadas em uma primeira versão da solução — quase um Frankenstein feito com as partes que pareciam funcionar melhor.`
- Parágrafo 2 *(vazio)*
- Parágrafo 3: `Naquele momento, a preocupação não era o acabamento. Era colocar o fluxo de pé rapidamente, levar o protótipo de volta aos operadores e descobrir onde a lógica ainda precisava mudar.`

---

### 11. Testando com os operadores

**Posição:** `top: 5216px`

**Título** (Heading/H1 — 48px, tracking −1.44px, `width: 1163px`)
- Texto: `Testando com os operadores`
- Posição: `left: calc(45.83% − 612px)`, `top: 5216px`

**Corpo do texto** (Body/L — 20px, `width: 1334px`)
- Posição: `left: calc(50% − 672px)`, `top: 5277px`
- Parágrafo 1: `Testamos a primeira versão com diferentes operadores, tanto em sala quanto no ambiente real de trabalho. Observei onde surgiam dúvidas, quais informações procuravam e quais decisões ainda precisavam de explicação.`
- Parágrafo 2 *(vazio)*
- Parágrafo 3: `Cada rodada ajudou a ajustar a sequência e o conteúdo antes da implementação.`

**Grade 2×2** (cada célula `661 × 372px`, `border-radius: 16px`)

| Posição | top | left | Asset |
|---|---|---|---|
| Coluna esq., linha 1 | 5531px | 47px | **Vídeo 16:9 — Vimeo `1204273143`** (embed responsivo 56.25%) |
| Coluna dir., linha 1 | 5531px | calc(50% + 12px) | `imgRectangle27` → `gerdau-storeroom-usability-test-02.jpg` |
| Coluna esq., linha 2 | 5927px | 47px | `imgRectangle30` → `gerdau-storeroom-usability-test-04.jpg` |
| Coluna dir., linha 2 | 5927px | calc(50% + 12px) | **Vídeo 16:9 — Vimeo `1204273144`** (embed responsivo 56.25%) |

`title` dos iframes:
- Vimeo `1204273143`: `Teste do protótipo de baixa fidelidade com operador, validando a sequência, o conteúdo e as decisões do fluxo.`
- Vimeo `1204273144`: `Validação do protótipo com a principal stakeholder, alinhando o fluxo às necessidades da operação e do negócio.`

**Legenda** (Body/S 14px, centrada, `width: 915px`, `top: 6307px`): `Testes realizados com diferentes operadores, em sala e no campo, para identificar dúvidas e oportunidades de melhoria no fluxo.`

---

### 12. A solução refinada

**Posição:** `top: 6447px`

**Título** (Heading/H1 — 48px, tracking −1.44px, `width: 1163px`)
- Texto: `A solução refinada`
- Posição: `left: calc(45.83% − 612px)`, `top: 6447px`

**Corpo do texto** (Body/L — 20px, `width: 1334px`)
- Posição: `left: calc(50% − 672px)`, `top: 6508px`
- Parágrafo 1: `A solução final reuniu consulta, contagem e atualização das informações em um único fluxo no tablet.`
- Parágrafo 2: `Com isso, o operador podia concluir o processo em campo, sem precisar voltar ao computador a cada etapa.`

**Imagem (UI screenshot)**
- Asset: `imgRectangle31`
- Dimensões: `995 × 571px`, `border-radius: 16px`
- Posição: centrada horizontalmente, `top: 6646px`
- Legenda (Body/S 14px, centrada, `width: 915px`, `top: 7225px`): `Principais telas do fluxo refinado para apoiar a contagem de inventário em campo.`

---

### 13. O produto em operação

**Posição:** `top: 7325px`

Layout: imagem à esquerda, texto à direita.

**Imagem**
- Dimensões: `661.167 × 371.906px`, `border-radius: 16px`
- Posição: `left: 48px`, `top: 7325px`
- **INCERTEZA:** node presente no Figma mas sem URL de asset retornado.
- Legenda (Body/S 14px, centrada, `width: 426px`, `top: 7705px`): `Storeroom App implantado e sendo utilizado durante a conferência de inventário na operação de Cartersville.`

**Título** (Heading/H1 — 48px, tracking −1.44px, `width: 527px`)
- Texto: `O produto em operação`
- Posição: `left: calc(50% + 13px)`, `top: 7394px`

**Corpo do texto** (Body/L — 20px, `width: 642px`)
- Posição: `left: calc(75% − 347px)`, `top: 7455px`
- Texto: `A solução foi implementada pela Gerdau e passou a ser utilizada na operação de Cartersville. Com o novo fluxo, uma contagem que levava entre 90 e 120 minutos passou a ser concluída em aproximadamente 15.`

---

### 14. Depoimento

**Posição:** `top: 7905px`

**Ícone de aspas abertas** (rotacionado 180°)
- Asset: `imgQuoteIcon1`
- Dimensões: `103 × 86px`
- Posição: `left: 57px`, `top: 7905px`

**Citação** (Heading/H2 — 36px, tracking −0.54px, `width: 1148px`)
- Posição: `left: calc(54.17% − 609px)`, `top: 7905px`
- Parágrafo 1: `Vocês não foram os primeiros a vir até aqui e tentar nos ajudar. A diferença é que as empresas anteriores queriam mudar nossos processos e nos ensinar uma nova forma de trabalhar.`
- Parágrafo 2 *(vazio)*
- Parágrafo 3: `Vocês nos ouviram, e nós participamos ativamente do processo de criação. Isso foi muito enriquecedor.`

**Ícone de aspas fechadas**
- Asset: `imgQuoteIcon2`
- Dimensões: `103 × 86px`
- Posição: `left: calc(91.67% − 40px)`, `top: 8065px`

**Atribuição** (Label/L — 24px Medium, alinhamento à direita, `width: 1055px`)
- Posição: `left: calc(16.67% + 1143px)`, `top: 8178px`
- Texto: `— Peter, Gerente Logístico da Gerdau North America`

---

### 15. Foto final da equipe

**Posição:** `top: 8398px`

**Imagem**
- Asset: `imgRectangle33`
- Dimensões: `1344 × 432px`, `border-radius: 16px`
- Posição: `left: 47px`, `top: 8398px`
- `object-fit: cover`
- Legenda (Body/S 14px, centrada, `width: 548px`, `top: 8838px`): `O time que participou da pesquisa, cocriação e validação da solução em Cartersville.`

---

### 16. Outros Projetos

**Divisor horizontal** (`top: 9011px`, `width: 1342px`, centrado)

**Título da seção** (Display/XL — 96px, SectionTitle component)
- Texto: `Outros Projetos`
- Posição: `left: 48px`, `top: 9018px`

**Grade de projetos** — 2 colunas, `left: 57px`, `top: 9177px`, `gap: 64px`

Cards: `640 × 684px`, `border-radius: 16px`, overlay gradiente `transparent → rgba(0,0,0,0.75)` de cima para baixo.

Conteúdo de cada card (posição `bottom: 33px`, `left: 32px`, `right: 32px`):
- Categoria/papel: Label/L (24px)
- Título: Heading/H1 (48px, tracking −1.44px)
- Link: `Ver Projeto →` (24px)

**Coluna esquerda** (sem deslocamento vertical):

| Ordem | Asset | Categoria | Título |
|---|---|---|---|
| 1 | `imgProjectCard` | Saúde · Head of Design | QI Platform |
| 2 | `imgProjectCard1` | Finances · Product Designer | Itaú Empreendedor |
| 3 | `imgProjectCard2` | Saúde · Head of Design | EMR Integration |

**Coluna direita** (`padding-top: 120px`):

| Ordem | Asset | Categoria | Título |
|---|---|---|---|
| 1 | `imgProjectCard3` | Saúde · Head of Design | 3PH Alliance & HRCRS Digital Ecosystem |
| 2 | `imgProjectCard4` | Industry · Product Designer | Gerdau Smartlog |

**Espaçamento antes do Footer:** não há valor explícito no frame (a seção termina após a coluna mais longa + gap de grade). O Footer segue imediatamente após a seção Work Section.

---

## Seções — Mobile (390 px)

Margem lateral padrão: `left: 24px` / `right: 24px`.
Largura de conteúdo: `342px`.

---

### 1. Navbar (mobile)

- Fundo: `var(--background/primary, white)`, `height: 88px`
- Logo: 29 × 47px, `left: 44px`, `top: 21px`
- Hambúrguer: 3 barras de 24 × 2px, `left: calc(80% + 10px)`, tops 33/43/53px, `border-radius: pill`, preto

---

### 2. Hero

**Título**
- Texto: `Gerdau` (linha 1) + `Storeroom` (linha 2)
- Tipografia: Heading/H2 — 36px, Medium, tracking −0.54px, line-height 1.15
- Posição: `left: 24px`, `top: 131px`

**Subtítulo**
- Tipografia: Body/S — 14px, Medium, line-height 1.45
- Posição: `left: 24px`, `top: 221px`, `width: 342px`
- Texto: `Uma experiência cocriada com a operação para reduzir tempo e retrabalho na contagem de inventário, sem descolar da realidade do processo e das regras do SAP.`

**Divisor horizontal**
- Posição: `left: 24px`, `top: 305px`, `width: 342px`
- Asset: `imgLine7`

**Hero image**
- Asset: `imgRectangle17`
- Dimensões: `342 × 83px`, `border-radius: 8px`, `object-fit: cover`
- Posição: `left: 24px`, `top: 329px`
- **Atenção CLAUDE.md:** "Imagens hero dos cases não devem ser forçadas ao formato 342 × 83px. Usar largura mobile disponível e preservar proporção e enquadramento adequados ao conteúdo de cada case." O frame indica 83px de altura, mas a regra do projeto prevalece. A decisão de proporção precisa ser validada com o designer.

---

### 3. Metadados do projeto (mobile)

Formato de lista vertical com pares `Label: Valor` em linha.

| Campo | Posição top | Label (20px SemiBold) | Valor (16px Regular) |
|---|---|---|---|
| Cliente | 444px | `Cliente:` | `Gerdau Steel` |
| Ano | 481px | `Ano:` | `2018` |
| Papel | 518px | `Papel:` | `Product Designer` |
| Resultado | 555px | `Resultado:` | `90~120 min → ~15 min` |
| Atuação | 592px | `Atuação:` | `Pesquisa · Cocriação · Prototipação · Testes de usabilidade` (w-247px, h-48px, quebra de linha) |

Todos os labels: `left: 24px`, `font-weight: 600` (SemiBold — única instância no projeto com SemiBold).

---

### 4. Imagem panorâmica secundária (mobile)

- Asset: `imgRectangle18`
- Dimensões: `343 × 90px`, `border-radius: 8px`
- Posição: `left: 22px`, `top: 680px`
- Recorte vertical (a imagem tem 285.83% de altura posicionada a −117.46% do topo)

---

### 5. O problema (mobile)

**Título** (Heading/H2 — 36px, tracking −0.54px)
- Texto: `O problema`
- Posição: `left: calc(30% − 93px)`, `top: 810px`

**Corpo do texto** (Body/M — 16px Regular, `width: 340px`)
- Posição: `left: calc(50% − 171px)`, `top: 859px`
- Mesmo conteúdo do desktop.

---

### 6. Pergunta central (mobile)

**Ícone de aspas abertas** (rotacionado 180°)
- Asset: `imgQuoteIcon1`
- Dimensões: `47.907 × 40px`
- Posição: `left: 24px`, `top: 1099px`

**Pergunta** (Heading/H2 — 36px, tracking −0.54px, `width: 342px`)
- Posição: `left: calc(50% − 171px)`, `top: 1163px`
- Texto: `Como reduzir o tempo e o retrabalho na contagem de inventário sem ignorar as regras do SAP e a realidade da operação em campo?`

**Ícone de aspas fechadas**
- Asset: `imgQuoteIcon2`
- Dimensões: `47.907 × 40px`
- Posição: `left: calc(80% + 6px)`, `top: 1450px`

> **Diferença desktop/mobile:** no desktop há um label "A pergunta que orientou o trabalho:" acima da pergunta. No mobile esse label não existe.

---

### 7. Entendendo o processo em campo (mobile) — **renomeado**

**Título** (Heading/H2 — 36px, tracking −0.54px, `width: 342px`) — **renomeado**
- Texto: `Entendendo o processo em campo`
- Posição: `left: 24px`, `top: 1530px`

**Corpo do texto** (Body/M — 16px Regular, `width: 342px`) — **substituído**
- Posição: `left: calc(50% − 171px)`, `top: 1620px`
- Parágrafo 1: `Antes de pensar na solução, acompanhei os operadores durante a contagem de inventário para entender como o trabalho realmente acontecia — do congelamento dos itens no SAP à conferência no galpão e à atualização final dos dados.`
- Parágrafo 2: `O shadowing ajudou a revelar etapas, exceções e decisões que não apareciam nos fluxos formais, mas que determinavam onde o processo travava e gerava retrabalho.`

**Vídeo** (portrait, 9:16) — **substituiu o placeholder original**
- Vimeo ID: `1202496239`
- No mobile, o vídeo ocupa a largura completa do conteúdo (342px) com proporção 9:16 (padding-top: 177.78%)
- Posição de referência no frame: `left: 58px`, `top: 1748px`, 274px de largura → mobile usa 100% da largura disponível
- Legenda: `Shadowing com os operadores durante a contagem de inventário, acompanhando o processo real e os pontos de atrito em campo.`

> **Diferença desktop/mobile:** o diagrama de fluxo (pill badges com etapas e setas) presente no desktop **não existe** no mobile. A seção transita diretamente para a citação sobre exceções.

---

### 8. Onde o processo quebrava (mobile)

**Label** (Body/M — 16px Regular, centrado)
- Texto: `Onde o processo quebrava?`
- Posição: `left: 194.64px`, `top: 2312px`, `width: 247.278px`

**Frase de destaque** (Heading/H3 — 24px Regular, tracking −0.24px, centrado, `width: 342px`)
- Texto: `Qualquer exceção virava retrabalho: item fora do lugar, quantidade divergente ou nova validação no SAP.`
- Posição: centrado, `top: 2349px`

---

### 9. Mapeando o fluxo real (mobile)

**Título** (Heading/H2 — 36px, tracking −0.54px, `width: 342px`)
- Texto: `Mapeando o fluxo real`
- Posição: `left: 24px`, `top: 2549px`

**Imagem**
- Asset: `imgRectangle23`
- Dimensões: `342 × 160px`, `border-radius: 8px`, `object-fit: cover`
- Posição: `left: 24px`, `top: 2598px`

**Legenda** (Body/S 14px, centrada, `width: 342px`, `top: 2774px`): `Mapeamento do fluxo real com operadores e stakeholders da operação.`

**Corpo do texto** (Body/M — 16px Regular, `width: 342px`)
- Posição: `left: calc(50% − 171px)`, `top: 2838px`
- Mesmo conteúdo do desktop (dois parágrafos).

---

### 10. Cocriação (mobile)

**Título** (Heading/H2 — 36px, tracking −0.54px)
- Texto: `Cocriação`
- Posição: `left: 24px`, `top: 3110px`, `width: 280.738px`

**Imagem**
- Asset: `imgRectangle25`
- Dimensões: `344 × 160px`, `border-radius: 8px`
- Posição: `left: 24px`, `top: 3167px`
- Recorte vertical (h-161.32%, top-offset −41.04%)

**Legenda** (Body/S 14px, centrada, `width: 334px`, `top: 3335px`): `Explorando ideias de solução com quem vivia o processo no dia a dia.`

**Corpo do texto** (Body/M — 16px Regular, `width: 342px`)
- Posição: `left: calc(50% − 171px)`, `top: 3399px`
- Mesmo conteúdo do desktop (três parágrafos, parágrafo 2 vazio).

---

### 11. O que precisávamos decidir (mobile)

**Título** (Heading/H2 — 36px, tracking −0.54px, `width: 342px`)
- Texto: `O que precisávamos decidir`
- Posição: `left: 24px`, `top: 3695px`

**Imagem**
- Asset: `imgRectangle24`
- Dimensões: `342 × 160px`, `border-radius: 8px`, `object-fit: cover`
- Posição: `left: 24px`, `top: 3793px`

**Legenda** (Body/S 14px, centrada, `width: 342px`, `top: 3961px`): `Síntese dos principais atritos, exceções e oportunidades identificadas durante a cocriação.`

**Lista + parágrafo final** (Body/M — 16px Regular, `width: 342px`)
- Posição: `left: calc(50% − 171px)`, `top: 4025px`
- Mesmo conteúdo do desktop (3 itens + parágrafo final).
- Recuo da lista: `margin-left: 24px` (vs 30px no desktop).

---

### 12. Da ideia ao protótipo (mobile)

**Título** (Heading/H2 — 36px, tracking −0.54px)
- Texto: `Da ideia ao protótipo`
- Posição: `left: 24px`, `top: 4321px`

**Imagem**
- Asset: `imgRectangle26`
- Dimensões: `342 × 160px`, `border-radius: 16px`, `object-fit: cover`
- Posição: `left: 24px`, `top: 4378px`

**Legenda** (Body/S 14px, centrada, `width: 342px`, `top: 4546px`): `Primeira versão do fluxo, construída a partir das ideias priorizadas durante a cocriação.`

**Corpo do texto** (Body/M — 16px Regular, `width: 342px`)
- Posição: `left: calc(50% − 171px)`, `top: 4610px`
- Mesmo conteúdo do desktop (três parágrafos, parágrafo 2 vazio).

---

### 13. Testando com os operadores (mobile)

**Título** (Heading/H2 — 36px, tracking −0.54px, `width: 298.16px`)
- Texto: `Testando com os operadores`
- Posição: `left: calc(50% − 171px)`, `top: 4895px`

**Corpo do texto** (Body/M — 16px Regular, `width: 342px`)
- Posição: `left: calc(50% − 171px)`, `top: 4985px`
- Mesmo conteúdo do desktop (três parágrafos, parágrafo 2 vazio).

**4 itens em lista vertical** (largura 342px, `border-radius: 8px`):

| top | Asset |
|---|---|
| 5201px | **Vídeo 16:9 — Vimeo `1204273143`** (embed responsivo 56.25%, largura 342px) |
| 5401px | `imgRectangle27` → `gerdau-storeroom-usability-test-02.jpg` (342 × 192px, object-fit: cover) |
| 5601px | `imgRectangle30` → `gerdau-storeroom-usability-test-04.jpg` (342 × 192px, object-fit: cover) |
| 5801px | **Vídeo 16:9 — Vimeo `1204273144`** (embed responsivo 56.25%, largura 342px) |

> **Diferença desktop/mobile:** desktop usa grade 2×2; mobile empilha os 4 itens verticalmente.

---

### 14. A solução refinada (mobile)

**Título** (Heading/H2 — 36px, tracking −0.54px, `width: 298.16px`)
- Texto: `A solução refinada`
- Posição: `left: calc(50% − 171px)`, `top: 6073px`

**Corpo do texto** (Body/M — 16px Regular, `width: 342px`)
- Posição: `left: calc(50% − 171px)`, `top: 6122px`
- Mesmo conteúdo do desktop.

**Imagem (UI screenshot)**
- Asset: `imgRectangle31`
- Dimensões: `340.526 × 195.417px`, `border-radius: 16px`
- Posição: centrada, `top: 6290px`
- Legenda (Body/S 14px, centrada, `width: 313.147px`, `top: 6488.16px`): `Principais telas do fluxo refinado para apoiar a contagem de inventário em campo.`

---

### 15. O produto em operação (mobile)

**Título** (Heading/H2 — 36px, tracking −0.54px, `width: 341px`)
- Texto: `O produto em operação`
- Posição: `left: 24px`, `top: 6611px`

**Corpo do texto** (Body/M — 16px Regular, `width: 341px`)
- Posição: `left: calc(50% − 171px)`, `top: 6701px`
- Mesmo conteúdo do desktop.

**Imagem**
- Dimensões: `341 × 192px`, `border-radius: 8px`
- Posição: `left: 24px`, `top: 6829px`
- **INCERTEZA:** node sem URL de asset.
- Legenda (Body/S 14px, centrada, `width: 342px`, `top: 7029px`): `Storeroom App implantado e sendo utilizado durante a conferência de inventário na operação de Cartersville.`

---

### 16. Depoimento (mobile)

**Ícone de aspas abertas** (rotacionado 180°)
- Asset: `imgQuoteIcon1`
- Dimensões: `47.907 × 40px`
- Posição: `left: 24.09px`, `top: 7109px`

**Citação** (Heading/H3 — 24px Regular, tracking −0.24px, `width: 342px`)
- Posição: `left: calc(50% − 171px)`, `top: 7149px`
- Mesmo conteúdo do desktop (três parágrafos, parágrafo 2 vazio).

**Ícone de aspas fechadas**
- Asset: `imgQuoteIcon2`
- Dimensões: `47.907 × 40px`
- Posição: `left: calc(80% + 6px)`, `top: 7479px`

**Atribuição** (Label/L — 24px Medium, alinhamento à direita, `width: 271px`)
- Posição: `left: calc(20% + 287px)`, `top: 7527px`
- Texto: `— Peter, Gerente Logístico da Gerdau North America`

> **Diferença desktop/mobile:** no desktop a citação usa Heading/H2 (36px); no mobile usa Heading/H3 (24px Regular).

---

### 17. Foto final da equipe (mobile)

**Imagem**
- Asset: `imgRectangle33`
- Dimensões: `342 × 153.6px`, `border-radius: 8px`, `object-fit: cover`
- Posição: `left: 24px`, `top: 7697px`

**Legenda** (Body/S 14px, centrada, `width: 316.667px`, `top: 7853px`): `O time que participou da pesquisa, cocriação e validação da solução em Cartersville.`

---

### 18. Outros Projetos (mobile)

**Não presente no frame `447:1523`.**

Conforme CLAUDE.md: "Todos os cases mobile devem terminar com a seção Outros Projetos." e "Outros Projetos no mobile deve reutilizar o padrão de cards mobile definido na Home."

- A seleção e ordem dos projetos deve seguir o desktop deste case.
- Projetos: QI Platform, Itaú Empreendedor, EMR Integration, 3PH Alliance & HRCRS Digital Ecosystem, Gerdau Smartlog.
- Layout: cards mobile conforme definido na Home (padrão a ser herdado do componente existente).

---

## Espaçamento final antes do Footer

Desktop: a seção "Work Section" (Outros Projetos) termina após a coluna mais longa. O Footer segue sem padding explícito adicional visível no frame.
Mobile: após a seção Outros Projetos (a ser adicionada). Seguir espaçamento do Footer mobile da Home.

---

## Diferenças consolidadas desktop → mobile

| Elemento | Desktop | Mobile |
|---|---|---|
| Largura do frame | 1440px | 390px |
| Margem lateral | 48px | 24px |
| Título hero | Display/Hero 160px | Heading/H2 36px |
| Subtítulo hero | Body/L 20px, coluna direita (619px) | Body/S 14px, largura total (342px) |
| Hero image proporção | 659 × 383px | 342 × 83px (ver alerta CLAUDE.md) |
| Tipografia de seções | Heading/H1 48px | Heading/H2 36px |
| Tipografia corpo | Body/L 20px | Body/M 16px |
| Tipografia legenda | Body/S 14px | Body/S 14px (igual) |
| Diagrama de fluxo (pill badges) | Presente, com setas SVG | Ausente |
| Label "A pergunta que orientou o trabalho:" | Presente | Ausente |
| Metadados | Colunas separadas com valor em H2 | Lista vertical inline Label:Valor |
| Layouts de seção | Alternância esquerda/direita | Empilhamento vertical |
| Grade de testes | 2×2 (lado a lado) | 4 imagens verticais |
| Tamanho imagens de seção | 661 × 372px | 342 × 160px (ou 192px) |
| Citação tipografia | Heading/H2 36px | Heading/H3 24px Regular |
| Atribuição largura | 1055px | 271px |
| Outros Projetos | Grade 2 colunas staggered | Cards mobile (padrão da Home) |

---

## Inventário de assets (hipóteses de correspondência local)

| Nome no Figma | Descrição | Correspondência local hipotética |
|---|---|---|
| `imgVector` | Logo SVG (Brand) | `src/assets/logo.svg` ou similar |
| `imgLine4` / `imgLine7` | Divisor horizontal SVG | componente inline ou CSS `border-top` |
| `imgQuoteIcon1` | Aspas abertas (usado rotacionado 180°) | `src/assets/quote-open.svg` |
| `imgQuoteIcon2` | Aspas fechadas | `src/assets/quote-close.svg` |
| `imgUnion` | Seta de processo (horizontal) | `src/assets/arrow-right.svg` |
| `imgUnion1` | Seta de processo (diagonal) | `src/assets/arrow-corner.svg` |
| `imgUnion2` | Arco de dobra do fluxo | `src/assets/arrow-arc.svg` |
| `imgRectangle17` | Foto hero (metadados) | `src/assets/cases/storeroom/hero.jpg` |
| `imgRectangle18` | Foto panorâmica secundária | `src/assets/cases/storeroom/panorama.jpg` |
| `imgRectangle23` | Foto do mapeamento | `src/assets/cases/storeroom/mapping.jpg` |
| `imgRectangle24` | Síntese da cocriação | `src/assets/cases/storeroom/cocriation-synthesis.jpg` |
| `imgRectangle25` | Sessão de cocriação | `src/assets/cases/storeroom/cocriation-session.jpg` |
| `imgRectangle26` | Protótipo | `src/assets/cases/storeroom/prototype.jpg` |
| `imgRectangle27` | Teste com operadores 1 | `src/assets/cases/storeroom/test-1.jpg` |
| `imgRectangle30` | Teste com operadores 2 | `src/assets/cases/storeroom/test-2.jpg` |
| `imgRectangle31` | UI screenshot (solução refinada) | `src/assets/cases/storeroom/ui-refined.jpg` |
| `imgRectangle33` | Foto da equipe | `src/assets/cases/storeroom/team.jpg` |
| `imgProjectCard` – `imgProjectCard4` | Thumbnails de Outros Projetos | Reutilizar assets da Home |
| "Captura de Tela 2026-06-17 às 00.58.25 1" | Foto de campo (observação) | **INCERTEZA** |

---

## Incertezas registradas

1. ~~**Foto de campo**~~ — **RESOLVIDO.** Substituída pelo Vimeo `1202496239` (shadowing) na seção "Entendendo o processo em campo", tanto no desktop (433×777px, 9:16) quanto no mobile (largura total, 9:16).

2. **Imagem "O produto em operação"** (desktop `node 326:847`, mobile `node 447:1366`) — node presente com dimensões definidas, mas sem URL de asset. Possivelmente a mesma foto do Storeroom App em uso que a legenda descreve. Seção implementada somente com texto por enquanto.

3. ~~**2 imagens da grade de testes**~~ — **RESOLVIDO.** Os nodes `320:837` e `320:838` (desktop) e `447:1371` e `447:1370` (mobile) sem URL de asset foram substituídos pelos vídeos Vimeo `1204273143` (top-left desktop / posição 1 mobile) e `1204273144` (bottom-right desktop / posição 4 mobile).

4. **Proporção da hero image mobile** — o frame mostra `342 × 83px`, mas CLAUDE.md proíbe forçar esse formato. A proporção correta precisa ser validada antes da implementação.

5. **Outros Projetos mobile** — não existe no frame mobile; deve ser construído com o padrão de cards da Home. A seleção e ordem (QI Platform, Itaú Empreendedor, EMR Integration, 3PH Alliance & HRCRS Digital Ecosystem, Gerdau Smartlog) vem do desktop.

6. **Diagrama de fluxo mobile** — os pill badges com etapas e setas do processo (seção 7 desktop) não aparecem no frame mobile. Confirmar se a omissão é intencional ou se há intenção de adaptar esse bloco de alguma outra forma.

7. **Cards de Outros Projetos — imagens ausentes** — `imgProjectCard1` (Itaú Empreendedor), `imgProjectCard3` (3PH Alliance) e `imgProjectCard4` (Gerdau Smartlog) não foram baixados do Figma. Na implementação atual: Itaú usa `itau-cover.jpg`, 3PH usa `3ph-website-mockup.jpg`, e Smartlog usa background placeholder `#d9d9d9`. Substituir pelos assets reais quando disponíveis.
