import React, { useState, useContext } from "react";
import Link from "next/link";
import { Reactivity } from "@/types/ElementTypes";
import { MdContentCopy, MdCheck } from "react-icons/md";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import ListBox from "../ListBox";

const EnergyOptions = [{ name: "kJ/mol" }, { name: "kCal/mol" }];

const Reactivity = ({
  electron_affinity,
  electronegativity,
  valence,
  ionization_energy,
}: Reactivity) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  const [isCopying, setIsCopying] = useState({
    electron_affinity: false,
    electronegativity: false,
    valence: false,
    ionization_energy: false,
  });
  const [atomEnergy, setAtomEnergy] = useState({
    electron_affinity: electron_affinity || 0,
    ionization_energy: ionization_energy || 0,
  });
  const handleCopy = (value: string, property: string) => {
    setIsCopying({ ...isCopying, [property]: true });
    navigator.clipboard.writeText(value);
    setTimeout(() => {
      setIsCopying({ ...isCopying, [property]: false });
    }, 500);
  };
  return (
    <div
      className={`w-full flex flex-col justify-start items-start p-4 ${
        theme === "dark"
          ? "text-text_primary bg-bg_dark"
          : "bg-bg_light text-text_secondary"
      } shadow-lg rounded-sm bg-opacity-60 backdrop-blur-require`}
    >
      <h1 className="text-xl">Reactivity</h1>
      <div className="flex flex-col w-full justify-start items-start gap-3 mt-3">
        {electron_affinity && (
          <div className="flex flex-row justify-start items-center w-full gap-2 max-md:flex-col">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[20%] text-sm max-md:w-full"
              href="/property/electron_affinity"
            >
              Electron Affinity
            </Link>
            <div
              className={`w-[60%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none max-md:w-full`}
            >
              <p>{atomEnergy.electron_affinity}</p>
              <button
                onClick={() =>
                  handleCopy(
                    atomEnergy.electron_affinity.toString(),
                    "electron_affinity"
                  )
                }
              >
                {!isCopying.electron_affinity ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
            <ListBox
              options={EnergyOptions}
              category="AtomEnergy"
              setAtomEnergy={setAtomEnergy}
              AtomEnergyType="electron_affinity"
            />
          </div>
        )}
        {ionization_energy && (
          <div className="flex flex-row justify-start items-center w-full gap-2 max-md:flex-col">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[20%] text-sm max-md:w-full"
              href="/property/ionization_energy"
            >
              Ionization Energy
            </Link>
            <div
              className={`w-[60%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none max-md:w-full`}
            >
              <p>{atomEnergy.ionization_energy}</p>
              <button
                onClick={() =>
                  handleCopy(
                    atomEnergy.ionization_energy.toString(),
                    "ionization_energy"
                  )
                }
              >
                {!isCopying.ionization_energy ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
            <ListBox
              options={EnergyOptions}
              setAtomEnergy={setAtomEnergy}
              AtomEnergyType="ionization_energy"
              category="AtomEnergy"
            />
          </div>
        )}
        {electronegativity && (
          <div className="flex flex-row justify-start items-center w-full gap-2 max-md:flex-col">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[20%] text-sm max-md:w-full"
              href="/property/electronegativity"
            >
              Electronegativity
            </Link>
            <div
              className={`w-[80%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none max-md:w-full`}
            >
              <p>{electronegativity}</p>
              <button
                onClick={() =>
                  handleCopy(electronegativity.toString(), "electronegativity")
                }
              >
                {!isCopying.electronegativity ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
          </div>
        )}
        <div className="flex flex-row justify-start items-center w-full gap-2 max-md:flex-col">
          <Link
            className="pr-2 py-1 rounded-[4px] w-[20%] text-sm max-md:w-full"
            href="/property/valence"
          >
            Valence
          </Link>
          <div
            className={`w-[80%]  ${
              theme === "dark"
                ? "bg-bg_dark_placeholder"
                : "bg-bg_light_placeholder"
            } px-2 py-1 rounded-[4px] flex justify-between items-center select-none max-md:w-full`}
          >
            <p>{valence}</p>
            <button onClick={() => handleCopy(valence.toString(), "valence")}>
              {!isCopying.valence ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-700" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reactivity;
