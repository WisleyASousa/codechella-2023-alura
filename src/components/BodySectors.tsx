import styles from '../styles/Home.module.css'
import SectorGrid from './SectorGrid'

interface BodyExperienceProps {
  className?: string | undefined
}

export default function BodyExperience(props: BodyExperienceProps) {
  const dates = [
    {
      img: './img/maps/img3.png',
      alt: 'Umas pessoas benbendo, com uma mulher em destaque',
      titulo: 'Pista',
      text: 'Pista convencional, atendida pelos bares e banheiros das laterais do estádio. Espaço amplo, com local para sentar e descansar. Separada da pista premium por uma grade.',
    },

    {
      img: './img/maps/img1.png',
      alt: 'Publico se divertindo',
      titulo: 'Pista Premium',
      text: 'Pista mais próxima do palco, com acesso muito próximo a banheiros e bares num raio de 100m. Todas as pessoas idosas e/ou com deficiência têm direito a acesso gratuito a essa área.',
    },

    {
      img: './img/maps/img2.png',
      alt: 'Arquibancada vazia',
      titulo: 'Cadeiras',
      text: 'Opção de cadeiras térreas ou elevadas. Acesso próximo a banheiros e bares, visão um pouco elevada em relação às pistas.',
    },
  ]

  function AllDates({
    img,
    alt,
    titulo,
    text,
  }: {
    img: string
    alt: string
    titulo: string
    text: string
  }) {
    return (
      <>
        <SectorGrid
          src={img}
          alt={alt}
          titulo={titulo}
          text={text}
          className={` ${styles.Img__bodySectors}`}
          className2={`gap-4 container text-center ${styles.textoBodySectors}`}
          className3={`text-center ${styles.subtituloBodySectors}`}
          className4={`${styles.containerImg__bodySectors}`}
        />
      </>
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function renderAllDates(dates: any[]) {
    return dates.map((date, i) => {
      return (
        <AllDates
          key={i}
          img={date.img}
          alt={date.alt}
          titulo={date.titulo}
          text={date.text}
        />
      )
    })
  }

  return (
    <div className={``}>
      <div
        className={`${props.className}  d-flex flex-column flex-lg-row py-3 `}
      >
        {renderAllDates(dates)}
      </div>
    </div>
  )
}
