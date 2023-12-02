import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import React, { useContext } from "react";
import Link from "next/link";
import xss from "xss";

interface MassMagneticSuspectibility {
  atomic_number: number;
  symbol: string;
  name: string;
  mass_magnetic_suspectibility?: string;
}

const MassMagneticSuspectibility = ({
  atomic_number,
  mass_magnetic_suspectibility,
  symbol,
  name,
}: MassMagneticSuspectibility) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div className="gap-1.5 grid text-center grid-cols-[14%_14%_35%_30%]">
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
      {mass_magnetic_suspectibility && (
        <Link
          href={`/elements/${atomic_number}`}
          className={`p-2 rounded-sm shadow-md ${
            theme === "dark"
              ? "bg-bg_dark text-text_primary"
              : "bg-bg_light text-text_secondary"
          } bg-opacity-70 backdrop-blur-sm`}
          dangerouslySetInnerHTML={{
            __html: xss(mass_magnetic_suspectibility),
          }}
        ></Link>
      )}
    </div>
  );
};

export default MassMagneticSuspectibility;
