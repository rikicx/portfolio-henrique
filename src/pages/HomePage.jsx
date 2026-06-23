import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Projects from '../components/Projects'
import Quote from '../components/Quote'
import About from '../components/About'
import Experience from '../components/Experience'

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Stats />
      <Projects />
      <Quote />
      <About />
      <Experience />
    </Layout>
  )
}
