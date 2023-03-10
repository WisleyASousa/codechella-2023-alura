/* eslint-disable react/no-children-prop */
import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout'
import Header from '../components/Header'
import DateSection from '../components/DateSection'
import AttSaturday from '../components/AttSaturday'
import Img from '../components/Img'
import Btn from '../components/Btn'

const dates = ['< 11 e 12 de Março >']
const titulo = ['Aluródromo de São Paulo']
const text = [
  'Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!',
]

const Home: NextPage = () => {
  return (
    <MainLayout title="CodeChella - 2023">
      <Header
        src="./img/banner-homepage.png"
        alt="Imagem de fundo da Aurora Boreal"
        text="Boas-vindas ao"
        text2="#CodeChella2023!"
      />
      <DateSection
        src="./img/home/imghome1.png"
        alt="Imagem de banda de rock"
        date={dates}
        titulo={titulo}
        text={text}
        children={
          <>
            <Btn />
          </>
        }
      />
      <AttSaturday />
      <Img />
    </MainLayout>
  )
}

export default Home
