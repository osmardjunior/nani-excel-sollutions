import Label from "../Label/Label";
import styles from "./ClassesComponent.module.scss";

const Card = ({ idLabelledby }: any) => {
  return (
    <section className={styles.section} aria-labelledby={idLabelledby}>
      <Label title="Aula 1" classes={styles.label} />

      <p className={styles.date}>
        <b className={styles.date__bold}>09/08</b>
        Terça Feira
      </p>

      <p className={styles.description}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
        nostrum incidunt mollitia nemo, dolorum sequi reprehenderit quis, fugit
        eos perferendis itaque fuga ducimus id iste at aliquid. Nobis, corrupti
        eveniet.
      </p>

      <div className={styles.lineBall} aria-hidden={true}></div>
    </section>
  );
};
export default Card;
