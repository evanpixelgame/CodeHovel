import React, { createContext, useState, useContext } from "react";

// Create the context
const ThemeContext = createContext();

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
  noBars: {},
  fullBars: {},
  fullBorder: {},
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
