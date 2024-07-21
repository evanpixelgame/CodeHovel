import React from "react";
import "./Modal.css"; // Include your styles for the modal

const stopProp = (e) => {
  console.log(e);
  // e.stopPropagation();
};

const Modal = ({ src, alt, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={stopProp}>
        <div className="modal-image=wrapper">
          <img src={src} alt={alt} className="modal-image" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
