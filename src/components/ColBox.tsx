import React from "react";
import { useSearchParams } from "next/navigation";

const ColBox = ({ val1, val2 }: { val1: string; val2: string }) => {
  const searchParam = useSearchParams();
  const param = searchParam.get("type");
  return (
    <div
      className={`relative h-[55px] w-[55px] border-[2px] ${
        !param
          ? "border-[#969696] text-white"
          : "border-black text-black pointer-events-none select-none"
      } flex justify-center items-center flex-col px-1`}
    >
      <p className="text-sm text-right w-full font-bold">{val1}</p>
      <p className="text-sm text-left w-full font-bold">{val2}</p>
    </div>
  );
};

export default ColBox;
