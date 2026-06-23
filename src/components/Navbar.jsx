import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <header className={styles.wrapper}>
      <nav className={styles.nav}>
        <a href="#hero" className={styles.logo} aria-label="Henrique M. Silva — início">
          HMS
        </a>
        <ul className={styles.links}>
          <li><a href="#projetos" className={styles.link}>Trabalhos</a></li>
          <li><a href="#sobre" className={styles.link}>Sobre</a></li>
          <li>
            <a
              href="https://linkedin.com/in/"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <a href="#contato" className={styles.cta}>
          Entre em contato
        </a>
      </nav>
    </header>
  )
}
