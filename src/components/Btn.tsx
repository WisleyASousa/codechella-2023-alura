/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Home.module.css'

export default function Btn() {
  return (
    <div className={`py-2 d-flex justify-content-center`}>
      <button
        type="button"
        className={`btn btn-primary gap-3 d-flex align-items-center btn-lg ${styles.btnIngresso}`}
      >
        Comprar ingresso!
        <img
          src="./svgs/btn-simbol.svg"
          className={``}
          alt="Ícone de ingresso"
        />
      </button>
    </div>
  )
}
