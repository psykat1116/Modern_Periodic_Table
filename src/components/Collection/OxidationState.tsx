import Link from "next/link";
import { useContext } from "react";

import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

interface OxidationState {
  atomic_number: number;
  symbol: string;
  name: string;
  oxidation_states?: number[];
}

const OxidationState = ({
  atomic_number,
  symbol,
  name,
  oxidation_states,
}: OxidationState) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div className="w-full gap-1.5 grid grid-cols-[40%_calc(60%-6px)] max-md:grid-cols-1 max-sm:text-sm">
      <div className="grid grid-cols-[18%_18%_calc(60%-6px)] gap-1.5">
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
      </div>
      {oxidation_states && (
        <div className="flex justify-start items-center gap-2">
          {oxidation_states.map((state) => {
            return (
              <p
                className={`mr-2 h-[30px] w-[30px] flex justify-center items-center ${
                  theme === "dark"
                    ? "bg-bg_dark text-text_primary"
                    : "bg-bg_light text-text_secondary"
                } rounded-full text-sm bg-opacity-70 backdrop-blur-sm`}
                key={state}
              >
                {state}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default OxidationState;
