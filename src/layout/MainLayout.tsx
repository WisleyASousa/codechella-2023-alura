import Head from 'next/head'
import MainLayoutProps from './MainLayoutProps'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import styles from '../styles/Home.module.css'

export default function MainLayout(props: MainLayoutProps) {
  return (
    <div>
      <Head>
        <title>{props.title ?? 'CodeChella 2023'}</title>
        <meta name="description" content="CodeChella 2023" />
        <link rel="icon" href="./img/simbolo.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
        ></link>
        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <div className={`text-center`}>
        <div className="">
          <div className="">
            <header className="">
              <Navbar />
            </header>
          </div>
          <div className="">
            <main className="">{props.children}</main>
          </div>
          <div className="">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}
