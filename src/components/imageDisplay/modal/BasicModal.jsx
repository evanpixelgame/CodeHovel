import React from "react";
import "./Modal.css"; // Include your styles for the modal

const Modal = ({ src, alt, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} className="modal-image" />
      </div>
    </div>
  );
};

export default Modal;
