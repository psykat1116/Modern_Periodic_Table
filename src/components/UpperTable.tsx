import RowSix from "@/components/Rows/RowSix";
import ColBox from "@/components/Boxes/ColBox";
import RowFour from "@/components/Rows/RowFour";
import RowFive from "@/components/Rows/RowFive";
import RowThree from "@/components/Rows/RowThree";
import RowSeven from "@/components/Rows/RowSeven";
import RowOneLeft from "@/components/Rows/RowOneLeft";
import RowTwoLeft from "@/components/Rows/RowTwoLeft";
import RowOneRight from "@/components/Rows/RowOneRight";
import RowTwoRight from "@/components/Rows/RowTwoRight";

const UpperTable = () => {
  return (
    <div className="flex relative justify-start items-center flex-col text-text_primary mt-1 gap-1.5 overflow-scroll">
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
