"use client";

import Link from "next/link";
import { useContext } from "react";

import { CASNumber } from "@/components/Collection";
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
    window.document.title = `CAS Number of Elements`;
  }
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div className="flex w-full flex-col gap-2 relative px-2">
      <Link
        target="_blank"
        href="https://en.wikipedia.org/wiki/CAS_Registry_Number"
        className={`w-full text-4xl flex justify-center items-center p-2 ${
          theme === "dark" ? " text-text_primary" : " text-text_secondary"
        } max-sm:text-2xl font-lora`}
      >
        CAS Number
      </Link>
      <div
        className={`w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-2 pb-2 overflow-y-scroll gap-2`}
      >
        {RowOneElem.map((e) => {
          return (
            <CASNumber
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              cas_number={e.general_properties.cas_number}
            />
          );
        })}
        {RowTwoElem.map((e) => {
          return (
            <CASNumber
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              cas_number={e.general_properties.cas_number}
            />
          );
        })}
        {RowThreeElem.map((e) => {
          return (
            <CASNumber
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              cas_number={e.general_properties.cas_number}
            />
          );
        })}
        {RowFourElem.map((e) => {
          return (
            <CASNumber
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              cas_number={e.general_properties.cas_number}
            />
          );
        })}
        {RowFiveElem.map((e) => {
          return (
            <CASNumber
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              cas_number={e.general_properties.cas_number}
            />
          );
        })}
        <CASNumber
          name={RowSixElem[0].general_properties.name}
          atomic_number={RowSixElem[0].general_properties.atomic_number}
          symbol={RowSixElem[0].general_properties.symbol}
          cas_number={RowSixElem[0].general_properties.cas_number}
        />
        <CASNumber
          name={RowSixElem[1].general_properties.name}
          atomic_number={RowSixElem[1].general_properties.atomic_number}
          symbol={RowSixElem[1].general_properties.symbol}
          cas_number={RowSixElem[1].general_properties.cas_number}
        />
        {LanthanideElem.map((e) => {
          return (
            <CASNumber
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              cas_number={e.general_properties.cas_number}
            />
          );
        })}
        {RowSixElem.map((e, ind) => {
          return (
            ind > 1 && (
              <CASNumber
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                cas_number={e.general_properties.cas_number}
              />
            )
          );
        })}
        <CASNumber
          name={RowSevenElem[0].general_properties.name}
          atomic_number={RowSevenElem[0].general_properties.atomic_number}
          symbol={RowSevenElem[0].general_properties.symbol}
          cas_number={RowSevenElem[0].general_properties.cas_number}
        />
        <CASNumber
          name={RowSevenElem[1].general_properties.name}
          atomic_number={RowSevenElem[1].general_properties.atomic_number}
          symbol={RowSevenElem[1].general_properties.symbol}
          cas_number={RowSevenElem[1].general_properties.cas_number}
        />
        {ActinideElem.map((e) => {
          return (
            <CASNumber
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              cas_number={e.general_properties.cas_number}
            />
          );
        })}
        {RowSevenElem.map((e, ind) => {
          return (
            ind > 1 && (
              <CASNumber
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                cas_number={e.general_properties.cas_number}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Page;
