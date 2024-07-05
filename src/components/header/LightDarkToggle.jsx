import darkIcon from "../../assets/darkIcon.png";
import lightIcon from "../../assets/lightIcon.png";
import toggleOnDark from "../../assets/toggleDarkIcon.png";
import toggleOnLight from "../../assets/toggleLightIcon.png";

const LightDarkToggle = () => {
  return (
    <div id="toggleDiv">
      <img src={lightIcon} alt="lightIcon" id="lightIcon" className="icon" />
      <img
        src={toggleOnDark}
        alt="toggleOnDark"
        id="toggleDark"
        className="toggle"
      />

      {/*<img src={toggleOnLight} alt="toggleOnLight" id="toggleLight" className="toggle" />*/}
      <img src={darkIcon} alt="darkIcon" id="darkIcon" className="icon" />
    </div>
  );
};
export default LightDarkToggle;
