import Button from "../../Components/Button/Button";
import Social from "../../../../Components/Social/Social";

import styles from "./Footer.module.scss";



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

        <Button
          title="Garantir minha vaga"
          classes={styles.form__button}
          link="thanks"
        />
      </form>

      <Social />
    </footer>
  );
};

export default Footer;
