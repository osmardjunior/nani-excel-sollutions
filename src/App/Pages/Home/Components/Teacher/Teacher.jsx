import styles from "./Teacher.module.scss";

const Card = ({ imgUlr, name, desciption, longDescription }) => {
  return (
    <li className={styles.card}>
      <img
        className={styles.card__img}
        src={`/assets/teachers/${imgUlr}.svg`}
        alt={`Teacher ${imgUlr}`}
      />

      <p className={styles.card__info}>
        <strong>{name}</strong>
        <i>{desciption}</i>
        <i>{longDescription}</i>
      </p>
    </li>
  );
};

export default Card;
