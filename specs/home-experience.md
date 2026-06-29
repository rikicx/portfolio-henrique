# Spec: Seção Experiência — Home

> Fonte: Figma Desktop node `130:208` (página "02 - Desktop") e Mobile node `417:2598` (página "03 - Mobile").
> Leitura realizada em 2026-06-23.

---

## 1. Visão geral

A seção Experiência apresenta a trajetória profissional de Henrique em três empresas (da mais recente à mais antiga). No desktop, cada empresa ocupa uma linha full-width com timeline lateral, dois cargos com descrições e o logo da empresa. No mobile, é uma lista compacta com título do cargo + período, sem descrições, e ícone do logo à direita.

---

## 2. Desktop (1440 px)

### 2.1 Contexto e posicionamento

- Todo o conteúdo da página fica dentro de um container `Page Content`:
  ```
  position: absolute
  width: 1440px
  left: 50% / translate-x: -50%
  top: 0
  height: 5214px
  overflow-x: clip; overflow-y: auto
  border-radius-bottom: 64px
  background: white
  ```
- A seção Experiência começa com o título "Experiência" a `top: 4058px` dentro do Page Content.

### 2.2 Título da seção

Componente `SectionTitle`:
```
position: absolute
left: 32px (+ 10px padding interno = texto a partir de ~42px)
top: 4058px
padding: 10px

  Texto "Experiência":
    font-family: Inter Tight
    font-weight: 500 (Medium)
    font-size: 96px
    line-height: 1 (none)
    letter-spacing: -2.88px
    color: var(--text/primary, black)
    white-space: nowrap
```

### 2.3 Linhas de empresa (Company Experience)

Três linhas empilhadas, sem gap entre elas (o `border-bottom` de cada linha é o separador).

**Container de cada linha:**
```css
position: absolute
left: 49px
width: 1344px
background: white
border-bottom: 1px solid var(--neutral/200, #d9d9d9)
display: flex
flex-direction: row
gap: 24px
align-items: center
justify-content: center
padding: 24px 16px   /* py: 24px, px: 16px */
```

Altura efetiva de cada linha: ~298px (250px timeline + 48px padding).

**Posições `top` de cada linha:**
| Linha | top       | Empresa     |
|-------|-----------|-------------|
| 1     | 4190px    | 3PH Alliance |
| 2     | 4496px    | Sciensa      |
| 3     | 4794px    | Netfarma    |

### 2.4 Estrutura interna de cada linha

```
[Experience Body — flex-1, flex-row, gap: 16px, align-items: start]
  [Timeline — width: 16px, height: 250px]
    asset: timeline.svg
  [Positions Stack — flex-1, flex-col, gap: 32px]
    [Job Position 1]
      [Title]   Inter Tight Medium 20px, lh 1.45, color: var(--text/primary, black)
      [Description]  Inter Tight Regular 16px, lh 1.5, color: var(--text/primary, black)
    [Job Position 2]
      [Title]   mesma tipografia
      [Description]  mesma tipografia
[Logo — width: 144px, height: 100px, object-contain]
  asset: veja §2.5
```

### 2.5 Dados de cada empresa

#### Empresa 1 — 3PH Alliance (top: 4190px)
- **Logo local:** `logo-3ph.png` — 144 × 100px, object-contain
- **Cargo 1:**
  - Título: `Head of Design · 2021–2026`
  - Descrição: "A evolução para Head of Design veio como consequência da atuação próxima a produto, tecnologia e C-level. Passei a liderar designers, estruturar rituais, padrões de qualidade e processos de design, mantendo a prática hands-on quando necessário e conectando estratégia, governança visual e evolução do ecossistema digital da empresa."
- **Cargo 2:**
  - Título: `Product Designer Specialist · 2020–2021`
  - Descrição: "Entrei como designer hands-on em um contexto de produto altamente complexo, atuando na evolução de plataformas digitais para pesquisa clínica, RWE e operações em saúde. Trabalhei do discovery à entrega, traduzindo fluxos técnicos, necessidades de usuários e objetivos de negócio em experiências mais claras, protótipos e decisões de produto mais bem fundamentadas."

