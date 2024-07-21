import React, { useState } from "react";
import Masonry from "react-masonry-css";
import "./Gallery.css";
//Magnifying Gallery REQUIRES magnifying carousel import to work
import Carousel from "../Carousel/MagnifyingCarousel";

const images = import.meta.glob(
  "/src/assets/images/fullSizePhotos/*.{jpg,png,jpeg}",
  { eager: true }
);

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showCarousel, setShowCarousel] = useState(false);

  const imageList = Object.keys(images).map((key) => ({
    src: images[key].default,
    alt: key,
  }));

  const openCarousel = (image) => {
    setSelectedImage(image);
    console.log(image);
    setShowCarousel(true);
  };

  const closeCarousel = () => {
    setShowCarousel(false);
  };

  return (
    <div>
      {showCarousel && (
        <div className="carousel-overlay">
          <div onClick={closeCarousel} className="close-carousel">
            Click Outside Image Close
          </div>
          {selectedImage && (
            <Carousel initialImage={selectedImage} images={images} />
          )}
        </div>
      )}
      <Masonry
        breakpointCols={{
          default: 2,
          1100: 3,
          700: 2,
          500: 1,
        }}
        className="gallery-masonry"
        columnClassName="gallery-masonry-column"
      >
        {imageList.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => openCarousel(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="gallery-image"
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Gallery;