"use client";
import { useContext } from "react";

import { EarthCrust } from "@/components/Collection";
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
        className={`w-full text-4xl flex justify-center items-center font-satisfy p-2 ${
          theme === "dark" ? " text-text_primary" : " text-text_secondary"
        } z-[5]`}
      >
        Earth Crust
      </div>
      <div
        className={`w-full grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 px-2 pb-2 overflow-y-scroll gap-2 z-[5]`}
      >
        {RowOneElem.map((e) => {
          return (
            e.prevalence && (
              <EarthCrust
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                earth_crust={e.prevalence.earth_crust}
              />
            )
          );
        })}
        {RowTwoElem.map((e) => {
          return (
            e.prevalence && (
              <EarthCrust
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                earth_crust={e.prevalence.earth_crust}
              />
            )
          );
        })}
        {RowThreeElem.map((e) => {
          return (
            e.prevalence && (
              <EarthCrust
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                earth_crust={e.prevalence.earth_crust}
              />
            )
          );
        })}
        {RowFourElem.map((e) => {
          return (
            e.prevalence && (
              <EarthCrust
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                earth_crust={e.prevalence.earth_crust}
              />
            )
          );
        })}
        {RowFiveElem.map((e) => {
          return (
            e.prevalence && (
              <EarthCrust
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                earth_crust={e.prevalence.earth_crust}
              />
            )
          );
        })}
        {RowSixElem[0].prevalence && (
          <EarthCrust
            name={RowSixElem[0].general_properties.name}
            atomic_number={RowSixElem[0].general_properties.atomic_number}
            symbol={RowSixElem[0].general_properties.symbol}
            earth_crust={RowSixElem[0].prevalence.earth_crust}
          />
        )}
        {RowSixElem[1].prevalence && (
          <EarthCrust
            name={RowSixElem[1].general_properties.name}
            atomic_number={RowSixElem[1].general_properties.atomic_number}
            symbol={RowSixElem[1].general_properties.symbol}
            earth_crust={RowSixElem[1].prevalence.earth_crust}
          />
        )}
        {LanthanideElem.map((e) => {
          return (
            e.prevalence && (
              <EarthCrust
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                earth_crust={e.prevalence.earth_crust}
              />
            )
          );
        })}
        {RowSixElem.map((e, ind) => {
          return (
            ind > 1 &&
            e.prevalence && (
              <EarthCrust
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                earth_crust={e.prevalence.earth_crust}
              />
            )
          );
        })}
        {RowSevenElem[0].prevalence && (
          <EarthCrust
            name={RowSevenElem[0].general_properties.name}
            atomic_number={RowSevenElem[0].general_properties.atomic_number}
            symbol={RowSevenElem[0].general_properties.symbol}
            earth_crust={RowSevenElem[0].prevalence.earth_crust}
          />
        )}
        {RowSevenElem[1].prevalence && (
          <EarthCrust
            name={RowSevenElem[1].general_properties.name}
            atomic_number={RowSevenElem[1].general_properties.atomic_number}
            symbol={RowSevenElem[1].general_properties.symbol}
            earth_crust={RowSevenElem[1].prevalence.earth_crust}
          />
        )}
        {ActinideElem.map((e) => {
          return (
            e.prevalence && (
              <EarthCrust
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                earth_crust={e.prevalence.earth_crust}
              />
            )
          );
        })}
        {RowSevenElem.map((e, ind) => {
          return (
            ind > 1 &&
            e.prevalence && (
              <EarthCrust
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                earth_crust={e.prevalence.earth_crust}
              />
            )
          );
        })}
      </div>
    </>
  );
};

export default Page;
