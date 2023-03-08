import styles from '../styles/Home.module.css'
import LogoLink from './LogoLink'

export default function Footer() {
  return (
    <footer className={`${styles.footerContainer} text-center text-white`}>
      <LogoLink />
    </footer>
  )
}
