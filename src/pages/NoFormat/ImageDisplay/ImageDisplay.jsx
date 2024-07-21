import "./ImageDisplay.css";
import Gallery from "../../../components/MediaDisplay/ImageDisplay/Gallery/MagnifyingGallery";
import Carousel from "../../../components/MediaDisplay/ImageDisplay/Carousel/MagnifyingCarousel";
import HellerPhotoLogo from "../../../assets/media/logos/HellerPhotoLogoLightBlueLetterCrop.png";

const ImageDisplay = () => {
  return (
    <>
      <div id="image-display-page">
        <div class="title-container">
          <img src={HellerPhotoLogo} alt="" />
          <div class="vertical-line"></div>
          <h1
            style={{
              fontFamily: "Quicksand",
              fontSize: "29px",
              fontWeight: "400",
              position: "relative",
            }}
          >
            FAMILY PORTRAITS
          </h1>
        </div>

        <Gallery />
      </div>
    </>
  );
};
export default ImageDisplay;
