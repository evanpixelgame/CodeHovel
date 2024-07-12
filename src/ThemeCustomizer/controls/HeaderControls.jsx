const HeaderControls = ({ themeProperties, handleInputChange }) => (
  <>
    <div>
      <label>Header Background Color:</label>
      <input
        type="color"
        value={themeProperties.headerBgColor}
        onChange={(e) => handleInputChange("headerBgColor", e.target.value)}
      />
    </div>
    <div>
      <label>Header Width:</label>
      <input
        type="text"
        value={themeProperties.headerWidth}
        onChange={(e) => handleInputChange("headerWidth", e.target.value)}
      />
    </div>
    <div>
      <label>Header Height:</label>
      <input
        type="text"
        value={themeProperties.headerHeight}
        onChange={(e) => handleInputChange("headerHeight", e.target.value)}
      />
    </div>
  </>
);

export default HeaderControls;
