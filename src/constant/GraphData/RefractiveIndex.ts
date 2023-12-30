import { LanthanideElem } from "../ElementDetails/LanthanideElem";
import { ActinideElem } from "../ElementDetails/ActinideElem";
import { RowOneElem } from "../ElementDetails/RowOneElem";
import { RowTwoElem } from "../ElementDetails/RowTwoElem";
import { RowThreeElem } from "../ElementDetails/RowThreeElem";
import { RowFourElem } from "../ElementDetails/RowFourElem";
import { RowFiveElem } from "../ElementDetails/RowFiveElem";
import { RowSixElem } from "../ElementDetails/RowSixElem";
import { RowSevenElem } from "../ElementDetails/RowSevenElem";

const riData: number[] = [];
const labelData: string[] = [];

RowOneElem.forEach((elem) => {
  if (elem.material_properties?.refrective_index) {
    labelData.push(elem.general_properties.symbol);
    riData.push(elem.material_properties.refrective_index);
  }
});
RowTwoElem.forEach((elem) => {
  if (elem.material_properties?.refrective_index) {
    labelData.push(elem.general_properties.symbol);
    riData.push(elem.material_properties.refrective_index);
  }
});
RowThreeElem.forEach((elem) => {
  if (elem.material_properties?.refrective_index) {
    labelData.push(elem.general_properties.symbol);
    riData.push(elem.material_properties.refrective_index);
  }
});
RowFourElem.forEach((elem) => {
  if (elem.material_properties?.refrective_index) {
    labelData.push(elem.general_properties.symbol);
    riData.push(elem.material_properties.refrective_index);
  }
});
RowFiveElem.forEach((elem) => {
  if (elem.material_properties?.refrective_index) {
    labelData.push(elem.general_properties.symbol);
    riData.push(elem.material_properties.refrective_index);
  }
});
if (RowSixElem[0].material_properties?.refrective_index) {
  labelData.push(RowSixElem[0].general_properties.symbol);
  riData.push(RowSixElem[0].material_properties.refrective_index);
}
if (RowSixElem[1].material_properties?.refrective_index) {
  labelData.push(RowSixElem[1].general_properties.symbol);
  riData.push(RowSixElem[1].material_properties.refrective_index);
}
LanthanideElem.forEach((elem) => {
  if (elem.material_properties?.refrective_index) {
    labelData.push(elem.general_properties.symbol);
    riData.push(elem.material_properties.refrective_index);
  }
});
RowSixElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 72) {
    if (elem.material_properties?.refrective_index) {
      labelData.push(elem.general_properties.symbol);
      riData.push(elem.material_properties.refrective_index);
    }
  }
});
if (RowSevenElem[0].material_properties?.refrective_index) {
  labelData.push(RowSevenElem[0].general_properties.symbol);
  riData.push(RowSevenElem[0].material_properties.refrective_index);
}
if (RowSevenElem[1].material_properties?.refrective_index) {
  labelData.push(RowSevenElem[1].general_properties.symbol);
  riData.push(RowSevenElem[1].material_properties.refrective_index);
}
ActinideElem.forEach((elem) => {
  if (elem.material_properties?.refrective_index) {
    labelData.push(elem.general_properties.symbol);
    riData.push(elem.material_properties.refrective_index);
  }
});
RowSevenElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 104) {
    if (elem.material_properties?.refrective_index) {
      labelData.push(elem.general_properties.symbol);
      riData.push(elem.material_properties.refrective_index);
    }
  }
});

export default labelData;
export { riData };
