# Especificação — Seção "Sobre mim" (Home)

Fonte: Figma node `130:208` (Desktop / Home) e `417:2598` (Mobile / Home).  
Data: 2026-06-23. Não consultar o Figma novamente para implementar esta seção.

---

## 1. Limites e posição na página

### Desktop (1440px)
- `top: 2571px` dentro da Home completa (5214px de altura)
- `left: 48px`, `right: 48px` — largura útil: 1344px
- Altura total: ~527px de foto (a imagem define a altura da coluna esquerda); o conjunto visual encerra em ~3098px (fundo dos botões)

### Mobile (390px)
- `top: 2139px` dentro da Mobile Home
- `left: 24px`, `right: 23px` — largura útil: 343px
- Encerra em ~2692px (fundo dos botões)

---

## 2. Estrutura e ordem dos elementos

### Desktop — dois elementos lado a lado no mesmo `top: 2571px`

```
[ Foto com overlay                ] [ Bloco cinza com conteúdo textual ]
[ 660 × 527px                    ] [ 660 × 435px                       ]
[ gradient + título + "Saiba mais"] [ "Método" + parágrafos             ]
                                    [ Botões abaixo do bloco (top:3032) ]
```

### Mobile — coluna única, ordem de cima para baixo

```
1. Foto com overlay (343 × 240px)
   └── "Sobre mim" label + Vector + "Saiba mais" sobrepostos no canto inferior esquerdo
2. "Método" heading
3. Parágrafo 1 (texto maior)
4. Parágrafo 2 (texto regular)
5. Botões lado a lado ("Ver Currículo →" e "LinkedIn →")
```

---

## 3. Layout desktop

### Coluna esquerda — foto com overlay

| Propriedade | Valor |
|---|---|
| Posição | `left: 49px`, `top: 2571px` |
| Dimensão | `657.997 × 525.401px` |
| Border-radius | `16px` |
| Imagem | `henrique-working 1` (ver §8) |
| Crop interno | `height: 174.8%`, `left: -0.01%`, `top: -29.71%`, `width: 104.1%` |

**Gradient overlay** (sobreposto à foto, mesmo tamanho: 660 × 527px):
```css
background: linear-gradient(-89.99deg, rgba(17,17,17,0.2) 0%, #000 101.06%);
border-radius: 16px;
```

**"Sobre mim" (título sobreposto):**
- `left: 88px`, `top: 2916px` (345px abaixo do topo da seção)
- Font: Inter Tight Medium, 96px, line-height: 1, letter-spacing: -2.88px
- Cor: branco (`#fff`)
- Largura: 430px

**Vector SVG (decorativo — seta/underline):**
- `left: ~93px`, `top: 3025.66px` (455px abaixo do topo)
- `height: 24.058px`
- Asset local provável: `src/media/arrow-link.svg`

**"Saiba mais" (link sobreposto):**
- `left: 117px`, `top: 3031px` (460px abaixo do topo)
- Font: Inter Tight Regular, 20px, line-height: 22.4px (1.12), letter-spacing: -0.33px
- Cor: branco
- Largura: 90px

> "Sobre mim", Vector e "Saiba mais" formam um cluster no canto inferior esquerdo da foto, sobrepostos ao gradient escuro.

---

### Coluna direita — bloco de conteúdo

**Bloco container (placeholder gray):**
- `left: 732px`, `top: 2571px`, `660 × 435px`
- `background: #d9d9d9`, `border-radius: 16px`
- **ATENÇÃO:** O bloco cinza é um placeholder no Figma. O conteúdo textual está sobreposto sobre ele com posicionamento absoluto, indicando que este fundo pode ser substituído por conteúdo real ou mantido como fundo neutro.

**"Método" (heading):**
- `left: 770px`, `top: 2619px` — padding interno ao bloco: ~38px esq, ~48px topo
- Font: Inter Tight Medium, 48px, line-height: 1.1, letter-spacing: -1.44px
- Cor: `#1a1a1a`

