"use client";
import { useContext } from "react";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import Navbar from "@/components/Navbar";
import CanvasText from "@/components/CanvasText";

const NotFound = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div
      className={`min-h-screen w-full font-poppins ${
        theme === "dark" ? "bg-dark_primary" : "bg-light_primary"
      } flex flex-col items-center justify-center gap-6`}
    >
      <CanvasText/>
      <h1 className={`text-[#D62E49] text-3xl font-semibold`}>The Page You Are Looking For Does Not Exist Anymore</h1>
    </div>
  );
};

export default NotFound;
