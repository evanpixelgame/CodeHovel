import React, { createContext, useState, useContext } from "react";

// Create the context
const ThemeContext = createContext();

// the themes are affected by the variables in index.css in root directory, preset themes outlined there too

// Create a provider component / set default
export function ThemeProvider({ children }) {
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
