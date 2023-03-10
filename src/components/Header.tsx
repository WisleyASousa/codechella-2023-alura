/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Home.module.css'
import ImgBanners from './ImgBanners'

interface HeaderProps {
  src: string
  alt?: string
  className?: string
  text?: string
  text2?: string
}

export default function Header(props: HeaderProps) {
  return (
    <div className={`position-relative  ${styles.container__banner} `}>
      <section className="text-center">
        <ImgBanners
          src={props.src}
          alt="Imagem de fundo da Aurora Boreal"
          className={`${props.className}`}
        />
        <div
          className={`${styles.text__header} position-absolute top-50 start-50 translate-middle`}
        >
          <h2 className={`${styles.text__header} text-nowrap`}>{props.text}</h2>
          <h2 className={`${styles.text__header}`}>{props.text2}</h2>
        </div>
      </section>
    </div>
  )
}
