import styles from "./Social.module.scss";
// <<<<<<< HEAD
 
// =======

// >>>>>>> 12911c3c34f7c707741d6d99a758735855eddc2d
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
// <<<<<<< HEAD
          url="https://www.facebook.com/escolaexcelsolutions"
// =======
//           url="#"
// >>>>>>> 12911c3c34f7c707741d6d99a758735855eddc2d
          imgUlr="/assets/footer/facebook.svg"
          alt="facebook"
        />

        <SocialLink
// <<<<<<< HEAD
          url="https://www.instagram.com/excelsolutionsbrasil/"
// =======
//           url="#"
// >>>>>>> 12911c3c34f7c707741d6d99a758735855eddc2d
          imgUlr="/assets/footer/instagram.svg"
          alt="instagram"
        />

        <SocialLink
// <<<<<<< HEAD
          url="https://www.linkedin.com/company/excelsolutionsbrasil/"
// =======
//           url="#"
// >>>>>>> 12911c3c34f7c707741d6d99a758735855eddc2d
          imgUlr="/assets/footer/linkdin.svg"
          alt="linkedin"
        />
      </nav>
    </div>
  );
}

export default Social;
