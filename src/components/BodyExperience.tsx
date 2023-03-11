import DateSection from './DateSection'
import styles from '../styles/Home.module.css'

export default function BodyExperience() {
  const dates = [
    {
      id: 1,
      img: './img/experienc/img1.png',
      alt: 'Mulher Feliz',
      titulo: 'Acessibilidade e Inclusão',
      text: 'Nosso evento tenta abraçar um público mais amplo em todos os sentidos, de todas as idades, corpos, gostos e pensamentos!  Isso está presente no  espaço físico, na sinalização, no treinamento da equipe de apoio, na comunicação em libras, braile, visual e tátil. Além disso, dispomos de ingressos gratuitos para pessoas com deficiência e acompanhantes, pessoas idosas e crianças!',
    },

    {
      id: 2,
      img: './img/experienc/img2.png',
      alt: 'Sacola com Itans Reciclados',
      titulo: 'Sustentabilidade',
      text: 'Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso, levamos o futuro do nosso planeta a sério. Nosso festival é carbono zero, com utilização de copos retornáveis, coleta e destinação adequada de resíduos, e transporte coletivo.',
    },

    {
      id: 3,
      img: './img/experienc/img3.png',
      alt: 'Montanhas-russa',
      titulo: 'Atrações',
      text: 'Intervenções artísticas e culturais para todos os gostos! Durante os intervalos dos shows, nossa experiência contará com recreação para crianças, oficina de cerâmica, origami, circo e aquarela! Além disso, nosso espaço contra com 3 praças de alimentação, roda gigante e outros brinquedos!',
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
        <DateSection
          src={img}
          alt={alt}
          titulo={titulo}
          text={text}
          className={` ${styles.Img__experience} px-1`}
          className2={`${styles.secaoDatas__containerLocation} `}
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

  return <div>{renderAllDates(dates)}</div>
}
