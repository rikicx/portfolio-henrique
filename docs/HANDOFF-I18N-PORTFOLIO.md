# HANDOFF — Internacionalização do Portfólio (v2-eng)

Documento de referência para a implementação bilíngue do portfólio de Henrique M. Silva.
Registra todas as decisões aprovadas, a arquitetura definida e o plano de execução.

**Branch:** `v2-eng`
**Data da sessão de planejamento:** 2026-07-01
**Status:** planejamento concluído — nenhuma linha de código alterada ainda.

---

## 1. Objetivo

Adicionar uma versão em inglês do portfólio, com português como idioma padrão e inglês em rotas prefixadas por `/en`.

Requisitos centrais:
- Nenhuma rota PT existente pode ser quebrada ou alterada.
- A URL é a única fonte de verdade do idioma — sem localStorage, sem detecção automática do navegador, sem redirecionamento automático.
- Zero dependências externas novas.
- A primeira fase entrega uma fatia vertical completa: rota `/en`, Home inglesa, Navbar bilíngue, Footer bilíngue e SEO básico da Home.

---

## 2. Decisões já aprovadas

| Decisão | Detalhe |
|---------|---------|
| Idioma padrão | Português (sem prefixo) |
| Prefixo EN | `/en` |
| Fonte de verdade do idioma | URL — `pathname.startsWith('/en')` → EN; qualquer outro → PT |
| localStorage | **Não usar** |
| Detecção de `navigator.language` | **Não usar** nesta fase |
| Redirecionamento automático | **Não usar** |
| Dependências externas | **Não instalar** |
| `LanguageProvider` | Dentro do `<BrowserRouter>` (exige `useLocation()`) |
| Slug do Itaú | Manter `/en/work/itau-empreendedor` (igual ao PT) |
| Rota genérica `/en/work/:slug` | **Proibida** — rotas explícitas por case |
| Formulário de contato | Mesmo Formspree para PT e EN |
| Currículo EN | Criar somente quando o Google Doc EN existir |
| OG image EN | Criar antes da publicação da V2 |
| Prerender / SSG | Avaliar depois que a versão EN estiver funcional |
| Copyright centralizado | Somente quando Navbar e Footer forem adaptados (fase 1) |
| `noIndex` em `/en` na fase 1 | **Decisão pendente** — ver seção 13 |

---

## 3. Arquitetura proposta

### Princípio único

```
pathname === '/en' ou pathname.startsWith('/en/')  →  lang = 'en'
qualquer outro pathname                             →  lang = 'pt'
```

Cálculo síncrono, sem estado adicional.

### Três responsabilidades separadas

**`src/context/LanguageContext.jsx`** — responde "em qual idioma estou?"

Único arquivo que exporta:
- `LanguageContext` — objeto de contexto React
- `LanguageProvider` — componente que usa `useLocation()`, calcula `lang`, atualiza `document.documentElement.lang` via `useEffect`, e provê o contexto
- `useLanguage()` — hook que consome o contexto; lança erro se usado fora do Provider

Sem lógica de roteamento. Sem `useLanguage.js` separado.

**`src/content/routes.js`** — responde "para onde o seletor navega?"

Exporta `ROUTE_PAIRS` e a função `getAlternateRoute(pathname, targetLang)`.
Único lugar onde o mapeamento PT ↔ EN existe — sem duplicação.

**`src/content/{pt,en}/*.js`** — dados puros por módulo

Sem lógica, sem imports. Cada arquivo exporta um objeto `default` com as strings de um componente em um idioma. Componentes importam os dois idiomas e selecionam via `useLanguage()`.

```js
// Padrão de uso nos componentes (não implementar agora)
import pt from '../content/pt/hero.js'
import en from '../content/en/hero.js'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { lang } = useLanguage()
  const c = lang === 'en' ? en : pt
  // usa c.subtitle, c.body, c.cta...
}
```

### Posicionamento do LanguageProvider em App.jsx

