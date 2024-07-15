import UnitAppender from "../subcomponents/UnitAppender";

const MainFontControls = ({ themeProperties, handleInputChange }) => (
  <>
    <div>
      <label>Background Color:</label>
      <input
        type="color"
        className="color-input"
        value={themeProperties.mainFontBgColor}
        onChange={(e) => handleInputChange("mainFontBgColor", e.target.value)}
      />
    </div>
    <div>
      <label>Width:</label>
      <UnitAppender
        value={themeProperties.mainFontWidth}
        onChange={(value) => handleInputChange("mainFontWidth", value)}
      />
    </div>
    <div>
      <label>Height:</label>
      <UnitAppender
        value={themeProperties.mainFontHeight}
        onChange={(value) => handleInputChange("mainFontHeight", value)}
      />
    </div>
  </>
);

export default MainFontControls;
