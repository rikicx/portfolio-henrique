import Layout from '../../components/Layout'
import OtherProjectsSection from '../../components/OtherProjectsSection'
import styles from './QiPlatformPage.module.css'
import headOfDesignRoleImg from '../../media/cases/qi-platform/head-of-design-role.png'
import qiMiroCocreationImg from '../../media/cases/qi-platform/QI-Miro-Cocreation.png'

import heroTabletImg from '../../media/cases/qi-platform/qi-platform-tablet.webp'
import comparisonImg from '../../media/cases/qi-platform/comparar-sem-expor.png'
import evolutionImg from '../../media/cases/qi-platform/emr-evolution-charts.png'
import myEvolutionIcon from '../../media/cases/qi-platform/evolucao.svg'
import groupsIcon from '../../media/cases/qi-platform/grupos-preferencia.svg'
import networkIcon from '../../media/cases/qi-platform/visao-rede.svg'
import investigationIcon from '../../media/cases/qi-platform/investigacao.svg'
import quoteOpenImg from '../../media/shared/quotes/quote-open.png'
import quoteCloseImg from '../../media/shared/quotes/quote-close.png'

const metaItems = [
  { label: 'Empresa', value: '3PH Alliance' },
  { label: 'Ano', value: '2024' },
  { label: 'Papel', value: 'Head of Design' },
  {
    label: 'Impacto Medido',
    value: '23.000+ análises comparativas em 12 meses',
  },
  {
    label: 'Escala',
    value: ['270+ especialistas', '4 países', '3+ novos centros por mês'],
  },
  {
    label: 'Atuação',
    value:
      'Estratégia de produto · Discovery · Liderança de design · Pesquisa · Validação',
  },
]

const productQuestions = [
  {
    icon: myEvolutionIcon,
    title: 'Minha evolução',
    text: 'Como meus resultados mudaram ao longo do tempo?',
  },
  {
    icon: groupsIcon,
    title: 'Grupos de referência',
    text:
      'Como minha performance se compara com especialistas ou centros semelhantes?',
  },
  {
    icon: networkIcon,
    title: 'Visão da rede',
    text: 'Onde existem padrões ou diferenças em um conjunto maior?',
  },
  {
    icon: investigationIcon,
    title: 'Investigação',
    text:
      'Que recortes ajudam a entender por que determinado resultado aconteceu?',
  },
]

const impactStats = [
  {
    value: '23.000+',
    label: 'Análises comparativas em 12 meses',
    wide: true,
  },
  {
    value: '270+',
    label: 'Especialistas cardiovasculares',
  },
  {
    value: '4 Países',
    label: 'Utilizando a plataforma',
  },
  {
    value: '3+ novos centros por mês',
    label: 'Incorporados à operação',
    wide: true,
  },
]

