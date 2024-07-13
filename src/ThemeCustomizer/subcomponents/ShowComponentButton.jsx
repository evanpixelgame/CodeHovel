// ShowCustomizerButton.js

import React from "react";

const ShowCustomizerButton = ({ setShowCustomizer }) => {
  const showCustomizer = () => {
    setShowCustomizer(true);
  };

  return (
    <button className="theme-button" onClick={showCustomizer}>
      Show Customizer
    </button>
  );
};

export default ShowCustomizerButton;
