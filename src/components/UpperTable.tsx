import React from "react";
import ColBox from "./Boxes/ColBox";
import RowOneLeft from "./Rows/RowOneLeft";
import RowOneRight from "./Rows/RowOneRight";
import RowTwoLeft from "./Rows/RowTwoLeft";
import RowTwoRight from "./Rows/RowTwoRight";
import RowThree from "./Rows/RowThree";
import RowFour from "./Rows/RowFour";
import RowFive from "./Rows/RowFive";
import RowSix from "./Rows/RowSix";
import RowSeven from "./Rows/RowSeven";

const UpperTable = () => {
  return (
    <div className="min-h-[50vh] flex justify-start items-center flex-col text-text_primary mt-1 gap-1.5 w-full">
      <div className="flex justify-between w-full">
        <div className="flex gap-1.5">
          <ColBox val1="G" val2="P" />
          <ColBox val1="1" val2="IA" />
        </div>
        <ColBox val1="18" val2="O" />
      </div>
      <div className="flex justify-between w-full">
        <RowOneLeft />
        <RowOneRight />
      </div>
      <div className="flex justify-between w-full">
        <RowTwoLeft />
        <RowTwoRight />
      </div>
      <div className="flex justify-between w-full">
        <RowThree />
      </div>
      <div className="flex justify-between w-full">
        <RowFour />
      </div>
      <div className="flex justify-between w-full">
        <RowFive />
      </div>
      <div className="flex justify-center w-full">
        <RowSix />
      </div>
      <div className="flex justify-center w-full">
        <RowSeven />
      </div>
    </div>
  );
};

export default UpperTable;
