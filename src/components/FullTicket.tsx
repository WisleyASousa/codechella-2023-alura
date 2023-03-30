/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Home.module.css'

const imgQrCode = './img/ingressos/qrcode.png'

const participante = {
  nomeCompleto: 'Wisley A. Sousa',
  tipoIngresso: 'Inteira',
  setor: 'Pista Premium',
  data: '11/2023',
  local: 'São Paulo-SP',
}

export default function FullTicket() {
  function showingQrCode() {
    return (
      <div>
        <img src={imgQrCode} className={`${styles.imgQrCode}`} alt="QrCode" />
      </div>
    )
  }

  function renderDates(participante: any) {
    return (
      <div className="d-flex justify-content-center  text-white pt-sm-3 pt-lg-0 ">
        <div className="d-flex flex-column gap-2">
          <span className={`${styles.textTicketSucess}`}>
            {participante.nomeCompleto}
          </span>
          <span className={`${styles.textTicketSucess}`}>
            {participante.tipoIngresso}
          </span>
          <span className={`${styles.textTicketSucess}`}>
            {participante.setor}
          </span>
          <span className={`${styles.textTicketSucess}`}>
            {participante.data}
          </span>
          <span className={`${styles.textTicketSucess}`}>
            {participante.local}
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className={`${styles.containerTicketSucess} container shadow`}>
      <div className="d-flex justify-content-between  px-4 py-5">
        <img
          src="/img/logo.png"
          className={`${styles.logoTicket}`}
          alt="Logo"
        />
        <img src="/svgs/simbolo2.svg" className={``} alt="Logo" />
      </div>
      <div className="d-flex w-100 h-50 flex-lg-row flex-column justify-content-lg-start align-items-lg-center">
        <div className="">{showingQrCode()}</div>
        <div className="text-lg-start">{renderDates(participante)}</div>
      </div>
    </div>
  )
}
