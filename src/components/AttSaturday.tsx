import styles from '../styles/Home.module.css'

const days = ['sábado <11/03>', 'domingo <12/03>']

const bandsSaturday = [
  'System of a DOM',
  'Python Maiden',
  'Apollo Client 2001',
  'Bon Java',
  'NickCallback',
  'Linkin Promises',
  'Fullstack Fighters',
  'Papa React',
  'Angular in Chains',
  'Agnostic Front-end',
  'SlipkNode',
  'Pink Flutter',
  'Kiss',
]

const bandsSunday = [
  'Lana Del Ploy',
  'Dua Lib',
  'The Backend',
  'CSS Styles',
  'ArrayAna Grande',
  'DJ Query',
  'Miley Cypress',
  'The Bootstrap Boys',
  'Json Derulo',
  'CloudPlay',
  'Dev Lovato',
  'Kylie MiLOG',
  'Jenkins Brothers',
  'Rubycat Dolls',
]

const allBandsList = [bandsSaturday, bandsSunday]

function attractions() {
  return days.map((day) => {
    return (
      <>
        <span
          className={`text-white p-3 my-3 text-nowrap  ${styles.dayAttSaturday}`}
        >
          {day}
        </span>
      </>
    )
  })
}

function allBands() {
  return allBandsList.map((bands, i) => {
    return (
      <>
        <div
          className={`d-flex flex-md-row justify-content-center align-items-md-center gap-4 ${styles.containerDay}`}
        >
          <div className={`${styles.containerDay__Line}`}></div>
          {attractions()[i]}
          <div className={`${styles.containerDay__Line}`}></div>
        </div>
        <div
          className={`${styles.containerList} d-flex justify-content-center p-5 text-white`}
        >
          <ul
            className={`${styles.containerListaBandas} d-flex flex-md-wrap justify-content-evenly flex-md-row  m-0 p-0 gap-3 flex-column`}
          >
            {bands.map((band) => {
              return (
                <>
                  <li className={`${styles.containerListaBandas__banda}`}>
                    {band}
                  </li>
                </>
              )
            })}
          </ul>
        </div>
      </>
    )
  })
}

export default function AttSaturday() {
  return (
    <div>
      <h3 className={`text-white m-5 ${styles.tituloAttSaturday}`}>
        /Line-Up/
      </h3>
      {allBands()}
    </div>
  )
}
