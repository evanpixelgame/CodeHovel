import React from "react";
import Masonry from "react-masonry-css";
import "./Gallery.css";

// Dynamically import all images in the specified directory
const images = import.meta.glob(
  "/src/assets/images/testPhotos/*.{jpg,png,jpeg}",
  {
    eager: true,
  }
);

const Gallery = () => {
  const imageList = Object.keys(images).map((key) => ({
    src: images[key].default,
    alt: key,
  }));

  const breakpointColumnsObj = {
    default: 2,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="gallery-masonry"
      columnClassName="gallery-masonry-column"
    >
      {imageList.map((image, index) => (
        <div key={index} className="gallery-item">
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="gallery-image"
          />
        </div>
      ))}
    </Masonry>
  );
};

export default Gallery;
