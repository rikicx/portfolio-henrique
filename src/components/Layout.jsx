import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children = null }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
