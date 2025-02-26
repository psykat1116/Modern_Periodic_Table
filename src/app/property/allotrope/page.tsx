"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import React, { useContext } from "react";

import { Allotrope } from "@/components/Collection";
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
    window.document.title = `Allotropes of Elements`;
  }

  const { theme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <>
      <div
        className={cn(
          "w-full flex justify-center items-center text-2xl",
          theme === "dark" ? " text-text_primary" : " text-text_secondary"
        )}
      >
        <Link
          target="_blank"
          href="https://en.wikipedia.org/wiki/Allotropy"
          className="font-lora p-2 max-md:text-xl"
        >
          Allotropes
        </Link>
      </div>
      <div className="w-full flex flex-col justify-start items-center px-2 pb-2 overflow-y-scroll gap-2">
        {RowOneElem.map((e) => {
          return (
            e.general_properties.allotropes && (
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
        {RowTwoElem.map((e) => {
          return (
            e.general_properties.allotropes && (
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
        {RowThreeElem.map((e) => {
          return (
            e.general_properties.allotropes && (
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
        {RowFourElem.map((e) => {
          return (
            e.general_properties.allotropes && (
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
        {RowFiveElem.map((e) => {
          return (
            e.general_properties.allotropes && (
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
        {RowSixElem[0].general_properties.allotropes && (
          <Allotrope
            name={RowSixElem[0].general_properties.name}
            atomic_number={RowSixElem[0].general_properties.atomic_number}
            symbol={RowSixElem[0].general_properties.symbol}
            allotropes={RowSixElem[0].general_properties.allotropes}
          />
        )}
        {RowSixElem[1].general_properties.allotropes && (
          <Allotrope
            name={RowSixElem[1].general_properties.name}
            atomic_number={RowSixElem[1].general_properties.atomic_number}
            symbol={RowSixElem[1].general_properties.symbol}
            allotropes={RowSixElem[1].general_properties.allotropes}
          />
        )}
        {LanthanideElem.map((e) => {
          return (
            e.general_properties.allotropes && (
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
        {RowSixElem.map((e, ind) => {
          return (
            e.general_properties.allotropes &&
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
        {RowSevenElem[0].general_properties.allotropes && (
          <Allotrope
            name={RowSevenElem[0].general_properties.name}
            atomic_number={RowSevenElem[0].general_properties.atomic_number}
            symbol={RowSevenElem[0].general_properties.symbol}
            allotropes={RowSevenElem[0].general_properties.allotropes}
          />
        )}
        {RowSevenElem[1].general_properties.allotropes && (
          <Allotrope
            name={RowSevenElem[1].general_properties.name}
            atomic_number={RowSevenElem[1].general_properties.atomic_number}
            symbol={RowSevenElem[1].general_properties.symbol}
            allotropes={RowSevenElem[1].general_properties.allotropes}
          />
        )}
        {ActinideElem.map((e) => {
          return (
            e.general_properties.allotropes && (
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
        {RowSevenElem.map((e, ind) => {
          return (
            e.general_properties.allotropes &&
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
    </>
  );
};

export default Page;
