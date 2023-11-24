import React, { useContext } from "react";
import { useSearchParams } from "next/navigation";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import { motion } from "framer-motion";

const BlankBox = ({ limit }: { limit: string }) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  const searchParam = useSearchParams();
  const param = searchParam.get("type");
  return (
    <motion.div
      className={`relative h-[55px] w-[55px] border-[2px] flex justify-center items-center flex-col px-1.5 rounded-sm border-transparent font-bold text-[14px]
      ${
        param !== null
          ? theme === "dark"
            ? "text-black"
            : "text-white"
          : theme === "dark"
          ? "text-white"
          : "text-black"
      } pointer-events-none select-none`}
    >
      {limit}
    </motion.div>
  );
};

export default BlankBox;
