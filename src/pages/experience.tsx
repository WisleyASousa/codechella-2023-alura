import 'bootstrap/dist/css/bootstrap.min.css'
import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout'
import React from 'react'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import BodyExperience from '../components/BodyExperience'

const Experience: NextPage = () => {
  return (
    <MainLayout title="CodeChella - 2023">
      <Header
        src="./img/experienc/imgbanner.png"
        alt="Imagem de fundo da Aurora Boreal"
        text="A Experiência"
        className={`${styles.Img__experienceBanner}`}
      />
      <BodyExperience />
    </MainLayout>
  )
}

export default Experience
