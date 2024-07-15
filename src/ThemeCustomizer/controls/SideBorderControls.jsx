import React from "react";
import UnitAppender from "../subcomponents/UnitAppender";

const SideBorderControls = ({ themeProperties, handleInputChange }) => {
  const handleCheckboxChange = (e) => {
    const displayValue = e.target.checked ? "block" : "none";
    handleInputChange("sideBorderDisplay", displayValue);
  };

  return (
    <>
      <div>
        <label>Display:</label>
        <input
          type="checkbox"
          checked={themeProperties.sideBorderDisplay === "block"}
          onChange={handleCheckboxChange}
        />
      </div>
      <div>
        <label>Background Color:</label>
        <input
          type="color"
          className="color-input"
          value={themeProperties.sideBorderBgColor}
          onChange={(e) =>
            handleInputChange("sideBorderBgColor", e.target.value)
          }
        />
      </div>
    </>
  );
};

export default SideBorderControls;
