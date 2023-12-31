import { LanthanideElem } from "../ElementDetails/LanthanideElem";
import { ActinideElem } from "../ElementDetails/ActinideElem";
import { RowOneElem } from "../ElementDetails/RowOneElem";
import { RowTwoElem } from "../ElementDetails/RowTwoElem";
import { RowThreeElem } from "../ElementDetails/RowThreeElem";
import { RowFourElem } from "../ElementDetails/RowFourElem";
import { RowFiveElem } from "../ElementDetails/RowFiveElem";
import { RowSixElem } from "../ElementDetails/RowSixElem";
import { RowSevenElem } from "../ElementDetails/RowSevenElem";

const vdwRadiusData: number[] = [];
const labelData: string[] = [];

RowOneElem.forEach((elem) => {
  if (elem.atomic_properties.van_der_walls_radius) {
    labelData.push(elem.general_properties.symbol);
    vdwRadiusData.push(elem.atomic_properties.van_der_walls_radius);
  }
});
RowTwoElem.forEach((elem) => {
  if (elem.atomic_properties.van_der_walls_radius) {
    labelData.push(elem.general_properties.symbol);
    vdwRadiusData.push(elem.atomic_properties.van_der_walls_radius);
  }
});
RowThreeElem.forEach((elem) => {
  if (elem.atomic_properties.van_der_walls_radius) {
    labelData.push(elem.general_properties.symbol);
    vdwRadiusData.push(elem.atomic_properties.van_der_walls_radius);
  }
});
RowFourElem.forEach((elem) => {
  if (elem.atomic_properties.van_der_walls_radius) {
    labelData.push(elem.general_properties.symbol);
    vdwRadiusData.push(elem.atomic_properties.van_der_walls_radius);
  }
});
RowFiveElem.forEach((elem) => {
  if (elem.atomic_properties.van_der_walls_radius) {
    labelData.push(elem.general_properties.symbol);
    vdwRadiusData.push(elem.atomic_properties.van_der_walls_radius);
  }
});
if (RowSixElem[0].atomic_properties.van_der_walls_radius) {
  labelData.push(RowSixElem[0].general_properties.symbol);
  vdwRadiusData.push(RowSixElem[0].atomic_properties.van_der_walls_radius);
}
if (RowSixElem[1].atomic_properties.van_der_walls_radius) {
  labelData.push(RowSixElem[1].general_properties.symbol);
  vdwRadiusData.push(RowSixElem[1].atomic_properties.van_der_walls_radius);
}
LanthanideElem.forEach((elem) => {
  if (elem.atomic_properties.van_der_walls_radius) {
    labelData.push(elem.general_properties.symbol);
    vdwRadiusData.push(elem.atomic_properties.van_der_walls_radius);
  }
});
RowSixElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 72) {
    if (elem.atomic_properties.van_der_walls_radius) {
      labelData.push(elem.general_properties.symbol);
      vdwRadiusData.push(elem.atomic_properties.van_der_walls_radius);
    }
  }
});
if (RowSevenElem[0].atomic_properties.van_der_walls_radius) {
  labelData.push(RowSevenElem[0].general_properties.symbol);
  vdwRadiusData.push(RowSevenElem[0].atomic_properties.van_der_walls_radius);
}
if (RowSevenElem[1].atomic_properties.van_der_walls_radius) {
  labelData.push(RowSevenElem[1].general_properties.symbol);
  vdwRadiusData.push(RowSevenElem[1].atomic_properties.van_der_walls_radius);
}
ActinideElem.forEach((elem) => {
  if (elem.atomic_properties.van_der_walls_radius) {
    labelData.push(elem.general_properties.symbol);
    vdwRadiusData.push(elem.atomic_properties.van_der_walls_radius);
  }
});
RowSevenElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 104) {
    if (elem.atomic_properties.van_der_walls_radius) {
      labelData.push(elem.general_properties.symbol);
      vdwRadiusData.push(elem.atomic_properties.van_der_walls_radius);
    }
  }
});

export default labelData;
export { vdwRadiusData };
