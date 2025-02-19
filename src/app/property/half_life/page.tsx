"use client";
import React, { useContext } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { HalfLife } from "@/components/Collection";
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
    window.document.title = `Atomic Weight of Elements`;
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
        target="_blank"
        href="https://en.wikipedia.org/wiki/Half-life"
        className={`w-full text-4xl flex justify-center items-center font-satisfy p-2 ${
          theme === "dark" ? " text-text_primary" : " text-text_secondary"
        } z-[5] max-sm:text-2xl`}
      >
        Half Life
      </Link>
      <div
        className={`w-full grid grid-cols-3 px-2 pb-2 overflow-y-scroll gap-2 z-[5] max-md:grid-cols-2 max-sm:grid-cols-1`}
      >
        {RowOneElem.map((e) => {
          return (
            e.neuclear_properties && (
              <HalfLife
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                half_life={e.neuclear_properties.half_life}
              />
            )
          );
        })}
        {RowTwoElem.map((e) => {
          return (
            e.neuclear_properties && (
              <HalfLife
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                half_life={e.neuclear_properties.half_life}
              />
            )
          );
        })}
        {RowThreeElem.map((e) => {
          return (
            e.neuclear_properties && (
              <HalfLife
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                half_life={e.neuclear_properties.half_life}
              />
            )
          );
        })}
        {RowFourElem.map((e) => {
          return (
            e.neuclear_properties && (
              <HalfLife
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                half_life={e.neuclear_properties.half_life}
              />
            )
          );
        })}
        {RowFiveElem.map((e) => {
          return (
            e.neuclear_properties && (
              <HalfLife
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                half_life={e.neuclear_properties.half_life}
              />
            )
          );
        })}
        {RowSixElem[0].neuclear_properties && (
          <HalfLife
            name={RowSixElem[0].general_properties.name}
            atomic_number={RowSixElem[0].general_properties.atomic_number}
            symbol={RowSixElem[0].general_properties.symbol}
            half_life={RowSixElem[0].neuclear_properties.half_life}
          />
        )}
        {RowSixElem[1].neuclear_properties && (
          <HalfLife
            name={RowSixElem[1].general_properties.name}
            atomic_number={RowSixElem[1].general_properties.atomic_number}
            symbol={RowSixElem[1].general_properties.symbol}
            half_life={RowSixElem[1].neuclear_properties.half_life}
          />
        )}
        {LanthanideElem.map((e) => {
          return (
            e.neuclear_properties && (
              <HalfLife
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                half_life={e.neuclear_properties.half_life}
              />
            )
          );
        })}
        {RowSixElem.map((e, ind) => {
          return (
            ind > 1 &&
            e.neuclear_properties && (
              <HalfLife
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                half_life={e.neuclear_properties.half_life}
              />
            )
          );
        })}
        {RowSevenElem[0].neuclear_properties && (
          <HalfLife
            name={RowSevenElem[0].general_properties.name}
            atomic_number={RowSevenElem[0].general_properties.atomic_number}
            symbol={RowSevenElem[0].general_properties.symbol}
            half_life={RowSevenElem[0].neuclear_properties.half_life}
          />
        )}
        {RowSevenElem[1].neuclear_properties && (
          <HalfLife
            name={RowSevenElem[1].general_properties.name}
            atomic_number={RowSevenElem[1].general_properties.atomic_number}
            symbol={RowSevenElem[1].general_properties.symbol}
            half_life={RowSevenElem[1].neuclear_properties.half_life}
          />
        )}
        {ActinideElem.map((e) => {
          return (
            e.neuclear_properties && (
              <HalfLife
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                half_life={e.neuclear_properties.half_life}
              />
            )
          );
        })}
        {RowSevenElem.map((e, ind) => {
          return (
            ind > 1 &&
            e.neuclear_properties && (
              <HalfLife
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                half_life={e.neuclear_properties.half_life}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Page;
