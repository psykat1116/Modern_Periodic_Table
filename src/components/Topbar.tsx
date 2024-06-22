"use client";
import React, { useContext } from "react";
import { useParams } from "next/navigation";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import Navbar from "./Navbar";
import Link from "next/link";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import ElementDetailsProps from "@/types/ElementTypes";

interface TopbarDetailsProps {
  elem: ElementDetailsProps | null;
}

const Topbar: React.FC<TopbarDetailsProps> = ({ elem }) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  const { id }: { id: string } = useParams();
  const prevId = parseInt(id) - 1 === 0 ? 116 : parseInt(id) - 1,
    nextId = parseInt(id) + 1 === 119 ? 1 : parseInt(id) + 1;
  return (
    <div
      className={`flex flex-col w-full ${
        theme === "dark" ? "bg-dark_primary" : "bg-light_primary"
      } justify-start items-center z-[5] bg-opacity-60 backdrop-blur-require`}
    >
      <Navbar />
      <div
        className={`w-full px-10 flex justify-between items-center mt-5 text-lg tracking-wider ${
          theme === "dark" ? "text-white" : "text-black"
        } max-sm:px-5`}
      >
        <Link
          href={`/elements/${prevId}`}
          className="flex justify-between items-center"
        >
          <BsArrowLeft className="cursor-pointer text-xl" />
          <p className="ml-2 text-base max-sm:ml-0">{elem?.neighbour[0]}</p>
        </Link>
        <p className="w-full text-center mx-5 max-sm:hidden">
          {elem && (
            <p>
              {elem?.general_properties.name}{" "}
              {`(${elem?.general_properties.symbol})`}
            </p>
          )}
        </p>
        <Link
          href={`/elements/${nextId}`}
          className="flex justify-between items-center"
        >
          <p className="mr-2 text-base max-sm:mr-0">{elem?.neighbour[1]}</p>
          <BsArrowRight className="cursor-pointer text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
