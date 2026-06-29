import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import RevealSection from '../components/RevealSection'
import TypingTitle from '../components/TypingTitle'
import styles from './AboutPage.module.css'

import heroImg from '../media/about/about-henrique.webp'
import karateImg from '../media/about/henrique-karate.webp'
import manemShohoImg from '../media/about/manem-shoho.png'
import comeceProbImg from '../media/about/comece-pelo-problema.png'
import aproxPersImg from '../media/about/aproximacao-com-pessoas.png'
import uxImg from '../media/about/ux.png'
import hyperlineSvg from '../media/home/experience/hyperline.svg'

const timeline = [
  {
    key: '3ph',
    name: '3PH Alliance',
    role: 'Product Designer Specialist → Head of Design',
    description:
      'Entrei como designer e assumi a liderança de Design durante o crescimento da empresa, mantendo participação em discovery, estratégia, direção de produto e desenvolvimento da equipe.',
    side: 'right',
  },
  {
    key: 'sciensa',
    name: 'Sciensa',
    role: 'Product Designer Specialist → Head of Design',
    description:
      'Atuei diretamente em projetos e, depois, passei a liderar a disciplina de Design em oito squads, apoiando profissionais e fortalecendo a prática dentro da consultoria.',
    side: 'left',
  },
  {
    key: 'netfarma',
    name: 'Netfarma',
    role: 'Designer → Coordenação de Design',
    description:
      'Comecei desenhando produtos e experiências e, mais tarde, passei a coordenar a equipe e participar de decisões mais amplas sobre o negócio digital.',
    side: 'right',
  },
]

const principles = [
  {
    key: 'problem',
    img: comeceProbImg,
    title: 'Começo pelo problema',
    text: 'Antes de pensar em uma solução, procuro entender o que estamos tentando resolver, para quem aquilo importa e qual mudança esperamos provocar.',
  },
  {
    key: 'perspectives',
    img: aproxPersImg,
    title: 'Aproximo perspectivas',
    text: 'Meu trabalho acontece entre usuários, negócio, produto e tecnologia, tornando decisões, riscos e limitações mais claros para todos.',
  },
  {
    key: 'close',
    img: uxImg,
    title: 'Lidero de perto',
    text: 'Mesmo em posições de liderança, continuo envolvido nas hipóteses, fluxos, protótipos, validações e decisões que definem a experiência.',
  },
]

function HyperLink({ to = null, href = null, children }) {
  const inner = (
    <span className={styles.hyperlinkText}>{children}</span>
  )
  if (to) {
    return <Link to={to} className={styles.hyperlink}>{inner}</Link>
  }
  return <a href={href} className={styles.hyperlink}>{inner}</a>
}

