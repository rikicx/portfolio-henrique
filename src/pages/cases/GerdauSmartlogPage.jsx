import Layout from '../../components/Layout'
import OtherProjectsSection from '../../components/OtherProjectsSection'
import styles from './GerdauSmartlogPage.module.css'

import heroImg from '../../media/cases/gerdau-smartlog/smartlog-hero.jpg'
import cocriacaoPanoramicaImg from '../../media/cases/gerdau-smartlog/smartlog-cocriacao-panoramica.jpg'
import estruturando01Img from '../../media/cases/gerdau-smartlog/smartlog-estruturando-01.jpg'
import estruturando02Img from '../../media/cases/gerdau-smartlog/smartlog-estruturando-02.jpg'
import projetandoImg from '../../media/cases/gerdau-smartlog/smartlog-projetando.jpg'
import validandoImg from '../../media/cases/gerdau-smartlog/smartlog-validando.jpg'
import produtoImg from '../../media/cases/gerdau-smartlog/smartlog-produto.jpg'
import smartlogLogoSvg from '../../media/cases/gerdau-smartlog/smartlog-logo.svg'
import quoteOpenImg from '../../media/shared/quotes/quote-open.png'
import quoteCloseImg from '../../media/shared/quotes/quote-close.png'

export default function GerdauSmartlogPage() {
  return (
    <Layout>
      {/* 1. Hero */}
      <section aria-labelledby="hero-title" className={styles.hero}>
        <h1 id="hero-title" className={styles.heroTitle}>Gerdau Smartlog</h1>
        <p className={styles.heroDesc}>
          Uma ferramenta para transformar informações espalhadas entre SAP, Neolog, Excel e
          e-mail em alertas que a operação pudesse assumir, acompanhar e resolver em um único
          lugar.
        </p>
      </section>

      <hr className={styles.dividerFull} aria-hidden="true" />

      {/* 2. Metadata */}
      <section aria-label="Informações do projeto" className={styles.metadata}>
        <div className={styles.container}>
          <div className={styles.metaLayout}>
            <div className={styles.metaImage}>
              <img
                src={heroImg}
                alt="Interface do Gerdau Smartlog com painel de alertas e exceções logísticas"
                className={styles.metaImg}
              />
            </div>
            <div className={styles.metaFields}>
              <div className={styles.metaItem}>
                <p className={styles.metaLabel}>Empresa</p>
                <p className={styles.metaValue}>Gerdau</p>
              </div>
              <div className={styles.metaItem}>
                <p className={styles.metaLabel}>Ano</p>
                <p className={styles.metaValue}>2019</p>
              </div>
              <div className={styles.metaItem}>
                <p className={styles.metaLabel}>Papel</p>
                <p className={styles.metaValue}>Product Designer Specialist</p>
              </div>
              <div className={styles.metaItem}>
                <p className={styles.metaLabel}>Atuação</p>
                <p className={styles.metaValue}>
                  Estratégia · Pesquisa · Prototipação · UX · UI · Cocriação · Fluxos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. O problema */}
      <section aria-labelledby="problema-title" className={styles.problema}>
        <div className={styles.container}>
          <div className={styles.problemaLayout}>
            <div className={styles.problemaLeft}>
              <p className={styles.problemaLabelText}>O problema</p>
              <h2 id="problema-title" className={styles.sectionHeading}>
                O problema estava espalhado entre várias ferramentas
              </h2>
            </div>
            <div className={styles.problemaText}>
              <p>
                A operação logística dependia de SAP, Neolog, Excel e e-mail para identificar e
                tratar exceções. O usuário precisava cruzar informações, confirmar divergências e
                acionar responsáveis em diferentes sistemas.
              </p>
              <p>
                O Smartlog já existia, mas nem sempre chegava no tempo certo. Em alguns casos,
                quando o alerta aparecia, o problema já tinha sido resolvido por outro caminho.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Pergunta central */}
      <section aria-label="Pergunta central do projeto" className={styles.centralQuestion}>
        <div className={styles.container}>
          <img src={quoteOpenImg} alt="" aria-hidden="true" className={styles.quoteIconOpen} />
          <p className={styles.quoteLabel}>A pergunta que orientou o trabalho:</p>
          <blockquote className={styles.quoteText}>
            Como transformar informações dispersas em alertas confiáveis e acionáveis, que
            chegassem antes que a operação resolvesse o problema fora do sistema?
          </blockquote>
          <img
            src={quoteCloseImg}
            alt=""
            aria-hidden="true"
            className={styles.quoteIconClose}
          />
        </div>
      </section>

      {/* 5. Cocriação como parte do processo */}
      <section aria-labelledby="cocriacao-title" className={styles.cocriacao}>
        <div className={styles.container}>
          <h2 id="cocriacao-title" className={styles.sectionHeading}>
            Cocriação como parte do processo
          </h2>
          <div className={styles.cocriacaoText}>
            <p>O Smartlog não foi desenhado de forma isolada.</p>
            <p>
              Ao longo do projeto, trabalhamos lado a lado com pessoas da operação para discutir
              cenários reais, mapear decisões, revisar fluxos e priorizar oportunidades.
            </p>
            <p className={styles.cocriacaoBreak}>
              Essas conversas aconteciam em ciclos de cocriação, usando quadros, anotações,
              simulações e fluxos desenhados em conjunto. Isso ajudou a transformar problemas
              operacionais em funcionalidades mais aderentes à rotina do time e fez com que o
              produto evoluísse sempre em construção conjunta.
            </p>
          </div>
        </div>
        <div className={styles.cocriacaoPanoramica}>
          <div className={styles.container}>
            <img
              src={cocriacaoPanoramicaImg}
              alt="Sessão de cocriação com a equipe de operação, mapeando decisões e fluxos do Smartlog"
              className={styles.panoramicImg}
            />
          </div>
        </div>
      </section>

      {/* 6. Estruturando a complexidade */}
      <section aria-labelledby="estruturando-title" className={styles.estruturando}>
        <div className={styles.container}>
          <div className={styles.estruturandoLayout}>
            <div className={styles.estruturandoText}>
              <h2 id="estruturando-title" className={styles.sectionHeading}>
                Estruturando a complexidade
              </h2>
              <div className={styles.bodyBlock}>
                <p>
                  Boa parte do trabalho era transformar discussões complexas em fluxos claros.
                  Mapeávamos exceções, responsabilidades, critérios de decisão e possíveis
                  desdobramentos até que o problema ficasse compreensível o suficiente para virar
                  solução.
                </p>
                <p className={styles.textGap}>
                  Esse processo ajudou a sair de conversas abstratas sobre operação e chegar em
                  caminhos concretos para o produto.
                </p>
              </div>
            </div>
            <div className={styles.estruturandoImages}>
              <img
                src={estruturando01Img}
                alt="Papéis com fluxos e anotações mapeando exceções e decisões do processo logístico"
                className={styles.estruturandoImg}
              />
              <img
                src={estruturando02Img}
                alt="Diagramas e fluxos estruturando cenários operacionais do Smartlog"
                className={styles.estruturandoImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Projetando para a ação */}
      <section aria-labelledby="projetando-title" className={styles.projetando}>
        <div className={styles.container}>
          <div className={styles.projetandoLayout}>
            <div className={styles.projetandoMedia}>
              <img
                src={projetandoImg}
                alt="Monitor com o painel de alertas do Smartlog, mostrando exceções logísticas em tratamento"
                className={styles.projetandoImg}
              />
            </div>
            <div className={styles.projetandoText}>
              <h2 id="projetando-title" className={styles.sectionHeading}>
                Projetando para a ação
              </h2>
              <div className={styles.bodyBlock}>
                <p>
                  Com os cenários mais maduros, transformei esses fluxos em telas e componentes
                  que ajudassem a operação a identificar, assumir e tratar alertas em um único
                  lugar.
                </p>
                <p>
                  O objetivo não era apenas organizar informação, mas reduzir a dependência de
                  planilhas, e-mails e verificações espalhadas entre sistemas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Validando a lógica com a operação */}
      <section aria-labelledby="validando-title" className={styles.validando}>
        <div className={styles.container}>
          <div className={styles.validandoLayout}>
            <div className={styles.validandoMedia}>
              <img
                src={validandoImg}
                alt="Quadro branco com fluxo de decisão logística mapeado em sessão com a operação"
                className={styles.validandoImg}
              />
            </div>
            <div className={styles.validandoText}>
              <h2 id="validando-title" className={styles.sectionHeading}>
                Validando a lógica com a operação
              </h2>
              <div className={styles.bodyBlock}>
                <p>
                  Nas sessões com a operação, exceções, decisões, pessoas e sistemas apareciam de
                  forma solta. Meu trabalho era organizar esse material em fluxos que o time
                  reconhecesse e conseguisse discutir.
                </p>
                <p className={styles.textGap}>
                  A partir desses fluxos, desenhávamos cenários, revisávamos caminhos possíveis e
                  ajustávamos regras em conjunto para sustentar as decisões de interface.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Produto em operação */}
      <section aria-labelledby="produto-title" className={styles.produto}>
        <div className={styles.container}>
          <h2 id="produto-title" className={styles.sectionHeadingCenter}>
            Produto em operação
          </h2>
          <p className={styles.produtoDesc}>
            O Smartlog foi implantado e passou a concentrar alertas, responsáveis, comentários,
            status e tempos de tratamento em um único ambiente. Depois do lançamento, o produto
            continuou evoluindo em novas versões, incorporando dashboards, acompanhamento de
            veículos e outras frentes da logística.
          </p>
          <div className={styles.smartlogLogoWrap}>
            <img src={smartlogLogoSvg} alt="Logo Smartlog" className={styles.smartlogLogo} />
          </div>
          <div className={styles.produtoImgWrap}>
            <img
              src={produtoImg}
              alt="Smartlog em operação: painel unificado de alertas, responsáveis, status e tempos de tratamento logístico"
              className={styles.produtoImg}
            />
          </div>
        </div>
      </section>

      {/* 10. Outros Projetos */}
      <OtherProjectsSection currentSlug="gerdau-smartlog" />
    </Layout>
  )
}
