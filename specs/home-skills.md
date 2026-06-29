# Especificação — Seção "Competências & ferramentas" (Home)

Fontes: Figma node `130:208` (Desktop / Home) e `417:2598` (Mobile / Home).  
Data: 2026-06-23. Não consultar o Figma novamente para implementar esta seção.

---

## 1. Posição e limites na página

### Desktop (1440px)

| Elemento             | top      | left   | width    | height aprox. |
|----------------------|----------|--------|----------|---------------|
| Section Title        | 3218px   | 32px   | —        | 116px         |
| Container (card)     | 3350px   | 48px   | 1344px   | ~604px        |

A seção fica entre "Sobre mim" (acima) e "Experiência" (SectionTitle em top: 4058px).

### Mobile (390px)

| Elemento             | top      | left   | width    |
|----------------------|----------|--------|----------|
| Section Title        | 2792px   | 24px   | 342px    |
| Primeiro item        | 2890px   | 70px   | ~291px   |
| Último item (Ferr.)  | 3302px   | 70px   | ~294px   |

A seção fica entre "Sobre mim / Método" (acima) e "Experiência" (top: 3491px).

---

## 2. Section Title

### Desktop
- Texto: **"Competências & ferramentas"** (uma linha)
- Fonte: Inter Tight Medium, 96px, line-height: 1, letter-spacing: −2.88px (`Display/XL`)
- Cor: `var(--text/primary, black)`
- Padding interno do componente: 10px em todos os lados
- Posição: left 32px, top 3218px

### Mobile
- Texto: **"Competências &"** (linha 1) + **"ferramentas"** (linha 2)
- Fonte: Inter Tight Medium, 36px, line-height: 1.15, letter-spacing: −0.54px (`Heading/H2`)
- Cor: `var(--text/primary, black)`
- Posição: left 24px, top 2792px, width 342px

---

## 3. Container / card

### Desktop
- Background: `var(--background/surface, #efefef)`
- Border-radius: 16px (`var(--radius/16, 16px)`)
- Padding: top/bottom 32px, left 48px, right 268px
- `flex items-start` — os 5 itens ficam dentro de um `inline-grid` posicionado absolutamente
- Largura total: 1344px (de left 48px a 1392px)

### Mobile
- **Com card cinza**, igual ao desktop.
- Background: `#efefef` (`var(--color-surface)`)
- Border-radius: 16px (`var(--radius-card)`)
- Padding: 32px top/bottom, 24px left/right (margem lateral da página)
- O card ocupa toda a largura disponível dentro da margem lateral de 24px da seção.
- **Correção aplicada em 2026-06-23:** a decisão original (fundo branco, sem card) foi revisada; o fundo cinza existe em ambos os breakpoints.

---

## 4. Items — estrutura e ordem

Há **5 items** em ambos os breakpoints, na mesma ordem:

| # | Título               | Local asset                    |
|---|----------------------|--------------------------------|
| 1 | Estratégia e descoberta   | `src/media/icon-estrategia.svg` |
| 2 | Experiência e interface   | `src/media/icon-experiencia.svg` |
| 3 | Dados e evolução          | `src/media/icon-dados.svg`      |
| 4 | Liderança de Design       | `src/media/icon-lideranca.svg`  |
| 5 | Ferramentas               | `src/media/icon-ferramentas.svg` |

> **Nota de confirmação:** A correspondência ícone → SVG foi inferida por nome de arquivo e alinhamento posicional com os respectivos itens de texto. Recomenda-se confirmar visualmente antes de integrar.

---

## 5. Layout desktop — detalhes dos items

Dentro do container, o inner grid (`inline-grid`) posiciona ícones e textos absolutamente com offsets relativos ao ponto de origem superior-esquerdo da grid.

### Posições relativas dentro do inner grid

| Item                     | Ícone: ml / mt              | Ícone: tamanho aprox. | Texto: ml / mt  |
|--------------------------|-----------------------------|-----------------------|-----------------|
| Estratégia e descoberta  | ml: 9px / mt: 10px          | 32 × 50px             | ml: 82px / mt: 0   |
| Experiência e interface  | ml: 0 / mt: 125px           | 50 × 40px             | ml: 82px / mt: 110px |
| Dados e evolução         | ml: 0 / mt: 236px           | 50 × 37px             | ml: 82px / mt: 220px |
| Liderança de Design      | ml: 0 / mt: 340px           | 50 × 50px             | ml: 82px / mt: 330px |
| Ferramentas              | ml: 4px / mt: 450px         | 42 × 50px             | ml: 82px / mt: 440px |

- Gap entre inícios de itens: ~110px
- Todos os ícones ficam alinhados verticalmente na coluna esquerda (ml: 0–9px)
- Textos iniciam uniformemente em ml: 82px

### Tipografia dos itens (desktop)

**Título do item:**
- Fonte: Inter Tight Medium, 36px, line-height: 1.15, letter-spacing: −0.54px (`Heading/H2`)
- Cor: `black`

