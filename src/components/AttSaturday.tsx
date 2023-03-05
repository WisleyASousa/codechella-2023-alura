import styles from '../styles/Home.module.css'

// const days = [ 'sábado <11/03>', 'domingo <12/03>' ];

// const bandsSaturday = [ 'System of a DOM', 'Python Maiden', 'Apollo Client 2001', 'Bon Java', 'NickCallback', 'Linkin Promises', 'Fullstack Fighters', 'Papa React', 'Angular in Chains', 'Agnostic Front-end', 'SlipkNode', 'Pink Flutter', 'Kiss' ];

// const bandsSunday = [ 'Lana Del Ploy', 'Dua Lib', 'The Backend', 'CSS Styles', 'ArrayAna Grande', 'DJ Query', 'Miley Cypress', 'The Bootstrap Boys', 'Json Derulo', 'CloudPlay', 'Dev Lovato', 'Kylie MiLOG', 'Jenkins Brothers', 'Rubycat Dolls'];

// const bandSaturday = bandsSaturday.map((band) => {
//   return <>{band}</>
// })
// const bandSunday = bandsSunday.map((band) => {
//   return <>{band}</>
// })

export default function AttSaturday() {
  return (
    <div>
      <h3 className={`text-white m-5 ${styles.tituloAttSaturday}`}>
        /Line-Up/
      </h3>
      {/* como colocar os simbolos "<>" como texto normal */}
      <div
        className={`d-flex flex-md-row justify-content-center align-items-md-center gap-4 ${styles.containerDay}`}
      >
        <div className={`${styles.containerDay__Line}`}></div>
        <span
          className={`text-white p-3 my-3 text-nowrap  ${styles.dayAttSaturday}`}
        >
          SÁBADO 11/03
        </span>
        <div className={`${styles.containerDay__Line}`}></div>
      </div>
      <div
        className={`${styles.containerList} d-flex justify-content-center p-5 text-white`}
      >
        <ul
          className={`${styles.containerListaBandas} d-flex flex-md-wrap justify-content-evenly flex-md-row  m-0 p-0 gap-3 flex-column`}
        >
          <li className={`${styles.containerListaBandas__banda} w-100`}>
            System of a DOM
          </li>
          <li className={`${styles.containerListaBandas__banda}`}>
            Python Maiden
          </li>
          <li className={`${styles.containerListaBandas__banda}`}>
            Apollo Client 2001
          </li>
          <li className={`${styles.containerListaBandas__banda}`}>Bon Java</li>
          <li className={`${styles.containerListaBandas__banda}`}>
            NickCallback
          </li>
          <li className={`${styles.containerListaBandas__banda}`}>
            Linkin Promises
          </li>
          <li className={`${styles.containerListaBandas__banda}`}>
            Fullstack Fighters
          </li>
          <li className={`${styles.containerListaBandas__banda}`}>
            Papa React
          </li>
          <li className={`${styles.containerListaBandas__banda}`}>
            Angular in Chains
          </li>
          <li className={`${styles.containerListaBandas__banda}`}>
            Agnostic Front-end
          </li>
          <li className={`${styles.containerListaBandas__banda}`}>SlipkNode</li>
          <li className={`${styles.containerListaBandas__banda}`}>
            Pink Flutter
          </li>
          <li className={`${styles.containerListaBandas__banda}`}>Kiss</li>
        </ul>
      </div>
    </div>
  )
}
