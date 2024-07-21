import "./VideoDisplay.css";
import Gallery from "../../../components/imageDisplay/gallery/MagnifyingGallery";
import Carousel from "../../../components/imageDisplay//carousel/MagnifyingCarousel";
import Videos from "../../../components/imageDisplay/videoGallery/VideoGallery";

const VideoDisplay = () => {
  return (
    <>
      <div id="image-display-page">
        <Videos />
      </div>
    </>
  );
};
export default VideoDisplay;
