import styles from "./TopWrapper.module.scss";

import Label from "../../../../Components/Label/Label";
import Video from "../../../../Components/Video/Video";

const TopWrapper = ({ title, dateDay, dateString, blobSide, videoClasses }) => {
  const camelToSnakeCase = (str) =>
    str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
  const idItemCard = camelToSnakeCase(title);

  const idLabelledbyCard = `top-wrapper-${idItemCard}`;

  const side = blobSide ? "left" : "right";

  return (
    <section
      className={`${styles.section} blur-blobs--${side}`}
      aria-labelledby={idLabelledbyCard}
    >
      <header>
        <Label classes={styles.label} title={title} itemID={idLabelledbyCard} />
      </header>
 
      <p className={styles.date}>
        <b className={styles.date__bold}>{dateDay}</b>
        {dateString}
      </p>

      <footer>
        <Video classes={styles.video} />
      </footer>
    </section>
  );
};

export default TopWrapper;
