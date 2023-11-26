"use client";
import React, { useContext } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import LatticeAngle from "@/components/Collection/LatticeAngle";
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
      <Link
        target="_blank"
        href="https://en.wikipedia.org/wiki/Lattice_constant"
        className={`w-full text-4xl flex justify-center items-center font-satisfy p-2 ${
          theme === "dark" ? " text-text_primary" : " text-text_secondary"
        } z-[5]`}
      >
        Lattice Angle
      </Link>
      <div
        className={`w-full grid grid-cols-3 px-2 pb-2 overflow-y-scroll gap-2 z-[5]`}
      >
        {RowOneElem.map((e) => {
          return (
            e.atom_structure && (
              <LatticeAngle
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                lattice_angle={e.atom_structure.lattice_angle}
              />
            )
          );
        })}
        {RowTwoElem.map((e) => {
          return (
            e.atom_structure && (
              <LatticeAngle
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                lattice_angle={e.atom_structure.lattice_angle}
              />
            )
          );
        })}
        {RowThreeElem.map((e) => {
          return (
            e.atom_structure && (
              <LatticeAngle
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                lattice_angle={e.atom_structure.lattice_angle}
              />
            )
          );
        })}
        {RowFourElem.map((e) => {
          return (
            e.atom_structure && (
              <LatticeAngle
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                lattice_angle={e.atom_structure.lattice_angle}
              />
            )
          );
        })}
        {RowFiveElem.map((e) => {
          return (
            e.atom_structure && (
              <LatticeAngle
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                lattice_angle={e.atom_structure.lattice_angle}
              />
            )
          );
        })}
        {RowSixElem[0].atom_structure && (
          <LatticeAngle
            name={RowSixElem[0].general_properties.name}
            atomic_number={RowSixElem[0].general_properties.atomic_number}
            symbol={RowSixElem[0].general_properties.symbol}
            lattice_angle={RowSixElem[0].atom_structure.lattice_angle}
          />
        )}
        {RowSixElem[1].atom_structure && (
          <LatticeAngle
            name={RowSixElem[1].general_properties.name}
            atomic_number={RowSixElem[1].general_properties.atomic_number}
            symbol={RowSixElem[1].general_properties.symbol}
            lattice_angle={RowSixElem[1].atom_structure.lattice_angle}
          />
        )}
        {LanthanideElem.map((e) => {
          return (
            e.atom_structure && (
              <LatticeAngle
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                lattice_angle={e.atom_structure.lattice_angle}
              />
            )
          );
        })}
        {RowSixElem.map((e, ind) => {
          return (
            ind > 1 &&
            e.atom_structure && (
              <LatticeAngle
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                lattice_angle={e.atom_structure.lattice_angle}
              />
            )
          );
        })}
        {RowSevenElem[0].atom_structure && (
          <LatticeAngle
            name={RowSevenElem[0].general_properties.name}
            atomic_number={RowSevenElem[0].general_properties.atomic_number}
            symbol={RowSevenElem[0].general_properties.symbol}
            lattice_angle={RowSevenElem[0].atom_structure.lattice_angle}
          />
        )}
        {RowSevenElem[1].atom_structure && (
          <LatticeAngle
            name={RowSevenElem[1].general_properties.name}
            atomic_number={RowSevenElem[1].general_properties.atomic_number}
            symbol={RowSevenElem[1].general_properties.symbol}
            lattice_angle={RowSevenElem[1].atom_structure.lattice_angle}
          />
        )}
        {ActinideElem.map((e) => {
          return (
            e.atom_structure && (
              <LatticeAngle
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                lattice_angle={e.atom_structure.lattice_angle}
              />
            )
          );
        })}
        {RowSevenElem.map((e, ind) => {
          return (
            ind > 1 &&
            e.atom_structure && (
              <LatticeAngle
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                lattice_angle={e.atom_structure.lattice_angle}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Page;
