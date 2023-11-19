import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import React, { useContext } from "react";
import Link from "next/link";
import DOMPurify from "dompurify";

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
    <div className="w-full gap-1.5 grid grid-cols-[25%_75%] max-md:grid-cols-1 max-sm:text-sm">
      <div className="grid grid-cols-[18%_18%_59%] gap-1.5 max-sm:grid-cols-[18%_18%_60%] max-md:grid-cols-[18%_18%_60%]">
        <Link
          href={`/elements/${atomic_number}`}
          className={`p-2 rounded-sm shadow-md flex justify-center items-center ${
            theme === "dark"
              ? "bg-bg_dark text-text_primary"
              : "bg-bg_light text-text_secondary"
          }`}
        >
          {atomic_number}
        </Link>
        <Link
          href={`/elements/${atomic_number}`}
          className={`p-2 rounded-sm shadow-md flex justify-center items-center ${
            theme === "dark"
              ? "bg-bg_dark text-text_primary"
              : "bg-bg_light text-text_secondary"
          }`}
        >
          {symbol}
        </Link>
        <Link
          href={`/elements/${atomic_number}`}
          className={`p-2 rounded-sm shadow-md flex justify-center items-center ${
            theme === "dark"
              ? "bg-bg_dark text-text_primary"
              : "bg-bg_light text-text_secondary"
          }`}
        >
          {name}
        </Link>
      </div>
      <p
        className={`${
          theme === "dark"
            ? "bg-bg_dark text-text_primary"
            : "bg-bg_light text-text_secondary"
        } px-2 py-2 rounded-[4px] flex justify-start items-center`}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(electron_configuration),
        }}
      ></p>
    </div>
  );
};

export default ElectronConfig;
