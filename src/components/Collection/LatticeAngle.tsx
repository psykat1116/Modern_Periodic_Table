import Link from "next/link";
import { useContext } from "react";

import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

interface LatticeAngle {
  atomic_number: number;
  symbol: string;
  name: string;
  lattice_angle?: number[];
}

const LatticeAngle = ({
  atomic_number,
  lattice_angle,
  symbol,
  name,
}: LatticeAngle) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div className="text-center flex flex-col gap-2 w-full">
      <div className="grid gap-2 grid-cols-[25%_25%_calc(50%-16px)]">
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
      </div>
      {lattice_angle && (
        <div className="gap-2 grid grid-cols-[repeat(3,1fr)] text-sm">
          {lattice_angle.map((d, ind) => {
            return (
              <div
                key={ind}
                className={`${
                  theme === "dark"
                    ? "bg-bg_dark text-text_primary"
                    : "bg-bg_light text-text_secondary"
                } px-2 py-2 rounded-[4px] select-none backdrop-blur-sm bg-opacity-70`}
              >
                {d}°
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LatticeAngle;
