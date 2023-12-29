import { LanthanideElem } from "../ElementDetails/LanthanideElem";
import { ActinideElem } from "../ElementDetails/ActinideElem";
import { RowOneElem } from "../ElementDetails/RowOneElem";
import { RowTwoElem } from "../ElementDetails/RowTwoElem";
import { RowThreeElem } from "../ElementDetails/RowThreeElem";
import { RowFourElem } from "../ElementDetails/RowFourElem";
import { RowFiveElem } from "../ElementDetails/RowFiveElem";
import { RowSixElem } from "../ElementDetails/RowSixElem";
import { RowSevenElem } from "../ElementDetails/RowSevenElem";

const weightData: number[] = [];
const labelData: string[] = [];

RowOneElem.forEach((elem) => {
  labelData.push(elem.general_properties.symbol);
  weightData.push(elem.atomic_properties.atomic_weight);
});
RowTwoElem.forEach((elem) => {
  labelData.push(elem.general_properties.symbol);
  weightData.push(elem.atomic_properties.atomic_weight);
});
RowThreeElem.forEach((elem) => {
  labelData.push(elem.general_properties.symbol);
  weightData.push(elem.atomic_properties.atomic_weight);
});
RowFourElem.forEach((elem) => {
  labelData.push(elem.general_properties.symbol);
  weightData.push(elem.atomic_properties.atomic_weight);
});
RowFiveElem.forEach((elem) => {
  labelData.push(elem.general_properties.symbol);
  weightData.push(elem.atomic_properties.atomic_weight);
});
labelData.push(RowSixElem[0].general_properties.symbol);
labelData.push(RowSixElem[1].general_properties.symbol);
weightData.push(RowSixElem[0].atomic_properties.atomic_weight);
weightData.push(RowSixElem[1].atomic_properties.atomic_weight);
LanthanideElem.forEach((elem) => {
  labelData.push(elem.general_properties.symbol);
  weightData.push(elem.atomic_properties.atomic_weight);
});
RowSixElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 72) {
    labelData.push(elem.general_properties.symbol);
    weightData.push(elem.atomic_properties.atomic_weight);
  }
});
labelData.push(RowSevenElem[0].general_properties.symbol);
labelData.push(RowSevenElem[1].general_properties.symbol);
weightData.push(RowSevenElem[0].atomic_properties.atomic_weight);
weightData.push(RowSevenElem[1].atomic_properties.atomic_weight);
ActinideElem.forEach((elem) => {
  labelData.push(elem.general_properties.symbol);
  weightData.push(elem.atomic_properties.atomic_weight);
});
RowSevenElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 104) {
    labelData.push(elem.general_properties.symbol);
    weightData.push(elem.atomic_properties.atomic_weight);
  }
});

export default labelData;
export { weightData };