#### Empresa 2 — Sciensa (top: 4496px)
- **Logo local:** `logo-sciensa.png` — 144 × 100px, object-contain
- **Cargo 1:**
  - Título: `Head of Design · 2019–2021`
  - Descrição: "A transição para liderança aconteceu a partir da atuação transversal entre squads, clientes e designers. Passei a liderar o capítulo de design, apoiar profissionais em diferentes projetos, conduzir críticas e rituais de design, além de ajudar a estruturar padrões, processos e qualidade das entregas em um ambiente de consultoria."
- **Cargo 2:**
  - Título: `Product Designer Specialist (UX/UI) · 2018–2019`
  - Descrição: "Entrei como Product Designer em uma consultoria de inovação, atuando em squads multidisciplinares e projetos de alta complexidade para grandes clientes. Minha atuação combinava discovery, facilitação, prototipação e desenho de experiências digitais, sempre aproximando usuários, negócio e tecnologia para transformar problemas pouco definidos em caminhos mais claros de solução."

#### Empresa 3 — Netfarma (top: 4794px)
- **Logo local:** `logo-netfarma.png` — 144 × 100px, object-contain
- **Cargo 1:**
  - Título: `Design Coordinator · 2015–2016`
  - Descrição: "A evolução para coordenação veio a partir da capacidade de organizar problemas, orientar entregas e apoiar outros profissionais. Passei a liderar uma equipe multidisciplinar de design e conteúdo, contribuindo para a evolução da experiência do e-commerce, iniciativas mobile e padrões de entrega entre design, marketing e tecnologia."
- **Cargo 2:**
  - Título: `UX/UI Senior  · 2012–2015` *(dois espaços entre "Senior" e "·" — texto exato do Figma)*
  - Descrição: "Comecei como designer hands-on em um e-commerce em crescimento, criando interfaces, campanhas e experiências digitais com foco em clareza, conversão e consistência visual. A proximidade com tecnologia, marketing e operação ampliou meu papel para além da execução visual, trazendo visão de jornada, usabilidade e produto."

### 2.6 Link HyperLink

Posicionado fora do Page Content, sobre a área de transição entre o conteúdo e o Footer:

```
position: absolute (no root div Desktop / Home)
left: 49px
top: 5113px

  Texto: "Ver trajetória completa no LinkedIn ↗"
    font-family: Inter Tight
    font-weight: 500 (Medium)
    font-size: 24px
    line-height: 1.25
    color: black
    white-space: nowrap

  Decoração: hyperline.svg
    Elemento de altura 0 abaixo do texto.
    O SVG interno tem inset: [-2px 0 0 0], estendendo 2px acima,
    funcionando como underline decorativo com cor/forma própria.
    O SVG fica à largura total do contêiner do link.
```

---

## 3. Mobile (390 px)

### 3.1 Título da seção

```
position: absolute
left: 24px
top: 3491px
width: 342px

  Texto "Experiência":
    font-family: Inter Tight
    font-weight: 500 (Medium)
    font-size: 36px
    line-height: 1.15
    letter-spacing: -0.54px
    color: var(--text/primary, black)
```

### 3.2 Componente Experiences (node 439:3267)

Componente reutilizado da página Sobre Mim:

```
position: absolute
left: 19px
top: 3548px
width: 345px
height: 631px  ← bounding box; conteúdo visível ocupa ~234px
element: <button> (tap target para a seção)
```

Conteúdo visível real termina em ~3782px na página (top 3548 + ~234px).

### 3.3 Estrutura interna do componente (posicionamento absoluto)

Todos os valores percentuais são relativos ao bounding box 345 × 631px.

#### Empresa 1 — 3PH Alliance

| Elemento | Posição (% do bounding box) | Valor absoluto aprox. |
|---|---|---|
| Cargo 1 text | top 0.32%, left 1.45%, right 42.03% | top: ~2px, text-width: ~195px |
| Cargo 2 text | top 5.39%, left 1.45%, right 22.32% | top: ~34px, text-width: ~263px |
| Logo icon | top 2.06%, left 89.28%, right 3.89%, bottom 95.89% | ~24×13px, canto direito |
| Separador | top 11.73%, left 1.45%, right 0 | horizontal line em ~74px |

Textos Empresa 1:
- Cargo 1: `Head of Design · 2021–2026`
- Cargo 2: `Product Designer Specialist · 2020–2021`

#### Empresa 2 — Sciensa

