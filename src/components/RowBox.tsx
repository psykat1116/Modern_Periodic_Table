import React from "react";

const RowBox = ({ value }: { value: string }) => {
  return (
    <div
      className={`relative h-[55px] w-[55px] border-[2px] border-[#969696] text-white flex justify-center items-center`}
    >
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
};

export default RowBox;
