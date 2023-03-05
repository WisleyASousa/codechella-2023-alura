import type { NextPage } from 'next'
// import styles from '../styles/Home.module.css'
import MainLayout from '../layout/MainLayout'
import Header from '../components/Header'
import DateSection from '../components/DateSection'
import AttSaturday from '../components/AttSaturday'

const Home: NextPage = () => {
  return (
    <MainLayout title="CodeChella - 2023">
      <Header />
      <DateSection />
      <AttSaturday />
    </MainLayout>
  )
}

export default Home
