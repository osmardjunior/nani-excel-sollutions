import styles from "./Teacher.module.scss";

const Card = ({ imgUlr, name, desciption, longDescription }) => {
  return (
    <li className={styles.card}>
      <img
        className={styles.card__img}
// <<<<<<< HEAD
        src={`/assets/teachers/${imgUlr}.jpg`}
// =======
//         src={`/assets/teachers/${imgUlr}.svg`}
// >>>>>>> 12911c3c34f7c707741d6d99a758735855eddc2d
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
