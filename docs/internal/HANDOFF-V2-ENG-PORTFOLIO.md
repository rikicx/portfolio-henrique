# HANDOFF — Portfólio Henrique Silva — V2 em Inglês

## Objetivo deste documento

Este arquivo serve para retomar o trabalho da versão 2.0 em inglês do portfólio após reinício do Mac, sem assumir até onde a sessão anterior do Claude Code chegou.

A prioridade imediata é **inspecionar o estado real do repositório antes de alterar qualquer arquivo**.

---

# 1. Estado conhecido antes do reinício

## Repositório local

```text
/Users/henriquem.silva/Documents/portfolio-henrique
```

## Branch de trabalho criada para a versão em inglês

```text
v2-eng
```

## Branch anterior estável

```text
feature/seo
```

Último commit conhecido nessa base:

```text
757a606 fix: update resume document link
```

## Stack

- React 18
- Vite
- React Router DOM v7
- CSS Modules
- JavaScript
- Vercel
- GitHub

## Situação do site atual

- A versão em português já está publicada.
- A V2 em inglês deve ser desenvolvida isoladamente na branch `v2-eng`.
- A versão publicada não deve ser alterada durante o desenvolvimento inicial da V2.

---

# 2. Regra obrigatória ao retomar

Antes de criar, editar, mover, renomear ou excluir qualquer arquivo, executar:

```bash
cd /Users/henriquem.silva/Documents/portfolio-henrique

git branch --show-current
git status --short
git log -5 --oneline --decorate
```

Depois, verificar se houve alterações recentes relacionadas a internacionalização:

```bash
git diff --stat
git diff --check

find src -maxdepth 3 -type f | sort | grep -E 'Language|content|i18n|locale|routes'

grep -RInE \
  --exclude-dir=node_modules \
  --exclude-dir=dist \
  --exclude-dir=.git \
  'LanguageProvider|LanguageContext|useLanguage|ROUTE_PAIRS|/en|home-seo|alternatePath|hreflang|og:locale' \
  src index.html public vercel.json 2>/dev/null
```

Se houver arquivos modificados ou não rastreados, **não sobrescrever nem apagar nada**. Primeiro listar e explicar exatamente o que existe.

---

# 3. Limpeza já concluída

Existia um arquivo não rastreado órfão:

```text
src/components/InitialSiteLoader.module.css
```

Ele pertencia à antiga intro preta com logo animado, removida da V1.

Foi confirmado que nenhum arquivo o importava, e ele foi excluído.

O build foi solicitado depois da exclusão, mas como o Mac reiniciou, é necessário confirmar novamente:

```bash
git status --short
git diff --check
npm run build
```

---

# 4. Auditoria já realizada

A auditoria identificou:

- SPA React/Vite sem infraestrutura de i18n.
- Conteúdo visível majoritariamente hardcoded em JSX.
- `BrowserRouter` e rotas definidos em `src/App.jsx`.
- `Layout` compartilhado com `Navbar` e `Footer`.
- SEO client-side via `src/components/Seo.jsx`.
- `index.html` com `lang="pt-BR"`, metadados e Open Graph em português.
- Português permanece sem prefixo.
- Inglês deverá usar prefixo `/en`.
- Não instalar `react-i18next` nesta fase.
- Não duplicar páginas inteiras.

---

# 5. Decisões de arquitetura já tomadas

## Fonte de verdade do idioma

A URL será a única fonte de verdade:

```text
/ e demais rotas sem /en → português
/en e rotas iniciadas por /en/ → inglês
```

Não usar na primeira fase:

- `localStorage`
- redirecionamento automático
- `navigator.language`
- detecção por IP
- bibliotecas externas de internacionalização

## LanguageProvider

Se usar `useLocation()`, o `LanguageProvider` precisa ficar **dentro** do `BrowserRouter`:

```jsx
<BrowserRouter>
  <LanguageProvider>
    {/* aplicação */}
  </LanguageProvider>
</BrowserRouter>
```

