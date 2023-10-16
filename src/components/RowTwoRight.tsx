import React from "react";
import Box from "./Box";
import { RowTwoRightElements } from "@/constant/RowTwo";

const RowTwoRight = () => {
  return (
    <div className="flex gap-1.5">
      {RowTwoRightElements.map((element) => {
        return (
          <Box
            key={element.name}
            name={element.name}
            id={element.id}
            category={element.category}
          />
        );
      })}
    </div>
  );
};

export default RowTwoRight;
