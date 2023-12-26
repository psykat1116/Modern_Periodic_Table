import React, { useContext } from "react";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import Link from "next/link";

const Categories = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div className="relative w-full min-h-[20vh] grid grid-cols-5 gap-2 max-md:grid-cols-3 max-sm:grid-cols-2 max-sm:text-sm">
      <Link
        href="https://en.wikipedia.org/wiki/Alkali_metal"
        target="_blank"
        className={`relative flex justify-between items-center px-2 py-1 border-2 ${
          theme === "dark"
            ? "border-[#969696] text-text_primary"
            : "border-[#141414] text-text_secondary"
        } rounded-md before:absolute before:top-0 before:left-full before:h-full before:w-full before:bg-alkali hover:before:left-0 before:transition-all before:ease-in-out before:duration-700 before:rounded-md overflow-hidden hover:border-transparent hover:text-dark_primary ease-in-out transition-all delay-[1000] font-bold`}
      >
        <div className="z-[5]">Alkali Metal</div>
        <div className="h-[6px] w-[6px] rounded-full bg-alkali" />
      </Link>
      <Link
        href="https://en.wikipedia.org/wiki/Alkaline_earth_metal"
        target="_blank"
        className={`relative flex justify-between items-center px-2 py-1 border-2 ${
          theme === "dark"
            ? "border-[#969696] text-text_primary"
            : "border-[#141414] text-text_secondary"
        } rounded-md before:absolute before:top-0 before:left-full before:h-full before:w-full before:bg-alkaliearth hover:before:left-0 before:transition-all before:ease-in-out before:duration-700 before:rounded-md overflow-hidden hover:border-transparent hover:text-dark_primary ease-in-out transition-all delay-[1000] font-bold`}
      >
        <div className="z-[5]">Alkali Earth Metal</div>
        <div className="h-[6px] w-[6px] rounded-full bg-alkaliearth" />
      </Link>
      <Link
        href="https://en.wikipedia.org/wiki/Metal"
        target="_blank"
        className={`relative flex justify-between items-center px-2 py-1 border-2 ${
          theme === "dark"
            ? "border-[#969696] text-text_primary"
            : "border-[#141414] text-text_secondary"
        } rounded-md before:absolute before:top-0 before:left-full before:h-full before:w-full before:bg-metal hover:before:left-0 before:transition-all before:ease-in-out before:duration-700 before:rounded-md overflow-hidden hover:border-transparent hover:text-dark_primary ease-in-out transition-all delay-[1000] font-bold`}
      >
        <div className="z-[5]">Metal</div>
        <div className="h-[6px] w-[6px] rounded-full bg-metal" />
      </Link>
      <Link
        href="https://en.wikipedia.org/wiki/Nonmetal"
        target="_blank"
        className={`relative flex justify-between items-center px-2 py-1 border-2 ${
          theme === "dark"
            ? "border-[#969696] text-text_primary"
            : "border-[#141414] text-text_secondary"
        } rounded-md before:absolute before:top-0 before:left-full before:h-full before:w-full before:bg-nonmetal hover:before:left-0 before:transition-all before:ease-in-out before:duration-700 before:rounded-md overflow-hidden hover:border-transparent hover:text-dark_primary ease-in-out transition-all delay-[1000] font-bold`}
      >
        <div className="z-[5]">Non Metal</div>
        <div className="h-[6px] w-[6px] rounded-full bg-nonmetal" />
      </Link>
      <Link
        href="https://en.wikipedia.org/wiki/Metalloid"
        target="_blank"
        className={`relative flex justify-between items-center px-2 py-1 border-2 ${
          theme === "dark"
            ? "border-[#969696] text-text_primary"
            : "border-[#141414] text-text_secondary"
        } rounded-md before:absolute before:top-0 before:left-full before:h-full before:w-full before:bg-metalloid hover:before:left-0 before:transition-all before:ease-in-out before:duration-700 before:rounded-md overflow-hidden hover:border-transparent hover:text-dark_primary ease-in-out transition-all delay-[1000] font-bold`}
      >
        <div className="z-[5]">Metalloid</div>
        <div className="h-[6px] w-[6px] rounded-full bg-metalloid" />
      </Link>
      <Link
        href="https://en.wikipedia.org/wiki/Transition_metal"
        target="_blank"
        className={`relative flex justify-between items-center px-2 py-1 border-2 ${
          theme === "dark"
            ? "border-[#969696] text-text_primary"
            : "border-[#141414] text-text_secondary"
        } rounded-md before:absolute before:top-0 before:left-full before:h-full before:w-full before:bg-transition hover:before:left-0 before:transition-all before:ease-in-out before:duration-700 before:rounded-md overflow-hidden hover:border-transparent hover:text-dark_primary ease-in-out transition-all delay-[1000] font-bold`}
      >
        <div className="z-[5]">Transition Metal</div>
        <div className="h-[6px] w-[6px] rounded-full bg-transition" />
      </Link>
      <Link
        href="https://en.wikipedia.org/wiki/Superheavy_element"
        target="_blank"
        className={`relative flex justify-between items-center px-2 py-1 border-2 ${
          theme === "dark"
            ? "border-[#969696] text-text_primary"
            : "border-[#141414] text-text_secondary"
        } rounded-md before:absolute before:top-0 before:left-full before:h-full before:w-full before:bg-transactinides hover:before:left-0 before:transition-all before:ease-in-out before:duration-700 before:rounded-md overflow-hidden hover:border-transparent hover:text-dark_primary ease-in-out transition-all delay-[1000] font-bold`}
      >
        <div className="z-[5]">Transactinides</div>
        <div className="h-[6px] w-[6px] rounded-full bg-transactinides" />
      </Link>
      <Link
        href="https://en.wikipedia.org/wiki/Halogen"
        target="_blank"
        className={`relative flex justify-between items-center px-2 py-1 border-2 ${
          theme === "dark"
            ? "border-[#969696] text-text_primary"
            : "border-[#141414] text-text_secondary"
        } rounded-md before:absolute before:top-0 before:left-full before:h-full before:w-full before:bg-halogen hover:before:left-0 before:transition-all before:ease-in-out before:duration-700 before:rounded-md overflow-hidden hover:border-transparent hover:text-dark_primary ease-in-out transition-all delay-[1000] font-bold`}
      >
        <div className="z-[5]">Halogen</div>
        <div className="h-[6px] w-[6px] rounded-full bg-halogen" />
      </Link>
      <Link
        href="https://en.wikipedia.org/wiki/Halogen"
        target="_blank"
        className={`relative flex justify-between items-center px-2 py-1 border-2 ${
          theme === "dark"
            ? "border-[#969696] text-text_primary"
            : "border-[#141414] text-text_secondary"
        } rounded-md before:absolute before:top-0 before:left-full before:h-full before:w-full before:bg-noblegases hover:before:left-0 before:transition-all before:ease-in-out before:duration-700 before:rounded-md overflow-hidden hover:border-transparent hover:text-dark_primary ease-in-out transition-all delay-[1000] font-bold`}
      >
        <div className="z-[5]">Noble Gases</div>
        <div className="h-[6px] w-[6px] rounded-full bg-noblegases" />
      </Link>
      <Link
        href="https://en.wikipedia.org/wiki/Lanthanide"
        target="_blank"
        className={`relative flex justify-between items-center px-2 py-1 border-2 ${
          theme === "dark"
            ? "border-[#969696] text-text_primary"
            : "border-[#141414] text-text_secondary"
        } rounded-md before:absolute before:top-0 before:left-full before:h-full before:w-full before:bg-lanthanides hover:before:left-0 before:transition-all before:ease-in-out before:duration-700 before:rounded-md overflow-hidden hover:border-transparent hover:text-dark_primary ease-in-out transition-all delay-[1000] font-bold`}
      >
        <div className="z-[5]">Lanthanide</div>
        <div className="h-[6px] w-[6px] rounded-full bg-lanthanides" />
      </Link>
      <Link
        href="https://en.wikipedia.org/wiki/Actinide"
        target="_blank"
        className={`relative flex justify-between items-center px-2 py-1 border-2 ${
          theme === "dark"
            ? "border-[#969696] text-text_primary"
            : "border-[#141414] text-text_secondary"
        } rounded-md before:absolute before:top-0 before:left-full before:h-full before:w-full before:bg-actinides hover:before:left-0 before:transition-all before:ease-in-out before:duration-700 before:rounded-md overflow-hidden hover:border-transparent hover:text-dark_primary ease-in-out transition-all delay-[1000] font-bold`}
      >
        <div className="z-[5]">Actinide</div>
        <div className="h-[6px] w-[6px] rounded-full bg-actinides" />
      </Link>
    </div>
  );
};

export default Categories;
