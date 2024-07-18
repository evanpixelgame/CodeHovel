import UnitAppender from "../subcomponents/UnitAppender";
import handleInputChangeWithLogging from "../utils/handleInputChangeWithLogging";

const MainAnimationControls = ({ themeProperties, handleInputChange }) => {
  const handleInputChangeLogged =
    handleInputChangeWithLogging(handleInputChange);

  return (
    <>
      <div>
        <label>Animation Color One:</label>
        <input
          type="color"
          className="color-input"
          value={themeProperties.animationColorOne}
          onChange={(e) =>
            handleInputChangeLogged("animationColorOne", e.target.value)
          }
        />
      </div>
      <div>
        <label>Animation Color Two:</label>
        <input
          type="color"
          className="color-input"
          value={themeProperties.animationColorTwo}
          onChange={(e) =>
            handleInputChangeLogged("animationColorTwo", e.target.value)
          }
        />
      </div>
      <div>
        <label>Animation Color Three:</label>
        <input
          type="color"
          className="color-input"
          value={themeProperties.animationColorThree}
          onChange={(e) =>
            handleInputChangeLogged("animationColorThree", e.target.value)
          }
        />
      </div>
      <div>
        <label>Animation Color Four:</label>
        <input
          type="color"
          className="color-input"
          value={themeProperties.animationColorFour}
          onChange={(e) =>
            handleInputChangeLogged("animationColorFour", e.target.value)
          }
        />
      </div>
      <div>
        <label>Animation Color Five:</label>
        <input
          type="color"
          className="color-input"
          value={themeProperties.animationColorFive}
          onChange={(e) =>
            handleInputChangeLogged("animationColorFive", e.target.value)
          }
        />
      </div>
      <div>
        <label>Animation Color Six:</label>
        <input
          type="color"
          className="color-input"
          value={themeProperties.animationColorSix}
          onChange={(e) =>
            handleInputChangeLogged("animationColorSix", e.target.value)
          }
        />
      </div>
    </>
  );
};

export default MainAnimationControls;
