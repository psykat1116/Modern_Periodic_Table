import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import React, { useContext } from "react";
import Link from "next/link";

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
    <div className="gap-2.5 grid text-center grid-cols-[4%_4%_10%_78%]">
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
      {stable && (
        <div className="flex justify-start items-center gap-5">
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
