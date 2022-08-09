import styles from "./Social.module.scss";
 
const SocialLink = ({ url, imgUlr, alt }) => {
  return (
    <a href={url}>
      <img src={imgUlr} alt={alt} />
    </a>
  );
};

function Social() {
  return (
    <div className={styles.social}>
      <img
        className={styles.image}
        src="/assets/footer/excel-solutions.svg"
        alt="semana excel"
      />

      <nav className={styles.social__links}>
        <SocialLink
          url="https://www.facebook.com/escolaexcelsolutions"
          imgUlr="/assets/footer/facebook.svg"
          alt="facebook"
        />

        <SocialLink
          url="https://www.instagram.com/excelsolutionsbrasil/"
          imgUlr="/assets/footer/instagram.svg"
          alt="instagram"
        />

        <SocialLink
          url="https://www.linkedin.com/company/excelsolutionsbrasil/"
          imgUlr="/assets/footer/linkdin.svg"
          alt="linkedin"
        />
      </nav>
    </div>
  );
}

export default Social;
