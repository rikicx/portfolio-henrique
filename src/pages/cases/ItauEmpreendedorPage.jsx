import Layout from '../../components/Layout'
import OtherProjectsSection from '../../components/OtherProjectsSection'
import styles from './ItauEmpreendedorPage.module.css'

import metaHeroImg from '../../media/cases/itau-empreendedor/itau-meta-hero.jpg'
import cocriacao01 from '../../media/cases/itau-empreendedor/itau-cocriacao-01.jpg'
import cocriacao02 from '../../media/cases/itau-empreendedor/itau-cocriacao-02.jpg'
import cocriacao03 from '../../media/cases/itau-empreendedor/itau-cocriacao-03.jpg'
import cocriacao04 from '../../media/cases/itau-empreendedor/itau-cocriacao-04.jpg'
import daConversaImg from '../../media/cases/itau-empreendedor/itau-da-conversa.jpg'
import produtoImg from '../../media/cases/itau-empreendedor/itau-produto.jpg'
import quoteOpenImg from '../../media/shared/quotes/quote-open.png'
import quoteCloseImg from '../../media/shared/quotes/quote-close.png'

export default function ItauEmpreendedorPage() {
  return (
    <Layout>
      {/* 1. Hero */}
      <section aria-labelledby="itau-title" className={styles.hero}>
        <h1 id="itau-title" className={styles.heroTitle}>
          Itaú<br aria-hidden="true" />Empreendedor
        </h1>
        <div className={styles.heroMeta}>
          <p className={styles.heroKicker}>
            Educação financeira · Design de Produto
          </p>
          <p className={styles.heroDesc}>
            Uma experiência criada para ajudar mulheres empreendedoras a
            entender e organizar melhor o fluxo de caixa dos próprios negócios.
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className={styles.dividerFull} aria-hidden="true" />

      {/* 2. Metadata */}
      <section aria-label="Informações do projeto" className={styles.metadata}>
        <div className={styles.container}>
          <div className={styles.metaLayout}>
            <div className={styles.metaImageWrap}>
              <img
                src={metaHeroImg}
                alt="Telas do aplicativo Itaú Empreendedor com funcionalidades de controle de fluxo de caixa"
                className={styles.metaImg}
              />
            </div>
            <dl className={styles.metaFields}>
              <div className={styles.metaRowTop}>
                <div className={styles.metaItem}>
                  <dt className={styles.metaLabel}>Cliente</dt>
                  <dd className={styles.metaValue}>Itaú Unibanco</dd>
                </div>
                <div className={styles.metaItem}>
                  <dt className={styles.metaLabel}>Ano</dt>
                  <dd className={styles.metaValue}>2020</dd>
                </div>
              </div>
              <div className={styles.metaItem}>
                <dt className={styles.metaLabel}>Papel</dt>
                <dd className={styles.metaValue}>Product Designer</dd>
              </div>
              <div className={styles.metaItem}>
                <dt className={styles.metaLabel}>Atuação</dt>
                <dd className={styles.metaValue}>
                  Pesquisa · Cocriação · Prototipação · Testes de usabilidade
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* 3. O desafio */}
      <section aria-labelledby="itau-desafio" className={styles.desafio}>
        <div className={styles.container}>
          <div className={styles.desafioLayout}>
            <div className={styles.desafioLabelCol}>
              <p id="itau-desafio" className={styles.desafioLabel}>
                O desafio
              </p>
            </div>
            <div className={styles.desafioText}>
              <p>
                Falar de fluxo de caixa parece simples para quem já domina o
                assunto.
              </p>
              <p>Para muitas empreendedoras, não era.</p>
              <p className={styles.textGap}>
                A dificuldade não estava apenas em registrar entradas e saídas.
                Era entender o que aqueles números diziam sobre o negócio e como
                poderiam ajudar nas decisões do dia a dia.
              </p>
              <p className={styles.textGap}>
                O risco era criar mais uma ferramenta financeira correta, mas
                difícil de usar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Pergunta central */}
      <section aria-label="Pergunta central do projeto" className={styles.pergunta}>
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
            Como tornar o fluxo de caixa mais fácil de entender e útil para
            quem precisava administrar o negócio enquanto também cuidava de
            quase todo o resto?
          </blockquote>
          <img
            src={quoteCloseImg}
            alt=""
            aria-hidden="true"
            className={styles.quoteIconClose}
          />
        </div>
      </section>

      {/* 5. Construindo com as empreendedoras */}
      <section aria-labelledby="itau-construindo" className={styles.construindo}>
        <div className={styles.container}>
          <h2 id="itau-construindo" className={styles.sectionHeading}>
            Construindo com as empreendedoras
          </h2>
          <div className={styles.construindoText}>
            <p>
              O trabalho foi desenvolvido a partir de workshops e sessões de
              cocriação com mulheres que viviam essa realidade.
            </p>
            <p>
              As conversas ajudaram a entender como elas organizavam as
              finanças, onde surgiam dúvidas e que tipo de linguagem fazia
              sentido.
            </p>
            <p className={styles.questionsIntro}>
              Em vez de começar por categorias contábeis, começamos por
              perguntas mais simples e concretas:
            </p>

            <div
              className={styles.questionsGrid}
              aria-label="Perguntas financeiras exploradas no projeto"
            >
              <div className={styles.questionCard}>
                <span className={styles.questionNumber}>01</span>
                <p className={styles.questionText}>Quanto entrou?</p>
              </div>

              <div className={styles.questionCard}>
                <span className={styles.questionNumber}>02</span>
                <p className={styles.questionText}>Quanto saiu?</p>
              </div>

              <div className={styles.questionCard}>
                <span className={styles.questionNumber}>03</span>
                <p className={styles.questionText}>
                  O que ainda precisava ser pago?
                </p>
              </div>

              <div className={styles.questionCard}>
                <span className={styles.questionNumber}>04</span>
                <p className={styles.questionText}>
                  O dinheiro disponível seria suficiente?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.fotoGrid}>
          <img
            src={cocriacao01}
            alt="Sessão de cocriação com empreendedoras"
            className={styles.fotoItem}
          />
          <img
            src={cocriacao02}
            alt="Workshop com empreendedoras explorando ideias e soluções"
            className={styles.fotoItem}
          />
          <img
            src={cocriacao03}
            alt="Material e anotações produzidos nas sessões de cocriação"
            className={styles.fotoItem}
          />
          <img
            src={cocriacao04}
            alt="Empreendedoras participando ativamente das sessões de cocriação"
            className={styles.fotoItem}
          />
        </div>

        <div className={styles.container}>
          <p className={styles.fotoCaption}>
            Registros das sessões de cocriação com empreendedoras para entender
            dúvidas, linguagem e decisões financeiras do dia a dia.
          </p>
        </div>
      </section>

      {/* 6. Da conversa para o protótipo */}
      <section aria-labelledby="itau-conversa" className={styles.conversa}>
        <div className={styles.container}>
          <div className={styles.conversaLayout}>
            <div className={styles.conversaTextCol}>
              <h2 id="itau-conversa" className={styles.sectionHeading}>
                Da conversa<br aria-hidden="true" />para o protótipo
              </h2>
              <div className={styles.conversaText}>
                <p>
                  Os aprendizados foram transformados em uma experiência mais
                  simples, com menos linguagem técnica e mais clareza sobre o
                  que cada informação significava.
                </p>
                <p className={styles.textGap}>
                  O objetivo não era ensinar contabilidade.
                </p>
                <p className={styles.textGap}>
                  Era ajudar a empreendedora a olhar para o próprio negócio e
                  entender melhor o que estava acontecendo com o dinheiro.
                </p>
              </div>
            </div>
            <div className={styles.conversaImageCol}>
              <img
                src={daConversaImg}
                alt="Explorando ideias de solução com quem vivia o processo no dia a dia"
                className={styles.conversaImg}
              />
              <p className={styles.conversaCaption}>
                Explorando ideias de solução com quem vivia o processo no dia a
                dia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Aprendizado e prática no mesmo produto */}
      <section aria-labelledby="itau-aprendizado" className={styles.aprendizado}>
        <div className={styles.container}>
          <h2 id="itau-aprendizado" className={styles.sectionHeading}>
            Aprendizado e prática no mesmo produto
          </h2>
          <p className={styles.aprendizadoText}>
            Da cocriação surgiu uma experiência que conectava orientação e uso
            prático: no aplicativo, as empreendedoras podiam registrar entradas
            e saídas e acompanhar o dinheiro do negócio; na plataforma
            administrativa, era possível organizar e publicar conteúdos,
            trilhas e materiais da experiência.
          </p>
        </div>

        <div className={styles.produtoWrap}>
          <img
            src={produtoImg}
            alt="Aplicativo mobile e plataforma de gestão de conteúdo desenvolvidos para a experiência Itaú Empreendedor"
            className={styles.produtoImg}
          />
          <p className={styles.produtoCaption}>
            Aplicativo mobile e plataforma de gestão de conteúdo desenvolvidos
            para a experiência Itaú Empreendedor.
          </p>
        </div>
      </section>

      {/* 8. Outros Projetos */}
      <OtherProjectsSection currentSlug="itau-empreendedor" />
    </Layout>
  )
}
