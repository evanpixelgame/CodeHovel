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
    <div className="matching-grouping">
      <label>
        Match
        <br />
        Header:
      </label>

      <div className="link-style-button-container">
        <label className="match-style-button-container">
          <button
            type="button"
            className="theme-button linking-button"
            onClick={() =>
              handleInputChange("footerWidth", themeProperties.headerWidth)
            }
          >
            Width
          </button>
        </label>
        <label className="match-style-button-container">
          <button
            type="button"
            className="theme-button linking-button"
            onClick={() =>
              handleInputChange("footerBgColor", themeProperties.headerBgColor)
            }
          >
            Color
          </button>
        </label>
      </div>
    </div>
  </>
);

export default FooterControls;
