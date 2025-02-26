"use client";
import Link from "next/link";
import { useContext } from "react";

import { Property } from "@/constant/Properties";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

const Page = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <div className="w-full grid grid-cols-3 gap-2 p-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-table:grid-cols-3 max-sm:text-sm">
      {Property.map((item) => {
        return (
          <div key={item.id}>
            <Link
              className={`p-2 rounded-sm shadow-md flex justify-center items-center ${
                theme === "dark"
                  ? "bg-bg_dark text-text_primary"
                  : "bg-bg_light text-text_secondary"
              }`}
              href={`/property${item.link}`}
            >
              {item.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
