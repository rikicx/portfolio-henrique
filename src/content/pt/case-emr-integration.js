export default {
  seo: {
    title: 'EMR Integration — Case de Product Design | Henrique Silva',
    description:
      'Case de integração entre prontuários eletrônicos e captura de dados clínicos, reduzindo o SLA de 22 para 3 horas e as queries de 37% para 18%.',
    path: '/trabalhos/emr-integration',
    lang: 'pt',
    robots: 'index, follow',
  },
  hero: {
    titleLines: ['EMR', 'Integration'],
    kicker: 'Integração entre EMR e EDC · Estratégia de produto',
    description:
      'Uma experiência criada para reconciliar dados entre EMR e EDC, reunindo divergências, histórico e evidências para que Data Managers tomassem decisões com mais rapidez e rastreabilidade.',
  },
  metadata: {
    ariaLabel: 'Informações do projeto',
    imageAlt: 'Interface da plataforma EMR Integration com painel de reconciliação de dados',
    topFields: [
      { label: 'Empresa', value: '3PH Alliance' },
      { label: 'Ano', value: '2024' },
      { label: 'Papel', value: 'Head of Design' },
    ],
    blocks: [
      {
        label: 'Impacto Medido',
        value: '22h → 3h no tempo médio para resolução de divergências',
      },
      {
        label: 'Escala',
        value: '3.400 formulários processados em 12 meses',
      },
      {
        label: 'Atuação',
        value:
          'Estratégia de produto · Discovery · Liderança de design · Definição da experiência',
      },
    ],
  },
  problem: {
    label: 'O problema',
    paragraphs: [
      'Os dados coletados no EMR precisavam ser sincronizados com o EDC, mas os dois sistemas frequentemente apresentavam informações diferentes para o mesmo paciente ou procedimento.',
      'Sem um fluxo estruturado de reconciliação, Data Managers precisavam comparar as fontes manualmente, procurar informações em outros formulários e abrir entre duas e quatro queries por campo.',
      'Parte dessas decisões ainda acontecia por mensagens e conversas fora da plataforma. O processo era lento, difícil de rastrear e muito dependente de esforço operacional.',
    ],
  },
  centralQuestion: {
    ariaLabel: 'Pergunta central do projeto',
    label: 'A pergunta que orientou o trabalho:',
    text: 'Como transformar divergências entre EMR e EDC em decisões mais rápidas, rastreáveis e sustentadas por evidências?',
  },
  decide: {
    title: 'Decidir sem começar do zero',
    paragraphs: [
      'Mostrar que dois valores eram diferentes não resolvia o problema.',
      'O usuário precisava entender qual deles parecia mais confiável antes de aprovar qualquer alteração. Por isso, a plataforma reunia as informações necessárias para apoiar a decisão:',
    ],
    evidenceList: [
      'Histórico de alterações;',
      'Valores registrados em formulários relacionados;',
      'Origem e data de cada informação;',
      'Registros anteriores relacionados;',
      'Consistência do novo valor em relação ao histórico disponível.',
    ],
    roleNote:
      'Como Head of Design, traduzi o entendimento da operação em decisões de produto e experiência, orientando a estrutura do fluxo, as informações necessárias para a decisão e a validação da solução com as áreas envolvidas.',
  },
  experience: {
    imgAlt: 'Interface da plataforma mostrando a reconciliação de dados entre EMR e EDC',
    caption:
      'Estrutura da experiência criada para apoiar a reconciliação de dados entre EMR e EDC.',
    title: 'Como a experiência foi organizada',
    steps: [
      {
        key: 'identificar',
        title: '1. Identificar a divergência',
        description: 'Os valores provenientes do EMR e do EDC eram apresentados lado a lado.',
      },
      {
        key: 'reunir',
        title: '2. Reunir as evidências',
        description:
          'A plataforma buscava o histórico e os registros relacionados para explicar por que aquele valor poderia estar incorreto.',
      },
      {
        key: 'apoiar',
        title: '3. Apoiar a decisão',
        description:
          'Com o contexto já disponível, o usuário podia aprovar a atualização, rejeitar a sugestão ou manter a query aberta para investigação.',
      },
      {
        key: 'registrar',
        title: '4. Registrar a ação',
        description:
          'A decisão permanecia dentro da plataforma, aumentando a rastreabilidade e reduzindo conversas paralelas.',
      },
    ],
  },
  changed: {
    title: 'O que mudou',
    paragraphs: [
      'Antes, boa parte do tempo era consumida tentando descobrir o que havia acontecido e qual fonte deveria ser considerada mais confiável. Com a solução, o usuário chegava ao momento da decisão com o conflito identificado e as principais evidências já organizadas.',
      'O trabalho manual não desapareceu completamente. Ele passou a ser direcionado para os casos que realmente exigiam julgamento humano.',
    ],
    footerParagraphs: [
      'A redução de queries não veio de esconder os conflitos.',
      'Veio de apresentar contexto suficiente para que mais decisões pudessem ser tomadas dentro da própria plataforma.',
    ],
    impactTitle: 'Impacto & Escala',
    stats: [
      {
        value: '22h → 3h',
        label: 'Tempo médio para resolução de divergências',
        wide: true,
      },
      {
        value: '3.400 formulários',
        label: 'Processados em 12 meses',
        wide: true,
      },
      {
        value: '37% → 18%',
        label: 'Taxa de abertura de queries',
        wide: false,
      },
    ],
    imgAlt:
      'Profissional utilizando a plataforma EMR Integration em contexto de reconciliação de dados clínicos',
    caption:
      'Uso da solução em contexto operacional, reduzindo etapas manuais e centralizando a conferência dos dados.',
  },
}
