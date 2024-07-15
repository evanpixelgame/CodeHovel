import UnitAppender from "../subcomponents/UnitAppender";

const MainColorControls = ({ themeProperties, handleInputChange }) => (
  <>
    <div>
      <label>Main Background Color:</label>
      <input
        type="color"
        className="color-input"
        value={themeProperties.primaryBgColor}
        onChange={(e) => handleInputChange("primaryBgColor", e.target.value)}
      />
    </div>
  </>
);

export default MainColorControls;
