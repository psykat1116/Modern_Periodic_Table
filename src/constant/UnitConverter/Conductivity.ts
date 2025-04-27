import getElementData from "@/helper/getElementData";
import type { ThermalConversion } from "@/types/Conversion";

export const ConvertThermal = ({ type, id }: ThermalConversion) => {
  const data = getElementData(id);
  let thermalData;

  if (type === "thermal_conductivity") {
    thermalData = data?.material_properties?.thermal_conductivity;
  }

  return thermalData;
};
