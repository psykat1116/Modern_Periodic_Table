import React from "react";
import { GeneralProperties } from "@/types/ElementTypes";

const GeneralInfo = ({
  atomic_number,
  group,
  period,
  block,
  cas_number,
}: GeneralProperties) => {
  return (
    <div className="w-full flex flex-col justify-start items-start p-4 text-[#cfbbbb] bg-[#1b1a1a] shadow-md rounded-sm mb-2">
      <h1 className="text-xl">General Properties</h1>
      <div className="flex flex-col w-full justify-start items-start">
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 px-2 py-1 rounded-[4px] w-[25%]">Atomic Number</p>
          <p className="w-[75%] border border-[#cfbbbb] px-2 py-1 rounded-[4px]">
            {atomic_number}
          </p>
        </div>
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 px-2 py-1 rounded-[4px] w-[25%]">Group</p>
          <p className="w-[75%] border border-[#cfbbbb] px-2 py-1 rounded-[4px]">
            {group}
          </p>
        </div>
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 px-2 py-1 rounded-[4px] w-[25%]">Period</p>
          <p className="w-[75%] border border-[#cfbbbb] px-2 py-1 rounded-[4px]">
            {period}
          </p>
        </div>
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 px-2 py-1 rounded-[4px] w-[25%]">Block</p>
          <p className="w-[75%] border border-[#cfbbbb] px-2 py-1 rounded-[4px]">
            {block}
          </p>
        </div>
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 px-2 py-1 rounded-[4px] w-[25%]">CAS Number</p>
          <p className="w-[75%] border border-[#cfbbbb] px-2 py-1 rounded-[4px]">
            {cas_number}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
