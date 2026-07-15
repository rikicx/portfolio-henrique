# Princípios de Design do Kihon

Nove decisões que orientam toda escolha dentro do Kihon. Quando uma dúvida de design surgir e não houver resposta explícita na documentação, volte a estes princípios.

## Clarity over flexibility

Um componente mais simples que resolve 90% dos casos bem é melhor que um componente flexível que resolve 100% dos casos de forma confusa. Flexibilidade demais transfere a complexidade de quem constrói o sistema para quem o usa.

## Composition over duplication

Quando dois componentes têm 80% de sobreposição, a resposta é compor um a partir do outro (ou de partes compartilhadas), não duplicar a estrutura inteira e divergir aos poucos.

## Documentation by proximity

A orientação de uso vive junto do que ela orienta. Guidance de componente fica no componente; convenção de escrita fica em Patterns; composição de página fica em Templates. Não existe manual central separado.

## Semantic before visual

A escolha entre componentes (Button vs. Text Link vs. HyperLink) depende do que acontece depois da interação, não do destaque visual desejado. Semântica primeiro, estilo depois.

## Accessibility by default

Foco, contraste e navegação por teclado não são um "extra" a ser adicionado depois — são parte da especificação de qualquer componente novo, desde o primeiro rascunho no Playground.

## Adapt, don't rebuild

Ao usar o Kihon como ponto de partida, prefira trocar tokens (cor, tipografia) e conteúdo a reconstruir componentes do zero. A estrutura já resolvida deve ser preservada; o que muda é a pele.

## Real examples over placeholders

Exemplos devem ser plausíveis e ensinar o comportamento correto do componente — nunca "Lorem Ipsum" ou "Placeholder" literal. Um exemplo ruim ensina o padrão errado, mesmo sem querer.

## Improve before creating

Antes de criar qualquer artefato novo — componente, página, documento — pergunte se um artefato existente pode ser melhorado para cobrir a mesma necessidade. Criar é sempre a última alternativa.

## One responsibility per component

Cada componente resolve um problema. Quando um componente começa a acumular responsabilidades que não têm relação direta entre si, é sinal de que ele precisa ser dividido, não documentado com mais ressalvas.
