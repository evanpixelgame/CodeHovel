import React, { useEffect, useRef } from "react";
import interact from "interactjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import "./Modal.css"; // Include your styles for the modal

const stopProp = (e) => {
  e.stopPropagation(); // Prevents click events from propagating to the overlay
};

const Modal = ({ src, alt, onClose }) => {
  const modalImageRef = useRef(null);

  useEffect(() => {
    if (modalImageRef.current) {
      interact(modalImageRef.current).draggable({
        inertia: true,
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: "parent",
            endOnly: true,
          }),
        ],
        onmove: (event) => {
          const { target } = event;
          const sensitivity = 0.5; // Reduce to make dragging slower
          const x =
            (parseFloat(target.getAttribute("data-x")) || 0) +
            event.dx * sensitivity;
          const y =
            (parseFloat(target.getAttribute("data-y")) || 0) +
            event.dy * sensitivity;

          target.style.transform = `translate(${x}px, ${y}px)`;
          target.setAttribute("data-x", x);
          target.setAttribute("data-y", y);
        },
      });

      interact(modalImageRef.current).gesturable({
        onmove: (event) => {
          const { target } = event;
          const scale =
            (parseFloat(target.getAttribute("data-scale")) || 1) + event.ds;
          target.style.transform = `scale(${scale})`;

          target.setAttribute("data-scale", scale);
        },
      });
    }
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={stopProp}>
        <div className="modal-image-wrapper">
          <button
            type="button"
            onClick={onClose}
            style={{
              zIndex: 5000,
              position: "absolute",
              top: "20px",
              right: "20px",
              backgroundColor: "transparent",
              mixBlendMode: "difference",
            }}
          >
            <FontAwesomeIcon icon={faX} />
          </button>
          <img
            src={src}
            alt={alt}
            className="modal-image"
            ref={modalImageRef}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
