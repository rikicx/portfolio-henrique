# Roadmap

## v1.1

Itens já identificados e priorizados, em ordem de impacto:

- **Mobile Menu** — construir o componente que hoje não existe, resolvendo a maior lacuna estrutural do Kihon.
- **Nav Bar API** — dar à Nav Bar uma composição real para telas estreitas, consequência direta do item acima.
- **HyperLink default** — trocar "See full profile ↗" por um texto neutro, assim que a fonte necessária estiver disponível para edição.
- **Title × Card Heading** — unificar a nomenclatura entre Project Card e Stat Card.
- **Convenção de componentes internos** — documentar (ou remover) o prefixo `_` usado em componentes auxiliares dos Template Masters.
- **Refinamentos de responsividade** — revisão geral de comportamento em telas estreitas além da Nav Bar.
- **Tokens de Motion** — formalizar `--duration-*`/`--easing-*` no código; hoje o comportamento do Pointer (e de outras animações) é documentado como especificação numérica, sem token dedicado.
- **Button React compartilhado** — consolidar os CTAs equivalentes em um componente React compartilhado para evitar duplicação de contratos de hover, focus-visible e pressed.

## v2.0

Possibilidades em consideração — **nenhum compromisso firmado**, apenas direções que fazem sentido dado o posicionamento atual do Kihon:

- Mais Templates de composição de página (além de Navigation e Footer).
- Expansão do padrão de Navigation (estados adicionais, variações de estrutura).
- Novos padrões editoriais, na mesma linha de Writing Patterns.
- Revisão de escalabilidade da Library, conforme o número de componentes crescer.

Fora de escopo, mesmo para v2.0: componentes sem relação clara com o posicionamento do Kihon como starter de portfólio/site editorial — por exemplo, Charts ou Data Table. Adicionar esse tipo de componente exigiria repensar o próprio propósito do sistema, não apenas estendê-lo.
