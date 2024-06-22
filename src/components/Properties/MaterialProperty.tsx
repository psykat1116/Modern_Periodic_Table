import React, { useState, useContext } from "react";
import DOMPurify from "dompurify";
import Link from "next/link";
import ListBox from "../ListBox";
import { MdContentCopy, MdCheck } from "react-icons/md";
import { MaterialProperties } from "@/types/ElementTypes";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

const BulkYoungModulusOptions = [
  { name: "GPa(10<sup>9</sup>N/m<sup>2</sup>)" },
  { name: "dyne/cm<sup>2</sup>" },
];

const BrinnelVickerShearModulusOptions = [
  { name: "MPa(10<sup>6</sup>N/m<sup>2</sup>)" },
  { name: "dyne/cm<sup>2</sup>" },
];

const DensityOptions = [
  { name: "Kg/m<sup>3</sup>" },
  { name: "g/cm<sup>3</sup>" },
];

const ThermalConductivityOptions = [
  { name: "Wm<sup>-1</sup>K<sup>-1</sup>" },
  { name: "calcm<sup>-1</sup>s<sup>-1</sup>℃<sup>-1</sup>" },
];

const MaterialProperty = ({
  color,
  molar_volume,
  mohs_hardness,
  bulk_modulus,
  brinell_hardness,
  density,
  liquid_density,
  young_modulus,
  vickers_hardness,
  thermal_conductivity,
  sound_speed,
  poisson_ratio,
  refrective_index,
  shear_modulus,
}: MaterialProperties) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  const [isCopying, setIsCopying] = useState({
    color: false,
    molar_volume: false,
    mohs_hardness: false,
    bulk_modulus: false,
    brinell_hardness: false,
    density: false,
    liquid_density: false,
    young_modulus: false,
    vickers_hardness: false,
    thermal_conductivity: false,
    sound_speed: false,
    poisson_ratio: false,
    refrective_index: false,
    shear_modulus: false,
  });
  const [hardness, setHardness] = useState({
    shear_modulus: shear_modulus || 0,
    vickers_hardness: vickers_hardness || 0,
    brinell_hardness: brinell_hardness || 0,
  });
  const [thermal, setThermal] = useState(thermal_conductivity || 0);
  const [modulus, setModulus] = useState({
    bulk_modulus: bulk_modulus || 0,
    young_modulus: young_modulus || 0,
  });
  const [densitydata, setDensitydata] = useState({
    density: density || 0,
    liquid_density: liquid_density || 0,
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
      } shadow-lg rounded-sm bg-opacity-60 `}
    >
      <h1 className="text-xl">Material Property</h1>
      <div className="flex flex-col w-full justify-start items-start gap-3 mt-3">
        {color && (
          <div className="flex flex-row justify-start items-center w-full gap-2 max-md:flex-col">
            <Link
              className=" pr-2 py-1 rounded-[4px] w-[25%] text-sm max-md:w-full"
              href="/property/color"
            >
              Color
            </Link>
            <div
              className={`w-[75%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none max-md:w-full`}
            >
              <p>{color}</p>
              <button onClick={() => handleCopy(color, "color")}>
                {!isCopying.color ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
          </div>
        )}
        {molar_volume && (
          <div className="flex flex-row justify-start items-center w-full gap-2 max-md:flex-col">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[25%] text-sm max-md:w-full"
              href="/property/molar_volume"
            >
              Molar Volume
            </Link>
            <div
              className={`w-[55%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center max-md:w-full`}
            >
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(molar_volume),
                }}
              ></p>
              <button
                onClick={() =>
                  handleCopy(molar_volume.toString(), "molar_volume")
                }
              >
                {!isCopying.molar_volume ? (
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
                __html: DOMPurify.sanitize("m<sup>3</sup>/mol"),
              }}
            ></div>
          </div>
        )}
        {mohs_hardness && (
          <div className="flex flex-row justify-start items-center w-full gap-2 max-md:flex-col">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[25%] text-sm max-md:w-full"
              href="/property/mohs_scale"
            >
              Mohs Hardness
            </Link>
            <div
              className={`w-[75%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none max-md:w-full`}
            >
              <p>{mohs_hardness}</p>
              <button
                onClick={() =>
                  handleCopy(mohs_hardness.toString(), "mohs_hardness")
                }
              >
                {!isCopying.mohs_hardness ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
          </div>
        )}
        {bulk_modulus && (
          <div className="flex flex-row justify-start items-center w-full gap-2 max-md:flex-col">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[25%] text-sm max-md:w-full"
              href="/property/bulk_modulus"
            >
              Bulk Modulus
            </Link>
            <div
              className={`w-[55%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none max-md:w-full`}
            >
              <p>{modulus.bulk_modulus}</p>
              <button
                onClick={() =>
                  handleCopy(modulus.bulk_modulus.toString(), "bulk_modulus")
                }
              >
                {!isCopying.bulk_modulus ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
            <ListBox
              options={BulkYoungModulusOptions}
              category="Modulus"
              setModulus={setModulus}
              ModulusType="bulk_modulus"
            />
          </div>
        )}
        {brinell_hardness && (
          <div className="flex flex-row justify-start items-center w-full gap-2 max-md:flex-col">
            <Link
              className=" pr-2 py-1 rounded-[4px] w-[25%] text-sm max-md:w-full"
              href="/property/brinell_hardness"
            >
              Brinnel Hardness
            </Link>
            <div
              className={`w-[55%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none max-md:w-full`}
            >
              <p>{hardness.brinell_hardness}</p>
              <button
                onClick={() =>
                  handleCopy(
                    hardness.brinell_hardness.toString(),
                    "brinell_hardness"
                  )
                }
              >
                {!isCopying.brinell_hardness ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
            <ListBox
              options={BrinnelVickerShearModulusOptions}
              setHardness={setHardness}
              category="Hardness"
              HardnessType="brinell_hardness"
            />
          </div>
        )}
        {density && (
          <div className="flex flex-row justify-start items-center w-full gap-2 max-md:flex-col">
            <Link
              className=" pr-2 py-1 rounded-[4px] w-[25%] text-sm max-md:w-full"
              href="/property/density"
            >
              Density
            </Link>
            <div
              className={`w-[55%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none max-md:w-full`}
            >
              <p>{densitydata.density}</p>
              <button
                onClick={() =>
                  handleCopy(densitydata.density.toString(), "density")
                }
              >
                {!isCopying.density ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
            <ListBox
              options={DensityOptions}
              category="Density"
              setDensityData={setDensitydata}
              DensityType="density"
            />
          </div>
        )}
        {liquid_density && (
          <div className="flex flex-row justify-start items-center w-full gap-2 max-md:flex-col">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[25%] text-sm max-md:w-full"
              href="/property/liquid_density"
            >
              Liquid Density
            </Link>
            <div
              className={`w-[55%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none max-md:w-full`}
            >
              <p>{densitydata.liquid_density}</p>
              <button
                onClick={() =>
                  handleCopy(
                    densitydata.liquid_density.toString(),
                    "liquid_density"
                  )
                }
              >
                {!isCopying.liquid_density ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
            <ListBox
              options={DensityOptions}
              category="Density"
              setDensityData={setDensitydata}
              DensityType="liquid_density"
            />
          </div>
        )}
        {young_modulus && (
          <div className="flex flex-row justify-start items-center w-full gap-2 max-md:flex-col">
            <Link
              className=" pr-2 py-1 rounded-[4px] w-[25%] text-sm max-md:w-full"
              href="/property/young_modulus"
            >
              Young Modulus
            </Link>
            <div
              className={`w-[55%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none max-md:w-full`}
            >
              <p>{modulus.young_modulus}</p>
              <button
                onClick={() =>
                  handleCopy(modulus.young_modulus.toString(), "young_modulus")
                }
              >
                {!isCopying.young_modulus ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
            <ListBox
              options={BulkYoungModulusOptions}
              category="Modulus"
              setModulus={setModulus}
              ModulusType="young_modulus"
            />
          </div>
        )}
        {vickers_hardness && (
          <div className="flex flex-row justify-start items-center w-full gap-2 max-md:flex-col">
            <Link
              className=" pr-2 py-1 rounded-[4px] w-[25%] text-sm max-md:w-full"
              href="/property/vickers_hardness"
            >
              Vickers Hardness
            </Link>
            <div
              className={`w-[55%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none max-md:w-full`}
            >
              <p>{hardness.vickers_hardness}</p>
              <button
                onClick={() =>
                  handleCopy(
                    hardness.vickers_hardness.toString(),
                    "vickers_hardness"
                  )
                }
              >
                {!isCopying.vickers_hardness ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
            <ListBox
              options={BrinnelVickerShearModulusOptions}
              setHardness={setHardness}
              category="Hardness"
              HardnessType="vickers_hardness"
            />
          </div>
        )}
        {shear_modulus && (
          <div className="flex flex-row justify-start items-center w-full gap-2 max-md:flex-col">
            <Link
              className=" pr-2 py-1 rounded-[4px] w-[25%] text-sm max-md:w-full"
              href="/property/shear_modulus"
            >
              Shear Hardness
            </Link>
            <div
              className={`w-[55%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none max-md:w-full`}
            >
              <p>{hardness.shear_modulus}</p>
              <button
                onClick={() =>
                  handleCopy(hardness.shear_modulus.toString(), "shear_modulus")
                }
              >
                {!isCopying.shear_modulus ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
            <ListBox
              options={BrinnelVickerShearModulusOptions}
              setHardness={setHardness}
              category="Hardness"
              HardnessType="shear_modulus"
            />
          </div>
        )}
        {thermal_conductivity && (
          <div className="flex flex-row justify-start items-center w-full gap-2 max-md:flex-col">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[25%] text-sm max-md:w-full"
              href="/property/thermal_conductivity"
            >
              Thermal Conductivity
            </Link>
            <div
              className={`w-[55%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none max-md:w-full`}
            >
              <p>{thermal}</p>
              <button
                onClick={() =>
                  handleCopy(
                    thermal.toString(),
                    "thermal_conductivity"
                  )
                }
              >
                {!isCopying.thermal_conductivity ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
            <ListBox
              options={ThermalConductivityOptions}
              ThermalType="thermal_conductivity"
              category="Thermal"
              setThermal={setThermal}
            />
          </div>
        )}
        {sound_speed && (
          <div className="flex flex-row justify-start items-center w-full gap-2 max-md:flex-col">
            <Link
              className=" pr-2 py-1 rounded-[4px] w-[25%] text-sm max-md:w-full"
              href="/property/sound_speed"
            >
              Sound Speed
            </Link>
            <div
              className={`w-[55%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none max-md:w-full`}
            >
              <p>{sound_speed}</p>
              <button
                onClick={() =>
                  handleCopy(sound_speed.toString(), "sound_speed")
                }
              >
                {!isCopying.sound_speed ? (
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
                __html: DOMPurify.sanitize("ms<sup>-1</sup>"),
              }}
            ></div>
          </div>
        )}
        {poisson_ratio && (
          <div className="flex flex-row justify-start items-center w-full gap-2 max-md:flex-col">
            <Link
              className=" pr-2 py-1 rounded-[4px] w-[25%] text-sm max-md:w-full"
              href="/property/poisson_ratio"
            >
              Poisson Ratio
            </Link>
            <div
              className={`w-[75%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none max-md:w-full`}
            >
              <p>{poisson_ratio}</p>
              <button
                onClick={() =>
                  handleCopy(poisson_ratio.toString(), "poisson_ratio")
                }
              >
                {!isCopying.poisson_ratio ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
          </div>
        )}
        {refrective_index && (
          <div className="flex flex-row justify-start items-center w-full gap-2 max-md:flex-col">
            <Link
              className=" pr-2 py-1 rounded-[4px] w-[25%] text-sm max-md:w-full"
              href="/property/refractive_index"
            >
              Refractive Index
            </Link>
            <div
              className={`w-[75%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none max-md:w-full`}
            >
              <p>{refrective_index}</p>
              <button
                onClick={() =>
                  handleCopy(refrective_index.toString(), "refrective_index")
                }
              >
                {!isCopying.refrective_index ? (
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

export default MaterialProperty;
