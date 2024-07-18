import React from "react";
import UnitAppender from "../subcomponents/UnitAppender";

const LightDarkToggleControls = ({ themeProperties, handleInputChange }) => (
  <>
    <div>
      <label>Top:</label>
      <UnitAppender
        value={themeProperties.togglePlacementTop}
        onChange={(value) => handleInputChange("togglePlacementTop", value)}
      />
    </div>
    <div>
      <label>Right:</label>
      <UnitAppender
        value={themeProperties.togglePlacementRight}
        onChange={(value) => handleInputChange("togglePlacementRight", value)}
      />
    </div>
  </>
);

export default LightDarkToggleControls;
