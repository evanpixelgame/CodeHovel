import React, { useState } from "react";
import darkIcon from "../../assets/darkIcon.png";
import lightIcon from "../../assets/lightIcon.png";
import toggleOnDark from "../../assets/toggleDarkIcon.png";
import toggleOnLight from "../../assets/toggleLightIcon.png";
import { useThemeContext } from "../../ThemeContext";

const LightDarkToggle = () => {
  const [currentTheme, setCurrentTheme] = useState("dark");

  const handleNextTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    selectTheme(prevTheme === "light" ? "dark" : "light");
  };

  return (
    <div id="toggleDiv" onClick={handleNextTheme}>
      {currentTheme === "light" ? (
        <>
          <img src={lightIcon} alt="lightIcon" className="icon" />
          <img src={toggleOnDark} alt="toggleOnLight" className="toggle" />
          <img src={darkIcon} alt="darkIcon" className="icon" />
        </>
      ) : (
        <>
          <img src={lightIcon} alt="lightIcon" className="icon" />
          <img src={toggleOnLight} alt="toggleOnDark" className="toggle" />
          <img src={darkIcon} alt="darkIcon" className="icon" />
        </>
      )}
    </div>
  );
};

export default LightDarkToggle;
