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
          url="#"
          imgUlr="/assets/footer/facebook.svg"
          alt="facebook"
        />

        <SocialLink
          url="#"
          imgUlr="/assets/footer/instagram.svg"
          alt="instagram"
        />

        <SocialLink
          url="#"
          imgUlr="/assets/footer/linkdin.svg"
          alt="linkedin"
        />
      </nav>
    </div>
  );
}

export default Social;
