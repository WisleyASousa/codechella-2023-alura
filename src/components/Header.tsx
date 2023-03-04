/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Home.module.css'

export default function Header() {
  return (
    <div className={`position-relative ${styles.container__banner} `}>
      <section className="text-center">
        <img
          src="./img/banner-homepage.png"
          className={`d-block w-100 ${styles.banner}`}
          alt="Imagem de fundo da Aurora Boreal"
        />
        <div
          className={`${styles.text__header} position-absolute top-50 start-50 translate-middle`}
        >
          <h2 className={`${styles.text__header}`}>Boas-vindas ao</h2>
          <h2 className={`${styles.text__header}`}>#CodeChella2023!</h2>
        </div>
      </section>
    </div>
  )
}
