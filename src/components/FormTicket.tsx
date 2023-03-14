import styles from '../styles/Home.module.css'
import Btn from './Btn'

export default function FormTicket() {
  return (
    <div className="text-start mx-3 d-grid gap-4 pb-4">
      <div className="">
        <label
          htmlFor="nomeCompleto"
          className={`${styles.textLabelForm} form-label text-white`}
        >
          Nome Completo:
        </label>
        <input
          type="text"
          className="form-control  rounded-0 text-start rounded-0"
          id="nomeCompleto"
          placeholder="Seu Nome"
        />
      </div>
      <div className="">
        <label
          htmlFor="emailUsuario"
          className={`${styles.textLabelForm} form-label text-white`}
        >
          Email:
        </label>
        <input
          type="email"
          className="form-control rounded-0  text-start"
          id="emailUsuario"
          placeholder="nome@exemplo.com"
        />
      </div>
      <div className="">
        <label
          htmlFor="cpfUsuario"
          className={`${styles.textLabelForm} form-label text-white`}
        >
          CPF:
        </label>
        <input
          type="text"
          className="form-control  rounded-0 text-start"
          id="cpfUsuario"
          placeholder="000.000.000-00"
        />
      </div>
      <div>
        <label
          htmlFor="tipoIngresso"
          className={`${styles.textLabelForm} form-label text-white`}
        >
          Tipo de ingresso
        </label>
        <div className="form-floating ">
          <select
            className="form-select rounded-0 p-0 ps-2"
            id="tipoIngresso"
            aria-label="Floating select example"
          >
            <option selected>Tipo de Ingresso</option>
            <option value="1">Inteira</option>
            <option value="2">Meia entrada(Estudantil)</option>
            <option value="3">Cortesia</option>
          </select>
        </div>
      </div>
      <div>
        <label
          htmlFor="setorMap"
          className={`${styles.textLabelForm} form-label text-white`}
        >
          Setor
        </label>
        <div className="form-floating ">
          <select
            className="form-select rounded-0 p-0 ps-2"
            id="SetorMap"
            aria-label="Floating select example"
          >
            <option selected>Onde deseja sentar</option>
            <option value="1">Pista Premium</option>
            <option value="2">Pista Comum</option>
            <option value="3">Cadeiras térreo</option>
            <option value="4">Cadeiras superiores</option>
            <option value="5">Rampas</option>
          </select>
        </div>
      </div>
      <div className="">
        <label
          htmlFor="dataNasc"
          className={`${styles.textLabelForm} form-label text-white`}
        >
          Data de Nascimento:
        </label>
        <input
          type="date"
          className="form-control  rounded-0 text-start rounded-0"
          id="dataNasc"
        />
      </div>
      <Btn
        text="Avançar!"
        type="submit"
        src="./svgs/seta.svg"
        alt="Seta para a direita"
      />
    </div>
  )
}
