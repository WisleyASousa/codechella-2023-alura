import type { NextPage } from 'next'
// import styles from '../styles/Home.module.css'
import MainLayout from '../layout/MainLayout'
import Header from '../components/Header'
import DateSection from '../components/DateSection'

const Home: NextPage = () => {
  return (
    <MainLayout title="CodeChella - 2023">
      <Header />
      <DateSection />
    </MainLayout>
  )
}

export default Home
