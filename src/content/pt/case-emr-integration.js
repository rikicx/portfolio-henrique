export default {
  seo: {
    title: 'EMR Integration — Case de Product Design | Henrique Silva',
    description:
      'Como priorizamos e desenhamos uma integração entre EMR e EDC que reduziu de 22 para 3 horas o tempo médio para concluir uma query.',
    path: '/trabalhos/emr-integration',
    lang: 'pt',
    robots: 'index, follow',
  },
  hero: {
    titleLines: ['EMR', 'Integration'],
    kicker: 'Integração EMR–EDC · Estratégia de produto · AI aplicada',
    description:
      'Como priorizamos um quick win no núcleo do 3PH Cloud e transformamos uma sincronização manual em uma experiência sustentada por histórico, estatística e decisão humana.',
  },
  metadata: {
    ariaLabel: 'Informações do projeto',
    imageAlt:
      'Tela de evidências de campo do EMR Integration comparando um valor recebido com distribuições históricas',
    imageCaption:
      'A evidência aparece ao lado da decisão: histórico da fonte, distribuição e caminhos para aprovar, manter ou abrir uma query. Dados demonstrativos.',
    items: [
      { label: 'Empresa', value: '3PH Alliance' },
      { label: 'Ano', value: '2024' },
      { label: 'Papel', value: 'Head of Design' },
      { label: 'Produto', value: 'Funcionalidade central do 3PH Cloud EDC' },
      { label: 'Time liderado', value: '3 UX Designers' },
      {
        label: 'Atuação',
        value:
          'Estratégia de produto · Discovery · Priorização · Liderança de design · AI aplicada · Validação',
      },
    ],
  },
  problem: {
    title: 'O problema',
    lead: 'Dois sistemas. Uma base clínica que precisava continuar confiável.',
    paragraphs: [
      'O EDC era usado para coletar dados de estudos clínicos. Os hospitais também mantinham informações no EMR e precisavam sincronizar os dois sistemas manualmente.',
      'Erros de digitação, atualizações em momentos diferentes e outras inconsistências faziam o mesmo paciente ou procedimento aparecer com valores divergentes. Não bastava coletar dados: a operação precisava confiar na base.',
      'Data Managers comparavam formulários, procuravam evidências e abriam queries para chegar a uma conclusão. O custo aparecia em horas de trabalho, retrabalho e decisões espalhadas fora da plataforma.',
    ],
  },
  centralQuestion: {
    label: 'A pergunta que orientou o trabalho:',
    text: 'Como reduzir o custo da reconciliação sem automatizar uma decisão que precisava continuar nas mãos dos profissionais?',
  },
  strategy: {
    title: 'Por que EMR veio antes de outros projetos',
    paragraphs: [
      'A empresa avaliava outras frentes de produto, mas elas exigiam discoveries mais amplos e ciclos de desenvolvimento muito maiores.',
      'A integração EMR–EDC atacava uma fricção já conhecida, estava mais próxima do núcleo do produto e oferecia retorno mais rápido em tempo operacional e qualidade dos dados.',
    ],
    decisionLabel: 'Decisão de portfólio',
    decision:
      'Priorizar um quick win com impacto mensurável, mantendo as demais oportunidades no horizonte do produto.',
  },
  discovery: {
    title: 'Discovery enxuto para chegar a uma V1',
    intro:
      'A velocidade não eliminou o discovery. Ela mudou sua escala e concentrou o time no fluxo que precisava ser resolvido primeiro.',
    imageAlt:
      'Tela principal da V1 do EMR Integration com formulário do participante e fila de reconciliação',
    imageCaption:
      'A V1 concentrou a reconciliação no formulário do participante. Dados demonstrativos.',
    items: [
      {
        title: 'Entender o fluxo real',
        text: 'Mapeamos a sincronização manual e conduzimos entrevistas com profissionais envolvidos na operação.',
      },
      {
        title: 'Definir a primeira versão',
        text: 'Workshops de design e cocriação enxuta transformaram o entendimento em uma V1 priorizada.',
      },
      {
        title: 'Validar estratégia e uso',
        text: 'Iteramos tanto o problema que estávamos resolvendo quanto a usabilidade, com testes junto a Data Managers.',
      },
    ],
    roleTitle: 'Minha liderança',
    roleParagraphs: [
      'Liderei as decisões de experiência e a priorização com três UX Designers, stakeholders e usuários.',
      'Weekly meetings com stakeholders, design critiques e mentorias mantinham o time alinhado. Tecnologia atuava nos limites de tempo e viabilidade para proteger o escopo da V1.',
    ],
  },
  ai: {
    title: 'AI aumentou a velocidade. Priorização manteve o foco.',
    paragraphs: [
      'A adoção de AI permitia que Design e Produto explorassem e iterassem caminhos em uma velocidade maior do que a capacidade de implementação.',
      'O risco deixou de ser falta de ideias e passou a ser criar um backlog grande demais. Cada possibilidade precisava atravessar a estratégia da V1, o valor para a operação e as limitações trazidas por Tecnologia.',
    ],
    note:
      'A vantagem não estava em produzir mais telas, mas em decidir com clareza quais delas mereciam virar produto.',
  },
  model: {
    title: 'Confiabilidade sem retirar o julgamento humano',
    paragraphs: [
      'A funcionalidade usava histórico e um modelo matemático e estatístico para indicar qual valor parecia mais confiável. A distribuição mostrava onde o dado recebido estava em relação aos registros anteriores.',
      'Um peso esperado de 82 kg digitado como 892 kg podia ser sinalizado como um erro evidente. Em situações menos claras, a plataforma organizava as evidências, mas mantinha a decisão com o usuário.',
    ],
    principles: [
      {
        title: 'Histórico da fonte',
        text: 'Frequência de correções e consistência dos registros anteriores.',
      },
      {
        title: 'Contexto estatístico',
        text: 'Distribuição, mediana e faixa plausível para tornar a diferença visível.',
      },
      {
        title: 'Agência humana',
        text: 'Aprovar o valor, manter o dado do estudo ou abrir uma query.',
      },
    ],
    overviewAlt:
      'Formulário de participante mostrando campos preenchidos pelo EMR, divergências e evidências para decisão',
    overviewCaption:
      'A fila de reconciliação levava o usuário do formulário ao campo que exigia decisão. Dados demonstrativos.',
  },
  journey: {
    title: 'Da divergência à decisão registrada',
    intro:
      'O fluxo foi desenhado para levar contexto até o ponto de decisão, sem obrigar o usuário a reconstruir o caso em outras telas.',
    steps: [
      {
        number: '01',
        title: 'Sincronizar',
        text: 'Dados já informados no EMR apareciam nos formulários do EDC.',
      },
      {
        number: '02',
        title: 'Comparar',
        text: 'Divergências, histórico e distribuição eram reunidos no mesmo contexto.',
      },
      {
        number: '03',
        title: 'Decidir',
        text: 'O usuário podia aprovar, manter o valor do estudo ou conversar por query.',
      },
      {
        number: '04',
        title: 'Registrar',
        text: 'Autor, horário, valor anterior e novo valor permaneciam no audit log.',
      },
    ],
  },
  queries: {
    title: 'A query virou parte do fluxo, não uma conversa paralela',
    paragraphs: [
      'Quando a evidência não era suficiente, technicians, Data Managers e researchers podiam abrir uma query e conversar com o centro clínico sem perder o contexto do campo.',
      'A resposta voltava para o mesmo fluxo, onde podia ser aceita, encerrada sem alteração ou escalada. A evidência usada na decisão continuava visível.',
    ],
    listAlt: 'Lista de queries abertas e seus estados no EMR Integration',
    listCaption:
      'Lista priorizada por estado, assunto, formulário e idade da query. Dados demonstrativos.',
    threadAlt: 'Thread de uma query com valores, resposta do centro e ações de encerramento',
    threadCaption:
      'A conversa preserva valores, resposta, evidência anexada e próximos passos. Dados demonstrativos.',
  },
  governance: {
    title: 'Permissão, privacidade e rastreabilidade',
    paragraphs: [
      'Cada hospital acessava sua própria lista de pacientes. Technicians, Data Managers e researchers recebiam permissões compatíveis com sua atuação; regras de privacidade e HIPAA também se aplicavam aos acessos e exportações.',
      'A decisão nunca apagava o histórico. O audit log preservava quem agiu, quando, o valor anterior e o novo valor.',
    ],
    auditAlt: 'Audit log registrando sincronizações, aprovações, rejeições e queries',
    auditCaption:
      'O histórico é imutável e associado ao autor da decisão. Dados demonstrativos.',
    modalAlt: 'Modal para abrir uma query e enviar contexto ao centro clínico',
    modalCaption:
      'A query já nasce com motivo, mensagem e evidências do campo. Dados demonstrativos.',
  },
  demo: {
    href: null,
    label: 'Demo funcional — Em breve',
    note: 'A versão navegável será adicionada aqui.',
  },
  impact: {
    title: 'Menos tempo reconciliando. Mais tempo para o estudo.',
    stats: [
      {
        value: '22h → 3h',
        label: 'Tempo médio para chegar à conclusão de uma query',
      },
      {
        value: '3.400',
        label: 'Formulários processados pela integração em 12 meses',
      },
      {
        value: '37% → 18%',
        label: 'Taxa de abertura de queries',
      },
    ],
    paragraphs: [
      'A integração reduziu o trabalho necessário para manter EMR e EDC consistentes. Data Managers passaram a investir menos tempo reconstruindo evidências e mais tempo em outras frentes do estudo.',
      'Para o negócio, o quick win demonstrou valor com um escopo mais enxuto e impacto mensurável em tempo, custo operacional e qualidade dos dados.',
    ],
  },
}
