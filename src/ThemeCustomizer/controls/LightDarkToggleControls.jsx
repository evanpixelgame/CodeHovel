import UnitAppender from "../subcomponents/UnitAppender";

const LightDarkToggleControls = ({ themeProperties, handleInputChange }) => (
  <>
    <div>
      <label>Background Color:</label>
      <input
        type="color"
        className="color-input"
        value={themeProperties.lightDarkToggleBgColor}
        onChange={(e) =>
          handleInputChange("lightDarkToggleBgColor", e.target.value)
        }
      />
    </div>
    <div>
      <label>Width:</label>
      <UnitAppender
        value={themeProperties.lightDarkToggleWidth}
        onChange={(value) => handleInputChange("lightDarkToggleWidth", value)}
      />
    </div>
    <div>
      <label>Height:</label>
      <UnitAppender
        value={themeProperties.lightDarkToggleHeight}
        onChange={(value) => handleInputChange("lightDarkToggleHeight", value)}
      />
    </div>
  </>
);

export default LightDarkToggleControls;
