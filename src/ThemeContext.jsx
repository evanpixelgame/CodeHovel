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

//reference of select Options
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
