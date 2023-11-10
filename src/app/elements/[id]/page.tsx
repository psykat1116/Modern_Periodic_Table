"use client";
import React, { useEffect, useState, useContext } from "react";
import Navbar from "@/components/Navbar";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { useParams } from "next/navigation";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import ElementDetailsProps from "@/types/ElementTypes";
import GeneralInfo from "@/components/Properties/GeneralInfo";
import Description from "@/components/Properties/Description";
import Particles from "@/components/Properties/Particles";
import Overview from "@/components/Properties/Overview";
import AtomicProperty from "@/components/Properties/AtomicProperty";
import ThermoProperty from "@/components/Properties/ThermoProperty";
import MaterialProperty from "@/components/Properties/MaterialProperty";
import Reactivity from "@/components/Properties/Reactivity";
import NeuclearProperty from "@/components/Properties/NeuclearProperty";
import EMProperty from "@/components/Properties/EMProperty";
import Prevalence from "@/components/Properties/Prevalence";
import ExternalLink from "@/components/Properties/ExternalLink";
import HealthSafety from "@/components/Properties/HealthSafety";
import getElementData from "@/helper/getElementData";

const Page = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  const [elem, setElem] = useState<ElementDetailsProps | null>(null);
  const { id }: { id: string } = useParams();
  const prevId = parseInt(id) - 1 === 0 ? 118 : parseInt(id) - 1,
    nextId = parseInt(id) + 1 === 119 ? 1 : parseInt(id) + 1;
  useEffect(() => {
    setElem(getElementData(parseInt(id)));
  }, [id]);
  if (typeof window !== "undefined") {
    if (elem) {
      window.document.title = `Element ${elem?.general_properties.name} (${elem?.general_properties.symbol})`;
    } else {
      window.document.title = `Modern Periodic Table of Elements`;
    }
  }

  return (
    <div
      className={`flex flex-col min-h-screen w-full ${
        theme === "dark" ? "bg-dark_primary" : "bg-light_primary"
      } justify-start items-center`}
    >
      <div
        className={`flex flex-col w-full ${
          theme === "dark" ? "bg-dark_primary" : "bg-light_primary"
        } justify-start items-center`}
      >
        <Navbar />
        <div
          className={`w-full px-10 flex justify-between items-center mt-5 text-lg tracking-wider ${
            theme === "dark"
              ? "bg-dark_primary text-white"
              : "bg-light_primary text-black"
          }`}
        >
          <Link
            href={`/elements/${prevId}`}
            className="flex justify-between items-center"
          >
            <BsArrowLeft className="cursor-pointer text-xl" />
            <p className="ml-2 text-base">{elem?.neighbour[0]}</p>
          </Link>
          <p className="w-full text-center mx-5">
            {elem && (
              <p>
                {elem?.general_properties.name}{" "}
                {`(${elem?.general_properties.symbol})`}
              </p>
            )}
          </p>
          <Link
            href={`/elements/${nextId}`}
            className="flex justify-between items-center"
          >
            <p className="mr-2 text-base">{elem?.neighbour[1]}</p>
            <BsArrowRight className="cursor-pointer text-xl" />
          </Link>
        </div>
      </div>
      {!elem ? (
        <div className="w-full min-h-[86vh] my-2 p-6 flex justify-center items-center">
          <h1
            className={`${
              theme === "dark" ? "text-white" : "text-black"
            } text-4xl text-center`}
          >
            Oops! Element Details is Not Added Yet <br /> Contribute To This
            Repo To Add Element Details <br /> Don&apos;t Forget To <b>Star</b>{" "}
            This Repo
          </h1>
        </div>
      ) : (
        <div className="w-full h-auto my-2 p-6 flex justify-between items-start">
          <div
            className={`w-1/3 h-[79vh] flex justify-start flex-col items-center ${
              theme === "dark" ? "text-text_primary" : "text-text_secondary"
            }  gap-2`}
          >
            <div
              className={`flex justify-start flex-col items-center ${
                theme === "dark" ? "bg-bg_dark" : "bg-bg_light"
              } shadow-md w-full h-[68vh] rounded-sm p-5`}
            >
              <h1>Electron Shell Configuration</h1>
            </div>
            {elem && <Particles {...elem.particles} />}
            {elem.external_links && <ExternalLink {...elem.external_links} />}
          </div>
          <div className="w-2/3 h-[79vh] ml-5 overflow-y-scroll flex flex-col justify-start items-center gap-3">
            {elem && (
              <>
                <Description description={elem.description} />
                <Overview {...elem.overview} />
                <GeneralInfo {...elem.general_properties} />
                <AtomicProperty {...elem.atomic_properties} />
                {elem.thermodynamic_properties && (
                  <ThermoProperty {...elem.thermodynamic_properties} />
                )}
                {elem.material_properties && (
                  <MaterialProperty {...elem.material_properties} />
                )}
                {elem.reactivity && <Reactivity {...elem.reactivity} />}
                {elem.electromagnetic_properties && (
                  <EMProperty {...elem.electromagnetic_properties} />
                )}
                <NeuclearProperty
                  property={elem.neuclear_properties}
                  name={elem?.general_properties.symbol}
                />
                {elem.health_safety && <HealthSafety {...elem.health_safety} />}
                {elem.prevalence && <Prevalence {...elem.prevalence} />}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
