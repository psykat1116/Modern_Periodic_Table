import React from "react";

const Description = ({ description }: { description: string }) => {
  return (
    <div className="bg-[#1b1a1a] shadow-md rounded-sm w-full p-4 mb-2 text-[#cfbbbb]">
      {description}
    </div>
  );
};

export default Description;
