import styles from "./Button.module.scss";

const Button = ({ title, classes }) => {
  const buttonClass = styles.button;

  return <button className={`${buttonClass} ${classes}`}>{title}</button>;
};

export default Button;
