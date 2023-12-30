import { LanthanideElem } from "../ElementDetails/LanthanideElem";
import { ActinideElem } from "../ElementDetails/ActinideElem";
import { RowOneElem } from "../ElementDetails/RowOneElem";
import { RowTwoElem } from "../ElementDetails/RowTwoElem";
import { RowThreeElem } from "../ElementDetails/RowThreeElem";
import { RowFourElem } from "../ElementDetails/RowFourElem";
import { RowFiveElem } from "../ElementDetails/RowFiveElem";
import { RowSixElem } from "../ElementDetails/RowSixElem";
import { RowSevenElem } from "../ElementDetails/RowSevenElem";

const msData: number[] = [];
const labelData: string[] = [];

RowOneElem.forEach((elem) => {
  if (elem.material_properties?.mohs_hardness) {
    labelData.push(elem.general_properties.symbol);
    msData.push(elem.material_properties.mohs_hardness);
  }
});
RowTwoElem.forEach((elem) => {
  if (elem.material_properties?.mohs_hardness) {
    labelData.push(elem.general_properties.symbol);
    msData.push(elem.material_properties.mohs_hardness);
  }
});
RowThreeElem.forEach((elem) => {
  if (elem.material_properties?.mohs_hardness) {
    labelData.push(elem.general_properties.symbol);
    msData.push(elem.material_properties.mohs_hardness);
  }
});
RowFourElem.forEach((elem) => {
  if (elem.material_properties?.mohs_hardness) {
    labelData.push(elem.general_properties.symbol);
    msData.push(elem.material_properties.mohs_hardness);
  }
});
RowFiveElem.forEach((elem) => {
  if (elem.material_properties?.mohs_hardness) {
    labelData.push(elem.general_properties.symbol);
    msData.push(elem.material_properties.mohs_hardness);
  }
});
if (RowSixElem[0].material_properties?.mohs_hardness) {
  labelData.push(RowSixElem[0].general_properties.symbol);
  msData.push(RowSixElem[0].material_properties.mohs_hardness);
}
if (RowSixElem[1].material_properties?.mohs_hardness) {
  labelData.push(RowSixElem[1].general_properties.symbol);
  msData.push(RowSixElem[1].material_properties.mohs_hardness);
}
LanthanideElem.forEach((elem) => {
  if (elem.material_properties?.mohs_hardness) {
    labelData.push(elem.general_properties.symbol);
    msData.push(elem.material_properties.mohs_hardness);
  }
});
RowSixElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 72) {
    if (elem.material_properties?.mohs_hardness) {
      labelData.push(elem.general_properties.symbol);
      msData.push(elem.material_properties.mohs_hardness);
    }
  }
});
if (RowSevenElem[0].material_properties?.mohs_hardness) {
  labelData.push(RowSevenElem[0].general_properties.symbol);
  msData.push(RowSevenElem[0].material_properties.mohs_hardness);
}
if (RowSevenElem[1].material_properties?.mohs_hardness) {
  labelData.push(RowSevenElem[1].general_properties.symbol);
  msData.push(RowSevenElem[1].material_properties.mohs_hardness);
}
ActinideElem.forEach((elem) => {
  if (elem.material_properties?.mohs_hardness) {
    labelData.push(elem.general_properties.symbol);
    msData.push(elem.material_properties.mohs_hardness);
  }
});
RowSevenElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 104) {
    if (elem.material_properties?.mohs_hardness) {
      labelData.push(elem.general_properties.symbol);
      msData.push(elem.material_properties.mohs_hardness);
    }
  }
});

export default labelData;
export { msData };
