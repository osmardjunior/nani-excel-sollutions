import styles from "./Teacher.module.scss";

const Card = () => {
  return (
    <li className={styles.card}>
      <img
        className={styles.card__img}
        src="https://picsum.photos/300/500"
        alt="Foto Do Professor"
      />

      <p className={styles.card__info}>
        <strong>Daniel dos santos </strong>
        Professor da Excel Solutions
      </p>
    </li>


  );
};



export default Card;
