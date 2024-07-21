import React, { useMemo, useState } from "react";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";
import Modal from "../modal/Modal";

const Carousel = ({ initialImage, images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState({ src: "", alt: "" });

  const imageList = useMemo(
    () =>
      Object.keys(images).map((key) => ({
        src: images[key].default,
        alt: key,
      })),
    [images]
  );

  const initialIndex = useMemo(
    () => imageList.findIndex((image) => image.src === initialImage.src),
    [imageList, initialImage]
  );

  const validIndex = initialIndex >= 0 ? initialIndex : 0;

  const openModal = (src, alt) => {
    setModalImage({ src, alt });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage({ src: "", alt: "" });
  };

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
          <div key={index} onClick={() => openModal(image.src, image.alt)}>
            <img src={image.src} alt={image.alt} loading="lazy" />
          </div>
        ))}
      </ResponsiveCarousel>

      {isModalOpen && (
        <Modal src={modalImage.src} alt={modalImage.alt} onClose={closeModal} />
      )}
    </div>
  );
};

export default Carousel;
