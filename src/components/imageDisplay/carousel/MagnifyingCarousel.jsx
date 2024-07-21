import React, { useMemo } from "react";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";

const Carousel = ({ initialImage, images }) => {
  // Convert images object to array and ensure src is correct
  const imageList = useMemo(
    () =>
      Object.keys(images).map((key) => ({
        src: images[key].default,
        alt: key,
      })),
    [images]
  );

  // Find the index of the initial image
  const initialIndex = useMemo(
    () => imageList.findIndex((image) => image.src === initialImage.src),
    [imageList, initialImage]
  );

  // Ensure valid index
  const validIndex = initialIndex >= 0 ? initialIndex : 0;

  console.log("Initial Image:", initialImage);
  console.log("Image List:", imageList);
  console.log("Initial Index:", validIndex);

  return (
    <div className="carousel-container">
      <ResponsiveCarousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        dynamicHeight={true}
        selectedItem={validIndex} // Set initial item
      >
        {imageList.map((image, index) => (
          <div key={index} onClick={() => window.open(image.src, "_blank")}>
            <img src={image.src} alt={image.alt} loading="lazy" />
          </div>
        ))}
      </ResponsiveCarousel>
    </div>
  );
};

export default Carousel;
