import React, { useContext } from "react";
import { Particles } from "@/types/ElementTypes";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import { motion } from "framer-motion";

const Particles = ({ electrons, protons, neutrons }: Particles) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div
      className={`flex justify-between items-start w-full gap-2 ${
        theme === "dark" ? " text-text_primary" : "text-text_secondary"
      }`}
    >
      <motion.div
        className={`w-1/3 flex justify-around items-center p-2 bg-opacity-60 backdrop-blur-require ${
          theme === "dark" ? "bg-bg_dark" : "bg-bg_light"
        } bg-[#1b1a1a] rounded-sm shadow-lg`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.25, ease: "easeInOut", delay: 0.1 }}
      >
        <h1 className="text-base">Electrons</h1>
        <p>{electrons}</p>
      </motion.div>
      <motion.div
        className={`w-1/3 flex justify-around items-center p-2 bg-opacity-60 backdrop-blur-require ${
          theme === "dark" ? "bg-bg_dark" : "bg-bg_light"
        } bg-[#1b1a1a] rounded-sm shadow-lg`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.25, ease: "easeInOut", delay: 0.2 }}
      >
        <h1 className="text-base">Protons</h1>
        <p>{protons}</p>
      </motion.div>
      <motion.div
        className={`w-1/3 flex justify-around items-center p-2 bg-opacity-60 backdrop-blur-require ${
          theme === "dark" ? "bg-bg_dark" : "bg-bg_light"
        } bg-[#1b1a1a] rounded-sm shadow-lg`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.25, ease: "easeInOut", delay: 0.3 }}
      >
        <h1 className="text-base">Neutrons</h1>
        <p>{neutrons}</p>
      </motion.div>
    </div>
  );
};

export default Particles;
