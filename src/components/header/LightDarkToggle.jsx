import React, { useState } from "react";
import moon from "../../assets/moon.svg";
import sun from "../../assets/sun.svg";
import toggle from "../../assets/toggle.svg";
import { useThemeContext } from "../../components/ThemeCustomizer/provider/ContextProvider";

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
          <img src={sun} alt="sun" className="icon" />
          <img src={toggle} alt="toggleOnLight" className="toggle" />
          <img src={moon} alt="moon" className="icon" />
        </>
      ) : (
        <>
          <img src={sun} alt="sun" className="icon" />
          <img
            src={toggle}
            alt="toggle"
            className="toggle"
            style={{ transform: "scaleX(-1)" }}
          />
          <img src={moon} alt="moon" className="icon" />
        </>
      )}
    </div>
  );
};

export default LightDarkToggle;