```jsx
// Estrutura conceitual — não implementar agora
<BrowserRouter>
  <ScrollToTop />              {/* usa useLocation() — não precisa do contexto de idioma */}
  <RouteTransitionLoader />    {/* idem */}
  <LanguageProvider>           {/* filho do BrowserRouter — useLocation() válido aqui */}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/en" element={<HomePage />} />   {/* fase 1 — adicionado no commit 3 */}
      {/* todas as rotas PT existentes sem alteração */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    <BackToTopButton />
  </LanguageProvider>
</BrowserRouter>
```

### Padrão de cada componente localizado

1. Importa `pt/modulo.js` e `en/modulo.js`
2. Chama `useLanguage()` para obter `lang`
3. Seleciona `const c = lang === 'en' ? en : pt`
4. Usa `c.propriedade` no JSX

---

## 4. Mapa ROUTE_PAIRS

```js
// src/content/routes.js — estrutura conceitual (não implementar agora)

export const ROUTE_PAIRS = [
  { pt: '/',                                       en: '/en',                                      enabled: true  },
  { pt: '/sobre',                                  en: '/en/about',                                enabled: false },
  { pt: '/trabalhos',                              en: '/en/work',                                 enabled: false },
  { pt: '/contato',                                en: '/en/contact',                              enabled: false },
  { pt: '/trabalhos/qi-platform',                  en: '/en/work/qi-platform',                     enabled: false },
  { pt: '/trabalhos/emr-integration',              en: '/en/work/emr-integration',                 enabled: false },
  { pt: '/trabalhos/gerdau-storeroom',             en: '/en/work/gerdau-storeroom',                enabled: false },
  { pt: '/trabalhos/gerdau-smartlog',              en: '/en/work/gerdau-smartlog',                 enabled: false },
  { pt: '/trabalhos/itau-empreendedor',            en: '/en/work/itau-empreendedor',               enabled: false },
  { pt: '/trabalhos/3ph-hrcrs-digital-ecosystem',  en: '/en/work/3ph-hrcrs-digital-ecosystem',     enabled: false },
]

export function getAlternateRoute(pathname, targetLang) {
  const pair = ROUTE_PAIRS.find((p) => p.pt === pathname || p.en === pathname)
  if (!pair || !pair.enabled) return null
  return targetLang === 'en' ? pair.en : pair.pt
}
```

**Regras:**
- `getAlternateRoute` retorna `null` quando o par não existe no mapa **ou** quando `enabled: false`.
- O seletor usa o retorno: `null` → opção desabilitada; string → navega.
- Para habilitar um par em fase futura: mudar `enabled: false` para `true`, adicionar a `<Route>` em `App.jsx`, criar os arquivos de conteúdo EN da página correspondente.

---

## 5. Estrutura de rotas PT e EN

### Fase 1 — rotas ao final desta fase

| Rota | Idioma | Componente | Origem |
|------|--------|------------|--------|
| `/` | PT | `HomePage` | existente, adaptado |
| `/sobre` | PT | `AboutPage` | inalterado |
| `/trabalhos` | PT | `WorksPage` | inalterado |
| `/contato` | PT | `ContactPage` | inalterado |
| `/trabalhos/qi-platform` | PT | `QiPlatformPage` | inalterado |
| `/trabalhos/emr-integration` | PT | `EmrIntegrationPage` | inalterado |
| `/trabalhos/gerdau-storeroom` | PT | `GerdauStoreroomPage` | inalterado |
| `/trabalhos/gerdau-smartlog` | PT | `GerdauSmartlogPage` | inalterado |
| `/trabalhos/itau-empreendedor` | PT | `ItauEmpreendedorPage` | inalterado |
| `/trabalhos/3ph-hrcrs-digital-ecosystem` | PT | `ThreePHHrcrsPage` | inalterado |
| `/en` | EN | `HomePage` | **novo** |
| `*` (404) | PT | `NotFoundPage` | inalterado |

### Rotas EN planejadas para fases futuras

