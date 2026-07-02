import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Projects from '../components/Projects'
import Quote from '../components/Quote'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import { useLanguage } from '../context/LanguageContext'
import ptSeo from '../content/pt/home-seo'
import enSeo from '../content/en/home-seo'

export default function HomePage() {
  const { lang } = useLanguage()
  const seo = lang === 'en' ? enSeo : ptSeo

  return (
    <Layout>
      <Seo
        title={seo.title}
        description={seo.description}
        path={seo.path}
        lang={seo.lang}
        robots={seo.robots}
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
