import React from "react";
import Lanthanide from "./Lanthanide";
import Actinides from "./Actinides";

const LowerTable = () => {
  return (
    <div className="mt-10 text-white flex flex-col items-end w-full gap-1.5">
      <Lanthanide />
      <Actinides />
    </div>
  );
};

export default LowerTable;
