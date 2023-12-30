import { LanthanideElem } from "../ElementDetails/LanthanideElem";
import { ActinideElem } from "../ElementDetails/ActinideElem";
import { RowOneElem } from "../ElementDetails/RowOneElem";
import { RowTwoElem } from "../ElementDetails/RowTwoElem";
import { RowThreeElem } from "../ElementDetails/RowThreeElem";
import { RowFourElem } from "../ElementDetails/RowFourElem";
import { RowFiveElem } from "../ElementDetails/RowFiveElem";
import { RowSixElem } from "../ElementDetails/RowSixElem";
import { RowSevenElem } from "../ElementDetails/RowSevenElem";

const eData: number[] = [];
const labelData: string[] = [];

RowOneElem.forEach((elem) => {
  if (elem.reactivity?.electronegativity) {
    labelData.push(elem.general_properties.symbol);
    eData.push(elem.reactivity.electronegativity);
  }
});
RowTwoElem.forEach((elem) => {
  if (elem.reactivity?.electronegativity) {
    labelData.push(elem.general_properties.symbol);
    eData.push(elem.reactivity.electronegativity);
  }
});
RowThreeElem.forEach((elem) => {
  if (elem.reactivity?.electronegativity) {
    labelData.push(elem.general_properties.symbol);
    eData.push(elem.reactivity.electronegativity);
  }
});
RowFourElem.forEach((elem) => {
  if (elem.reactivity?.electronegativity) {
    labelData.push(elem.general_properties.symbol);
    eData.push(elem.reactivity.electronegativity);
  }
});
RowFiveElem.forEach((elem) => {
  if (elem.reactivity?.electronegativity) {
    labelData.push(elem.general_properties.symbol);
    eData.push(elem.reactivity.electronegativity);
  }
});
if (RowSixElem[0].reactivity?.electronegativity) {
  labelData.push(RowSixElem[0].general_properties.symbol);
  eData.push(RowSixElem[0].reactivity.electronegativity);
}
if (RowSixElem[1].reactivity?.electronegativity) {
  labelData.push(RowSixElem[1].general_properties.symbol);
  eData.push(RowSixElem[1].reactivity.electronegativity);
}
LanthanideElem.forEach((elem) => {
  if (elem.reactivity?.electronegativity) {
    labelData.push(elem.general_properties.symbol);
    eData.push(elem.reactivity.electronegativity);
  }
});
RowSixElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 72) {
    if (elem.reactivity?.electronegativity) {
      labelData.push(elem.general_properties.symbol);
      eData.push(elem.reactivity.electronegativity);
    }
  }
});
if (RowSevenElem[0].reactivity?.electronegativity) {
  labelData.push(RowSevenElem[0].general_properties.symbol);
  eData.push(RowSevenElem[0].reactivity.electronegativity);
}
if (RowSevenElem[1].reactivity?.electronegativity) {
  labelData.push(RowSevenElem[1].general_properties.symbol);
  eData.push(RowSevenElem[1].reactivity.electronegativity);
}
ActinideElem.forEach((elem) => {
  if (elem.reactivity?.electronegativity) {
    labelData.push(elem.general_properties.symbol);
    eData.push(elem.reactivity.electronegativity);
  }
});
RowSevenElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 104) {
    if (elem.reactivity?.electronegativity) {
      labelData.push(elem.general_properties.symbol);
      eData.push(elem.reactivity.electronegativity);
    }
  }
});

export default labelData;
export { eData };
