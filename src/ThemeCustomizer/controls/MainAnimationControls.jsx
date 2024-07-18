import UnitAppender from "../subcomponents/UnitAppender";
import handleInputChangeWithLogging from "../utils/handleInputChangeWithLogging";

const MainAnimationControls = ({ themeProperties, handleInputChange }) => {
  const handleInputChangeLogged =
    handleInputChangeWithLogging(handleInputChange);

  return (
    <>
      <div>
        <label>Animation Color 1:</label>
        <input
          type="color"
          className="color-input"
          value={themeProperties.animationColor1}
          onChange={(e) =>
            handleInputChangeLogged("animationColor1", e.target.value)
          }
        />
      </div>
      <div>
        <label>Animation Color 2:</label>
        <input
          type="color"
          className="color-input"
          value={themeProperties.animationColor2}
          onChange={(e) =>
            handleInputChangeLogged("animationColor2", e.target.value)
          }
        />
      </div>
      <div>
        <label>Animation Color 3:</label>
        <input
          type="color"
          className="color-input"
          value={themeProperties.animationColor3}
          onChange={(e) =>
            handleInputChangeLogged("animationColor3", e.target.value)
          }
        />
      </div>
      <div>
        <label>Animation Color 4:</label>
        <input
          type="color"
          className="color-input"
          value={themeProperties.animationColor4}
          onChange={(e) =>
            handleInputChangeLogged("animationColor4", e.target.value)
          }
        />
      </div>
      <div>
        <label>Animation Color 5:</label>
        <input
          type="color"
          className="color-input"
          value={themeProperties.animationColor5}
          onChange={(e) =>
            handleInputChangeLogged("animationColor5", e.target.value)
          }
        />
      </div>
      <div>
        <label>Animation Color 6:</label>
        <input
          type="color"
          className="color-input"
          value={themeProperties.animationColor6}
          onChange={(e) =>
            handleInputChangeLogged("animationColor6", e.target.value)
          }
        />
      </div>
    </>
  );
};

export default MainAnimationControls;
