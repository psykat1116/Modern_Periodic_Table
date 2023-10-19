import React from "react";
import Box from "./Box";
import RowBox from "./RowBox";
import { RowTwoLeftElements } from "@/constant/RowTwo";

const RowTwoLeft = () => {
  return (
    <div className="flex gap-1.5">
      <RowBox value="2" />
      {RowTwoLeftElements.map((element) => {
        return (
          <Box
            name={element.name}
            id={element.id}
            category={element.category}
            key={element.id}
            groups={element.groups}
          />
        );
      })}
    </div>
  );
};

export default RowTwoLeft;
