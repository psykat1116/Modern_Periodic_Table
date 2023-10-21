"use client";
import React, { useState } from "react";
import ThemeContext from "./ThemeContex";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  if (typeof window !== "undefined") {
    if (!window.localStorage.getItem("theme")) {
      window.localStorage.setItem("theme", "dark");
    }
  }
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
