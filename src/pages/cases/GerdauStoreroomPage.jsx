import Layout from '../../components/Layout'
import OtherProjectsSection from '../../components/OtherProjectsSection'
import TypingTitle from '../../components/TypingTitle'
import RevealSection from '../../components/RevealSection'
import styles from './GerdauStoreroomPage.module.css'

import heroImg from '../../media/cases/gerdau-storeroom/gerdau-storeroom-inventory-counting-hero.jpg'
import panoramicImg from '../../media/cases/gerdau-storeroom/gerdau-storeroom-synthesis-overview.webp'
import processMappingImg from '../../media/cases/gerdau-storeroom/gerdau-storeroom-process-mapping.webp'
import cocreationSessionImg from '../../media/cases/gerdau-storeroom/gerdau-storeroom-cocreation-session.webp'
import cocreationSynthesisImg from '../../media/cases/gerdau-storeroom/gerdau-storeroom-cocreation-synthesis.webp'
import prototypeSketchImg from '../../media/cases/gerdau-storeroom/gerdau-storeroom-prototype-sketch.webp'
import testImg02 from '../../media/cases/gerdau-storeroom/gerdau-storeroom-usability-test-02.webp'
import testImg04 from '../../media/cases/gerdau-storeroom/gerdau-storeroom-usability-test-04.webp'
import refinedInterfaceImg from '../../media/cases/gerdau-storeroom/gerdau-storeroom-refined-interface.png'
import projectTeamImg from '../../media/cases/gerdau-storeroom/gerdau-storeroom-project-team.webp'
import quoteOpenImg from '../../media/shared/quotes/quote-open.png'
import quoteCloseImg from '../../media/shared/quotes/quote-close.png'
import fluxogramaImg from '../../media/cases/gerdau-storeroom/fluxograma.svg';


const VIMEO_SHADOWING = '1202496239'
const VIMEO_TEST_OPERATOR = '1204273143'
const VIMEO_STAKEHOLDER = '1204273144'
const VIMEO_OPERATION = '1204342753'

const FLOW_TOP = [
  'Receber a lista de itens',
  'Procurar cada item no SAP',
  'Congelar Inventário no SAP',
  'Imprimir lista de itens',
]

const FLOW_BOTTOM = [
  'Validar no SAP',
  'Voltar ao computador',
  'Contar manualmente no papel',
  'Procurar itens no galpão',
]


