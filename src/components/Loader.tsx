"use client";
import React, { useContext } from "react";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

const Loader = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div
        id="loader"
        className="animate-rotate flex justify-center items-center rotate-[25deg]"
      >
        <span
          className={`${
            theme === "dark" ? "border-bg_light" : "border-bg_dark"
          }`}
        ></span>
        <span
          className={`${
            theme === "dark" ? "border-bg_light" : "border-bg_dark"
          }`}
        ></span>
        <span
          className={`${
            theme === "dark" ? "border-bg_light" : "border-bg_dark"
          }`}
        ></span>
        <span
          className={`${theme === "dark" ? "bg-bg_light" : "bg-bg_dark"}`}
        ></span>
      </div>
    </div>
  );
};

export default Loader;
