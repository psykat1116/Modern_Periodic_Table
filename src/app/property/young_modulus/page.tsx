"use client";
import React, { useContext } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { YoungModulus } from "@/components/Collection";
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
import { FaRegChartBar } from "react-icons/fa";

const Page = () => {
  if (typeof window !== "undefined") {
    window.document.title = `Covalent Radius of Elements`;
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
      <div
        className={`w-full z-[5] flex justify-between items-center p-2 ${
          theme === "dark" ? " text-text_primary" : " text-text_secondary"
        } text-2xl`}
      >
        <Link
          href="https://en.wikipedia.org/wiki/Young%27s_modulus"
          className="font-lora p-2 max-md:text-xl"
          target="_blank"
        >
          Young Modulus
        </Link>
        <Link
          href="/"
          className={`p-2 ${
            theme === "dark" ? "bg-bg_dark" : "bg-bg_light"
          } rounded-sm shadow-md bg-opacity-70 backdrop-blur-sm`}
        >
          <FaRegChartBar className="cursor-pointer" />
        </Link>
      </div>
      <div
        className={`w-full grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 px-2 pb-2 overflow-y-scroll gap-2 z-[5]`}
      >
        {RowOneElem.map((e) => {
          return (
            e.material_properties && (
              <YoungModulus
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                young_modulus={e.material_properties.young_modulus}
              />
            )
          );
        })}
        {RowTwoElem.map((e) => {
          return (
            e.material_properties && (
              <YoungModulus
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                young_modulus={e.material_properties.young_modulus}
              />
            )
          );
        })}
        {RowThreeElem.map((e) => {
          return (
            e.material_properties && (
              <YoungModulus
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                young_modulus={e.material_properties.young_modulus}
              />
            )
          );
        })}
        {RowFourElem.map((e) => {
          return (
            e.material_properties && (
              <YoungModulus
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                young_modulus={e.material_properties.young_modulus}
              />
            )
          );
        })}
        {RowFiveElem.map((e) => {
          return (
            e.material_properties && (
              <YoungModulus
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                young_modulus={e.material_properties.young_modulus}
              />
            )
          );
        })}
        {RowSixElem[0].material_properties && (
          <YoungModulus
            name={RowSixElem[0].general_properties.name}
            atomic_number={RowSixElem[0].general_properties.atomic_number}
            symbol={RowSixElem[0].general_properties.symbol}
            young_modulus={RowSixElem[0].material_properties.young_modulus}
          />
        )}
        {RowSixElem[1].material_properties && (
          <YoungModulus
            name={RowSixElem[1].general_properties.name}
            atomic_number={RowSixElem[1].general_properties.atomic_number}
            symbol={RowSixElem[1].general_properties.symbol}
            young_modulus={RowSixElem[1].material_properties.young_modulus}
          />
        )}
        {LanthanideElem.map((e) => {
          return (
            e.material_properties && (
              <YoungModulus
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                young_modulus={e.material_properties.young_modulus}
              />
            )
          );
        })}
        {RowSixElem.map((e, ind) => {
          return (
            ind > 1 &&
            e.material_properties && (
              <YoungModulus
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                young_modulus={e.material_properties.young_modulus}
              />
            )
          );
        })}
        {RowSevenElem[0].material_properties && (
          <YoungModulus
            name={RowSevenElem[0].general_properties.name}
            atomic_number={RowSevenElem[0].general_properties.atomic_number}
            symbol={RowSevenElem[0].general_properties.symbol}
            young_modulus={RowSevenElem[0].material_properties.young_modulus}
          />
        )}
        {RowSevenElem[1].material_properties && (
          <YoungModulus
            name={RowSevenElem[1].general_properties.name}
            atomic_number={RowSevenElem[1].general_properties.atomic_number}
            symbol={RowSevenElem[1].general_properties.symbol}
            young_modulus={RowSevenElem[1].material_properties.young_modulus}
          />
        )}
        {ActinideElem.map((e) => {
          return (
            e.material_properties && (
              <YoungModulus
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                young_modulus={e.material_properties.young_modulus}
              />
            )
          );
        })}
        {RowSevenElem.map((e, ind) => {
          return (
            ind > 1 &&
            e.material_properties && (
              <YoungModulus
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                young_modulus={e.material_properties.young_modulus}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Page;
