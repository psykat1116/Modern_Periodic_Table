import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import React, { useContext } from "react";
import Link from "next/link";

interface ShellConfig {
  atomic_number: number;
  symbol: string;
  name: string;
  electron_shell_configuration: string;
}

const ShellConfig = ({
  atomic_number,
  symbol,
  name,
  electron_shell_configuration,
}: ShellConfig) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div className="gap-2 grid text-center grid-cols-[10%_10%_20%_56%]">
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
      <Link
        href={`/elements/${atomic_number}`}
        className={`p-2 rounded-sm shadow-md flex justify-start items-center ${
          theme === "dark"
            ? "bg-bg_dark text-text_primary"
            : "bg-bg_light text-text_secondary"
        } bg-opacity-70 backdrop-blur-sm`}
      >
        {electron_shell_configuration}
      </Link>
    </div>
  );
};

export default ShellConfig;
