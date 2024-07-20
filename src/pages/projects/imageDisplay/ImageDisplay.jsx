import "./ImageDisplay.css";
import Gallery from "../../../components/imageDisplay/gallery/Gallery";
import Carousel from "../../../components/imageDisplay/carousel/Carousel";

const Projects = () => {
  return (
    <>
      <div id="image-display-page">
        <Carousel />
        <Gallery />
      </div>
    </>
  );
};
export default Projects;
