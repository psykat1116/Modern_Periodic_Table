import React, { useContext } from "react";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

const Hydrogen = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div className="absolute animate-rotate hover:pause cursor-pointer flex justify-center items-center">
      <div
        className={`absolute h-[70px] w-[70px] rounded-full border ${
          theme === "dark"
            ? "border-bg_light_placeholder"
            : "border-bg_dark_placeholder"
        }`}
      >
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[-6px] left-[calc(50%_-_6px)] `}
        ></span>
      </div>
    </div>
  );
};

export default Hydrogen;
