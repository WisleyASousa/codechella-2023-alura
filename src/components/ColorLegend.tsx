import styles from '../styles/Home.module.css'

const colors = [
  'Pista Premium',
  'Pista Comum',
  'Cadeiras térreo',
  'Cadeiras superiores',
  'Rampas',
]

const colorsBox = [
  styles.boxColors1,
  styles.boxColors2,
  styles.boxColors3,
  styles.boxColors4,
  styles.boxColors5,
]

export default function ColorLegend() {
  function renderColorLegend() {
    return colors.map((color, i) => {
      return (
        <div key={i} className={`d-flex gap-3 `}>
          <div className={` ${colorsBox[i]}`}></div>
          <p className={`text-white text-nowrap  ${styles.textoMapSectors}`}>
            {color}
          </p>
        </div>
      )
    })
  }

  return (
    <div className={`${styles.containerMapSectors}`}>
      <div className={`py-3 d-flex flex-column `}>
        <p
          className={`fw-bold text-white text-start ${styles.textoMapSectors}`}
        >
          Legenda:
        </p>
        <div className={`d-flex flex-column gap-3 justify-content-start`}>
          {renderColorLegend()}
        </div>
      </div>
    </div>
  )
}
