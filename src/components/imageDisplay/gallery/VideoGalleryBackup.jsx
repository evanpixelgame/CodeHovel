import React, { useState } from "react";
import Masonry from "react-masonry-css";
import "./Gallery.css";
import Carousel from "../carousel/MagnifyingCarousel";

// Dynamically import all images and videos in the specified directory
const files = import.meta.glob("/src/assets/media/*.{jpg,png,jpeg,mp4,webm}", {
  eager: true,
});

const Gallery = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showCarousel, setShowCarousel] = useState(false);

  // Create a list of files with their type
  const fileList = Object.keys(files).map((key) => {
    const extension = key.split(".").pop().toLowerCase();
    return {
      src: files[key].default,
      alt: key,
      type: extension === "mp4" || extension === "webm" ? "video" : "image",
    };
  });

  const openCarousel = (file) => {
    setSelectedFile(file);
    console.log(file);
    setShowCarousel(true);
  };

  const closeCarousel = () => {
    setShowCarousel(false);
  };

  return (
    <div>
      {showCarousel && (
        <div className="carousel-overlay">
          <button onClick={closeCarousel} className="close-carousel">
            Close
          </button>
          {selectedFile && (
            <Carousel initialFile={selectedFile} files={fileList} />
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
        {fileList.map((file, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => openCarousel(file)}
          >
            {file.type === "video" ? (
              <video
                src={file.src}
                alt={file.alt}
                loading="lazy"
                className="gallery-media"
                controls
              />
            ) : (
              <img
                src={file.src}
                alt={file.alt}
                loading="lazy"
                className="gallery-image"
              />
            )}
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Gallery;
