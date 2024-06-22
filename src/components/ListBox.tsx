import React, { useEffect } from "react";
import { Fragment, useState, useContext } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiMiniChevronUpDown } from "react-icons/hi2";
import { BiCheck } from "react-icons/bi";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import DOMPurify from "dompurify";
import { optionTypes } from "@/types/BoxTypes";
import { ConvertTemp } from "@/constant/UnitConverter/Temp";
import { useParams } from "next/navigation";
import { ConvertEnergy } from "@/constant/UnitConverter/AtomEnergy";
import { ConvertHardness } from "@/constant/UnitConverter/Hardness";

interface ListBoxProps {
  options: optionTypes[];
  Temptype?:
    | "boiling_point"
    | "melting_point"
    | "neel_point"
    | "curie_point"
    | "superconducting_point";
  AtomEnergyType?: "ionization_energy" | "electron_affinity";
  HardnessType?: "shear_modulus" | "vickers_hardness" | "brinell_hardness";
  setTemp?: React.Dispatch<
    React.SetStateAction<{
      melting_point: number;
      boiling_point: number;
      neel_point: number;
    }>
  >;
  setEMTemp?: React.Dispatch<
    React.SetStateAction<{
      curie_point: number;
      superconducting_point: number;
    }>
  >;
  setAtomEnergy?: React.Dispatch<
    React.SetStateAction<{
      electron_affinity: number;
      ionization_energy: number;
    }>
  >;
  setHardness?: React.Dispatch<
    React.SetStateAction<{
      shear_modulus: number;
      vickers_hardness: number;
      brinell_hardness: number;
    }>
  >;
  category?: string;
}

const ListBox: React.FC<ListBoxProps> = ({
  options,
  Temptype = "boiling_point",
  setTemp,
  category = "Temperature",
  setEMTemp,
  AtomEnergyType = "ionization_energy",
  setAtomEnergy,
  HardnessType = "shear_modulus",
  setHardness,
}) => {
  const params = useParams();
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  const [selected, setSelected] = useState(options[0]);

  useEffect(() => {
    if (category === "Temperature") {
      let newTemp = ConvertTemp({
        id: parseInt(params.id as string),
        type: Temptype,
      });
      if (!newTemp) return;
      if (selected.name === "Feranheit (℉)") {
        newTemp = (newTemp * 9) / 5 + 32;
      } else if (selected.name === "Kelvin (K)") {
        newTemp = newTemp + 273.15;
      }
      setTemp?.((prev) => ({
        ...prev,
        [Temptype]: newTemp,
      }));
      setEMTemp?.((prev) => ({
        ...prev,
        [Temptype]: newTemp,
      }));
    } else if (category === "AtomEnergy") {
      let newAtomEnergy = ConvertEnergy({
        type: AtomEnergyType,
        id: parseInt(params.id as string),
      });
      if (!newAtomEnergy) return;
      if (selected.name === "kCal/mol") {
        newAtomEnergy = newAtomEnergy / 4.184;
      }
      setAtomEnergy?.((prev) => ({
        ...prev,
        [AtomEnergyType]: newAtomEnergy,
      }));
    } else if (category === "Hardness") {
      let newHardness = ConvertHardness({
        type: HardnessType,
        id: parseInt(params.id as string),
      });
      if (!newHardness) return;
      if (selected.name === "dyne/cm<sup>2</sup>") {
        newHardness = newHardness * 10000000;
      }
      setHardness?.((prev) => ({
        ...prev,
        [HardnessType]: newHardness,
      }));
    }
  }, [selected]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative w-[20%] text-sm max-md:w-full">
        <Listbox.Button
          className={`relative w-full cursor-pointer px-2 py-2 rounded-[4px] ${
            theme === "dark"
              ? "bg-bg_dark_placeholder"
              : "bg-bg_light_placeholder"
          } focus:outline-0 text-left`}
        >
          <span
            className="block truncate"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(selected.name),
            }}
          ></span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <HiMiniChevronUpDown
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options
            className={`absolute mt-1 z-10 max-h-60 w-full overflow-auto rounded-md ${
              theme === "dark"
                ? "bg-bg_dark_placeholder"
                : "bg-bg_light_placeholder"
            } py-2 text-base focus:outline-none sm:text-sm`}
          >
            {options.map((person, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                    active
                      ? theme === "dark"
                        ? "bg-black text-text_primary"
                        : "bg-amber-100 text-text_secondary"
                      : theme === "dark"
                      ? "text-text_primary"
                      : "text-text_secondary"
                  }`
                }
                value={person}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(person.name),
                      }}
                    ></span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <BiCheck
                          className={`h-5 w-5 ${
                            theme === "dark"
                              ? "text-text_primary"
                              : "text-text_secondary"
                          }`}
                          aria-hidden="true"
                        />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default ListBox;
