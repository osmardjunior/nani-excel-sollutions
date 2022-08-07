import styles from "./Teacher.module.scss";

const Card = ({ imgUlr }) => {
  return (
    <li>
      <img
        className={styles.card__Joelson}
        src={`/assets/teachers/${imgUlr}.svg`}
        alt={`Teacher ${imgUlr}`}
      />
    </li>
  );
};

export default Card;
