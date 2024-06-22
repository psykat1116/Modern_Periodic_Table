import getElementData from "@/helper/getElementData";
import { ModulusConversion } from "@/types/Conversion";

export const ConvertModulus = ({ type, id }: ModulusConversion) => {
  const data = getElementData(id);
  let modulusData;

  if (type === "bulk_modulus") {
    modulusData = data?.material_properties?.bulk_modulus;
  } else if (type === "young_modulus") {
    modulusData = data?.material_properties?.young_modulus;
  }

  return modulusData;
};