**Parágrafo composto (bloco de texto):**
- `left: 770px`, `top: 2689px`, `width: 558px`
- Dois trechos distintos no mesmo elemento:

  1. **Linha destaque** — Inter Tight Medium, 36px, line-height: 1.15, letter-spacing: -0.54px, cor: `#1a1a1a`:
     > "Meu trabalho é dar clareza a problemas complexos."

  2. **Corpo** — Inter Tight Regular, 24px, line-height: 1.25, letter-spacing: -0.24px, cor: `#1a1a1a`:
     > "Conecto necessidades dos usuários, objetivos de negócio e viabilidade técnica para orientar decisões, estruturar experiências e acompanhar as soluções da descoberta à implementação e evolução."

**Botões** (`top: 3032px`, abaixo do bloco cinza):

| Botão | left | Estilo |
|---|---|---|
| "Ver Currículo →" | 732px | Button size L, Dark |
| "LinkedIn →" | 973px | Button size L, Dark |

Button size L Dark: `background: black`, `border-radius: 999px`, `padding: 17px 32px`, texto 24px Medium branco.

> Os botões ficam 26px abaixo do fundo do bloco cinza (3006px) e alinhados verticalmente com o "Saiba mais" da coluna esquerda (~3031px).

---

## 4. Layout mobile

### Foto com overlay

| Propriedade | Valor |
|---|---|
| Posição | `left: 23px`, `top: 2139px` |
| Dimensão | `343 × 240px` |
| Border-radius | `8px` (diferente do desktop: 16px) |
| Imagem | `henrique-working 1` (ver §8) |
| Crop interno | `height: 191.61%`, `left: -0.09%`, `top: -28.63%`, `width: 100%` |

**Gradient overlay** (mesmo tamanho: 343 × 240px, border-radius 8px):
```css
background: linear-gradient(-89.99deg, rgba(17,17,17,0.16) 0%, rgba(0,0,0,0.8) 101.06%);
```

**Sobrepostos no canto inferior esquerdo da foto:**

- **"Sobre mim"**: `left: 45px`, `top: 2300px` (161px abaixo do topo da foto)
  - Font: Inter Tight Regular, 24px, line-height: 1.25, letter-spacing: -0.24px, cor: branco
- **Vector SVG**: `left: ~45px`, `top: 2330px`, `height: 24.058px` (mesmo asset: `arrow-link.svg`)
- **"Saiba mais"**: `left: 66px`, `top: 2333px`
  - Font: Inter Tight Regular, 16px, line-height: 1.5, cor: branco, largura: 90px

### Conteúdo abaixo da foto

**"Método" heading:**
- `left: 24px`, `top: 2395px` (16px abaixo do fundo da foto em 2379px)
- Font: Inter Tight Medium, 36px, line-height: 1.15, letter-spacing: -0.54px
- Cor: `#1a1a1a`

**Parágrafo 1:**
- `left: 24px`, `top: 2452px`, `width: 337px`
- Font: Inter Tight Regular, 24px, line-height: 1.25, letter-spacing: -0.24px, cor: `black`
- Texto (versão mobile — ligeiramente mais curta que desktop):
  > "Meu trabalho é dar clareza a problemas complexos."

**Parágrafo 2:**
- `left: 24px`, `top: 2520px`, `width: 342px`
- Font: Inter Tight Regular, 16px, line-height: 1.5, sem letter-spacing explícito, cor: `black`
- Texto (diferente do desktop — versão abreviada):
  > "Conecto usuários, negócio e tecnologia para orientar decisões, desenhar experiências e acompanhar sua evolução do primeiro entendimento ao produto em operação e escala."

**Botões** (`top: 2648px`):

| Botão | left | Estilo |
|---|---|---|
| "Ver Currículo →" | 25px | Button size M, Dark |
| "LinkedIn →" | ~195px (`calc(40%+39px)`) | Button size M, Dark |

Button size M Dark: `background: black`, `border-radius: 999px`, `padding: 14px 24px`, texto 16px Medium branco.

---

## 5. Margens e larguras resumidas

