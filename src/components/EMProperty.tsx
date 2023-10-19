import React, { useState } from "react";
import { ElectromagneticProperties } from "@/types/ElementTypes";
import { MdCheck, MdContentCopy } from "react-icons/md";
import DOMPurify from "dompurify";

const EMProperty = ({
  electrical_conductivity,
  electrical_type,
  resisitivity,
  curie_point,
  magnetic_type,
  mass_magnetic_suspectibility,
  molar_magnetic_suspectibility,
  volume_magnetic_suspectibility,
}: ElectromagneticProperties) => {
  const [isCopying, setIsCopying] = useState({
    electrical_conductivity: false,
    electrical_type: false,
    resisitivity: false,
    curie_point: false,
    magnetic_type: false,
    mass_magnetic_suspectibility: false,
    molar_magnetic_suspectibility: false,
    volume_magnetic_suspectibility: false,
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
      <h1 className="text-xl">Electromagnetic Properties</h1>
      <div className="flex flex-col w-full justify-start items-start">
        {electrical_conductivity && (
          <div className="flex flex-row justify-start items-center w-full mt-3">
            <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">
              Electrical Conductivity (Sm<sup>-1</sup>)
            </p>
            <div className="w-[70%] border border-[#cfbbbb] px-2 py-1 rounded-[4px] flex justify-between items-center select-none">
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(electrical_conductivity),
                }}
              ></p>
              <button
                onClick={() =>
                  handleCopy(electrical_conductivity, "electrical_conductivity")
                }
              >
                {!isCopying.electrical_conductivity ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-500" />
                )}
              </button>
            </div>
          </div>
        )}
        {electrical_type && (
          <div className="flex flex-row justify-start items-center w-full mt-3">
            <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">
              Electrical Type
            </p>
            <div className="w-[70%] border border-[#cfbbbb] px-2 py-1 rounded-[4px] flex justify-between items-center select-none">
              <p>{electrical_type}</p>
              <button
                onClick={() => handleCopy(electrical_type, "electrical_type")}
              >
                {!isCopying.electrical_type ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-500" />
                )}
              </button>
            </div>
          </div>
        )}
        {resisitivity && (
          <div className="flex flex-row justify-start items-center w-full mt-3">
            <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">
              Resistivity (Ohm m)
            </p>
            <div className="w-[70%] border border-[#cfbbbb] px-2 py-1 rounded-[4px] flex justify-between items-center select-none">
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(resisitivity),
                }}
              ></p>
              <button onClick={() => handleCopy(resisitivity, "resisitivity")}>
                {!isCopying.resisitivity ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-500" />
                )}
              </button>
            </div>
          </div>
        )}
        {curie_point && (
          <div className="flex flex-row justify-start items-center w-full mt-3">
            <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">
              Curie Point (K)
            </p>
            <div className="w-[70%] border border-[#cfbbbb] px-2 py-1 rounded-[4px] flex justify-between items-center select-none">
              <p>{curie_point}</p>
              <button
                onClick={() =>
                  handleCopy(curie_point.toString(), "curie_point")
                }
              >
                {!isCopying.curie_point ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-500" />
                )}
              </button>
            </div>
          </div>
        )}
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">Magnetic Type</p>
          <div className="w-[70%] border border-[#cfbbbb] px-2 py-1 rounded-[4px] flex justify-between items-center select-none">
            <p>{magnetic_type}</p>
            <button onClick={() => handleCopy(magnetic_type, "magnetic_type")}>
              {!isCopying.magnetic_type ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-500" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%] text-sm">
            Mass Magnetic Suspectibility (m<sup>3</sup>kg<sup>-1</sup>)
          </p>
          <div className="w-[70%] border border-[#cfbbbb] px-2 py-1 rounded-[4px] flex justify-between items-center">
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(mass_magnetic_suspectibility),
              }}
            ></p>
            <button
              onClick={() =>
                handleCopy(
                  mass_magnetic_suspectibility,
                  "mass_magnetic_suspectibility"
                )
              }
            >
              {!isCopying.mass_magnetic_suspectibility ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-500" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%] text-sm">
            Molar Magnetic Suspectibility (m<sup>3</sup>mol<sup>-1</sup>)
          </p>
          <div className="w-[70%] border border-[#cfbbbb] px-2 py-1 rounded-[4px] flex justify-between items-center">
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(molar_magnetic_suspectibility),
              }}
            ></p>
            <button
              onClick={() =>
                handleCopy(
                  molar_magnetic_suspectibility,
                  "molar_magnetic_suspectibility"
                )
              }
            >
              {!isCopying.magnetic_type ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-500" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%] text-sm">
            Volume Magnetic Suspectibility
          </p>
          <div className="w-[70%] border border-[#cfbbbb] px-2 py-1 rounded-[4px] flex justify-between items-center">
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(volume_magnetic_suspectibility),
              }}
            ></p>
            <button
              onClick={() =>
                handleCopy(
                  volume_magnetic_suspectibility,
                  "volume_magnetic_suspectibility"
                )
              }
            >
              {!isCopying.volume_magnetic_suspectibility ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-500" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMProperty;
