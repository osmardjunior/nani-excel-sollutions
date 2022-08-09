import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={`${styles.header} blur-blobs--top-right`}>
      <img
        className={styles.image}
        src="/assets/footer/excel-na-pratica.svg"
        alt="Semana na Pratica"
      />
      <img
        className={styles.logo}
        src="/assets/footer/excel-solutions.svg"
        alt="Semana na Pratica"
      />
      <h1 className={styles.title}>Obrigado!</h1>
      <p className={styles.info}>
        <strong>Sua vaga está garantida.&nbsp; </strong>Agora é só ficar de olho
<<<<<<< HEAD
        no seu e-mail,acabamos de enviar a confirmação da sua inscrição por lá!
=======
        no seue-mail,acabamos de enviara confirmação da sua inscrição por lá!
>>>>>>> 12911c3c34f7c707741d6d99a758735855eddc2d
      </p>
      <div className={styles.arrow} aria-hidden={true}>
        <span></span>
      </div>
    </header>
  );
}

export default Header;
