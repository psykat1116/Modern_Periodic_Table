"use client";
import React, { useContext } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Resistivity } from "@/components/Collection";
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
      <Link
        href="https://en.wikipedia.org/wiki/Electrical_resistivity_and_conductivity"
        className={`w-full text-4xl flex justify-center items-center font-satisfy p-2 ${
          theme === "dark" ? " text-text_primary" : " text-text_secondary"
        } z-[5]`}
        target="_blank"
      >
        Resistivity
      </Link>
      <div
        className={`w-full grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 px-2 pb-2 overflow-y-scroll gap-2 z-[5]`}
      >
        {RowOneElem.map((e) => {
          return (
            e.electromagnetic_properties?.resistivity && (
              <Resistivity
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                resistivity={e.electromagnetic_properties.resistivity}
              />
            )
          );
        })}
        {RowTwoElem.map((e) => {
          return (
            e.electromagnetic_properties?.resistivity && (
              <Resistivity
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                resistivity={e.electromagnetic_properties.resistivity}
              />
            )
          );
        })}
        {RowThreeElem.map((e) => {
          return (
            e.electromagnetic_properties?.resistivity && (
              <Resistivity
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                resistivity={e.electromagnetic_properties.resistivity}
              />
            )
          );
        })}
        {RowFourElem.map((e) => {
          return (
            e.electromagnetic_properties?.resistivity && (
              <Resistivity
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                resistivity={e.electromagnetic_properties.resistivity}
              />
            )
          );
        })}
        {RowFiveElem.map((e) => {
          return (
            e.electromagnetic_properties?.resistivity && (
              <Resistivity
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                resistivity={e.electromagnetic_properties.resistivity}
              />
            )
          );
        })}
        {RowSixElem[0].electromagnetic_properties?.resistivity && (
          <Resistivity
            name={RowSixElem[0].general_properties.name}
            atomic_number={RowSixElem[0].general_properties.atomic_number}
            symbol={RowSixElem[0].general_properties.symbol}
            resistivity={RowSixElem[0].electromagnetic_properties.resistivity}
          />
        )}
        {RowSixElem[1].electromagnetic_properties?.resistivity && (
          <Resistivity
            name={RowSixElem[1].general_properties.name}
            atomic_number={RowSixElem[1].general_properties.atomic_number}
            symbol={RowSixElem[1].general_properties.symbol}
            resistivity={RowSixElem[1].electromagnetic_properties.resistivity}
          />
        )}
        {LanthanideElem.map((e) => {
          return (
            e.electromagnetic_properties?.resistivity && (
              <Resistivity
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                resistivity={e.electromagnetic_properties.resistivity}
              />
            )
          );
        })}
        {RowSixElem.map((e, ind) => {
          return (
            ind > 1 &&
            e.electromagnetic_properties?.resistivity && (
              <Resistivity
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                resistivity={e.electromagnetic_properties.resistivity}
              />
            )
          );
        })}
        {RowSevenElem[0].electromagnetic_properties?.resistivity && (
          <Resistivity
            name={RowSevenElem[0].general_properties.name}
            atomic_number={RowSevenElem[0].general_properties.atomic_number}
            symbol={RowSevenElem[0].general_properties.symbol}
            resistivity={RowSevenElem[0].electromagnetic_properties.resistivity}
          />
        )}
        {RowSevenElem[1].electromagnetic_properties?.resistivity && (
          <Resistivity
            name={RowSevenElem[1].general_properties.name}
            atomic_number={RowSevenElem[1].general_properties.atomic_number}
            symbol={RowSevenElem[1].general_properties.symbol}
            resistivity={RowSevenElem[1].electromagnetic_properties.resistivity}
          />
        )}
        {ActinideElem.map((e) => {
          return (
            e.electromagnetic_properties?.resistivity && (
              <Resistivity
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                resistivity={e.electromagnetic_properties.resistivity}
              />
            )
          );
        })}
        {RowSevenElem.map((e, ind) => {
          return (
            ind > 1 &&
            e.electromagnetic_properties?.resistivity && (
              <Resistivity
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                resistivity={e.electromagnetic_properties.resistivity}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Page;
