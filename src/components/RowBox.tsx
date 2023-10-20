import React, { useContext } from "react";
import { useSearchParams } from "next/navigation";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

const RowBox = ({ value }: { value: string }) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  const searchParam = useSearchParams();
  const param = searchParam.get("type");
  return (
    <div
      className={`relative h-[55px] w-[55px] border-[2px] ${
        !param
          ? `${
              theme === "dark"
                ? "border-[#969696] text-text_primary"
                : "border-[#141414] text-text_secondary"
            }`
          : `${
              theme === "light"
                ? "text-white border-white"
                : "border-black text-black"
            } pointer-events-none select-none`
      } flex justify-center items-center`}
    >
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
};

export default RowBox;