| Elemento | Posição (% do bounding box) | Valor absoluto aprox. |
|---|---|---|
| Cargo 1 text | top 14.26%, left 1.45%, right 43.19% | top: ~90px |
| Cargo 2 text | top 19.33%, left 1.45%, right 22.32% | top: ~122px |
| Logo icon | top 17.75%, left 89.28%, right 3.89%, bottom 80.2% | ~24×13px, canto direito |
| Separador | top 25.67%, left 1.45%, right 0 | horizontal line em ~162px |

Textos Empresa 2:
- Cargo 1: `Head of Design · 2019–2021`
- Cargo 2: `Product Designer Specialist (UX/UI) · 2018–2019`

#### Empresa 3 — Netfarma

| Elemento | Posição (% do bounding box) | Valor absoluto aprox. |
|---|---|---|
| Cargo 1 text | top 28.21%, left 1.45%, right 35.36% | top: ~178px |
| Cargo 2 text | top 33.28%, left 1.45%, right 30.72% | top: ~210px |
| Logo icon | top 31.22%, left 89.28%, right 3.89%, bottom 66.73% | ~24×13px, canto direito |

Textos Empresa 3:
- Cargo 1: `Design Coordinator · 2015–2016`
- Cargo 2: `UX/UI Designer Senior· 2012–2015` *(sem espaço antes do ponto no Figma mobile)*

### 3.4 Tipografia dentro do componente (mobile)

**Cargo 1 de cada empresa** (mais sênior):
```
font-family: Inter Tight
font-weight: 400 (Regular)
font-size: 16px
line-height: 1.5
color: transparent (text) com background-clip: text
background: url(foto-henrique) + linear-gradient(black, black)
→ efeito visual: texto preto com possível sobreposição de foto
  (tratamento decorativo do Figma; na ausência da foto local,
   renderizar como texto preto simples)
```

**Cargo 2 de cada empresa** (entrada):
```
font-family: Inter Tight
font-weight: 400 (Regular)
font-size: 16px
line-height: 1.5
color: var(--text/primary, black)
```

### 3.5 Separadores entre empresas (mobile)

Linhas horizontais (`imgLine4`) renderizadas como bordas 1px:
- Linha 1: top ~74px dentro do componente, left: 5px, right: 0
- Linha 2: top ~162px dentro do componente, left: 5px, right: 0

Cor não especificada explicitamente no Figma — usar `var(--neutral/200, #d9d9d9)` por analogia com desktop.

### 3.6 Ícones de logo (mobile)

No Figma, os logos são renderizados como `Union` (caminhos SVG boolean). Na implementação, usar os assets locais PNG posicionados em caixa ~24 × 13px no canto direito de cada entrada de empresa.

Mapeamento:
- Empresa 1 (3PH Alliance): `logo-3ph.png`
- Empresa 2 (Sciensa): `logo-sciensa.png`
- Empresa 3 (Netfarma): `logo-netfarma.png`

### 3.7 Comportamento de accordion (mobile)

> Definido em implementação — não presente no frame Figma original.

A lista de empresas no mobile funciona como accordion com as seguintes regras:

- **Estado inicial:** 3PH Alliance aberta; Sciensa e Netfarma fechadas.
- **Exclusividade:** apenas uma empresa pode estar aberta por vez. Abrir uma fecha a anterior.
- **Toggle:** tocar na empresa já aberta a fecha (sem impedir o fechamento).
- **Área clicável:** todo o cabeçalho da empresa (`<button>` full-width).
- **Fechado:** o header exibe os dois cargos/datas à esquerda e o chevron (↓) isolado à direita. Logo não é exibido.
- **Aberto:** o header exibe o logo à esquerda (legível, `object-fit: contain`, por marca — ver abaixo) e o chevron (↑) isolado à direita. O painel expandido abaixo mostra cargo 1 + descrição e cargo 2 + descrição.
- **Tamanhos de logo por marca (mobile aberto):** 3PH Alliance `width: 200px; max-height: 56px` · Sciensa `width: 120px; max-height: 48px` · Netfarma `width: 130px; max-height: 40px`. Sem `transform: scale`; proporção preservada via `height: auto`.
- **Ordem visual quando aberto:** (1) logo topo-esquerdo no header; (2) chevron topo-direito no header; (3) cargo 1 + descrição no painel; (4) cargo 2 + descrição no painel.
- **Logo mobile:** aparece **somente** no estado aberto do accordion, no header, alinhado à esquerda. Não é exibido quando fechado. Sem distorção — proporção original preservada via `object-fit: contain`.
- **Chevron:** SVG inline `16×16px`, rotação 180° via CSS quando aberto; sem animação decorativa; `flex-shrink: 0`, filho direto do `<button>`.
- **Acessibilidade:** `<button type="button">` com `aria-expanded` e `aria-controls` apontando para o `id` do painel; painel com `role="region"`; navegação por teclado nativa.
- **Tipografia das descrições (mobile expandido):** Inter Tight Regular 14px / lh 1.6 / color: var(--color-black).

