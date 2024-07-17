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
        max="5"
        step=".1"
      />
    </div>
    <div>
      <label>Home Image Right:</label>
      <input
        type="range"
        className="range-input"
        value={parseInt(themeProperties.homeImageRight, 10)}
        onChange={(e) =>
          handleInputChange("homeImageRight", `${e.target.value}vw`)
        }
        min="-60"
        max="20"
        step=".1"
      />
    </div>
    <div>
      <label>Main Text Max-Width:</label>
      <input
        type="range"
        className="range-input"
        value={parseInt(themeProperties.homeTextGroupMaxWidth, 10)}
        onChange={(e) =>
          handleInputChange("homeTextGroupMaxWidth", `${e.target.value}%`)
        }
        min="30"
        max="70"
        step=".1"
      />
    </div>
    <div>
      <label>Home Text Right:</label>
      <input
        type="range"
        className="range-input"
        value={parseInt(themeProperties.homeTextGroupRight, 10)}
        onChange={(e) =>
          handleInputChange("homeTextGroupRight", `${e.target.value}%`)
        }
        min="-40"
        max="40"
        step=".1"
      />
    </div>
  </>
);

export default MainPositionControls;
