"use client";
import Link from "next/link";
import { useContext } from "react";
import { FaRegChartBar } from "react-icons/fa";

import { NeelPoint } from "@/components/Collection";
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
    window.document.title = `Covalent Radius of Elements`;
  }

  const { theme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <>
      <div
        className={`w-full z-[5] flex justify-between items-center p-2 ${
          theme === "dark" ? " text-text_primary" : " text-text_secondary"
        } text-2xl`}
      >
        <Link
          href="https://en.wikipedia.org/wiki/Neel_point"
          className="font-lora p-2 max-md:text-xl"
          target="_blank"
        >
          Neel Point
        </Link>
        <Link
          href="/statistics/neel_point"
          className={`p-2 ${
            theme === "dark" ? "bg-bg_dark" : "bg-bg_light"
          } rounded-sm shadow-md bg-opacity-70 backdrop-blur-sm`}
        >
          <FaRegChartBar className="cursor-pointer" />
        </Link>
      </div>
      <div
        className={`w-full grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 px-2 pb-2 overflow-y-scroll gap-2 z-[5]`}
      >
        {RowOneElem.map((e) => {
          return (
            e.thermodynamic_properties?.neel_point && (
              <NeelPoint
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                neel_point={e.thermodynamic_properties.neel_point}
              />
            )
          );
        })}
        {RowTwoElem.map((e) => {
          return (
            e.thermodynamic_properties?.neel_point && (
              <NeelPoint
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                neel_point={e.thermodynamic_properties.neel_point}
              />
            )
          );
        })}
        {RowThreeElem.map((e) => {
          return (
            e.thermodynamic_properties?.neel_point && (
              <NeelPoint
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                neel_point={e.thermodynamic_properties.neel_point}
              />
            )
          );
        })}
        {RowFourElem.map((e) => {
          return (
            e.thermodynamic_properties?.neel_point && (
              <NeelPoint
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                neel_point={e.thermodynamic_properties.neel_point}
              />
            )
          );
        })}
        {RowFiveElem.map((e) => {
          return (
            e.thermodynamic_properties?.neel_point && (
              <NeelPoint
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                neel_point={e.thermodynamic_properties.neel_point}
              />
            )
          );
        })}
        {RowSixElem[0].thermodynamic_properties?.neel_point && (
          <NeelPoint
            name={RowSixElem[0].general_properties.name}
            atomic_number={RowSixElem[0].general_properties.atomic_number}
            symbol={RowSixElem[0].general_properties.symbol}
            neel_point={RowSixElem[0].thermodynamic_properties.neel_point}
          />
        )}
        {RowSixElem[1].thermodynamic_properties?.neel_point && (
          <NeelPoint
            name={RowSixElem[1].general_properties.name}
            atomic_number={RowSixElem[1].general_properties.atomic_number}
            symbol={RowSixElem[1].general_properties.symbol}
            neel_point={RowSixElem[1].thermodynamic_properties.neel_point}
          />
        )}
        {LanthanideElem.map((e) => {
          return (
            e.thermodynamic_properties?.neel_point && (
              <NeelPoint
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                neel_point={e.thermodynamic_properties.neel_point}
              />
            )
          );
        })}
        {RowSixElem.map((e, ind) => {
          return (
            ind > 1 &&
            e.thermodynamic_properties?.neel_point && (
              <NeelPoint
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                neel_point={e.thermodynamic_properties.neel_point}
              />
            )
          );
        })}
        {RowSevenElem[0].thermodynamic_properties?.neel_point && (
          <NeelPoint
            name={RowSevenElem[0].general_properties.name}
            atomic_number={RowSevenElem[0].general_properties.atomic_number}
            symbol={RowSevenElem[0].general_properties.symbol}
            neel_point={RowSevenElem[0].thermodynamic_properties.neel_point}
          />
        )}
        {RowSevenElem[1].thermodynamic_properties?.neel_point && (
          <NeelPoint
            name={RowSevenElem[1].general_properties.name}
            atomic_number={RowSevenElem[1].general_properties.atomic_number}
            symbol={RowSevenElem[1].general_properties.symbol}
            neel_point={RowSevenElem[1].thermodynamic_properties.neel_point}
          />
        )}
        {ActinideElem.map((e) => {
          return (
            e.thermodynamic_properties?.neel_point && (
              <NeelPoint
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                neel_point={e.thermodynamic_properties.neel_point}
              />
            )
          );
        })}
        {RowSevenElem.map((e, ind) => {
          return (
            ind > 1 &&
            e.thermodynamic_properties?.neel_point && (
              <NeelPoint
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                neel_point={e.thermodynamic_properties.neel_point}
              />
            )
          );
        })}
      </div>
    </>
  );
};

export default Page;
