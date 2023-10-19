import React from "react";
import BoxTypes from "@/types/BoxTypes";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const Box = ({ id, category, name, groups }: BoxTypes) => {
  const searchParam = useSearchParams();
  let params = searchParam.get("type");
  let style;
  if (category === "metal") {
    style = `relative h-[55px] w-[55px] border-[2px] flex justify-center items-center before:absolute before:h-1 before:w-1 before:rounded-full before:top-1 before:right-1 overflow-hidden hover:before:scale-[20] before:transition-all before:duration-500 hover:border-transparent rounded-sm font-bold ${
      !params || groups?.includes(params)
        ? "border-[#969696] text-white before:bg-metal"
        : "before:transition-none border-black text-black before:bg-transparent select-none pointer-events-none"
    }`;
  } else if (category === "nonmetal") {
    style = `relative h-[55px] w-[55px] border-[2px] flex justify-center items-center before:absolute before:h-1 before:w-1 before:rounded-full before:top-1 before:right-1 overflow-hidden hover:before:scale-[20] before:transition-all before:duration-500 hover:border-transparent rounded-sm font-bold ${
      !params || groups?.includes(params)
        ? "border-[#969696] text-white before:bg-nonmetal"
        : "before:transition-none border-black text-black before:bg-transparent select-none pointer-events-none"
    }`;
  } else if (category === "alkali") {
    style = `relative h-[55px] w-[55px] border-[2px] flex justify-center items-center before:absolute before:h-1 before:w-1 before:rounded-full before:top-1 before:right-1 overflow-hidden hover:before:scale-[20] before:transition-all before:duration-500 hover:border-transparent rounded-sm font-bold  ${
      !params || groups?.includes(params)
        ? "border-[#969696] text-white before:bg-alkali"
        : "before:transition-none border-black text-black before:bg-transparent select-none pointer-events-none"
    }`;
  } else if (category === "alkaliearth") {
    style = `relative h-[55px] w-[55px] border-[2px] flex justify-center items-center before:absolute before:h-1 before:w-1 before:rounded-full before:top-1 before:right-1 overflow-hidden hover:before:scale-[20] before:transition-all before:duration-500 hover:border-transparent rounded-sm font-bold ${
      !params || groups?.includes(params)
        ? "border-[#969696] text-white before:bg-alkaliearth"
        : "before:transition-none border-black text-black before:bg-transparent select-none pointer-events-none"
    }`;
  } else if (category === "lanthanides") {
    style = `relative h-[55px] w-[55px] border-[2px] flex justify-center items-center before:absolute before:h-1 before:w-1 before:rounded-full before:top-1 before:right-1 overflow-hidden hover:before:scale-[20] before:transition-all before:duration-500 hover:border-transparent rounded-sm font-bold ${
      !params || groups?.includes(params)
        ? "border-[#969696] text-white before:bg-lanthanides"
        : "before:transition-none border-black text-black before:bg-transparent select-none pointer-events-none"
    }`;
  } else if (category === "actinides") {
    style = `relative h-[55px] w-[55px] border-[2px] flex justify-center items-center before:absolute before:h-1 before:w-1 before:rounded-full before:top-1 before:right-1 overflow-hidden hover:before:scale-[20] before:transition-all before:duration-500 hover:border-transparent rounded-sm font-bold ${
      !params || groups?.includes(params)
        ? "border-[#969696] text-white before:bg-actinides"
        : "before:transition-none border-black text-black before:bg-transparent select-none pointer-events-none"
    }`;
  } else if (category === "halogen") {
    style = `relative h-[55px] w-[55px] border-[2px] flex justify-center items-center before:absolute before:h-1 before:w-1 before:rounded-full before:top-1 before:right-1 overflow-hidden hover:before:scale-[20] before:transition-all before:duration-500 hover:border-transparent rounded-sm font-bold ${
      !params || groups?.includes(params)
        ? "border-[#969696] text-white before:bg-halogen"
        : "before:transition-none border-black text-black before:bg-transparent select-none pointer-events-none"
    }`;
  } else if (category === "noblegases") {
    style = `relative h-[55px] w-[55px] border-[2px] flex justify-center items-center before:absolute before:h-1 before:w-1 before:rounded-full before:top-1 before:right-1 overflow-hidden hover:before:scale-[20] before:transition-all before:duration-500 hover:border-transparent rounded-sm font-bold ${
      !params || groups?.includes(params)
        ? "border-[#969696] text-white before:bg-noblegases"
        : "before:transition-none border-black text-black before:bg-transparent select-none pointer-events-none"
    }`;
  } else if (category === "metalloid") {
    style = `relative h-[55px] w-[55px] border-[2px] flex justify-center items-center before:absolute before:h-1 before:w-1 before:rounded-full before:top-1 before:right-1 overflow-hidden hover:before:scale-[20] before:transition-all before:duration-500 hover:border-transparent rounded-sm font-bold ${
      !params || groups?.includes(params)
        ? "border-[#969696] text-white before:bg-metalloid"
        : "before:transition-none border-black text-black before:bg-transparent select-none pointer-events-none"
    }`;
  } else if (category === "transition") {
    style = `relative h-[55px] w-[55px] border-[2px] flex justify-center items-center before:absolute before:h-1 before:w-1 before:rounded-full before:top-1 before:right-1 overflow-hidden hover:before:scale-[20] before:transition-all before:duration-500 hover:border-transparent rounded-sm font-bold ${
      !params || groups?.includes(params)
        ? "border-[#969696] text-white before:bg-transition"
        : "before:transition-none border-black text-black before:bg-transparent select-none pointer-events-none"
    }`;
  } else if (category === "transactinides") {
    style = `relative h-[55px] w-[55px] border-[2px] flex justify-center items-center before:absolute before:h-1 before:w-1 before:rounded-full before:top-1 before:right-1 overflow-hidden hover:before:scale-[20] before:transition-all before:duration-500 hover:border-transparent rounded-sm font-bold ${
      !params || groups?.includes(params)
        ? "border-[#969696] text-white before:bg-transactinides"
        : "before:transition-none border-black text-black before:bg-transparent select-none pointer-events-none"
    }`;
  }
  return (
    <Link href={`/elements/${id}`} className={style}>
      <p className="z-10 text-xl">{name}</p>
    </Link>
  );
};

export default Box;
