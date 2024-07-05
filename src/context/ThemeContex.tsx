import React, { createContext } from "react";

export interface ThemeContextType {
  theme: "dark" | "light";
  setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export default ThemeContext;
