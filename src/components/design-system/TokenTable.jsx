import styles from './TokenTable.module.css'

// Generic comparison table — used for Typography, Spacing and
// Radius/Elevation. Each cell's content is whatever the caller passes in
// `rows`; this component only lays it out, it never resolves values itself.
export default function TokenTable({ columns, rows, caption }) {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        {caption && <caption className={styles.caption}>{caption}</caption>}
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} scope="col">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column.key}>{row[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
