import React, { createContext, useState, useContext } from "react";

// Create the context
const ThemeContext = createContext();

//currently the new themes are defined in the index.css in root directory, default is in root selector
//define the class here and then create a class with matching name in index.css to create new theme
//then in theme selector, add the new theme option by class name to make include it in the theme shuffle button/select options

// Define the themes, finish filling out then use this for the style changes if using inline
const themes = {
  light: {
    background: "#ffffff",
    color: "#000000",
  },
  dark: {
    background: "#000000",
    color: "#ffffff",
  },
  "no-bars-dark": {
    background: "#ED6A5A",
    color: "#ED6A5A",
  },
  "no-bars-light": {
    background: "#ED6A5A",
    color: "#ED6A5A",
  },
  "full-bars-dark": {
    background: "#ED6A5A",
    color: "#ED6A5A",
  },
  "full-bars-light": {
    background: "#ED6A5A",
    color: "#ED6A5A",
  },
  "full-border-dark": {
    background: "#ED6A5A",
    color: "#ED6A5A",
  },
  "full-border-light": {
    background: "#ED6A5A",
    color: "#ED6A5A",
  },
};

// Create a provider component / set default
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const selectTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, themes, selectTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
