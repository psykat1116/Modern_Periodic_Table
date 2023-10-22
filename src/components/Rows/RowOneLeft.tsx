import React from "react";
import Box from "@/components/Boxes/Box";
import ColBox from "../Boxes/ColBox";
import RowBox from "../Boxes/RowBox";

const RowOneLeft = () => {
  return (
    <div className="flex gap-1.5">
      <RowBox value="1" />
      <Box
        name="H"
        id="1"
        category="nonmetal"
        groups={["sblock", "nonmetal"]}
      />
      <ColBox val1="2" val2="IIA" />
    </div>
  );
};

export default RowOneLeft;
