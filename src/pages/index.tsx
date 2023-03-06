import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout'
import Header from '../components/Header'
import DateSection from '../components/DateSection'
import AttSaturday from '../components/AttSaturday'
import ImgBanners from '../components/ImgBanners'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <MainLayout title="CodeChella - 2023">
      <Header />
      <DateSection />
      <AttSaturday />
      <ImgBanners
        src="./img/home/imghome2.png"
        alt="Imagem de fundo da Aurora Boreal"
        className={styles.img__home}
      />
    </MainLayout>
  )
}

export default Home
