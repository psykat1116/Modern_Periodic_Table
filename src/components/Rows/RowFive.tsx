import React from "react";
import RowBox from "../Boxes/RowBox";
import Box from "../Boxes/Box";
import { RowFiveElements } from "@/constant/Elements/RowFive";

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
            groups={elements.groups}
          />
        );
      })}
    </div>
  );
};

export default RowFive;
