"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { useParams } from "next/navigation";
import { RowOneElem } from "@/constant/RowOneElem";
import ElementDetailsProps from "@/types/ElementTypes";
import GeneralInfo from "@/components/GeneralInfo";
import Description from "@/components/Description";
import Particles from "@/components/Particles";
import Overview from "@/components/Overview";
import AtomicProperty from "@/components/AtomicProperty";
import ThermoProperty from "@/components/ThermoProperty";
import MaterialProperty from "@/components/MaterialProperty";
import Reactivity from "@/components/Reactivity";
import NeuclearProperty from "@/components/NeuclearProperty";
import EMProperty from "@/components/EMProperty";
import Prevalence from "@/components/Prevalence";

const Page = () => {
  const { id }: { id: string } = useParams();
  const prevId = parseInt(id) - 1 === 0 ? 118 : parseInt(id) - 1,
    nextId = parseInt(id) + 1 === 119 ? 1 : parseInt(id) + 1;

  const elem = RowOneElem.find(
    (elem) => elem.id === parseInt(id)
  ) as ElementDetailsProps;

  return (
    <div className="flex flex-col min-h-screen w-full bg-[#0f0f0f] justify-start items-center">
      <div className="flex flex-col w-full bg-[#0f0f0f] justify-start items-center">
        <Navbar />
        <div className="w-full px-10 text-white flex justify-between items-center mt-5 text-lg tracking-wider bg-[#0f0f0f]">
          <Link href={`/elements/${prevId}`}>
            <BsArrowLeft className="cursor-pointer text-xl" />
          </Link>
          <p className="w-full text-center mx-5">
            {elem?.general_properties.name}{" "}
            {`(${elem?.general_properties.symbol})`}
          </p>
          <Link href={`/elements/${nextId}`}>
            <BsArrowRight className="cursor-pointer text-xl" />
          </Link>
        </div>
      </div>
      <div className="w-full h-auto my-2 p-6 flex justify-between items-start">
        <div className="w-1/3 h-[79vh] bg-[#1b1a1a] shadow-md flex justify-start flex-col items-center p-5 text-[#cfbbbb] rounded-sm">
          <h1>Electron Shell Configuration</h1>
        </div>
        <div className="w-2/3 h-[79vh] ml-5 overflow-y-scroll flex flex-col justify-start items-center gap-2">
          <Description description={elem.description} />
          <GeneralInfo {...elem.general_properties} />
          <Particles {...elem.particles} />
          <Overview {...elem.overview} />
          <AtomicProperty {...elem.atomic_properties} />
          <ThermoProperty {...elem.thermodynamic_properties} />
          <MaterialProperty {...elem.material_properties} />
          <Reactivity {...elem.reactivity} />
          <NeuclearProperty {...elem.neuclear_properties} />
          <EMProperty {...elem.electromagnetic_properties} />
          <Prevalence {...elem.prevalence} />
        </div>
      </div>
    </div>
  );
};

export default Page;
