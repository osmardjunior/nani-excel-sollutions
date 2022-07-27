import styles from "./Button.module.scss";



const Button = ({ title, classes, theme }: any) => {
  const themeClass = theme ? styles.buttonPrimary : styles.buttonSecondary;
  const buttonClass = styles.button;

  return (
    <button className={`${buttonClass} ${themeClass} ${classes}`}>
      {title}
    </button>
  );
};

export default Button;
