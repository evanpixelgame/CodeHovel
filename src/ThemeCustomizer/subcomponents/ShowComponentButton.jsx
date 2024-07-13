import React from "react";

const ShowCustomizerButton = ({ showCustomizer, setShowCustomizer }) => {
  const toggleCustomizer = () => {
    setShowCustomizer(!showCustomizer);
  };

  return (
    <button className="theme-button" onClick={toggleCustomizer}>
      {showCustomizer ? "Hide Customizer" : "Show Customizer"}
    </button>
  );
};

export default ShowCustomizerButton;
