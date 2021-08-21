import "../styles/styles.scss";

const VideoGIF = (props) => {
  return (
    <video autoPlay={true} loop={true} muted={true} playsInline={true}>
      <source src={props.src} type="video/mp4" />
    </video>
  );
};

export default VideoGIF;
