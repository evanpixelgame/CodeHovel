import React from "react";
import UnitAppender from "../subcomponents/UnitAppender";

const MainFontControls = ({ themeProperties, handleInputChange }) => (
  <>
    <div>
      <label>Background Color:</label>
      <input
        type="color"
        className="color-input"
        value={themeProperties.mainFontBgColor}
        onChange={(e) => handleInputChange("mainFontBgColor", e.target.value)}
      />
    </div>
    <div>
      <label>Primary Font Family:</label>
      <input
        type="text"
        className="text-input"
        value={
          themeProperties.primaryFontFamily.startsWith('"')
            ? themeProperties.primaryFontFamily.slice(1, -1) // Remove leading and trailing quotes
            : themeProperties.primaryFontFamily
        }
        onChange={(e) => handleInputChange("primaryFontFamily", e.target.value)}
      />
    </div>
    <div>
      <label>Primary Text Color:</label>
      <input
        type="color"
        className="color-input"
        value={themeProperties.primaryTextColor}
        onChange={(e) => handleInputChange("primaryTextColor", e.target.value)}
      />
    </div>
    <div>
      <label>Secondary Text Color:</label>
      <input
        type="color"
        className="color-input"
        value={themeProperties.secondaryTextColor}
        onChange={(e) =>
          handleInputChange("secondaryTextColor", e.target.value)
        }
      />
    </div>
    <div>
      <label>Main Text Font Size:</label>
      <UnitAppender
        value={themeProperties.mainTextFontSize}
        onChange={(value) => handleInputChange("mainTextFontSize", value)}
      />
    </div>
    <div>
      <label>Sub Text Font Size:</label>
      <UnitAppender
        value={themeProperties.subTextFontSize}
        onChange={(value) => handleInputChange("subTextFontSize", value)}
      />
    </div>
  </>
);

export default MainFontControls;
