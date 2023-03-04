/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Home.module.css'

export default function Header() {
  return (
    <div className="position-relative">
      <section className="text-center">
        <img
          src="./img/banner-homepage.png"
          className="img-fluid d-block w-100"
          alt="Imagem de fundo da Aurora Boreal"
        />
        <div
          className={`${styles.text__header} position-absolute top-50 start-50 translate-middle`}
        >
          <h2 className="">Boas-vindas ao</h2>
          <h2 className="">#CodeChella2023!</h2>
        </div>
      </section>
    </div>
  )
}
