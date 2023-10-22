import React from "react";
import Box from "../Boxes/Box";
import { RowTwoRightElements } from "@/constant/Elements/RowTwo";

const RowTwoRight = () => {
  return (
    <div className="flex gap-1.5">
      {RowTwoRightElements.map((element) => {
        return (
          <Box
            key={element.id}
            name={element.name}
            id={element.id}
            category={element.category}
            groups={element.groups}
          />
        );
      })}
    </div>
  );
};

export default RowTwoRight;
