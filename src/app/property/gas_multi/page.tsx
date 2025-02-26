"use client";
import { useContext } from "react";

import { GasMultiplicities } from "@/components/Collection";
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
    window.document.title = `Gas Atomic Multiplicities of Elements`;
  }

  const { theme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <>
      <div
        className={`w-full text-4xl flex justify-center items-center font-satisfy p-2 ${
          theme === "dark" ? " text-text_primary" : " text-text_secondary"
        }`}
      >
        Gas Atomic Multiplicities
      </div>
      <div
        className={`w-full grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 px-2 pb-2 overflow-y-scroll gap-2 z-[5]`}
      >
        {RowOneElem.map((e) => {
          return (
            e.atomic_properties.gas_atom_multiplicities && (
              <GasMultiplicities
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                gas_atom_multiplicities={
                  e.atomic_properties.gas_atom_multiplicities
                }
              />
            )
          );
        })}
        {RowTwoElem.map((e) => {
          return (
            e.atomic_properties.gas_atom_multiplicities && (
              <GasMultiplicities
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                gas_atom_multiplicities={
                  e.atomic_properties.gas_atom_multiplicities
                }
              />
            )
          );
        })}
        {RowThreeElem.map((e) => {
          return (
            e.atomic_properties.gas_atom_multiplicities && (
              <GasMultiplicities
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                gas_atom_multiplicities={
                  e.atomic_properties.gas_atom_multiplicities
                }
              />
            )
          );
        })}
        {RowFourElem.map((e) => {
          return (
            e.atomic_properties.gas_atom_multiplicities && (
              <GasMultiplicities
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                gas_atom_multiplicities={
                  e.atomic_properties.gas_atom_multiplicities
                }
              />
            )
          );
        })}
        {RowFiveElem.map((e) => {
          return (
            e.atomic_properties.gas_atom_multiplicities && (
              <GasMultiplicities
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                gas_atom_multiplicities={
                  e.atomic_properties.gas_atom_multiplicities
                }
              />
            )
          );
        })}
        {RowSixElem[0].atomic_properties.gas_atom_multiplicities && (
          <GasMultiplicities
            name={RowSixElem[0].general_properties.name}
            atomic_number={RowSixElem[0].general_properties.atomic_number}
            symbol={RowSixElem[0].general_properties.symbol}
            gas_atom_multiplicities={
              RowSixElem[0].atomic_properties.gas_atom_multiplicities
            }
          />
        )}
        {RowSixElem[1].atomic_properties.gas_atom_multiplicities && (
          <GasMultiplicities
            name={RowSixElem[1].general_properties.name}
            atomic_number={RowSixElem[1].general_properties.atomic_number}
            symbol={RowSixElem[1].general_properties.symbol}
            gas_atom_multiplicities={
              RowSixElem[1].atomic_properties.gas_atom_multiplicities
            }
          />
        )}
        {LanthanideElem.map((e) => {
          return (
            e.atomic_properties.gas_atom_multiplicities && (
              <GasMultiplicities
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                gas_atom_multiplicities={
                  e.atomic_properties.gas_atom_multiplicities
                }
              />
            )
          );
        })}
        {RowSixElem.map((e, ind) => {
          return (
            e.atomic_properties.gas_atom_multiplicities &&
            ind > 1 && (
              <GasMultiplicities
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                gas_atom_multiplicities={
                  e.atomic_properties.gas_atom_multiplicities
                }
              />
            )
          );
        })}
        {RowSevenElem[0].atomic_properties.gas_atom_multiplicities && (
          <GasMultiplicities
            name={RowSevenElem[0].general_properties.name}
            atomic_number={RowSevenElem[0].general_properties.atomic_number}
            symbol={RowSevenElem[0].general_properties.symbol}
            gas_atom_multiplicities={
              RowSevenElem[0].atomic_properties.gas_atom_multiplicities
            }
          />
        )}
        {RowSevenElem[1].atomic_properties.gas_atom_multiplicities && (
          <GasMultiplicities
            name={RowSevenElem[1].general_properties.name}
            atomic_number={RowSevenElem[1].general_properties.atomic_number}
            symbol={RowSevenElem[1].general_properties.symbol}
            gas_atom_multiplicities={
              RowSevenElem[1].atomic_properties.gas_atom_multiplicities
            }
          />
        )}
        {ActinideElem.map((e) => {
          return (
            e.atomic_properties.gas_atom_multiplicities && (
              <GasMultiplicities
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                gas_atom_multiplicities={
                  e.atomic_properties.gas_atom_multiplicities
                }
              />
            )
          );
        })}
        {RowSevenElem.map((e, ind) => {
          return (
            e.atomic_properties.gas_atom_multiplicities &&
            ind > 1 && (
              <GasMultiplicities
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                gas_atom_multiplicities={
                  e.atomic_properties.gas_atom_multiplicities
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
