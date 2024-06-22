import getElementData from "@/helper/getElementData";
import { TempConversion } from "@/types/Conversion";

export const ConvertTemp = ({ type, id }: TempConversion) => {
  const data = getElementData(id);
  let tempData;

  if (type === "boiling_point") {
    tempData = data?.thermodynamic_properties?.boiling_point;
  } else if (type === "melting_point") {
    tempData = data?.thermodynamic_properties?.melting_point;
  } else if (type === "curie_point") {
    tempData = data?.electromagnetic_properties?.curie_point;
  } else if (type === "neel_point") {
    tempData = data?.thermodynamic_properties?.neel_point;
  } else if (type === "superconducting_point") {
    tempData = data?.electromagnetic_properties?.superconducting_point;
  }

  return tempData;
};
