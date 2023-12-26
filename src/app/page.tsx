"use client";
import { useContext } from "react";
import { motion } from "framer-motion";
import Slider from "@/components/Slider";
import UpperTable from "@/components/UpperTable";
import LowerTable from "@/components/LowerTable";
import Navbar from "@/components/Navbar";
import Categories from "@/components/Categories";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import Loader from "@/components/Loader";

export default function Home() {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <>
      <motion.div
        className={`fixed min-h-screen w-full flex justify-center items-center flex-col z-50 origin-top ${
          theme === "dark" ? "bg-dark_primary" : "bg-light_primary"
        }`}
        initial={{ scaleY: 1, userSelect: "auto", pointerEvents: "auto" }}
        animate={{ scaleY: 0, userSelect: "none", pointerEvents: "none" }}
        transition={{ ease: "easeInOut", delay: 1, duration: 1 }}
      >
        <Loader />
      </motion.div>
      <div
        className={`min-h-screen w-full font-poppins ${
          theme === "dark" ? "bg-dark_primary" : "bg-light_primary"
        } flex flex-col justify-start items-center`}
      >
        <Navbar />
        <Slider />
        <div className="min-w-[80%] flex flex-col justify-start items-center my-10 max-table:rotate-90 max-table:scale-[.5] max-sm:scale-[.4] max-table:my-0">
          <UpperTable />
          <LowerTable />
        </div>
        <div className="w-full px-10 mb-5 max-sm:px-1">
          <Categories />
        </div>
      </div>
    </>
  );
}
