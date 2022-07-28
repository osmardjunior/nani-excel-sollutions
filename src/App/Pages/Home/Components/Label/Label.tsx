import styles from "./Label.module.scss";

const Label = ({ title, classes, theme }: any) => {
  const themeClass = theme ? styles.labelPrimary : styles.labelSecondary;
  const labelClass = styles.label;

  return (
    <h5 className={`${labelClass} ${themeClass} ${classes}`} tabIndex={0}>
      {title}
      <div className={styles.borderOne}></div>
      <div className={styles.borderTwo}></div>
    </h5>
  );
};

export default Label;
