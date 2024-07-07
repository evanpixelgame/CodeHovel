import { useState } from "react";
import { useThemeContext } from "../../ThemeContext";

const themeOptions = [
  "light",
  "dark",
  "no-bars-dark",
  "no-bars-light",
  "full-bars-dark",
  "full-bars-light",
  "full-border-dark",
  "full-border-light",
];

function ThemeSelector() {
  const { theme, selectTheme } = useThemeContext();

  //should eventually switch to using the Themes object in ThemeContext.js but this is for quicksies
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextTheme = () => {
    const nextIndex = (currentIndex + 1) % themeOptions.length;
    setCurrentIndex(nextIndex);
    selectTheme(themeOptions[nextIndex]);
  };

  return (
    <>
      <div
        id="theme-selector"
        style={{
          background: theme.background,
          color: theme.color,
        }}
      >
        <p id="theme-text">
          The current theme is: <br />
          <span className="theme-name">{theme}</span>
        </p>
        <div id="buttonandselect">
          <select value={theme} onChange={(e) => selectTheme(e.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="no-bars-dark">No Bars Dark</option>
            <option value="no-bars-light">No Bars Light</option>
            <option value="full-bars-dark">Full Bars Dark</option>
            <option value="full-bars-light">Full Bars Light</option>
            <option value="full-border-dark">Full Border D</option>
            <option value="full-border-light">Full Border L</option>
          </select>
          <button id="themeButton" onClick={handleNextTheme}>
            <span
              style={{
                fontSize: "10px",
                position: "absolute",
                transform: "translateX(-50%)",
              }}
            >
              Click for
            </span>
            <br />
            Next Theme
          </button>
        </div>
      </div>
    </>
  );
}

export default ThemeSelector;
