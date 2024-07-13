import UnitAppender from "../subcomponents/UnitAppender";

const HeaderControls = ({ themeProperties, handleInputChange }) => (
  <>
    <div>
      <label>Background Color:</label>
      <input
        type="color"
        value={themeProperties.headerBgColor}
        onChange={(e) => handleInputChange("headerBgColor", e.target.value)}
      />
    </div>
    <div>
      <label>Width:</label>
      <UnitAppender
        value={themeProperties.headerWidth}
        onChange={(value) => handleInputChange("headerWidth", value)}
      />
    </div>
    <div>
      <label>Height:</label>
      <UnitAppender
        value={themeProperties.headerHeight}
        onChange={(value) => handleInputChange("headerHeight", value)}
      />
    </div>
  </>
);

export default HeaderControls;
