import React from "react";
import UnitAppender from "../subcomponents/UnitAppender";

const SocialLinkControls = ({ themeProperties, handleInputChange }) => (
  <>
    <div>
      <label>Gap:</label>
      <UnitAppender
        value={themeProperties.socialLinksGap}
        onChange={(value) => handleInputChange("socialLinksGap", value)}
      />
    </div>
    <div>
      <label>Vertical Position:</label>
      <input
        type="range"
        className="range-input"
        value={parseInt(themeProperties.socialLinksTop, 10)}
        onChange={(e) =>
          handleInputChange("socialLinksTop", `${e.target.value}%`)
        }
        min="-30"
        max="30"
        step="1"
      />
      <span>{themeProperties.socialLinksTop}</span>
    </div>
  </>
);

export default SocialLinkControls;
