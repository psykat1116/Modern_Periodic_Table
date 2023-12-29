import { LanthanideElem } from "../ElementDetails/LanthanideElem";
import { ActinideElem } from "../ElementDetails/ActinideElem";
import { RowOneElem } from "../ElementDetails/RowOneElem";
import { RowTwoElem } from "../ElementDetails/RowTwoElem";
import { RowThreeElem } from "../ElementDetails/RowThreeElem";
import { RowFourElem } from "../ElementDetails/RowFourElem";
import { RowFiveElem } from "../ElementDetails/RowFiveElem";
import { RowSixElem } from "../ElementDetails/RowSixElem";
import { RowSevenElem } from "../ElementDetails/RowSevenElem";

const cpData: number[] = [];
const labelData: string[] = [];

RowOneElem.forEach((elem) => {
  if (elem.electromagnetic_properties?.curie_point) {
    labelData.push(elem.general_properties.symbol);
    cpData.push(elem.electromagnetic_properties.curie_point);
  }
});
RowTwoElem.forEach((elem) => {
  if (elem.electromagnetic_properties?.curie_point) {
    labelData.push(elem.general_properties.symbol);
    cpData.push(elem.electromagnetic_properties.curie_point);
  }
});
RowThreeElem.forEach((elem) => {
  if (elem.electromagnetic_properties?.curie_point) {
    labelData.push(elem.general_properties.symbol);
    cpData.push(elem.electromagnetic_properties.curie_point);
  }
});
RowFourElem.forEach((elem) => {
  if (elem.electromagnetic_properties?.curie_point) {
    labelData.push(elem.general_properties.symbol);
    cpData.push(elem.electromagnetic_properties.curie_point);
  }
});
RowFiveElem.forEach((elem) => {
  if (elem.electromagnetic_properties?.curie_point) {
    labelData.push(elem.general_properties.symbol);
    cpData.push(elem.electromagnetic_properties.curie_point);
  }
});
if (RowSixElem[0].electromagnetic_properties?.curie_point) {
  labelData.push(RowSixElem[0].general_properties.symbol);
  cpData.push(RowSixElem[0].electromagnetic_properties.curie_point);
}
if (RowSixElem[1].electromagnetic_properties?.curie_point) {
  labelData.push(RowSixElem[1].general_properties.symbol);
  cpData.push(RowSixElem[1].electromagnetic_properties.curie_point);
}
LanthanideElem.forEach((elem) => {
  if (elem.electromagnetic_properties?.curie_point) {
    labelData.push(elem.general_properties.symbol);
    cpData.push(elem.electromagnetic_properties.curie_point);
  }
});
RowSixElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 72) {
    if (elem.electromagnetic_properties?.curie_point) {
      labelData.push(elem.general_properties.symbol);
      cpData.push(elem.electromagnetic_properties.curie_point);
    }
  }
});
if (RowSevenElem[0].electromagnetic_properties?.curie_point) {
  labelData.push(RowSevenElem[0].general_properties.symbol);
  cpData.push(RowSevenElem[0].electromagnetic_properties.curie_point);
}
if (RowSevenElem[1].electromagnetic_properties?.curie_point) {
  labelData.push(RowSevenElem[1].general_properties.symbol);
  cpData.push(RowSevenElem[1].electromagnetic_properties.curie_point);
}
ActinideElem.forEach((elem) => {
  if (elem.electromagnetic_properties?.curie_point) {
    labelData.push(elem.general_properties.symbol);
    cpData.push(elem.electromagnetic_properties.curie_point);
  }
});
RowSevenElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 104) {
    if (elem.electromagnetic_properties?.curie_point) {
      labelData.push(elem.general_properties.symbol);
      cpData.push(elem.electromagnetic_properties.curie_point);
    }
  }
});

export default labelData;
export { cpData };
