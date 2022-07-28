import styles from "./Card.module.scss";

const Card = ({ icon, classes, text }: any) => {
  return (
    <li className={`${styles.card} ${classes}`}>
      <div className={styles.icon} aria-hidden={true}>
        {icon}
      </div>
      <p className={styles.text}>{text}</p>
    </li>
  );
};
export default Card;
