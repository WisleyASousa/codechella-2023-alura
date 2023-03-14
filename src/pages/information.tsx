import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout'
import React from 'react'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import AccordionInformation from '../components/AccordionInformation'

const Information: NextPage = () => {
  return (
    <MainLayout title="CodeChella - 2023">
      <Header
        src="./img/ingressos/banner.png"
        alt="Multidão em um festival"
        text="Informações Gerais"
        className={`${styles.Img__experienceBanner}`}
      />
      <div>
        <div className={`p-5`}>
          <span className={` ${styles.tituloBodyInformation} text-white`}>
            Perguntas Frequentes:
          </span>
        </div>
        <div>
          <AccordionInformation />
        </div>
      </div>
    </MainLayout>
  )
}

export default Information
