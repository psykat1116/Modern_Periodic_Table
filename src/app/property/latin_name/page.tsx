"use client";
import React, { useContext } from "react";
import Navbar from "@/components/Navbar";
import LatinName from "@/components/Collection/LatinName";
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
import DynamicParticle from "@/components/DynamicParticle";

const Page = () => {
  if (typeof window !== "undefined") {
    window.document.title = `Latin Name of Elements`;
  }
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div
      className={`min-h-screen w-full flex flex-col justify-start items-center gap-2 ${
        theme === "dark" ? "bg-dark_primary" : "bg-light_primary"
      } justify-start items-center`}
    >
      <div className="absolute w-full min-h-screen">
        <DynamicParticle />
      </div>
      <Navbar />
      <div
        className={`w-full text-4xl flex justify-center items-center font-satisfy p-2 ${
          theme === "dark" ? " text-text_primary" : " text-text_secondary"
        }`}
      >
        Latin Name
      </div>
      <div
        className={`w-full grid grid-cols-3 px-2 pb-2 overflow-y-scroll gap-2 z-[5]`}
      >
        {RowOneElem.map((e) => {
          return (
            <LatinName
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              latin_name={e.overview.latin_name}
            />
          );
        })}
        {RowTwoElem.map((e) => {
          return (
            <LatinName
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              latin_name={e.overview.latin_name}
            />
          );
        })}
        {RowThreeElem.map((e) => {
          return (
            <LatinName
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              latin_name={e.overview.latin_name}
            />
          );
        })}
        {RowFourElem.map((e) => {
          return (
            <LatinName
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              latin_name={e.overview.latin_name}
            />
          );
        })}
        {RowFiveElem.map((e) => {
          return (
            <LatinName
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              latin_name={e.overview.latin_name}
            />
          );
        })}
        <LatinName
          name={RowSixElem[0].general_properties.name}
          atomic_number={RowSixElem[0].general_properties.atomic_number}
          symbol={RowSixElem[0].general_properties.symbol}
          latin_name={RowSixElem[0].overview.latin_name}
        />
        <LatinName
          name={RowSixElem[1].general_properties.name}
          atomic_number={RowSixElem[1].general_properties.atomic_number}
          symbol={RowSixElem[1].general_properties.symbol}
          latin_name={RowSixElem[1].overview.latin_name}
        />
        {LanthanideElem.map((e) => {
          return (
            <LatinName
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              latin_name={e.overview.latin_name}
            />
          );
        })}
        {RowSixElem.map((e, ind) => {
          return (
            ind > 1 && (
              <LatinName
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                latin_name={e.overview.latin_name}
              />
            )
          );
        })}
        <LatinName
          name={RowSevenElem[0].general_properties.name}
          atomic_number={RowSevenElem[0].general_properties.atomic_number}
          symbol={RowSevenElem[0].general_properties.symbol}
          latin_name={RowSevenElem[0].overview.latin_name}
        />
        <LatinName
          name={RowSevenElem[1].general_properties.name}
          atomic_number={RowSevenElem[1].general_properties.atomic_number}
          symbol={RowSevenElem[1].general_properties.symbol}
          latin_name={RowSevenElem[1].overview.latin_name}
        />
        {ActinideElem.map((e) => {
          return (
            <LatinName
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              latin_name={e.overview.latin_name}
            />
          );
        })}
        {RowSevenElem.map((e, ind) => {
          return (
            ind > 1 && (
              <LatinName
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                latin_name={e.overview.latin_name}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Page;
