import React, { useEffect } from "react";
import { createContext, useState, useContext } from "react";
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const storedTheme = localStorage.getItem("themeMode");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      localStorage.setItem("themeMode", `light`);
      setTheme(`light`);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("themeMode", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
