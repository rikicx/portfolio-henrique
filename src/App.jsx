import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Projects from './components/Projects'
import Quote from './components/Quote'
import About from './components/About'
import Experience from './components/Experience'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Projects />
        <Quote />
        <About />
        <Experience />
      </main>
      <Footer />
    </>
  )
}
