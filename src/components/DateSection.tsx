/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Home.module.css'

interface DateSectionProps {
  src: string
  alt?: string
  className?: string
  date?: string[]
  titulo?: string[] | string
  text?: string[] | string
  children?: React.ReactNode
  className2?: string
  className3?: string
}

export default function DateSection(props: DateSectionProps) {
  return (
    <div
      className={`px-3 d-flex flex-column justify-content-xl-evenly w-100 flex-lg-row justify-content-center  py-4 ${styles.secaoDatas__container}  ${props.className2}`}
    >
      <div className={` py-3 ${styles.secaoDatas__containerImg}`}>
        <img
          src={props.src}
          className={` rounded-4 ${props.className} ${styles.secaoDatas__img}`}
          alt={props.alt}
        />
      </div>
      <div className={`d-flex  flex-column align-items-center}`}>
        <div
          className={`py-2 align-self-center  ${props.className2} ${styles.secaoDatas__ContainerTitulo} `}
        >
          <h2
            className={`${styles.secaoDatas__titulo} text-break text-white text-nowrap `}
          >
            {props.date}
          </h2>
          <h2
            className={`${styles.secaoDatas__titulo} ${props.className3} ${props.className2} text-break text-white`}
          >
            {props.titulo}
          </h2>
        </div>
        <span
          className={`${styles.secaoDatas__texto} ${props.className3} ${props.className2} text-white`}
        >
          {props.text}
        </span>
        {props.children}
      </div>
    </div>
  )
}
