import { LanthanideElem } from "../ElementDetails/LanthanideElem";
import { ActinideElem } from "../ElementDetails/ActinideElem";
import { RowOneElem } from "../ElementDetails/RowOneElem";
import { RowTwoElem } from "../ElementDetails/RowTwoElem";
import { RowThreeElem } from "../ElementDetails/RowThreeElem";
import { RowFourElem } from "../ElementDetails/RowFourElem";
import { RowFiveElem } from "../ElementDetails/RowFiveElem";
import { RowSixElem } from "../ElementDetails/RowSixElem";
import { RowSevenElem } from "../ElementDetails/RowSevenElem";

const crData: number[] = [];
const labelData: string[] = [];

RowOneElem.forEach((elem) => {
  if (elem.atomic_properties.covalent_radius) {
    labelData.push(elem.general_properties.symbol);
    crData.push(elem.atomic_properties.covalent_radius);
  }
});
RowTwoElem.forEach((elem) => {
  if (elem.atomic_properties.covalent_radius) {
    labelData.push(elem.general_properties.symbol);
    crData.push(elem.atomic_properties.covalent_radius);
  }
});
RowThreeElem.forEach((elem) => {
  if (elem.atomic_properties.covalent_radius) {
    labelData.push(elem.general_properties.symbol);
    crData.push(elem.atomic_properties.covalent_radius);
  }
});
RowFourElem.forEach((elem) => {
  if (elem.atomic_properties.covalent_radius) {
    labelData.push(elem.general_properties.symbol);
    crData.push(elem.atomic_properties.covalent_radius);
  }
});
RowFiveElem.forEach((elem) => {
  if (elem.atomic_properties.covalent_radius) {
    labelData.push(elem.general_properties.symbol);
    crData.push(elem.atomic_properties.covalent_radius);
  }
});
if (RowSixElem[0].atomic_properties.covalent_radius) {
  labelData.push(RowSixElem[0].general_properties.symbol);
  crData.push(RowSixElem[0].atomic_properties.covalent_radius);
}
if (RowSixElem[1].atomic_properties.covalent_radius) {
  labelData.push(RowSixElem[1].general_properties.symbol);
  crData.push(RowSixElem[1].atomic_properties.covalent_radius);
}
LanthanideElem.forEach((elem) => {
  if (elem.atomic_properties.covalent_radius) {
    labelData.push(elem.general_properties.symbol);
    crData.push(elem.atomic_properties.covalent_radius);
  }
});
RowSixElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 72) {
    if (elem.atomic_properties.covalent_radius) {
      labelData.push(elem.general_properties.symbol);
      crData.push(elem.atomic_properties.covalent_radius);
    }
  }
});
if (RowSevenElem[0].atomic_properties.covalent_radius) {
  labelData.push(RowSevenElem[0].general_properties.symbol);
  crData.push(RowSevenElem[0].atomic_properties.covalent_radius);
}
if (RowSevenElem[1].atomic_properties.covalent_radius) {
  labelData.push(RowSevenElem[1].general_properties.symbol);
  crData.push(RowSevenElem[1].atomic_properties.covalent_radius);
}
ActinideElem.forEach((elem) => {
  if (elem.atomic_properties.covalent_radius) {
    labelData.push(elem.general_properties.symbol);
    crData.push(elem.atomic_properties.covalent_radius);
  }
});
RowSevenElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 104) {
    if (elem.atomic_properties.covalent_radius) {
      labelData.push(elem.general_properties.symbol);
      crData.push(elem.atomic_properties.covalent_radius);
    }
  }
});

export default labelData;
export { crData };
