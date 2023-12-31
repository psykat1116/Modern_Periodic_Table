import { LanthanideElem } from "../ElementDetails/LanthanideElem";
import { ActinideElem } from "../ElementDetails/ActinideElem";
import { RowOneElem } from "../ElementDetails/RowOneElem";
import { RowTwoElem } from "../ElementDetails/RowTwoElem";
import { RowThreeElem } from "../ElementDetails/RowThreeElem";
import { RowFourElem } from "../ElementDetails/RowFourElem";
import { RowFiveElem } from "../ElementDetails/RowFiveElem";
import { RowSixElem } from "../ElementDetails/RowSixElem";
import { RowSevenElem } from "../ElementDetails/RowSevenElem";

const vData: number[] = [];
const labelData: string[] = [];

RowOneElem.forEach((elem) => {
  if (elem.reactivity?.valence) {
    labelData.push(elem.general_properties.symbol);
    vData.push(elem.reactivity.valence);
  }
});
RowTwoElem.forEach((elem) => {
  if (elem.reactivity?.valence) {
    labelData.push(elem.general_properties.symbol);
    vData.push(elem.reactivity.valence);
  }
});
RowThreeElem.forEach((elem) => {
  if (elem.reactivity?.valence) {
    labelData.push(elem.general_properties.symbol);
    vData.push(elem.reactivity.valence);
  }
});
RowFourElem.forEach((elem) => {
  if (elem.reactivity?.valence) {
    labelData.push(elem.general_properties.symbol);
    vData.push(elem.reactivity.valence);
  }
});
RowFiveElem.forEach((elem) => {
  if (elem.reactivity?.valence) {
    labelData.push(elem.general_properties.symbol);
    vData.push(elem.reactivity.valence);
  }
});
if (RowSixElem[0].reactivity?.valence) {
  labelData.push(RowSixElem[0].general_properties.symbol);
  vData.push(RowSixElem[0].reactivity.valence);
}
if (RowSixElem[1].reactivity?.valence) {
  labelData.push(RowSixElem[1].general_properties.symbol);
  vData.push(RowSixElem[1].reactivity.valence);
}
LanthanideElem.forEach((elem) => {
  if (elem.reactivity?.valence) {
    labelData.push(elem.general_properties.symbol);
    vData.push(elem.reactivity.valence);
  }
});
RowSixElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 72) {
    if (elem.reactivity?.valence) {
      labelData.push(elem.general_properties.symbol);
      vData.push(elem.reactivity.valence);
    }
  }
});
if (RowSevenElem[0].reactivity?.valence) {
  labelData.push(RowSevenElem[0].general_properties.symbol);
  vData.push(RowSevenElem[0].reactivity.valence);
}
if (RowSevenElem[1].reactivity?.valence) {
  labelData.push(RowSevenElem[1].general_properties.symbol);
  vData.push(RowSevenElem[1].reactivity.valence);
}
ActinideElem.forEach((elem) => {
  if (elem.reactivity?.valence) {
    labelData.push(elem.general_properties.symbol);
    vData.push(elem.reactivity.valence);
  }
});
RowSevenElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 104) {
    if (elem.reactivity?.valence) {
      labelData.push(elem.general_properties.symbol);
      vData.push(elem.reactivity.valence);
    }
  }
});

export default labelData;
export { vData };