export default function AboutPage() {
  return (
    <Layout>
      <Seo
        title="Sobre Henrique Silva — Design, Produto e Liderança"
        description="Conheça a trajetória, a forma de trabalhar e os princípios de Henrique Silva na construção de produtos, experiências e equipes de Design."
        path="/sobre"
      />

      {/* ── 1. Hero ─────────────────────────────────────────────────── */}
      {/* Desktop: photo left=calc(50%+65px) top=36px (142-106), title top=123px (229-106).
          Mobile order: title → photo → divider → desc (uses flex + order). */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <TypingTitle
            className={styles.heroTitle}
            lines={['Design é a forma como eu entendo e transformo problemas.']}
          />
          <div className={styles.heroBar} aria-hidden="true" />
          <div className={styles.heroPhotoCol}>
            <img
              src={heroImg}
              alt="Retrato de Henrique M. Silva"
              className={styles.heroImg}
            />
          </div>
          <hr className={styles.heroMobileDivider} aria-hidden="true" />
          <p className={styles.heroDesc}>
            Os papéis mudaram ao longo da minha carreira, mas meu ponto de partida permaneceu o mesmo: compreender contextos, organizar complexidade e construir soluções que façam sentido para as pessoas e para o negócio.
          </p>
        </div>
        <hr className={styles.heroDivider} aria-hidden="true" />
      </section>

      {/* ── 2. Carreira ──────────────────────────────────────────────── */}
      <RevealSection as="section" rootMargin="0px 0px -10% 0px" className={styles.carreira}>
        <div className={styles.carreiraOuter}>

          <div className={styles.carreiraIntroRow}>
            <div className={styles.carreiraIntroContent}>
              <h2 className={styles.carreiraTitle}>
                Minha carreira cresceu ao redor do Design, não para longe dele.
              </h2>
              <p className={styles.carreiraDesc}>
                A liderança apareceu quando comecei a assumir responsabilidades além da minha própria entrega: apoiar outros designers, conectar áreas, organizar decisões e criar condições para que equipes trabalhassem melhor.
              </p>
              <p className={styles.carreiraDesc}>
                Isso ampliou meu campo de atuação sem me afastar do Design.
              </p>
            </div>
          </div>

          {/* Desktop timeline — alternating sides, central axis */}
          <div className={styles.timelineDesktop}>
            <div className={styles.timelineAxis} aria-hidden="true" />
            {timeline.map((company) => (
              <div
                key={company.key}
                className={`${styles.timelineEntry} ${company.side === 'left' ? styles.entryLeft : styles.entryRight}`}
              >
                {company.side === 'right' ? (
                  <>
                    <div className={styles.timelineEmpty} />
                    <div className={styles.timelineMarkerWrapper} aria-hidden="true">
                      <div className={styles.markerOuter} />
                      <div className={styles.markerInner} />
                    </div>
                    <div className={styles.timelineContent}>
                      <p className={styles.companyName}>{company.name}</p>
                      <p className={styles.companyRole}>{company.role}</p>
                      <p className={styles.companyDesc}>{company.description}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={`${styles.timelineContent} ${styles.timelineContentLeft}`}>
                      <p className={styles.companyName}>{company.name}</p>
                      <p className={styles.companyRole}>{company.role}</p>
                      <p className={styles.companyDesc}>{company.description}</p>
                    </div>
                    <div className={styles.timelineMarkerWrapper} aria-hidden="true">
                      <div className={styles.markerOuter} />
                      <div className={styles.markerInner} />
                    </div>
                    <div className={styles.timelineEmpty} />
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Mobile timeline — left axis */}
          <div className={styles.timelineMobile}>
            <div className={styles.timelineMobileAxis} aria-hidden="true" />
            {timeline.map((company) => (
              <div key={company.key} className={styles.timelineMobileEntry}>
                <div className={styles.timelineMobileMarkerWrapper} aria-hidden="true">
                  <div className={styles.markerMobileOuter} />
                  <div className={styles.markerMobileInner} />
                </div>
                <div className={styles.timelineMobileContent}>
                  <p className={styles.companyNameMobile}>{company.name}</p>
                  <p className={styles.companyRoleMobile}>{company.role}</p>
                  <p className={styles.companyDescMobile}>{company.description}</p>
                </div>
              </div>
            ))}
          </div>

          <blockquote className={styles.carreiraPullquote}>
            "O que aumentou foi a dimensão da responsabilidade, não a distância da prática."
          </blockquote>
        </div>
      </RevealSection>

      {/* ── 3. Princípios ────────────────────────────────────────────── */}
      <RevealSection as="section" rootMargin="0px 0px -10% 0px" className={styles.principios}>
        <div className={styles.principiosOuter}>
          <h2 className={styles.principiosTitle}>
            O processo muda. Alguns princípios permanecem.
          </h2>
          <div className={styles.principiosGrid}>
            {principles.map((p) => (
              <div key={p.key} className={styles.principio}>
                <img
                  src={p.img}
                  alt=""
                  aria-hidden="true"
                  className={styles.principioIcon}
                />
                <h3 className={styles.principioName}>{p.title}</h3>
                <p className={styles.principioText}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ── 4. Liderança ─────────────────────────────────────────────── */}
      <RevealSection as="section" rootMargin="0px 0px -10% 0px" className={styles.lideranca}>
        <div className={styles.liderancaOuter}>
          <div className={styles.liderancaInner}>
            <h2 className={styles.liderancaTitle}>Liderar também é criar espaço.</h2>
            <div className={styles.liderancaRight}>
              <p className={styles.liderancaText}>
                Quando o contexto pede liderança, eu assumo esse espaço.
              </p>
              <p className={styles.liderancaText}>
                Acredito que equipes maduras não são construídas apenas com processos e ferramentas, mas com confiança, contexto e autonomia. Como líder, procuro criar ambientes em que as pessoas possam expor dúvidas, discordar com respeito e assumir responsabilidade pelo próprio trabalho.
              </p>
              <p className={styles.liderancaText}>
                Liderar, para mim, não significa ter todas as respostas. Significa fazer perguntas melhores e criar condições para que outras pessoas façam um ótimo trabalho.
              </p>
              <blockquote className={styles.liderancaPullquote}>
                "Tento ser o líder que gostaria de ter encontrado ao longo da minha carreira."
              </blockquote>
            </div>
          </div>
        </div>
        <hr className={styles.liderancaDivider} aria-hidden="true" />
      </RevealSection>

      {/* ── 5. Sempre Iniciante ──────────────────────────────────────── */}
      <RevealSection as="section" rootMargin="0px 0px -10% 0px" className={styles.iniciante}>
        <div className={styles.inicianteOuter}>
          <div className={styles.inicianteInner}>
            <div className={styles.iniciantePhotos}>
              <img
                src={karateImg}
                alt="Henrique M. Silva praticando Karatê Shotokan"
                className={styles.inicianteKarateImg}
              />
              <img
                src={manemShohoImg}
                alt="Faixa com a expressão Manen Shōho"
                className={styles.inicianteShohoImg}
              />
            </div>
            <div className={styles.inicianteText}>
              <h2 className={styles.inicianteTitle}>Sempre Iniciante.</h2>
              <p className={styles.inicianteBody}>
                Sou pai de três, casado com uma gaúcha e pratico Karatê Shotokan há mais de dez anos.
              </p>
              <p className={styles.inicianteBody}>
                No dojo onde treino existe uma faixa com a expressão Manen Shōho: um lembrete para preservar a postura de quem continua aprendendo, principalmente quando a experiência começa a nos convencer de que já sabemos o suficiente.
              </p>
              <p className={styles.inicianteBody}>
                Essa ideia também me acompanha no trabalho.
              </p>
              <p className={styles.inicianteBodyDesktop}>
                A experiência ajuda a reconhecer padrões, mas não deveria nos tornar rápidos demais para concluir. Cada produto, equipe e contexto exige disposição para observar, escutar e perguntar novamente.
              </p>
            </div>

            <p className={styles.inicianteBodyFull}>
              A experiência ajuda a reconhecer padrões, mas não deveria nos tornar rápidos demais para concluir. Cada produto, equipe e contexto exige disposição para observar, escutar e perguntar novamente.
            </p>
          </div>
        </div>
        <hr className={styles.inicianteDivider} aria-hidden="true" />
      </RevealSection>

      {/* ── 6. Closing ───────────────────────────────────────────────── */}
      <RevealSection as="section" rootMargin="0px 0px -10% 0px" className={styles.closing}>
        <div className={styles.closingOuter}>
          <h2 className={styles.closingTitle}>
            Continuo interessado nos problemas difíceis.
          </h2>
          <p className={styles.closingText}>
            Aqueles que ainda não têm uma resposta clara e exigem estratégia, colaboração e coragem para decidir.
          </p>
          <p className={styles.closingText}>
            O papel pode mudar. Minha forma de contribuir permanece: perto do problema, das pessoas e das decisões que moldam a experiência.
          </p>
          <div className={styles.closingLinks}>
            <HyperLink to="/trabalhos">Ver meus trabalhos →</HyperLink>
            <HyperLink href="#contato">Entrar em contato →</HyperLink>
          </div>
        </div>
      </RevealSection>

    </Layout>
  )
}
