"use client";

import { useContext } from "react";
import { motion } from "framer-motion";

import Slider from "@/components/Slider";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import UpperTable from "@/components/UpperTable";
import LowerTable from "@/components/LowerTable";
import Categories from "@/components/Categories";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

export default function Home() {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div
      className={`relative flex items-center justify-center ${
        theme === "dark" ? "bg-dark_primary" : "bg-light_primary"
      } bg-blue-600`}
    >
      <motion.div
        className={`fixed h-full top-0 left-0 w-full flex justify-center items-center flex-col z-50 origin-top ${
          theme === "dark" ? "bg-dark_primary" : "bg-light_primary"
        }`}
        initial={{ scaleY: 1, userSelect: "auto", pointerEvents: "auto" }}
        animate={{ scaleY: 0, userSelect: "none", pointerEvents: "none" }}
        transition={{ ease: "easeInOut", delay: 1, duration: 1 }}
      >
        <Loader />
      </motion.div>
      <div
        className={`relative min-h-screen md:w-full 2xl:max-w-[80rem] font-poppins 2xl:border-x-2 ${
          theme === "dark"
            ? "bg-dark_primary border-light_primary"
            : "bg-light_primary border-dark_primary"
        } flex flex-col justify-start items-center overflow-x-scroll`}
      >
        <Navbar />
        <Slider />
        <div className="relative w-full flex flex-col justify-start items-start px-[14px] table:px-0 table:items-center my-10 overflow-x-scroll">
          <UpperTable />
          <LowerTable />
        </div>
        <div className="w-full px-10 mb-5 max-sm:px-1">
          <Categories />
        </div>
      </div>
    </div>
  );
}
