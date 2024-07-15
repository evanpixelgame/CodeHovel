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
  //Base color variables
  primaryBgColor: getCssVariableValue("--primary-bg-color") || "#3b3b3b",
  secondaryBgColor: getCssVariableValue("--secondary-bg-color") || "#343434",
  primaryAccentColor:
    getCssVariableValue("--primary-accent-color") || "#9995db",
  secondaryAccentColor:
    getCssVariableValue("--secondary-accent-color") || "#ed6a5a",
  tertiaryAccentColor:
    getCssVariableValue("--tertiary-accent-color") || "#fb8b24",
  //Font variables
  primaryFontFamily: getCssVariableValue("--primary-font-family") || '"Roboto"',
  primaryTextColor: getCssVariableValue("--primary-text-color") || "#b4b4b4",
  secondaryTextColor:
    getCssVariableValue("--secondary-text-color") || "#ffffff",
  mainTextFontSize: getCssVariableValue("--main-text-font-size") || "40px",
  subTextFontSize: getCssVariableValue("--sub-text-font-size") || "16px",
  //Site Title variables
  siteTitleFontFamily:
    getCssVariableValue("--site-title-font-family") || '"Roboto"',
  siteTitleColor: getCssVariableValue("--site-title-color") || "#ce721d",
  siteTitleFontSize: getCssVariableValue("--site-title-font-size") || "24px",
  siteTitlePadLeft: getCssVariableValue("--site-title-pad-left") || "1%",
  //Nav Bar variables
  navBgColor: getCssVariableValue("--nav-bg-color") || "#f5f5f5",
  navLinkColor: getCssVariableValue("--nav-link-color") || "#3b3b3b",
  navLinkFontFamily: getCssVariableValue("--nav-link-font-family") || '"Inter"',
  //Header variables
  headerWidth: getCssVariableValue("--header-width") || "80%",
  headerHeight: getCssVariableValue("--header-height") || "15%",
  headerBgColor: getCssVariableValue("--header-bg-color") || "#343434",
  //Footer variables
  footerWidth: getCssVariableValue("--footer-width") || "80%",
  footerHeight: getCssVariableValue("--footer-height") || "15%",
  footerBgColor: getCssVariableValue("--footer-bg-color") || "#343434",
  //Light/dark toggle variables
  togglePlacementTop: getCssVariableValue("--toggle-placement-top") || "5%",
  togglePlacementRight: getCssVariableValue("--toggle-placement-right") || "5%",
  //theme select bg variable //might be old, probably delete
  themeSelectorBgColor:
    getCssVariableValue("--theme-selector-bg-color") || "#8b85d5",
  //Side Border variables
  sideBorderBgColor: getCssVariableValue("--side-border-bg-color") || "#343434",
  sideBorderDisplay: getCssVariableValue("--side-border-display") || "none",
  //Social Media Link variables
  socialLinksGap: getCssVariableValue("--social-links-gap") || "20%",
  //Theme Customizer variables (these are stored in component.css unlike the rest)
  themeCustomizerBgColor:
    getCssVariableValue("--theme-customizer-bg-color") || "#8b85d5",
  themeCustomizerButtonBg:
    getCssVariableValue("--theme-customizer-button-bg") || "#9995db",
  themeCustomizerBorderColor:
    getCssVariableValue("--theme-customizer-border-color") || "#ddd",
  themeCustomizerBorderColor2:
    getCssVariableValue("--theme-customizer-border-color-2") || "#3b3b3b",
  themeCustomizerSelectBgColor:
    getCssVariableValue("--theme-customizer-select-bg-color") || "#1a1a1aeb",
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

//************************************************************************************************************************************************************************************** */
//************************************************************************************************************************************************************************************** */
//************************************************************************************************************************************************************************************** */

/*

// the themes are affected by the variables in index.css in root directory, preset themes outlined there too

import React, { createContext, useState, useContext } from "react";

// Create the context
const ThemeContext = createContext();

// Create a provider component / set default
export function ThemeProvider({ children }) {
  //set useState with initial value of dark theme
  const [theme, setTheme] = useState("dark");

  const selectTheme = (newTheme) => {
    setTheme(newTheme);
  };

  //could also define an object above and pass it as an arg in values so its accessible everywhere
  //for example, could add a themes object with various theme css settings listed
  return (
    <ThemeContext.Provider value={{ theme, selectTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}

*/
