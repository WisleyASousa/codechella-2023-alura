/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Home.module.css'

interface BtnProps {
  className?: string
  src: string
  alt: string
  text?: string
  type: 'button' | 'submit' | 'reset'
}

export default function Btn(props: BtnProps) {
  return (
    <div className={`py-2 d-flex justify-content-center`}>
      <button
        type={props.type}
        className={`btn btn-primary gap-3 d-flex align-items-center btn-lg ${styles.btnIngresso}`}
      >
        {props.text}
        <img src={props.src} className={``} alt={props.alt} />
      </button>
    </div>
  )
}
