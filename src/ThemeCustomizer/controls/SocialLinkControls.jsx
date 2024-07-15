import UnitAppender from "../subcomponents/UnitAppender";

const SocialLinkControls = ({ themeProperties, handleInputChange }) => (
  <>
    <div>
      <label>Background Color:</label>
      <input
        type="color"
        className="color-input"
        value={themeProperties.socialLinkBgColor}
        onChange={(e) => handleInputChange("socialLinkBgColor", e.target.value)}
      />
    </div>
    <div>
      <label>Width:</label>
      <UnitAppender
        value={themeProperties.socialLinkWidth}
        onChange={(value) => handleInputChange("socialLinkWidth", value)}
      />
    </div>
    <div>
      <label>Height:</label>
      <UnitAppender
        value={themeProperties.socialLinkHeight}
        onChange={(value) => handleInputChange("socialLinkHeight", value)}
      />
    </div>
  </>
);

export default SocialLinkControls;
