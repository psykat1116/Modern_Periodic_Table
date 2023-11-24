import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import React, { useContext } from "react";
import Link from "next/link";

interface AtomicRadius {
  atomic_number: number;
  symbol: string;
  name: string;
  atomic_radius?: number;
}

const AtomicRadius = ({
  atomic_number,
  atomic_radius,
  symbol,
  name,
}: AtomicRadius) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div className="gap-1.5 grid text-center grid-cols-[17%_17%_40%_20%]">
      <Link
        href={`/elements/${atomic_number}`}
        className={`p-2 rounded-sm shadow-md ${
          theme === "dark"
            ? "bg-bg_dark text-text_primary"
            : "bg-bg_light text-text_secondary"
        } bg-opacity-70 backdrip-blur-sm`}
      >
        {atomic_number}
      </Link>
      <Link
        href={`/elements/${atomic_number}`}
        className={`p-2 rounded-sm shadow-md ${
          theme === "dark"
            ? "bg-bg_dark text-text_primary"
            : "bg-bg_light text-text_secondary"
        } bg-opacity-70 backdrip-blur-sm`}
      >
        {symbol}
      </Link>
      <Link
        href={`/elements/${atomic_number}`}
        className={`p-2 rounded-sm shadow-md ${
          theme === "dark"
            ? "bg-bg_dark text-text_primary"
            : "bg-bg_light text-text_secondary"
        } bg-opacity-70 backdrip-blur-sm`}
      >
        {name}
      </Link>
      {atomic_radius && (
        <Link
          href={`/elements/${atomic_number}`}
          className={`p-2 rounded-sm shadow-md ${
            theme === "dark"
              ? "bg-bg_dark text-text_primary"
              : "bg-bg_light text-text_secondary"
          } bg-opacity-70 backdrip-blur-sm`}
        >
          {atomic_radius}
        </Link>
      )}
    </div>
  );
};

export default AtomicRadius;
