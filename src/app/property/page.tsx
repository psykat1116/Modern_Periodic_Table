"use client";
import React, { useContext } from "react";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Property } from "@/constant/Properties";
import { motion } from "framer-motion";

const Prop = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};

const Page = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div
      className={`min-h-screen w-full font-poppins ${
        theme === "dark"
          ? "bg-dark_primary text-text_primary"
          : "bg-light_primary text-text_secondary"
      } flex flex-col justify-start items-center`}
    >
      <Navbar />
      <motion.div
        className="w-full grid grid-cols-4 gap-2 p-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-table:grid-cols-3 max-sm:text-sm"
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.1,
          staggerChildren: 0.09,
          delayChildren: 0.05,
        }}
      >
        {Property.map((item) => {
          return (
            <motion.div key={item.id} variants={Prop}>
              <Link
                className={`p-2 rounded-sm shadow-md flex justify-center items-center ${
                  theme === "dark" ? "bg-bg_dark" : "bg-bg_light"
                }`}
                href={`/property${item.link}`}
              >
                {item.name}
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Page;
