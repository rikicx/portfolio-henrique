# Changelog

Todas as mudanças relevantes do Kihon são registradas aqui, por versão.

## Unreleased

Itens planejados para v1.1 — ver [`kihon/ROADMAP.md`](kihon/ROADMAP.md) para detalhes.

## 1.0.0 — Release Candidate

- Foundations: cor (primitivos + semânticos), tipografia, spacing, grid, radius, elevation, iconografia, motion
- Light/Dark modes completos via Figma Variables
- 11 Components públicos: Button, Text Link, HyperLink, Project Card, Stat Card, Language Switcher, Theme Toggle, Field, Textarea, Footer, Quote
- Patterns: Writing Patterns, acessibilidade, comportamento responsivo, Do/Don't, comportamento de componentes, casos-limite, Pointer (cursor customizado)
- Pointer: cursor customizado (anel externo + ponto central) implementado em React e documentado como Pattern no Kihon — hover/focus equivalentes, estado pressed, deformação de scroll, desativado em touch, respeita reduced motion
- Linguagem direcional das setas padronizada e documentada em Foundations → Iconography: interno = →, externo = ↗, scroll abaixo = ↓, scroll acima = ↑, dropdown = chevron — cada símbolo com motion correspondente (nudge de translação nas setas, rotação no chevron), sem bounce, sem layout shift, respeita reduced motion
- Templates: Navigation e Footer como composições de referência
- Accessibility guidance documentada
- Responsive guidance documentada
- Documentation por proximidade — cada página ensina o que ela mesma contém
- Cold Start validation — landing page fictícia construída e testada usando apenas os assets públicos
- Community package: cover, descrição, tags e release notes preparados
