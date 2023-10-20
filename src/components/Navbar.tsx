"use client";
import React, { useContext } from "react";
import Link from "next/link";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import { AiFillGithub } from "react-icons/ai";
import { FiSun } from "react-icons/fi";
import { PiMoonStarsBold } from "react-icons/pi";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div
      className={`w-full flex justify-end items-center pt-4 pr-5 text-xl bg-dark_primary ${
        theme === "dark"
          ? "bg-dark_primary text-text_primary"
          : "text-text_secondary bg-light_primary"
      }`}
    >
      <Link
        href="https://github.com/psykat1116/Modern_Periodic_Table"
        target="_blank"
        className="mr-5"
      >
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
          <PiMoonStarsBold className="cursor-pointer" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
