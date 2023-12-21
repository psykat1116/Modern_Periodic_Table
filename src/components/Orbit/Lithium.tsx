import React, { useContext } from "react";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import { Two, One } from "@/components/Shell";

const Lithium = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div className="animate-rotate hover:pause cursor-pointer flex justify-center items-center">
      <div
        className={`absolute h-[70px] w-[70px] rounded-full border ${
          theme === "dark"
            ? "border-bg_light_placeholder"
            : "border-bg_dark_placeholder"
        }`}
      >
        <Two />
      </div>
      <div
        className={`absolute h-[120px] w-[120px] rounded-full border ${
          theme === "dark"
            ? "border-bg_light_placeholder"
            : "border-bg_dark_placeholder"
        }`}
      >
        <One />
      </div>
    </div>
  );
};

export default Lithium;
