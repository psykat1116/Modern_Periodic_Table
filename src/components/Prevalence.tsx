import React, { useState } from "react";
import { Prevalence } from "@/types/ElementTypes";
import { MdContentCopy, MdCheck } from "react-icons/md";
import DOMPurify from "dompurify";

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
  const handleCopy = (value: string, property: string) => {
    setIsCopying({ ...isCopying, [property]: true });
    navigator.clipboard.writeText(value);
    setTimeout(() => {
      setIsCopying({ ...isCopying, [property]: false });
    }, 500);
  };
  return (
    <div className="w-full flex flex-col justify-start items-start p-4 text-[#cfbbbb] bg-[#1b1a1a] shadow-md rounded-sm">
      <h1 className="text-xl">Prevalence</h1>
      <div className="flex flex-col w-full justify-start items-start">
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">Universe</p>
          <div className="w-[70%] border border-[#cfbbbb] px-2 py-1 rounded-[4px] flex justify-between items-center select-none">
            <p
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(universe) }}
            ></p>
            <button onClick={() => handleCopy(universe.toString(), "universe")}>
              {!isCopying.universe ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-500" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">Sun</p>
          <div className="w-[70%] border border-[#cfbbbb] px-2 py-1 rounded-[4px] flex justify-between items-center">
            <p
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(sun) }}
            ></p>
            <button onClick={() => handleCopy(sun.toString(), "sun")}>
              {!isCopying.sun ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-500" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">Ocean</p>
          <div className="w-[70%] border border-[#cfbbbb] px-2 py-1 rounded-[4px] flex justify-between items-center">
            <p
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(ocean) }}
            ></p>
            <button onClick={() => handleCopy(ocean.toString(), "ocean")}>
              {!isCopying.ocean ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-500" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">Human</p>
          <div className="w-[70%] border border-[#cfbbbb] px-2 py-1 rounded-[4px] flex justify-between items-center">
            <p
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(human) }}
            ></p>
            <button onClick={() => handleCopy(human.toString(), "human")}>
              {!isCopying.human ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-500" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">Earth Crust</p>
          <div className="w-[70%] border border-[#cfbbbb] px-2 py-1 rounded-[4px] flex justify-between items-center">
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(earth_crust),
              }}
            ></p>
            <button onClick={() => handleCopy(earth_crust, "earth_crust")}>
              {!isCopying.earth_crust ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-500" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">Meteorites</p>
          <div className="w-[70%] border border-[#cfbbbb] px-2 py-1 rounded-[4px] flex justify-between items-center">
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(meteorites),
              }}
            ></p>
            <button onClick={() => handleCopy(meteorites, "meteorites")}>
              {!isCopying.meteorites ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-500" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prevalence;
