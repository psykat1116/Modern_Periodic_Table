"use client";
import Link from "next/link";
import { useContext } from "react";

import { LatticeConstant } from "@/components/Collection";
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
      <Link
        target="_blank"
        href="https://en.wikipedia.org/wiki/Lattice_constant"
        className={`w-full text-4xl flex justify-center items-center font-satisfy p-2 ${
          theme === "dark" ? " text-text_primary" : " text-text_secondary"
        } z-[5] max-sm:text-2xl`}
      >
        Lattice Constant
      </Link>
      <div
        className={`w-full grid grid-cols-3 px-2 pb-2 overflow-y-scroll gap-2 z-[5] max-xl:grid-cols-2 max-sm:grid-cols-1`}
      >
        {RowOneElem.map((e) => {
          return (
            e.atom_structure && (
              <LatticeConstant
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                lattice_constant={e.atom_structure.lattice_constant}
              />
            )
          );
        })}
        {RowTwoElem.map((e) => {
          return (
            e.atom_structure && (
              <LatticeConstant
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                lattice_constant={e.atom_structure.lattice_constant}
              />
            )
          );
        })}
        {RowThreeElem.map((e) => {
          return (
            e.atom_structure && (
              <LatticeConstant
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                lattice_constant={e.atom_structure.lattice_constant}
              />
            )
          );
        })}
        {RowFourElem.map((e) => {
          return (
            e.atom_structure && (
              <LatticeConstant
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                lattice_constant={e.atom_structure.lattice_constant}
              />
            )
          );
        })}
        {RowFiveElem.map((e) => {
          return (
            e.atom_structure && (
              <LatticeConstant
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                lattice_constant={e.atom_structure.lattice_constant}
              />
            )
          );
        })}
        {RowSixElem[0].atom_structure && (
          <LatticeConstant
            name={RowSixElem[0].general_properties.name}
            atomic_number={RowSixElem[0].general_properties.atomic_number}
            symbol={RowSixElem[0].general_properties.symbol}
            lattice_constant={RowSixElem[0].atom_structure.lattice_constant}
          />
        )}
        {RowSixElem[1].atom_structure && (
          <LatticeConstant
            name={RowSixElem[1].general_properties.name}
            atomic_number={RowSixElem[1].general_properties.atomic_number}
            symbol={RowSixElem[1].general_properties.symbol}
            lattice_constant={RowSixElem[1].atom_structure.lattice_constant}
          />
        )}
        {LanthanideElem.map((e) => {
          return (
            e.atom_structure && (
              <LatticeConstant
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                lattice_constant={e.atom_structure.lattice_constant}
              />
            )
          );
        })}
        {RowSixElem.map((e, ind) => {
          return (
            ind > 1 &&
            e.atom_structure && (
              <LatticeConstant
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                lattice_constant={e.atom_structure.lattice_constant}
              />
            )
          );
        })}
        {RowSevenElem[0].atom_structure && (
          <LatticeConstant
            name={RowSevenElem[0].general_properties.name}
            atomic_number={RowSevenElem[0].general_properties.atomic_number}
            symbol={RowSevenElem[0].general_properties.symbol}
            lattice_constant={RowSevenElem[0].atom_structure.lattice_constant}
          />
        )}
        {RowSevenElem[1].atom_structure && (
          <LatticeConstant
            name={RowSevenElem[1].general_properties.name}
            atomic_number={RowSevenElem[1].general_properties.atomic_number}
            symbol={RowSevenElem[1].general_properties.symbol}
            lattice_constant={RowSevenElem[1].atom_structure.lattice_constant}
          />
        )}
        {ActinideElem.map((e) => {
          return (
            e.atom_structure && (
              <LatticeConstant
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                lattice_constant={e.atom_structure.lattice_constant}
              />
            )
          );
        })}
        {RowSevenElem.map((e, ind) => {
          return (
            ind > 1 &&
            e.atom_structure && (
              <LatticeConstant
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                lattice_constant={e.atom_structure.lattice_constant}
              />
            )
          );
        })}
      </div>
    </>
  );
};

export default Page;
