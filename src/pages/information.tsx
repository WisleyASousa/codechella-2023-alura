import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout'
import React from 'react'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

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
        <span className={`${styles.tituloBodyInformation} text-white`}>
          Perguntas Frequentes:
        </span>
      </div>
    </MainLayout>
  )
}

export default Information
