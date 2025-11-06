"use client";
import { useContext } from "react";
import Navbar from "@/components/Navbar";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

const StatisticsLayoute = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div
      className={`flex items-center justify-center ${
        theme === "dark" ? "bg-dark_primary" : "bg-light_primary"
      }`}
    >
      <div
        className={`relative min-h-screen w-full 2xl:max-w-[80rem] 2xl:border-x-2 flex justify-start items-center flex-col ${
          theme === "dark"
            ? "bg-dark_primary border-light_primary"
            : "bg-light_primary border-dark_primary"
        }`}
      >
        <Navbar />
        <div className="relative w-full flex md:items-center md:justify-center overflow-scroll px-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default StatisticsLayoute;
