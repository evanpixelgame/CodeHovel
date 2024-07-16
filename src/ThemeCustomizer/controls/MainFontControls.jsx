import React from "react";
import UnitAppender from "../subcomponents/UnitAppender";

const MainFontControls = ({ themeProperties, handleInputChange }) => (
  <>
    <div>
      <label>Primary Font:</label>
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
      <label>Primary Color:</label>
      <input
        type="color"
        className="color-input"
        value={themeProperties.primaryTextColor}
        onChange={(e) => handleInputChange("primaryTextColor", e.target.value)}
      />
    </div>
    <div>
      <label>Secondary Color:</label>
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
      <label>H1 Size:</label>
      <UnitAppender
        value={themeProperties.mainTextFontSize}
        onChange={(value) => handleInputChange("mainTextFontSize", value)}
      />
    </div>
    <div>
      <label>H3 Size:</label>
      <UnitAppender
        value={themeProperties.subTextFontSize}
        onChange={(value) => handleInputChange("subTextFontSize", value)}
      />
    </div>
  </>
);

export default MainFontControls;
