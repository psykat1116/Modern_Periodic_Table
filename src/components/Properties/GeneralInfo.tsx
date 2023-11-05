import React, { useState, useContext } from "react";
import Link from "next/link";
import { GeneralProperties } from "@/types/ElementTypes";
import { MdContentCopy, MdCheck } from "react-icons/md";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

const GeneralInfo = ({
  atomic_number,
  group,
  period,
  block,
  cas_number,
}: GeneralProperties) => {
  const [isCopying, setIsCopying] = useState({
    atomic_number: false,
    group: false,
    period: false,
    block: false,
    cas_number: false,
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
      } shadow-lg rounded-sm`}
    >
      <h1 className="text-xl">General Properties</h1>
      <div className="flex flex-col w-full justify-start items-start gap-3 mt-3">
        <div className="flex flex-row justify-start items-center w-full ">
          <Link
            className=" pr-2 py-1 rounded-[4px] w-[20%]"
            href="https://en.wikipedia.org/wiki/Atomic_number"
          >
            Atomic Number
          </Link>
          <div
            className={`w-[80%]  ${
              theme === "dark"
                ? "bg-bg_dark_placeholder"
                : "bg-bg_light_placeholder"
            } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
          >
            <p>{atomic_number}</p>
            <button
              onClick={() =>
                handleCopy(atomic_number.toString(), "atomic_number")
              }
            >
              {!isCopying.atomic_number ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-700" />
              )}
            </button>
          </div>
        </div>
        {group && (
          <div className="flex flex-row justify-start items-center w-full ">
            <Link
              className=" pr-2 py-1 rounded-[4px] w-[20%]"
              href="https://en.wikipedia.org/wiki/Group_(periodic_table)"
            >
              Group
            </Link>
            <div
              className={`w-[80%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p>{group}</p>
              <button onClick={() => handleCopy(group.toString(), "group")}>
                {!isCopying.group ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
          </div>
        )}
        <div className="flex flex-row justify-start items-center w-full ">
          <Link
            className=" pr-2 py-1 rounded-[4px] w-[20%]"
            href="https://en.wikipedia.org/wiki/Period_(periodic_table)"
          >
            Period
          </Link>
          <div
            className={`w-[80%]  ${
              theme === "dark"
                ? "bg-bg_dark_placeholder"
                : "bg-bg_light_placeholder"
            } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
          >
            <p>{period}</p>
            <button onClick={() => handleCopy(period.toString(), "period")}>
              {!isCopying.period ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-700" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center w-full ">
          <Link
            className=" pr-2 py-1 rounded-[4px] w-[20%]"
            href="https://en.wikipedia.org/wiki/Block_(periodic_table)"
          >
            Block
          </Link>
          <div
            className={`w-[80%]  ${
              theme === "dark"
                ? "bg-bg_dark_placeholder"
                : "bg-bg_light_placeholder"
            } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
          >
            <p>{block}</p>
            <button onClick={() => handleCopy(block.toString(), "block")}>
              {!isCopying.block ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-700" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center w-full ">
          <Link
            className=" pr-2 py-1 rounded-[4px] w-[20%]"
            href="https://en.wikipedia.org/wiki/CAS_Registry_Number"
          >
            CAS Number
          </Link>
          <div
            className={`w-[80%]  ${
              theme === "dark"
                ? "bg-bg_dark_placeholder"
                : "bg-bg_light_placeholder"
            } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
          >
            <p>{cas_number}</p>
            <button onClick={() => handleCopy(cas_number, "cas_number")}>
              {!isCopying.cas_number ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-700" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
