import getElementData from "@/helper/getElementData";
import { DensityConversion } from "@/types/Conversion";

export const ConvertDensity = ({ type, id }: DensityConversion) => {
  const data = getElementData(id);
  let densityData;

  if (type === "density") {
    densityData = data?.material_properties?.density;
  } else if (type === "liquid_density") {
    densityData = data?.material_properties?.liquid_density;
  }

  return densityData;
};
