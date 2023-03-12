/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Home.module.css'

interface SectorGridProps {
  src: string
  alt?: string
  className?: string
  titulo?: string[] | string
  text?: string[] | string
  className2?: string
  className3?: string
  className4?: string
}

export default function SectorGrid(props: SectorGridProps) {
  return (
    <div
      className={`text-white  pt-4 d-flex lh-lg justify-content-center  ${styles.containerFlexMapsSectors} `}
    >
      <div className={`d-flex `}>
        <div className={`d-flex flex-column `}>
          <div className={`${styles.className4} `}>
            <img
              src={props.src}
              className={`${props.className} }`}
              alt={props.alt}
            />
          </div>
          <div className={`d-flex flex-column  pt-3 gap-3`}>
            <div className={``}>
              <h2 className={`${props.className3}`}>{props.titulo}</h2>
            </div>
            <span className={`pb-4 ${props.className2}`}>{props.text}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
