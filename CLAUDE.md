# CLAUDE.md — Portfolio Henrique Silva

## 1. Leia antes de trabalhar

Antes de qualquer alteração, leia:

1. `PORTFOLIO-CONTEXT.md`
2. este arquivo `CLAUDE.md`
3. o código existente no repositório

Não presuma que o projeto está vazio. Inspecione primeiro.

## 2. Objetivo do projeto

Implementar o portfólio profissional de Henrique M. Silva com alta fidelidade ao Figma.

O site deve apresentar Henrique como Product Designer, Design Leader e profissional de estratégia de produto, preservando a narrativa central:

- ele continua próximo da prática;
- liderança representa ampliação de responsabilidade;
- o trabalho conecta usuários, negócio e tecnologia;
- os cases demonstram decisões, processo e impacto.

## 3. Hierarquia das fontes

Use esta ordem de prioridade:

1. Frames desktop e mobile do Figma — fonte de verdade visual.
2. `PORTFOLIO-CONTEXT.md` — fonte de verdade editorial e factual.
3. Componentes e código já existentes no repositório.
4. Este arquivo — regras técnicas e de processo.

Quando houver conflito, pare e descreva o conflito. Não escolha silenciosamente.

## 4. Regras obrigatórias

- Não altere o Figma.
- Não reescreva textos sem autorização.
- Não invente conteúdo, métricas, responsabilidades ou imagens.
- Não invente uma terceira composição entre desktop e mobile.
- Desktop e mobile devem ser tratados como decisões de design intencionais.
- Responsividade não é apenas reduzir escala.
- Reutilize componentes quando houver repetição real.
- Não crie abstrações prematuras.
- Não adicione bibliotecas ou frameworks sem explicar a necessidade.
- Não substitua imagens, ícones ou SVGs do Figma por equivalentes genéricos.
- Não use um kit de UI que descaracterize o projeto.
- Não implemente animações complexas antes da estrutura, responsividade e conteúdo estarem validados.
- Trabalhe em etapas curtas e pare ao final de cada etapa para revisão.

## 5. Stack técnica

Stack planejada:

- React
- Vite
- TypeScript

Antes de instalar qualquer coisa, verifique o que já existe no repositório.

Se o projeto estiver vazio:

- crie uma aplicação Vite com React e TypeScript;
- use uma solução de rotas adequada para múltiplas páginas;
- use CSS moderno, CSS Modules ou a estrutura já existente;
- não instale Tailwind ou uma biblioteca visual sem aprovação;
- mantenha tokens visuais em CSS custom properties.

## 6. Direção visual

- Fonte principal: Inter Tight.
- Paleta: preto, branco e cinzas.
- Linguagem: editorial, precisa, minimalista e assimétrica.
- Evitar aparência genérica de template SaaS.
- Preservar respiro, escala tipográfica e ritmo entre texto e imagem.
- Desktop principal: 1440 px.
- Mobile de referência: 390 px.
- Margens mobile recorrentes: aproximadamente 24 px.
- As dimensões exatas devem vir do Figma MCP.

## 7. Padrões responsivos conhecidos

- Navbar desktop: logo, navegação e CTA.
- Navbar mobile: logo e menu hamburger; usar a composição definida no Figma.
- Projetos selecionados: grid no desktop e slider/scroll horizontal no mobile.
- Timeline/experiência: composição horizontal no desktop; lista vertical com linha lateral no mobile.
- Fotos e imagens podem mudar de posição entre desktop e mobile.
- Grandes títulos devem receber escalas mobile próprias.
- Não reduzir mecanicamente tipografia de desktop.
- Blocos com duas colunas devem ser recompostos para leitura vertical quando o Figma indicar.
- Preservar pausas editoriais entre seções.

## 8. Páginas e rotas previstas

- `/` — Home
- `/trabalhos` — Trabalhos
- `/sobre` — Sobre mim
- `/trabalhos/qi-platform`
- `/trabalhos/emr-integration`
- `/trabalhos/gerdau-storeroom`
- `/trabalhos/gerdau-smartlog`
- `/trabalhos/itau-empreendedor`
- `/trabalhos/3ph-hrcrs-digital-ecosystem`
- rota 404

Não altere slugs sem explicar.

## 9. Componentes esperados

Reutilize os componentes identificados no Figma e no repositório. Entre os padrões já conhecidos:

- Header / Navbar
- Footer / CTA final
- Button
- Text Link
- Project Card
- Section Title
- Stat Card
- Job Position
- Company Experience
- Dropdown Project Item
- Project Preview
- Metadata de case
- Quote block
- Blocos de métricas
- Galerias e grids de imagens
- Navegação entre projetos

