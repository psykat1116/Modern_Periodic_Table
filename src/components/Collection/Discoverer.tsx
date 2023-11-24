import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import React, { useContext } from "react";
import Link from "next/link";

interface Discoverer {
  atomic_number: number;
  symbol: string;
  name: string;
  discoverer: string[][];
}

const Discoverer = ({
  atomic_number,
  symbol,
  name,
  discoverer,
}: Discoverer) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div className="w-full gap-1.5 grid grid-cols-[18%_82%] max-md:grid-cols-1 max-sm:text-sm">
      <div className="grid grid-cols-[18%_18%_59%] gap-1.5 max-sm:grid-cols-[18%_18%_60%] max-md:grid-cols-[18%_18%_60%]">
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
      <div className="grid gap-1.5 grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-1">
        {discoverer.map((d) => {
          return (
            <Link
              key={d[0]}
              target="_blank"
              href={`https://en.wikipedia.org/wiki/${d[1]}`}
              className={`${
                theme === "dark"
                  ? "bg-bg_dark text-text_primary"
                  : "bg-bg_light text-text_secondary"
              } px-2 py-2 rounded-[4px] select-none flex justify-center items-center bg-opacity-70 backdrop-blur-sm`}
            >
              {d[0]}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Discoverer;
