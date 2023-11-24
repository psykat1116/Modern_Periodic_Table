import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import React, { useContext } from "react";
import Link from "next/link";

interface CID_Number {
  atomic_number: number;
  symbol: string;
  name: string;
  cid_number?: string;
}

const CIDNumber = ({ atomic_number, symbol, name, cid_number }: CID_Number) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div className="gap-1.5 grid text-center grid-cols-[12%_12%_35%_35%]">
      <Link
        href={`/elements/${atomic_number}`}
        className={`p-2 rounded-sm shadow-md ${
          theme === "dark"
            ? "bg-bg_dark text-text_primary"
            : "bg-bg_light text-text_secondary"
        } bg-opacity-70 backdrop-blur-sm`}
      >
        {atomic_number}
      </Link>
      <Link
        href={`/elements/${atomic_number}`}
        className={`p-2 rounded-sm shadow-md ${
          theme === "dark"
            ? "bg-bg_dark text-text_primary"
            : "bg-bg_light text-text_secondary"
        } bg-opacity-70 backdrop-blur-sm`}
      >
        {symbol}
      </Link>
      <Link
        href={`/elements/${atomic_number}`}
        className={`p-2 rounded-sm shadow-md ${
          theme === "dark"
            ? "bg-bg_dark text-text_primary"
            : "bg-bg_light text-text_secondary"
        } bg-opacity-70 backdrop-blur-sm`}
      >
        {name}
      </Link>
      {cid_number && (
        <Link
          href={`/elements/${atomic_number}`}
          className={`p-2 rounded-sm shadow-md ${
            theme === "dark"
              ? "bg-bg_dark text-text_primary"
              : "bg-bg_light text-text_secondary"
          } bg-opacity-70 backdrop-blur-sm`}
        >
          {cid_number}
        </Link>
      )}
    </div>
  );
};

export default CIDNumber;
