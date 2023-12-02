import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import React, { useContext } from "react";
import Link from "next/link";

interface MagneticType {
  atomic_number: number;
  symbol: string;
  name: string;
  magnetic_type?:
    | "Diamagnetic"
    | "Paramagnetic"
    | "Ferromagnetic"
    | "Antiferromagnetic";
}

const MagneticType = ({
  atomic_number,
  magnetic_type,
  symbol,
  name,
}: MagneticType) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div className="gap-1.5 grid text-center grid-cols-[17%_17%_35%_25%]">
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
      {magnetic_type && (
        <Link
          href={`/elements/${atomic_number}`}
          className={`p-2 rounded-sm shadow-md ${
            theme === "dark"
              ? "bg-bg_dark text-text_primary"
              : "bg-bg_light text-text_secondary"
          } bg-opacity-70 backdrop-blur-sm`}
        >
          {magnetic_type}
        </Link>
      )}
    </div>
  );
};

export default MagneticType;
