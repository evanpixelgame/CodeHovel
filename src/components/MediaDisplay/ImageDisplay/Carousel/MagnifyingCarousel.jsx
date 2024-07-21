import React, { useMemo, useState, useEffect } from "react";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";
import Modal from "../Modal/Modal";

const Carousel = ({ initialImage, images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState({ src: "", alt: "" });
  const [autoPlay, setAutoPlay] = useState(true);
  const [currentOrientation, setCurrentOrientation] = useState("landscape");
  const [currentIndex, setCurrentIndex] = useState(0);

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
    setAutoPlay(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage({ src: "", alt: "" });
    setAutoPlay(true);
  };

  const getOrientation = (src) => {
    const img = new Image();
    img.src = src;
    return new Promise((resolve) => {
      img.onload = () => {
        resolve(img.width > img.height ? "landscape" : "portrait");
      };
    });
  };

  useEffect(() => {
    const updateOrientation = async () => {
      const currentImage = imageList[currentIndex];
      const orientation = await getOrientation(currentImage.src);
      setCurrentOrientation(orientation);
    };

    updateOrientation();
  }, [currentIndex, imageList]);

  return (
    <div className={`carousel-container ${currentOrientation}`}>
      <ResponsiveCarousel
        showThumbs={false}
        autoPlay={autoPlay}
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        dynamicHeight={true}
        selectedItem={validIndex}
        onChange={(index) => {
          setCurrentIndex(index);
          const currentImage = imageList[index];
          getOrientation(currentImage.src).then((orientation) =>
            setCurrentOrientation(orientation)
          );
        }}
      >
        {imageList.map((image, index) => (
          <div key={index} onClick={() => openModal(image.src, image.alt)}>
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="carousel-img"
            />
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
