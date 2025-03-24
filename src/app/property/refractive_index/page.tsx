"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { FaRegChartBar } from "react-icons/fa";

import { RefractiveIndex } from "@/components/Collection";
import { RowSixElem } from "@/constant/ElementDetails/RowSixElem";
import { RowOneElem } from "@/constant/ElementDetails/RowOneElem";
import { RowTwoElem } from "@/constant/ElementDetails/RowTwoElem";
import { RowFiveElem } from "@/constant/ElementDetails/RowFiveElem";
import { RowFourElem } from "@/constant/ElementDetails/RowFourElem";
import { ActinideElem } from "@/constant/ElementDetails/ActinideElem";
import { RowThreeElem } from "@/constant/ElementDetails/RowThreeElem";
import { RowSevenElem } from "@/constant/ElementDetails/RowSevenElem";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import { LanthanideElem } from "@/constant/ElementDetails/LanthanideElem";

const Page = () => {
  if (typeof window !== "undefined") {
    window.document.title = `Covalent Radius of Elements`;
  }

  const { theme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <>
      <div
        className={cn(
          "w-full flex justify-between items-center text-2xl pr-4 pl-1",
          theme === "dark" ? " text-text_primary" : " text-text_secondary"
        )}
      >
        <Link
          href="https://en.wikipedia.org/wiki/Refractive_index"
          className={cn(
            "font-poppins py-1 px-4 ml-1 text-base rounded-sm shadow-md bg-opacity-70 backdrop-blur-sm",
            theme === "dark" ? "bg-bg_dark" : "bg-bg_light"
          )}
          target="_blank"
        >
          Refractive Index
        </Link>
        <Link
          href="/statistics/refrective_index"
          className={cn(
            "p-1.5 rounded-sm shadow-md bg-opacity-70 backdrop-blur-sm",
            theme === "dark" ? "bg-bg_dark" : "bg-bg_light"
          )}
        >
          <FaRegChartBar className="cursor-pointer" size={23} />
        </Link>
      </div>
      <div
        className={`w-full grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 px-2 pb-2 overflow-y-scroll gap-2 z-[5]`}
      >
        {RowOneElem.map((e) => {
          return (
            e.material_properties?.refrective_index && (
              <RefractiveIndex
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                refrective_index={e.material_properties.refrective_index}
              />
            )
          );
        })}
        {RowTwoElem.map((e) => {
          return (
            e.material_properties?.refrective_index && (
              <RefractiveIndex
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                refrective_index={e.material_properties.refrective_index}
              />
            )
          );
        })}
        {RowThreeElem.map((e) => {
          return (
            e.material_properties?.refrective_index && (
              <RefractiveIndex
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                refrective_index={e.material_properties.refrective_index}
              />
            )
          );
        })}
        {RowFourElem.map((e) => {
          return (
            e.material_properties?.refrective_index && (
              <RefractiveIndex
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                refrective_index={e.material_properties.refrective_index}
              />
            )
          );
        })}
        {RowFiveElem.map((e) => {
          return (
            e.material_properties?.refrective_index && (
              <RefractiveIndex
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                refrective_index={e.material_properties.refrective_index}
              />
            )
          );
        })}
        {RowSixElem[0].material_properties?.refrective_index && (
          <RefractiveIndex
            name={RowSixElem[0].general_properties.name}
            atomic_number={RowSixElem[0].general_properties.atomic_number}
            symbol={RowSixElem[0].general_properties.symbol}
            refrective_index={
              RowSixElem[0].material_properties.refrective_index
            }
          />
        )}
        {RowSixElem[1].material_properties?.refrective_index && (
          <RefractiveIndex
            name={RowSixElem[1].general_properties.name}
            atomic_number={RowSixElem[1].general_properties.atomic_number}
            symbol={RowSixElem[1].general_properties.symbol}
            refrective_index={
              RowSixElem[1].material_properties.refrective_index
            }
          />
        )}
        {LanthanideElem.map((e) => {
          return (
            e.material_properties?.refrective_index && (
              <RefractiveIndex
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                refrective_index={e.material_properties.refrective_index}
              />
            )
          );
        })}
        {RowSixElem.map((e, ind) => {
          return (
            ind > 1 &&
            e.material_properties?.refrective_index && (
              <RefractiveIndex
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                refrective_index={e.material_properties.refrective_index}
              />
            )
          );
        })}
        {RowSevenElem[0].material_properties?.thermal_conductivity && (
          <RefractiveIndex
            name={RowSevenElem[0].general_properties.name}
            atomic_number={RowSevenElem[0].general_properties.atomic_number}
            symbol={RowSevenElem[0].general_properties.symbol}
            refrective_index={
              RowSevenElem[0].material_properties.refrective_index
            }
          />
        )}
        {RowSevenElem[1].material_properties?.refrective_index && (
          <RefractiveIndex
            name={RowSevenElem[1].general_properties.name}
            atomic_number={RowSevenElem[1].general_properties.atomic_number}
            symbol={RowSevenElem[1].general_properties.symbol}
            refrective_index={
              RowSevenElem[1].material_properties.refrective_index
            }
          />
        )}
        {ActinideElem.map((e) => {
          return (
            e.material_properties?.refrective_index && (
              <RefractiveIndex
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                refrective_index={e.material_properties.refrective_index}
              />
            )
          );
        })}
        {RowSevenElem.map((e, ind) => {
          return (
            ind > 1 &&
            e.material_properties?.refrective_index && (
              <RefractiveIndex
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                refrective_index={e.material_properties.refrective_index}
              />
            )
          );
        })}
      </div>
    </>
  );
};

export default Page;
