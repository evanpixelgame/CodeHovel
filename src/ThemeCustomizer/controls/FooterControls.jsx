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
    <label className="match-style-button-container">
      <button
        type="button"
        className="theme-button linking-button"
        onClick={() =>
          handleInputChange("footerBgColor", themeProperties.headerBgColor)
        }
      ></button>
      Match Header Color
    </label>
    <div>
      <label>Width:</label>
      <UnitAppender
        value={themeProperties.footerWidth}
        onChange={(value) => handleInputChange("footerWidth", value)}
      />
    </div>

    <label className="match-style-button-container">
      <button
        type="button"
        className="theme-button linking-button"
        onClick={() =>
          handleInputChange("footerWidth", themeProperties.headerWidth)
        }
      ></button>
      Match Header Width
    </label>

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
