import React from "react";
import UnitAppender from "../subcomponents/UnitAppender";

const MainPositionControls = ({ themeProperties, handleInputChange }) => (
  <>
    <div>
      <label>Home Image Scale:</label>
      <input
        type="range"
        className="range-input"
        value={themeProperties.homeImageScale}
        onChange={(e) => handleInputChange("homeImageScale", e.target.value)}
        min="0"
        max="3"
        step=".1"
      />
    </div>
    <div>
      <label>Home Image Right:</label>
      <input
        type="range"
        className="range-input"
        value={themeProperties.homeImageRight}
        onChange={(e) => handleInputChange("homeImageRight", e.target.value)}
        min="0"
        max="100"
      />
    </div>
    <div>
      <label>Main Text Max-Width:</label>
      <input
        type="range"
        className="range-input"
        value={themeProperties.homeTextGroupMaxWidth}
        onChange={(e) =>
          handleInputChange("homeTextGroupMaxWidth", e.target.value)
        }
        min="0"
        max="100"
      />
    </div>
    <div>
      <label>Home Text Right:</label>
      <input
        type="range"
        className="range-input"
        value={themeProperties.homeTextGroupRight}
        onChange={(e) =>
          handleInputChange("homeTextGroupRight", e.target.value)
        }
        min="0"
        max="100"
      />
    </div>
  </>
);

export default MainPositionControls;
