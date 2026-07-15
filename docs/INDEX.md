# Kihon — Documentação

Kihon (基本, "fundamentos" em japonês) é um Design System starter para portfólios e sites editoriais. Não é um UI kit pronto — é um ponto de partida: Foundations, Components, Patterns e Templates documentados, prontos para serem adaptados.

Criado e mantido por **Henrique M. Silva**.

## Estado atual

**v1.0 — Ready for Publish.** A arquitetura, os tokens, os 11 componentes públicos e a documentação estão completos e validados. Falta apenas a decisão final de licença e o clique manual de publicação na Figma Community.

## Fonte de verdade

O **Figma é a fonte de verdade visual** do Kihon — Variables, Components, Patterns e Templates vivem lá. Esta pasta `docs/` documenta o produto (o que é, como usar, como contribuir, como publicar) em texto, mas não substitui o arquivo Figma.

## Mapa da documentação

```
docs/
├── INDEX.md                          — este arquivo
├── CHANGELOG.md                      — histórico de versões
├── CONTRIBUTING.md                   — como propor mudanças
├── LICENSE.md                        — status da licença (pendente)
│
├── community/                        — pacote de publicação na Figma Community
│   ├── COMMUNITY-LISTING.md          — descrição, tags, autoria
│   ├── RELEASE-NOTES-v1.0.md         — release notes públicas
│   └── SUBMISSION-CHECKLIST.md       — checklist antes de publicar
│
└── kihon/                            — o produto em si
    ├── DESIGN-PRINCIPLES.md          — os 9 princípios do sistema
    ├── GOVERNANCE.md                 — papéis, versionamento, lifecycle
    ├── KNOWN-LIMITATIONS.md          — o que ainda não existe ou está incompleto
    ├── ROADMAP.md                    — v1.1 e possibilidades de v2.0
    └── ASSET-LICENSES.md             — fontes, ícones, e o que pode ser redistribuído
```

## Ordem recomendada de leitura

1. **Este arquivo** — visão geral
2. [`kihon/DESIGN-PRINCIPLES.md`](kihon/DESIGN-PRINCIPLES.md) — entenda a filosofia antes de mexer em qualquer coisa
3. [`kihon/KNOWN-LIMITATIONS.md`](kihon/KNOWN-LIMITATIONS.md) — saiba o que esperar e o que não esperar
4. O arquivo Figma do Kihon — comece pela página "00 — Start Here"
5. [`CONTRIBUTING.md`](CONTRIBUTING.md) — se for propor uma mudança
6. [`kihon/GOVERNANCE.md`](kihon/GOVERNANCE.md) — se for mantenedor
7. [`community/`](community/) — se for preparar ou revisar a publicação
