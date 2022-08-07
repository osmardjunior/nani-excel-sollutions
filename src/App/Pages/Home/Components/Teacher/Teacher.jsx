import styles from "./Teacher.module.scss";

const Card = ({ulrImg}) => {
  return (
   <ul className={styles.card}>
    <li >
      <img
        className={styles.card__Joelson}
        src={ulrImg}
        alt="Foto Do Professor"
      />
    </li>

    

   </ul>














  );
};

export default Card;
