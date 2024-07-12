import { useState } from "react";
import { useThemeContext } from "../provider/ContextProvider";

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

function PresetSelector() {
  const { theme, selectTheme } = useThemeContext();

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextTheme = () => {
    const nextIndex = (currentIndex + 1) % themeOptions.length;
    setCurrentIndex(nextIndex);
    selectTheme(themeOptions[nextIndex]);
  };

  return (
    <>
      <div className="theme-selector">
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
        <button className="themeButton" onClick={handleNextTheme}>
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
    </>
  );
}

export default PresetSelector;