| Fase | Rota EN | Equivalente PT |
|------|---------|---------------|
| 2 | `/en/about` | `/sobre` |
| 3 | `/en/work` | `/trabalhos` |
| 4 | `/en/contact` | `/contato` |
| 5 | `/en/work/qi-platform` | `/trabalhos/qi-platform` |
| 5 | `/en/work/emr-integration` | `/trabalhos/emr-integration` |
| 5 | `/en/work/gerdau-storeroom` | `/trabalhos/gerdau-storeroom` |
| 5 | `/en/work/gerdau-smartlog` | `/trabalhos/gerdau-smartlog` |
| 5 | `/en/work/itau-empreendedor` | `/trabalhos/itau-empreendedor` |
| 5 | `/en/work/3ph-hrcrs-digital-ecosystem` | `/trabalhos/3ph-hrcrs-digital-ecosystem` |

Cada rota EN de case terá sua própria `<Route>` explícita — sem rota genérica `/en/work/:slug`.

---

## 6. Comportamento do seletor de idioma

### Implementação

O seletor renderiza dois elementos: um para PT e um para EN.

- Idioma ativo: elemento não-interativo com `aria-current="true"`
- Idioma alternativo habilitado: `<Link>` navegando para `getAlternateRoute(pathname, targetLang)`
- Idioma alternativo desabilitado: `<span>` com `aria-disabled="true"` e estilo de opacidade reduzida — visível e anunciável por leitores de tela, mas não ativável

Não usar `<button disabled>` para o estado desabilitado — esse padrão esconde o elemento de leitores de tela.

### Comportamento por rota (fase 1)

| Rota atual | Lang ativo | Opção EN | Opção PT |
|------------|-----------|----------|----------|
| `/` | **PT** | link → `/en` | não-interativo |
| `/en` | **EN** | não-interativo | link → `/` |
| `/sobre` | **PT** | **desabilitada** | não-interativo |
| `/trabalhos` | **PT** | **desabilitada** | não-interativo |
| `/contato` | **PT** | **desabilitada** | não-interativo |
| `/trabalhos/qi-platform` | **PT** | **desabilitada** | não-interativo |
| `/trabalhos/emr-integration` | **PT** | **desabilitada** | não-interativo |
| `/trabalhos/gerdau-storeroom` | **PT** | **desabilitada** | não-interativo |
| `/trabalhos/gerdau-smartlog` | **PT** | **desabilitada** | não-interativo |
| `/trabalhos/itau-empreendedor` | **PT** | **desabilitada** | não-interativo |
| `/trabalhos/3ph-hrcrs-digital-ecosystem` | **PT** | **desabilitada** | não-interativo |
| `*` (404) | **PT** | **desabilitada** (pathname fora do mapa) | não-interativo |

### Posição na Navbar

- Desktop: na `rightArea`, à esquerda do CTA "Entre em contato"
- Mobile: no `mobileFooter`
- Alterações em `Navbar.module.css` são somente aditivas (novas classes CSS, nenhuma modificação de classes existentes)

---

## 7. Comportamento dos links internos da Home inglesa

Em `/en`, todos os componentes da Home exibem conteúdo em inglês. No entanto, vários links internos apontam para rotas PT na fase 1. Esta tabela documenta o comportamento aceito e o estado futuro esperado.

