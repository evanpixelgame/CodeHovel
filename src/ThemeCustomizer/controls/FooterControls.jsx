import React from "react";
import UnitAppender from "../subcomponents/UnitAppender";

const FooterControls = ({ themeProperties, handleInputChange }) => (
  <>
    <div>
      <label>Footer Background Color:</label>
      <input
        type="color"
        value={themeProperties.footerBgColor}
        onChange={(e) => handleInputChange("footerBgColor", e.target.value)}
      />
    </div>
    <div className="appended-unit">
      <label>Footer Width: </label>
      <UnitAppender
        value={themeProperties.footerWidth}
        onChange={(value) => handleInputChange("footerWidth", value)}
      />
    </div>
    <div className="appended-unit">
      <label>Footer Height: </label>
      <UnitAppender
        value={themeProperties.footerHeight}
        onChange={(value) => handleInputChange("footerHeight", value)}
      />
    </div>
  </>
);

export default FooterControls;
