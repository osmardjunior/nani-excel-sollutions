import Button from "../../Components/Button/Button";
import Card from "../../Components/Cards/Card";
import ClassesComponent from "../../Components/Classes/ClassesComponent";
import styles from "./Main.module.scss";
const PhotoSection = () => {
  const idLabelledby = "description-title";

  return (
    <section className={styles.photoSection} aria-labelledby={idLabelledby}>
      <header>
        <h2 className={styles.photoSection__title} itemID={idLabelledby}>
          Com a metodologia Excel Solutions, é possível a prender o básico do
          Excel na prática em
          <span>&nbsp;só 4 dias.</span>
        </h2>
      </header>

      <div className={styles.photoSection__image}>
        <img src="https://picsum.photos/1024/768" alt="" />
      </div>

      <ul className={styles.photoSection__list}>
        <Card text={"Material didático próprio"} />
        <Card text={"Estudo de casos reais"} />
        <Card text={"Instrutores que atuam no mercado"} />
        <Card text={"Pensamento analítico e Excel"} />
      </ul>

      <Button title="Garanta sua Vaga" classes={styles.photoSection__button} />
    </section>
  );
};

const ClassesSection = () => {
  const idLabelledby = "classes-title";

  return (
    <section className={styles.classesSection} aria-labelledby={idLabelledby}>
      <header className={styles.classSection__header}>
        <h3 className={styles.classesSection__title} itemID={idLabelledby}>
          O que você vai aprender na
          <span>&nbsp;Semana Excel na Pratica</span>
        </h3>
      </header>

      <ClassesComponent />
      <ClassesComponent />
      <ClassesComponent />
      <ClassesComponent />
    </section>
  );
};

function Main() {
  return (
    <main className={styles.main}>
      <PhotoSection />
      <ClassesSection />
    </main>
  );
}

export default Main;
