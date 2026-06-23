import Navbar from './Navbar'

import Footer from './Footer'

import styles from './Layout.module.css'

export default function Layout({ children = null }) {

  return (

    <>

      <Navbar />

      <div className={styles.pageBackground}>

        <main className={styles.main}>

          {children}

        </main>

        <Footer />

      </div>

    </>

  )

}