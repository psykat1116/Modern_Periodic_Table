"use client";
import React, { useState, useEffect } from "react";
import ThemeContext from "./ThemeContex";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      let themeColor = localStorage.getItem("theme");
      setTheme(themeColor || "light");
    }
  }, []);
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
