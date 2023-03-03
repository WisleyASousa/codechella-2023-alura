import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import MainLayout from '../layout/MainLayout'

const Home: NextPage = () => {
  return (
    <MainLayout title="CodeChella - 2023">
      <h1 className={styles.title}>Teste</h1>
    </MainLayout>
  )
}

export default Home
