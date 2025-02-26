"use client";
import Link from "next/link";
import { useContext } from "react";

import { OxidationState } from "@/components/Collection";
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
    window.document.title = `Oxidation States of Elements`;
  }

  const { theme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <>
      <Link
        className={`w-full text-4xl flex justify-center items-center font-satisfy p-2 ${
          theme === "dark" ? " text-text_primary" : " text-text_secondary"
        } z-[5]`}
        href="https://en.wikipedia.org/wiki/Oxidation_state"
        target="_blank"
      >
        Oxidation States
      </Link>
      <div
        className={`w-full grid grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 px-2 pb-2 overflow-y-scroll gap-2 z-[5]`}
      >
        {RowOneElem.map((e) => {
          return (
            e.atomic_properties.oxidation_states && (
              <OxidationState
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                oxidation_states={e.atomic_properties.oxidation_states}
              />
            )
          );
        })}
        {RowTwoElem.map((e) => {
          return (
            e.atomic_properties.oxidation_states && (
              <OxidationState
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                oxidation_states={e.atomic_properties.oxidation_states}
              />
            )
          );
        })}
        {RowThreeElem.map((e) => {
          return (
            e.atomic_properties.oxidation_states && (
              <OxidationState
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                oxidation_states={e.atomic_properties.oxidation_states}
              />
            )
          );
        })}
        {RowFourElem.map((e) => {
          return (
            e.atomic_properties.oxidation_states && (
              <OxidationState
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                oxidation_states={e.atomic_properties.oxidation_states}
              />
            )
          );
        })}
        {RowFiveElem.map((e) => {
          return (
            e.atomic_properties.oxidation_states && (
              <OxidationState
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                oxidation_states={e.atomic_properties.oxidation_states}
              />
            )
          );
        })}
        {RowSixElem[0].atomic_properties.oxidation_states && (
          <OxidationState
            name={RowSixElem[0].general_properties.name}
            atomic_number={RowSixElem[0].general_properties.atomic_number}
            symbol={RowSixElem[0].general_properties.symbol}
            oxidation_states={RowSixElem[0].atomic_properties.oxidation_states}
          />
        )}
        {RowSixElem[1].atomic_properties.oxidation_states && (
          <OxidationState
            name={RowSixElem[1].general_properties.name}
            atomic_number={RowSixElem[1].general_properties.atomic_number}
            symbol={RowSixElem[1].general_properties.symbol}
            oxidation_states={RowSixElem[1].atomic_properties.oxidation_states}
          />
        )}
        {LanthanideElem.map((e) => {
          return (
            e.atomic_properties.oxidation_states && (
              <OxidationState
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                oxidation_states={e.atomic_properties.oxidation_states}
              />
            )
          );
        })}
        {RowSixElem.map((e, ind) => {
          return (
            e.atomic_properties.oxidation_states &&
            ind > 1 && (
              <OxidationState
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                oxidation_states={e.atomic_properties.oxidation_states}
              />
            )
          );
        })}
        {RowSevenElem[0].atomic_properties.oxidation_states && (
          <OxidationState
            name={RowSevenElem[0].general_properties.name}
            atomic_number={RowSevenElem[0].general_properties.atomic_number}
            symbol={RowSevenElem[0].general_properties.symbol}
            oxidation_states={
              RowSevenElem[0].atomic_properties.oxidation_states
            }
          />
        )}
        {RowSevenElem[1].atomic_properties.oxidation_states && (
          <OxidationState
            name={RowSevenElem[1].general_properties.name}
            atomic_number={RowSevenElem[1].general_properties.atomic_number}
            symbol={RowSevenElem[1].general_properties.symbol}
            oxidation_states={
              RowSevenElem[1].atomic_properties.oxidation_states
            }
          />
        )}
        {ActinideElem.map((e) => {
          return (
            e.atomic_properties.oxidation_states && (
              <OxidationState
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                oxidation_states={e.atomic_properties.oxidation_states}
              />
            )
          );
        })}
        {RowSevenElem.map((e, ind) => {
          return (
            e.atomic_properties.oxidation_states &&
            ind > 1 && (
              <OxidationState
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                oxidation_states={e.atomic_properties.oxidation_states}
              />
            )
          );
        })}
      </div>
    </>
  );
};

export default Page;
