import React from "react";
import UnitAppender from "../subcomponents/UnitAppender";
const handleRangeInput = () => {
  console.log(
    'change themeProperties.themeCustomizerPositionType from "relative" to fixed'
  );
};

const ThemeCustomizerControls = ({ themeProperties, handleInputChange }) => (
  <>
    <div>
      <label>Background Color:</label>
      <input
        type="color"
        className="color-input"
        value={themeProperties.themeCustomizerBgColor}
        onChange={(e) =>
          handleInputChange("themeCustomizerBgColor", e.target.value)
        }
      />
    </div>
    <div>
      <label>Border Color:</label>
      <input
        type="color"
        className="color-input"
        value={themeProperties.themeCustomizerBorderColor}
        onChange={(e) =>
          handleInputChange("themeCustomizerBorderColor", e.target.value)
        }
      />
    </div>

    <div>
      <label>Button Color:</label>
      <input
        type="color"
        className="color-input"
        value={themeProperties.themeCustomizerButtonBg}
        onChange={(e) =>
          handleInputChange("themeCustomizerButtonBgColor", e.target.value)
        }
      />
    </div>
    <div>
      <label>Button Border Color:</label>
      <input
        type="color"
        className="color-input"
        value={themeProperties.themeCustomizerButtonBorderColor}
        onChange={(e) =>
          handleInputChange("themeCustomizerButtonBorderColor", e.target.value)
        }
      />
    </div>

    <div>
      <label>Dropdown Color:</label>
      <input
        type="color"
        className="color-input"
        value={themeProperties.themeCustomizerSelectBgColor}
        onChange={(e) =>
          handleInputChange("themeCustomizerSelectBgColor", e.target.value)
        }
      />
    </div>

    <div>
      <label>Opacity:</label>
      <input
        type="range"
        className="range-input"
        value={themeProperties.themeCustomizerOpacity}
        onChange={(e) => {
          handleRangeInput();
          handleInputChange("themeCustomizerOpacity", e.target.value);
        }}
        min=".05"
        max="1"
        step=".01"
      />
    </div>
  </>
);

export default ThemeCustomizerControls;