O contexto deve preferencialmente exportar no mesmo arquivo:

- `LanguageContext`
- `LanguageProvider`
- `useLanguage()`

Evitar criar outro arquivo `useLanguage.js` sem necessidade.

## Rotas

Não usar rota genérica:

```text
/en/work/:slug
```

Manter rotas explícitas por case.

## Slug Itaú

Manter inicialmente:

```text
/en/work/itau-empreendedor
```

## Currículo em inglês

Só criar rota e link quando o Google Doc em inglês existir.

## Formulário

Usar futuramente o mesmo Formspree para PT e EN, alterando textos e `_language` conforme a rota.

## SEO

- A limitação da SPA é conhecida.
- Não instalar prerender agora.
- Avaliar prerender depois que a versão inglesa estiver funcional.
- Criar OG image inglesa antes de publicar a V2.

---

# 6. Rotas atuais em português

```text
/
/sobre
/trabalhos
/contato
/trabalhos/qi-platform
/trabalhos/emr-integration
/trabalhos/gerdau-storeroom
/trabalhos/gerdau-smartlog
/trabalhos/itau-empreendedor
/trabalhos/3ph-hrcrs-digital-ecosystem
* (404)
/curriculo/  → redirect estático para Google Docs
```

Rotas inglesas planejadas:

```text
/en
/en/about
/en/work
/en/contact
/en/work/qi-platform
/en/work/emr-integration
/en/work/gerdau-storeroom
/en/work/gerdau-smartlog
/en/work/itau-empreendedor
/en/work/3ph-hrcrs-digital-ecosystem
```

---

# 7. Correções importantes aplicadas ao plano anterior

## Não criar `/en` exibindo português

A rota `/en` só deve ser adicionada no mesmo checkpoint em que a Home já renderiza conteúdo em inglês.

Não deixar commit funcional intermediário com:

```text
/en → Home em português
```

## Seletor não pode levar a 404 conhecida

O mapa deve distinguir:

- rotas planejadas;
- rotas habilitadas.

Na primeira fase, apenas:

```text
/ ↔ /en
```

fica habilitado.

Nas demais páginas sem versão inglesa pronta, o seletor não deve enviar o usuário para uma rota inexistente.

## Mapa sem duplicação

Usar pares únicos, por exemplo:

```js
export const ROUTE_PAIRS = [
  { pt: '/', en: '/en', enabled: true },
  { pt: '/sobre', en: '/en/about', enabled: false },
  { pt: '/trabalhos', en: '/en/work', enabled: false },
]
```

Não manter manualmente um mapa PT→EN e outro EN→PT.

## Links internos da Home inglesa

A Home inglesa não pode ser considerada pronta se links principais levarem silenciosamente para páginas em português.

É necessário definir e validar o comportamento de:

- Work / Trabalhos
- cards de projetos
- About
- Contact
- currículo
- Footer
- CTA principal

Durante desenvolvimento local, links temporários podem existir, mas isso bloqueia publicação da V2 até serem resolvidos.

---

# 8. Escopo recomendado da primeira implementação

Criar uma fatia vertical completa e testável limitada a:

- contexto de idioma baseado na URL;
- mapa `ROUTE_PAIRS` com `enabled`;
- rota `/en`;
- Navbar em PT e EN;
- Home em PT e EN;
- Footer em PT e EN;
- seletor `PT | EN` funcional somente no par `/ ↔ /en`;
- `document.documentElement.lang` em runtime;
- SEO básico da Home em PT e EN;
- nenhuma alteração em AboutPage, WorksPage, ContactPage, NotFoundPage ou cases.

## Importante

A primeira fase ainda é relativamente grande. Implementar em passos pequenos e validar após cada conjunto de mudanças.

---

# 9. Arquitetura de conteúdo recomendada

Sem biblioteca externa.

Estrutura conceitual:

