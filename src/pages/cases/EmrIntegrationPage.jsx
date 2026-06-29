import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import OtherProjectsSection from '../../components/OtherProjectsSection'
import TypingTitle from '../../components/TypingTitle'
import RevealSection from '../../components/RevealSection'
import styles from './EmrIntegrationPage.module.css'

import heroImg from '../../media/cases/emr-integration/emr-hero.webp'
import experienciaImg from '../../media/cases/emr-integration/emr-experiencia.webp'
import mudouImg from '../../media/cases/emr-integration/emr-mudou.webp'
import iconIdentificar from '../../media/cases/emr-integration/emr-icon-identificar.png'
import iconReunir from '../../media/cases/emr-integration/emr-icon-reunir.png'
import iconApoiar from '../../media/cases/emr-integration/emr-icon-apoiar.png'
import iconRegistrar from '../../media/cases/emr-integration/emr-icon-registrar.png'
import clinicalIcon from '../../media/cases/emr-integration/emr-clinical-evidence-icon.svg'
import connectorIcon from '../../media/cases/emr-integration/emr-connector.svg'
import quoteOpenImg from '../../media/shared/quotes/quote-open.png'
import quoteCloseImg from '../../media/shared/quotes/quote-close.png'

export default function EmrIntegrationPage() {
  return (
    <Layout>
      <Seo
        title="EMR Integration — Case de Product Design | Henrique Silva"
        description="Case de integração entre prontuários eletrônicos e captura de dados clínicos, reduzindo o SLA de 22 para 3 horas e as queries de 37% para 18%."
        path="/trabalhos/emr-integration"
      />
      {/* 1. Hero */}
      <section aria-labelledby="emr-title" className={styles.hero}>
        <TypingTitle id="emr-title" className={styles.heroTitle} lines={['EMR', 'Integration']} />
        <div className={styles.heroMeta}>
          <p className={styles.heroKicker}>
            Integração entre EMR e EDC · Estratégia de produto
          </p>
          <p className={styles.heroDesc}>
            Uma experiência criada para reconciliar dados entre EMR e EDC,
            reunindo divergências, histórico e evidências para que Data
            Managers tomassem decisões com mais rapidez e rastreabilidade.
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className={styles.dividerFull} aria-hidden="true" />

      {/* 2. Metadata */}
      <RevealSection as="section" aria-label="Informações do projeto" className={styles.metadata}>
        <div className={styles.container}>
          <div className={styles.metaLayout}>
            <div className={styles.metaImageWrap}>
              <img
                src={heroImg}
                alt="Interface da plataforma EMR Integration com painel de reconciliação de dados"
                className={styles.metaImg}
              />
            </div>
            <dl className={styles.metaFields}>
              <div className={styles.metaRowTop}>
                <div className={styles.metaItem}>
                  <dt className={styles.metaLabel}>Empresa</dt>
                  <dd className={styles.metaValue}>3PH Alliance</dd>
                </div>
                <div className={styles.metaItem}>
                  <dt className={styles.metaLabel}>Ano</dt>
                  <dd className={styles.metaValue}>2024</dd>
                </div>
                <div className={styles.metaItem}>
                  <dt className={styles.metaLabel}>Papel</dt>
                  <dd className={styles.metaValue}>Head of Design</dd>
                </div>
              </div>
              <div className={styles.metaItem}>
                <dt className={styles.metaLabel}>Impacto Medido</dt>
                <dd className={styles.metaValue}>
                  22h → 3h no tempo médio para resolução de divergências
                </dd>
              </div>
              <div className={styles.metaItem}>
                <dt className={styles.metaLabel}>Escala</dt>
                <dd className={styles.metaValue}>
                  3.400 formulários processados em 12 meses
                </dd>
              </div>
              <div className={styles.metaItem}>
                <dt className={styles.metaLabel}>Atuação</dt>
                <dd className={styles.metaValue}>
                  Estratégia de produto · Discovery · Liderança de design ·
                  Definição da experiência
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </RevealSection>

      {/* 3. O problema */}
      <RevealSection as="section" aria-labelledby="emr-problema" className={styles.problema}>
        <div className={styles.container}>
          <div className={styles.problemaLayout}>
            <div className={styles.problemaLabelCol}>
              <p id="emr-problema" className={styles.problemaLabel}>
                O problema
              </p>
            </div>
            <div className={styles.problemaText}>
              <p>
                Os dados coletados no EMR precisavam ser sincronizados com o
                EDC, mas os dois sistemas frequentemente apresentavam
                informações diferentes para o mesmo paciente ou procedimento.
              </p>
              <p className={styles.textGap}>
                Sem um fluxo estruturado de reconciliação, Data Managers
                precisavam comparar as fontes manualmente, procurar
                informações em outros formulários e abrir entre duas e quatro
                queries por campo.
              </p>
              <p className={styles.textGap}>
                Parte dessas decisões ainda acontecia por mensagens e
                conversas fora da plataforma. O processo era lento, difícil
                de rastrear e muito dependente de esforço operacional.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 4. Pergunta central */}
      <RevealSection as="section" aria-label="Pergunta central do projeto" className={styles.pergunta}>
        <div className={styles.container}>
          <img
            src={quoteOpenImg}
            alt=""
            aria-hidden="true"
            className={styles.quoteIconOpen}
          />
          <p className={styles.quoteLabel}>
            A pergunta que orientou o trabalho:
          </p>
          <blockquote className={styles.quoteText}>
            Como transformar divergências entre EMR e EDC em decisões mais
            rápidas, rastreáveis e sustentadas por evidências?
          </blockquote>
          <img
            src={quoteCloseImg}
            alt=""
            aria-hidden="true"
            className={styles.quoteIconClose}
          />
        </div>
      </RevealSection>

      {/* 5. Decidir sem começar do zero */}
      <RevealSection as="section" aria-labelledby="emr-decidir" className={styles.decidir}>
        <div className={styles.container}>
          <h2 id="emr-decidir" className={styles.sectionHeading}>
            Decidir sem começar do zero
          </h2>
          <div className={styles.decidirText}>
            <p>
              Mostrar que dois valores eram diferentes não resolvia o problema.
            </p>
            <p className={styles.textGap}>
              O usuário precisava entender qual deles parecia mais confiável
              antes de aprovar qualquer alteração. Por isso, a plataforma
              reunia as informações necessárias para apoiar a decisão:
            </p>
          </div>
        </div>

        {/* Gray evidence box — spans full content width */}
        <div className={styles.evidenceBox}>
          <img
            src={clinicalIcon}
            alt=""
            aria-hidden="true"
            className={styles.clinicalIcon}
          />
          <ul className={styles.evidenceList}>
            <li>Histórico de alterações;</li>
            <li>Valores registrados em formulários relacionados;</li>
            <li>Origem e data de cada informação;</li>
            <li>Registros anteriores relacionados;</li>
            <li>
              Consistência do novo valor em relação ao histórico disponível.
            </li>
          </ul>
        </div>

        <div className={styles.container}>
          <p className={styles.decidirRole}>
            Como Head of Design, traduzi o entendimento da operação em
            decisões de produto e experiência, orientando a estrutura do
            fluxo, as informações necessárias para a decisão e a validação da
            solução com as áreas envolvidas.
          </p>
        </div>
      </RevealSection>

      {/* 6. Como a experiência foi organizada */}
      <RevealSection as="section"
        aria-labelledby="emr-experiencia"
        className={styles.experiencia}
      >
        <div className={styles.container}>
          <div className={styles.experienciaLayout}>
            <div className={styles.experienciaImageCol}>
              <img
                src={experienciaImg}
                alt="Interface da plataforma mostrando a reconciliação de dados entre EMR e EDC"
                className={styles.experienciaImg}
              />
              <p className={styles.mediaCaption}>
                Estrutura da experiência criada para apoiar a reconciliação de dados entre EMR e
                EDC.
              </p>
            </div>
            <div className={styles.experienciaRightCol}>
              <h2 id="emr-experiencia" className={styles.sectionHeading}>
                Como a experiência foi organizada
              </h2>
              <div className={styles.directionSteps}>
                <div className={styles.directionBox}>
                  <img
                    src={iconIdentificar}
                    alt=""
                    aria-hidden="true"
                    className={styles.directionIcon}
                  />
                  <div className={styles.directionText}>
                    <p className={styles.directionTitle}>
                      1. Identificar a divergência
                    </p>
                    <p className={styles.directionDesc}>
                      Os valores provenientes do EMR e do EDC eram
                      apresentados lado a lado.
                    </p>
                  </div>
                </div>
                <img
                  src={connectorIcon}
                  alt=""
                  aria-hidden="true"
                  className={styles.connector}
                />
                <div className={styles.directionBox}>
                  <img
                    src={iconReunir}
                    alt=""
                    aria-hidden="true"
                    className={styles.directionIcon}
                  />
                  <div className={styles.directionText}>
                    <p className={styles.directionTitle}>
                      2. Reunir as evidências
                    </p>
                    <p className={styles.directionDesc}>
                      A plataforma buscava o histórico e os registros
                      relacionados para explicar por que aquele valor poderia
                      estar incorreto.
                    </p>
                  </div>
                </div>
                <img
                  src={connectorIcon}
                  alt=""
                  aria-hidden="true"
                  className={styles.connector}
                />
                <div className={styles.directionBox}>
                  <img
                    src={iconApoiar}
                    alt=""
                    aria-hidden="true"
                    className={styles.directionIcon}
                  />
                  <div className={styles.directionText}>
                    <p className={styles.directionTitle}>
                      3. Apoiar a decisão
                    </p>
                    <p className={styles.directionDesc}>
                      Com o contexto já disponível, o usuário podia aprovar a
                      atualização, rejeitar a sugestão ou manter a query aberta
                      para investigação.
                    </p>
                  </div>
                </div>
                <img
                  src={connectorIcon}
                  alt=""
                  aria-hidden="true"
                  className={styles.connector}
                />
                <div className={styles.directionBox}>
                  <img
                    src={iconRegistrar}
                    alt=""
                    aria-hidden="true"
                    className={styles.directionIcon}
                  />
                  <div className={styles.directionText}>
                    <p className={styles.directionTitle}>
                      4. Registrar a ação
                    </p>
                    <p className={styles.directionDesc}>
                      A decisão permanecia dentro da plataforma, aumentando a
                      rastreabilidade e reduzindo conversas paralelas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 7. O que mudou */}
      <RevealSection as="section" aria-labelledby="emr-mudou" className={styles.mudou}>
        <div className={styles.container}>
          <div className={styles.mudouLayout}>
            <div className={styles.mudouTextCol}>
              <h2 id="emr-mudou" className={styles.sectionHeading}>
                O que mudou
              </h2>

              <div className={styles.mudouText}>
                <p>
                  Antes, boa parte do tempo era consumida tentando descobrir o
                  que havia acontecido e qual fonte deveria ser considerada mais
                  confiável. Com a solução, o usuário chegava ao momento da
                  decisão com o conflito identificado e as principais evidências
                  já organizadas.
                </p>
                <p className={styles.textGap}>
                  O trabalho manual não desapareceu completamente. Ele passou a
                  ser direcionado para os casos que realmente exigiam julgamento
                  humano.
                </p>
              </div>

              <div className={styles.mudouFooter}>
                <p>A redução de queries não veio de esconder os conflitos.</p>
                <p className={styles.textGap}>
                  Veio de apresentar contexto suficiente para que mais decisões
                  pudessem ser tomadas dentro da própria plataforma.
                </p>
              </div>

              <div className={styles.impactoBlock}>
                <h2 id="emr-impacto" className={styles.impactoTitle}>
                  Impacto &amp; Escala
                </h2>

                <div className={styles.statCards}>
                  <div className={styles.statCardWide}>
                    <p className={styles.statValue}>22h → 3h</p>
                    <p className={styles.statLabel}>
                      Tempo médio para resolução de divergências
                    </p>
                  </div>

                  <div className={styles.statCardWide}>
                    <p className={styles.statValue}>3.400 formulários</p>
                    <p className={styles.statLabel}>Processados em 12 meses</p>
                  </div>

                  <div className={styles.statCardNarrow}>
                    <p className={styles.statValue}>37% → 18%</p>
                    <p className={styles.statLabel}>
                      Taxa de abertura de queries
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.mudouImageCol}>
              <img
                src={mudouImg}
                alt="Profissional utilizando a plataforma EMR Integration em contexto de reconciliação de dados clínicos"
                className={styles.mudouImg}
              />
              <p className={styles.mediaCaption}>
                Uso da solução em contexto operacional, reduzindo etapas manuais e centralizando a
                conferência dos dados.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 9. Outros Projetos */}
      <OtherProjectsSection currentSlug="emr-integration" />
    </Layout>
  )
}
