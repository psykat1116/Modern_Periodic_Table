import React from "react";
import { useSearchParams } from "next/navigation";

const RowBox = ({ value }: { value: string }) => {
  const searchParam = useSearchParams();
  const param = searchParam.get("type");
  return (
    <div
      className={`relative h-[55px] w-[55px] border-[2px] ${
        !param
          ? "border-[#969696] text-white"
          : "border-black text-black pointer-events-none select-none"
      } flex justify-center items-center`}
    >
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
};

export default RowBox;
