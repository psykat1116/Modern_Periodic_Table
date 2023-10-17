import React from "react";
import { ThermodynamicProperties } from "@/types/ElementTypes";

const ThermoProperty = ({
  boiling_point,
  melting_point,
  phase,
  fusion_heat,
  specific_heat,
  vaporization_heat,
  thermal_expansion,
}: ThermodynamicProperties) => {
  return <div>ThermoProperty</div>;
};

export default ThermoProperty;
