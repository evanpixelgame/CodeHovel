import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";

// Create the context
const ThemeContext = createContext();

const getCssVariableValue = (variableName) => {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variableName)
    .trim();
};

const defaultThemeProperties = {
  //Main Colors
  primaryBgColor: getCssVariableValue("--primary-bg-color") || "#3b3b3b",
  secondaryBgColor: getCssVariableValue("--secondary-bg-color") || "#343434",
  primaryAccentColor:
    getCssVariableValue("--primary-accent-color") || "#9995db",
  secondaryAccentColor:
    getCssVariableValue("--secondary-accent-color") || "#ed6a5a",
  tertiaryAccentColor:
    getCssVariableValue("--tertiary-accent-color") || "#fb8b24",
  //Main Fonts vars
  primaryFontFamily: getCssVariableValue("--primary-font-family") || '"Roboto"',
  primaryTextColor: getCssVariableValue("--primary-text-color") || "#ffffff",
  secondaryTextColor:
    getCssVariableValue("--secondary-text-color") || "#b4b4b4",
  mainTextFontSize: getCssVariableValue("--main-text-font-size") || "40px",
  subTextFontSize: getCssVariableValue("--sub-text-font-size") || "16px",

  //Main Positioning vars
  homeImageScale: getCssVariableValue("--home-image-scale") || "1.2",
  homeImageRight: getCssVariableValue("--home-image-right") || "100px",
  homeImageTop: getCssVariableValue("--home-image-top") || "0",
  homeTextGroupMaxWidth:
    getCssVariableValue("--home-text-group-max-width") || "60%",
  homeTextGroupRight: getCssVariableValue("--home-text-group-right") || "0",
  homeTextGroupTop: getCssVariableValue("--home-text-group-top") || "0",

  //Site Title vars
  siteTitleFontFamily:
    getCssVariableValue("--site-title-font-family") || '"Roboto"',
  siteTitleColor: getCssVariableValue("--site-title-color") || "#ce721d",
  siteTitleFontSize: getCssVariableValue("--site-title-font-size") || "24px",
  siteTitlePadLeft: getCssVariableValue("--site-title-pad-left") || "1%",
  //Nav Bar vars
  navBgColor: getCssVariableValue("--nav-bg-color") || "#f5f5f5",
  navLinkColor: getCssVariableValue("--nav-link-color") || "#3b3b3b",
  navLinkFontFamily: getCssVariableValue("--nav-link-font-family") || '"Inter"',
  navWidth: getCssVariableValue("--nav-width") || "40%",
  navHeight: getCssVariableValue("--nav-height") || "50%",
  navLeft: getCssVariableValue("--nav-link-font-family") || "0",
  //Header vars
  headerWidth: getCssVariableValue("--header-width") || "80%",
  headerHeight: getCssVariableValue("--header-height") || "15%",
  headerBgColor: getCssVariableValue("--header-bg-color") || "#343434",
  //Footer vars
  footerWidth: getCssVariableValue("--footer-width") || "80%",
  footerHeight: getCssVariableValue("--footer-height") || "15%",
  footerBgColor: getCssVariableValue("--footer-bg-color") || "#343434",
  //Toggle vars
  togglePlacementTop: getCssVariableValue("--toggle-placement-top") || "5%",
  togglePlacementRight: getCssVariableValue("--toggle-placement-right") || "5%",
  //Side Border vars
  sideBorderBgColor: getCssVariableValue("--side-border-bg-color") || "#343434",
  sideBorderDisplay: getCssVariableValue("--side-border-display") || "none",
  sideBorderWidth:
    getCssVariableValue("--side-border-width") ||
    "calc(50% - var(--header-width) / 2)",
  // Social Link vars
  socialLinksGap: getCssVariableValue("--social-links-gap") || "20%",
  socialLinksTop: getCssVariableValue("--social-links-top") || "0",
  // Theme Customizer links (these css variables come from components.css (:root))
  themeCustomizerBgColor:
    getCssVariableValue("--theme-customizer-bg-color") || "#8b85d5",
  themeCustomizerButtonBg:
    getCssVariableValue("--theme-customizer-button-bg") || "#9995db",
  themeCustomizerBorderColor:
    getCssVariableValue("--theme-customizer-border-color") || "#dddddd",
  themeCustomizerBorderColor2:
    getCssVariableValue("--theme-customizer-border-color-2") || "#3b3b3b",
  themeCustomizerSelectBgColor:
    getCssVariableValue("--theme-customizer-select-bg-color") || "#1a1a1aeb",
  themeCustomizerButtonBgColor:
    getCssVariableValue("--theme-customizer-button-bg-color") || "#716ada",
  themeCustomizerButtonBorderColor:
    getCssVariableValue("--theme-customizer-button-border-color") || "#6058d4",
  themeSelectorBgColor:
    getCssVariableValue("--theme-selector-bg-color") || "#8b85d5",
};

// Create a Provider component, this gets imported in main.js to wrap <app>
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [themeProperties, setThemeProperties] = useState(
    defaultThemeProperties
  );
  const initialVarListRef = useRef(themeProperties);

  useEffect(() => {
    for (const [key, value] of Object.entries(themeProperties)) {
      const cssVariableName = `--${key
        .replace(/([A-Z])/g, "-$1")
        .toLowerCase()}`;
      document.documentElement.style.setProperty(cssVariableName, value);
    }
  }, [themeProperties]);

  const selectTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        selectTheme,
        themeProperties,
        setThemeProperties,
        initialVarListRef,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

// Create a shared Context, this gets imported anywhere in app and gets all values without prop drilling
// This is a shared instance, all files that import this context will have access to/modify any of the vars across all files
export function useThemeContext() {
  return useContext(ThemeContext);
}
