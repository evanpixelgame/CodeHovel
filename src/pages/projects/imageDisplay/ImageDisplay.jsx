import "./ImageDisplay.css";
import Gallery from "../../../components/imageDisplay/gallery/MagnifyingGallery";
import Carousel from "../../../components/imageDisplay//carousel/MagnifyingCarousel";

const ImageDisplay = () => {
  return (
    <>
      <div id="image-display-page">
        <Gallery />
      </div>
    </>
  );
};
export default ImageDisplay;
