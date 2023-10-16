import React from "react";
import Box from "./Box";
import RowBox from "./RowBox";
import { RowFourElements } from "@/constant/RowFour";

const RowFour = () => {
  return (
    <div className="flex gap-1.5">
      <RowBox value="4" />
      {RowFourElements.map((elements) => {
        return (
          <Box
            name={elements.name}
            id={elements.id}
            key={elements.id}
            category={elements.category}
          />
        );
      })}
    </div>
  );
};

export default RowFour;
