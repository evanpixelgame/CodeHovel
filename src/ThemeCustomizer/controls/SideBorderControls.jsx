import UnitAppender from "../subcomponents/UnitAppender";

const SideBorderControls = ({ themeProperties, handleInputChange }) => (
  <>
    <div>
      <label>Background Color:</label>
      <input
        type="color"
        className="color-input"
        value={themeProperties.sideBorderBgColor}
        onChange={(e) => handleInputChange("sideBorderBgColor", e.target.value)}
      />
    </div>
    <div>
      <label>Width:</label>
      <UnitAppender
        value={themeProperties.sideBorderWidth}
        onChange={(value) => handleInputChange("sideBorderWidth", value)}
      />
    </div>
    <div>
      <label>Height:</label>
      <UnitAppender
        value={themeProperties.sideBorderHeight}
        onChange={(value) => handleInputChange("sideBorderHeight", value)}
      />
    </div>
  </>
);

export default SideBorderControls;
