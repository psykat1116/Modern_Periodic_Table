"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Slider from "@/components/Slider";
import UpperTable from "@/components/UpperTable";
import LowerTable from "@/components/LowerTable";
import Navbar from "@/components/Navbar";
import Lottie from "lottie-react";
import LoadingAnim1 from "./loader1.json";
import Categories from "@/components/Categories";

export default function Home() {
  return (
    <>
      <motion.div
        className="fixed min-h-screen w-full bg-[#141414] flex justify-center items-center flex-col z-50"
        initial={{ opacity: 1, userSelect: "auto", pointerEvents: "auto" }}
        animate={{ opacity: 0, userSelect: "none", pointerEvents: "none" }}
        transition={{ ease: "easeInOut", delay: 1 }}
      >
        <Lottie animationData={LoadingAnim1} className="h-[200px] w-[200px]" />
      </motion.div>
      <div className="min-h-screen w-full bg-[#0f0f0f] flex flex-col justify-start items-center">
        <Navbar />
        <Slider />
        <div className="flex flex-col justify-start items-center my-10">
          <UpperTable />
          <LowerTable />
          <Categories />
        </div>
      </div>
    </>
  );
}
