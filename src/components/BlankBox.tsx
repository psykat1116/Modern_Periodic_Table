import React from "react";
import { useSearchParams } from "next/navigation";

const BlankBox = ({ limit }: { limit: string }) => {
  const searchParam = useSearchParams();
  const param = searchParam.get("type");
  return (
    <div
      className={`relative h-[55px] w-[55px] border-[2px] flex justify-center items-center flex-col px-1.5 rounded-sm border-transparent font-bold text-[14px] ${
        param !== null && "text-black pointer-events-none select-none"
      }`}
    >
      {limit}
    </div>
  );
};

export default BlankBox;
