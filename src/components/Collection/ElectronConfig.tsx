"use client";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import React, { useContext } from "react";
import Link from "next/link";
import DOMPurify from "dompurify";
import xss from "xss";

interface ElectronConfig {
  atomic_number: number;
  symbol: string;
  name: string;
  electron_configuration: string;
}

const ElectronConfig = ({
  atomic_number,
  symbol,
  name,
  electron_configuration,
}: ElectronConfig) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div className="w-full gap-2 flex flex-col justify-start items-center max-sm:text-sm">
      <div className="w-full grid grid-cols-[20%_20%_57.5%] gap-2 max-sm:grid-cols-[18%_18%_60%] max-md:grid-cols-[18%_18%_60%]">
        <Link
          href={`/elements/${atomic_number}`}
          className={`p-2 rounded-sm shadow-md flex justify-center items-center ${
            theme === "dark"
              ? "bg-bg_dark text-text_primary"
              : "bg-bg_light text-text_secondary"
          } bg-opacity-70 backdrop-blur-sm`}
        >
          {atomic_number}
        </Link>
        <Link
          href={`/elements/${atomic_number}`}
          className={`p-2 rounded-sm shadow-md flex justify-center items-center ${
            theme === "dark"
              ? "bg-bg_dark text-text_primary"
              : "bg-bg_light text-text_secondary"
          } bg-opacity-70 backdrop-blur-sm`}
        >
          {symbol}
        </Link>
        <Link
          href={`/elements/${atomic_number}`}
          className={`p-2 rounded-sm shadow-md flex justify-center items-center ${
            theme === "dark"
              ? "bg-bg_dark text-text_primary"
              : "bg-bg_light text-text_secondary"
          } bg-opacity-70 backdrop-blur-sm`}
        >
          {name}
        </Link>
      </div>
      <div
        className={`${
          theme === "dark"
            ? "bg-bg_dark text-text_primary"
            : "bg-bg_light text-text_secondary"
        } px-2 py-2 rounded-[4px] flex justify-start items-center w-full bg-opacity-70 backdrop-blur-sm`}
        dangerouslySetInnerHTML={{
          __html: xss(electron_configuration),
        }}
      ></div>
    </div>
  );
};

export default ElectronConfig;
