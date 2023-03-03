import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MainLayoutProps from './MainLayoutProps'


export default function MainLayout(props: MainLayoutProps) {
  console.log(props)
  return (
    <div>
      <Head>
        <title>{props.title ?? 'Refeitório IFPI Picos'}</title>
        <meta
          name="description"
          content="Sistema de gerenciamento de refeitórios do IFPI"
        />
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

      <div className={styles.page}>
        <div className="container text-center ">
          <div className="row">
            <div className="col">

            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-xl-2">
            </div>
              <main className="text-center ">{props.children}</main>
          </div>
        </div>
      </div>

    </div>
  )
}
