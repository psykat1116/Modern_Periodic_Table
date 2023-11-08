import React, { useState, useContext } from "react";
import Link from "next/link";
import { MaterialProperties } from "@/types/ElementTypes";
import { MdContentCopy, MdCheck } from "react-icons/md";
import DOMPurify from "dompurify";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import ListBox from "../ListBox";

const MolarVolumeOptions = [
  { name: "m<sup>3</sup>/mol" },
  { name: "cm<sup>3</sup>/mol" },
];

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
      } shadow-lg rounded-sm`}
    >
      <h1 className="text-xl">Material Property</h1>
      <div className="flex flex-col w-full justify-start items-start gap-3 mt-3">
        {color && (
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <p className=" pr-2 py-1 rounded-[4px] w-[25%] text-sm">Color</p>
            <div
              className={`w-[75%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
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
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[25%] text-sm"
              href="https://en.wikipedia.org/wiki/Molar_volume"
            >
              Molar Volume
            </Link>
            <div
              className={`w-[55%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center`}
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
            <ListBox options={MolarVolumeOptions} />
          </div>
        )}
        {mohs_hardness && (
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[25%] text-sm"
              href="https://en.wikipedia.org/wiki/Mohs_scale"
            >
              Mohs Hardness
            </Link>
            <div
              className={`w-[75%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
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
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[25%] text-sm"
              href="https://en.wikipedia.org/wiki/Bulk_modulus"
            >
              Bulk Modulus
            </Link>
            <div
              className={`w-[55%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p>{bulk_modulus}</p>
              <button
                onClick={() =>
                  handleCopy(bulk_modulus.toString(), "bulk_modulus")
                }
              >
                {!isCopying.bulk_modulus ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
            <ListBox options={BulkYoungModulusOptions} />
          </div>
        )}
        {brinell_hardness && (
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <Link
              className=" pr-2 py-1 rounded-[4px] w-[25%] text-sm"
              href="https://en.wikipedia.org/wiki/Brinell_scale"
            >
              Brinnel Hardness
            </Link>
            <div
              className={`w-[55%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p>{brinell_hardness}</p>
              <button
                onClick={() =>
                  handleCopy(brinell_hardness.toString(), "brinell_hardness")
                }
              >
                {!isCopying.brinell_hardness ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
            <ListBox options={BrinnelVickerShearModulusOptions} />
          </div>
        )}
        {density && (
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <Link
              className=" pr-2 py-1 rounded-[4px] w-[25%] text-sm"
              href="https://en.wikipedia.org/wiki/Density"
            >
              Density
            </Link>
            <div
              className={`w-[55%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p>{density}</p>
              <button onClick={() => handleCopy(density.toString(), "density")}>
                {!isCopying.density ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
            <ListBox options={DensityOptions} />
          </div>
        )}
        {liquid_density && (
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[25%] text-sm"
              href="https://en.wikipedia.org/wiki/Density"
            >
              Liquid Density
            </Link>
            <div
              className={`w-[55%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p>{liquid_density}</p>
              <button
                onClick={() =>
                  handleCopy(liquid_density.toString(), "liquid_density")
                }
              >
                {!isCopying.liquid_density ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
            <ListBox options={DensityOptions} />
          </div>
        )}
        {young_modulus && (
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <Link
              className=" pr-2 py-1 rounded-[4px] w-[25%] text-sm"
              href="https://en.wikipedia.org/wiki/Young%27s_modulus"
            >
              Young Modulus
            </Link>
            <div
              className={`w-[55%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p>{young_modulus}</p>
              <button
                onClick={() =>
                  handleCopy(young_modulus.toString(), "young_modulus")
                }
              >
                {!isCopying.young_modulus ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
            <ListBox options={BulkYoungModulusOptions} />
          </div>
        )}
        {vickers_hardness && (
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <Link
              className=" pr-2 py-1 rounded-[4px] w-[25%] text-sm"
              href="https://en.wikipedia.org/wiki/Vickers_hardness_test"
            >
              Vickers Hardness
            </Link>
            <div
              className={`w-[55%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p>{vickers_hardness}</p>
              <button
                onClick={() =>
                  handleCopy(vickers_hardness.toString(), "vickers_hardness")
                }
              >
                {!isCopying.vickers_hardness ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
            <ListBox options={BrinnelVickerShearModulusOptions} />
          </div>
        )}
        {shear_modulus && (
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <Link
              className=" pr-2 py-1 rounded-[4px] w-[25%] text-sm"
              href="https://en.wikipedia.org/wiki/Shear_modulus"
            >
              Shear Hardness
            </Link>
            <div
              className={`w-[55%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p>{shear_modulus}</p>
              <button
                onClick={() =>
                  handleCopy(shear_modulus.toString(), "shear_modulus")
                }
              >
                {!isCopying.shear_modulus ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
            <ListBox options={BrinnelVickerShearModulusOptions} />
          </div>
        )}
        {thermal_conductivity && (
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[25%] text-sm"
              href="https://en.wikipedia.org/wiki/Thermal_conductivity_and_resistivity"
            >
              Thermal Conductivity
            </Link>
            <div
              className={`w-[55%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p>{thermal_conductivity}</p>
              <button
                onClick={() =>
                  handleCopy(
                    thermal_conductivity.toString(),
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
            <ListBox options={ThermalConductivityOptions} />
          </div>
        )}
        {sound_speed && (
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <Link
              className=" pr-2 py-1 rounded-[4px] w-[25%] text-sm"
              href="https://en.wikipedia.org/wiki/Speed_of_sound"
            >
              Sound Speed
            </Link>
            <div
              className={`w-[55%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
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
              }`}
            >
              ms<sup>-1</sup>
            </div>
          </div>
        )}
        {poisson_ratio && (
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <Link
              className=" pr-2 py-1 rounded-[4px] w-[25%] text-sm"
              href="https://en.wikipedia.org/wiki/Poisson%27s_ratio"
            >
              Poisson Ratio
            </Link>
            <div
              className={`w-[75%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
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
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <Link
              className=" pr-2 py-1 rounded-[4px] w-[25%] text-sm"
              href="https://en.wikipedia.org/wiki/Refractive_index"
            >
              Refractive Index
            </Link>
            <div
              className={`w-[75%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
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
