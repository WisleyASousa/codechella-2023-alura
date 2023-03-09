import Image from 'next/image'
import styles from '../styles/Home.module.css'

interface IconsProps {
  src: string
  alt: string
}

export default function Icons(props: IconsProps) {
  return (
    <div className={`${styles.iconesFooter} d-flex justify-content-center`}>
      <Image
        src={props.src}
        width={32}
        height={32}
        className={``}
        alt={props.alt}
      />
    </div>
  )
}
