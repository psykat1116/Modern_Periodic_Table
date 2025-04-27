import Link from "next/link";
import DOMPurify from "dompurify";
import { useState, useContext } from "react";
import { MdContentCopy, MdCheck } from "react-icons/md";

import type { NeuclearPropertiesType } from "@/types/ElementTypes";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

interface NProperty {
  property: NeuclearPropertiesType;
  name?: string;
}

const NeuclearProperty = ({ property, name }: NProperty) => {
  const {
    radioactive,
    half_life,
    lifetime,
    neutron_cross_section,
    neutron_mass_absorption,
    decay_mode,
    isotopes,
    stable,
    quantum_numbers,
  } = property;
  const [isCopying, setIsCopying] = useState({
    radioactive: false,
    half_life: false,
    lifetime: false,
    neutron_cross_section: false,
    neutron_mass_absorption: false,
    decay_mode: false,
    quantum_numbers: false,
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
      <h1 className="text-xl">Neuclear Properties</h1>
      <div className="flex flex-col w-full justify-start items-start gap-3 mt-3">
        <div className="flex flex-row justify-start items-center w-full max-md:flex-col">
          <Link
            className="pr-2 py-1 rounded-[4px] w-[25%] max-md:w-full"
            href="/property/radioactive"
          >
            Radioactive
          </Link>
          <div
            className={`w-[75%]  ${
              theme === "dark"
                ? "bg-bg_dark_placeholder"
                : "bg-bg_light_placeholder"
            } px-2 py-1 rounded-[4px] flex justify-between items-center select-none max-md:w-full`}
          >
            <p>{radioactive}</p>
            <button
              onClick={() => handleCopy(radioactive.toString(), "radioactive")}
            >
              {!isCopying.radioactive ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-700" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center w-full max-md:flex-col">
          <Link
            className="pr-2 py-1 rounded-[4px] w-[25%] max-md:w-full"
            href="/property/half_life"
          >
            Half Life(s)
          </Link>
          <div
            className={`w-[75%]  ${
              theme === "dark"
                ? "bg-bg_dark_placeholder"
                : "bg-bg_light_placeholder"
            } px-2 py-1 rounded-[4px] flex justify-between items-center select-none max-md:w-full`}
          >
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(half_life),
              }}
            ></p>
            <button
              onClick={() => handleCopy(half_life.toString(), "half_life")}
            >
              {!isCopying.half_life ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-700" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center w-full max-md:flex-col">
          <Link
            className="pr-2 py-1 rounded-[4px] w-[25%] max-md:w-full"
            href="/property/lifetime"
          >
            Lifetime(s)
          </Link>
          <div
            className={`w-[75%]  ${
              theme === "dark"
                ? "bg-bg_dark_placeholder"
                : "bg-bg_light_placeholder"
            } px-2 py-1 rounded-[4px] flex justify-between items-center select-none max-md:w-full`}
          >
            <p
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(lifetime) }}
            ></p>
            <button onClick={() => handleCopy(lifetime.toString(), "lifetime")}>
              {!isCopying.lifetime ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-700" />
              )}
            </button>
          </div>
        </div>
        {neutron_cross_section && (
          <div className="flex flex-row justify-start items-center w-full max-md:flex-col">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[25%] max-md:w-full"
              href="/property/neutron_cross_section"
            >
              Neutron Cross Section
            </Link>
            <div
              className={`w-[75%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none max-md:w-full`}
            >
              <p>{neutron_cross_section}</p>
              <button
                onClick={() =>
                  handleCopy(
                    neutron_cross_section.toString(),
                    "neutron_cross_section"
                  )
                }
              >
                {!isCopying.neutron_cross_section ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
          </div>
        )}
        {neutron_mass_absorption && (
          <div className="flex flex-row justify-start items-center w-full max-md:flex-col">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[25%] max-md:w-full"
              href="/property/neutron_mass_absorption"
            >
              Neutron Mass Absorption
            </Link>
            <div
              className={`w-[75%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none max-md:w-full`}
            >
              <p>{neutron_mass_absorption}</p>
              <button
                onClick={() =>
                  handleCopy(
                    neutron_mass_absorption.toString(),
                    "neutron_mass_absorption"
                  )
                }
              >
                {!isCopying.neutron_mass_absorption ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
          </div>
        )}
        {decay_mode && (
          <div className="flex flex-row justify-start items-center w-full max-md:flex-col">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[25%] max-md:w-full"
              href="/property/decay_mode"
            >
              Decay Mode
            </Link>
            <div
              className={`w-[75%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none max-md:w-full`}
            >
              <p>{decay_mode}</p>
              <button onClick={() => handleCopy(decay_mode, "decay_mode")}>
                {!isCopying.decay_mode ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
          </div>
        )}
        {quantum_numbers && (
          <div className="flex flex-row justify-start items-center w-full max-md:flex-col">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[25%] max-md:w-full"
              href="/property/quantum_number"
            >
              Quantum Numbers
            </Link>
            <div
              className={`w-[75%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none max-md:w-full`}
            >
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(quantum_numbers),
                }}
              ></p>
              <button
                onClick={() => handleCopy(quantum_numbers, "quantum_numbers")}
              >
                {!isCopying.quantum_numbers ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
          </div>
        )}
        <div className="flex flex-row justify-start items-start w-full max-md:flex-col">
          <Link
            className="pr-2 py-1 rounded-[4px] w-[25%] max-md:w-full"
            href="/property/isotopes"
          >
            Known Isotopes
          </Link>
          <div
            className={`w-[75%] py-1 rounded-[4px] grid grid-cols-12 gap-2 select-none max-md:w-full max-md:grid-cols-5`}
          >
            {isotopes.map((elem) => {
              return (
                <p
                  className={`h-[35px] w-[35px] flex justify-center items-center ${
                    theme === "dark"
                      ? "bg-bg_dark_placeholder"
                      : "bg-bg_light_placeholder"
                  } rounded-full text-xs`}
                  key={elem}
                >
                  <sup>{elem}</sup>
                  {name}
                </p>
              );
            })}
          </div>
        </div>
        {stable && (
          <div className="flex flex-row justify-start items-start w-full max-md:flex-col">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[25%] max-md:w-full"
              href="/property/stable_isotope"
            >
              Stable Isotopes
            </Link>
            <div
              className={`w-[75%] py-1 rounded-[4px] grid grid-cols-12 gap-2 select-none max-md:w-full max-md:grid-cols-5`}
            >
              {stable.map((elem) => {
                return (
                  <p
                    className={`h-[35px] w-[35px] flex justify-center items-center ${
                      theme === "dark"
                        ? "bg-bg_dark_placeholder"
                        : "bg-bg_light_placeholder"
                    } rounded-full text-xs`}
                    key={elem}
                  >
                    <sup>{elem}</sup>
                    {name}
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

export default NeuclearProperty;
