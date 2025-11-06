"use client";

import { useContext } from "react";

import Navbar from "@/components/Navbar";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

const PropertyLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div
      className={`flex items-center justify-center w-full ${
        theme === "dark" ? "bg-dark_primary" : "bg-light_primary"
      }`}
    >
      <div
        className={`relative min-h-screen w-full 2xl:max-w-[80rem] 2xl:border-x-2 flex flex-col justify-start items-center gap-2 ${
          theme === "dark"
            ? "bg-dark_primary border-light_primary"
            : "bg-light_primary border-dark_primary"
        } justify-start items-center`}
      >
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default PropertyLayout;
