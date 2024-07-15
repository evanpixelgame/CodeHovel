import React from "react";

const SiteTitleControls = ({ themeProperties, handleInputChange }) => (
  <>
    <div>
      <label>Color:</label>
      <input
        type="color"
        className="color-input"
        value={themeProperties.siteTitleColor}
        onChange={(e) => handleInputChange("siteTitleColor", e.target.value)}
      />
    </div>
    <div>
      <label>Font Size:</label>
      <input
        type="number"
        className="number-input"
        value={parseInt(themeProperties.siteTitleFontSize, 10)}
        onChange={(e) =>
          handleInputChange("siteTitleFontSize", `${e.target.value}px`)
        }
        min="10"
        max="100"
      />
    </div>
    <div>
      <label>Padding Left:</label>
      <input
        type="range"
        className="range-input"
        value={parseInt(themeProperties.siteTitlePadLeft, 10)}
        onChange={(e) =>
          handleInputChange("siteTitlePadLeft", `${e.target.value}%`)
        }
        min="0"
        max="70"
        step="1"
      />
      <span>{themeProperties.siteTitlePadLeft}</span>
    </div>
  </>
);

export default SiteTitleControls;