| Elemento | Link em fase 1 | Destino real | Seletor no destino | Estado futuro |
|----------|---------------|-------------|-------------------|---------------|
| Logo Navbar | `/en` (via `en/nav.js`) | Home EN | EN ativo | permanente |
| Navbar "Work" (labels EN, dropdown) | `/trabalhos`, `/trabalhos/*` | WorksPage PT / cases PT | EN desabilitado | atualizar na fase 3/5 |
| Navbar "About" | `/sobre` | AboutPage PT | EN desabilitado | atualizar na fase 2 |
| Navbar CTA "Contact" | `/contato` | ContactPage PT | EN desabilitado | atualizar na fase 4 |
| Cards de projetos (Projects.jsx) | `/trabalhos/qi-platform`, `/trabalhos/gerdau-storeroom`, `/trabalhos/emr-integration` | Cases PT | EN desabilitado | atualizar na fase 5 |
| Hero âncora | `#projetos` | Seção da mesma página | — | permanente (ID interno, não traduzível) |
| Quote CTA | `#` (desabilitado) | nada | — | permanente até artigo existir |
| About "Learn more" | `/sobre` | AboutPage PT | EN desabilitado | atualizar na fase 2 |
| About "Resume" | `/curriculo/index.html` | Google Doc PT | — | atualizar quando EN doc existir |
| About LinkedIn | externo | externo | — | permanente |
| Footer CTA "Let's talk" | `/contato` | ContactPage PT | EN desabilitado | atualizar na fase 4 |
| Footer "Resume" | `/curriculo/index.html` | Google Doc PT | — | atualizar quando EN doc existir |
| Footer LinkedIn | externo | externo | — | permanente |
| Footer Email | externo | externo | — | permanente |

**Consequência aceita:** um usuário em `/en` que clica em qualquer link de conteúdo interno (exceto o logo) chega em uma página PT onde o seletor mostra EN desabilitado. Para voltar a `/en`, deve usar o botão Voltar ou o seletor (que em `/sobre`, por exemplo, estará desabilitado para EN, então só o botão Voltar funciona).

**`/en` não deve ser publicado ativamente** (redes sociais, newsletter, LinkedIn bio) enquanto `/en/about`, `/en/work` e `/en/contact` não existirem. A decisão sobre `noIndex` em `/en` durante a fase 1 está pendente (ver seção 13).

**Nota sobre `isTrabalhos` no Navbar:** a verificação `location.pathname.startsWith('/trabalhos')` não cobre rotas futuras `/en/work/*`. Na fase 1 não há rotas `/en/work/*`, então o dropdown Works no Navbar EN nunca terá o estilo "ativo". Aceitável na fase 1 — corrigir quando `/en/work` for criado na fase 3.

---

## 8. Arquivos que serão criados e alterados

### Novos: 22 arquivos

| # | Arquivo |
|---|---------|
| 1 | `src/context/LanguageContext.jsx` |
| 2 | `src/content/routes.js` |
| 3 | `src/content/pt/nav.js` |
| 4 | `src/content/pt/footer.js` |
| 5 | `src/content/pt/hero.js` |
| 6 | `src/content/pt/stats.js` |
| 7 | `src/content/pt/projects.js` |
| 8 | `src/content/pt/quote.js` |
| 9 | `src/content/pt/about-section.js` |
| 10 | `src/content/pt/skills.js` |
| 11 | `src/content/pt/experience.js` |
| 12 | `src/content/pt/home-seo.js` |
| 13 | `src/content/en/nav.js` |
| 14 | `src/content/en/footer.js` |
| 15 | `src/content/en/hero.js` |
| 16 | `src/content/en/stats.js` |
| 17 | `src/content/en/projects.js` |
| 18 | `src/content/en/quote.js` |
| 19 | `src/content/en/about-section.js` |
| 20 | `src/content/en/skills.js` |
| 21 | `src/content/en/experience.js` |
| 22 | `src/content/en/home-seo.js` |

### Modificados: 13 arquivos

| Arquivo | O que muda |
|---------|-----------|
| `src/App.jsx` | `<LanguageProvider>` dentro do BrowserRouter; `<Route path="/en">` adicionada |
| `src/components/Seo.jsx` | Props `lang` e `alternatePath`; `og:locale` dinâmico; injeção de hreflang |
| `src/components/Navbar.jsx` | Conteúdo via arquivos PT/EN (commit 3); seletor PT\|EN (commit 4) |
| `src/components/Navbar.module.css` | Classes CSS do seletor (commit 4, somente aditivas) |
| `src/components/Footer.jsx` | Conteúdo via `pt/footer.js` e `en/footer.js` |
| `src/components/Hero.jsx` | Conteúdo via `pt/hero.js` e `en/hero.js` |
| `src/components/Stats.jsx` | Conteúdo via `pt/stats.js` e `en/stats.js` |
| `src/components/Projects.jsx` | Conteúdo via `pt/projects.js` e `en/projects.js` |
| `src/components/Quote.jsx` | Conteúdo via `pt/quote.js` e `en/quote.js` |
| `src/components/About.jsx` | Conteúdo via `pt/about-section.js` e `en/about-section.js` |
| `src/components/Skills.jsx` | Conteúdo via `pt/skills.js` e `en/skills.js` |
| `src/components/Experience.jsx` | Conteúdo via `pt/experience.js` e `en/experience.js` |
| `src/pages/HomePage.jsx` | Props de SEO via `pt/home-seo.js` e `en/home-seo.js` |

