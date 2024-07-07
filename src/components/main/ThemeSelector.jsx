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
          <option value="no-bars">No Bars</option>
          <option value="full-bars">Full Bars</option>
          <option value="full-border">Full Border</option>
        </select>
      </div>
    </>
  );
}

export default ThemeSelector;
