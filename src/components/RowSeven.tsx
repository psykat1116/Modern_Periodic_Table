import React from "react";
import Box from "./Box";
import RowBox from "./RowBox";
import BlankBox from "./BlankBox";
import {
  RowSevenLeftElements,
  RowSevenRightElements,
} from "@/constant/RowSeven";

const RowSeven = () => {
  return (
    <div className="flex gap-1.5">
      <RowBox value="7" />
      {RowSevenLeftElements.map((elemets) => {
        return (
          <Box
            id={elemets.id}
            key={elemets.id}
            category={elemets.category}
            name={elemets.name}
            groups={elemets.groups}
          />
        );
      })}
      <BlankBox limit="Ac-Lr" />
      {RowSevenRightElements.map((elemets) => {
        return (
          <Box
            id={elemets.id}
            key={elemets.id}
            category={elemets.category}
            name={elemets.name}
            groups={elemets.groups}
          />
        );
      })}
    </div>
  );
};

export default RowSeven;
