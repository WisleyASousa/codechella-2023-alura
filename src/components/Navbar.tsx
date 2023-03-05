/* eslint-disable @next/next/no-img-element */
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className={`${styles.bgNavBar} `}>
      <nav className={`navbar navbar-expand-md px-lg-5 p-2`}>
        <div className="container-fluid flex-md-column flex-lg-row ">
          <Link href="/">
            <a className="navbar-brand ">
              <img
                className=""
                src="./img/logo.png"
                alt="Logo CodeChella"
                width="200"
                height="64"
              />
            </a>
          </Link>
          <button
            className="navbar-toggler bg-transparent btn "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
            <ul
              className={`${styles.navbarLista} text-nowrap navbar-nav text-center  gap-md-5 gap-lg-1`}
            >
              <li className={`nav-item `}>
                <Link href="/experience">
                  <a
                    className={`nav-link active text-white`}
                    aria-current="page"
                  >
                    <span className={`${styles.navbarLista__Item} pb-3 px-4`}>
                      A Experiência
                    </span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/mapOfSectors">
                  <a className="nav-link text-white">
                    <span className={`${styles.navbarLista__Item} pb-3 px-2`}>
                      Mapa de Setores
                    </span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white">
                  <span className={`${styles.navbarLista__Item} pb-3 px-4`}>
                    Informações
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white">Ingresso</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
