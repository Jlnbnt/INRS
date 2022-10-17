import React, { useEffect, createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeChoice, setThemeChoice] = useState("");

  useEffect(() => {
    const storedTheme = localStorage.getItem("themeMode");
    if (storedTheme) {
      setThemeChoice(storedTheme);
    } else {
      localStorage.setItem("themeMode", `light`);
      setThemeChoice(`light`);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("themeMode", themeChoice);
  }, [themeChoice]);

  return (
    <ThemeContext.Provider
      value={{
        themeChoice,
        setThemeChoice,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
