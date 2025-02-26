"use client";
import { useContext } from "react";

import CanvasText from "@/components/CanvasText";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

const NotFound = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div
      className={`min-h-screen w-full font-poppins ${
        theme === "dark"
          ? "bg-dark_primary text-light_primary"
          : "bg-light_primary text-dark_primary"
      } flex flex-col items-center justify-center gap-6`}
    >
      <CanvasText />
      <h1 className="font-semibold text-3xl">
        The Page You Are Looking For Does Not Exist
      </h1>
    </div>
  );
};

export default NotFound;
