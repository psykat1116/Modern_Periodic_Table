"use client";
import Link from "next/link";
import { useContext } from "react";

import { SpaceGroupName } from "@/components/Collection";
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
        href="https://en.wikipedia.org/wiki/Space_group"
        className={`w-full text-4xl flex justify-center items-center font-satisfy p-2 ${
          theme === "dark" ? " text-text_primary" : " text-text_secondary"
        } z-[5] max-sm:text-2xl`}
      >
        Space Group Name
      </Link>
      <div
        className={`w-full grid grid-cols-3 px-2 pb-2 overflow-y-scroll gap-2 z-[5] max-md:grid-cols-2 max-sm:grid-cols-1`}
      >
        {RowOneElem.map((e) => {
          return (
            e.atom_structure && (
              <SpaceGroupName
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                space_group_name={e.atom_structure.space_group_name}
              />
            )
          );
        })}
        {RowTwoElem.map((e) => {
          return (
            e.atom_structure && (
              <SpaceGroupName
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                space_group_name={e.atom_structure.space_group_name}
              />
            )
          );
        })}
        {RowThreeElem.map((e) => {
          return (
            e.atom_structure && (
              <SpaceGroupName
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                space_group_name={e.atom_structure.space_group_name}
              />
            )
          );
        })}
        {RowFourElem.map((e) => {
          return (
            e.atom_structure && (
              <SpaceGroupName
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                space_group_name={e.atom_structure.space_group_name}
              />
            )
          );
        })}
        {RowFiveElem.map((e) => {
          return (
            e.atom_structure && (
              <SpaceGroupName
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                space_group_name={e.atom_structure.space_group_name}
              />
            )
          );
        })}
        {RowSixElem[0].atom_structure && (
          <SpaceGroupName
            name={RowSixElem[0].general_properties.name}
            atomic_number={RowSixElem[0].general_properties.atomic_number}
            symbol={RowSixElem[0].general_properties.symbol}
            space_group_name={RowSixElem[0].atom_structure.space_group_name}
          />
        )}
        {RowSixElem[1].atom_structure && (
          <SpaceGroupName
            name={RowSixElem[1].general_properties.name}
            atomic_number={RowSixElem[1].general_properties.atomic_number}
            symbol={RowSixElem[1].general_properties.symbol}
            space_group_name={RowSixElem[1].atom_structure.space_group_name}
          />
        )}
        {LanthanideElem.map((e) => {
          return (
            e.atom_structure && (
              <SpaceGroupName
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                space_group_name={e.atom_structure.space_group_name}
              />
            )
          );
        })}
        {RowSixElem.map((e, ind) => {
          return (
            ind > 1 &&
            e.atom_structure && (
              <SpaceGroupName
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                space_group_name={e.atom_structure.space_group_name}
              />
            )
          );
        })}
        {RowSevenElem[0].atom_structure && (
          <SpaceGroupName
            name={RowSevenElem[0].general_properties.name}
            atomic_number={RowSevenElem[0].general_properties.atomic_number}
            symbol={RowSevenElem[0].general_properties.symbol}
            space_group_name={RowSevenElem[0].atom_structure.space_group_name}
          />
        )}
        {RowSevenElem[1].atom_structure && (
          <SpaceGroupName
            name={RowSevenElem[1].general_properties.name}
            atomic_number={RowSevenElem[1].general_properties.atomic_number}
            symbol={RowSevenElem[1].general_properties.symbol}
            space_group_name={RowSevenElem[1].atom_structure.space_group_name}
          />
        )}
        {ActinideElem.map((e) => {
          return (
            e.atom_structure && (
              <SpaceGroupName
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                space_group_name={e.atom_structure.space_group_name}
              />
            )
          );
        })}
        {RowSevenElem.map((e, ind) => {
          return (
            ind > 1 &&
            e.atom_structure && (
              <SpaceGroupName
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                space_group_name={e.atom_structure.space_group_name}
              />
            )
          );
        })}
      </div>
    </>
  );
};

export default Page;