A lista é uma referência, não uma ordem para criar abstrações desnecessárias.

## 10. Conteúdo e cases

Cases previstos:

- QI Platform
- EMR Integration
- 3PH Alliance & HRCRS Digital Ecosystem
- Gerdau Storeroom
- Gerdau Smartlog
- Itaú Empreendedor

Preserve exatamente as métricas e a atribuição de responsabilidade definidas no conteúdo.

## 11. Assets

- Use o Figma MCP para obter imagens, SVGs e informações dos frames.
- Quando o MCP fornecer um asset, preserve proporção e enquadramento.
- Não use placeholders genéricos na versão apresentada para revisão.
- Organize assets de forma legível no projeto.
- Forneça `alt` coerente para imagens informativas.
- Imagens decorativas devem usar tratamento semântico apropriado.

## 12. Acessibilidade

- HTML semântico.
- Navegação por teclado.
- Foco visível.
- Contraste adequado.
- Botões e links com nomes acessíveis.
- `aria` apenas quando necessário.
- Respeitar `prefers-reduced-motion`.
- Não depender exclusivamente de hover.
- Elementos clicáveis devem ter área de toque adequada no mobile.

## 13. SEO e metadados

Na primeira versão, preparar:

- título e descrição por página;
- Open Graph básico;
- favicon;
- estrutura de headings coerente;
- URLs legíveis;
- 404 funcional.

Não inventar descrições ou palavras-chave sem usar o conteúdo aprovado.

## 14. Qualidade de código

Ao final de cada etapa:

- execute lint;
- execute typecheck;
- execute build;
- corrija erros antes de declarar a etapa concluída;
- liste arquivos criados e alterados;
- informe decisões técnicas relevantes;
- não esconda limitações ou diferenças em relação ao Figma.

## 15. Processo de trabalho

Trabalhe nesta ordem:

1. auditar repositório;
2. ler contexto;
3. inspecionar Figma;
4. mapear páginas, componentes, tokens e assets;
5. apresentar plano;
6. esperar aprovação;
7. implementar foundations e shell;
8. implementar Home;
9. implementar Sobre;
10. implementar Trabalhos;
11. implementar um case completo como template;
12. aplicar aos demais cases;
13. criar 404;
14. revisar responsividade;
15. revisar acessibilidade;
16. adicionar comportamentos e transições simples;
17. preparar deploy.

Não avance várias etapas sem revisão.

## 16. Restrições de linguagem

- Conteúdo em português do Brasil.
- Tom direto, humano e específico.
- Não transformar textos em manifesto.
- Não reescrever apenas para “melhorar”.
- Não adicionar buzzwords.

## 17. Regras responsivas confirmadas

- Os frames desktop ficam na página `02 - Desktop` do Figma.
- Os frames mobile ficam na página `03 - Mobile` do Figma.
- Existem frames mobile de referência para Home (`417:2598`), Sobre mim (`439:3401`) e Gerdau Storeroom (`447:1523`).
- Home e Sobre mim devem seguir diretamente seus respectivos frames desktop e mobile.
- O mobile do Gerdau Storeroom é a referência responsiva para os demais cases.
- O desktop de cada case continua sendo a fonte de verdade para conteúdo, ordem narrativa, imagens e estruturas específicas.
- Não remover, fundir ou reordenar seções existentes no desktop.
- Todos os cases mobile devem terminar com a seção Outros Projetos.
- A seleção e a ordem dos projetos em Outros Projetos devem vir do desktop de cada case.
- Outros Projetos no mobile deve reutilizar o padrão de cards mobile definido na Home.
- Existe um único Footer reutilizável em todas as páginas, desktop e mobile.
- O Footer mobile deve seguir o frame Mobile / Home `417:2598`.
- Não criar variações de Footer por página.
- Diagramas, fluxos e mapas devem aparecer completos; nunca aplicar crop que esconda informações.
- Imagens hero dos cases não devem ser forçadas ao formato `342 × 83px`. Usar largura mobile disponível e preservar proporção e enquadramento adequados ao conteúdo de cada case.
- Estruturas exclusivas sem frame mobile devem usar os mesmos tokens, margens, tipografia e regras de empilhamento do Gerdau Storeroom, sem inventar nova linguagem visual.
- O menu mobile aberto ainda não está definido e precisa ser resolvido antes de sua implementação.
- Animações somente depois da estrutura, conteúdo e responsividade estarem validados.
