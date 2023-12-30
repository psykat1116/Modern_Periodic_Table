"use client";
import React, { useContext } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { AtomicWeight } from "@/components/Collection";
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
    window.document.title = `Atomic Weight of Elements`;
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
          target="_blank"
          href="https://en.wikipedia.org/wiki/Standard_atomic_weight"
          className="font-lora p-2 max-md:text-xl"
        >
          Atomic Weight
        </Link>
        <Link
          href="/statistics/atomic_weight"
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
            <AtomicWeight
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              atomic_weight={e.atomic_properties.atomic_weight}
            />
          );
        })}
        {RowTwoElem.map((e) => {
          return (
            <AtomicWeight
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              atomic_weight={e.atomic_properties.atomic_weight}
            />
          );
        })}
        {RowThreeElem.map((e) => {
          return (
            <AtomicWeight
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              atomic_weight={e.atomic_properties.atomic_weight}
            />
          );
        })}
        {RowFourElem.map((e) => {
          return (
            <AtomicWeight
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              atomic_weight={e.atomic_properties.atomic_weight}
            />
          );
        })}
        {RowFiveElem.map((e) => {
          return (
            <AtomicWeight
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              atomic_weight={e.atomic_properties.atomic_weight}
            />
          );
        })}
        <AtomicWeight
          name={RowSixElem[0].general_properties.name}
          atomic_number={RowSixElem[0].general_properties.atomic_number}
          symbol={RowSixElem[0].general_properties.symbol}
          atomic_weight={RowSixElem[0].atomic_properties.atomic_weight}
        />
        <AtomicWeight
          name={RowSixElem[1].general_properties.name}
          atomic_number={RowSixElem[1].general_properties.atomic_number}
          symbol={RowSixElem[1].general_properties.symbol}
          atomic_weight={RowSixElem[1].atomic_properties.atomic_weight}
        />
        {LanthanideElem.map((e) => {
          return (
            <AtomicWeight
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              atomic_weight={e.atomic_properties.atomic_weight}
            />
          );
        })}
        {RowSixElem.map((e, ind) => {
          return (
            ind > 1 && (
              <AtomicWeight
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                atomic_weight={e.atomic_properties.atomic_weight}
              />
            )
          );
        })}
        <AtomicWeight
          name={RowSevenElem[0].general_properties.name}
          atomic_number={RowSevenElem[0].general_properties.atomic_number}
          symbol={RowSevenElem[0].general_properties.symbol}
          atomic_weight={RowSevenElem[0].atomic_properties.atomic_weight}
        />
        <AtomicWeight
          name={RowSevenElem[1].general_properties.name}
          atomic_number={RowSevenElem[1].general_properties.atomic_number}
          symbol={RowSevenElem[1].general_properties.symbol}
          atomic_weight={RowSevenElem[1].atomic_properties.atomic_weight}
        />
        {ActinideElem.map((e) => {
          return (
            <AtomicWeight
              key={e.general_properties.name}
              name={e.general_properties.name}
              atomic_number={e.general_properties.atomic_number}
              symbol={e.general_properties.symbol}
              atomic_weight={e.atomic_properties.atomic_weight}
            />
          );
        })}
        {RowSevenElem.map((e, ind) => {
          return (
            ind > 1 && (
              <AtomicWeight
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                atomic_weight={e.atomic_properties.atomic_weight}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Page;
