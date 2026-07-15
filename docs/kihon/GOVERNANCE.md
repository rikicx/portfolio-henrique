# Governança do Kihon

## Papéis

**Maintainer** — responsável por revisar, aprovar e promover mudanças; garante que a documentação, os tokens e os componentes permaneçam consistentes entre si; toma decisões finais quando não há consenso.

**Contributor** — qualquer pessoa que sugere melhorias, reporta problemas ou propõe mudanças, seguindo o fluxo descrito em [`../CONTRIBUTING.md`](../CONTRIBUTING.md).

## Versionamento

Kihon segue versionamento Major.Minor.Patch:

- **Major** — mudança que quebra Instances existentes (renomear ou remover variants/properties, remover um componente público). Exige migração por parte de quem já duplicou o arquivo.
- **Minor** — adição que não quebra nada existente (novo componente, novo padrão, nova página de documentação).
- **Patch** — correção de conteúdo, texto, ou defeito visual que não altera a API de nenhum componente.

## Breaking changes

Toda mudança que quebra Instances existentes é tratada como versão nova, nunca como edição silenciosa. A mudança deve ser registrada na descrição da Library e no [`../CHANGELOG.md`](../CHANGELOG.md) antes de ser considerada concluída.

## Depreciação

Nada é deletado silenciosamente. Um componente descontinuado é marcado como tal na própria description (prefixo "DEPRECATED" + motivo) e movido para `99 — Archive`. Instances existentes continuam funcionando — a depreciação afeta apenas novas instanciações a partir do Assets panel.

## Lifecycle

```
Playground → Validation → Library → Deprecated → Archive
```

- **Playground** (`05 — Playground`): todo componente ou padrão novo nasce aqui.
- **Validation**: testado em Light/Dark e nos três breakpoints, com conteúdo real e conteúdo extremo.
- **Library** (`02 — Components`): componente promovido, real, instanciável.
- **Deprecated**: descontinuado, mas ainda presente, com aviso explícito na description.
- **Archive** (`99 — Archive`): destino final, fora do fluxo de uso ativo, preservado por referência histórica.

## Critérios de promoção (Playground → Library)

- Funciona em Light e em Dark.
- Funciona em Desktop, Tablet e Mobile.
- Tem pelo menos os estados essenciais (Default, Hover, Focus quando aplicável, Disabled quando aplicável).
- Toda parte de conteúdo variável é uma Text Property vinculada — nunca texto hardcoded que exige edição de camada interna.
- Tem description explicando o propósito e as variants.

## Qualidade mínima

Nenhum componente público deve exigir que o consumidor edite uma camada interna para customizar conteúdo. Se algo precisa mudar por instância, precisa ser uma Property.

## Manutenção de documentação

Documentação por proximidade (ver [`DESIGN-PRINCIPLES.md`](DESIGN-PRINCIPLES.md)): ao mudar um componente, a orientação ao lado dele é atualizada na mesma edição — não depois, não em outro documento.

## Preservação de compatibilidade

IDs, Instances, Variables e bindings existentes nunca são alterados sem necessidade real e documentada. Preferir estender a API existente (nova Property) a substituir o que já existe.

## Processo de release

1. Mudanças acumuladas são revisadas contra os critérios de promoção e qualidade mínima.
2. O [`../CHANGELOG.md`](../CHANGELOG.md) é atualizado com a nova versão.
3. Se houver breaking change, isso é destacado explicitamente na entrada do changelog.
4. A versão é considerada fechada apenas quando a documentação (`docs/`) e o arquivo Figma estão consistentes entre si.
