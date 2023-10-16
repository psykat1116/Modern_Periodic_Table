import React from "react";
import ColBox from "./ColBox";
import RowOneLeft from "./RowOneLeft";
import RowOneRight from "./RowOneRight";
import RowTwoLeft from "./RowTwoLeft";
import RowTwoRight from "./RowTwoRight";
import RowThree from "./RowThree";
import RowFour from "./RowFour";
import RowFive from "./RowFive";
import RowSix from "./RowSix";
import RowSeven from "./RowSeven";

const UpperTable = () => {
  return (
    <div className="min-h-[50vh] flex justify-start items-center flex-col text-white mt-1 gap-1.5 w-full">
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
