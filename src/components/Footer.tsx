import styles from '../styles/Home.module.css'
import Icons from './Icons'
import LogoLink from './LogoLink'

export default function Footer() {
  return (
    <footer
      className={`${styles.footerContainer} py-4 d-flex justify-content-center text-center text-white`}
    >
      <div
        className={`d-flex flex-column ${styles.footerContainerInterno} w-100 justify-content-lg-between align-items-md-center flex-lg-row gap-2 px-4`}
      >
        <div className={`d-flex flex-column`}>
          <LogoLink />
          <div
            className={`d-flex justify-content-center flex-md-row align-items-md-center flex-column gap-2`}
          >
            <span className={`${styles.texto__footer}`}>
              Acesse nossas redes:
            </span>
            <div className={`d-flex justify-content-center`}>
              <Icons src="/svgs/icones-redes-socias-18.svg" alt="WhatsApp" />
              <Icons src="/svgs/icones-redes-socias-16.svg" alt="Instagram" />
              <Icons src="/svgs/icones-redes-socias-17.svg" alt="Twitter" />
              <Icons src="/svgs/icones-redes-socias-19.svg" alt="Twitch" />
            </div>
          </div>
        </div>
        <span
          className={`lh-lg text-lg-start ${styles.texto__footerInformacao}`}
        >
          Desenvolvido por Alura. Projeto fictício sem fins comerciais.
        </span>
      </div>
    </footer>
  )
}
