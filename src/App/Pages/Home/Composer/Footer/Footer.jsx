import Button from "../../Components/Button/Button";
import Social from "../../../../Components/Social/Social";
import { useNavigate } from "react-router-dom";


import styles from "./Footer.module.scss";
import ButtonForm from "../../Components/Button/ButtonForm";
import { maskPhone } from "../../../../utils/masks";
import { useState } from "react";



const Footer = () => {
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/thanks");
  }

  return (
    <footer className={`${styles.footer} `} id="FORM">
      <div className={styles.wrapper}>
        <img
          src="/assets/footer/excel-na-pratica.svg" 
          alt="Logo da plataforma"
        />
        <img
          src="/assets/footer/excel-solutions.svg"
          alt="Logo da plataforma"
        />
        <p className={styles.wrapper__text}>
        <span>4 AULAS GRATUITAS</span> DE EXCEL NA PRÁTICA COM OS INSTRUTORES MAIS
          PREPARADOS DO MERCADO!
        </p>
      </div>

     <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.form__input} 
          required
          type="text" 
          placeholder="Nome"
        />
        <input
          required
          className={styles.form__input}
          type="email"
          placeholder="E-mail"
        />
        <input
          required
          className={styles.form__input}
          type="text"
          placeholder="Telefone"
          value={phone}
          onInput={(e) => setPhone(maskPhone(e.currentTarget.value))}
        />
        <input
          required
          className={styles.form__input}
          type="text"
          placeholder="Cargo"
        />

        <ButtonForm
          classes={styles.form__button}
          title="Garantir minha vaga"
          type="submit"
        />

      </form> 

      <Social />
    </footer>
  );
};

export default Footer;
