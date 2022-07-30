import styles from "./Video.module.scss";

const Video = () => {
  return (
    <div className={styles.video}>
      <img src="https://picsum.photos/1024/768" alt="Video" />
    </div>
  );
};

export default Video;
