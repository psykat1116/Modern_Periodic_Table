import React, { useContext } from "react";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

const Categories = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div className="relative w-full min-h-[20vh] mt-10 grid grid-cols-5 gap-2">
      <div
        className={`relative flex justify-between items-center px-2 py-1 border-2  ${
          theme === "dark"
            ? "border-[#969696] text-text_primary"
            : "border-[#141414] text-text_secondary"
        } rounded-md before:absolute before:top-0 before:left-full before:h-full before:w-full before:bg-alkali hover:before:left-0 before:transition-all before:ease-in-out before:duration-700 before:rounded-md overflow-hidden hover:border-transparent hover:text-dark_primary ease-in-out transition-all delay-[1000] font-bold`}
      >
        <p className="z-[5]">Alkali Metal</p>
        <div className="h-[6px] w-[6px] rounded-full bg-alkali" />
      </div>
      <div
        className={`relative flex justify-between items-center px-2 py-1 border-2  ${
          theme === "dark"
            ? "border-[#969696] text-text_primary"
            : "border-[#141414] text-text_secondary"
        } rounded-md before:absolute before:top-0 before:left-full before:h-full before:w-full before:bg-alkaliearth hover:before:left-0 before:transition-all before:ease-in-out before:duration-700 before:rounded-md overflow-hidden hover:border-transparent hover:text-dark_primary ease-in-out transition-all delay-[1000] font-bold`}
      >
        <p className="z-[5]">Alkali Earth Metal</p>
        <div className="h-[6px] w-[6px] rounded-full bg-alkaliearth" />
      </div>
      <div
        className={`relative flex justify-between items-center px-2 py-1 border-2  ${
          theme === "dark"
            ? "border-[#969696] text-text_primary"
            : "border-[#141414] text-text_secondary"
        } rounded-md before:absolute before:top-0 before:left-full before:h-full before:w-full before:bg-metal hover:before:left-0 before:transition-all before:ease-in-out before:duration-700 before:rounded-md overflow-hidden hover:border-transparent hover:text-dark_primary ease-in-out transition-all delay-[1000] font-bold`}
      >
        <p className="z-[5]">Metal</p>
        <div className="h-[6px] w-[6px] rounded-full bg-metal" />
      </div>
      <div
        className={`relative flex justify-between items-center px-2 py-1 border-2  ${
          theme === "dark"
            ? "border-[#969696] text-text_primary"
            : "border-[#141414] text-text_secondary"
        } rounded-md before:absolute before:top-0 before:left-full before:h-full before:w-full before:bg-nonmetal hover:before:left-0 before:transition-all before:ease-in-out before:duration-700 before:rounded-md overflow-hidden hover:border-transparent hover:text-dark_primary ease-in-out transition-all delay-[1000] font-bold`}
      >
        <p className="z-[5]">Non Metal</p>
        <div className="h-[6px] w-[6px] rounded-full bg-nonmetal" />
      </div>
      <div
        className={`relative flex justify-between items-center px-2 py-1 border-2  ${
          theme === "dark"
            ? "border-[#969696] text-text_primary"
            : "border-[#141414] text-text_secondary"
        } rounded-md before:absolute before:top-0 before:left-full before:h-full before:w-full before:bg-metalloid hover:before:left-0 before:transition-all before:ease-in-out before:duration-700 before:rounded-md overflow-hidden hover:border-transparent hover:text-dark_primary ease-in-out transition-all delay-[1000] font-bold`}
      >
        <p className="z-[5]">Metalloid</p>
        <div className="h-[6px] w-[6px] rounded-full bg-metalloid" />
      </div>
      <div
        className={`relative flex justify-between items-center px-2 py-1 border-2  ${
          theme === "dark"
            ? "border-[#969696] text-text_primary"
            : "border-[#141414] text-text_secondary"
        } rounded-md before:absolute before:top-0 before:left-full before:h-full before:w-full before:bg-transition hover:before:left-0 before:transition-all before:ease-in-out before:duration-700 before:rounded-md overflow-hidden hover:border-transparent hover:text-dark_primary ease-in-out transition-all delay-[1000] font-bold`}
      >
        <p className="z-[5]">Transition Metal</p>
        <div className="h-[6px] w-[6px] rounded-full bg-transition" />
      </div>
      <div
        className={`relative flex justify-between items-center px-2 py-1 border-2  ${
          theme === "dark"
            ? "border-[#969696] text-text_primary"
            : "border-[#141414] text-text_secondary"
        } rounded-md before:absolute before:top-0 before:left-full before:h-full before:w-full before:bg-transactinides hover:before:left-0 before:transition-all before:ease-in-out before:duration-700 before:rounded-md overflow-hidden hover:border-transparent hover:text-dark_primary ease-in-out transition-all delay-[1000] font-bold`}
      >
        <p className="z-[5]">Transactinides</p>
        <div className="h-[6px] w-[6px] rounded-full bg-transactinides" />
      </div>
      <div
        className={`relative flex justify-between items-center px-2 py-1 border-2  ${
          theme === "dark"
            ? "border-[#969696] text-text_primary"
            : "border-[#141414] text-text_secondary"
        } rounded-md before:absolute before:top-0 before:left-full before:h-full before:w-full before:bg-halogen hover:before:left-0 before:transition-all before:ease-in-out before:duration-700 before:rounded-md overflow-hidden hover:border-transparent hover:text-dark_primary ease-in-out transition-all delay-[1000] font-bold`}
      >
        <p className="z-[5]">Halogen</p>
        <div className="h-[6px] w-[6px] rounded-full bg-halogen" />
      </div>
      <div
        className={`relative flex justify-between items-center px-2 py-1 border-2  ${
          theme === "dark"
            ? "border-[#969696] text-text_primary"
            : "border-[#141414] text-text_secondary"
        } rounded-md before:absolute before:top-0 before:left-full before:h-full before:w-full before:bg-noblegases hover:before:left-0 before:transition-all before:ease-in-out before:duration-700 before:rounded-md overflow-hidden hover:border-transparent hover:text-dark_primary ease-in-out transition-all delay-[1000] font-bold`}
      >
        <p className="z-[5]">Noble Gases</p>
        <div className="h-[6px] w-[6px] rounded-full bg-noblegases" />
      </div>
      <div
        className={`relative flex justify-between items-center px-2 py-1 border-2  ${
          theme === "dark"
            ? "border-[#969696] text-text_primary"
            : "border-[#141414] text-text_secondary"
        } rounded-md before:absolute before:top-0 before:left-full before:h-full before:w-full before:bg-lanthanides hover:before:left-0 before:transition-all before:ease-in-out before:duration-700 before:rounded-md overflow-hidden hover:border-transparent hover:text-dark_primary ease-in-out transition-all delay-[1000] font-bold`}
      >
        <p className="z-[5]">Lanthanide</p>
        <div className="h-[6px] w-[6px] rounded-full bg-lanthanides" />
      </div>
      <div
        className={`relative flex justify-between items-center px-2 py-1 border-2 ${
          theme === "dark"
            ? "border-[#969696] text-text_primary"
            : "border-[#141414] text-text_secondary"
        } rounded-md before:absolute before:top-0 before:left-full before:h-full before:w-full before:bg-actinides hover:before:left-0 before:transition-all before:ease-in-out before:duration-700 before:rounded-md overflow-hidden hover:border-transparent hover:text-dark_primary ease-in-out transition-all delay-[1000] font-bold`}
      >
        <p className="z-[5]">Actinide</p>
        <div className="h-[6px] w-[6px] rounded-full bg-actinides" />
      </div>
    </div>
  );
};

export default Categories;
