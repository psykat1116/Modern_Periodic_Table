import Link from "next/link";
import { useContext } from "react";

import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

interface LatticeConstant {
  atomic_number: number;
  symbol: string;
  name: string;
  lattice_constant?: number[];
}

const LatticeConstant = ({
  atomic_number,
  lattice_constant,
  symbol,
  name,
}: LatticeConstant) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div className="gap-1.5 grid text-center grid-cols-[9%_9%_26%_calc(56%-19px)] text-[10px] md:text-sm">
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
      {lattice_constant && (
        <div className="gap-2 grid grid-cols-3">
          {lattice_constant.map((d, ind) => {
            return (
              <div
                key={ind}
                className={`${
                  theme === "dark"
                    ? "bg-bg_dark text-text_primary"
                    : "bg-bg_light text-text_secondary"
                } px-2 py-2 rounded-[4px] select-none backdrop-blur-sm bg-opacity-70`}
              >
                {d}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LatticeConstant;