function VideoPortrait({ vimeoId, title }) {
  return (
    <div className={styles.videoPortrait}>
      <iframe
        src={`https://player.vimeo.com/video/${vimeoId}`}
        title={title}
        frameBorder="0"
        allow="fullscreen; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}

function VideoWide({ vimeoId, title }) {
  return (
    <div className={styles.videoWide}>
      <iframe
        src={`https://player.vimeo.com/video/${vimeoId}`}
        title={title}
        frameBorder="0"
        allow="fullscreen; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}


export default function GerdauStoreroomPage() {
  return (
    <Layout>
      {/* 1. Hero */}
      <section aria-labelledby="hero-title" className={styles.hero}>
        <TypingTitle id="hero-title" className={styles.heroTitle} lines={['Gerdau', 'Storeroom']} />
        <div className={styles.heroMeta}>
          <p className={styles.heroSubtitle}>Inventário industrial · Design de produto</p>
          <p className={styles.heroDesc}>
            Uma experiência cocriada com a operação para reduzir tempo e retrabalho na contagem
            de inventário, sem descolar da realidade do processo e das regras do SAP.
          </p>
        </div>
      </section>

      <hr className={styles.dividerFull} aria-hidden="true" />

      {/* 2. Metadata */}
      <RevealSection as="section" aria-label="Informações do projeto" className={styles.metadata}>
        <div className={styles.container}>
          <div className={styles.metaLayout}>
            <div className={styles.metaImage}>
              <img
                src={heroImg}
                alt="Interface do Storeroom App com a marca Gerdau, exibindo contagem de inventário"
                className={styles.metaImg}
              />
            </div>
            <div className={styles.metaFields}>
              <div className={styles.metaRow}>
                <div className={styles.metaItem}>
                  <p className={styles.metaLabel}>Cliente</p>
                  <p className={styles.metaValue}>Gerdau Steel</p>
                </div>
                <div className={styles.metaItem}>
                  <p className={styles.metaLabel}>Ano</p>
                  <p className={styles.metaValue}>2018</p>
                </div>
                <div className={styles.metaItem}>
                  <p className={styles.metaLabel}>Papel</p>
                  <p className={styles.metaValue}>Product Designer</p>
                </div>
              </div>
              <div className={styles.metaResultBlock}>
                <p className={styles.metaLabel}>Resultado</p>
                <p className={styles.metaResultMain}>90~120 min → ~15 min</p>
                <p className={styles.metaResultSub}>Mais de 80% de redução no tempo de contagem</p>
              </div>
              <div className={styles.metaAtuacao}>
                <p className={styles.metaLabel}>Minha atuação</p>
                <p className={styles.metaAtuacaoVal}>
                  Pesquisa · Cocriação · Prototipação · Testes de usabilidade
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 3. Panoramic */}
      <div className={styles.panoramic}>
        <div className={styles.container}>
          <img
            src={panoramicImg}
            alt="Parede de post-its com mapeamento e síntese do projeto Gerdau Storeroom"
            className={styles.panoramicImg}
          />
        </div>
      </div>

      {/* 4. O problema */}
      <RevealSection as="section" aria-labelledby="problema-title" className={styles.problema}>
        <div className={styles.container}>
          <div className={styles.problemaLayout}>
            <h2 id="problema-title" className={styles.sectionHeading}>O problema</h2>
            <div className={styles.problemaText}>
              <p>
                Em tese, o trabalho era simples: localizar os itens, conferir as quantidades e
                atualizar o SAP.
              </p>
              <p>
                Na prática, a contagem dependia de listas impressas, deslocamentos por um galpão
                enorme e conferências manuais. Quando alguma informação não batia, o operador
                precisava voltar ao computador, revisar os dados e refazer a validação do
                inventário.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 5. Pergunta central */}
      <RevealSection as="section" aria-label="Pergunta central do projeto" className={styles.centralQuestion}>
        <div className={styles.container}>
          <img src={quoteOpenImg} alt="" aria-hidden="true" className={styles.quoteIconOpen} />
          <p className={styles.quoteLabel}>A pergunta que orientou o trabalho:</p>
          <blockquote className={styles.quoteText}>
            Como reduzir o tempo e o retrabalho na contagem de inventário sem ignorar as regras
            do SAP e a realidade da operação em campo?
          </blockquote>
          <img
            src={quoteCloseImg}
            alt=""
            aria-hidden="true"
            className={styles.quoteIconClose}
          />
        </div>
      </RevealSection>

      {/* 6. Processo anterior + shadowing em campo */}
      <RevealSection as="section" aria-labelledby="shadowing-title" className={styles.shadowing}>
        <div className={styles.container}>
          <div className={styles.shadowingLayout}>
            <div className={styles.shadowingVideo}>
              <VideoPortrait
                vimeoId={VIMEO_SHADOWING}
                title="Shadowing com os operadores durante a contagem de inventário, acompanhando o processo real e os pontos de atrito em campo."
              />
              <p className={styles.caption}>
                Acompanhando a conferência em campo para entender onde o processo travava na prática.
              </p>
            </div>

            <div className={styles.shadowingText}>
              <h2 id="shadowing-title" className={styles.sectionHeading}>
                Como o processo funcionava antes:
              </h2>

              <p className={styles.bodyTextWide}>
                Para entender onde esse fluxo realmente travava, acompanhei a contagem junto aos
                operadores — do congelamento do inventário no SAP à atualização dos dados depois
                da ida ao galpão.
              </p>

              <div className={styles.flowDiagram}>
                <img
                  src={fluxogramaImg}
                  alt="Fluxo anterior da contagem de inventário, da lista de itens até a validação final no SAP."
                  className={styles.flowDiagramImage}
                />

                <div
                  className={styles.flowDiagramMobile}
                  aria-label="Fluxo anterior da contagem de inventário"
                >
                  <div className={styles.flowRow}>
                    {FLOW_TOP.map((step, i) => (
                      <span key={step} className={styles.flowPillGroup}>
                        <span className={styles.flowPill}>{step}</span>

                        {i < FLOW_TOP.length - 1 && (
                          <span className={styles.flowArrow} aria-hidden="true">
                            ↓
                          </span>
                        )}
                      </span>
                    ))}
                  </div>

                  <span
                    className={styles.flowRowConnector}
                    aria-hidden="true"
                  >
                    ↓
                  </span>

                  <div className={styles.flowRow}>
                    {FLOW_BOTTOM.slice().reverse().map((step, i, steps) => (
                      <span key={step} className={styles.flowPillGroup}>
                        <span className={styles.flowPill}>{step}</span>

                        {i < steps.length - 1 && (
                          <span className={styles.flowArrow} aria-hidden="true">
                            ↓
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.excecaoBlock}>
                <p className={styles.bodyTextLabel}>Onde o processo quebrava?</p>
                <p className={styles.excecaoText}>
                  Qualquer exceção virava retrabalho:
                  <br />
                  Item fora do lugar, quantidade divergente ou nova validação no SAP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 8. Mapeando o fluxo real */}
      <RevealSection as="section" aria-labelledby="mapping-title" className={styles.mappingSection}>
        <div className={styles.container}>
          <h2 id="mapping-title" className={styles.sectionHeadingLeft}>
            Mapeando o fluxo real
          </h2>
          <div className={styles.mappingText}>
            <p>
              Depois do acompanhamento em campo, organizei as etapas, exceções e decisões que
              faziam parte da contagem.
            </p>
            <p>
              O mapa ajudou a separar o que era uma regra necessária da operação do que existia
              apenas para contornar limitações do processo atual. Com isso, ficou mais fácil
              discutir onde simplificar sem perder controle.
            </p>
          </div>
          <img
            src={processMappingImg}
            alt="Mapeamento do fluxo real da contagem de inventário com operadores e stakeholders"
            className={styles.sectionImg}
          />
          <p className={styles.caption}>
            Mapeamento do fluxo real com operadores e stakeholders da operação.
          </p>
        </div>
      </RevealSection>

      {/* 9. Cocriação */}
      <RevealSection as="section" aria-labelledby="cocriacao-title" className={styles.cocriacaoSection}>
        <div className={styles.container}>
          <div className={styles.cocriacaoLayout}>
            <div className={styles.cocriacaoText}>
              <h2 id="cocriacao-title" className={styles.sectionHeading}>Cocriação</h2>
              <p className={styles.bodyText}>
                Com os principais atritos mapeados, reuni operadores e áreas envolvidas para
                imaginar um processo com menos retrabalho.
              </p>
              <p className={styles.bodyText}>
                Em vez de começar pelas telas, discutimos as decisões que estruturavam o fluxo:
                quais etapas precisavam permanecer no SAP, onde os operadores precisavam de mais
                clareza e o que poderia ser resolvido pelo próprio produto.
              </p>
            </div>
            <div className={styles.cocriacaoRight}>
              <img
                src={cocreationSessionImg}
                alt="Sessão de cocriação com a equipe e operadores, explorando ideias de solução"
                className={styles.twoColImg}
              />
              <p className={styles.caption}>
                Explorando ideias de solução com quem vivia o processo no dia a dia.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 10. O que precisávamos decidir */}
      <RevealSection as="section" aria-labelledby="decidir-title" className={styles.decidirSection}>
        <div className={styles.container}>
          <div className={styles.decidirLayout}>
            <div className={styles.decidirLeft}>
              <img
                src={cocreationSynthesisImg}
                alt="Síntese da cocriação com atritos e oportunidades identificadas pelos operadores"
                className={styles.twoColImg}
              />
              <p className={styles.caption}>
                Síntese dos principais atritos, exceções e oportunidades identificadas durante
                a cocriação.
              </p>
            </div>
            <div className={styles.decidirText}>
              <h2 id="decidir-title" className={styles.sectionHeading}>
                O que precisávamos decidir
              </h2>
              <ul className={styles.decisionList}>
                <li>Quais regras precisavam permanecer no SAP</li>
                <li>Que etapas poderiam ser resolvidas no próprio fluxo</li>
                <li>Como orientar o operador diante das exceções</li>
              </ul>
              <p className={styles.bodyText}>
                Foi quando as regras do sistema encontraram o conhecimento de quem vivia a
                operação que a solução começou a tomar forma.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 11. Da ideia ao protótipo */}
      <RevealSection as="section" aria-labelledby="prototipo-title" className={styles.prototypeSection}>
        <div className={styles.container}>
          <div className={styles.prototypeLayout}>
            <div className={styles.prototypeText}>
              <h2 id="prototipo-title" className={styles.sectionHeading}>
                Da ideia ao protótipo
              </h2>
              <p className={styles.bodyText}>
                As ideias levantadas na cocriação foram combinadas em uma primeira versão da
                solução — quase um Frankenstein feito com as partes que pareciam funcionar
                melhor.
              </p>
              <p className={styles.bodyText}>
                Naquele momento, a preocupação não era o acabamento. Era colocar o fluxo de pé
                rapidamente, levar o protótipo de volta aos operadores e descobrir onde a lógica
                ainda precisava mudar.
              </p>
            </div>
            <div className={styles.prototypeRight}>
              <img
                src={prototypeSketchImg}
                alt="Wireframes de baixa fidelidade do fluxo do Storeroom App desenhados em quadro branco"
                className={styles.twoColImg}
              />
              <p className={styles.caption}>
                Primeira versão do fluxo, construída a partir das ideias priorizadas durante
                a cocriação.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 12. Testando com os operadores */}
      {/* Grid: [Video2] [test-02] / [test-04] [Video3] */}
      <RevealSection as="section" aria-labelledby="testing-title" className={styles.testingSection}>
        <div className={styles.container}>
          <h2 id="testing-title" className={styles.sectionHeadingCenter}>
            Testando com os operadores
          </h2>
          <div className={styles.testingText}>
            <p>
              Testamos a primeira versão com diferentes operadores, tanto em sala quanto no
              ambiente real de trabalho. Observei onde surgiam dúvidas, quais informações
              procuravam e quais decisões ainda precisavam de explicação.
            </p>
            <p>Cada rodada ajudou a ajustar a sequência e o conteúdo antes da implementação.</p>
          </div>
          <div className={styles.testGrid}>
            {/* Top-left: Video 2 (Vimeo 1204273143) */}
            <div className={styles.testCell}>
              <VideoWide
                vimeoId={VIMEO_TEST_OPERATOR}
                title="Teste do protótipo de baixa fidelidade com operador, validando a sequência, o conteúdo e as decisões do fluxo."
              />
            </div>
            {/* Top-right: test-02.jpg */}
            <div className={styles.testCell}>
              <img
                src={testImg02}
                alt="Operador testando o app em ambiente real de galpão durante o inventário"
                className={styles.testImg}
              />
            </div>
            {/* Bottom-left: test-04.jpg */}
            <div className={styles.testCell}>
              <img
                src={testImg04}
                alt="Teste do protótipo com operador em sala, verificando compreensão do fluxo"
                className={styles.testImg}
              />
            </div>
            {/* Bottom-right: Video 3 (Vimeo 1204273144) */}
            <div className={styles.testCell}>
              <VideoWide
                vimeoId={VIMEO_STAKEHOLDER}
                title="Validação do protótipo com a principal stakeholder, alinhando o fluxo às necessidades da operação e do negócio."
              />
            </div>
          </div>
          <p className={styles.caption}>
            Testes realizados com diferentes operadores, em sala e no campo, para identificar
            dúvidas e oportunidades de melhoria no fluxo.
          </p>
        </div>
      </RevealSection>

      {/* 13. A solução refinada */}
      <RevealSection as="section" aria-labelledby="refined-title" className={styles.refinedSection}>
        <div className={styles.container}>
          <h2 id="refined-title" className={styles.sectionHeadingCenter}>A solução refinada</h2>
          <div className={styles.refinedText}>
            <p>
              A solução final reuniu consulta, contagem e atualização das informações em um
              único fluxo no tablet.
            </p>
            <p>
              Com isso, o operador podia concluir o processo em campo, sem precisar voltar ao
              computador a cada etapa.
            </p>
          </div>
          <div className={styles.refinedImgWrap}>
            <img
              src={refinedInterfaceImg}
              alt="Telas do fluxo refinado do Storeroom App para contagem de inventário em tablet"
              className={styles.refinedImg}
            />
          </div>
          <p className={styles.caption}>
            Principais telas do fluxo refinado para apoiar a contagem de inventário em campo.
          </p>
        </div>
      </RevealSection>

      {/* 14. O produto em operação */}
      <RevealSection as="section" aria-labelledby="operation-title" className={styles.operationSection}>
        <div className={styles.container}>
          <div className={styles.operationLayout}>
            <div className={styles.operationMedia}>
              <VideoWide
                vimeoId={VIMEO_OPERATION}
                title="Gerdau Storeroom em operação durante a contagem de inventário em campo."
              />
            </div>

            <div className={styles.operationText}>
              <h2 id="operation-title" className={styles.sectionHeading}>
                O produto em operação
              </h2>
              <p className={styles.bodyText}>
                A solução foi implementada pela Gerdau e passou a ser utilizada na operação de
                Cartersville. Com o novo fluxo, uma contagem que levava entre 90 e 120 minutos
                passou a ser concluída em aproximadamente 15.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 15. Depoimento */}
      <RevealSection as="section" aria-label="Depoimento" className={styles.testimonial}>
        <div className={styles.container}>
          <img
            src={quoteOpenImg}
            alt=""
            aria-hidden="true"
            className={styles.testimonialQuoteOpen}
          />
          <blockquote className={styles.testimonialText}>
            <p>
              Vocês não foram os primeiros a vir até aqui e tentar nos ajudar. A diferença é
              que as empresas anteriores queriam mudar nossos processos e nos ensinar uma nova
              forma de trabalhar.
            </p>
            <p>
              Vocês nos ouviram, e nós participamos ativamente do processo de criação. Isso foi
              muito enriquecedor.
            </p>
          </blockquote>
          <img
            src={quoteCloseImg}
            alt=""
            aria-hidden="true"
            className={styles.testimonialQuoteClose}
          />
          <p className={styles.testimonialAuthor}>
            — Peter, Gerente Logístico da Gerdau North America
          </p>
        </div>
      </RevealSection>

      {/* 16. Foto da equipe */}
      <div className={styles.teamSection}>
        <div className={styles.container}>
          <img
            src={projectTeamImg}
            alt="Equipe que participou da pesquisa, cocriação e validação do Gerdau Storeroom em Cartersville"
            className={styles.teamImg}
          />
          <p className={styles.caption}>
            O time que participou da pesquisa, cocriação e validação da solução em Cartersville.
          </p>
        </div>
      </div>

      {/* 17. Outros Projetos */}
      <OtherProjectsSection currentSlug="gerdau-storeroom" />
    </Layout>
  )
}
