import React, { useContext, useState } from "react";
import Link from "next/link";
import { ThermodynamicProperties } from "@/types/ElementTypes";
import { MdCheck, MdContentCopy } from "react-icons/md";
import DOMPurify from "dompurify";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import ListBox from "../ListBox";
import { motion } from "framer-motion";

const SpecificHeatOptions = [
  { name: "JKg<sup>-1</sup>K<sup>-1</sup>" },
  { name: "Jg<sup>-1</sup>℃<sup>-1</sup>" },
];

const VaporizationHeatOptions = [
  { name: "kJmol<sup>-1</sup>" },
  { name: "Jg<sup>-1</sup>" },
  { name: "KJ/Kg" },
];

const FusionHeatOptions = [
  { name: "kJmol<sup>-1</sup>" },
  { name: "Cal/g" },
  { name: "J/Kg" },
];

const TemperatureOptions = [
  { name: "Celcius (℃)" },
  { name: "Feranheit (℉)" },
  { name: "Kelvin (K)" },
];

const ThermalExpansionOptions = [
  { name: "K<sup>-1</sup>" },
  { name: "℃<sup>-1</sup>" },
  { name: "℉<sup>-1</sup>" },
];

const ThermoProperty = ({
  boiling_point,
  melting_point,
  phase,
  fusion_heat,
  specific_heat,
  vaporization_heat,
  thermal_expansion,
  neel_point,
  adiabatic_index,
}: ThermodynamicProperties) => {
  const [isCopying, setIsCopying] = useState({
    boiling_point: false,
    melting_point: false,
    phase: false,
    fusion_heat: false,
    specific_heat: false,
    vaporization_heat: false,
    thermal_expansion: false,
    neel_point: false,
    adiabatic_index: false,
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
    <motion.div
      className={`w-full flex flex-col justify-start items-start p-4 ${
        theme === "dark"
          ? "text-text_primary bg-bg_dark"
          : "bg-bg_light text-text_secondary"
      } shadow-lg rounded-sm bg-opacity-60 backdrop-blur-require`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.25, ease: "easeInOut", delay: 0.6 }}
    >
      <h1 className="text-xl">Thermodynamic Properties</h1>
      <div className="flex flex-col w-full justify-start items-start gap-3 mt-3">
        {boiling_point && (
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[20%]"
              href="/property/boiling_point"
            >
              Boiling Point
            </Link>
            <div
              className={`w-[60%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p>{boiling_point}</p>
              <button
                onClick={() => handleCopy(boiling_point, "boiling_point")}
              >
                {!isCopying.boiling_point ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
            <ListBox options={TemperatureOptions} />
          </div>
        )}
        {melting_point && (
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[20%]"
              href="/property/melting_point"
            >
              Melting Point
            </Link>
            <div
              className={`w-[60%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p>{melting_point}</p>
              <button
                onClick={() => handleCopy(melting_point, "melting_point")}
              >
                {!isCopying.melting_point ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
            <ListBox options={TemperatureOptions} />
          </div>
        )}
        {phase && (
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[20%]"
              href="/property/phase"
            >
              Phase
            </Link>
            <div
              className={`w-[80%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p>{phase}</p>
              <button onClick={() => handleCopy(phase, "phase")}>
                {!isCopying.phase ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
          </div>
        )}
        {fusion_heat && (
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[20%]"
              href="/property/fusion_heat"
            >
              Fusion Heat
            </Link>
            <div
              className={`w-[60%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p>{fusion_heat}</p>
              <button
                onClick={() =>
                  handleCopy(fusion_heat.toString(), "fusion_heat")
                }
              >
                {!isCopying.fusion_heat ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
            <ListBox options={FusionHeatOptions} />
          </div>
        )}
        {specific_heat && (
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[20%]"
              href="/property/specific_heat"
            >
              Specific Heat
            </Link>
            <div
              className={`w-[60%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p>{specific_heat}</p>
              <button
                onClick={() =>
                  handleCopy(specific_heat.toString(), "specific_heat")
                }
              >
                {!isCopying.specific_heat ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
            <ListBox options={VaporizationHeatOptions} />
          </div>
        )}
        {vaporization_heat && (
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[20%]"
              href="/property/vaporization_heat"
            >
              Vaporization Heat
            </Link>
            <div
              className={`w-[60%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p>{vaporization_heat}</p>
              <button
                onClick={() =>
                  handleCopy(vaporization_heat.toString(), "vaporization_heat")
                }
              >
                {!isCopying.vaporization_heat ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
            <ListBox options={SpecificHeatOptions} />
          </div>
        )}
        {thermal_expansion && (
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[20%]"
              href="/property/thermal_expansion"
            >
              Thermal Expansion
            </Link>
            <div
              className={`w-[60%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(thermal_expansion),
                }}
              ></p>
              <button
                onClick={() =>
                  handleCopy(thermal_expansion.toString(), "thermal_expansion")
                }
              >
                {!isCopying.thermal_expansion ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
            <ListBox options={ThermalExpansionOptions} />
          </div>
        )}
        {neel_point && (
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[20%]"
              href="/property/neel_point"
            >
              Neel Point (K)
            </Link>
            <div
              className={`w-[60%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p>{neel_point}</p>
              <button
                onClick={() => handleCopy(neel_point.toString(), "neel_point")}
              >
                {!isCopying.neel_point ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
            <ListBox options={TemperatureOptions} />
          </div>
        )}
        {adiabatic_index && (
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[20%]"
              href="/property/adiabatic_index"
            >
              Adiabatic Index
            </Link>
            <div
              className={`w-[80%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p>{adiabatic_index}</p>
              <button
                onClick={() =>
                  handleCopy(adiabatic_index.toString(), "adiabatic_index")
                }
              >
                {!isCopying.adiabatic_index ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ThermoProperty;
