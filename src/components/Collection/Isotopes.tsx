import Link from "next/link";
import { useContext } from "react";

import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

interface Isotopes {
  atomic_number: number;
  symbol: string;
  name: string;
  isotopes: number[];
}

const Isotopes = ({ atomic_number, isotopes, symbol, name }: Isotopes) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div className="flex gap-2 w-full flex-col md:flex-row">
      <div className="flex gap-2 w-full md:w-[calc(25%-16px)] justify-between items-start">
        <Link
          href={`/elements/${atomic_number}`}
          className={`p-2 rounded-sm shadow-md ${
            theme === "dark"
              ? "bg-bg_dark text-text_primary"
              : "bg-bg_light text-text_secondary"
          } bg-opacity-70 backdrop-blur-sm flex justify-center items-center w-1/4`}
        >
          {atomic_number}
        </Link>
        <Link
          href={`/elements/${atomic_number}`}
          className={`p-2 rounded-sm shadow-md ${
            theme === "dark"
              ? "bg-bg_dark text-text_primary"
              : "bg-bg_light text-text_secondary"
          } bg-opacity-70 backdrop-blur-sm flex justify-center items-center w-1/4`}
        >
          {symbol}
        </Link>
        <Link
          href={`/elements/${atomic_number}`}
          className={`p-2 rounded-sm shadow-md ${
            theme === "dark"
              ? "bg-bg_dark text-text_primary"
              : "bg-bg_light text-text_secondary"
          } bg-opacity-70 backdrop-blur-sm flex justify-center items-center w-1/2`}
        >
          {name}
        </Link>
      </div>
      <div className="grid w-full md:w-3/4 grid-cols-[repeat(6,_minmax(0,_1fr))] sm:grid-cols-[repeat(8,_minmax(0,_1fr))] md:grid-cols-[repeat(10,_minmax(0,_1fr))] lg:grid-cols-[repeat(14,_minmax(0,_1fr))] xl:grid-cols-[repeat(16,_minmax(0,_1fr))] gap-2">
        {isotopes.map((elem) => {
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
    </div>
  );
};

export default Isotopes;
