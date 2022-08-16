import styles from "./Button.module.scss";

const ButtonForm = ({ title, classes, type }) => {
const buttonClass = styles.button;

return (
    <button type={type ?? "button"} className={`${buttonClass} ${classes}`}>
        {title}
    </button>
);
};

export default ButtonForm