### Garantia de não-alteração

Os arquivos abaixo não são tocados na fase 1:

`src/pages/AboutPage.jsx` · `src/pages/WorksPage.jsx` · `src/pages/ContactPage.jsx` · `src/pages/NotFoundPage.jsx` · todos os `src/pages/cases/*.jsx` · `src/components/RevealSection.jsx` · `src/components/TypingTitle.jsx` · `src/components/OtherProjectsSection.jsx` · `src/components/BackToTopButton.jsx` · `src/components/PageTransitionLoader.jsx` · `src/components/ScrollToTop.jsx` · `src/components/RouteTransitionLoader.jsx` · `src/styles/global.css` · `src/routeTransitionState.js` · `index.html` · `public/robots.txt` · `public/sitemap.xml` · `vercel.json`

---

## 9. Plano dos 5 commits

### Commit 1 — Fundação de idioma e mapa de rotas

**Arquivos novos (2):**
- `src/context/LanguageContext.jsx`
- `src/content/routes.js`

**Arquivos modificados:** nenhum

Os dois arquivos são criados mas não importados por nenhum componente. O bundler não os inclui. O site é 100% idêntico ao estado anterior.

**Validações obrigatórias após o commit:**
- `npm run build` → limpo, sem warnings
- `git diff --check` → limpo
- Abrir `/` no browser → idêntico ao estado anterior
- Abrir `/sobre`, `/trabalhos`, qualquer case → idênticos ao estado anterior

**Rollback:** `git revert HEAD` — remove os 2 arquivos, zero impacto no site.

---

### Commit 2 — Arquivos de conteúdo PT e EN da Home e shell

**Arquivos novos (20):**
- `src/content/pt/nav.js`, `footer.js`, `hero.js`, `stats.js`, `projects.js`, `quote.js`, `about-section.js`, `skills.js`, `experience.js`, `home-seo.js`
- `src/content/en/nav.js`, `footer.js`, `hero.js`, `stats.js`, `projects.js`, `quote.js`, `about-section.js`, `skills.js`, `experience.js`, `home-seo.js`

**Arquivos modificados:** nenhum

Dados puros. Não importados por ninguém. Build não muda.

**Atenção na extração das strings PT:** copiar literalmente do código existente, preservando caracteres especiais (`→`, `↗︎`, `©`, `&amp;`), variantes desktop/mobile (`bodyDesktop`/`bodyMobile`), e quebras de linha intencionais. Qualquer diferença de um caractere quebra o visual PT.

**Validações obrigatórias após o commit:**
- `npm run build` → limpo
- `git diff --check` → limpo
- Site PT idêntico ao estado anterior (nenhum componente foi alterado)

**Rollback:** `git revert HEAD` — remove os 20 arquivos.

---

### Commit 3 — Home inglesa completa + rota /en + SEO

**Arquivos novos:** nenhum

**Arquivos modificados (12):**
- `src/App.jsx`
- `src/components/Seo.jsx`
- `src/components/Hero.jsx`
- `src/components/Stats.jsx`
- `src/components/Projects.jsx`
- `src/components/Quote.jsx`
- `src/components/About.jsx`
- `src/components/Skills.jsx`
- `src/components/Experience.jsx`
- `src/components/Footer.jsx`
- `src/components/Navbar.jsx` (conteúdo PT/EN apenas; seletor não incluso)
- `src/pages/HomePage.jsx`

