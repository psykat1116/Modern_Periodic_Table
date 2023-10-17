"use client";
import React, { useContext } from "react";
import Link from "next/link";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import { AiFillGithub } from "react-icons/ai";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div className="w-full flex justify-end items-center text-white pt-4 pr-5 text-xl bg-[#0f0f0f]">
      <Link href="https://github.com/psykat1116/Modern_Periodic_Table" target="_blank" className="mr-5">
        <AiFillGithub className="text-2xl" />
      </Link>
      {theme === "dark" ? (
        <button
          onClick={() =>
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }
        >
          <FiSun className="cursor-pointer" />
        </button>
      ) : (
        <button
          onClick={() =>
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }
        >
          <FiMoon className="cursor-pointer" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
