import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import FullTicket from '../components/FullTicket'

const TicketSucess: NextPage = () => {
  return (
    <MainLayout title="CodeChella 2023">
      <Header
        src="./img/ingressos/banner3.png"
        alt="Multidão em um festival"
        text="Seu ingresso está aqui!"
        className={`${styles.Img__experienceBanner}`}
        className2={`${styles.textHeaderIngresso} `}
      />
      <div className={`p-3 pt-5 pb-4 ${styles.containerTituloIngressoSucess}`}>
        <span className={` ${styles.tituloBodyIngressoSucess} text-white `}>
          Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do
          evento e divirta-se!
        </span>
      </div>
      <div className="d-flex justify-content-center  pt-2 pb-5">
        <FullTicket />
      </div>
    </MainLayout>
  )
}

export default TicketSucess