**Regra inviolável:** a `<Route path="/en">` e a adaptação de todos os componentes acontecem no mesmo commit. Não deve existir nenhum checkpoint funcional onde `/en` existe mas exibe conteúdo PT.

**O que muda em cada arquivo:**

`App.jsx`: adiciona `<LanguageProvider>` como filho do `<BrowserRouter>` (após `<RouteTransitionLoader />`); adiciona `<Route path="/en" element={<HomePage />} />` antes do `<Route path="*">`.

`Seo.jsx`: adiciona props opcionais `lang` (default `'pt'`) e `alternatePath`; torna `og:locale` dinâmico (`pt_BR` ou `en_US`); injeta/remove `<link rel="alternate" hreflang>` quando `alternatePath` é fornecido. Defaults existentes preservados — páginas PT que não passam `lang` recebem `'pt'` e comportamento atual.

Demais componentes: importam os dois arquivos de conteúdo; usam `useLanguage()` para selecionar.

`Navbar.jsx` neste commit: usa conteúdo de `pt/nav.js` e `en/nav.js` para labels. O logo usa `c.logoTo` (`'/'` em PT, `'/en'` em EN). Sem seletor ainda.

`HomePage.jsx`: importa `pt/home-seo.js` e `en/home-seo.js`; usa `useLanguage()`; passa `title`, `description`, `lang`, `path` e `alternatePath` para `<Seo>`.

**Validações obrigatórias após o commit:**

```
# Rotas PT — todas devem ser idênticas ao estado anterior
/ → 200, conteúdo PT
/sobre → 200, conteúdo PT (AboutPage inalterada)
/trabalhos → 200, conteúdo PT (WorksPage inalterada)
/contato → 200, conteúdo PT (ContactPage inalterada)
/trabalhos/qi-platform → 200 (case inalterado)
/trabalhos/emr-integration → 200 (case inalterado)
/trabalhos/gerdau-storeroom → 200 (case inalterado)
/trabalhos/gerdau-smartlog → 200 (case inalterado)
/trabalhos/itau-empreendedor → 200 (case inalterado)
/trabalhos/3ph-hrcrs-digital-ecosystem → 200 (case inalterado)

# Rota EN nova
/en → 200, todos os componentes exibem conteúdo EN
document.documentElement.lang === 'en' em /en
document.documentElement.lang === 'pt-BR' em /
og:locale === 'en_US' em /en
og:locale === 'pt_BR' em /
<link rel="canonical" href="https://henriquesilva.design/en"> em /en
<link rel="alternate" hreflang="pt-BR" href="https://henriquesilva.design/"> em /en
<link rel="alternate" hreflang="en" href="https://henriquesilva.design/en"> em /en
```

**Rollback:** `git revert HEAD` — restaura os 12 arquivos ao estado pré-commit; a rota `/en` é removida junto com a reversão de `App.jsx`.

---

### Commit 4 — Seletor de idioma na Navbar (desktop e mobile)

**Arquivos novos:** nenhum

**Arquivos modificados (2):**
- `src/components/Navbar.jsx` — adiciona o elemento seletor ao JSX; importa `getAlternateRoute` de `src/content/routes.js`; usa `useLanguage()` para determinar idioma ativo e estado da opção alternativa
- `src/components/Navbar.module.css` — adiciona classes novas para o seletor (sem modificar nenhuma classe existente)

**Validações obrigatórias após o commit:**

```
# Seletor nos dois sentidos habilitados
Em /: PT ativo (não-interativo), EN como <Link> para /en
Em /en: EN ativo (não-interativo), PT como <Link> para /

# Seletor nas rotas desabilitadas
Em /sobre: PT ativo, EN com aria-disabled="true", sem href, não clicável
Em /trabalhos: idem
Em /contato: idem
Em /trabalhos/* (qualquer case): idem
Em rota 404: idem

# Acessibilidade do Navbar — sem regressão
Tab order no desktop preservado
Escape fecha dropdown sem fechar menu mobile (comportamento atual preservado)
aria-expanded no hamburger preservado
Seletor navigável por teclado (Tab + Enter/Space)
aria-current="true" no idioma ativo
aria-disabled="true" na opção desabilitada

# Build
npm run build → limpo
git diff --check → limpo
```

