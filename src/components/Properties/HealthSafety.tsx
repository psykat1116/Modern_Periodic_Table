import Link from "next/link";
import Image from "next/image";
import { useState, useContext } from "react";
import { MdContentCopy, MdCheck } from "react-icons/md";

import type { HealthSafety } from "@/types/ElementTypes";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

const HealthSafety = ({
  Hazard_class,
  dot_number,
  rtecs_number,
  nfpa_label,
}: HealthSafety) => {
  const [isCopying, setIsCopying] = useState({
    Hazard_class: false,
    dot_number: false,
    rtecs_number: false,
    nfpa_label: false,
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
      <h1 className="text-xl">Health & Safety</h1>
      <div className="flex flex-col w-full justify-start items-start gap-3 mt-3">
        {Hazard_class && (
          <div className="flex flex-row justify-start items-center w-full max-md:flex-col">
            <Link
              className=" pr-2 py-1 rounded-[4px] w-[20%] max-md:w-full"
              href="/property/hazard_class"
            >
              DOT Hazard Class
            </Link>
            <div
              className={`w-[80%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none max-md:w-full`}
            >
              <p>{Hazard_class}</p>
              <button
                onClick={() =>
                  handleCopy(Hazard_class.toString(), "Hazard_class")
                }
              >
                {!isCopying.Hazard_class ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
          </div>
        )}
        {dot_number && (
          <div className="flex flex-row justify-start items-center w-full max-md:flex-col">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[20%] max-md:w-full"
              href="/property/dot_number"
            >
              DOT Numbers
            </Link>
            <div
              className={`w-[80%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none max-md:w-full`}
            >
              <p>{dot_number}</p>
              <button
                onClick={() => handleCopy(dot_number.toString(), "dot_number")}
              >
                {!isCopying.dot_number ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
          </div>
        )}
        {rtecs_number && (
          <div className="flex flex-row justify-start items-center w-full max-md:flex-col">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[20%] max-md:w-full"
              href="/property/rtecs_number"
            >
              RTECS Number
            </Link>
            <div
              className={`w-[80%]  ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none max-md:w-full`}
            >
              <p>{rtecs_number}</p>
              <button
                onClick={() =>
                  handleCopy(rtecs_number.toString(), "rtecs_number")
                }
              >
                {!isCopying.rtecs_number ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
          </div>
        )}
        {nfpa_label && (
          <div className="flex flex-row justify-start items-start w-full max-md:flex-col">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[20%] max-md:w-full"
              href="https://en.wikipedia.org/wiki/NFPA_704"
            >
              NFPA Label
            </Link>
            <Image
              src={`/assets${nfpa_label}`}
              alt={`npfa_label_${nfpa_label}`}
              height={80}
              width={80}
              className="object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HealthSafety;
