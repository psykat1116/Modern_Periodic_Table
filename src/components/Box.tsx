import React from "react";
import BoxTypes from "@/types/BoxTypes";
import Link from "next/link";

const Box = ({ id, category, name, color }: BoxTypes) => {
  let style;
  if (category === "metal") {
    style = `relative h-[55px] w-[55px] border-[2px] border-[#969696] text-white flex justify-center items-center before:absolute before:h-1 before:w-1 before:rounded-full before:top-1 before:right-1 overflow-hidden hover:before:scale-[20] before:transition-all before:duration-500 hover:border-transparent rounded-sm font-bold before:bg-metal`;
  } else if (category === "nonmetal") {
    style = `relative h-[55px] w-[55px] border-[2px] border-[#969696] text-white flex justify-center items-center before:absolute before:h-1 before:w-1 before:rounded-full before:top-1 before:right-1 overflow-hidden hover:before:scale-[20] before:transition-all before:duration-500 hover:border-transparent rounded-sm font-bold before:bg-nonmetal`;
  } else if (category === "alkali") {
    style = `relative h-[55px] w-[55px] border-[2px] border-[#969696] text-white flex justify-center items-center before:absolute before:h-1 before:w-1 before:rounded-full before:top-1 before:right-1 overflow-hidden hover:before:scale-[20] before:transition-all before:duration-500 hover:border-transparent rounded-sm font-bold before:bg-alkali`;
  } else if (category === "alkaliearth") {
    style = `relative h-[55px] w-[55px] border-[2px] border-[#969696] text-white flex justify-center items-center before:absolute before:h-1 before:w-1 before:rounded-full before:top-1 before:right-1 overflow-hidden hover:before:scale-[20] before:transition-all before:duration-500 hover:border-transparent rounded-sm font-bold before:bg-alkaliearth`;
  } else if (category === "lanthanides") {
    style = `relative h-[55px] w-[55px] border-[2px] border-[#969696] text-white flex justify-center items-center before:absolute before:h-1 before:w-1 before:rounded-full before:top-1 before:right-1 overflow-hidden hover:before:scale-[20] before:transition-all before:duration-500 hover:border-transparent rounded-sm font-bold before:bg-lanthanides`;
  } else if (category === "actinides") {
    style = `relative h-[55px] w-[55px] border-[2px] border-[#969696] text-white flex justify-center items-center before:absolute before:h-1 before:w-1 before:rounded-full before:top-1 before:right-1 overflow-hidden hover:before:scale-[20] before:transition-all before:duration-500 hover:border-transparent rounded-sm font-bold before:bg-actinides`;
  } else if (category === "halogen") {
    style = `relative h-[55px] w-[55px] border-[2px] border-[#969696] text-white flex justify-center items-center before:absolute before:h-1 before:w-1 before:rounded-full before:top-1 before:right-1 overflow-hidden hover:before:scale-[20] before:transition-all before:duration-500 hover:border-transparent rounded-sm font-bold before:bg-halogen`;
  } else if (category === "noblegases") {
    style = `relative h-[55px] w-[55px] border-[2px] border-[#969696] text-white flex justify-center items-center before:absolute before:h-1 before:w-1 before:rounded-full before:top-1 before:right-1 overflow-hidden hover:before:scale-[20] before:transition-all before:duration-500 hover:border-transparent rounded-sm font-bold before:bg-noblegases`;
  } else if (category === "metalloid") {
    style = `relative h-[55px] w-[55px] border-[2px] border-[#969696] text-white flex justify-center items-center before:absolute before:h-1 before:w-1 before:rounded-full before:top-1 before:right-1 overflow-hidden hover:before:scale-[20] before:transition-all before:duration-500 hover:border-transparent rounded-sm font-bold before:bg-metalloid`;
  } else if (category === "transition") {
    style = `relative h-[55px] w-[55px] border-[2px] border-[#969696] text-white flex justify-center items-center before:absolute before:h-1 before:w-1 before:rounded-full before:top-1 before:right-1 overflow-hidden hover:before:scale-[20] before:transition-all before:duration-500 hover:border-transparent rounded-sm font-bold before:bg-transition`;
  } else if (category === "transactinides") {
    style = `relative h-[55px] w-[55px] border-[2px] border-[#969696] text-white flex justify-center items-center before:absolute before:h-1 before:w-1 before:rounded-full before:top-1 before:right-1 overflow-hidden hover:before:scale-[20] before:transition-all before:duration-500 hover:border-transparent rounded-sm font-bold before:bg-transactinides`;
  }
  return (
    <Link href={`/elements/${id}`} className={style}>
      <p className="z-10 text-xl">{name}</p>
    </Link>
  );
};

export default Box;