```text
src/
  context/
    LanguageContext.jsx

  content/
    routes.js
    pt/
      nav.js
      footer.js
      hero.js
      stats.js
      projects.js
      quote.js
      about-section.js
      skills.js
      experience.js
      home-seo.js
    en/
      nav.js
      footer.js
      hero.js
      stats.js
      projects.js
      quote.js
      about-section.js
      skills.js
      experience.js
      home-seo.js
```

Antes de criar todos esses arquivos, confirmar se algum deles já existe após a sessão interrompida.

---

# 10. Componentes previstos para a primeira fase

Possíveis arquivos modificados:

```text
src/App.jsx
src/components/Navbar.jsx
src/components/Navbar.module.css
src/components/Footer.jsx
src/components/Hero.jsx
src/components/Stats.jsx
src/components/Projects.jsx
src/components/Quote.jsx
src/components/About.jsx
src/components/Skills.jsx
src/components/Experience.jsx
src/components/Seo.jsx
src/pages/HomePage.jsx
```

Não tocar na primeira fase:

```text
src/pages/AboutPage.jsx
src/pages/WorksPage.jsx
src/pages/ContactPage.jsx
src/pages/NotFoundPage.jsx
src/pages/cases/*.jsx
src/components/OtherProjectsSection.jsx
index.html
public/robots.txt
public/sitemap.xml
vercel.json
```

---

# 11. Organização de commits recomendada

No máximo 5 commits coerentes:

1. Fundação de idioma e mapa de rotas.
2. Conteúdo PT/EN da Home e shell.
3. Home inglesa completa + rota `/en` + SEO.
4. Seletor de idioma + Navbar desktop/mobile.
5. QA e ajustes finais.

Evitar muitos commits contendo apenas arquivos de dados sem comportamento utilizável.

Cada commit deve passar:

```bash
git diff --check
npm run build
git status --short
```

Quando relevante:

```bash
git diff -- <arquivos alterados>
```

---

# 12. Regras de trabalho obrigatórias

- Henrique não é desenvolvedor.
- Fornecer comandos completos e prontos.
- Fazer uma etapa por vez.
- Não avançar após erro sem diagnosticar.
- Não usar `git add .` sem revisar arquivos não rastreados.
- Não usar `--force` ou `--legacy-peer-deps` sem necessidade real.
- Não alterar páginas ou componentes fora do escopo.
- Não reescrever conteúdo em português.
- Não inventar traduções finais sem revisão editorial.
- Não afirmar que algo funcionou sem evidência.
- Não publicar a V2 enquanto estiver incompleta.
- Preservar integralmente a versão portuguesa.
- Testar Safari mobile, especialmente Navbar e Footer reveal.
- Preservar `prefers-reduced-motion`.
- Evitar que setas externas virem emoji no iOS; usar apresentação textual já adotada.

---

# 13. Instrução imediata ao Claude Code

Execute somente uma inspeção de retomada.

Não altere arquivos ainda.

Entregue:

1. Branch atual.
2. Status do Git.
3. Últimos 5 commits.
4. Arquivos modificados e não rastreados.
5. Arquivos de i18n já existentes.
6. Trechos já implementados relacionados a `/en`, LanguageContext, conteúdos PT/EN, seletor ou SEO.
7. Diferença entre o estado atual e este plano.
8. O ponto exato de onde o trabalho deve continuar.
9. Confirmação de que nenhum arquivo foi alterado durante a inspeção.

Comandos permitidos nesta inspeção:

```bash
git branch --show-current
git status --short
git log -5 --oneline --decorate
git diff --stat
git diff --check
find
sed -n
cat
grep
```

Não usar `rg`, pois o `ripgrep` não está instalado neste Mac.

---

# 14. Critério para continuar

Somente depois da inspeção:

- se nada foi implementado, iniciar pela fundação de idioma e mapa de rotas;
- se houve implementação parcial, revisar os diffs antes de continuar;
- se houver arquivos incompletos, não sobrescrever cegamente;
- se houver build quebrado, diagnosticar antes de adicionar novas mudanças.

