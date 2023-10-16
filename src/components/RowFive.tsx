import React from "react";
import RowBox from "./RowBox";
import Box from "./Box";
import { RowFiveElements } from "@/constant/RowFive";

const RowFive = () => {
  return (
    <div className="flex gap-1.5">
      <RowBox value="5" />
      {RowFiveElements.map((elements) => {
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

export default RowFive;
