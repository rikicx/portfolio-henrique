# Contribuindo com o Kihon

## Como sugerir uma melhoria

Descreva o problema real que a mudança resolve, não apenas a mudança em si. "Isso ficaria melhor" não é justificativa suficiente — explique quem esbarra nisso e o que dá errado hoje.

## Como reportar um problema

Aponte o node ou componente específico, o comportamento esperado e o observado. Se for um problema de conteúdo (texto, exemplo, default), diga o que o exemplo deveria ensinar e por que o atual não ensina isso corretamente.

## Como propor um novo Component

Antes de propor, pergunte: **este conteúdo realmente precisa de um componente novo, ou pode melhorar um artefato existente?** Essa é a regra de ouro do Kihon — melhorar antes de criar.

Se um componente novo for genuinamente necessário, justifique:
- qual problema real ele resolve que nenhum componente existente resolve;
- por que não é apenas uma variante de um componente já existente;
- quem vai usá-lo e em que contexto.

## Critérios para aceitar uma mudança

- **Impacto real**, não hipotético — a mudança precisa resolver algo que já aconteceu ou vai acontecer com certeza, não "pode ser útil algum dia".
- **Preservação de IDs, Instances, Variables e bindings** — nenhuma mudança pode quebrar arquivos que já duplicaram o Kihon.
- **Simplicidade líquida** — se a mudança adiciona complexidade em um lugar, ela precisa remover complexidade equivalente ou maior em outro. Um Design System maduro fica mais claro com o tempo, não maior.
- **Documentação junto da mudança** — se você mudou um componente, atualize a orientação que vive ao lado dele, na mesma edição (ver "Documentação por proximidade" abaixo).

## Fluxo de promoção: Playground → Validation → Library

1. **Playground** (`05 — Playground`) — todo componente ou padrão novo nasce aqui, como teste.
2. **Validation** — testado em Light e Dark, nos três breakpoints (Desktop, Tablet, Mobile), com conteúdo real e conteúdo extremo (muito curto, muito longo).
3. **Library** (`02 — Components`) — só entra depois de validado. Vira master real, instanciável pelo Assets panel.
4. **Deprecated** — quando um componente é substituído, ele não é apagado silenciosamente: é marcado como descontinuado na própria description.
5. **Archive** (`99 — Archive`) — destino final de componentes descontinuados. Preservado por referência histórica, fora do fluxo de uso ativo.

## Documentação por proximidade

A orientação de uso vive junto do que ela orienta — não existe um manual central separado. Guidance de componente fica em `02 — Components`, convenções de escrita ficam em `03 — Patterns`, composição de página fica em `04 — Templates`. Ao propor uma mudança, pergunte onde a orientação correspondente deveria viver, e coloque-a lá — não em um documento à parte.
