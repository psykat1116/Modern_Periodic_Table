import React from "react";
import Box from "../Boxes/Box";
import RowBox from "../Boxes/RowBox";
import { RowFourElements } from "@/constant/Elements/RowFour";

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
            groups={elements.groups}
          />
        );
      })}
    </div>
  );
};

export default RowFour;
