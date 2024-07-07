import { useThemeContext } from "../../ThemeContext";

const SideBorders = () => {
  const { theme, themes } = useThemeContext();
  const currentTheme = themes[theme];

  return (
    <>
      <div className="side-border" id="border-left"></div>
      <div className="side-border" id="border-right"></div>
    </>
  );
};
export default SideBorders;
