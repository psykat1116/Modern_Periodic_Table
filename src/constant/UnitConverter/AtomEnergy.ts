import getElementData from "@/helper/getElementData";
import { AtomEnergyConversion } from "@/types/Conversion";

export const ConvertEnergy = ({ type, id }: AtomEnergyConversion) => {
  const data = getElementData(id);
  let atomEnergyData;

  if (type === "electron_affinity") {
    atomEnergyData = data?.reactivity?.electron_affinity;
  } else if (type === "ionization_energy") {
    atomEnergyData = data?.reactivity?.ionization_energy;
  }

  return atomEnergyData;
};
