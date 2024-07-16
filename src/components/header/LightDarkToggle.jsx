import React, { useState } from "react";
import darkIcon from "../../assets/dark_mode.svg";
import lightIcon from "../../assets/light_mode.svg";
import toggleOnDark from "../../assets/toggle_dark.svg";
import toggleOnLight from "../../assets/toggle_light.svg";
import { useThemeContext } from "../../ThemeCustomizer/provider/ContextProvider";

//add theme functioning

const LightDarkToggle = () => {
  const { theme, selectTheme } = useThemeContext();

  // const [currentTheme, setCurrentTheme] = useState("dark");

  const handleNextTheme = () => {
    selectTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  //can probably refactor this so that the image only flips horizontally instead of new png
  return (
    <div id="toggleDiv" onClick={handleNextTheme}>
      {theme === "dark" ? (
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
