"use client";
import React, { useContext } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Allotrope from "@/components/Collection/Allotrope";
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
    window.document.title = `Allotropes of Elements`;
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
      <Link
        target="_blank"
        href="https://en.wikipedia.org/wiki/Allotropy"
        className={`w-full text-4xl flex justify-center items-center font-satisfy p-2 ${
          theme === "dark" ? " text-text_primary" : " text-text_secondary"
        } z-[5]`}
      >
        Allotropes
      </Link>
      <div
        className={`w-full flex flex-col justify-start items-center px-2 pb-2 overflow-y-scroll gap-2`}
      >
        {RowOneElem.map((e) => {
          return (
            <Allotrope
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              allotropes={e.general_properties.allotropes}
            />
          );
        })}
        {RowTwoElem.map((e) => {
          return (
            <Allotrope
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              allotropes={e.general_properties.allotropes}
            />
          );
        })}
        {RowThreeElem.map((e) => {
          return (
            <Allotrope
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              allotropes={e.general_properties.allotropes}
            />
          );
        })}
        {RowFourElem.map((e) => {
          return (
            <Allotrope
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              allotropes={e.general_properties.allotropes}
            />
          );
        })}
        {RowFiveElem.map((e) => {
          return (
            <Allotrope
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              allotropes={e.general_properties.allotropes}
            />
          );
        })}
        <Allotrope
          name={RowSixElem[0].general_properties.name}
          atomic_number={RowSixElem[0].general_properties.atomic_number}
          symbol={RowSixElem[0].general_properties.symbol}
          allotropes={RowSixElem[0].general_properties.allotropes}
        />
        <Allotrope
          name={RowSixElem[1].general_properties.name}
          atomic_number={RowSixElem[1].general_properties.atomic_number}
          symbol={RowSixElem[1].general_properties.symbol}
          allotropes={RowSixElem[1].general_properties.allotropes}
        />
        {LanthanideElem.map((e) => {
          return (
            <Allotrope
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              allotropes={e.general_properties.allotropes}
            />
          );
        })}
        {RowSixElem.map((e, ind) => {
          return (
            ind > 1 && (
              <Allotrope
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                allotropes={e.general_properties.allotropes}
              />
            )
          );
        })}
        <Allotrope
          name={RowSevenElem[0].general_properties.name}
          atomic_number={RowSevenElem[0].general_properties.atomic_number}
          symbol={RowSevenElem[0].general_properties.symbol}
          allotropes={RowSevenElem[0].general_properties.allotropes}
        />
        <Allotrope
          name={RowSevenElem[1].general_properties.name}
          atomic_number={RowSevenElem[1].general_properties.atomic_number}
          symbol={RowSevenElem[1].general_properties.symbol}
          allotropes={RowSevenElem[1].general_properties.allotropes}
        />
        {ActinideElem.map((e) => {
          return (
            <Allotrope
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              allotropes={e.general_properties.allotropes}
            />
          );
        })}
        {RowSevenElem.map((e, ind) => {
          return (
            ind > 1 && (
              <Allotrope
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                allotropes={e.general_properties.allotropes}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Page;
