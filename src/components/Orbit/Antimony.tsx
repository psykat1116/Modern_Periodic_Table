import React, { useContext } from "react";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import { Two, Eight, Eighteen, Five } from "@/components/Shell";

const Antimony = () => {
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
        <Eight />
      </div>
      <div
        className={`absolute h-[170px] w-[170px] rounded-full border ${
          theme === "dark"
            ? "border-bg_light_placeholder"
            : "border-bg_dark_placeholder"
        }`}
      >
        <Eighteen />
      </div>
      <div
        className={`absolute h-[220px] w-[220px] rounded-full border ${
          theme === "dark"
            ? "border-bg_light_placeholder"
            : "border-bg_dark_placeholder"
        }`}
      >
        <Eighteen />
      </div>
      <div
        className={`absolute h-[270px] w-[270px] rounded-full border ${
          theme === "dark"
            ? "border-bg_light_placeholder"
            : "border-bg_dark_placeholder"
        }`}
      >
        <Five />
      </div>
    </div>
  );
};

export default Antimony;
