"use client";
import { useContext } from "react";

import { Discoverer } from "@/components/Collection";
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
    window.document.title = `Discoverer of Elements`;
  }
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <>
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
            e.overview.discoverer && (
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
        {RowTwoElem.map((e) => {
          return (
            e.overview.discoverer && (
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
        {RowThreeElem.map((e) => {
          return (
            e.overview.discoverer && (
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
        {RowFourElem.map((e) => {
          return (
            e.overview.discoverer && (
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
        {RowFiveElem.map((e) => {
          return (
            e.overview.discoverer && (
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
        {RowSixElem[1].overview.discoverer && (
          <Discoverer
            name={RowSixElem[0].general_properties.name}
            atomic_number={RowSixElem[0].general_properties.atomic_number}
            symbol={RowSixElem[0].general_properties.symbol}
            discoverer={RowSixElem[1].overview.discoverer}
          />
        )}
        {RowSixElem[1].overview.discoverer && (
          <Discoverer
            name={RowSixElem[1].general_properties.name}
            atomic_number={RowSixElem[1].general_properties.atomic_number}
            symbol={RowSixElem[1].general_properties.symbol}
            discoverer={RowSixElem[1].overview.discoverer}
          />
        )}
        {LanthanideElem.map((e) => {
          return (
            e.overview.discoverer && (
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
        {RowSixElem.map((e, ind) => {
          return (
            e.overview.discoverer &&
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
        {RowSevenElem[0].overview.discoverer && (
          <Discoverer
            name={RowSevenElem[0].general_properties.name}
            atomic_number={RowSevenElem[0].general_properties.atomic_number}
            symbol={RowSevenElem[0].general_properties.symbol}
            discoverer={RowSevenElem[0].overview.discoverer}
          />
        )}
        {RowSevenElem[1].overview.discoverer && (
          <Discoverer
            name={RowSevenElem[1].general_properties.name}
            atomic_number={RowSevenElem[1].general_properties.atomic_number}
            symbol={RowSevenElem[1].general_properties.symbol}
            discoverer={RowSevenElem[1].overview.discoverer}
          />
        )}
        {ActinideElem.map((e) => {
          return (
            e.overview.discoverer && (
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
        {RowSevenElem.map((e, ind) => {
          return (
            e.overview.discoverer &&
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
    </>
  );
};

export default Page;
