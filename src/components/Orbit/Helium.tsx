import React, { useContext } from "react";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import { Two } from "@/components/Shell";

const Helium = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <>
      <div
        className={`absolute h-[70px] w-[70px] rounded-full border ${
          theme === "dark"
            ? "border-bg_light_placeholder"
            : "border-bg_dark_placeholder"
        } animate-rotate hover:pause cursor-pointer`}
      >
        <Two />
      </div>
    </>
  );
};

export default Helium;
