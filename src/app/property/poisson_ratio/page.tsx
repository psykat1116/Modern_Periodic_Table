"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { FaRegChartBar } from "react-icons/fa";

import { PoissonRatio } from "@/components/Collection";
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
    window.document.title = `Covalent Radius of Elements`;
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
          href="https://en.wikipedia.org/wiki/Poisson%27s_ratio"
          className={cn(
            "font-poppins py-1 px-4 ml-1 text-base rounded-sm shadow-md bg-opacity-70 backdrop-blur-sm",
            theme === "dark" ? "bg-bg_dark" : "bg-bg_light"
          )}
          target="_blank"
        >
          Poisson Ratio
        </Link>
        <Link
          href="/statistics/poisson_ratio"
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
            e.material_properties?.poisson_ratio && (
              <PoissonRatio
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                poisson_ratio={e.material_properties.poisson_ratio}
              />
            )
          );
        })}
        {RowTwoElem.map((e) => {
          return (
            e.material_properties?.poisson_ratio && (
              <PoissonRatio
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                poisson_ratio={e.material_properties.poisson_ratio}
              />
            )
          );
        })}
        {RowThreeElem.map((e) => {
          return (
            e.material_properties?.poisson_ratio && (
              <PoissonRatio
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                poisson_ratio={e.material_properties.poisson_ratio}
              />
            )
          );
        })}
        {RowFourElem.map((e) => {
          return (
            e.material_properties?.poisson_ratio && (
              <PoissonRatio
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                poisson_ratio={e.material_properties.poisson_ratio}
              />
            )
          );
        })}
        {RowFiveElem.map((e) => {
          return (
            e.material_properties?.poisson_ratio && (
              <PoissonRatio
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                poisson_ratio={e.material_properties.poisson_ratio}
              />
            )
          );
        })}
        {RowSixElem[0].material_properties?.poisson_ratio && (
          <PoissonRatio
            name={RowSixElem[0].general_properties.name}
            atomic_number={RowSixElem[0].general_properties.atomic_number}
            symbol={RowSixElem[0].general_properties.symbol}
            poisson_ratio={RowSixElem[0].material_properties.poisson_ratio}
          />
        )}
        {RowSixElem[1].material_properties?.poisson_ratio && (
          <PoissonRatio
            name={RowSixElem[1].general_properties.name}
            atomic_number={RowSixElem[1].general_properties.atomic_number}
            symbol={RowSixElem[1].general_properties.symbol}
            poisson_ratio={RowSixElem[1].material_properties.poisson_ratio}
          />
        )}
        {LanthanideElem.map((e) => {
          return (
            e.material_properties?.poisson_ratio && (
              <PoissonRatio
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                poisson_ratio={e.material_properties.poisson_ratio}
              />
            )
          );
        })}
        {RowSixElem.map((e, ind) => {
          return (
            ind > 1 &&
            e.material_properties?.poisson_ratio && (
              <PoissonRatio
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                poisson_ratio={e.material_properties.poisson_ratio}
              />
            )
          );
        })}
        {RowSevenElem[0].material_properties?.poisson_ratio && (
          <PoissonRatio
            name={RowSevenElem[0].general_properties.name}
            atomic_number={RowSevenElem[0].general_properties.atomic_number}
            symbol={RowSevenElem[0].general_properties.symbol}
            poisson_ratio={RowSevenElem[0].material_properties.poisson_ratio}
          />
        )}
        {RowSevenElem[1].material_properties?.poisson_ratio && (
          <PoissonRatio
            name={RowSevenElem[1].general_properties.name}
            atomic_number={RowSevenElem[1].general_properties.atomic_number}
            symbol={RowSevenElem[1].general_properties.symbol}
            poisson_ratio={RowSevenElem[1].material_properties.poisson_ratio}
          />
        )}
        {ActinideElem.map((e) => {
          return (
            e.material_properties?.poisson_ratio && (
              <PoissonRatio
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                poisson_ratio={e.material_properties.poisson_ratio}
              />
            )
          );
        })}
        {RowSevenElem.map((e, ind) => {
          return (
            ind > 1 &&
            e.material_properties?.poisson_ratio && (
              <PoissonRatio
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                poisson_ratio={e.material_properties.poisson_ratio}
              />
            )
          );
        })}
      </div>
    </>
  );
};

export default Page;