**Rollback:** `git revert HEAD` — remove o seletor do Navbar; `/en` continua funcional sem seletor; Navbar.module.css volta ao estado do commit 3.

---

### Commit 5 — QA e ajustes finais

**Arquivos:** variáveis — apenas correções identificadas nos testes dos commits anteriores.

Exemplos típicos:
- Caractere especial copiado incorretamente em arquivo de conteúdo
- Ajuste fino de margem do seletor em resolução específica
- Inconsistência de capitalização entre variante desktop e mobile
- Texto truncado em EN por ser mais longo que o PT equivalente

**Validação final (checklist completo):**

```
# Todas as 11 rotas PT + /en
/ → Home PT idêntica ao estado original
/sobre → AboutPage PT idêntica
/trabalhos → WorksPage PT idêntica
/contato → ContactPage PT idêntica
/trabalhos/qi-platform → case PT idêntico
/trabalhos/emr-integration → case PT idêntico
/trabalhos/gerdau-storeroom → case PT idêntico
/trabalhos/gerdau-smartlog → case PT idêntico
/trabalhos/itau-empreendedor → case PT idêntico
/trabalhos/3ph-hrcrs-digital-ecosystem → case PT idêntico
/en → Home EN completa, seletor funcional

# Responsividade
/ em mobile (390px) → idêntica ao estado original
/en em mobile (390px) → conteúdo EN, seletor visível no menu mobile

# Acessibilidade
Navegar por teclado por toda a Navbar no desktop
Abrir/fechar menu mobile por teclado
Seletor acessível por teclado nas duas rotas habilitadas
```

---

## 10. Estado atual do repositório

**Branch:** `v2-eng`
**Estado:** limpo (clean working tree)
**Commits recentes relevantes:**
```
757a606 fix: update resume document link
2b496aa fix: normalize external link arrows on iOS
50ab9a7 fix: prevent LinkedIn arrow emoji on iOS
b569e4a fix: compact mobile footer spacing
c7bac45 fix: refine mobile footer spacing and link icons
```

**Arquivos não rastreados preexistentes:**
- `src/components/InitialSiteLoader.module.css` — arquivo de CSS não rastreado presente antes desta sessão de planejamento. Não deve ser tocado durante a implementação i18n.

---

## 11. Riscos identificados

### Risco A — Extração de strings PT com erro de caractere
**Nível:** médio

Strings como `→`, `↗︎`, `©`, `&amp;`, variantes `bodyDesktop`/`bodyMobile`, e textos com quebra de linha (`\n`) devem ser copiados literalmente do código existente. Qualquer diferença quebra o visual PT sem erro de build.

**Mitigação:** copiar do código, não redigitar. Testar visualmente cada componente em PT imediatamente após o commit 3, antes de avançar para o commit 4.

### Risco B — `isTrabalhos` não cobre rotas EN futuras
**Nível:** baixo (fase 1), médio (fases seguintes)

`location.pathname.startsWith('/trabalhos')` em `Navbar.jsx` ativa o estilo visual do dropdown Works. Não cobre `/en/work/*`. Na fase 1 não há rotas `/en/work/*`, então o problema não se manifesta.

**Ação necessária na fase 3:** estender para `startsWith('/trabalhos') || startsWith('/en/work')` quando `/en/work` for criado.

### Risco C — Navbar.jsx modificado em dois commits consecutivos
**Nível:** baixo

Commit 3 refatora o conteúdo do Navbar; commit 4 adiciona o seletor. Se houver trabalho paralelo no mesmo arquivo entre os dois commits, há risco de conflito.

**Mitigação:** executar os commits sequencialmente, sem branches paralelas tocando `Navbar.jsx`.

### Risco D — `document.documentElement.lang` não visível para crawlers sem JS
**Nível:** aceito

