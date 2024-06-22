import getElementData from "@/helper/getElementData";
import { HardnessConversion } from "@/types/Conversion";

export const ConvertHardness = ({ type, id }: HardnessConversion) => {
  const data = getElementData(id);
  let hardnessData;

  if (type === "shear_modulus") {
    hardnessData = data?.material_properties?.shear_modulus;
  } else if (type === "vickers_hardness") {
    hardnessData = data?.material_properties?.vickers_hardness;
  } else if (type === "brinell_hardness") {
    hardnessData = data?.material_properties?.brinell_hardness;
  }

  return hardnessData;
};
