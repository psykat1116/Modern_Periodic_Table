import React, { useContext } from "react";
import {
  AtomStructure,
  AtomicProperty,
  Description,
  EMProperty,
  GeneralInfo,
  HealthSafety,
  MaterialProperty,
  NeuclearProperty,
  Overview,
  Prevalence,
  Reactivity,
  ThermoProperty,
} from "./Properties";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import ElementDetailsProps from "@/types/ElementTypes";

interface RightSideProps {
  elem: ElementDetailsProps | null;
}

const RightSide: React.FC<RightSideProps> = ({ elem }) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div className="w-2/3 h-[79vh] ml-5 overflow-y-scroll flex flex-col justify-start items-center gap-3 max-[1200px]:w-1/2 max-sm:w-full max-sm:ml-0 max-sm:mt-5 max-sm:h-[79vh]">
      {elem && (
        <>
          <Description description={elem.description} />
          <Overview {...elem.overview} />
          <GeneralInfo {...elem.general_properties} />
          <AtomicProperty {...elem.atomic_properties} />
          {elem.atom_structure && <AtomStructure {...elem.atom_structure} />}
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
  );
};

export default RightSide;
