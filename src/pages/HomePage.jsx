import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Projects from '../components/Projects'
import Quote from '../components/Quote'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'

export default function HomePage() {
  return (
    <Layout>
      <Seo
        title="Henrique Silva — Product Designer e Líder de Design"
        description="Product Designer e líder de Design com 19 anos de experiência em produtos digitais, estratégia, pesquisa, experiência e desenvolvimento de equipes."
        path="/"
      />
      <Hero />
      <Stats />
      <Projects />
      <Quote />
      <About />
      <Skills />
      <Experience />
    </Layout>
  )
}
