import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout'
import React from 'react'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import FormTicket from '../components/FormTicket'

const Ticket: NextPage = () => {
  return (
    <MainLayout title="CodeChella - 2023">
      <Header
        src="./img/ingressos/banner2.png"
        alt="Multidão em um festival"
        text="Garanta seu Ingresso"
        className={`${styles.Img__experienceBanner}`}
      />
      <div>
        <div className={`px-4 py-5 px-md-5`}>
          <span className={` ${styles.tituloBodyInformation} text-white`}>
            Preencha o formulário a seguir:
          </span>
        </div>
        <div>
          <FormTicket />
        </div>
      </div>
    </MainLayout>
  )
}

export default Ticket
