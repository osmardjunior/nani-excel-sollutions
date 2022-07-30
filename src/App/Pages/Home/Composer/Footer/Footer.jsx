import Button from "../../Components/Button/Button";
import styles from "./Footer.module.scss";
import { useState } from "react"

const [user, setUser] = useState({
  name:'',
  email:'',
  telefone:'',
 
})
const [status, setStatus] = useState({
  type:'',
  mensagem:'',
})
const valueInput = e => setUser({...user,[e.target.name]: e.target,value});

const cadastro = e => {

  e.preventDefault();

  if(!validate()) return; 

  const saveDataForm = true;
  if(saveDataForm) {
    setStatus({
      type: 'sucesso',
      mensagem: 'Usuário cadastrado com sucesso! :D'
    })
    setUser({
      name:'',
      email:'',
      telefone:''
    })
  } else {
    setStatus({
      type: 'erro',
      mensagem: 'Erro: Usuário cadastrado sem sucesso! D:'
    })
  }
}

function validate() {
  if(!user.name) return setStatus({type: 'erro',mensagem: 'Preencha o campo nome'});
  if(!user.email) return setStatus({type: 'erro',mensagem: 'Preencha o campo Email'});
  if(!user.telefone) return setStatus({type: 'erro',mensagem: 'Preencha o campo telefone'});

}











const SocialLink = ({ url, imgUlr, alt }) => {
  return (
    <a href={url}>
      <img src={imgUlr} alt={alt} />
    </a>
  );
};

// W w

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper} id="form">
        <img
          src="/assets/footer/excel-na-pratica.svg"
          alt="Logo da plataforma"
        />
        <img
          src="/assets/footer/excel-solutions.svg"
          alt="Logo da plataforma"
        />
        <p className={styles.wrapper__text}>
          4 AULAS GRATUITAS DE EXCEL NA PRÁTICA COM OS INSTRUTORES MAIS
          PREPARADOS DO MERCADO!
        </p>
      </div>

      <form className={styles.form}>
        <input className={styles.form__input} type="text" placeholder="Nome" onChange={valueInput} value={user.name}/>
        <input
          className={styles.form__input}
          type="text"
          placeholder="E-mail"
          onChange={valueInput} value={user.email}
        />
        <input
          className={styles.form__input}
          type="text"
          minLength={11}
          placeholder="Telefone"
          onChange={valueInput}
          value={user.telefone}
        />
        <select
          className={styles.form__select}
          name="cargos"
          placeholder="Cargo"
        >
          <option value="">Cargo</option>
          <option value="">Cargo</option>
          <option value="">Cargo</option>
          <option value="">Cargo</option>
        </select>

        <Button title="Garantir minha vaga" classes={styles.form__button} />
      </form>

      <div className={styles.social}>
        <img
          className={styles.image}
          src="/assets/footer/excel-solutions.svg"
          alt="semana excel"
        />

        <nav className={styles.social__links}>
          <SocialLink
            url="#"
            imgUlr="/assets/footer/facebook.svg"
            alt="facebook"
          />

          <SocialLink
            url="#"
            imgUlr="/assets/footer/instagram.svg"
            alt="instagram"
          />

          <SocialLink
            url="#"
            imgUlr="/assets/footer/linkdin.svg"
            alt="linkedin"
          />
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
