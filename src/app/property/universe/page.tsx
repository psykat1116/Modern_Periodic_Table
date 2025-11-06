"use client";

import { useContext } from "react";

import { Universe } from "@/components/Collection";
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
    <div className="flex flex-col gap-2 px-2 w-full">
      <div
        className={`w-full text-4xl flex justify-center items-center font-lora p-2 ${
          theme === "dark" ? " text-text_primary" : " text-text_secondary"
        }`}
      >
        Universe
      </div>
      <div
        className={`w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pb-2 overflow-y-scroll gap-2`}
      >
        {RowOneElem.map((e) => {
          return (
            e.prevalence?.universe && (
              <Universe
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                universe={e.prevalence.universe}
              />
            )
          );
        })}
        {RowTwoElem.map((e) => {
          return (
            e.prevalence?.universe && (
              <Universe
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                universe={e.prevalence.universe}
              />
            )
          );
        })}
        {RowThreeElem.map((e) => {
          return (
            e.prevalence?.universe && (
              <Universe
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                universe={e.prevalence.universe}
              />
            )
          );
        })}
        {RowFourElem.map((e) => {
          return (
            e.prevalence?.universe && (
              <Universe
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                universe={e.prevalence.universe}
              />
            )
          );
        })}
        {RowFiveElem.map((e) => {
          return (
            e.prevalence?.universe && (
              <Universe
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                universe={e.prevalence.universe}
              />
            )
          );
        })}
        {RowSixElem[0].prevalence?.universe && (
          <Universe
            name={RowSixElem[0].general_properties.name}
            atomic_number={RowSixElem[0].general_properties.atomic_number}
            symbol={RowSixElem[0].general_properties.symbol}
            universe={RowSixElem[0].prevalence.universe}
          />
        )}
        {RowSixElem[1].prevalence?.universe && (
          <Universe
            name={RowSixElem[1].general_properties.name}
            atomic_number={RowSixElem[1].general_properties.atomic_number}
            symbol={RowSixElem[1].general_properties.symbol}
            universe={RowSixElem[1].prevalence.universe}
          />
        )}
        {LanthanideElem.map((e) => {
          return (
            e.prevalence?.universe && (
              <Universe
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                universe={e.prevalence.universe}
              />
            )
          );
        })}
        {RowSixElem.map((e, ind) => {
          return (
            ind > 1 &&
            e.prevalence?.universe && (
              <Universe
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                universe={e.prevalence.universe}
              />
            )
          );
        })}
        {RowSevenElem[0].prevalence?.universe && (
          <Universe
            name={RowSevenElem[0].general_properties.name}
            atomic_number={RowSevenElem[0].general_properties.atomic_number}
            symbol={RowSevenElem[0].general_properties.symbol}
            universe={RowSevenElem[0].prevalence.universe}
          />
        )}
        {RowSevenElem[1].prevalence?.universe && (
          <Universe
            name={RowSevenElem[1].general_properties.name}
            atomic_number={RowSevenElem[1].general_properties.atomic_number}
            symbol={RowSevenElem[1].general_properties.symbol}
            universe={RowSevenElem[1].prevalence.universe}
          />
        )}
        {ActinideElem.map((e) => {
          return (
            e.prevalence?.universe && (
              <Universe
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                universe={e.prevalence.universe}
              />
            )
          );
        })}
        {RowSevenElem.map((e, ind) => {
          return (
            ind > 1 &&
            e.prevalence?.universe && (
              <Universe
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                universe={e.prevalence.universe}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Page;
