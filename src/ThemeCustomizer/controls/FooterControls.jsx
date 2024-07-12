const FooterControls = ({ themeProperties, handleInputChange }) => (
  <>
    <div>
      <label>Footer Background Color:</label>
      <input
        type="color"
        value={themeProperties.footerBgColor}
        onChange={(e) => handleInputChange("footerBgColor", e.target.value)}
      />
    </div>
    <div>
      <label>Footer Width:</label>
      <input
        type="text"
        value={themeProperties.footerWidth}
        onChange={(e) => handleInputChange("footerWidth", e.target.value)}
      />
    </div>
    <div>
      <label>Footer Height:</label>
      <input
        type="text"
        value={themeProperties.footerHeight}
        onChange={(e) => handleInputChange("footerHeight", e.target.value)}
      />
    </div>
  </>
);

export default FooterControls;
