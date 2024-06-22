import React, { useContext, useState } from "react";
import Link from "next/link";
import { ThermodynamicProperties } from "@/types/ElementTypes";
import { MdCheck, MdContentCopy } from "react-icons/md";
import DOMPurify from "dompurify";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import ListBox from "../ListBox";
import { motion } from "framer-motion";

const TemperatureOptions = [
  { name: "Celcius (℃)" },
  { name: "Feranheit (℉)" },
  { name: "Kelvin (K)" },
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
  const { theme } = useContext(ThemeContext) as ThemeContextType;
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

  const [temp, setTemp] = useState({
    melting_point: melting_point || 0,
    boiling_point: boiling_point || 0,
    neel_point: neel_point || 0,
  });

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
          <div className="flex flex-row justify-start items-center w-full gap-2 max-md:flex-col">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[20%] max-md:w-full"
              href="/property/boiling_point"
            >
              Boiling Point
            </Link>
            <div
              className={`w-[60%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none max-md:w-full`}
            >
              <p>{temp.boiling_point}</p>
              <button
                onClick={() =>
                  handleCopy(temp.boiling_point.toString(), "boiling_point")
                }
              >
                {!isCopying.boiling_point ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
            <ListBox
              options={TemperatureOptions}
              Temptype="boiling_point"
              setTemp={setTemp}
              category="Temperature"
            />
          </div>
        )}
        {melting_point && (
          <div className="flex flex-row justify-start items-center w-full gap-2 max-md:flex-col">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[20%] max-md:w-full"
              href="/property/melting_point"
            >
              Melting Point
            </Link>
            <div
              className={`w-[60%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none max-md:w-full`}
            >
              <p>{temp.melting_point}</p>
              <button
                onClick={() =>
                  handleCopy(temp.melting_point.toString(), "melting_point")
                }
              >
                {!isCopying.melting_point ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
            <ListBox
              options={TemperatureOptions}
              Temptype="melting_point"
              setTemp={setTemp}
              category="Temperature"
            />
          </div>
        )}
        {phase && (
          <div className="flex flex-row justify-start items-center w-full gap-2 max-md:flex-col">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[20%] max-md:w-full"
              href="/property/phase"
            >
              Phase
            </Link>
            <div
              className={`w-[80%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none max-md:w-full`}
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
          <div className="flex flex-row justify-start items-center w-full gap-2 max-md:flex-col">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[20%] max-md:w-full"
              href="/property/fusion_heat"
            >
              Fusion Heat
            </Link>
            <div
              className={`w-[60%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none max-md:w-full`}
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
            <div
              className={`w-[20%] px-2 py-2 text-sm rounded-[4px] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } max-md:w-full`}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize("kJmol<sup>-1</sup>"),
              }}
            ></div>
          </div>
        )}
        {specific_heat && (
          <div className="flex flex-row justify-start items-center w-full gap-2 max-md:flex-col">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[20%] max-md:w-full"
              href="/property/specific_heat"
            >
              Specific Heat
            </Link>
            <div
              className={`w-[60%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none max-md:w-full`}
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
            <div
              className={`w-[20%] px-2 py-2 text-sm rounded-[4px] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } max-md:w-full`}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize("JKg<sup>-1</sup>K<sup>-1</sup>"),
              }}
            ></div>
          </div>
        )}
        {vaporization_heat && (
          <div className="flex flex-row justify-start items-center w-full gap-2  max-md:flex-col">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[20%] max-md:w-full"
              href="/property/vaporization_heat"
            >
              Vaporization Heat
            </Link>
            <div
              className={`w-[60%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none max-md:w-full`}
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
            <div
              className={`w-[20%] px-2 py-2 text-sm rounded-[4px] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } max-md:w-full`}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize("kJmol<sup>-1</sup>"),
              }}
            ></div>
          </div>
        )}
        {thermal_expansion && (
          <div className="flex flex-row justify-start items-center w-full gap-2 max-md:flex-col">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[20%] max-md:w-full"
              href="/property/thermal_expansion"
            >
              Thermal Expansion
            </Link>
            <div
              className={`w-[60%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none max-md:w-full`}
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
            <div
              className={`w-[20%] px-2 py-2 text-sm rounded-[4px] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } max-md:w-full`}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize("K<sup>-1</sup>"),
              }}
            ></div>
          </div>
        )}
        {neel_point && (
          <div className="flex flex-row justify-start items-center w-full gap-2 max-md:flex-col">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[20%] max-md:w-full"
              href="/property/neel_point"
            >
              Neel Point (K)
            </Link>
            <div
              className={`w-[60%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none max-md:w-full`}
            >
              <p>{temp.neel_point}</p>
              <button
                onClick={() =>
                  handleCopy(temp.neel_point.toString(), "neel_point")
                }
              >
                {!isCopying.neel_point ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
            <ListBox
              options={TemperatureOptions}
              Temptype="neel_point"
              category="Temperature"
              setTemp={setTemp}
            />
          </div>
        )}
        {adiabatic_index && (
          <div className="flex flex-row justify-start items-center w-full gap-2 max-md:flex-col">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[20%] max-md:w-full"
              href="/property/adiabatic_index"
            >
              Adiabatic Index
            </Link>
            <div
              className={`w-[80%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none max-md:w-full`}
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
