/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Home.module.css'
import Btn from './Btn'

const dates = ['<11 e 12 de Março>']

export default function DateSection() {
  return (
    <div
      className={`px-3 d-flex flex-column  w-100 flex-lg-row justify-content-center py-4 ${styles.secaoDatas__container}`}
    >
      <div className={` py-3 ${styles.secaoDatas__containerImg}`}>
        <img
          src="./img/home/imghome1.png"
          className={` rounded-4 ${styles.secaoDatas__img}`}
          alt="Imagem de fundo da Aurora Boreal"
        />
      </div>
      <div className={`d-flex flex-column  align-items-center}`}>
        <div
          className={`py-2 align-self-center ${styles.secaoDatas__ContainerTitulo}`}
        >
          <h2 className={`${styles.secaoDatas__titulo} text-break text-white`}>
            {dates}
            <br />
            Aluródromo de São Paulo
          </h2>
        </div>
        <span
          className={`${styles.secaoDatas__texto} align-self-center text-white`}
        >
          Hora de programar nossa memória com novas lembranças! Uma nova
          experiência sobre música, linguagens e, claro, tecnologia! Somos um
          festival diverso, com vários artistas e referências. Divirta-se!
        </span>
        <Btn />
      </div>
    </div>
  )
}
