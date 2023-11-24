import React, { useState, useContext } from "react";
import Link from "next/link";
import { Overview } from "@/types/ElementTypes";
import { MdContentCopy, MdCheck } from "react-icons/md";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import { motion } from "framer-motion";

const Overview = ({ latin_name, discovery, discoverer }: Overview) => {
  const [isCopying, setIsCopying] = useState({
    latin_name: false,
    discoverer: false,
    discovery: false,
  });
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  const handleCopy = (value: string, property: string) => {
    setIsCopying({ ...isCopying, [property]: true });
    navigator.clipboard.writeText(value);
    setTimeout(() => {
      setIsCopying({ ...isCopying, [property]: false });
    }, 500);
  };
  return (
    <motion.div
      className={`w-full flex flex-col justify-start items-start p-4 ${
        theme === "dark"
          ? "text-text_primary bg-bg_dark"
          : "bg-bg_light text-text_secondary"
      } shadow-lg rounded-sm bg-opacity-60 backdrop-blur-require`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.25, ease: "easeInOut", delay: 0.2 }}
    >
      <h1 className="text-xl">Overview</h1>
      <div className="flex flex-col w-full justify-start items-start gap-3 mt-3">
        <div className="flex flex-row justify-start items-center w-full ">
          <Link
            href="/property/latin_name"
            className=" pr-2 py-1 rounded-[4px] w-[20%]"
          >
            Latin Name
          </Link>
          <div
            className={`w-[80%] ${
              theme === "dark"
                ? "bg-bg_dark_placeholder"
                : "bg-bg_light_placeholder"
            } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
          >
            <p>{latin_name}</p>
            <button onClick={() => handleCopy(latin_name, "latin_name")}>
              {!isCopying.latin_name ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-700" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center w-full ">
          <Link
            href="/property/discovery"
            className=" pr-2 py-1 rounded-[4px] w-[20%]"
          >
            Discovery
          </Link>
          <div
            className={`w-[80%] ${
              theme === "dark"
                ? "bg-bg_dark_placeholder"
                : "bg-bg_light_placeholder"
            } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
          >
            <p>{discovery}</p>
            <button
              onClick={() => handleCopy(discovery.toString(), "discovery")}
            >
              {!isCopying.discovery ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-700" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-start items-start w-full ">
          <Link
            href="/property/discoverer"
            className=" pr-2 py-1 rounded-[4px] w-[20%]"
          >
            Discoverer
          </Link>
          <div className="w-[80%] gap-2 grid grid-cols-2 text-sm">
            {discoverer.map((d) => {
              return (
                <Link
                  key={d[0]}
                  target="_blank"
                  href={`https://en.wikipedia.org/wiki/${d[1]}`}
                  className={`${
                    theme === "dark"
                      ? "bg-bg_dark_placeholder"
                      : "bg-bg_light_placeholder"
                  } px-2 py-2 rounded-[4px] select-none`}
                >
                  {d[0]}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Overview;