### 3.8 Link HyperLink (mobile)

```
position: absolute (no root Mobile / Home)
left: 24px
top: 3824px

  Contêiner: flex-col, gap: 8px, align-items: start,
             overflow: clip, padding-y: 4px

  Texto: "Ver trajetória completa no LinkedIn ↗"
    font-family: Inter Tight
    font-weight: 500 (Medium)
    font-size: 16px
    line-height: 1.25
    color: black
    white-space: nowrap

  Decoração: hyperline.svg
    Mesmo padrão do desktop: elemento size-0 com SVG
    inset [-2px 0 0 0], funcionando como underline.
```

---

## 4. Diferenças intencionais desktop × mobile

| Aspecto | Desktop | Mobile |
|---|---|---|
| Título da seção | 96px Display/XL | 36px Heading/H2 |
| Layout interno | Flex row: timeline + posições + logo | Accordion: header clicável + painel expansível |
| Interação | Estático | Accordion — uma empresa aberta por vez; 3PH inicia aberta |
| Descrições dos cargos | Presentes (Regular 16px) | Visíveis apenas quando a empresa está aberta (14px) |
| Logo da empresa | 144 × 100px, object-contain | ~24 × 13px, ícone pequeno no header à direita |
| Timeline | `timeline.svg` 16 × 250px por empresa | Ausente |
| Chevron | Ausente | Presente no header; aponta ↓ fechado / ↑ aberto |
| Link "LinkedIn" | 24px Medium | 16px Medium |
| Nomes das empresas | Não exibidos (apenas logo) | Não exibidos (apenas logo) |
| Cargos: visual do cargo sênior | Texto preto simples | Efeito bg-clip-text decorativo (fallback: texto preto) |

---

## 5. Assets locais e correspondência

| Asset local | Uso |
|---|---|
| `src/media/timeline.svg` | Barra vertical 16 × 250px, lado esquerdo de cada linha (desktop only) |
| `src/media/hyperline.svg` | Underline decorativo do link "Ver trajetória completa no LinkedIn ↗" |
| `src/media/logo-3ph.png` | Logo 3PH Alliance — desktop 144×100 / mobile ~24px |
| `src/media/logo-sciensa.png` | Logo Sciensa — desktop 144×100 / mobile ~24px |
| `src/media/logo-netfarma.png` | Logo Netfarma — desktop 144×100 / mobile ~24px |

---

## 6. Dados não confirmados / ambiguidades

- **Mapeamento empresa → logo**: inferido pelo contexto das descrições (saúde/pesquisa clínica → 3PH Alliance; consultoria/squads → Sciensa; e-commerce → Netfarma). Os nomes das empresas não aparecem como texto na seção — apenas logos.
- **Cor dos separadores mobile**: não especificada explicitamente no Figma; usar `#d9d9d9` (mesmo `var(--neutral/200)` do desktop).
- **Efeito bg-clip-text nos cargos seniores (mobile)**: a imagem de fundo usada no Figma é uma foto de Henrique. Se essa foto não estiver disponível como asset local, renderizar como texto preto simples.
- **Tamanho exato dos ícones de logo no mobile**: derivado de cálculo percentual; valor real pode ter ±2px. Conferir visualmente.
- **HyperLink desktop fora do Page Content**: o nó `447:1056` (left: 49px, top: 5113px) está no root div, sobrepondo o Page Content. O Page Content tem `overflow: clip`, então o HyperLink não pode estar dentro dele. Renderizar no mesmo nível do Page Content, com z-index acima.
- **Ordem cronológica da seção**: a ordem no Figma é mais recente → mais antiga (3PH Alliance 2021-2026, Sciensa 2019-2021, Netfarma 2012-2016). Não inverter.
