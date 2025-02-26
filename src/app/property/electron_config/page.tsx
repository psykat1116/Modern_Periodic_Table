"use client";
import Link from "next/link";
import { useContext } from "react";

import { ElectronConfig } from "@/components/Collection";
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
    window.document.title = `Electron Configuration of Elements`;
  }

  const { theme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <>
      <Link
        className={`w-full text-4xl flex justify-center items-center font-satisfy p-2 ${
          theme === "dark" ? " text-text_primary" : " text-text_secondary"
        } z-[5] max-sm:text-2xl`}
        href="https://en.wikipedia.org/wiki/Electron_shell"
        target="_blank"
      >
        Electron Configuration
      </Link>
      <div
        className={`w-full grid grid-cols-2 px-2 pb-2 overflow-y-scroll gap-2 z-[5] max-md:grid-cols-1`}
      >
        {RowOneElem.map((e) => {
          return (
            <ElectronConfig
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              electron_configuration={
                e.atomic_properties.electron_configuration
              }
            />
          );
        })}
        {RowTwoElem.map((e) => {
          return (
            <ElectronConfig
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              electron_configuration={
                e.atomic_properties.electron_configuration
              }
            />
          );
        })}
        {RowThreeElem.map((e) => {
          return (
            <ElectronConfig
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              electron_configuration={
                e.atomic_properties.electron_configuration
              }
            />
          );
        })}
        {RowFourElem.map((e) => {
          return (
            <ElectronConfig
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              electron_configuration={
                e.atomic_properties.electron_configuration
              }
            />
          );
        })}
        {RowFiveElem.map((e) => {
          return (
            <ElectronConfig
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              electron_configuration={
                e.atomic_properties.electron_configuration
              }
            />
          );
        })}
        <ElectronConfig
          name={RowSixElem[0].general_properties.name}
          atomic_number={RowSixElem[0].general_properties.atomic_number}
          symbol={RowSixElem[0].general_properties.symbol}
          electron_configuration={
            RowSixElem[0].atomic_properties.electron_configuration
          }
        />
        <ElectronConfig
          name={RowSixElem[1].general_properties.name}
          atomic_number={RowSixElem[1].general_properties.atomic_number}
          symbol={RowSixElem[1].general_properties.symbol}
          electron_configuration={
            RowSixElem[1].atomic_properties.electron_configuration
          }
        />
        {LanthanideElem.map((e) => {
          return (
            <ElectronConfig
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              electron_configuration={
                e.atomic_properties.electron_configuration
              }
            />
          );
        })}
        {RowSixElem.map((e, ind) => {
          return (
            ind > 1 && (
              <ElectronConfig
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                electron_configuration={
                  e.atomic_properties.electron_configuration
                }
              />
            )
          );
        })}
        <ElectronConfig
          name={RowSevenElem[0].general_properties.name}
          atomic_number={RowSevenElem[0].general_properties.atomic_number}
          symbol={RowSevenElem[0].general_properties.symbol}
          electron_configuration={
            RowSevenElem[0].atomic_properties.electron_configuration
          }
        />
        <ElectronConfig
          name={RowSevenElem[1].general_properties.name}
          atomic_number={RowSevenElem[1].general_properties.atomic_number}
          symbol={RowSevenElem[1].general_properties.symbol}
          electron_configuration={
            RowSevenElem[1].atomic_properties.electron_configuration
          }
        />
        {ActinideElem.map((e) => {
          return (
            <ElectronConfig
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              electron_configuration={
                e.atomic_properties.electron_configuration
              }
            />
          );
        })}
        {RowSevenElem.map((e, ind) => {
          return (
            ind > 1 && (
              <ElectronConfig
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                electron_configuration={
                  e.atomic_properties.electron_configuration
                }
              />
            )
          );
        })}
      </div>
    </>
  );
};

export default Page;
