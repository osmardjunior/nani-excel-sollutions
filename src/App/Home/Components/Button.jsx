import styles from "./Button.module.scss";

function Button({ title, theme }) {
  const themeClass = theme ? styles.buttonPrimary : styles.buttonSecondary;
  const buttonClass = styles.button;

  return <button className={`${buttonClass} ${themeClass}`}>{title}</button>;
}

export default Button;
