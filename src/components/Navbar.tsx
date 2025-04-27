"use client";

import Link from "next/link";
import { useContext } from "react";
import { FiSun } from "react-icons/fi";
import { TbLayoutList } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";
import { LiaAtomSolid } from "react-icons/lia";
import { PiMoonStarsBold } from "react-icons/pi";

import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div
      className={`w-full flex justify-between items-center pt-3 pb-2 px-5 text-xl ${
        theme === "dark" ? "text-text_primary" : "text-text_secondary"
      } bg-opacity-60 backdrop-blur-require`}
    >
      <Link className="text-2xl" href="/">
        <LiaAtomSolid />
      </Link>
      <div className="flex justify-end items-center">
        <Link href="/property">
          <TbLayoutList className="mr-5" />
        </Link>
        <Link
          href="https://github.com/psykat1116/Modern_Periodic_Table"
          target="_blank"
          className="mr-5"
        >
          <AiFillGithub className="text-2xl" />
        </Link>
        {theme === "dark" ? (
          <button
            onClick={() => {
              localStorage.setItem("theme", "light");
              theme === "dark" ? setTheme("light") : setTheme("dark");
            }}
          >
            <FiSun className="cursor-pointer" />
          </button>
        ) : (
          <button
            onClick={() => {
              localStorage.setItem("theme", "dark");
              theme === "dark" ? setTheme("light") : setTheme("dark");
            }}
          >
            <PiMoonStarsBold className="cursor-pointer" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
