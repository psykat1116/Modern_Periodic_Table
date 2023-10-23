import React, { useState, useContext } from "react";
import { MaterialProperties } from "@/types/ElementTypes";
import { MdContentCopy, MdCheck } from "react-icons/md";
import DOMPurify from "dompurify";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

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
      } shadow-md rounded-sm`}
    >
      <h1 className="text-xl">Material Property</h1>
      <div className="flex flex-col w-full justify-start items-start">
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">Color</p>
          <div
            className={`w-[70%] border ${
              theme === "dark" ? "border-text_primary" : "border-text_secondary"
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
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">
            Molar Volume (m<sup>3</sup>mol<sup>-1</sup>)
          </p>
          <div
            className={`w-[70%] border ${
              theme === "dark" ? "border-text_primary" : "border-text_secondary"
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
        </div>
        {mohs_hardness && (
          <div className="flex flex-row justify-start items-center w-full mt-3">
            <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">
              Mohs Hardness
            </p>
            <div
              className={`w-[70%] border ${
                theme === "dark"
                  ? "border-text_primary"
                  : "border-text_secondary"
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
          <div className="flex flex-row justify-start items-center w-full mt-3">
            <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">
              Bulk Modulus (GPa)
            </p>
            <div
              className={`w-[70%] border ${
                theme === "dark"
                  ? "border-text_primary"
                  : "border-text_secondary"
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
          </div>
        )}
        {brinell_hardness && (
          <div className="flex flex-row justify-start items-center w-full mt-3">
            <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">
              Brinnel Hardness (MPa)
            </p>
            <div
              className={`w-[70%] border ${
                theme === "dark"
                  ? "border-text_primary"
                  : "border-text_secondary"
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
          </div>
        )}
        {density && (
          <div className="flex flex-row justify-start items-center w-full mt-3">
            <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">
              Density (Kgm<sup>-3</sup>)
            </p>
            <div
              className={`w-[70%] border ${
                theme === "dark"
                  ? "border-text_primary"
                  : "border-text_secondary"
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
          </div>
        )}
        {liquid_density && (
          <div className="flex flex-row justify-start items-center w-full mt-3">
            <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">
              Liquid Density (Kgm<sup>-3</sup>)
            </p>
            <div
              className={`w-[70%] border ${
                theme === "dark"
                  ? "border-text_primary"
                  : "border-text_secondary"
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
          </div>
        )}
        {young_modulus && (
          <div className="flex flex-row justify-start items-center w-full mt-3">
            <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">
              Young Modulus (GPa)
            </p>
            <div
              className={`w-[70%] border ${
                theme === "dark"
                  ? "border-text_primary"
                  : "border-text_secondary"
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
          </div>
        )}
        {vickers_hardness && (
          <div className="flex flex-row justify-start items-center w-full mt-3">
            <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">
              Vickers Hardness (MPa)
            </p>
            <div
              className={`w-[70%] border ${
                theme === "dark"
                  ? "border-text_primary"
                  : "border-text_secondary"
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
          </div>
        )}
        {shear_modulus && (
          <div className="flex flex-row justify-start items-center w-full mt-3">
            <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">
              Shear Hardness (MPa)
            </p>
            <div
              className={`w-[70%] border ${
                theme === "dark"
                  ? "border-text_primary"
                  : "border-text_secondary"
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
          </div>
        )}
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%] text-sm">
            Thermal Conductivity (Wm<sup>-1</sup>K<sup>-1</sup>)
          </p>
          <div
            className={`w-[70%] border ${
              theme === "dark" ? "border-text_primary" : "border-text_secondary"
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
        </div>
        {sound_speed && (
          <div className="flex flex-row justify-start items-center w-full mt-3">
            <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">
              Sound Speed (ms<sup>-1</sup>)
            </p>
            <div
              className={`w-[70%] border ${
                theme === "dark"
                  ? "border-text_primary"
                  : "border-text_secondary"
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
          </div>
        )}
        {poisson_ratio && (
          <div className="flex flex-row justify-start items-center w-full mt-3">
            <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">
              Poisson Ratio
            </p>
            <div
              className={`w-[70%] border ${
                theme === "dark"
                  ? "border-text_primary"
                  : "border-text_secondary"
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
          <div className="flex flex-row justify-start items-center w-full mt-3">
            <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">
              Refractive Index
            </p>
            <div
              className={`w-[70%] border ${
                theme === "dark"
                  ? "border-text_primary"
                  : "border-text_secondary"
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
