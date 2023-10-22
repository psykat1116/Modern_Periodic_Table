import React from "react";
import Lanthanide from "./Rows/Lanthanide";
import Actinides from "./Rows/Actinides";

const LowerTable = () => {
  return (
    <div className="mt-10 text-text_primary flex flex-col items-end w-full gap-1.5">
      <Lanthanide />
      <Actinides />
    </div>
  );
};

export default LowerTable;
