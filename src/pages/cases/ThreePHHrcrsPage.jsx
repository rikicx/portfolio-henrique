import { useState, useEffect, useRef } from 'react'
import Layout from '../../components/Layout'
import OtherProjectsSection from '../../components/OtherProjectsSection'
import TypingTitle from '../../components/TypingTitle'
import RevealSection from '../../components/RevealSection'
import styles from './ThreePHHrcrsPage.module.css'

import heroImg from '../../media/cases/3ph-hrcrs/3ph-hrcrs-hero.jpg'
import benchmarkImg from '../../media/cases/3ph-hrcrs/3ph-hrcrs-benchmark.webp'
import contentStructureImg from '../../media/cases/3ph-hrcrs/3ph-hrcrs-content-structure.webp'
import designSystemImg from '../../media/cases/3ph-hrcrs/3ph-hrcrs-design-system.jpg'
import cmsScreenImg from '../../media/cases/3ph-hrcrs/3ph-hrcrs-cms-screen-03.webp'
import governanceImg from '../../media/cases/3ph-hrcrs/3ph-hrcrs-governance-presentations.webp'
import postLaunchImg from '../../media/cases/3ph-hrcrs/3ph-hrcrs-post-launch-03.webp'
import metricTimeImg from '../../media/cases/3ph-hrcrs/3ph-hrcrs-metric-publication-time.png'
import metricRatingImg from '../../media/cases/3ph-hrcrs/3ph-hrcrs-metric-visual-rating.png'
import metricPagesImg from '../../media/cases/3ph-hrcrs/3ph-hrcrs-metric-pages.png'
import webflowLogoImg from '../../media/cases/3ph-hrcrs/box-governanca-design.png'
import quoteOpenImg from '../../media/shared/quotes/quote-open.png'
import quoteCloseImg from '../../media/shared/quotes/quote-close.png'