function MetaValue({ value }) {
  if (Array.isArray(value)) {
    return (
      <span className={styles.metaValue}>
        {value.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </span>
    )
  }

  return <span className={styles.metaValue}>{value}</span>
}

function QuoteBlock({ label = null, children, compact = false }) {
  return (
    <figure
      className={`${styles.quoteBlock}${compact ? ` ${styles.quoteCompact}` : ''}`}
    >
      <img
        src={quoteOpenImg}
        alt=""
        className={`${styles.quoteIcon} ${styles.quoteIconOpen}`}
        aria-hidden="true"
      />
      {label && <figcaption className={styles.quoteLabel}>{label}</figcaption>}
      <blockquote className={styles.quoteText}>{children}</blockquote>
      <img
        src={quoteCloseImg}
        alt=""
        className={`${styles.quoteIcon} ${styles.quoteIconClose}`}
        aria-hidden="true"
      />
    </figure>
  )
}


export default function QiPlatformPage() {
  return (
    <Layout>
      <article className={styles.page}>
        <section className={styles.hero} aria-labelledby="qi-title">
          <h1 id="qi-title" className={styles.heroTitle}>
            <span>QI</span>
            <span>Platform</span>
          </h1>

          <div className={styles.heroMeta}>
            <p className={styles.heroKicker}>
              Benchmarking clínico · Estratégia de produto
            </p>
            <p className={styles.heroDescription}>
              Uma plataforma criada para ajudar especialistas cardiovasculares a
              entender a própria performance, comparar resultados com referências
              relevantes e decidir onde valia investigar mais.
            </p>
          </div>
        </section>

        <hr className={styles.dividerFull} aria-hidden="true" />

        <section
          className={styles.metadata}
          aria-label="Informações do projeto"
        >
          <div className={styles.container}>
            <div className={styles.metaLayout}>
              <figure className={`${styles.figure} ${styles.metaImage}`}>
                <img
                  src={heroTabletImg}
                  alt="Tela do QI Platform em um tablet"
                  className={styles.metaImg}
                />
              </figure>

              <dl className={styles.metaFields}>
                <div className={styles.metaRow}>
                  {metaItems.slice(0, 3).map((item) => (
                    <div key={item.label} className={styles.metaItem}>
                      <dt className={styles.metaLabel}>{item.label}</dt>
                      <dd>
                        <MetaValue value={item.value} />
                      </dd>
                    </div>
                  ))}
                </div>

                {metaItems.slice(3).map((item) => (
                  <div key={item.label} className={styles.metaBlock}>
                    <dt className={styles.metaLabel}>{item.label}</dt>
                    <dd>
                      <MetaValue value={item.value} />
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className={styles.problemSection}>
          <h2>O problema</h2>
          <div className={styles.bodyText}>
            <p>Os dados já existiam. E eram muitos.</p>
            <p>
              O problema era transformar aquele volume de informação em
              comparações que os especialistas conseguissem entender e usar. Não
              adiantava colocar mais gráficos na tela. Uma comparação clínica
              depende de contexto: período, perfil dos pacientes, tipo de
              procedimento, centro e grupo de referência.
            </p>
            <p>
              E havia outra camada: a comparação precisava ser útil sem permitir
              que um centro descobrisse exatamente contra quem estava sendo
              comparado.
            </p>
          </div>
        </section>

        <QuoteBlock label="A pergunta que orientou o trabalho:">
          Como transformar dados clínicos complexos em comparações claras e
          confiáveis, sem esconder diferenças importantes nem expor informações
          que precisavam continuar anônimas?
        </QuoteBlock>

        <section
          className={`${styles.storyGrid} ${styles.imageLeft} ${styles.discoverySection}`}
        >
          <h2>Antes de desenhar qualquer coisa</h2>
          <figure className={`${styles.figure} ${styles.storyFigure}`}>
            <img
              src={qiMiroCocreationImg}
              alt="Quadro colaborativo no Miro utilizado nas sessões de cocriação do QI Platform"
              className={`${styles.imageCover} ${styles.miroImage}`}
            />
          </figure>
          <div className={styles.bodyText}>
            <p>
              Todo o trabalho aconteceu remotamente, conectando especialistas,
              pesquisadores, designers, Produto e Tecnologia em diferentes
              localidades.
            </p>
            <p>
              Nas entrevistas e sessões de trabalho, não queríamos descobrir
              apenas quais indicadores deveriam aparecer. Precisávamos entender
              como os especialistas liam os resultados, quais comparações faziam
              sentido e o que procuravam quando alguma coisa saía do padrão.
            </p>
            <p>
              Foi daí que surgiu uma pergunta mais concreta, capaz de organizar o
              produto:
            </p>
          </div>
        </section>

        <QuoteBlock compact>
          Depois de identificar uma diferença, o que o especialista precisava
          entender para decidir o próximo passo?
        </QuoteBlock>

        <section className={styles.productSection}>
          <div className={styles.productIntro}>
            <h2>Transformando perguntas em produto</h2>
            <p>
              A plataforma precisava apoiar diferentes tipos de análise sem
              colocar tudo dentro de um dashboard gigante.
            </p>
          </div>

          <div className={styles.questionGrid}>
            {productQuestions.map((item) => (
              <article key={item.title} className={styles.questionCard}>
                <img src={item.icon} alt="" className={styles.questionIcon} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>

          <p className={styles.productNote}>
            Parece simples quando está organizado assim.
            <br />
            Antes disso, eram necessidades, dados e regras espalhados em várias
            conversas.
          </p>
        </section>

        <section
          className={`${styles.storyGrid} ${styles.imageLeft} ${styles.comparisonSection}`}
        >
          <figure className={`${styles.figure} ${styles.storyFigure}`}>
            <img
              src={comparisonImg}
              alt="Tela de comparação entre grupos no QI Platform"
              className={`${styles.imageCover} ${styles.comparisonImage}`}
            />
            <figcaption className={styles.caption}>
              Comparação por quartis com proteção de anonimato.
            </figcaption>
          </figure>

          <div className={styles.comparisonContent}>
            <h2>Comparar sem expor</h2>
            <div className={styles.bodyText}>
              <p>
                Quanto mais filtros eram aplicados, menor ficava o grupo. Quando o
                recorte se tornava específico demais, a plataforma interrompia a
                análise e pedia que alguns filtros fossem removidos para proteger o
                anonimato. A regra era simples: permitir investigação sem abrir
                brecha para identificação.
              </p>
            </div>
          </div>
        </section>

        <section
          className={`${styles.storyGrid} ${styles.imageRight} ${styles.roleMobileSection}`}
        >
          <h2>Meu papel como Head de Design</h2>

          <figure className={`${styles.figure} ${styles.storyFigure}`}>
            <img
              src={headOfDesignRoleImg}
              alt="Representação da atuação do Head de Design conectando pesquisa, produto, experiência e engenharia"
              className={`${styles.imageCover} ${styles.roleImage}`}
            />
          </figure>

          <div className={styles.bodyText}>
            <p>
              Meu papel era manter pesquisa, produto, experiência e viabilidade
              conectados. Eu orientava o time e ajudava a organizar as decisões
              entre especialistas, Produto e Engenharia.
            </p>
            <p>
              Os especialistas traziam o contexto clínico. Produto traduzia as
              necessidades em estratégia. Engenharia mostrava o que os dados
              permitiam — e onde estavam os limites.
            </p>
            <p>
              Minha atuação acontecia no meio dessas conversas: fazendo perguntas,
              reduzindo ruído e evitando que uma solução aparentemente simples
              criasse um problema novo.
            </p>
          </div>
        </section>

        <section
          className={`${styles.storyGrid} ${styles.imageLeft} ${styles.evolutionSection}`}
        >
          <h2>Uma plataforma em evolução</h2>
          <figure className={`${styles.figure} ${styles.storyFigure}`}>
            <img
              src={evolutionImg}
              alt="Gráficos do QI Platform mostrando a evolução dos resultados ao longo do tempo"
              className={`${styles.imageCover} ${styles.evolutionImage}`}
            />
            <figcaption className={styles.caption}>
              Evolução dos resultados ao longo do tempo, com comparação entre grupos
              de referência.
            </figcaption>
          </figure>
          <div className={styles.bodyText}>
            <p>A plataforma não parou na primeira versão.</p>
            <p>
              Novos centros, indicadores e necessidades continuavam chegando. O
              desafio era incorporar tudo isso sem espalhar a experiência em
              análises desconectadas.
            </p>
            <p>
              A experiência precisava continuar coerente: começar por uma visão
              mais ampla, encontrar alguma diferença relevante e aprofundar a
              análise sem perder o contexto.
            </p>
          </div>
        </section>

        <section className={styles.impactSection}>
          <div className={styles.impactGrid}>
            <h2>Impacto e Escala</h2>
            {impactStats.map((stat) => (
              <article
                key={stat.value}
                className={`${styles.statCard}${stat.wide ? ` ${styles.statWide}` : ''}`}
              >
                <p className={styles.statValue}>{stat.value}</p>
                <p className={styles.statLabel}>{stat.label}</p>
              </article>
            ))}
          </div>

          <div className={`${styles.bodyText} ${styles.impactText}`}>
            <p>
              A plataforma não foi validada apenas porque foi entregue. Em 12
              meses, os especialistas realizaram mais de 23 mil análises
              comparativas. Em um produto desse tipo, o uso recorrente era o sinal
              mais claro de que as comparações estavam ajudando a responder
              perguntas reais.
            </p>
            <p>
              A escala confirmou que as comparações não eram apenas tecnicamente
              possíveis: elas passaram a fazer parte do uso recorrente da
              plataforma.
            </p>
          </div>
        </section>

        <OtherProjectsSection currentSlug="qi-platform" />
      </article>
    </Layout>
  )
}
