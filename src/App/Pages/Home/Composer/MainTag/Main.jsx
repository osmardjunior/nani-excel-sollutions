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
        <img src="https://picsum.photos/1024/768" alt="Video" />
      </div>

      <ul className={styles.photoSection__list}>
        <Card text={"Material didático próprio"} icon="book" />
        <Card text={"Estudos de casos reais"} icon="pensil" />
        <Card text={"Instrutores que atuam no mercado"} icon="person" />
        <Card text={"Pensamento analítico e Excel"} icon="grath" />
      </ul>

      <Button title="Garanta sua vaga" classes={styles.photoSection__button} />
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
          <span>&nbsp;Semana Excel na Prática</span>
        </h3>
      </header>

      <ClassesComponent
        idLabelledbyCard="class-1"
        title="AULA 1"
        dateDay="09/08"
        dateString="Terça-feira"
        description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
        nostrum incidunt mollitia nemo, dolorum sequi reprehenderit quis, fugit
        eos perferendis itaque fuga ducimus id iste at aliquid. Nobis, corrupti
        eveniet."
      />
      <ClassesComponent
        idLabelledbyCard="class-2"
        title="AULA 2"
        dateDay="10/08"
        dateString="Quarta-feira"
        description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
        nostrum incidunt mollitia nemo, dolorum sequi reprehenderit quis, fugit
        eos perferendis itaque fuga ducimus id iste at aliquid. Nobis, corrupti
        eveniet."
      />
      <ClassesComponent
        idLabelledbyCard="class-3"
        title="AULA 3"
        dateDay="11/08"
        dateString="Quinta-feira"
        description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
        nostrum incidunt mollitia nemo, dolorum sequi reprehenderit quis, fugit
        eos perferendis itaque fuga ducimus id iste at aliquid. Nobis, corrupti
        eveniet."
      />
      <ClassesComponent
        idLabelledbyCard="class-4"
        title="MASTERCLASS"
        dateDay="12/08"
        dateString="Sexta-feira"
        description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
        nostrum incidunt mollitia nemo, dolorum sequi reprehenderit quis, fugit
        eos perferendis itaque fuga ducimus id iste at aliquid. Nobis, corrupti
        eveniet."
      />
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
