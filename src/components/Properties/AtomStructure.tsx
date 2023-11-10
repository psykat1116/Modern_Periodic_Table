import React, { useState, useContext } from "react";
import Link from "next/link";
import { AtomStructure } from "@/types/ElementTypes";
import DOMPurify from "dompurify";
import { MdContentCopy, MdCheck } from "react-icons/md";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

const AtomStructure = ({
  crystall_structure,
  lattice_angle,
  lattice_constant,
  space_group_name,
  space_group_number,
}: AtomStructure) => {
  const [isCopying, setIsCopying] = useState({
    crystall_structure: false,
    lattice_angle: false,
    lattice_constant: false,
    space_group_name: false,
    space_group_number: false,
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
      <h1 className="text-xl">Overview</h1>
      <div className="flex flex-col w-full justify-start items-start gap-3 mt-3">
        {crystall_structure && (
          <div className="flex flex-row justify-start items-center w-full">
            <p className=" pr-2 py-1 rounded-[4px] w-[25%]">
              Crystall Structure
            </p>
            <div
              className={`w-[75%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p>{crystall_structure}</p>
              <button
                onClick={() =>
                  handleCopy(crystall_structure, "crystall_structure")
                }
              >
                {!isCopying.crystall_structure ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
          </div>
        )}
        {space_group_name && (
          <div className="flex flex-row justify-start items-center w-full">
            <Link
              className=" pr-2 py-1 rounded-[4px] w-[25%]"
              href="https://en.wikipedia.org/wiki/Space_group"
              target="_blank"
            >
              Space Group Name
            </Link>
            <div
              className={`w-[75%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(space_group_name),
                }}
              ></p>
              <button
                onClick={() => handleCopy(space_group_name, "space_group_name")}
              >
                {!isCopying.space_group_name ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
          </div>
        )}
        {space_group_number && (
          <div className="flex flex-row justify-start items-start w-full">
            <Link
              className=" pr-2 py-1 rounded-[4px] w-[25%]"
              href="https://en.wikipedia.org/wiki/List_of_space_grou"
              target="_blank"
            >
              Space Group Number
            </Link>
            <div
              className={`w-[75%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p>{space_group_number}</p>
              <button
                onClick={() =>
                  handleCopy(
                    space_group_number.toString(),
                    "space_group_number"
                  )
                }
              >
                {!isCopying.space_group_number ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
          </div>
        )}
        {lattice_angle && (
          <div className="flex flex-row justify-start items-center w-full">
            <Link
              className=" pr-2 py-1 rounded-[4px] w-[25%]"
              href="https://en.wikipedia.org/wiki/Lattice_constant"
              target="_blank"
            >
              Lattice Angles
            </Link>
            <div className="w-[75%] gap-2 flex justify-start items-center text-sm">
              {lattice_angle.map((d, ind) => {
                return (
                  <div
                    key={ind}
                    className={`${
                      theme === "dark"
                        ? "bg-bg_dark_placeholder"
                        : "bg-bg_light_placeholder"
                    } px-2 py-1 rounded-[4px] select-none`}
                  >
                    {d}°
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {lattice_constant && (
          <div className="flex flex-row justify-start items-center w-full">
            <Link
              className=" pr-2 py-1 rounded-[4px] w-[25%]"
              href="https://en.wikipedia.org/wiki/Lattice_constant"
              target="_blank"
            >
              Lattice Constant (Pm)
            </Link>
            <div className="w-[75%] gap-2 flex justify-start items-center text-sm">
              {lattice_constant.map((d, ind) => {
                return (
                  <div
                    key={ind}
                    className={`${
                      theme === "dark"
                        ? "bg-bg_dark_placeholder"
                        : "bg-bg_light_placeholder"
                    } px-2 py-1 rounded-[4px] select-none`}
                  >
                    {d}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AtomStructure;
