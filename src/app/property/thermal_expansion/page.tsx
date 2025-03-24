"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { FaRegChartBar } from "react-icons/fa";

import { ThermalExpansion } from "@/components/Collection";
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
          href="https://en.wikipedia.org/wiki/Thermal_expansion"
          className={cn(
            "font-poppins py-1 px-4 ml-1 text-base rounded-sm shadow-md bg-opacity-70 backdrop-blur-sm",
            theme === "dark" ? "bg-bg_dark" : "bg-bg_light"
          )}
          target="_blank"
        >
          Thermal Expansion
        </Link>
        <Link
          href="/"
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
            e.thermodynamic_properties?.thermal_expansion && (
              <ThermalExpansion
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                thermal_expansion={e.thermodynamic_properties.thermal_expansion}
              />
            )
          );
        })}
        {RowTwoElem.map((e) => {
          return (
            e.thermodynamic_properties?.thermal_expansion && (
              <ThermalExpansion
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                thermal_expansion={e.thermodynamic_properties.thermal_expansion}
              />
            )
          );
        })}
        {RowThreeElem.map((e) => {
          return (
            e.thermodynamic_properties?.thermal_expansion && (
              <ThermalExpansion
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                thermal_expansion={e.thermodynamic_properties.thermal_expansion}
              />
            )
          );
        })}
        {RowFourElem.map((e) => {
          return (
            e.thermodynamic_properties?.thermal_expansion && (
              <ThermalExpansion
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                thermal_expansion={e.thermodynamic_properties.thermal_expansion}
              />
            )
          );
        })}
        {RowFiveElem.map((e) => {
          return (
            e.thermodynamic_properties?.thermal_expansion && (
              <ThermalExpansion
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                thermal_expansion={e.thermodynamic_properties.thermal_expansion}
              />
            )
          );
        })}
        {RowSixElem[0].thermodynamic_properties?.thermal_expansion && (
          <ThermalExpansion
            name={RowSixElem[0].general_properties.name}
            atomic_number={RowSixElem[0].general_properties.atomic_number}
            symbol={RowSixElem[0].general_properties.symbol}
            thermal_expansion={
              RowSixElem[0].thermodynamic_properties.thermal_expansion
            }
          />
        )}
        {RowSixElem[1].thermodynamic_properties?.thermal_expansion && (
          <ThermalExpansion
            name={RowSixElem[1].general_properties.name}
            atomic_number={RowSixElem[1].general_properties.atomic_number}
            symbol={RowSixElem[1].general_properties.symbol}
            thermal_expansion={
              RowSixElem[1].thermodynamic_properties.thermal_expansion
            }
          />
        )}
        {LanthanideElem.map((e) => {
          return (
            e.thermodynamic_properties?.thermal_expansion && (
              <ThermalExpansion
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                thermal_expansion={e.thermodynamic_properties.thermal_expansion}
              />
            )
          );
        })}
        {RowSixElem.map((e, ind) => {
          return (
            ind > 1 &&
            e.thermodynamic_properties?.thermal_expansion && (
              <ThermalExpansion
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                thermal_expansion={e.thermodynamic_properties.thermal_expansion}
              />
            )
          );
        })}
        {RowSevenElem[0].thermodynamic_properties?.thermal_expansion && (
          <ThermalExpansion
            name={RowSevenElem[0].general_properties.name}
            atomic_number={RowSevenElem[0].general_properties.atomic_number}
            symbol={RowSevenElem[0].general_properties.symbol}
            thermal_expansion={
              RowSevenElem[0].thermodynamic_properties.thermal_expansion
            }
          />
        )}
        {RowSevenElem[1].thermodynamic_properties?.thermal_expansion && (
          <ThermalExpansion
            name={RowSevenElem[1].general_properties.name}
            atomic_number={RowSevenElem[1].general_properties.atomic_number}
            symbol={RowSevenElem[1].general_properties.symbol}
            thermal_expansion={
              RowSevenElem[1].thermodynamic_properties.thermal_expansion
            }
          />
        )}
        {ActinideElem.map((e) => {
          return (
            e.thermodynamic_properties?.thermal_expansion && (
              <ThermalExpansion
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                thermal_expansion={e.thermodynamic_properties.thermal_expansion}
              />
            )
          );
        })}
        {RowSevenElem.map((e, ind) => {
          return (
            ind > 1 &&
            e.thermodynamic_properties?.thermal_expansion && (
              <ThermalExpansion
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                thermal_expansion={e.thermodynamic_properties.thermal_expansion}
              />
            )
          );
        })}
      </div>
    </>
  );
};

export default Page;
