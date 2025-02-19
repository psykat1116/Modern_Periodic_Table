"use client";
import React, { useContext } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { AdiabaticIndex } from "@/components/Collection";
import { ActinideElem } from "@/constant/ElementDetails/ActinideElem";
import { LanthanideElem } from "@/constant/ElementDetails/LanthanideElem";
import { RowFiveElem } from "@/constant/ElementDetails/RowFiveElem";
import { RowFourElem } from "@/constant/ElementDetails/RowFourElem";
import { RowThreeElem } from "@/constant/ElementDetails/RowThreeElem";
import { RowTwoElem } from "@/constant/ElementDetails/RowTwoElem";
import { RowOneElem } from "@/constant/ElementDetails/RowOneElem";
import { RowSixElem } from "@/constant/ElementDetails/RowSixElem";
import { RowSevenElem } from "@/constant/ElementDetails/RowSevenElem";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import { FaRegChartBar } from "react-icons/fa";

const Page = () => {
  if (typeof window !== "undefined") {
    window.document.title = `Covalent Radius of Elements`;
  }
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div
      className={`min-h-screen w-full flex flex-col justify-start items-center gap-2 ${
        theme === "dark" ? "bg-dark_primary" : "bg-light_primary"
      } justify-start items-center`}
    >
      <Navbar />
      <div
        className={`w-full z-[5] flex justify-between items-center p-2 ${
          theme === "dark" ? " text-text_primary" : " text-text_secondary"
        } text-2xl`}
      >
        <Link
          href="https://en.wikipedia.org/wiki/Heat_capacity_ratio"
          target="_blank"
          className="font-lora p-2 max-md:text-xl"
        >
          Adiabatic Index
        </Link>
        <Link
          href="/statistics/adiabatic_index"
          className={`p-2 ${
            theme === "dark" ? "bg-bg_dark" : "bg-bg_light"
          } rounded-sm shadow-md bg-opacity-70 backdrop-blur-sm`}
        >
          <FaRegChartBar className="cursor-pointer" />
        </Link>
      </div>
      <div
        className={`w-full grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 px-2 pb-2 overflow-y-scroll gap-2 z-[5]`}
      >
        {RowOneElem.map((e) => {
          return (
            e.thermodynamic_properties?.adiabatic_index && (
              <AdiabaticIndex
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                adiabatic_index={e.thermodynamic_properties.adiabatic_index}
              />
            )
          );
        })}
        {RowTwoElem.map((e) => {
          return (
            e.thermodynamic_properties?.adiabatic_index && (
              <AdiabaticIndex
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                adiabatic_index={e.thermodynamic_properties.adiabatic_index}
              />
            )
          );
        })}
        {RowThreeElem.map((e) => {
          return (
            e.thermodynamic_properties?.adiabatic_index && (
              <AdiabaticIndex
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                adiabatic_index={e.thermodynamic_properties.adiabatic_index}
              />
            )
          );
        })}
        {RowFourElem.map((e) => {
          return (
            e.thermodynamic_properties?.adiabatic_index && (
              <AdiabaticIndex
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                adiabatic_index={e.thermodynamic_properties.adiabatic_index}
              />
            )
          );
        })}
        {RowFiveElem.map((e) => {
          return (
            e.thermodynamic_properties?.adiabatic_index && (
              <AdiabaticIndex
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                adiabatic_index={e.thermodynamic_properties.adiabatic_index}
              />
            )
          );
        })}
        {RowSixElem[0].thermodynamic_properties && (
          <AdiabaticIndex
            name={RowSixElem[0].general_properties.name}
            atomic_number={RowSixElem[0].general_properties.atomic_number}
            symbol={RowSixElem[0].general_properties.symbol}
            adiabatic_index={
              RowSixElem[0].thermodynamic_properties.adiabatic_index
            }
          />
        )}
        {RowSixElem[1].thermodynamic_properties && (
          <AdiabaticIndex
            name={RowSixElem[1].general_properties.name}
            atomic_number={RowSixElem[1].general_properties.atomic_number}
            symbol={RowSixElem[1].general_properties.symbol}
            adiabatic_index={
              RowSixElem[1].thermodynamic_properties.adiabatic_index
            }
          />
        )}
        {LanthanideElem.map((e) => {
          return (
            e.thermodynamic_properties?.adiabatic_index && (
              <AdiabaticIndex
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                adiabatic_index={e.thermodynamic_properties.adiabatic_index}
              />
            )
          );
        })}
        {RowSixElem.map((e, ind) => {
          return (
            ind > 1 &&
            e.thermodynamic_properties?.adiabatic_index && (
              <AdiabaticIndex
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                adiabatic_index={e.thermodynamic_properties.adiabatic_index}
              />
            )
          );
        })}
        {RowSevenElem[0].thermodynamic_properties && (
          <AdiabaticIndex
            name={RowSevenElem[0].general_properties.name}
            atomic_number={RowSevenElem[0].general_properties.atomic_number}
            symbol={RowSevenElem[0].general_properties.symbol}
            adiabatic_index={
              RowSevenElem[0].thermodynamic_properties.adiabatic_index
            }
          />
        )}
        {RowSevenElem[1].thermodynamic_properties && (
          <AdiabaticIndex
            name={RowSevenElem[1].general_properties.name}
            atomic_number={RowSevenElem[1].general_properties.atomic_number}
            symbol={RowSevenElem[1].general_properties.symbol}
            adiabatic_index={
              RowSevenElem[1].thermodynamic_properties.adiabatic_index
            }
          />
        )}
        {ActinideElem.map((e) => {
          return (
            e.thermodynamic_properties?.adiabatic_index && (
              <AdiabaticIndex
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                adiabatic_index={e.thermodynamic_properties.adiabatic_index}
              />
            )
          );
        })}
        {RowSevenElem.map((e, ind) => {
          return (
            ind > 1 &&
            e.thermodynamic_properties?.adiabatic_index && (
              <AdiabaticIndex
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                adiabatic_index={e.thermodynamic_properties.adiabatic_index}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Page;
