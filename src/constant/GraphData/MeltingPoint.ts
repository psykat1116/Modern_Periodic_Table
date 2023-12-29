import { LanthanideElem } from "../ElementDetails/LanthanideElem";
import { ActinideElem } from "../ElementDetails/ActinideElem";
import { RowOneElem } from "../ElementDetails/RowOneElem";
import { RowTwoElem } from "../ElementDetails/RowTwoElem";
import { RowThreeElem } from "../ElementDetails/RowThreeElem";
import { RowFourElem } from "../ElementDetails/RowFourElem";
import { RowFiveElem } from "../ElementDetails/RowFiveElem";
import { RowSixElem } from "../ElementDetails/RowSixElem";
import { RowSevenElem } from "../ElementDetails/RowSevenElem";

const mpData: number[] = [];
const labelData: string[] = [];

RowOneElem.forEach((elem) => {
  if (elem.thermodynamic_properties?.melting_point) {
    labelData.push(elem.general_properties.symbol);
    mpData.push(elem.thermodynamic_properties.melting_point);
  }
});
RowTwoElem.forEach((elem) => {
  if (elem.thermodynamic_properties?.melting_point) {
    labelData.push(elem.general_properties.symbol);
    mpData.push(elem.thermodynamic_properties.melting_point);
  }
});
RowThreeElem.forEach((elem) => {
  if (elem.thermodynamic_properties?.melting_point) {
    labelData.push(elem.general_properties.symbol);
    mpData.push(elem.thermodynamic_properties.melting_point);
  }
});
RowFourElem.forEach((elem) => {
  if (elem.thermodynamic_properties?.melting_point) {
    labelData.push(elem.general_properties.symbol);
    mpData.push(elem.thermodynamic_properties.melting_point);
  }
});
RowFiveElem.forEach((elem) => {
  if (elem.thermodynamic_properties?.melting_point) {
    labelData.push(elem.general_properties.symbol);
    mpData.push(elem.thermodynamic_properties.melting_point);
  }
});
if (RowSixElem[0].thermodynamic_properties?.melting_point) {
  labelData.push(RowSixElem[0].general_properties.symbol);
  mpData.push(RowSixElem[0].thermodynamic_properties.melting_point);
}
if (RowSixElem[1].thermodynamic_properties?.melting_point) {
  labelData.push(RowSixElem[1].general_properties.symbol);
  mpData.push(RowSixElem[1].thermodynamic_properties.melting_point);
}
LanthanideElem.forEach((elem) => {
  if (elem.thermodynamic_properties?.melting_point) {
    labelData.push(elem.general_properties.symbol);
    mpData.push(elem.thermodynamic_properties.melting_point);
  }
});
RowSixElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 72) {
    if (elem.thermodynamic_properties?.melting_point) {
      labelData.push(elem.general_properties.symbol);
      mpData.push(elem.thermodynamic_properties.melting_point);
    }
  }
});
if (RowSevenElem[0].thermodynamic_properties?.melting_point) {
  labelData.push(RowSevenElem[0].general_properties.symbol);
  mpData.push(RowSevenElem[0].thermodynamic_properties.melting_point);
}
if (RowSevenElem[1].thermodynamic_properties?.melting_point) {
  labelData.push(RowSevenElem[1].general_properties.symbol);
  mpData.push(RowSevenElem[1].thermodynamic_properties.melting_point);
}
ActinideElem.forEach((elem) => {
  if (elem.thermodynamic_properties?.melting_point) {
    labelData.push(elem.general_properties.symbol);
    mpData.push(elem.thermodynamic_properties.melting_point);
  }
});
RowSevenElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 104) {
    if (elem.thermodynamic_properties?.melting_point) {
      labelData.push(elem.general_properties.symbol);
      mpData.push(elem.thermodynamic_properties.melting_point);
    }
  }
});

export default labelData;
export { mpData };
