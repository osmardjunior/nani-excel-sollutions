import styles from "./brands.module.scss";

const Brands = ({ url, imgUlr }) => {
  const checkUrl = url == undefined ? "#" : url;

  return (
    <a className={styles.brands} href={checkUrl} target="_blank">
      <img src={`/assets/brands/${imgUlr}.svg`} alt={`Brand ${imgUlr}`} />
    </a>
  );
};
export default Brands;
