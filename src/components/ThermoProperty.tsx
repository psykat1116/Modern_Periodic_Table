import React, { useState } from "react";
import { ThermodynamicProperties } from "@/types/ElementTypes";
import { MdCheck, MdContentCopy } from "react-icons/md";

const ThermoProperty = ({
  boiling_point,
  melting_point,
  phase,
  fusion_heat,
  specific_heat,
  vaporization_heat,
  thermal_expansion,
}: ThermodynamicProperties) => {
  const [isCopying, setIsCopying] = useState({
    boiling_point: false,
    melting_point: false,
    phase: false,
    fusion_heat: false,
    specific_heat: false,
    vaporization_heat: false,
    thermal_expansion: false,
  });

  const handleCopy = (value: string, property: string) => {
    setIsCopying({ ...isCopying, [property]: true });
    navigator.clipboard.writeText(value);
    setTimeout(() => {
      setIsCopying({ ...isCopying, [property]: false });
    }, 500);
  };

  return (
    <div className="w-full flex flex-col justify-start items-start p-4 text-[#cfbbbb] bg-[#1b1a1a] shadow-md rounded-sm">
      <h1 className="text-xl">Thermodynamic Properties</h1>
      <div className="flex flex-col w-full justify-start items-start">
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 pr-2 py-1 rounded-[4px] w-[25%]">Boiling Point</p>
          <div className="w-[75%] border border-[#cfbbbb] px-2 py-1 rounded-[4px] flex justify-between items-center select-none">
            <p>{boiling_point}</p>
            <button onClick={() => handleCopy(boiling_point, "boiling_point")}>
              {!isCopying.boiling_point ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-500" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 pr-2 py-1 rounded-[4px] w-[25%]">Melting Point</p>
          <div className="w-[75%] border border-[#cfbbbb] px-2 py-1 rounded-[4px] flex justify-between items-center select-none">
            <p>{melting_point}</p>
            <button onClick={() => handleCopy(melting_point, "melting_point")}>
              {!isCopying.melting_point ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-500" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 pr-2 py-1 rounded-[4px] w-[25%]">Phase</p>
          <div className="w-[75%] border border-[#cfbbbb] px-2 py-1 rounded-[4px] flex justify-between items-center select-none">
            <p>{phase}</p>
            <button onClick={() => handleCopy(phase, "phase")}>
              {!isCopying.phase ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-500" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 pr-2 py-1 rounded-[4px] w-[25%]">Fusion Heat</p>
          <div className="w-[75%] border border-[#cfbbbb] px-2 py-1 rounded-[4px] flex justify-between items-center select-none">
            <p>{fusion_heat}</p>
            <button
              onClick={() => handleCopy(fusion_heat.toString(), "fusion_heat")}
            >
              {!isCopying.fusion_heat ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-500" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 pr-2 py-1 rounded-[4px] w-[25%]">Specific Heat</p>
          <div className="w-[75%] border border-[#cfbbbb] px-2 py-1 rounded-[4px] flex justify-between items-center select-none">
            <p>{specific_heat}</p>
            <button
              onClick={() =>
                handleCopy(specific_heat.toString(), "specific_heat")
              }
            >
              {!isCopying.specific_heat ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-500" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 pr-2 py-1 rounded-[4px] w-[25%]">
            Vaporization Heat
          </p>
          <div className="w-[75%] border border-[#cfbbbb] px-2 py-1 rounded-[4px] flex justify-between items-center select-none">
            <p>{vaporization_heat}</p>
            <button
              onClick={() =>
                handleCopy(vaporization_heat.toString(), "vaporization_heat")
              }
            >
              {!isCopying.vaporization_heat ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-500" />
              )}
            </button>
          </div>
        </div>
        {thermal_expansion && (
          <div className="flex flex-row justify-start items-center w-full mt-3">
            <p className="mr-5 pr-2 py-1 rounded-[4px] w-[25%]">
              Thermal Expansion
            </p>
            <div className="w-[75%] border border-[#cfbbbb] px-2 py-1 rounded-[4px] flex justify-between items-center select-none">
              <p>{thermal_expansion}</p>
              <button
                onClick={() =>
                  handleCopy(thermal_expansion.toString(), "thermal_expansion")
                }
              >
                {!isCopying.thermal_expansion ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-500" />
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThermoProperty;