| | Desktop | Mobile |
|---|---|---|
| Margem lateral | 48px | 24px |
| Largura da coluna | 660px (cada) | 343px (única) |
| Gap entre colunas | 24px | — |
| Border-radius foto | 16px | 8px |
| Border-radius botão | 999px (pill) | 999px (pill) |

---

## 6. Textos exatos

| Elemento | Texto |
|---|---|
| Título sobreposto | "Sobre mim" |
| Link sobreposto | "Saiba mais" |
| Heading direita | "Método" |
| Destaque parágrafo | "Meu trabalho é dar clareza a problemas complexos." |
| Corpo desktop | "Conecto necessidades dos usuários, objetivos de negócio e viabilidade técnica para orientar decisões, estruturar experiências e acompanhar as soluções da descoberta à implementação e evolução." |
| Corpo mobile | "Conecto usuários, negócio e tecnologia para orientar decisões, desenhar experiências e acompanhar sua evolução do primeiro entendimento ao produto em operação e escala." |
| Botão 1 | "Ver Currículo →" |
| Botão 2 | "LinkedIn →" |

---

## 7. Tipografia (tokens)

| Token | Família | Peso | Tamanho | Line-height | Letter-spacing |
|---|---|---|---|---|---|
| Display/XL | Inter Tight Medium | 500 | 96px | 1.0 | -2.88px |
| Heading/H1 | Inter Tight Medium | 500 | 48px | 1.1 | -1.44px |
| Heading/H2 | Inter Tight Medium | 500 | 36px | 1.15 | -0.54px |
| Heading/H3 | Inter Tight Regular | 400 | 24px | 1.25 | -0.24px |
| Body/L | Inter Tight Medium | 500 | 20px | 1.45 | — |
| Body/M | Inter Tight Regular | 400 | 16px | 1.5 | — |
| Label/M | Inter Tight Medium | 500 | 16px | 1.25 | — |

Uso nesta seção:
- "Sobre mim" desktop: Display/XL (96px Medium)
- "Sobre mim" mobile: Heading/H3 (24px Regular)
- "Método" desktop: Heading/H1 (48px Medium)
- "Método" mobile: Heading/H2 (36px Medium)
- Destaque parágrafo desktop: Heading/H2 (36px Medium)
- Destaque parágrafo mobile: Heading/H3 (24px Regular)
- Corpo desktop: Heading/H3 (24px Regular)
- Corpo mobile: Body/M (16px Regular)
- "Saiba mais" desktop: Body/L (20px) — tracking -0.33px (ligeiramente fora do token padrão)
- "Saiba mais" mobile: Body/M (16px Regular)

---

## 8. Imagem: foto principal

**Nome Figma:** "henrique-working 1"  
**Asset local provável:** `src/media/henrique-working.png`  
**Descrição:** foto de Henrique trabalhando (em ambiente de escritório/studio)

| | Desktop | Mobile |
|---|---|---|
| Container | 660 × 527px | 343 × 240px |
| Border-radius | 16px | 8px |
| object-fit | cover (via posicionamento absoluto) | cover |
| Crop (height) | 174.8% | 191.61% |
| Crop (left) | -0.01% | -0.09% |
| Crop (top) | -29.71% | -28.63% |
| Crop (width) | 104.1% | 100% |

O crop mobile é mais agressivo em altura (191.6% vs 174.8%), mas mantém posicionamento vertical similar (-28% vs -29%). O enquadramento centra o rosto/busto superior do Henrique.

---

## 9. Botões e links

### Button (componente)
```
appearance: Dark | Light
size: M (padding 14px 24px, text 16px) | L (padding 17px 32px, text 24px)
border-radius: 999px (pill)
Dark: bg black, text white
Light: bg white, text black
```

Nesta seção (desktop):
- "Ver Currículo →" — size L, Dark
- "LinkedIn →" — size L, Dark

Nesta seção (mobile):
- "Ver Currículo →" — size M, Dark
- "LinkedIn →" — size M, Dark

