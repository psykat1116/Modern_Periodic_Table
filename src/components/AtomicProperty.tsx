import React, { useState, useContext } from "react";
import { AtomicProperties } from "@/types/ElementTypes";
import DOMPurify from "dompurify";
import { MdContentCopy, MdCheck } from "react-icons/md";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

const AtomicProperty = ({
  atomic_weight,
  oxidation_states,
  electron_shell_configuration,
  electron_configuration,
  gas_atom_multiplicities,
  atomic_radius,
  covalent_radius,
  van_der_walls_radius,
  crystall_structure,
}: AtomicProperties) => {
  const [isCopying, setIsCopying] = useState({
    atomic_weight: false,
    oxidation_states: false,
    electron_shell_configuration: false,
    electron_configuration: false,
    gas_atom_multiplicities: false,
    atomic_radius: false,
    covalent_radius: false,
    van_der_walls_radius: false,
    crystall_structure: false,
  });
  const { theme } = useContext(ThemeContext) as ThemeContextType;
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
      } shadow-md rounded-sm`}
    >
      <h1 className="text-xl">Atomic Properties</h1>
      <div className="flex flex-col w-full justify-start items-start">
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%] text-sm">
            Atomic Weight{", "}u(gmol<sup>-1</sup>)
          </p>
          <div
            className={`w-[70%] border ${
              theme === "dark" ? "border-text_primary" : "border-text_secondary"
            } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
          >
            <p>{atomic_weight}</p>
            <button
              onClick={() =>
                handleCopy(atomic_weight.toString(), "atomic_weight")
              }
            >
              {!isCopying.atomic_weight ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-700" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%] text-sm">
            Electron Shell Configuration
          </p>
          <div
            className={`w-[70%] border ${
              theme === "dark" ? "border-text_primary" : "border-text_secondary"
            } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
          >
            <p>{electron_shell_configuration}</p>
            <button
              onClick={() =>
                handleCopy(
                  electron_shell_configuration.toString(),
                  "electron_shell_configuration"
                )
              }
            >
              {!isCopying.electron_shell_configuration ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-700" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">
            Electron Configuration
          </p>
          <div
            className={`w-[70%] border ${
              theme === "dark" ? "border-text_primary" : "border-text_secondary"
            } px-2 py-1 rounded-[4px] flex justify-between items-center`}
          >
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(electron_configuration),
              }}
            ></p>
            <button
              onClick={() =>
                handleCopy(
                  electron_configuration.toString(),
                  "electron_configuration"
                )
              }
            >
              {!isCopying.electron_configuration ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-700" />
              )}
            </button>
          </div>
        </div>
        {gas_atom_multiplicities && (
          <div className="flex flex-row justify-start items-center w-full mt-3">
            <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">
              Gas Atomic Multiplicities
            </p>
            <div
              className={`w-[70%] border ${
                theme === "dark"
                  ? "border-text_primary"
                  : "border-text_secondary"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p>{gas_atom_multiplicities}</p>
              <button
                onClick={() =>
                  handleCopy(
                    gas_atom_multiplicities.toString(),
                    "gas_atom_multiplicities"
                  )
                }
              >
                {!isCopying.gas_atom_multiplicities ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
          </div>
        )}
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">
            Atomic Radius(Pm)
          </p>
          <div
            className={`w-[70%] border ${
              theme === "dark" ? "border-text_primary" : "border-text_secondary"
            } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
          >
            <p>{atomic_radius}</p>
            <button
              onClick={() =>
                handleCopy(atomic_radius.toString(), "atomic_radius")
              }
            >
              {!isCopying.atomic_radius ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-700" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">
            Covalent Radius(Pm)
          </p>
          <div
            className={`w-[70%] border ${
              theme === "dark" ? "border-text_primary" : "border-text_secondary"
            } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
          >
            <p>{covalent_radius}</p>
            <button
              onClick={() =>
                handleCopy(covalent_radius.toString(), "covalent_radius")
              }
            >
              {!isCopying.covalent_radius ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-700" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">
            Van Der Walls Radius(Pm)
          </p>
          <div
            className={`w-[70%] border ${
              theme === "dark" ? "border-text_primary" : "border-text_secondary"
            } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
          >
            <p>{van_der_walls_radius}</p>
            <button
              onClick={() =>
                handleCopy(
                  van_der_walls_radius.toString(),
                  "van_der_walls_radius"
                )
              }
            >
              {!isCopying.van_der_walls_radius ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-700" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">
            Crystall Structure
          </p>
          <div
            className={`w-[70%] border ${
              theme === "dark" ? "border-text_primary" : "border-text_secondary"
            } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
          >
            <p>{crystall_structure}</p>
            <button
              onClick={() =>
                handleCopy(crystall_structure.toString(), "crystall_structure")
              }
            >
              {!isCopying.crystall_structure ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-700" />
              )}
            </button>
          </div>
        </div>
        {oxidation_states && (
          <div className="flex flex-row justify-start items-center w-full mt-3">
            <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">
              Oxidation States
            </p>
            <div className="w-[70%] py-1 flex justify-start items-center select-none">
              {oxidation_states.map((state) => {
                return (
                  <p
                    className={`mr-2 h-[30px] w-[30px] flex justify-center items-center border ${
                      theme === "dark"
                        ? "border-text_primary"
                        : "border-text_secondary"
                    } rounded-full text-sm`}
                    key={state}
                  >
                    {state}
                  </p>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AtomicProperty;
