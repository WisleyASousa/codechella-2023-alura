import type { NextPage } from 'next'
// import styles from '../styles/Home.module.css'
import MainLayout from '../layout/MainLayout'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <MainLayout title="CodeChella - 2023">
      <Header />
    </MainLayout>
  )
}

export default Home
