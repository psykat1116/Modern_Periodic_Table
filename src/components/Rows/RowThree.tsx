import React from "react";
import Box from "../Boxes/Box";
import RowBox from "../Boxes/RowBox";
import ColBox from "../Boxes/ColBox";
import {
  RowThreeLeftElements,
  RowThreeRightElements,
} from "@/constant/Elements/RowThree";

const RowThree = () => {
  return (
    <div className="flex gap-1.5">
      <RowBox value="3" />
      {RowThreeLeftElements.map((element) => {
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
      <ColBox val1="3" val2="IIIB" />
      <ColBox val1="4" val2="IVB" />
      <ColBox val1="5" val2="VB" />
      <ColBox val1="6" val2="VIB" />
      <ColBox val1="7" val2="VIIB" />
      <ColBox val1="8" val2="VIII" />
      <ColBox val1="9" val2="VIII" />
      <ColBox val1="10" val2="VIII" />
      <ColBox val1="11" val2="IB" />
      <ColBox val1="12" val2="IIB" />
      {RowThreeRightElements.map((element) => {
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

export default RowThree;
