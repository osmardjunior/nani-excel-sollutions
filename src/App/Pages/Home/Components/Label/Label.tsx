import styles from "./Label.module.scss";

const Label = ({ title, classes, theme }: any) => {
  const themeClass = theme ? styles.labelPrimary : styles.labelSecondary;
  const buttonClass = styles.label;

  return (
    <div className={`${buttonClass} ${themeClass} ${classes}`}>
      {title}
      <div className={styles.borderOne}></div>
      <div className={styles.borderTwo}></div>
    </div>
  );
};

export default Label;
