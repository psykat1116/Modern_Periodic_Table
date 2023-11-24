import React, { useContext } from "react";
import { useSearchParams } from "next/navigation";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import { motion } from "framer-motion";

const ColBox = ({ val1, val2 }: { val1: string; val2: string }) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  const searchParam = useSearchParams();
  const param = searchParam.get("type");
  return (
    <motion.div
      className={`relative h-[55px] w-[55px] border-[2px] ${
        param !== null
          ? `${
              theme === "light"
                ? "text-white border-white"
                : "border-black text-black"
            } pointer-events-none select-none`
          : `${
              theme === "dark"
                ? "border-[#969696] text-text_primary"
                : "border-[#141414] text-text_secondary"
            }`
      } flex justify-center items-center flex-col px-1`}
    >
      <p className="text-sm text-right w-full font-bold">{val1}</p>
      <p className="text-sm text-left w-full font-bold">{val2}</p>
    </motion.div>
  );
};

export default ColBox;
