/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Home.module.css'

export default function Img() {
  return (
    <div className={`${styles.containerImg__home}`}>
      <img
        src="./img/home/imghome2.png"
        className={`w-100 ${styles.img__home}`}
        alt="Imagem de fundo da Aurora Boreal"
      />
    </div>
  )
}
