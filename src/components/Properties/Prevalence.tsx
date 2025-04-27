import Link from "next/link";
import DOMPurify from "dompurify";
import { useState, useContext } from "react";
import { MdContentCopy, MdCheck } from "react-icons/md";

import type { Prevalence } from "@/types/ElementTypes";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

const Prevalence = ({
  universe,
  sun,
  ocean,
  human,
  earth_crust,
  meteorites,
}: Prevalence) => {
  const [isCopying, setIsCopying] = useState({
    universe: false,
    sun: false,
    ocean: false,
    human: false,
    earth_crust: false,
    meteorites: false,
  });
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  const handleCopy = (value: string, property: string) => {
    setIsCopying({ ...isCopying, [property]: true });
    navigator.clipboard.writeText(value);
    setTimeout(() => {
      setIsCopying({ ...isCopying, [property]: false });
    }, 500);
  };
  return (
    <div
      className={`w-full flex flex-col justify-start items-start p-4 ${
        theme === "dark"
          ? "text-text_primary bg-bg_dark"
          : "bg-bg_light text-text_secondary"
      } shadow-lg rounded-sm bg-opacity-60 backdrop-blur-require`}
    >
      <h1 className="text-xl">Prevalence</h1>
      <div className="flex flex-col w-full justify-start items-start gap-3 mt-3">
        {universe && (
          <div className="flex flex-row justify-start items-center w-full max-md:flex-col">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[20%] max-md:w-full"
              href="/property/universe"
            >
              Universe
            </Link>
            <div
              className={`w-[80%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center max-md:w-full`}
            >
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(universe),
                }}
              ></p>
              <button
                onClick={() => handleCopy(universe.toString(), "universe")}
              >
                {!isCopying.universe ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
          </div>
        )}
        {sun && (
          <div className="flex flex-row justify-start items-center w-full max-md:flex-col">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[20%] max-md:w-full"
              href="/property/sun"
            >
              Sun
            </Link>
            <div
              className={`w-[80%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center max-md:w-full`}
            >
              <p
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(sun) }}
              ></p>
              <button onClick={() => handleCopy(sun.toString(), "sun")}>
                {!isCopying.sun ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
          </div>
        )}
        {ocean && (
          <div className="flex flex-row justify-start items-center w-full max-md:flex-col">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[20%] max-md:w-full"
              href="/property/ocean"
            >
              Ocean
            </Link>
            <div
              className={`w-[80%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center max-md:w-full`}
            >
              <p
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(ocean) }}
              ></p>
              <button onClick={() => handleCopy(ocean.toString(), "ocean")}>
                {!isCopying.ocean ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
          </div>
        )}
        {human && (
          <div className="flex flex-row justify-start items-center w-full max-md:flex-col">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[20%] max-md:w-full"
              href="/property/human"
            >
              Human
            </Link>
            <div
              className={`w-[80%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center max-md:w-full`}
            >
              <p
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(human) }}
              ></p>
              <button onClick={() => handleCopy(human.toString(), "human")}>
                {!isCopying.human ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
          </div>
        )}
        {earth_crust && (
          <div className="flex flex-row justify-start items-center w-full max-md:flex-col">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[20%] max-md:w-full"
              href="/property/earth_crust"
            >
              Earth Crust
            </Link>
            <div
              className={`w-[80%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center max-md:w-full`}
            >
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(earth_crust),
                }}
              ></p>
              <button onClick={() => handleCopy(earth_crust, "earth_crust")}>
                {!isCopying.earth_crust ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
          </div>
        )}
        {meteorites && (
          <div className="flex flex-row justify-start items-center w-full max-md:flex-col">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[20%] max-md:w-full"
              href="/property/meteorites"
            >
              Meteorites
            </Link>
            <div
              className={`w-[80%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center max-md:w-full`}
            >
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(meteorites),
                }}
              ></p>
              <button onClick={() => handleCopy(meteorites, "meteorites")}>
                {!isCopying.meteorites ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Prevalence;
