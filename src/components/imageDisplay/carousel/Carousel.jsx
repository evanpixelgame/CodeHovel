import React from "react";
import Slider from "react-slick";
import "./Carousel.css";

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <Slider {...settings}>
      {imageList.map((image, index) => (
        <div key={index} className="carousel-item">
          <img src={image.src} alt={image.alt} className="carousel-image" />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
