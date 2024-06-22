"use client";
import React, { useContext } from "react";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

const Skeleton = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div className="relative w-full h-auto my-2 p-6 flex justify-between items-center z-[5] max-sm:flex-col">
      <div
        className={`relative w-1/3 min-h-[79vh] flex justify-start flex-col items-center ${
          theme === "dark"
            ? "bg-neutral-950 before:from-neutral-950 before:via-[rgba(255,255,255,0.05)] before:to-neutral-950"
            : "bg-[#d9d9d9] before:from-[#d9d9d9] before:via-[rgba(0,0,0,0.1)] before:to-[#d9d9d9]"
        } gap-2 rounded-[4px] shadow-md before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-gradient-to-l before:from-[#d9d9d9] before:via-[rgba(0,0,0,0.05)] before:to-[#d9d9d9] backdrop-blur-sm overflow-hidden before:animate-skeleton`}
      ></div>
      <div
        className={`relative w-2/3 min-h-[79vh] ml-5 overflow-y-scroll flex flex-col justify-start items-center gap-3 rounded-[4px] shadow-md before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-gradient-to-r before:from-10% before:via-20% before:to-100% backdrop-blur-sm before:animate-skeleton overflow-hidden ${
          theme === "dark"
            ? "bg-neutral-950 before:from-neutral-950 before:via-[rgba(255,255,255,0.05)] before:to-neutral-950"
            : "bg-[#d9d9d9] before:from-[#d9d9d9] before:via-[rgba(0,0,0,0.1)] before:to-[#d9d9d9]"
        }`}
      ></div>
    </div>
  );
};

export default Skeleton;
