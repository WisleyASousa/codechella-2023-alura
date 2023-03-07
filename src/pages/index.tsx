import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout'
import Header from '../components/Header'
import DateSection from '../components/DateSection'
import AttSaturday from '../components/AttSaturday'
import Img from '../components/Img'

const Home: NextPage = () => {
  return (
    <MainLayout title="CodeChella - 2023">
      <Header />
      <DateSection />
      <AttSaturday />
      <Img />
    </MainLayout>
  )
}

export default Home