**Subtítulo do item:**
- Fonte: Inter Tight Medium, 20px, line-height: 1.45 (`Body/L`)
- Cor: `black`
- `whitespace-nowrap` (uma única linha)

---

## 6. Layout mobile — detalhes dos items

Cada item é uma pilha vertical: ícone + texto alinhados pela esquerda.

### Posições absolutas (top relativo à página)

| Item                     | Ícone top  | Texto top  | Texto left | Texto width |
|--------------------------|-----------|-----------|-----------|------------|
| Estratégia e descoberta  | 2896px    | 2890px    | 70px      | 291px      |
| Experiência e interface  | 2989px    | 2983px    | 70px      | 294px      |
| Dados e evolução         | 3103px    | 3096px    | 70px      | 294px      |
| Liderança de Design      | 3196px    | 3189px    | 70px      | 296px      |
| Ferramentas              | 3310px    | 3302px    | 70px      | 294px      |

### Posição dos ícones no mobile
- left: ~6.15% de 390px ≈ 24px
- right: ~85.64% de 390px → largura ocupada ≈ 32px
- Ícones ficam numa coluna de ~24px a ~56px (largura ~32px)
- Gap horizontal entre borda direita do ícone e início do texto ≈ 14px

### Tipografia dos itens (mobile)

**Título do item:**
- Fonte: Inter Tight **Regular**, 24px, line-height: 1.25, letter-spacing: −0.24px (`Heading/H3`)
- Cor: `var(--text/primary, black)`

**Subtítulo do item:**
- Fonte: Inter Tight Medium, 14px, line-height: 1.45 (`Label/S` / `Body/S`)
- Cor: `black`

---

## 7. Textos exatos

### Item 1 — Estratégia e descoberta
- **Desktop subtítulo:** Estratégia de produto · Discovery· Pesquisa qualitativa · Jornadas · Workshops · Co-criação
- **Mobile subtítulo:** Estratégia de produto · Discovery· Pesquisa qualitativa · Jornadas · Workshops · Cocriação
  - Diferença: desktop usa "Co-criação" (com hífen), mobile usa "Cocriação" (sem hífen)

### Item 2 — Experiência e interface
- **Subtítulo (ambos):** UX/UI Design · Arquitetura da informação · Fluxos · Prototipação · Testes de usabilidade · Design Systems

### Item 3 — Dados e evolução
- **Subtítulo (ambos):** Métricas de produto· Pesquisa quantitativa · Análise comportamental ·Testes A/B · NPS

### Item 4 — Liderança de Design
- **Subtítulo (ambos):** Direção de Design · Desenvolvimento de pessoas · Design Critiques · Contratação · Alinhamento com Stakeholders

### Item 5 — Ferramentas
- **Subtítulo (ambos):** Figma · Miro · Photoshop · Illustrator · PowerPoint · Jira · Azure · Google Analytics · Hotjar · Claude Code · VS Code

---

## 8. Cores, bordas e alinhamento

| Propriedade                  | Desktop                              | Mobile           |
|------------------------------|--------------------------------------|------------------|
| Fundo da seção               | `#efefef` (card com border-radius 16px) | `#efefef` (card com border-radius 16px) |
| Cor dos títulos dos items    | `black`                              | `black`          |
| Cor dos subtítulos dos items | `black`                              | `black`          |
| Alinhamento de texto         | left                                 | left             |
| Separadores entre items      | nenhum                               | nenhum           |

---

## 9. Diferenças intencionais desktop × mobile

| Aspecto                  | Desktop                                         | Mobile                                        |
|--------------------------|-------------------------------------------------|-----------------------------------------------|
| Section title            | 96px (Display/XL), 1 linha                      | 36px (Heading/H2), 2 linhas                   |
| Container                | card cinza (#efefef), border-radius 16px, padding right 268px | card cinza (#efefef), border-radius 16px, padding 32px 24px |
| Layout interno           | inline-grid com posicionamento absoluto         | lista vertical com posicionamento absoluto    |
| Título de cada item      | 36px Inter Tight **Medium** (Heading/H2)        | 24px Inter Tight **Regular** (Heading/H3)     |
| Subtítulo de cada item   | 20px Inter Tight Medium, `whitespace-nowrap`    | 14px Inter Tight Medium, quebra em múltiplas linhas |
| Largura do subtítulo     | inline (sem limite explícito, nowrap)           | ~294px                                        |
| "Co-criação" (item 1)    | Com hífen: "Co-criação"                         | Sem hífen: "Cocriação"                        |

---

## 10. O que não foi possível confirmar

- **Correspondência visual dos SVGs:** a associação entre cada `src/media/icon-*.svg` e seu item foi inferida pelos nomes dos arquivos e pela ordem posicional no Figma. Não foi verificada visualmente.
- **Altura exata do container desktop:** calculada como ~604px com base nos offsets e alturas dos items; pode diferir por até ~10–20px dependendo da altura real dos subtítulos no multi-line.
- **Gap exato entre ícone e texto no mobile:** estimado em ~14px; o Figma usa percentuais relativos (6.15%, 85.64%) sem largura explícita do ícone em px.
