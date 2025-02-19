"use client";
import React, { useContext } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { NeutronMassAbsorption } from "@/components/Collection";
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
import { FaRegChartBar } from "react-icons/fa";

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
      <div
        className={`w-full z-[5] flex justify-between items-center p-2 ${
          theme === "dark" ? " text-text_primary" : " text-text_secondary"
        } text-2xl`}
      >
        <Link
          target="_blank"
          href="https://en.wikipedia.org/wiki/Neutron_capture"
          className="font-lora p-2 max-md:text-xl"
        >
          Neutron Mass Absorption
        </Link>
        <Link
          href="/statistics/neutron_mass_absorption"
          className={`p-2 ${
            theme === "dark" ? "bg-bg_dark" : "bg-bg_light"
          } rounded-sm shadow-md bg-opacity-70 backdrop-blur-sm`}
        >
          <FaRegChartBar className="cursor-pointer" />
        </Link>
      </div>
      <div
        className={`w-full grid grid-cols-3 px-2 pb-2 overflow-y-scroll gap-2 z-[5] max-md:grid-cols-2 max-sm:grid-cols-1`}
      >
        {RowOneElem.map((e) => {
          return (
            e.neuclear_properties.neutron_mass_absorption && (
              <NeutronMassAbsorption
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                neutron_mass_absorption={
                  e.neuclear_properties.neutron_mass_absorption
                }
              />
            )
          );
        })}
        {RowTwoElem.map((e) => {
          return (
            e.neuclear_properties.neutron_mass_absorption && (
              <NeutronMassAbsorption
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                neutron_mass_absorption={
                  e.neuclear_properties.neutron_mass_absorption
                }
              />
            )
          );
        })}
        {RowThreeElem.map((e) => {
          return (
            e.neuclear_properties.neutron_mass_absorption && (
              <NeutronMassAbsorption
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                neutron_mass_absorption={
                  e.neuclear_properties.neutron_mass_absorption
                }
              />
            )
          );
        })}
        {RowFourElem.map((e) => {
          return (
            e.neuclear_properties.neutron_mass_absorption && (
              <NeutronMassAbsorption
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                neutron_mass_absorption={
                  e.neuclear_properties.neutron_mass_absorption
                }
              />
            )
          );
        })}
        {RowFiveElem.map((e) => {
          return (
            e.neuclear_properties.neutron_mass_absorption && (
              <NeutronMassAbsorption
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                neutron_mass_absorption={
                  e.neuclear_properties.neutron_mass_absorption
                }
              />
            )
          );
        })}
        {RowSixElem[0].neuclear_properties && (
          <NeutronMassAbsorption
            name={RowSixElem[0].general_properties.name}
            atomic_number={RowSixElem[0].general_properties.atomic_number}
            symbol={RowSixElem[0].general_properties.symbol}
            neutron_mass_absorption={
              RowSixElem[0].neuclear_properties.neutron_mass_absorption
            }
          />
        )}
        {RowSixElem[1].neuclear_properties && (
          <NeutronMassAbsorption
            name={RowSixElem[1].general_properties.name}
            atomic_number={RowSixElem[1].general_properties.atomic_number}
            symbol={RowSixElem[1].general_properties.symbol}
            neutron_mass_absorption={
              RowSixElem[1].neuclear_properties.neutron_mass_absorption
            }
          />
        )}
        {LanthanideElem.map((e) => {
          return (
            e.neuclear_properties.neutron_mass_absorption && (
              <NeutronMassAbsorption
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                neutron_mass_absorption={
                  e.neuclear_properties.neutron_mass_absorption
                }
              />
            )
          );
        })}
        {RowSixElem.map((e, ind) => {
          return (
            ind > 1 &&
            e.neuclear_properties.neutron_mass_absorption && (
              <NeutronMassAbsorption
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                neutron_mass_absorption={
                  e.neuclear_properties.neutron_mass_absorption
                }
              />
            )
          );
        })}
        {RowSevenElem[0].neuclear_properties && (
          <NeutronMassAbsorption
            name={RowSevenElem[0].general_properties.name}
            atomic_number={RowSevenElem[0].general_properties.atomic_number}
            symbol={RowSevenElem[0].general_properties.symbol}
            neutron_mass_absorption={
              RowSevenElem[0].neuclear_properties.neutron_mass_absorption
            }
          />
        )}
        {RowSevenElem[1].neuclear_properties && (
          <NeutronMassAbsorption
            name={RowSevenElem[1].general_properties.name}
            atomic_number={RowSevenElem[1].general_properties.atomic_number}
            symbol={RowSevenElem[1].general_properties.symbol}
            neutron_mass_absorption={
              RowSevenElem[1].neuclear_properties.neutron_mass_absorption
            }
          />
        )}
        {ActinideElem.map((e) => {
          return (
            e.neuclear_properties.neutron_mass_absorption && (
              <NeutronMassAbsorption
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                neutron_mass_absorption={
                  e.neuclear_properties.neutron_mass_absorption
                }
              />
            )
          );
        })}
        {RowSevenElem.map((e, ind) => {
          return (
            ind > 1 &&
            e.neuclear_properties.neutron_mass_absorption && (
              <NeutronMassAbsorption
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                neutron_mass_absorption={
                  e.neuclear_properties.neutron_mass_absorption
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
