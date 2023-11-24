import React, { useContext } from "react";
import Link from "next/link";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import { ExternalLinks } from "@/types/ElementTypes";
import { BsWikipedia, BsYoutube } from "react-icons/bs";
import { motion } from "framer-motion";

const ExternalLink = ({ youtube, wikipedia }: ExternalLinks) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div
      className={`flex justify-between items-start w-full gap-2 ${
        theme === "dark" ? " text-text_primary" : "text-text_secondary"
      }`}
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.25, ease: "easeInOut", delay: 0.4 }}
        className={`w-1/2 flex justify-center items-center p-2 ${
          theme === "dark" ? "bg-bg_dark" : "bg-bg_light"
        } bg-[#1b1a1a] rounded-sm shadow-lg bg-opacity-60 backdrop-blur-require`}
      >
        <Link target="__blank" href={wikipedia}>
          <BsWikipedia className="text-lg" />
        </Link>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.25, ease: "easeInOut", delay: 0.5 }}
        className={`w-1/2 flex justify-center items-center p-2 ${
          theme === "dark" ? "bg-bg_dark" : "bg-bg_light"
        } bg-[#1b1a1a] rounded-sm shadow-lg bg-opacity-60 backdrop-blur-require`}
      >
        <Link target="__blank" href={youtube}>
          <BsYoutube className="text-lg" />
        </Link>
      </motion.div>
    </div>
  );
};

export default ExternalLink;
