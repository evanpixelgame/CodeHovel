import "./ImageDisplay.css";
import React, { useState } from "react";
import Gallery from "../../../components/imageDisplay/gallery/MagnifyingGallery";
import Carousel from "../../../components/imageDisplay//carousel/Carousel";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  return (
    <>
      <div id="image-display-page">
        {/* <Carousel initialImage={selectedImage} /> */}
        <Gallery onImageClick={handleImageClick} />
      </div>
    </>
  );
};
export default Projects;
