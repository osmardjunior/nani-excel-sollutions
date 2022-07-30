import Label from "../../../../Components/Label/Label";
import styles from "./ClassesComponent.module.scss";

const Card = ({
  idLabelledbyCard,
  title,
  dateDay,
  dateString,
  description,
}) => {
  return (
    <section className={styles.section} aria-labelledby={idLabelledbyCard}>
      <header>
        <Label title={title} classes={styles.label} itemID={idLabelledbyCard} />
      </header>

      <p className={styles.date}>
        <b className={styles.date__bold}>{dateDay}</b>
        {dateString}
      </p>

      <footer>
        <p className={styles.description}>{description}</p>

        <div className={styles.lineBall} aria-hidden={true}></div>
      </footer>
    </section>
  );
};
export default Card;
