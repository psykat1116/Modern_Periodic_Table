import React from "react";

const BlankBox = ({ limit }: { limit: string }) => {
  return (
    <div
      className={`relative h-[55px] w-[55px] border-[2px]  flex justify-center items-center flex-col px-1.5 rounded-sm border-transparent font-bold text-[14px]`}
    >
      {limit}
    </div>
  );
};

export default BlankBox;
