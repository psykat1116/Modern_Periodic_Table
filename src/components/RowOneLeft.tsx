import React from "react";
import Box from "@/components/Box";
import ColBox from "./ColBox";
import RowBox from "./RowBox";

const RowOneLeft = () => {
  return (
    <div className="flex gap-1.5">
      <RowBox value="1" />
      <Box name="H" id="1" category="nonmetal" color="#f08080"/>
      <ColBox val1="2" val2="IIA" />
    </div>
  );
};

export default RowOneLeft;
