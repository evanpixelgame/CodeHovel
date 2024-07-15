import UnitAppender from "../subcomponents/UnitAppender";

const MainPositionControls = ({ themeProperties, handleInputChange }) => (
  <>
    <div>
      <label>Background Color:</label>
      <input
        type="color"
        className="color-input"
        value={themeProperties.mainPositionBgColor}
        onChange={(e) =>
          handleInputChange("mainPositionBgColor", e.target.value)
        }
      />
    </div>
    <div>
      <label>Width:</label>
      <UnitAppender
        value={themeProperties.mainPositionWidth}
        onChange={(value) => handleInputChange("mainPositionWidth", value)}
      />
    </div>
    <div>
      <label>Height:</label>
      <UnitAppender
        value={themeProperties.mainPositionHeight}
        onChange={(value) => handleInputChange("mainPositionHeight", value)}
      />
    </div>
  </>
);

export default MainPositionControls;
