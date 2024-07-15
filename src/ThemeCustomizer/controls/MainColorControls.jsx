import UnitAppender from "../subcomponents/UnitAppender";

const MainColorControls = ({ themeProperties, handleInputChange }) => (
  <>
    <div>
      <label>Background Color:</label>
      <input
        type="color"
        className="color-input"
        value={themeProperties.mainColorBgColor}
        onChange={(e) => handleInputChange("mainColorBgColor", e.target.value)}
      />
    </div>
    <div>
      <label>Width:</label>
      <UnitAppender
        value={themeProperties.mainColorWidth}
        onChange={(value) => handleInputChange("mainColorWidth", value)}
      />
    </div>
    <div>
      <label>Height:</label>
      <UnitAppender
        value={themeProperties.mainColorHeight}
        onChange={(value) => handleInputChange("mainColorHeight", value)}
      />
    </div>
  </>
);

export default MainColorControls;
