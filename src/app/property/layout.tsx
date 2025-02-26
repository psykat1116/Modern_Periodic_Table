"use client";
import { useContext } from "react";

import Navbar from "@/components/Navbar";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

const PropertyLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div
      className={`min-h-screen w-full flex flex-col justify-start items-center gap-2 ${
        theme === "dark" ? "bg-dark_primary" : "bg-light_primary"
      } justify-start items-center`}
    >
      <Navbar />
      {children}
    </div>
  );
};

export default PropertyLayout;
