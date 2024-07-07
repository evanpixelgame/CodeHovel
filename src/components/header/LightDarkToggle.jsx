import React, { useState } from "react";
import darkIcon from "../../assets/darkIcon.png";
import lightIcon from "../../assets/lightIcon.png";
import toggleOnDark from "../../assets/toggleDarkIcon.png";
import toggleOnLight from "../../assets/toggleLightIcon.png";
import { useThemeContext } from "../../ThemeContext";

//add theme functioning

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
          <img src={toggleOnDark} alt="toggleOnLight" className="toggle" />
        </>
      ) : (
        <>
          <img src={toggleOnLight} alt="toggleOnDark" className="toggle" />
        </>
      )}
    </div>
  );
};

export default LightDarkToggle;
