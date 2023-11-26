"use client";
import React, { useContext } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import ShellConfig from "@/components/Collection/ShellConfig";
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
import DynamicParticle from "@/components/DynamicParticle";

const Page = () => {
  if (typeof window !== "undefined") {
    window.document.title = `Shell Configuration of Elements`;
  }
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div
      className={`min-h-screen w-full flex flex-col justify-start items-center gap-2 ${
        theme === "dark" ? "bg-dark_primary" : "bg-light_primary"
      } justify-start items-center`}
    >
      <div className="absolute w-full min-h-screen">
        <DynamicParticle />
      </div>
      <Navbar />
      <Link
        className={`w-full text-4xl flex justify-center items-center font-satisfy p-2 ${
          theme === "dark" ? " text-text_primary" : " text-text_secondary"
        } z-[5]`}
        target="_blank"
        href="https://en.wikipedia.org/wiki/Electron_shell"
      >
        Shell Configuration
      </Link>
      <div
        className={`grid grid-cols-2 max-md:grid-cols-1 overflow-y-scroll w-full px-2 pb-2 gap-2 max-md:text-[12px] z-[5]`}
      >
        {RowOneElem.map((e) => {
          return (
            <ShellConfig
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              electron_shell_configuration={
                e.atomic_properties.electron_shell_configuration
              }
            />
          );
        })}
        {RowTwoElem.map((e) => {
          return (
            <ShellConfig
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              electron_shell_configuration={
                e.atomic_properties.electron_shell_configuration
              }
            />
          );
        })}
        {RowThreeElem.map((e) => {
          return (
            <ShellConfig
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              electron_shell_configuration={
                e.atomic_properties.electron_shell_configuration
              }
            />
          );
        })}
        {RowFourElem.map((e) => {
          return (
            <ShellConfig
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              electron_shell_configuration={
                e.atomic_properties.electron_shell_configuration
              }
            />
          );
        })}
        {RowFiveElem.map((e) => {
          return (
            <ShellConfig
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              electron_shell_configuration={
                e.atomic_properties.electron_shell_configuration
              }
            />
          );
        })}
        <ShellConfig
          name={RowSixElem[0].general_properties.name}
          atomic_number={RowSixElem[0].general_properties.atomic_number}
          symbol={RowSixElem[0].general_properties.symbol}
          electron_shell_configuration={
            RowSixElem[0].atomic_properties.electron_shell_configuration
          }
        />
        <ShellConfig
          name={RowSixElem[1].general_properties.name}
          atomic_number={RowSixElem[1].general_properties.atomic_number}
          symbol={RowSixElem[1].general_properties.symbol}
          electron_shell_configuration={
            RowSixElem[1].atomic_properties.electron_shell_configuration
          }
        />
        {LanthanideElem.map((e) => {
          return (
            <ShellConfig
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              electron_shell_configuration={
                e.atomic_properties.electron_shell_configuration
              }
            />
          );
        })}
        {RowSixElem.map((e, ind) => {
          return (
            ind > 1 && (
              <ShellConfig
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                electron_shell_configuration={
                  e.atomic_properties.electron_shell_configuration
                }
              />
            )
          );
        })}
        <ShellConfig
          name={RowSevenElem[0].general_properties.name}
          atomic_number={RowSevenElem[0].general_properties.atomic_number}
          symbol={RowSevenElem[0].general_properties.symbol}
          electron_shell_configuration={
            RowSevenElem[0].atomic_properties.electron_shell_configuration
          }
        />
        <ShellConfig
          name={RowSevenElem[1].general_properties.name}
          atomic_number={RowSevenElem[1].general_properties.atomic_number}
          symbol={RowSevenElem[1].general_properties.symbol}
          electron_shell_configuration={
            RowSevenElem[1].atomic_properties.electron_shell_configuration
          }
        />
        {ActinideElem.map((e) => {
          return (
            <ShellConfig
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              electron_shell_configuration={
                e.atomic_properties.electron_shell_configuration
              }
            />
          );
        })}
        {RowSevenElem.map((e, ind) => {
          return (
            ind > 1 && (
              <ShellConfig
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                electron_shell_configuration={
                  e.atomic_properties.electron_shell_configuration
                }
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Page;
