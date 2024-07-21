import "./ImageDisplay.css";
import Gallery from "../../../components/imageDisplay/gallery/MagnifyingGallery";
import Carousel from "../../../components/imageDisplay//carousel/MagnifyingCarousel";
import Videos from "../../../components/imageDisplay/videoGallery/VideoGallery";

const Projects = () => {
  return (
    <>
      <div id="image-display-page">
        <Videos />
      </div>
    </>
  );
};
export default Projects;
