import React from "react";
import { ElectromagneticProperties } from "@/types/ElementTypes";

const EMProperty = ({
  electrical_conductivity,
  electrical_type,
  resisitivity,
  curie_point,
  magnetic_type,
  mass_magnetic_suspectibility,
  molar_magnetic_suspectibility,
  volume_magnetic_suspectibility,
}: ElectromagneticProperties) => {
  return <div>EMProperty</div>;
};

export default EMProperty;
