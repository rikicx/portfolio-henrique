import styles from './Projects.module.css'

const projects = [
  {
    id: 1,
    name: 'QI Platform',
    category: 'Healthcare',
    role: 'Product Strategy Lead',
  },
  {
    id: 2,
    name: 'EMR Integration',
    category: 'Healthcare',
    role: 'Product Strategy Lead',
  },
  {
    id: 3,
    name: 'Gerdau Storeroom',
    category: 'Industry',
    role: 'Product Designer',
  },
]

function ProjectCard({ project }) {
  return (
    <article className={styles.card}>
      <div className={styles.image} role="img" aria-label={`Preview do projeto ${project.name}`} />
      <div className={styles.info}>
        <h3 className={styles.name}>{project.name}</h3>
        <p className={styles.meta}>{project.category} · {project.role}</p>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projetos" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Projetos Selecionados</h2>
        <div className={styles.grid}>
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