export default function ThreePHHrcrsPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const openBtnRef = useRef(null)

  const openLightbox = () => setLightboxOpen(true)
  const closeLightbox = () => {
    setLightboxOpen(false)
    openBtnRef.current?.focus()
  }

  useEffect(() => {
    if (!lightboxOpen) return
    const onKey = (e) => { if (e.key === 'Escape') closeLightbox() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightboxOpen])

  return (
    <Layout>

      {/* 1. Hero */}
      <section aria-labelledby="hero-title" className={styles.hero}>
        <TypingTitle id="hero-title" className={styles.heroTitle} lines={['3PH Alliance &', 'HRCRS', 'Digital Ecosystem']} />
        <p className={styles.heroDesc}>
          Dois sites conectados por uma mesma base visual e editorial, preparados para evoluir
          sem depender de desenvolvimento a cada atualização.
        </p>
      </section>

      <hr className={styles.dividerFull} aria-hidden="true" />

      {/* 2. Metadata */}
      <RevealSection as="section" aria-label="Informações do projeto" className={styles.metadata}>
        <div className={styles.container}>
          <div className={styles.metaLayout}>
            <div className={styles.metaImageWrap}>
              <img
                src={heroImg}
                alt="Tela de laptop exibindo o site da 3PH Alliance com o design visual criado para o projeto"
                className={styles.metaImg}
              />
            </div>
            <div className={styles.metaFields}>
              <div className={styles.metaItem}>
                <p className={styles.metaLabel}>Empresa</p>
                <p className={styles.metaValue}>3PH Alliance + HRCRS</p>
              </div>
              <div className={styles.metaItem}>
                <p className={styles.metaLabel}>Ano</p>
                <p className={styles.metaValue}>2025–2026</p>
              </div>
              <div className={styles.metaItem}>
                <p className={styles.metaLabel}>Papel</p>
                <p className={styles.metaValue}>Head of Design</p>
              </div>
              <div className={styles.metaItem}>
                <p className={styles.metaLabel}>Atuação Estratégica</p>
                <p className={styles.metaValueWide}>
                  Estratégia de conteúdo · Liderança de Design · Arquitetura da Informação ·
                  Governança · Lançamento
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 3. O problema */}
      <RevealSection as="section" aria-labelledby="problema-heading" className={styles.problemaSection}>
        <div className={styles.container}>
          <div className={styles.problemaLayout}>
            <div className={styles.problemaLabelCol}>
              <p className={styles.problemaLabel}>O problema</p>
              <h2 id="problema-heading" className={styles.problemaHeading}>
                O site já nascia desatualizado
              </h2>
            </div>
            <div className={styles.problemaText}>
              <p>Os sites da 3PH Alliance e da HRCRS não atendiam nossas expectativas.</p>
              <p>
                Tinham sido feitos em HTML puro e qualquer mudança de conteúdo dependia de
                desenvolvimento. Isso já seria um problema em qualquer empresa. Para nós era
                ainda pior, porque nosso modelo de negócio mudava praticamente todo mês.
              </p>
              <p>
                Toda semana surgia um serviço novo, uma prioridade diferente ou outra forma
                de explicar o que a empresa fazia. Quando o conteúdo finalmente era publicado,
                muitas vezes já precisava ser alterado de novo.
              </p>
              <p>
                A relação entre as duas empresas também não ajudava. A HRCRS faz parte da 3PH
                Alliance, mas muita gente entendia o contrário. Outras pessoas nem percebiam
                que existia uma relação entre elas.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 4. Pergunta central */}
      <RevealSection as="section" aria-label="Pergunta central do projeto" className={styles.centralQuestion}>
        <div className={styles.container}>
          <img src={quoteOpenImg} alt="" aria-hidden="true" className={styles.quoteIconOpen} />
          <p className={styles.quoteLabel}>A pergunta que orientou o trabalho:</p>
          <blockquote className={styles.quoteText}>
            Como criar dois sites que acompanhassem um negócio em constante mudança, deixassem
            clara a relação entre as empresas e não dependessem de desenvolvimento para cada
            atualização?
          </blockquote>
          <img src={quoteCloseImg} alt="" aria-hidden="true" className={styles.quoteIconClose} />
        </div>
      </RevealSection>

      {/* 5. Benchmark */}
      <RevealSection as="section" aria-labelledby="benchmark-title" className={styles.benchmarkSection}>
        <div className={styles.container}>
          <div className={styles.benchmarkLayout}>
            <figure className={styles.benchmarkFigure}>
              <img
                src={benchmarkImg}
                alt="Benchmark de sites de empresas do setor para identificar padrões de conteúdo, estrutura e diferenciais"
                className={styles.benchmarkImg}
              />
              <figcaption className={styles.caption}>
                Benchmark estrutural para identificar padrões recorrentes nas páginas do setor.
              </figcaption>
            </figure>
            <div className={styles.benchmarkText}>
              <p className={styles.sectionKicker}>
                Primeiro, precisávamos organizar o discurso
              </p>
              <h2 id="benchmark-title" className={styles.sectionHeading}>
                Mapear padrões e expectativas do setor
              </h2>
              <div className={styles.bodyTextBlock}>
                <p>
                  Antes de desenhar, analisamos como outras empresas do setor organizavam seus
                  serviços, diferenciais e provas de resultado.
                </p>
                <p>
                  O benchmark ajudou a identificar padrões úteis, mas também mostrou como muitos
                  sites acabavam dizendo praticamente a mesma coisa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 6. Arquitetura de conteúdo */}
      <RevealSection as="section" aria-labelledby="content-structure-title" className={styles.contentStructureSection}>
        <div className={styles.container}>
          <div className={styles.contentStructureLayout}>
            <div className={styles.contentStructureText}>
              <h2 id="content-structure-title" className={styles.sectionHeading}>
                Definir o papel de cada seção
              </h2>
              <div className={styles.bodyTextBlock}>
                <p>
                  Depois, organizamos o conteúdo de cada página antes de pensar no layout. Para
                  cada bloco, definíamos sua função na narrativa, a mensagem principal e o que o
                  leitor precisava entender antes de seguir.
                </p>
                <p>
                  Estrutura de conteúdo definindo propósito narrativo, mensagem central e
                  percepção desejada para cada seção.
                </p>
              </div>
            </div>
            <figure className={styles.contentStructureFigure}>
              <button
                ref={openBtnRef}
                onClick={openLightbox}
                aria-label="Ampliar arquitetura de conteúdo"
                className={styles.contentStructureBtn}
              >
                <img
                  src={contentStructureImg}
                  alt="Documento de arquitetura de conteúdo com propósito narrativo, mensagem central e percepção desejada definidos para cada seção dos sites"
                  className={styles.contentStructureImg}
                />
              </button>
              <p className={styles.contentStructureTapHint}>Toque para ampliar</p>
              <figcaption className={styles.caption}>
                Estrutura de conteúdo definindo propósito narrativo, mensagem central e percepção
                desejada para cada seção.
              </figcaption>
            </figure>
          </div>
        </div>
      </RevealSection>

      {/* 7. Design System */}
      <RevealSection as="section" aria-labelledby="design-system-title" className={styles.designSystemSection}>
        <div className={styles.container}>
          <h2 id="design-system-title" className={styles.designSystemHeading}>
            Uma base visual para os dois sites
          </h2>
          <div className={styles.bodyTextBlockWide}>
            <p>
              Os sites precisavam parecer parte da mesma empresa, sem parecer cópias um do outro.
              Meu time criou um Design System do zero, compartilhando cores, tipografia,
              espaçamentos, componentes e padrões de interação.
            </p>
            <p>
              A base visual era a mesma. O que mudava era o discurso, o tom e a forma como cada
              empresa apresentava seus serviços. Meu papel era orientar essas decisões e garantir
              que as duas experiências continuassem coerentes ao longo do projeto.
            </p>
          </div>
          <figure className={styles.designSystemFigure}>
            <img
              src={designSystemImg}
              alt="Design System compartilhado entre os sites da 3PH Alliance e HRCRS, com cores, tipografia, componentes e padrões de interação"
              className={styles.designSystemImg}
            />
            <figcaption className={styles.caption}>
              Design System compartilhado entre os dois sites, reunindo fundamentos visuais,
              componentes e padrões de interação.
            </figcaption>
          </figure>
        </div>
      </RevealSection>

      {/* 8. CMS — O site precisava continuar vivo */}
      <RevealSection as="section" aria-labelledby="cms-title" className={styles.cmsSection}>
        <div className={styles.container}>
          <div className={styles.cmsLayout}>
            <div className={styles.cmsText}>
              <h2 id="cms-title" className={styles.sectionHeading}>
                O site precisava continuar vivo
              </h2>
              <div className={styles.bodyTextBlock}>
                <p>
                  Não adiantava lançar dois sites novos e continuar dependendo de desenvolvimento
                  para cada mudança. A solução passou a ter um CMS independente para cada site. O
                  time de Scientific Affairs, por exemplo, passou a publicar abstracts, artigos e
                  vídeos educacionais com autonomia, sem acionar desenvolvimento em toda atualização.
                </p>
                <p>
                  Meu time ainda acompanhava páginas mais sensíveis para evitar que a consistência
                  visual se perdesse. Com isso, o tempo de publicação caiu de até um dia para
                  aproximadamente uma hora.
                </p>
              </div>
            </div>
            <figure className={styles.cmsImages}>
              <img
                src={cmsScreenImg}
                alt="Composição mostrando o site da 3PH Alliance e o painel do CMS utilizado para gerenciar e publicar conteúdos"
                className={styles.cmsImg}
              />
              <figcaption className={styles.caption}>
                CMS independente para organizar e publicar conteúdos sem depender de
                desenvolvimento a cada atualização.
              </figcaption>
            </figure>
          </div>
        </div>
      </RevealSection>

      {/* 9. Governança — Fazer o projeto andar */}
      <RevealSection as="section" aria-labelledby="governance-title" className={styles.governanceSection}>
        <div className={styles.container}>
          <div className={styles.governanceLayout}>
            <figure className={styles.governanceFigure}>
              <img
                src={governanceImg}
                alt="Apresentações e materiais utilizados nos status semanais para alinhar decisões com stakeholders ao longo do projeto"
                className={styles.governanceImg}
              />
              <figcaption className={styles.caption}>
                Cerimônias semanais conectando stakeholders, Tecnologia, Design e Scientific
                Affairs em torno de decisões e próximos passos.
              </figcaption>
            </figure>
            <div className={styles.governanceText}>
              <h2 id="governance-title" className={styles.sectionHeading}>
                Fazer o projeto andar também fazia parte do trabalho
              </h2>
              <div className={styles.bodyTextBlock}>
                <p>
                  As demandas chegavam com urgência, mas as decisões envolviam diferentes áreas e
                  stakeholders.
                </p>
                <p>
                  Para evitar que o projeto ficasse parado, organizei status semanais com o
                  contexto resumido, as opções disponíveis e uma recomendação clara.
                </p>
                <p>Em vez de levar problemas abertos para as reuniões, eu levava decisões preparadas.</p>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 10. Implementação e governança */}
      <RevealSection as="section" aria-labelledby="implementation-title" className={styles.implementationSection}>
        <div className={styles.container}>
          <h2 id="implementation-title" className={styles.sectionHeading}>
            A entrega incluía implementação e governança
          </h2>
          <div className={styles.implementationBox}>
            <div className={styles.webflowLogoWrap} aria-hidden="true">
              <img
                src={webflowLogoImg}
                alt=""
                className={styles.webflowLogo}
              />
            </div>
            <div className={styles.implementationText}>
              <p>
                O desenvolvimento ficava com um fornecedor externo, mas meu time continuava
                próximo durante toda a implementação. Acompanhávamos responsividade, busca,
                formulários, CMS e ajustes visuais para garantir que o que havia sido desenhado
                continuasse funcionando no ambiente real.
              </p>
              <p>
                Eu coordenava a comunicação entre fornecedor, Tecnologia, Design e stakeholders,
                além das rodadas de QA e validação antes de cada publicação.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 11. Pós-lançamento */}
      <RevealSection as="section" aria-labelledby="post-launch-title" className={styles.postLaunchSection}>
        <div className={styles.container}>
          <div className={styles.postLaunchLayout}>
            <div className={styles.postLaunchText}>
              <h2 id="post-launch-title" className={styles.sectionHeading}>
                Depois do lançamento, começou a operação editorial.
              </h2>
              <div className={styles.bodyTextBlock}>
                <p>As primeiras versões dos dois sites entraram no ar em julho de 2025.</p>
                <p>
                  Depois disso, vieram rodadas de atualização de conteúdo, ajustes visuais e
                  novas necessidades do negócio. Os sites continuaram evoluindo até chegar às
                  versões atuais. O lançamento não encerrou o projeto. Ele criou uma base que
                  podia ser corrigida, ampliada e atualizada sem precisar recomeçar toda vez.
                </p>
              </div>
            </div>
            <figure className={styles.postLaunchImages}>
              <img
                src={postLaunchImg}
                alt="Composição das versões atuais dos sites da 3PH Alliance e HRCRS após as rodadas de evolução editorial"
                className={styles.postLaunchImg}
              />
              <figcaption className={styles.caption}>
                Homepages atuais da 3PH Alliance e da HRCRS, evoluídas a partir de uma mesma
                base visual.
              </figcaption>
            </figure>
          </div>
        </div>
      </RevealSection>

      {/* 12. Impacto além dos sites */}
      <RevealSection as="section" aria-labelledby="impact-title" className={styles.impactSection}>
        <div className={styles.container}>
          <div className={styles.impactLayout}>
            <div className={styles.impactText}>
              <h2 id="impact-title" className={styles.sectionHeading}>
                Impacto além dos sites
              </h2>
              <div className={styles.bodyTextBlock}>
                <p>
                  A entrega não terminou em dois sites redesenhados. As áreas com autonomia
                  editorial passaram a publicar conteúdo com pouca ou nenhuma dependência de
                  desenvolvimento, enquanto os formulários começaram a receber contatos comerciais
                  praticamente todos os dias.
                </p>
                <p>
                  O impacto também apareceu fora dos sites. Apresentações e outros materiais da
                  empresa começaram a seguir a mesma linguagem, reforçando uma régua visual comum
                  para a 3PH Alliance e a HRCRS.
                </p>
              </div>
            </div>
            <div className={styles.metricBoxes}>
              <div className={styles.metricBox}>
                <img src={metricTimeImg} alt="" aria-hidden="true" className={styles.metricIcon} />
                <div className={styles.metricContent}>
                  <p className={styles.metricMain}>1 dia → aproximadamente 1 hora</p>
                  <p className={styles.metricSub}>Tempo para publicação de conteúdo</p>
                </div>
              </div>
              <div className={styles.metricBox}>
                <img src={metricRatingImg} alt="" aria-hidden="true" className={styles.metricIcon} />
                <div className={styles.metricContent}>
                  <p className={styles.metricMain}>4,67 de 5</p>
                  <p className={styles.metricSub}>Avaliação média da aparência visual</p>
                </div>
              </div>
              <div className={styles.metricBox}>
                <img src={metricPagesImg} alt="" aria-hidden="true" className={styles.metricIcon} />
                <div className={styles.metricContent}>
                  <p className={styles.metricMain}>Todas as páginas reestruturadas</p>
                  <p className={styles.metricSub}>Nos sites da 3PH Alliance e HRCRS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 13. Outros Projetos */}
      <OtherProjectsSection currentSlug="3ph-hrcrs-digital-ecosystem" />

      {/* Lightbox — arquitetura de conteúdo */}
      {lightboxOpen && (
        <div
          className={styles.lightboxOverlay}
          onClick={(e) => { if (e.target === e.currentTarget) closeLightbox() }}
          role="dialog"
          aria-modal="true"
          aria-label="Arquitetura de conteúdo ampliada"
        >
          <button
            className={styles.lightboxClose}
            onClick={closeLightbox}
            aria-label="Fechar imagem ampliada"
          >
            <span>Fechar imagem</span>
            <span aria-hidden="true">×</span>
          </button>
          <img
            src={contentStructureImg}
            alt="Documento de arquitetura de conteúdo com propósito narrativo, mensagem central e percepção desejada"
            className={styles.lightboxImg}
          />
        </div>
      )}

    </Layout>
  )
}
