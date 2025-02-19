"use client";
import React, { useContext } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { QuantumNumber } from "@/components/Collection";
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
      <Link
        target="_blank"
        href="https://en.wikipedia.org/wiki/quantum_number"
        className={`w-full text-4xl flex justify-center items-center font-satisfy p-2 ${
          theme === "dark" ? " text-text_primary" : " text-text_secondary"
        } z-[5] max-sm:text-2xl`}
      >
        Quantum Number
      </Link>
      <div
        className={`w-full grid grid-cols-3 px-2 pb-2 overflow-y-scroll gap-2 z-[5] max-md:grid-cols-2 max-sm:grid-cols-1`}
      >
        {RowOneElem.map((e) => {
          return (
            e.neuclear_properties.quantum_numbers && (
              <QuantumNumber
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                quantum_numbers={e.neuclear_properties.quantum_numbers}
              />
            )
          );
        })}
        {RowTwoElem.map((e) => {
          return (
            e.neuclear_properties.quantum_numbers && (
              <QuantumNumber
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                quantum_numbers={e.neuclear_properties.quantum_numbers}
              />
            )
          );
        })}
        {RowThreeElem.map((e) => {
          return (
            e.neuclear_properties.quantum_numbers && (
              <QuantumNumber
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                quantum_numbers={e.neuclear_properties.quantum_numbers}
              />
            )
          );
        })}
        {RowFourElem.map((e) => {
          return (
            e.neuclear_properties.quantum_numbers && (
              <QuantumNumber
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                quantum_numbers={e.neuclear_properties.quantum_numbers}
              />
            )
          );
        })}
        {RowFiveElem.map((e) => {
          return (
            e.neuclear_properties.quantum_numbers && (
              <QuantumNumber
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                quantum_numbers={e.neuclear_properties.quantum_numbers}
              />
            )
          );
        })}
        {RowSixElem[0].neuclear_properties.quantum_numbers && (
          <QuantumNumber
            name={RowSixElem[0].general_properties.name}
            atomic_number={RowSixElem[0].general_properties.atomic_number}
            symbol={RowSixElem[0].general_properties.symbol}
            quantum_numbers={RowSixElem[0].neuclear_properties.quantum_numbers}
          />
        )}
        {RowSixElem[1].neuclear_properties.quantum_numbers && (
          <QuantumNumber
            name={RowSixElem[1].general_properties.name}
            atomic_number={RowSixElem[1].general_properties.atomic_number}
            symbol={RowSixElem[1].general_properties.symbol}
            quantum_numbers={RowSixElem[1].neuclear_properties.quantum_numbers}
          />
        )}
        {LanthanideElem.map((e) => {
          return (
            e.neuclear_properties.quantum_numbers && (
              <QuantumNumber
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                quantum_numbers={e.neuclear_properties.quantum_numbers}
              />
            )
          );
        })}
        {RowSixElem.map((e, ind) => {
          return (
            ind > 1 &&
            e.neuclear_properties.quantum_numbers && (
              <QuantumNumber
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                quantum_numbers={e.neuclear_properties.quantum_numbers}
              />
            )
          );
        })}
        {RowSevenElem[0].neuclear_properties.quantum_numbers && (
          <QuantumNumber
            name={RowSevenElem[0].general_properties.name}
            atomic_number={RowSevenElem[0].general_properties.atomic_number}
            symbol={RowSevenElem[0].general_properties.symbol}
            quantum_numbers={
              RowSevenElem[0].neuclear_properties.quantum_numbers
            }
          />
        )}
        {RowSevenElem[1].neuclear_properties.quantum_numbers && (
          <QuantumNumber
            name={RowSevenElem[1].general_properties.name}
            atomic_number={RowSevenElem[1].general_properties.atomic_number}
            symbol={RowSevenElem[1].general_properties.symbol}
            quantum_numbers={
              RowSevenElem[1].neuclear_properties.quantum_numbers
            }
          />
        )}
        {ActinideElem.map((e) => {
          return (
            e.neuclear_properties.quantum_numbers && (
              <QuantumNumber
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                quantum_numbers={e.neuclear_properties.quantum_numbers}
              />
            )
          );
        })}
        {RowSevenElem.map((e, ind) => {
          return (
            ind > 1 &&
            e.neuclear_properties.quantum_numbers && (
              <QuantumNumber
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                quantum_numbers={e.neuclear_properties.quantum_numbers}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Page;
