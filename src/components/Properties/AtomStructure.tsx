import React, { useState, useContext } from "react";
import Link from "next/link";
import { AtomStructure } from "@/types/ElementTypes";
import DOMPurify from "dompurify";
import { MdContentCopy, MdCheck } from "react-icons/md";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import { motion } from "framer-motion";

const AtomStructure = ({
  crystal_structure,
  lattice_angle,
  lattice_constant,
  space_group_name,
  space_group_number,
}: AtomStructure) => {
  const [isCopying, setIsCopying] = useState({
    crystal_structure: false,
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
    <motion.div
      className={`w-full flex flex-col justify-start items-start p-4 ${
        theme === "dark"
          ? "text-text_primary bg-bg_dark"
          : "bg-bg_light text-text_secondary"
      } shadow-lg rounded-sm bg-opacity-60 backdrop-blur-require`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.25, ease: "easeInOut", delay: 0.5 }}
    >
      <h1 className="text-xl">Atomic Structure</h1>
      <div className="flex flex-col w-full justify-start items-start gap-3 mt-3">
        {crystal_structure && (
          <div className="flex flex-row justify-start items-center w-full">
            <Link
              className=" pr-2 py-1 rounded-[4px] w-[25%]"
              href="/property/cryst_struc"
            >
              Crystall Structure
            </Link>
            <div
              className={`w-[75%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p>{crystal_structure}</p>
              <button
                onClick={() =>
                  handleCopy(crystal_structure, "crystal_structure")
                }
              >
                {!isCopying.crystal_structure ? (
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
              href="/property/space_group_name"
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
              href="/property/space_group_number"
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
              className="pr-2 py-1 rounded-[4px] w-[25%]"
              href="/property/lattice_angle"
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
              className="pr-2 py-1 rounded-[4px] w-[25%]"
              href="/property/lattice_constant"
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
    </motion.div>
  );
};

export default AtomStructure;
