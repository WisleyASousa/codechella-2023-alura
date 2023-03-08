import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import LogoLink from './LogoLink'

export default function Navbar() {
  return (
    <div className={`${styles.bgNavBar} `}>
      <nav className={`navbar navbar-expand-md px-lg-5 p-2`}>
        <div className="container-fluid  flex-md-column flex-lg-row ">
          <LogoLink />
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
            <ul className={`${styles.navbarLista}  navbar-nav text-center`}>
              <li className={`nav-item `}>
                <Link href="/experience">
                  <a
                    className={`nav-link  active ${styles.navbarLista__link} text-white `}
                    aria-current="page"
                  >
                    A Experiência
                  </a>
                </Link>
                <div className={`${styles.navbarLista__Item}`}></div>
              </li>
              <li className="nav-item">
                <Link href="/mapOfSectors">
                  <a
                    className={`nav-link  text-white ${styles.navbarLista__link}`}
                  >
                    Mapa de Setores
                  </a>
                </Link>
                <div className={`${styles.navbarLista__Item}`}></div>
              </li>
              <li className="nav-item">
                <Link href="/information">
                  <a
                    className={`nav-link  text-white ${styles.navbarLista__link}`}
                  >
                    Informações
                  </a>
                </Link>
                <div className={`${styles.navbarLista__Item}`}></div>
              </li>
              <li className="nav-item">
                <Link href="/ticket">
                  <a
                    className={`nav-link text-white ${styles.navbarLista__link} `}
                  >
                    Ingresso
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
