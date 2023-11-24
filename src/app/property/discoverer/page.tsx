"use client";
import React, { useContext } from "react";
import Navbar from "@/components/Navbar";
import Discoverer from "@/components/Collection/Discoverer";
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
    window.document.title = `Discoverer of Elements`;
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
        Discoverer
      </div>
      <div
        className={`w-full flex flex-col justify-start items-center px-2 pb-2 overflow-y-scroll gap-2 z-[5]`}
      >
        {RowOneElem.map((e) => {
          return (
            <Discoverer
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              discoverer={e.overview.discoverer}
            />
          );
        })}
        {RowTwoElem.map((e) => {
          return (
            <Discoverer
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              discoverer={e.overview.discoverer}
            />
          );
        })}
        {RowThreeElem.map((e) => {
          return (
            <Discoverer
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              discoverer={e.overview.discoverer}
            />
          );
        })}
        {RowFourElem.map((e) => {
          return (
            <Discoverer
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              discoverer={e.overview.discoverer}
            />
          );
        })}
        {RowFiveElem.map((e) => {
          return (
            <Discoverer
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              discoverer={e.overview.discoverer}
            />
          );
        })}
        <Discoverer
          name={RowSixElem[0].general_properties.name}
          atomic_number={RowSixElem[0].general_properties.atomic_number}
          symbol={RowSixElem[0].general_properties.symbol}
          discoverer={RowSixElem[0].overview.discoverer}
        />
        <Discoverer
          name={RowSixElem[1].general_properties.name}
          atomic_number={RowSixElem[1].general_properties.atomic_number}
          symbol={RowSixElem[1].general_properties.symbol}
          discoverer={RowSixElem[1].overview.discoverer}
        />
        {LanthanideElem.map((e) => {
          return (
            <Discoverer
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              discoverer={e.overview.discoverer}
            />
          );
        })}
        {RowSixElem.map((e, ind) => {
          return (
            ind > 1 && (
              <Discoverer
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                discoverer={e.overview.discoverer}
              />
            )
          );
        })}
        <Discoverer
          name={RowSevenElem[0].general_properties.name}
          atomic_number={RowSevenElem[0].general_properties.atomic_number}
          symbol={RowSevenElem[0].general_properties.symbol}
          discoverer={RowSevenElem[0].overview.discoverer}
        />
        <Discoverer
          name={RowSevenElem[1].general_properties.name}
          atomic_number={RowSevenElem[1].general_properties.atomic_number}
          symbol={RowSevenElem[1].general_properties.symbol}
          discoverer={RowSevenElem[1].overview.discoverer}
        />
        {ActinideElem.map((e) => {
          return (
            <Discoverer
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              discoverer={e.overview.discoverer}
            />
          );
        })}
        {RowSevenElem.map((e, ind) => {
          return (
            ind > 1 && (
              <Discoverer
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                discoverer={e.overview.discoverer}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Page;
