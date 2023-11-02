import React, { useContext } from "react";
import Link from "next/link";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import { ExternalLinks } from "@/types/ElementTypes";
import { BsWikipedia, BsYoutube } from "react-icons/bs";

const ExternalLink = ({ youtube, wikipedia }: ExternalLinks) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div
      className={`flex justify-between items-start w-full gap-2 ${
        theme === "dark" ? " text-text_primary" : "text-text_secondary"
      }`}
    >
      <Link
        target="__blank"
        href={wikipedia}
        className={`w-1/2 flex justify-center items-center p-2 ${
          theme === "dark" ? "bg-bg_dark" : "bg-bg_light"
        } bg-[#1b1a1a] rounded-sm shadow-md`}
      >
        <BsWikipedia className="text-lg" />
      </Link>
      <Link
        target="__blank"
        href={youtube}
        className={`w-1/2 flex justify-center items-center p-2 ${
          theme === "dark" ? "bg-bg_dark" : "bg-bg_light"
        } bg-[#1b1a1a] rounded-sm shadow-md`}
      >
        <BsYoutube className="text-lg" />
      </Link>
    </div>
  );
};

export default ExternalLink;
