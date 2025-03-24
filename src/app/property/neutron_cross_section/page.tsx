"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { FaRegChartBar } from "react-icons/fa";

import { NeutronCrossSection } from "@/components/Collection";
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
      <div
        className={cn(
          "w-full flex justify-between items-center text-2xl pr-4 pl-1",
          theme === "dark" ? " text-text_primary" : " text-text_secondary"
        )}
      >
        <Link
          target="_blank"
          href="https://en.wikipedia.org/wiki/Neutron_cross_section"
          className={cn(
            "font-poppins py-1 px-4 ml-1 text-base rounded-sm shadow-md bg-opacity-70 backdrop-blur-sm",
            theme === "dark" ? "bg-bg_dark" : "bg-bg_light"
          )}
        >
          Neutron Cross Section
        </Link>
        <Link
          href="/statistics/neutron_cross_section"
          className={cn(
            "p-1.5 rounded-sm shadow-md bg-opacity-70 backdrop-blur-sm",
            theme === "dark" ? "bg-bg_dark" : "bg-bg_light"
          )}
        >
          <FaRegChartBar className="cursor-pointer" size={23} />
        </Link>
      </div>
      <div
        className={`w-full grid grid-cols-3 px-2 pb-2 overflow-y-scroll gap-2 z-[5] max-md:grid-cols-2 max-sm:grid-cols-1`}
      >
        {RowOneElem.map((e) => {
          return (
            e.neuclear_properties.neutron_cross_section && (
              <NeutronCrossSection
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                neutron_cross_section={
                  e.neuclear_properties.neutron_cross_section
                }
              />
            )
          );
        })}
        {RowTwoElem.map((e) => {
          return (
            e.neuclear_properties.neutron_cross_section && (
              <NeutronCrossSection
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                neutron_cross_section={
                  e.neuclear_properties.neutron_cross_section
                }
              />
            )
          );
        })}
        {RowThreeElem.map((e) => {
          return (
            e.neuclear_properties.neutron_cross_section && (
              <NeutronCrossSection
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                neutron_cross_section={
                  e.neuclear_properties.neutron_cross_section
                }
              />
            )
          );
        })}
        {RowFourElem.map((e) => {
          return (
            e.neuclear_properties.neutron_cross_section && (
              <NeutronCrossSection
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                neutron_cross_section={
                  e.neuclear_properties.neutron_cross_section
                }
              />
            )
          );
        })}
        {RowFiveElem.map((e) => {
          return (
            e.neuclear_properties.neutron_cross_section && (
              <NeutronCrossSection
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                neutron_cross_section={
                  e.neuclear_properties.neutron_cross_section
                }
              />
            )
          );
        })}
        {RowSixElem[0].neuclear_properties.neutron_cross_section && (
          <NeutronCrossSection
            name={RowSixElem[0].general_properties.name}
            atomic_number={RowSixElem[0].general_properties.atomic_number}
            symbol={RowSixElem[0].general_properties.symbol}
            neutron_cross_section={
              RowSixElem[0].neuclear_properties.neutron_cross_section
            }
          />
        )}
        {RowSixElem[1].neuclear_properties.neutron_cross_section && (
          <NeutronCrossSection
            name={RowSixElem[1].general_properties.name}
            atomic_number={RowSixElem[1].general_properties.atomic_number}
            symbol={RowSixElem[1].general_properties.symbol}
            neutron_cross_section={
              RowSixElem[1].neuclear_properties.neutron_cross_section
            }
          />
        )}
        {LanthanideElem.map((e) => {
          return (
            e.neuclear_properties.neutron_cross_section && (
              <NeutronCrossSection
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                neutron_cross_section={
                  e.neuclear_properties.neutron_cross_section
                }
              />
            )
          );
        })}
        {RowSixElem.map((e, ind) => {
          return (
            ind > 1 &&
            e.neuclear_properties.neutron_cross_section && (
              <NeutronCrossSection
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                neutron_cross_section={
                  e.neuclear_properties.neutron_cross_section
                }
              />
            )
          );
        })}
        {RowSevenElem[0].neuclear_properties.neutron_cross_section && (
          <NeutronCrossSection
            name={RowSevenElem[0].general_properties.name}
            atomic_number={RowSevenElem[0].general_properties.atomic_number}
            symbol={RowSevenElem[0].general_properties.symbol}
            neutron_cross_section={
              RowSevenElem[0].neuclear_properties.neutron_cross_section
            }
          />
        )}
        {RowSevenElem[1].neuclear_properties.neutron_cross_section && (
          <NeutronCrossSection
            name={RowSevenElem[1].general_properties.name}
            atomic_number={RowSevenElem[1].general_properties.atomic_number}
            symbol={RowSevenElem[1].general_properties.symbol}
            neutron_cross_section={
              RowSevenElem[1].neuclear_properties.neutron_cross_section
            }
          />
        )}
        {ActinideElem.map((e) => {
          return (
            e.neuclear_properties.neutron_cross_section && (
              <NeutronCrossSection
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                neutron_cross_section={
                  e.neuclear_properties.neutron_cross_section
                }
              />
            )
          );
        })}
        {RowSevenElem.map((e, ind) => {
          return (
            ind > 1 &&
            e.neuclear_properties.neutron_cross_section && (
              <NeutronCrossSection
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                neutron_cross_section={
                  e.neuclear_properties.neutron_cross_section
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
