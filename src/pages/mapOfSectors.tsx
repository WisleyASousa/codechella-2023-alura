/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout'
import React from 'react'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import MapsSectors from '../components/MapsSectors'
import BodySectors from '../components/BodySectors'

const MapOfSectors: NextPage = () => {
  return (
    <MainLayout title="CodeChella - 2023">
      <Header
        src="./img/maps/bannerSetores.png"
        alt="Frente de uma loja"
        text="Mapa de Setores"
        className={`${styles.Img__experienceBanner}`}
      />
      <div
        className={`${styles.containerMapsColors} d-flex flex-column flex-lg-row align-items-center justify-content-center`}
      >
        <img
          src="./img/maps/mapasetores.png"
          className={`img-fluid  ${styles.imgMapSectors}`}
          alt="Mapa de setores"
        />
        <MapsSectors />
      </div>
      <div className={`${styles.containerBodySectors} pt-5`}>
        <span className={`${styles.tituloBodySectors} text-white`}>
          Mais detalhes sobre os setores:
        </span>
        <BodySectors className={``} />
      </div>
    </MainLayout>
  )
}

export default MapOfSectors
