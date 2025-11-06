import Link from "next/link";
import { useContext } from "react";

import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

interface StableIsotopes {
  atomic_number: number;
  symbol: string;
  name: string;
  stable?: number[];
}

const StableIsotopes = ({
  atomic_number,
  stable,
  symbol,
  name,
}: StableIsotopes) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div className="grid grid-cols-1 md:grid-cols-[30%_calc(70%-6px)] gap-1.5 text-center w-full">
      <div className="grid grid-cols-[25%_25%_calc(50%-12px)] gap-1.5">
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
      </div>
      {stable && (
        <div className="grid grid-cols-[repeat(5,1fr)] sm:grid-cols-[repeat(6,1fr)] md:grid-cols-[repeat(8,1fr)] lg:grid-cols-[repeat(12,1fr)] xl:grid-cols-[repeat(16,1fr)] gap-5">
          {stable.map((elem) => {
            return (
              <p
                className={`h-[40px] w-[40px] flex justify-center items-center ${
                  theme === "dark"
                    ? "bg-bg_dark text-text_primary"
                    : "bg-bg_light text-text_secondary"
                } rounded-full text-xs backdrop-blur-sm bg-opacity-70`}
                key={elem}
              >
                <sup>{elem}</sup>
                {symbol}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default StableIsotopes;
