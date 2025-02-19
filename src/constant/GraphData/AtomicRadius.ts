import { LanthanideElem } from "@/constant/ElementDetails/LanthanideElem";
import { ActinideElem } from "@/constant/ElementDetails/ActinideElem";
import { RowOneElem } from "@/constant/ElementDetails/RowOneElem";
import { RowTwoElem } from "@/constant/ElementDetails/RowTwoElem";
import { RowThreeElem } from "@/constant/ElementDetails/RowThreeElem";
import { RowFourElem } from "@/constant/ElementDetails/RowFourElem";
import { RowFiveElem } from "@/constant/ElementDetails/RowFiveElem";
import { RowSixElem } from "@/constant/ElementDetails/RowSixElem";
import { RowSevenElem } from "@/constant/ElementDetails/RowSevenElem";

const atomicRadiusData: number[] = [];
const labelData: string[] = [];

RowOneElem.forEach((elem) => {
  if (elem.atomic_properties.atomic_radius) {
    labelData.push(elem.general_properties.symbol);
    atomicRadiusData.push(elem.atomic_properties.atomic_radius);
  }
});
RowTwoElem.forEach((elem) => {
  if (elem.atomic_properties.atomic_radius) {
    labelData.push(elem.general_properties.symbol);
    atomicRadiusData.push(elem.atomic_properties.atomic_radius);
  }
});
RowThreeElem.forEach((elem) => {
  if (elem.atomic_properties.atomic_radius) {
    labelData.push(elem.general_properties.symbol);
    atomicRadiusData.push(elem.atomic_properties.atomic_radius);
  }
});
RowFourElem.forEach((elem) => {
  if (elem.atomic_properties.atomic_radius) {
    labelData.push(elem.general_properties.symbol);
    atomicRadiusData.push(elem.atomic_properties.atomic_radius);
  }
});
RowFiveElem.forEach((elem) => {
  if (elem.atomic_properties.atomic_radius) {
    labelData.push(elem.general_properties.symbol);
    atomicRadiusData.push(elem.atomic_properties.atomic_radius);
  }
});
if (RowSixElem[0].atomic_properties.atomic_radius) {
  labelData.push(RowSixElem[0].general_properties.symbol);
  atomicRadiusData.push(RowSixElem[0].atomic_properties.atomic_radius);
}
if (RowSixElem[1].atomic_properties.atomic_radius) {
  labelData.push(RowSixElem[1].general_properties.symbol);
  atomicRadiusData.push(RowSixElem[1].atomic_properties.atomic_radius);
}
LanthanideElem.forEach((elem) => {
  if (elem.atomic_properties.atomic_radius) {
    labelData.push(elem.general_properties.symbol);
    atomicRadiusData.push(elem.atomic_properties.atomic_radius);
  }
});
RowSixElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 72) {
    if (elem.atomic_properties.atomic_radius) {
      labelData.push(elem.general_properties.symbol);
      atomicRadiusData.push(elem.atomic_properties.atomic_radius);
    }
  }
});
if (RowSevenElem[0].atomic_properties.atomic_radius) {
  labelData.push(RowSevenElem[0].general_properties.symbol);
  atomicRadiusData.push(RowSevenElem[0].atomic_properties.atomic_radius);
}
if (RowSevenElem[1].atomic_properties.atomic_radius) {
  labelData.push(RowSevenElem[1].general_properties.symbol);
  atomicRadiusData.push(RowSevenElem[1].atomic_properties.atomic_radius);
}
ActinideElem.forEach((elem) => {
  if (elem.atomic_properties.atomic_radius) {
    labelData.push(elem.general_properties.symbol);
    atomicRadiusData.push(elem.atomic_properties.atomic_radius);
  }
});
RowSevenElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 104) {
    if (elem.atomic_properties.atomic_radius) {
      labelData.push(elem.general_properties.symbol);
      atomicRadiusData.push(elem.atomic_properties.atomic_radius);
    }
  }
});

export default labelData;
export { atomicRadiusData };
