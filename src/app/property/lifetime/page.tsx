"use client";
import Link from "next/link";
import { useContext } from "react";

import { LifeTime } from "@/components/Collection";
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
    window.document.title = `Atomic Weight of Elements`;
  }

  const { theme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <>
      <Link
        target="_blank"
        href="https://en.wikipedia.org/wiki/Radioactive_decay"
        className={`w-full text-4xl flex justify-center items-center font-satisfy p-2 ${
          theme === "dark" ? " text-text_primary" : " text-text_secondary"
        } z-[5] max-sm:text-2xl`}
      >
        Lifetime
      </Link>
      <div
        className={`w-full grid grid-cols-3 px-2 pb-2 overflow-y-scroll gap-2 z-[5] max-md:grid-cols-2 max-sm:grid-cols-1`}
      >
        {RowOneElem.map((e) => {
          return (
            e.neuclear_properties && (
              <LifeTime
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                lifetime={e.neuclear_properties.lifetime}
              />
            )
          );
        })}
        {RowTwoElem.map((e) => {
          return (
            e.neuclear_properties && (
              <LifeTime
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                lifetime={e.neuclear_properties.lifetime}
              />
            )
          );
        })}
        {RowThreeElem.map((e) => {
          return (
            e.neuclear_properties && (
              <LifeTime
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                lifetime={e.neuclear_properties.lifetime}
              />
            )
          );
        })}
        {RowFourElem.map((e) => {
          return (
            e.neuclear_properties && (
              <LifeTime
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                lifetime={e.neuclear_properties.lifetime}
              />
            )
          );
        })}
        {RowFiveElem.map((e) => {
          return (
            e.neuclear_properties && (
              <LifeTime
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                lifetime={e.neuclear_properties.lifetime}
              />
            )
          );
        })}
        {RowSixElem[0].neuclear_properties && (
          <LifeTime
            name={RowSixElem[0].general_properties.name}
            atomic_number={RowSixElem[0].general_properties.atomic_number}
            symbol={RowSixElem[0].general_properties.symbol}
            lifetime={RowSixElem[0].neuclear_properties.lifetime}
          />
        )}
        {RowSixElem[1].neuclear_properties && (
          <LifeTime
            name={RowSixElem[1].general_properties.name}
            atomic_number={RowSixElem[1].general_properties.atomic_number}
            symbol={RowSixElem[1].general_properties.symbol}
            lifetime={RowSixElem[1].neuclear_properties.lifetime}
          />
        )}
        {LanthanideElem.map((e) => {
          return (
            e.neuclear_properties && (
              <LifeTime
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                lifetime={e.neuclear_properties.lifetime}
              />
            )
          );
        })}
        {RowSixElem.map((e, ind) => {
          return (
            ind > 1 &&
            e.neuclear_properties && (
              <LifeTime
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                lifetime={e.neuclear_properties.lifetime}
              />
            )
          );
        })}
        {RowSevenElem[0].neuclear_properties && (
          <LifeTime
            name={RowSevenElem[0].general_properties.name}
            atomic_number={RowSevenElem[0].general_properties.atomic_number}
            symbol={RowSevenElem[0].general_properties.symbol}
            lifetime={RowSevenElem[0].neuclear_properties.lifetime}
          />
        )}
        {RowSevenElem[1].neuclear_properties && (
          <LifeTime
            name={RowSevenElem[1].general_properties.name}
            atomic_number={RowSevenElem[1].general_properties.atomic_number}
            symbol={RowSevenElem[1].general_properties.symbol}
            lifetime={RowSevenElem[1].neuclear_properties.lifetime}
          />
        )}
        {ActinideElem.map((e) => {
          return (
            e.neuclear_properties && (
              <LifeTime
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                lifetime={e.neuclear_properties.lifetime}
              />
            )
          );
        })}
        {RowSevenElem.map((e, ind) => {
          return (
            ind > 1 &&
            e.neuclear_properties && (
              <LifeTime
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                lifetime={e.neuclear_properties.lifetime}
              />
            )
          );
        })}
      </div>
    </>
  );
};

export default Page;
