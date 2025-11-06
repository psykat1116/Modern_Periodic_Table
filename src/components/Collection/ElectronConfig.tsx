"use client";

import xss from "xss";
import Link from "next/link";
import { useContext } from "react";

import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

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
      <div className="w-[calc(100%-8px)] grid gap-2 grid-cols-[20%_20%_calc(60%-16px)]">
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
        } px-2 py-2 rounded-[4px] flex justify-start items-center w-[calc(100%-8px)] bg-opacity-70 backdrop-blur-sm overflow-scroll`}
        dangerouslySetInnerHTML={{
          __html: xss(electron_configuration),
        }}
      ></div>
    </div>
  );
};

export default ElectronConfig;
