export default {
  seo: {
    title: 'Gerdau Storeroom — Case de Product Design | Henrique Silva',
    description:
      'Case de Product Design para a operação de almoxarifado da Gerdau, reduzindo uma contagem de inventário de até duas horas para cerca de 15 minutos.',
    path: '/trabalhos/gerdau-storeroom',
    lang: 'pt',
    robots: 'index, follow',
  },
  hero: {
    titleLines: ['Gerdau', 'Storeroom'],
    subtitle: 'Inventário industrial · Design de produto',
    description:
      'Uma experiência cocriada com a operação para reduzir tempo e retrabalho na contagem de inventário, sem descolar da realidade do processo e das regras do SAP.',
  },
  metadata: {
    ariaLabel: 'Informações do projeto',
    imageAlt:
      'Interface do Storeroom App com a marca Gerdau, exibindo contagem de inventário',
    fields: [
      { label: 'Cliente', value: 'Gerdau Steel' },
      { label: 'Ano', value: '2018' },
      { label: 'Papel', value: 'Product Designer' },
    ],
    result: {
      label: 'Resultado',
      main: '90~120 min → ~15 min',
      sub: 'Mais de 80% de redução no tempo de contagem',
    },
    contribution: {
      label: 'Minha atuação',
      value: 'Pesquisa · Cocriação · Prototipação · Testes de usabilidade',
    },
  },
  panoramic: {
    alt: 'Parede de post-its com mapeamento e síntese do projeto Gerdau Storeroom',
  },
  problem: {
    title: 'O problema',
    paragraphs: [
      'Em tese, o trabalho era simples: localizar os itens, conferir as quantidades e atualizar o SAP.',
      'Na prática, a contagem dependia de listas impressas, deslocamentos por um galpão enorme e conferências manuais. Quando alguma informação não batia, o operador precisava voltar ao computador, revisar os dados e refazer a validação do inventário.',
    ],
  },
  centralQuestion: {
    ariaLabel: 'Pergunta central do projeto',
    label: 'A pergunta que orientou o trabalho:',
    text: 'Como reduzir o tempo e o retrabalho na contagem de inventário sem ignorar as regras do SAP e a realidade da operação em campo?',
  },
  shadowing: {
    videoTitle:
      'Shadowing com os operadores durante a contagem de inventário, acompanhando o processo real e os pontos de atrito em campo.',
    videoCaption:
      'Acompanhando a conferência em campo para entender onde o processo travava na prática.',
    title: 'Como o processo funcionava antes:',
    body: 'Para entender onde esse fluxo realmente travava, acompanhei a contagem junto aos operadores — do congelamento do inventário no SAP à atualização dos dados depois da ida ao galpão.',
    flowAlt:
      'Fluxo anterior da contagem de inventário, da lista de itens até a validação final no SAP.',
    flowMobileAriaLabel: 'Fluxo anterior da contagem de inventário',
    flowTop: [
      'Receber a lista de itens',
      'Procurar cada item no SAP',
      'Congelar Inventário no SAP',
      'Imprimir lista de itens',
    ],
    flowBottom: [
      'Validar no SAP',
      'Voltar ao computador',
      'Contar manualmente no papel',
      'Procurar itens no galpão',
    ],
    breakLabel: 'Onde o processo quebrava?',
    breakLines: [
      'Qualquer exceção virava retrabalho:',
      'Item fora do lugar, quantidade divergente ou nova validação no SAP.',
    ],
  },
  mapping: {
    title: 'Mapeando o fluxo real',
    paragraphs: [
      'Depois do acompanhamento em campo, organizei as etapas, exceções e decisões que faziam parte da contagem.',
      'O mapa ajudou a separar o que era uma regra necessária da operação do que existia apenas para contornar limitações do processo atual. Com isso, ficou mais fácil discutir onde simplificar sem perder controle.',
    ],
    imgAlt:
      'Mapeamento do fluxo real da contagem de inventário com operadores e stakeholders',
    caption: 'Mapeamento do fluxo real com operadores e stakeholders da operação.',
  },
  cocreation: {
    title: 'Cocriação',
    paragraphs: [
      'Com os principais atritos mapeados, reuni operadores e áreas envolvidas para imaginar um processo com menos retrabalho.',
      'Em vez de começar pelas telas, discutimos as decisões que estruturavam o fluxo: quais etapas precisavam permanecer no SAP, onde os operadores precisavam de mais clareza e o que poderia ser resolvido pelo próprio produto.',
    ],
    imgAlt: 'Sessão de cocriação com a equipe e operadores, explorando ideias de solução',
    caption: 'Explorando ideias de solução com quem vivia o processo no dia a dia.',
  },
  decide: {
    imgAlt: 'Síntese da cocriação com atritos e oportunidades identificadas pelos operadores',
    caption:
      'Síntese dos principais atritos, exceções e oportunidades identificadas durante a cocriação.',
    title: 'O que precisávamos decidir',
    list: [
      'Quais regras precisavam permanecer no SAP',
      'Que etapas poderiam ser resolvidas no próprio fluxo',
      'Como orientar o operador diante das exceções',
    ],
    body: 'Foi quando as regras do sistema encontraram o conhecimento de quem vivia a operação que a solução começou a tomar forma.',
  },
  prototype: {
    title: 'Da ideia ao protótipo',
    paragraphs: [
      'As ideias levantadas na cocriação foram combinadas em uma primeira versão da solução — quase um Frankenstein feito com as partes que pareciam funcionar melhor.',
      'Naquele momento, a preocupação não era o acabamento. Era colocar o fluxo de pé rapidamente, levar o protótipo de volta aos operadores e descobrir onde a lógica ainda precisava mudar.',
    ],
    imgAlt:
      'Wireframes de baixa fidelidade do fluxo do Storeroom App desenhados em quadro branco',
    caption:
      'Primeira versão do fluxo, construída a partir das ideias priorizadas durante a cocriação.',
  },
  testing: {
    title: 'Testando com os operadores',
    paragraphs: [
      'Testamos a primeira versão com diferentes operadores, tanto em sala quanto no ambiente real de trabalho. Observei onde surgiam dúvidas, quais informações procuravam e quais decisões ainda precisavam de explicação.',
      'Cada rodada ajudou a ajustar a sequência e o conteúdo antes da implementação.',
    ],
    video1Title:
      'Teste do protótipo de baixa fidelidade com operador, validando a sequência, o conteúdo e as decisões do fluxo.',
    img02Alt: 'Operador testando o app em ambiente real de galpão durante o inventário',
    img04Alt: 'Teste do protótipo com operador em sala, verificando compreensão do fluxo',
    video2Title:
      'Validação do protótipo com a principal stakeholder, alinhando o fluxo às necessidades da operação e do negócio.',
    caption:
      'Testes realizados com diferentes operadores, em sala e no campo, para identificar dúvidas e oportunidades de melhoria no fluxo.',
  },
  refined: {
    title: 'A solução refinada',
    paragraphs: [
      'A solução final reuniu consulta, contagem e atualização das informações em um único fluxo no tablet.',
      'Com isso, o operador podia concluir o processo em campo, sem precisar voltar ao computador a cada etapa.',
    ],
    imgAlt: 'Telas do fluxo refinado do Storeroom App para contagem de inventário em tablet',
    caption: 'Principais telas do fluxo refinado para apoiar a contagem de inventário em campo.',
  },
  operation: {
    videoTitle: 'Gerdau Storeroom em operação durante a contagem de inventário em campo.',
    title: 'O produto em operação',
    body: 'A solução foi implementada pela Gerdau e passou a ser utilizada na operação de Cartersville. Com o novo fluxo, uma contagem que levava entre 90 e 120 minutos passou a ser concluída em aproximadamente 15.',
  },
  testimonial: {
    ariaLabel: 'Depoimento',
    paragraphs: [
      'Vocês não foram os primeiros a vir até aqui e tentar nos ajudar. A diferença é que as empresas anteriores queriam mudar nossos processos e nos ensinar uma nova forma de trabalhar.',
      'Vocês nos ouviram, e nós participamos ativamente do processo de criação. Isso foi muito enriquecedor.',
    ],
    author: '— Peter, Gerente Logístico da Gerdau North America',
  },
  team: {
    imgAlt:
      'Equipe que participou da pesquisa, cocriação e validação do Gerdau Storeroom em Cartersville',
    caption:
      'O time que participou da pesquisa, cocriação e validação da solução em Cartersville.',
  },
}
