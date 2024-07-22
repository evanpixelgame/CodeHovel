import "./VideoDisplay.css";
import Videos from "../../../components/MediaDisplay/VideoDisplay/VideoGallery";
import NavigateButton from "../../../components/subcomponents/NavigateButton";

const VideoDisplay = () => {
  return (
    <>
      <NavigateButton path="/projects" className="go-back-button" />
      <div id="image-display-page">
        <Videos />
      </div>
    </>
  );
};
export default VideoDisplay;
