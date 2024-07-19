import "./Carousel.css";
import React from "react";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Dynamically import all images in the specified directory
const images = import.meta.glob(
  "/src/assets/images/testPhotos/*.{jpg,png,jpeg}",
  {
    eager: true,
  }
);

const Carousel = () => {
  const imageList = Object.keys(images).map((key) => ({
    src: images[key].default,
    alt: key,
  }));

  return (
    <div className="carousel-container">
      <ResponsiveCarousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        dynamicHeight={true}
      >
        {imageList.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} loading="lazy" />
          </div>
        ))}
      </ResponsiveCarousel>
    </div>
  );
};

export default Carousel;
