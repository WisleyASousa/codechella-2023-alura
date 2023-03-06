/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Home.module.css'

interface ImgBannersProps {
  src: string
  alt: string
}

export default function ImgBanners(props: ImgBannersProps) {
  return (
    <div className={`position-relative ${styles.container__banner} `}>
      <img
        src={props.src}
        className={`d-block w-100 ${styles.banner}`}
        alt={props.alt}
      />
    </div>
  )
}
