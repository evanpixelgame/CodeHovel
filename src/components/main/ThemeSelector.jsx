import { useThemeContext } from "../../ThemeContext";

function ThemeSelector() {
  const { theme, selectTheme } = useThemeContext();

  return (
    <>
      <div
        id="theme-selector"
        style={{
          background: theme.background,
          color: theme.color,
        }}
      >
        <p>The current theme is {theme}</p>
        <select value={theme} onChange={(e) => selectTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="no-bars-dark">No Bars Dark</option>
          <option value="no-bars-light">No Bars Light</option>
          <option value="full-bars-dark">Full Bars Dark</option>
          <option value="full-bars-light">Full Bars Light</option>
          <option value="full-border-dark">Full Border Dark</option>
          <option value="full-border-light">Full Border Light</option>
        </select>
      </div>
    </>
  );
}

export default ThemeSelector;
