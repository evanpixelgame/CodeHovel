import UnitAppender from "../subcomponents/UnitAppender";

const SiteTitleControls = ({ themeProperties, handleInputChange }) => (
  <>
    <div>
      <label>Background Color:</label>
      <input
        type="color"
        className="color-input"
        value={themeProperties.siteTitleBgColor}
        onChange={(e) => handleInputChange("siteTitleBgColor", e.target.value)}
      />
    </div>
    <div>
      <label>Width:</label>
      <UnitAppender
        value={themeProperties.siteTitleWidth}
        onChange={(value) => handleInputChange("siteTitleWidth", value)}
      />
    </div>
    <div>
      <label>Height:</label>
      <UnitAppender
        value={themeProperties.siteTitleHeight}
        onChange={(value) => handleInputChange("siteTitleHeight", value)}
      />
    </div>
  </>
);

export default SiteTitleControls;
