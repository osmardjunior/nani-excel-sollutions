import styles from "./Video.module.scss";
import ReactPlayer from "react-player";

const Video = ({ classes }) => {
  return (
    <div className={`${styles.video} ${classes}`}>
       

       {/* <iframe width="100%" height="550" src="https://www.youtube.com/embed/jEXCPkKxvFk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe> */}

       <ReactPlayer
        url="https://vimeo.com/738749613"
      />

       {/* <iframe width="100%" height="550" src="https://vimeo.com/738749613" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe> */}

    </div>
  );
};

export default Video;
