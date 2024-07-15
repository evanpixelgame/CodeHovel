import UnitAppender from "../subcomponents/UnitAppender";

const NavBarControls = ({ themeProperties, handleInputChange }) => (
  <>
    <div>
      <label>Background Color:</label>
      <input
        type="color"
        className="color-input"
        value={themeProperties.navBarBgColor}
        onChange={(e) => handleInputChange("navBarBgColor", e.target.value)}
      />
    </div>
    <div>
      <label>Width:</label>
      <UnitAppender
        value={themeProperties.navBarWidth}
        onChange={(value) => handleInputChange("navBarWidth", value)}
      />
    </div>
    <div>
      <label>Height:</label>
      <UnitAppender
        value={themeProperties.navBarHeight}
        onChange={(value) => handleInputChange("navBarHeight", value)}
      />
    </div>
  </>
);

export default NavBarControls;
