"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { FaRegChartBar } from "react-icons/fa";

import { VanDerWallRadius } from "@/components/Collection";
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
    window.document.title = `Van Der Walls Radius of Elements`;
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
          href="https://en.wikipedia.org/wiki/Van_der_Waals_radius"
          className={cn(
            "font-poppins py-1 px-4 ml-1 text-base rounded-sm shadow-md bg-opacity-70 backdrop-blur-sm",
            theme === "dark" ? "bg-bg_dark" : "bg-bg_light"
          )}
        >
          Van Der Walls Radius
        </Link>
        <Link
          href="/statistics/van_der_walls_radius"
          className={cn(
            "p-1.5 rounded-sm shadow-md bg-opacity-70 backdrop-blur-sm",
            theme === "dark" ? "bg-bg_dark" : "bg-bg_light"
          )}
        >
          <FaRegChartBar className="cursor-pointer" size={23} />
        </Link>
      </div>
      <div
        className={`w-full grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 px-2 pb-2 overflow-y-scroll gap-2 z-[5]`}
      >
        {RowOneElem.map((e) => {
          return (
            e.atomic_properties.van_der_walls_radius && (
              <VanDerWallRadius
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                van_der_walls_radius={e.atomic_properties.van_der_walls_radius}
              />
            )
          );
        })}
        {RowTwoElem.map((e) => {
          return (
            e.atomic_properties.van_der_walls_radius && (
              <VanDerWallRadius
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                van_der_walls_radius={e.atomic_properties.van_der_walls_radius}
              />
            )
          );
        })}
        {RowThreeElem.map((e) => {
          return (
            e.atomic_properties.van_der_walls_radius && (
              <VanDerWallRadius
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                van_der_walls_radius={e.atomic_properties.van_der_walls_radius}
              />
            )
          );
        })}
        {RowFourElem.map((e) => {
          return (
            e.atomic_properties.van_der_walls_radius && (
              <VanDerWallRadius
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                van_der_walls_radius={e.atomic_properties.van_der_walls_radius}
              />
            )
          );
        })}
        {RowFiveElem.map((e) => {
          return (
            e.atomic_properties.van_der_walls_radius && (
              <VanDerWallRadius
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                van_der_walls_radius={e.atomic_properties.van_der_walls_radius}
              />
            )
          );
        })}
        {RowSixElem[0].atomic_properties.van_der_walls_radius && (
          <VanDerWallRadius
            name={RowSixElem[0].general_properties.name}
            atomic_number={RowSixElem[0].general_properties.atomic_number}
            symbol={RowSixElem[0].general_properties.symbol}
            van_der_walls_radius={
              RowSixElem[0].atomic_properties.van_der_walls_radius
            }
          />
        )}
        {RowSixElem[1].atomic_properties.van_der_walls_radius && (
          <VanDerWallRadius
            name={RowSixElem[1].general_properties.name}
            atomic_number={RowSixElem[1].general_properties.atomic_number}
            symbol={RowSixElem[1].general_properties.symbol}
            van_der_walls_radius={
              RowSixElem[1].atomic_properties.van_der_walls_radius
            }
          />
        )}
        {LanthanideElem.map((e) => {
          return (
            e.atomic_properties.van_der_walls_radius && (
              <VanDerWallRadius
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                van_der_walls_radius={e.atomic_properties.van_der_walls_radius}
              />
            )
          );
        })}
        {RowSixElem.map((e, ind) => {
          return (
            e.atomic_properties.van_der_walls_radius &&
            ind > 1 && (
              <VanDerWallRadius
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                van_der_walls_radius={e.atomic_properties.van_der_walls_radius}
              />
            )
          );
        })}
        {RowSevenElem[0].atomic_properties.van_der_walls_radius && (
          <VanDerWallRadius
            name={RowSevenElem[0].general_properties.name}
            atomic_number={RowSevenElem[0].general_properties.atomic_number}
            symbol={RowSevenElem[0].general_properties.symbol}
            van_der_walls_radius={
              RowSevenElem[0].atomic_properties.van_der_walls_radius
            }
          />
        )}
        {RowSevenElem[1].atomic_properties.van_der_walls_radius && (
          <VanDerWallRadius
            name={RowSevenElem[1].general_properties.name}
            atomic_number={RowSevenElem[1].general_properties.atomic_number}
            symbol={RowSevenElem[1].general_properties.symbol}
            van_der_walls_radius={
              RowSevenElem[1].atomic_properties.van_der_walls_radius
            }
          />
        )}
        {ActinideElem.map((e) => {
          return (
            e.atomic_properties.van_der_walls_radius && (
              <VanDerWallRadius
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                van_der_walls_radius={e.atomic_properties.van_der_walls_radius}
              />
            )
          );
        })}
        {RowSevenElem.map((e, ind) => {
          return (
            e.atomic_properties.van_der_walls_radius &&
            ind > 1 && (
              <VanDerWallRadius
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                van_der_walls_radius={e.atomic_properties.van_der_walls_radius}
              />
            )
          );
        })}
      </div>
    </>
  );
};

export default Page;
