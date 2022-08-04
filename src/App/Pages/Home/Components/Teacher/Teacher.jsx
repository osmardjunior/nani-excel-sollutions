import styles from "./Teacher.module.scss";

const Card = () => {
  return (
    <li className={styles.card}>
      <img
        className={styles.card__Joelson}
        src="../assets/teachers/Joelson.svg"
        alt="Foto Do Professor"
      />

<li>
  <img
        className={styles.card__Paola}
        src="../assets/teachers/Paola.svg"
        alt="Foto Do Professor"
      />
</li>
      

      <img
        className={styles.card__Lucas}
        src="../assets/teachers/Lucas.svg"
        alt="Foto Do Professor"
      />


      <img
        className={styles.card__Adriana}
        src="../assets/teachers/Adriana.svg"
        alt="Foto Do Professor"
      />


      <img
        className={styles.card__Altamir}
        src="../assets/teachers/Altamir.svg"
        alt="Foto Do Professor"
      />








    </li>



  );
};

export default Card;
