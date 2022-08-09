import styles from "./Video.module.scss";

const Video = ({ classes }) => {
  return (
    <div className={`${styles.video} ${classes}`}>
      <img src="https://picsum.photos/1024/768" alt="Video" />
    </div>
  );
};

export default Video;
