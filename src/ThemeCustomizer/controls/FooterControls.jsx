import UnitAppender from "../subcomponents/UnitAppender";

const FooterControls = ({ themeProperties, handleInputChange }) => (
  <>
    <div>
      <label>Background Color:</label>
      <input
        type="color"
        className="color-input"
        value={themeProperties.footerBgColor}
        onChange={(e) => handleInputChange("footerBgColor", e.target.value)}
      />
    </div>
    <div>
      <label>Width:</label>
      <UnitAppender
        value={themeProperties.footerWidth}
        onChange={(value) => handleInputChange("footerWidth", value)}
      />
    </div>
    <div>
      <label>Height:</label>
      <UnitAppender
        value={themeProperties.footerHeight}
        onChange={(value) => handleInputChange("footerHeight", value)}
      />
    </div>
  </>
);

export default FooterControls;
