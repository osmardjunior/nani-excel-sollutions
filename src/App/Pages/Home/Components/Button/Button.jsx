import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const LinkItem = ({ title, classes, link }) => {
  const buttonClass = styles.button;
  const linkCheck = link == undefined ? "#" : link;

  return (
    <a href={linkCheck} className={`${buttonClass} ${classes}`}>
      {title}
    </a>
  );
};

const LinkPage = ({ title, classes, link }) => {
  const buttonClass = styles.button;
  const linkCheck = link == undefined ? "#" : link;

  return (
    <Link to={`/${linkCheck}`} className={`${buttonClass} ${classes}`}>
      {title}
    </Link>
  );
};

const Button = ({ title, classes, link, page }) => {
  // const linkType =

  if (page == true) {
    return <LinkPage title={title} classes={classes} link={link} />;
  } else {
    return (
      <LinkItem title={title} classes={classes} link={link} aria-label="item" />
    );
  }
};

export default Button;
