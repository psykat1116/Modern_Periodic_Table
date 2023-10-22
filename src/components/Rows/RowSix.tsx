import React from "react";
import RowBox from "../Boxes/RowBox";
import Box from "../Boxes/Box";
import BlankBox from "../Boxes/BlankBox";
import {
  RowSixLeftElements,
  RowSixRightElements,
} from "@/constant/Elements/RowSix";

const RowSix = () => {
  return (
    <div className="flex gap-1.5">
      <RowBox value="6" />
      {RowSixLeftElements.map((elements) => {
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
      <BlankBox limit="La-Lu" />
      {RowSixRightElements.map((elements) => {
        return (
          <Box
            name={elements.name}
            category={elements.category}
            groups={elements.groups}
            id={elements.id}
            key={elements.id}
          />
        );
      })}
    </div>
  );
};

export default RowSix;
