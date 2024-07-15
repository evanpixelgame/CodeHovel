import React from "react";
import UnitAppender from "../subcomponents/UnitAppender";

const NavBarControls = ({ themeProperties, handleInputChange }) => (
  <>
    <div>
      <label>Background Color:</label>
      <input
        type="color"
        className="color-input"
        value={themeProperties.navBgColor}
        onChange={(e) => handleInputChange("navBgColor", e.target.value)}
      />
    </div>
    <div>
      <label>Link Color:</label>
      <input
        type="color"
        className="color-input"
        value={themeProperties.navLinkColor}
        onChange={(e) => handleInputChange("navLinkColor", e.target.value)}
      />
    </div>
    <div>
      <label>Link Font Family:</label>
      <input
        type="text"
        className="text-input"
        value={themeProperties.navLinkFontFamily}
        onChange={(e) => handleInputChange("navLinkFontFamily", e.target.value)}
      />
    </div>
    <div>
      <label>Width:</label>
      <UnitAppender
        value={themeProperties.navWidth}
        onChange={(value) => handleInputChange("navWidth", value)}
      />
    </div>
    <div>
      <label>Height:</label>
      <UnitAppender
        value={themeProperties.navHeight}
        onChange={(value) => handleInputChange("navHeight", value)}
      />
    </div>
    <div>
      <label>Left:</label>
      <UnitAppender
        value={themeProperties.navLeft}
        onChange={(value) => handleInputChange("navLeft", value)}
      />
    </div>
  </>
);

export default NavBarControls;
