import React from "react";
import ColBox from "./ColBox";
import Box from "./Box";

const RowOneRight = () => {
  return (
    <div className="flex gap-1.5">
      <ColBox val1="13" val2="IIIA" />
      <ColBox val1="14" val2="IVA" />
      <ColBox val1="15" val2="VA" />
      <ColBox val1="16" val2="VIA" />
      <ColBox val1="17" val2="VIIA" />
      <Box name="He" id="2" category="noblegases" />
    </div>
  );
};

export default RowOneRight;