A SPA entrega `lang="pt-BR"` no `index.html` estático para qualquer rota. O `LanguageProvider` muda o atributo em runtime via `useEffect` — visível para agentes com JS, não para crawlers estáticos. Impacto aceitável para portfólio pessoal na fase 1.

**Endereçar:** avaliar prerender/SSG após a versão EN estar funcional (já decidido).

### Risco E — Commit 3 modifica 12 arquivos simultaneamente
**Nível:** médio

É o commit de maior superfície e maior risco de regressão. Mitigado pelo fato de os commits 1 e 2 prepararem toda a infraestrutura de dados antecipadamente — o commit 3 apenas conecta componentes a arquivos já existentes.

**Se um componente regredir:** reverter o commit 3 inteiro (`git revert HEAD`) restaura todos os 12 arquivos ao estado estável.

### Risco F — `/en` acessível mas não completamente preparada para indexação
**Nível:** decisão pendente (ver seção 13)

A rota `/en` existirá em produção após os commits 3+4. Com `noIndex: false` (padrão atual), o Googlebot indexará `/en` com links que levam a conteúdo PT — o que pode gerar sinais mistos para o ranqueamento. Com `noIndex: true`, a página não é indexada durante a fase 1.

---

## 12. Pontos ainda não confirmados

Estes pontos precisam de resposta antes ou durante a implementação:

1. **`noIndex` em `/en` durante a fase 1**
   - Opção A: `noIndex: true` em `home-seo.js` EN — não indexar durante a fase 1; remover quando `/en/about`, `/en/work` e `/en/contact` existirem.
   - Opção B: `noIndex: false` — indexar desde já com o par hreflang `/` ↔ `/en`.
   - **Decisão pendente.**

2. **Currículo EN**
   - Quando o Google Doc em inglês existir, criar `public/curriculo-en/index.html` com redirect.
   - Atualizar `en/footer.js` e `en/about-section.js` para apontar para `/curriculo-en/index.html`.
   - Atualizar `vercel.json` para excluir `/curriculo-en/` do rewrite SPA.
   - **Não bloqueia a fase 1.**

3. **OG image EN**
   - A `og-image.png` atual contém texto em PT.
   - Criar `og-image-en.png` e atualizar `en/home-seo.js` antes de publicar `/en` ativamente.
   - **Não bloqueia o desenvolvimento; bloqueia a publicação.**

4. **Seletor: "desabilitado" ou "oculto"?**
   - O plano atual recomenda desabilitado (visível, não clicável, `aria-disabled="true"`).
   - Alternativa: ocultar o seletor completamente em páginas sem versão EN.
   - O estado desabilitado é mais informativo (o usuário sabe que existe versão EN em outras páginas), mas altera o layout da Navbar quando EN está indisponível.
   - **Confirmar antes do commit 4.**

5. **`og:locale:alternate` no `index.html` estático**
   - O `index.html` tem `<meta property="og:locale" content="pt_BR">` hardcoded.
   - Crawlers de redes sociais (sem JS) lerão `pt_BR` ao compartilhar URLs EN.
   - `Seo.jsx` sobrescreve o valor em runtime para agentes com JS.
   - **Aceito na fase 1; revisar junto com prerender em fase posterior.**

---

## 13. Próximo passo exato

Antes de qualquer código:

1. **Confirmar a decisão sobre `noIndex`** em `/en` durante a fase 1 (seção 12, ponto 1).
2. **Confirmar o comportamento do seletor** em páginas sem versão EN: desabilitado (visível) ou oculto (seção 12, ponto 4).

Após confirmação, executar:

```bash
# Verificar estado limpo do repositório
git status --short
git diff --check

# Criar os dois primeiros arquivos (commit 1)
# src/context/LanguageContext.jsx
# src/content/routes.js
```

O commit 1 não altera nenhum arquivo existente e não tem impacto no site em produção.

---

*Documento gerado em 2026-07-01. Branch: v2-eng. Nenhum arquivo do projeto foi alterado durante a criação deste documento.*