### "Saiba mais" (link sobreposto na foto)
- Não usa o componente Button; é texto puro com Vector decorativo acima
- Desktop: 20px Regular branco, com Vector SVG (`arrow-link.svg`) 24px de altura
- Mobile: 16px Regular branco, com Vector SVG 24px de altura
- O Vector fica imediatamente acima do texto "Saiba mais"

---

## 10. Cores e raios

| Elemento | Cor |
|---|---|
| Fundo da seção | branco (`#fff` / `var(--background/primary)`) |
| Bloco direito (desktop) | `#d9d9d9` (placeholder — ver nota abaixo) |
| Gradient overlay foto | preto com opacidade |
| Texto sobreposto na foto | branco |
| Texto do bloco direito | `#1a1a1a` |
| Botões Dark | `background: black`, texto branco |
| Border-radius foto desktop | 16px |
| Border-radius foto mobile | 8px |
| Border-radius bloco direito | 16px |
| Border-radius botões | 999px |

---

## 11. Diferenças intencionais entre desktop e mobile

| Aspecto | Desktop | Mobile |
|---|---|---|
| Layout | Duas colunas paralelas | Coluna única, empilhado |
| Foto tamanho | 660 × 527px | 343 × 240px |
| Foto border-radius | 16px | 8px |
| "Sobre mim" tipografia | 96px Medium | 24px Regular |
| Bloco de conteúdo | Fundo cinza (#d9d9d9) separado da foto | Sem bloco; conteúdo flui abaixo da foto |
| "Método" tipografia | 48px Medium | 36px Medium |
| Destaque parágrafo | 36px Medium | 24px Regular |
| Corpo parágrafo | 24px Regular | 16px Regular |
| Texto do corpo | Versão longa (menciona "viabilidade técnica", "implementação") | Versão curta e diferente |
| Botões tamanho | Size L (padding 17×32px, texto 24px) | Size M (padding 14×24px, texto 16px) |
| Botão "LinkedIn" posição | `left: 973px` (241px à direita do primeiro) | `left: ~195px` (lado a lado, gap menor) |

---

## 12. Assets locais correspondentes ao Figma

| Asset Figma | Arquivo local | Confiança |
|---|---|---|
| `imgHenriqueWorking1` ("henrique-working 1") | `src/media/henrique-working.png` | Alta — nome idêntico |
| Vector SVG (node 130:233 / 424:2856) | `src/media/arrow-link.svg` | Alta — SVG decorativo de seta/link |
| Hyperline (node 253:161) | `src/media/hyperline.svg` | Alta — usado no componente HyperLink |

---

## 13. Informações não confirmadas / pendências

1. **Bloco cinza (#d9d9d9) no desktop:** No Figma, o bloco direito tem fundo `#d9d9d9`. Não está claro se este é o fundo intencional definitivo ou um placeholder. O texto está sobreposto sobre ele com posicionamento absoluto. Precisará de decisão editorial antes de implementar se deve ser cinza, branco ou outra cor.

2. **"Saiba mais" como link:** O Figma posiciona como texto puro. Não há `href` ou comportamento definido. Presumivelmente navega para `/sobre` (página Sobre mim), mas não está explícito no Figma.

3. **Foto `henrique-working.png` local:** Confirmada existência mas não foi visualizada para verificar se o enquadramento corresponde exatamente ao Figma. A implementação deve usar `object-position` para replicar o crop descrito em §8.

4. **`arrow-link.svg` como Vector:** O SVG existe localmente mas não foi confirmado visualmente como idêntico ao node do Figma. É o candidato mais provável.

5. **Gap entre "Método" e parágrafo (desktop):** O espaçamento exato entre o heading 48px e o bloco de texto não foi calculado com precisão pixel a pixel (aproximadamente 70px de topo a topo). Pode ser refinado na implementação.

6. **Separação entre colunas desktop:** As posições absolutas mostram left:48px (coluna esquerda) e left:732px (coluna direita), com gap resultante de 24px. Mas a coluna esquerda mede 657.997px (não 660px), possivelmente um arredondamento. Usar 660px + 24px gap é seguro.
