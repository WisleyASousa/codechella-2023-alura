import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function AccordionInformation() {
  return (
    <div>
      <div
        className={`accordion accordion-flush d-grid gap-2 ${styles.containerAccordion}`}
        id="accordionPanelsStayOpenExample"
      >
        <div className={`accordion-item`}>
          <h2 className={` accordion-header`} id="panelsStayOpen-headingOne">
            <button
              className={`accordion-button text-white ${styles.container__headerAccordion}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Quais serão as atrações?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div
              className={`accordion-body ${styles.textBodyAccordion} text-start`}
            >
              Teremos dois dias de shows, o primeiro (11/03) com bandas de rock,
              e o segundo (12/03) com bandas pop. <br />
              <Link href="/">
                <a className={`text-dark`}>
                  Confira o line-up em detalhes clicando neste link!
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className={`accordion-item`}>
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className={`accordion-button collapsed text-white ${styles.container__headerAccordion}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Qual é a classificação etária?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div
              className={`accordion-body ${styles.textBodyAccordion} text-start`}
            >
              A partir de 16 anos, todo mundo pode entrar. De 13 a 15 anos, tem
              que estar acompanhado dos pais ou responsáveis legais. Menores de
              10 anos não podem entrar.
            </div>
          </div>
        </div>

        <div className={`accordion-item`}>
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className={`accordion-button collapsed text-white ${styles.container__headerAccordion}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Quais são os setores disponíveis?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div
              className={`accordion-body ${styles.textBodyAccordion} text-start`}
            >
              Pista Premium <br />
              Pista Comum <br />
              Cadeiras térreo <br />
              Cadeiras superiores <br />
              Rampas
            </div>
          </div>
        </div>

        <div className={`accordion-item`}>
          <h2 className="accordion-header" id="panelsStayOpen-headingFour">
            <button
              className={`accordion-button collapsed text-white ${styles.container__headerAccordion}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFour"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFour"
            >
              Quais são os itens proibidos?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingFour"
          >
            <div
              className={`accordion-body ${styles.textBodyAccordion} text-start`}
            >
              Garrafas, latas, bebidas, utensílios de armazenagem, embalagens
              rígidas com tampa, capacetes, cadeiras ou bancos, armas de fogo e
              armas brancas, objetos pontiagudos, cortantes e/ou perfurantes,
              correntes e cinturões, fogos de artifício, objetos de vidro,
              substâncias inflamáveis, cigarro eletrônico, corrosivas e ou
              tóxicas, revistas, jornais, livros e copo térmico ou similares.
            </div>
          </div>
        </div>

        <div className={`accordion-item mb-4`}>
          <h2 className="accordion-header" id="panelsStayOpen-headingFive">
            <button
              className={`accordion-button collapsed text-white ${styles.container__headerAccordion}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFive"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFive"
            >
              Quem tem direito a meia-entrada?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingFive"
          >
            <div
              className={`accordion-body ${styles.textBodyAccordion} text-start`}
            >
              De acordo com a Lei Federal, têm direito ao benefício da
              meia-entrada aqueles que preencherem os requisitos e apresentarem
              os documentos comprobatórios.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
