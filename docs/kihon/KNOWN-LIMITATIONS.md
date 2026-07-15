# Limitações Conhecidas

Estas são as limitações reais do Kihon no estado atual (v1.0). Nenhuma delas é um bug — todas são gaps conscientes, já documentados no próprio arquivo.

## v1 known limitation

Limitações presentes na v1.0, sem previsão de correção imediata:

- **Mobile Menu não existe como componente.** A Nav Bar não possui composição própria para telas estreitas — em larguras de Tablet/Mobile, seus itens de navegação podem cortar ou sobrepor.
- **Nav Bar não possui composição para telas estreitas.** Consequência direta do item acima: a Nav Bar é uma composição única, sem variant ou estado dedicado a menu mobile.
- **Inter Tight é necessária para editar alguns Labels.** Button, Text Link, Nav Item, HyperLink e Stat Card usam essa fonte nas camadas de texto. Sem ela instalada, essas Properties não podem ser editadas pelo Properties panel.

## Planned for v1.1

Já identificadas e priorizadas para a próxima versão:

- **HyperLink ainda usa o default "See full profile ↗".** Específico demais para o caso genérico de link externo; a troca para um texto neutro está planejada, mas depende de acesso à fonte Inter Tight para editar a camada.

## Optional future improvement

Não bloqueiam nada hoje, mas foram registradas como oportunidades de refinamento:

- **Nomenclatura `Title` × `Card Heading`.** Project Card usa "Title" e Stat Card usa "Card Heading" para o mesmo conceito (o texto de destaque do card). Não confunde o uso, mas uma API mais consistente usaria um único termo.
- **Componentes internos com prefixo `_` ainda não têm convenção pública documentada.** `_Dropdown Project Item` e `_Nav Item/Nav Menu`, nos Template Masters, usam underscore sem que o arquivo explique o que esse prefixo significa.
