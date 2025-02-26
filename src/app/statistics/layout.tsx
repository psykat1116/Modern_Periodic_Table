"use client";
import { useContext } from "react";
import Navbar from "@/components/Navbar";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

const StatisticsLayoute = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div
      className={`min-h-screen w-full flex justify-start items-center flex-col ${
        theme === "dark" ? "bg-dark_primary" : "bg-light_primary"
      }`}
    >
      <Navbar />
      {children}
    </div>
  );
};

export default StatisticsLayoute;
