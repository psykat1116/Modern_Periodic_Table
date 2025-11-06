"use client";

import Link from "next/link";
import { useContext } from "react";
import { FaRegChartBar } from "react-icons/fa";

import { cn } from "@/lib/utils";
import { AtomicRadius } from "@/components/Collection";
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
    window.document.title = `Atomic Radius of Elements`;
  }

  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div className="relative w-full px-4 flex flex-col gap-2 text-center">
      <div
        className={cn(
          "w-full flex justify-between items-center text-2xl",
          theme === "dark" ? " text-text_primary" : " text-text_secondary"
        )}
      >
        <Link
          target="_blank"
          href="https://en.wikipedia.org/wiki/Atomic_radius"
          className={cn(
            "font-poppins py-1 px-4 text-xs md:text-sm xl:text-base rounded-sm shadow-md bg-opacity-70 backdrop-blur-sm",
            theme === "dark" ? "bg-bg_dark" : "bg-bg_light"
          )}
        >
          Atomic Radius
        </Link>
        <Link
          href="/statistics/atomic_radius"
          className={cn(
            "p-1.5 rounded-sm shadow-md bg-opacity-70 backdrop-blur-sm",
            theme === "dark" ? "bg-bg_dark" : "bg-bg_light"
          )}
        >
          <FaRegChartBar className="cursor-pointer" size={23} />
        </Link>
      </div>
      <div
        className={`w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 pb-2 overflow-y-scroll gap-2`}
      >
        {RowOneElem.map((e) => {
          return (
            e.atomic_properties.atomic_radius && (
              <AtomicRadius
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                atomic_radius={e.atomic_properties.atomic_radius}
              />
            )
          );
        })}
        {RowTwoElem.map((e) => {
          return (
            e.atomic_properties.atomic_radius && (
              <AtomicRadius
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                atomic_radius={e.atomic_properties.atomic_radius}
              />
            )
          );
        })}
        {RowThreeElem.map((e) => {
          return (
            e.atomic_properties.atomic_radius && (
              <AtomicRadius
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                atomic_radius={e.atomic_properties.atomic_radius}
              />
            )
          );
        })}
        {RowFourElem.map((e) => {
          return (
            e.atomic_properties.atomic_radius && (
              <AtomicRadius
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                atomic_radius={e.atomic_properties.atomic_radius}
              />
            )
          );
        })}
        {RowFiveElem.map((e) => {
          return (
            e.atomic_properties.atomic_radius && (
              <AtomicRadius
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                atomic_radius={e.atomic_properties.atomic_radius}
              />
            )
          );
        })}
        {RowSixElem[0].atomic_properties.atomic_radius && (
          <AtomicRadius
            name={RowSixElem[0].general_properties.name}
            atomic_number={RowSixElem[0].general_properties.atomic_number}
            symbol={RowSixElem[0].general_properties.symbol}
            atomic_radius={RowSixElem[0].atomic_properties.atomic_radius}
          />
        )}
        {RowSixElem[1].atomic_properties.atomic_radius && (
          <AtomicRadius
            name={RowSixElem[1].general_properties.name}
            atomic_number={RowSixElem[1].general_properties.atomic_number}
            symbol={RowSixElem[1].general_properties.symbol}
            atomic_radius={RowSixElem[1].atomic_properties.atomic_radius}
          />
        )}
        {LanthanideElem.map((e) => {
          return (
            e.atomic_properties.atomic_radius && (
              <AtomicRadius
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                atomic_radius={e.atomic_properties.atomic_radius}
              />
            )
          );
        })}
        {RowSixElem.map((e, ind) => {
          return (
            e.atomic_properties.atomic_radius &&
            ind > 1 && (
              <AtomicRadius
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                atomic_radius={e.atomic_properties.atomic_radius}
              />
            )
          );
        })}
        {RowSevenElem[0].atomic_properties.atomic_radius && (
          <AtomicRadius
            name={RowSevenElem[0].general_properties.name}
            atomic_number={RowSevenElem[0].general_properties.atomic_number}
            symbol={RowSevenElem[0].general_properties.symbol}
            atomic_radius={RowSevenElem[0].atomic_properties.atomic_radius}
          />
        )}
        {RowSevenElem[1].atomic_properties.atomic_radius && (
          <AtomicRadius
            name={RowSevenElem[1].general_properties.name}
            atomic_number={RowSevenElem[1].general_properties.atomic_number}
            symbol={RowSevenElem[1].general_properties.symbol}
            atomic_radius={RowSevenElem[1].atomic_properties.atomic_radius}
          />
        )}
        {ActinideElem.map((e) => {
          return (
            e.atomic_properties.atomic_radius && (
              <AtomicRadius
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                atomic_radius={e.atomic_properties.atomic_radius}
              />
            )
          );
        })}
        {RowSevenElem.map((e, ind) => {
          return (
            e.atomic_properties.atomic_radius &&
            ind > 1 && (
              <AtomicRadius
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                atomic_radius={e.atomic_properties.atomic_radius}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Page;
