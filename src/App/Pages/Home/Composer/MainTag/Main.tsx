import Button from "../../Components/Button/Button";
import Card from "../../Components/Cards/Card";
import styles from "./Main.module.scss";

function Main() {
  const idLabelledby = "description-title";

  return (
    <main className={styles.main}>
      <section className={styles.sectionPhoto} aria-labelledby={idLabelledby}>
        <header className={styles.sectionPhoto__header}>
          <h2 className={styles.title} itemID={idLabelledby}>
            Comametodologia Excel Solutions, épossível aprenderobásico do Excel
            na prática em &nbsp;
            <span className={styles.title__accent}>só 4 dias.</span>
          </h2>
        </header>

        <div className={styles.image}>
          <img src="https://picsum.photos/1024/768" alt="" />
        </div>

        <ul className={styles.list}>
          <Card text={"Material didático próprio"} />
          <Card text={"Estudo de casos reais"} />
          <Card text={"Instrutores que atuam no mercado"} />
          <Card text={"Pensamento analítico e Excel"} />
        </ul>

        <Button title="Garanta sua Vaga" classes={styles.button} />
      </section>
    </main>
  );
}

export default Main;
