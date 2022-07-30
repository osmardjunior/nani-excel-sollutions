import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const Button = ({ title, classes, link }) => {
  const buttonClass = styles.button;
  const linkCheck = link == undefined ? "#" : link;

  return (
    <Link to={`/${linkCheck}`} className={`${buttonClass} ${classes}`}>
      {title}
    </Link>
  );
};

export default Button;
