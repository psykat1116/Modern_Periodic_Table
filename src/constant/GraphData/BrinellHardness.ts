import { LanthanideElem } from "../ElementDetails/LanthanideElem";
import { ActinideElem } from "../ElementDetails/ActinideElem";
import { RowOneElem } from "../ElementDetails/RowOneElem";
import { RowTwoElem } from "../ElementDetails/RowTwoElem";
import { RowThreeElem } from "../ElementDetails/RowThreeElem";
import { RowFourElem } from "../ElementDetails/RowFourElem";
import { RowFiveElem } from "../ElementDetails/RowFiveElem";
import { RowSixElem } from "../ElementDetails/RowSixElem";
import { RowSevenElem } from "../ElementDetails/RowSevenElem";

const bhardData: number[] = [];
const labelData: string[] = [];

RowOneElem.forEach((elem) => {
  if (elem.material_properties?.brinell_hardness) {
    labelData.push(elem.general_properties.symbol);
    bhardData.push(elem.material_properties.brinell_hardness);
  }
});
RowTwoElem.forEach((elem) => {
  if (elem.material_properties?.brinell_hardness) {
    labelData.push(elem.general_properties.symbol);
    bhardData.push(elem.material_properties.brinell_hardness);
  }
});
RowThreeElem.forEach((elem) => {
  if (elem.material_properties?.brinell_hardness) {
    labelData.push(elem.general_properties.symbol);
    bhardData.push(elem.material_properties.brinell_hardness);
  }
});
RowFourElem.forEach((elem) => {
  if (elem.material_properties?.brinell_hardness) {
    labelData.push(elem.general_properties.symbol);
    bhardData.push(elem.material_properties.brinell_hardness);
  }
});
RowFiveElem.forEach((elem) => {
  if (elem.material_properties?.brinell_hardness) {
    labelData.push(elem.general_properties.symbol);
    bhardData.push(elem.material_properties.brinell_hardness);
  }
});
if (RowSixElem[0].material_properties?.brinell_hardness) {
  labelData.push(RowSixElem[0].general_properties.symbol);
  bhardData.push(RowSixElem[0].material_properties.brinell_hardness);
}
if (RowSixElem[1].material_properties?.brinell_hardness) {
  labelData.push(RowSixElem[1].general_properties.symbol);
  bhardData.push(RowSixElem[1].material_properties.brinell_hardness);
}
LanthanideElem.forEach((elem) => {
  if (elem.material_properties?.brinell_hardness) {
    labelData.push(elem.general_properties.symbol);
    bhardData.push(elem.material_properties.brinell_hardness);
  }
});
RowSixElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 72) {
    if (elem.material_properties?.brinell_hardness) {
      labelData.push(elem.general_properties.symbol);
      bhardData.push(elem.material_properties.brinell_hardness);
    }
  }
});
if (RowSevenElem[0].material_properties?.brinell_hardness) {
  labelData.push(RowSevenElem[0].general_properties.symbol);
  bhardData.push(RowSevenElem[0].material_properties.brinell_hardness);
}
if (RowSevenElem[1].material_properties?.brinell_hardness) {
  labelData.push(RowSevenElem[1].general_properties.symbol);
  bhardData.push(RowSevenElem[1].material_properties.brinell_hardness);
}
ActinideElem.forEach((elem) => {
  if (elem.material_properties?.brinell_hardness) {
    labelData.push(elem.general_properties.symbol);
    bhardData.push(elem.material_properties.brinell_hardness);
  }
});
RowSevenElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 104) {
    if (elem.material_properties?.brinell_hardness) {
      labelData.push(elem.general_properties.symbol);
      bhardData.push(elem.material_properties.brinell_hardness);
    }
  }
});

export default labelData;
export { bhardData };
