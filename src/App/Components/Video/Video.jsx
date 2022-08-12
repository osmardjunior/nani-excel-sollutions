import styles from "./Video.module.scss";
import ReactPlayer from "react-player";

const Componente = ({ isVideo, url }) => {
  if (isVideo) {
    return <ReactPlayer url={url} />;
  } else {
    return <img src={url} alt="classImage" />;
  }
};
const Video = ({ classes, isVideo, url }) => {
  return (
    <div className={`${styles.video} ${classes}`}>
      <Componente isVideo={isVideo} url={url} />

      {/* <ReactPlayer
        // url="https://vimeo.com/738749613"

      /> */}
    </div>
  );
};

export default Video;
