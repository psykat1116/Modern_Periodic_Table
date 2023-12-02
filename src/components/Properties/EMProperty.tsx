import React, { useState, useContext } from "react";
import Link from "next/link";
import { ElectromagneticProperties } from "@/types/ElementTypes";
import { MdCheck, MdContentCopy } from "react-icons/md";
import DOMPurify from "dompurify";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import ListBox from "../ListBox";

const TempOptions = [
  { name: "Celecius (℃)" },
  { name: "Feranheit (℉)" },
  { name: "Kelvin (K)" },
];

const MassMagnetOptions = [
  { name: "m<sup>3</sup>/Kg" },
  { name: "cm<sup>3</sup>/g" },
];

const ResistivityOptions = [{ name: "m•Ohm" }, { name: "cm•Ohm" }];

const EMProperty = ({
  electrical_conductivity,
  electrical_type,
  resistivity,
  curie_point,
  magnetic_type,
  mass_magnetic_suspectibility,
  molar_magnetic_suspectibility,
  volume_magnetic_suspectibility,
  superconducting_point,
}: ElectromagneticProperties) => {
  const [isCopying, setIsCopying] = useState({
    electrical_conductivity: false,
    electrical_type: false,
    resistivity: false,
    curie_point: false,
    magnetic_type: false,
    mass_magnetic_suspectibility: false,
    molar_magnetic_suspectibility: false,
    volume_magnetic_suspectibility: false,
    superconducting_point: false,
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
      } shadow-lg rounded-sm bg-opacity-60 backdrop-blur-require`}
    >
      <h1 className="text-xl">Electromagnetic property</h1>
      <div className="flex flex-col w-full justify-start items-start gap-3 mt-3">
        {electrical_type && (
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[30%] text-sm"
              href="/property/electrical_type"
            >
              Electrical Type
            </Link>
            <div
              className={`w-[70%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p>{electrical_type}</p>
              <button
                onClick={() => handleCopy(electrical_type, "electrical_type")}
              >
                {!isCopying.electrical_type ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
          </div>
        )}
        {magnetic_type && (
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[30%] text-sm"
              href="/property/magnetic_type"
            >
              Magnetic Type
            </Link>
            <div
              className={`w-[70%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p>{magnetic_type}</p>
              <button
                onClick={() => handleCopy(magnetic_type, "magnetic_type")}
              >
                {!isCopying.magnetic_type ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
          </div>
        )}
        {electrical_conductivity && (
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <Link
              className=" pr-2 py-1 rounded-[4px] w-[30%] text-sm"
              href="/property/electrical_conductivity"
            >
              Electrical Conductivity
            </Link>
            <div
              className={`w-[50%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              }  px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
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
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
            <div
              className={`w-[20%] px-2 py-2 text-sm rounded-[4px] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              }`}
            >
              Sm<sup>-1</sup>
            </div>
          </div>
        )}
        {resistivity && (
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <Link
              className=" pr-2 py-1 rounded-[4px] w-[30%] text-sm"
              href="/property/resistivity"
            >
              Resistivity
            </Link>
            <div
              className={`w-[50%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(resistivity),
                }}
              ></p>
              <button onClick={() => handleCopy(resistivity, "resistivity")}>
                {!isCopying.resistivity ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
            <ListBox options={ResistivityOptions} />
          </div>
        )}
        {curie_point && (
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[30%] text-sm"
              href="/property/curie_point"
            >
              Curie Point
            </Link>
            <div
              className={`w-[50%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p>{curie_point}</p>
              <button
                onClick={() =>
                  handleCopy(curie_point.toString(), "curie_point")
                }
              >
                {!isCopying.curie_point ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
            <ListBox options={TempOptions} />
          </div>
        )}
        {superconducting_point && (
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[30%] text-sm"
              href="/property/superconducting_point"
            >
              Superconducting Point
            </Link>
            <div
              className={`w-[50%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p>{superconducting_point}</p>
              <button
                onClick={() =>
                  handleCopy(
                    superconducting_point.toString(),
                    "superconducting_point"
                  )
                }
              >
                {!isCopying.superconducting_point ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
            <ListBox options={TempOptions} />
          </div>
        )}
        {mass_magnetic_suspectibility && (
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <Link
              className=" pr-2 py-1 rounded-[4px] w-[30%] text-sm"
              href="/property/mass_magnetic_suspectibility"
            >
              Mass Magnetic Suspectibility
            </Link>
            <div
              className={`w-[50%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center`}
            >
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
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
            <ListBox options={MassMagnetOptions} />
          </div>
        )}
        {molar_magnetic_suspectibility && (
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[30%] text-sm"
              href="/property/molar_magnetic_suspectibility"
            >
              Molar Magnetic Suspectibility
            </Link>
            <div
              className={`w-[50%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center`}
            >
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
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
            <div
              className={`w-[20%] px-2 py-2 text-sm rounded-[4px] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              }`}
            >
              m<sup>3</sup>/mol
            </div>
          </div>
        )}
        {volume_magnetic_suspectibility && (
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[30%] text-sm"
              href="/property/volume_magnetic_suspectibility"
            >
              Volume Magnetic Suspectibility
            </Link>
            <div
              className={`w-[70%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center`}
            >
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
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EMProperty;
