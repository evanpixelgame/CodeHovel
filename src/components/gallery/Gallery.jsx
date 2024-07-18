import React from "react";
import Masonry from "react-masonry-css";
import "./Gallery.css";

const Gallery = ({ images }) => {
  const breakpointColumnsObj = {
    default: 4,
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
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image.src} alt={image.alt} className="gallery-image" />
        </div>
      ))}
    </Masonry>
  );
};

export default Gallery;
