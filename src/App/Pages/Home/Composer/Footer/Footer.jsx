import Button from "../../Components/Button/Button";
import styles from "./Footer.module.scss";
import { useState } from "react";

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
    <footer className={`${styles.footer} blur-blobs--bottom-right`}>
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
        <input className={styles.form__input} type="text" placeholder="Nome" />
        <input
          className={styles.form__input}
          type="email"
          placeholder="E-mail"
        />
        <input
          className={styles.form__input}
          type="text"
          placeholder="Telefone"
          pattern="^[0-9]{11}$"
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
