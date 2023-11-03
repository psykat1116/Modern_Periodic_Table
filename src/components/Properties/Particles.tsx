import React, { useContext } from "react";
import { Particles } from "@/types/ElementTypes";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

const Particles = ({ electrons, protons, neutrons }: Particles) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div
      className={`flex justify-between items-start w-full gap-2 ${
        theme === "dark" ? " text-text_primary" : "text-text_secondary"
      }`}
    >
      <div
        className={`w-1/3 flex justify-around items-center p-2 ${
          theme === "dark" ? "bg-bg_dark" : "bg-bg_light"
        } bg-[#1b1a1a] rounded-sm shadow-lg`}
      >
        <h1 className="text-base">Electrons</h1>
        <p>{electrons}</p>
      </div>
      <div
        className={`w-1/3 flex justify-around items-center p-2 ${
          theme === "dark" ? "bg-bg_dark" : "bg-bg_light"
        } bg-[#1b1a1a] rounded-sm shadow-lg`}
      >
        <h1 className="text-base">Protons</h1>
        <p>{protons}</p>
      </div>
      <div
        className={`w-1/3 flex justify-around items-center p-2 ${
          theme === "dark" ? "bg-bg_dark" : "bg-bg_light"
        } bg-[#1b1a1a] rounded-sm shadow-lg`}
      >
        <h1 className="text-base">Neutrons</h1>
        <p>{neutrons}</p>
      </div>
    </div>
  );
};

export default Particles;
