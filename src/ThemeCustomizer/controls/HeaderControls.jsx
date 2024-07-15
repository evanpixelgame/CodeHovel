import UnitAppender from "../subcomponents/UnitAppender";
import handleInputChangeWithLogging from "../utils/handleInputChangeWithLogging";

const HeaderControls = ({ themeProperties, handleInputChange }) => {
  const handleInputChangeLogged =
    handleInputChangeWithLogging(handleInputChange);

  return (
    <>
      <div>
        <label>Background Color:</label>
        <input
          type="color"
          className="color-input"
          value={themeProperties.headerBgColor}
          onChange={(e) =>
            handleInputChangeLogged("headerBgColor", e.target.value)
          }
        />
      </div>
      <div>
        <label>Width:</label>
        <UnitAppender
          value={themeProperties.headerWidth}
          onChange={(value) => handleInputChangeLogged("headerWidth", value)}
        />
      </div>
      <div>
        <label>Height:</label>
        <UnitAppender
          value={themeProperties.headerHeight}
          onChange={(value) => handleInputChangeLogged("headerHeight", value)}
        />
      </div>
    </>
  );
};

export default HeaderControls;
