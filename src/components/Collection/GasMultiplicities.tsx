import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import React, { useContext } from "react";
import Link from "next/link";

interface GasMultiplicities {
  atomic_number: number;
  symbol: string;
  name: string;
  gas_atom_multiplicities?: number;
}

const GasMultiplicities = ({
  atomic_number,
  gas_atom_multiplicities,
  symbol,
  name,
}: GasMultiplicities) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div className="gap-1.5 grid text-center grid-cols-[17%_17%_40%_20%]">
      <Link
        href={`/elements/${atomic_number}`}
        className={`p-2 rounded-sm shadow-md ${
          theme === "dark"
            ? "bg-bg_dark text-text_primary"
            : "bg-bg_light text-text_secondary"
        } backdrop-blur-sm bg-opacity-70`}
      >
        {atomic_number}
      </Link>
      <Link
        href={`/elements/${atomic_number}`}
        className={`p-2 rounded-sm shadow-md ${
          theme === "dark"
            ? "bg-bg_dark text-text_primary"
            : "bg-bg_light text-text_secondary"
        } backdrop-blur-sm bg-opacity-70`}
      >
        {symbol}
      </Link>
      <Link
        href={`/elements/${atomic_number}`}
        className={`p-2 rounded-sm shadow-md ${
          theme === "dark"
            ? "bg-bg_dark text-text_primary"
            : "bg-bg_light text-text_secondary"
        } backdrop-blur-sm bg-opacity-70`}
      >
        {name}
      </Link>
      {gas_atom_multiplicities && (
        <Link
          href={`/elements/${atomic_number}`}
          className={`p-2 rounded-sm shadow-md ${
            theme === "dark"
              ? "bg-bg_dark text-text_primary"
              : "bg-bg_light text-text_secondary"
          } backdrop-blur-sm bg-opacity-70`}
        >
          {gas_atom_multiplicities}
        </Link>
      )}
    </div>
  );
};

export default GasMultiplicities;
