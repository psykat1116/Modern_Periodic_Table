import React from "react";
import { Particles } from "@/types/ElementTypes";

const Particles = ({ electrons, protons, neutrons }: Particles) => {
  return (
    <div className="flex justify-between items-start w-full gap-2 text-[#cfbbbb]">
      <div className="w-1/3 flex flex-col justify-between items-center p-2 bg-[#1b1a1a] rounded-sm shadow-md">
        <h1 className="mb-2 text-lg">Electrons</h1>
        <p>{electrons}</p>
      </div>
      <div className="w-1/3 flex flex-col justify-between items-center p-2 bg-[#1b1a1a] rounded-sm shadow-md">
        <h1 className="mb-2 text-lg">Protons</h1>
        <p>{protons}</p>
      </div>
      <div className="w-1/3 flex flex-col justify-between items-center p-2 bg-[#1b1a1a] rounded-sm shadow-md">
        <h1 className="mb-2 text-lg">Neutrons</h1>
        <p>{neutrons}</p>
      </div>
    </div>
  );
};

export default Particles;
