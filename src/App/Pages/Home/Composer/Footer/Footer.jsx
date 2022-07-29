import styles from "./Footer.module.scss";

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
      <div className={styles.wrapper}>
        <img
          src="/assets/footer/excel-na-pratica.svg"
          alt="Logo da plataforma"
        />
        <img
          src="/public/assets/footer/excel-solutions.svg"
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
          type="text"
          placeholder="E-mail"
        />
        <input
          className={styles.form__input}
          type="text"
          placeholder="Telefone"
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

        <button className={styles.form__button}></button>
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
