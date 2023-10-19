import React, { useState } from "react";
import { Reactivity } from "@/types/ElementTypes";
import { MdContentCopy, MdCheck } from "react-icons/md";

const Reactivity = ({
  electron_affinity,
  electronegativity,
  valence,
  ionization_energy,
}: Reactivity) => {
  const [isCopying, setIsCopying] = useState({
    electron_affinity: false,
    electronegativity: false,
    valence: false,
    ionization_energy: false,
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
      <h1 className="text-xl">Reactivity</h1>
      <div className="flex flex-col w-full justify-start items-start">
        {electron_affinity && (
          <div className="flex flex-row justify-start items-center w-full mt-3">
            <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%] text-sm">
              Electron Affinity (kJmol<sup>-1</sup>)
            </p>
            <div className="w-[70%] border border-[#cfbbbb] px-2 py-1 rounded-[4px] flex justify-between items-center select-none">
              <p>{electron_affinity}</p>
              <button
                onClick={() =>
                  handleCopy(electron_affinity.toString(), "electron_affinity")
                }
              >
                {!isCopying.electron_affinity ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-500" />
                )}
              </button>
            </div>
          </div>
        )}
        {electronegativity && (
          <div className="flex flex-row justify-start items-center w-full mt-3">
            <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">
              Electronegativity
            </p>
            <div className="w-[70%] border border-[#cfbbbb] px-2 py-1 rounded-[4px] flex justify-between items-center select-none">
              <p>{electronegativity}</p>
              <button
                onClick={() =>
                  handleCopy(electronegativity.toString(), "electronegativity")
                }
              >
                {!isCopying.electronegativity ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-500" />
                )}
              </button>
            </div>
          </div>
        )}
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%] text-sm">
            Ionization Energy (kJmol<sup>-1</sup>)
          </p>
          <div className="w-[70%] border border-[#cfbbbb] px-2 py-1 rounded-[4px] flex justify-between items-center select-none">
            <p>{ionization_energy}</p>
            <button
              onClick={() =>
                handleCopy(ionization_energy.toString(), "ionization_energy")
              }
            >
              {!isCopying.ionization_energy ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-500" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">Valence</p>
          <div className="w-[70%] border border-[#cfbbbb] px-2 py-1 rounded-[4px] flex justify-between items-center select-none">
            <p>{valence}</p>
            <button onClick={() => handleCopy(valence.toString(), "valence")}>
              {!isCopying.valence ? (
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

export default Reactivity;
