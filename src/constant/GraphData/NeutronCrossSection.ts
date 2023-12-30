import { LanthanideElem } from "../ElementDetails/LanthanideElem";
import { ActinideElem } from "../ElementDetails/ActinideElem";
import { RowOneElem } from "../ElementDetails/RowOneElem";
import { RowTwoElem } from "../ElementDetails/RowTwoElem";
import { RowThreeElem } from "../ElementDetails/RowThreeElem";
import { RowFourElem } from "../ElementDetails/RowFourElem";
import { RowFiveElem } from "../ElementDetails/RowFiveElem";
import { RowSixElem } from "../ElementDetails/RowSixElem";
import { RowSevenElem } from "../ElementDetails/RowSevenElem";

const ncsData: number[] = [];
const labelData: string[] = [];

RowOneElem.forEach((elem) => {
  if (elem.neuclear_properties?.neutron_cross_section) {
    labelData.push(elem.general_properties.symbol);
    ncsData.push(elem.neuclear_properties.neutron_cross_section);
  }
});
RowTwoElem.forEach((elem) => {
  if (elem.neuclear_properties?.neutron_cross_section) {
    labelData.push(elem.general_properties.symbol);
    ncsData.push(elem.neuclear_properties.neutron_cross_section);
  }
});
RowThreeElem.forEach((elem) => {
  if (elem.neuclear_properties?.neutron_cross_section) {
    labelData.push(elem.general_properties.symbol);
    ncsData.push(elem.neuclear_properties.neutron_cross_section);
  }
});
RowFourElem.forEach((elem) => {
  if (elem.neuclear_properties?.neutron_cross_section) {
    labelData.push(elem.general_properties.symbol);
    ncsData.push(elem.neuclear_properties.neutron_cross_section);
  }
});
RowFiveElem.forEach((elem) => {
  if (elem.neuclear_properties?.neutron_cross_section) {
    labelData.push(elem.general_properties.symbol);
    ncsData.push(elem.neuclear_properties.neutron_cross_section);
  }
});
if (RowSixElem[0].neuclear_properties?.neutron_cross_section) {
  labelData.push(RowSixElem[0].general_properties.symbol);
  ncsData.push(RowSixElem[0].neuclear_properties.neutron_cross_section);
}
if (RowSixElem[1].neuclear_properties?.neutron_cross_section) {
  labelData.push(RowSixElem[1].general_properties.symbol);
  ncsData.push(RowSixElem[1].neuclear_properties.neutron_cross_section);
}
LanthanideElem.forEach((elem) => {
  if (elem.neuclear_properties?.neutron_cross_section) {
    labelData.push(elem.general_properties.symbol);
    ncsData.push(elem.neuclear_properties.neutron_cross_section);
  }
});
RowSixElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 72) {
    if (elem.neuclear_properties?.neutron_cross_section) {
      labelData.push(elem.general_properties.symbol);
      ncsData.push(elem.neuclear_properties.neutron_cross_section);
    }
  }
});
if (RowSevenElem[0].neuclear_properties?.neutron_cross_section) {
  labelData.push(RowSevenElem[0].general_properties.symbol);
  ncsData.push(RowSevenElem[0].neuclear_properties.neutron_cross_section);
}
if (RowSevenElem[1].neuclear_properties?.neutron_cross_section) {
  labelData.push(RowSevenElem[1].general_properties.symbol);
  ncsData.push(RowSevenElem[1].neuclear_properties.neutron_cross_section);
}
ActinideElem.forEach((elem) => {
  if (elem.neuclear_properties?.neutron_cross_section) {
    labelData.push(elem.general_properties.symbol);
    ncsData.push(elem.neuclear_properties.neutron_cross_section);
  }
});
RowSevenElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 104) {
    if (elem.neuclear_properties?.neutron_cross_section) {
      labelData.push(elem.general_properties.symbol);
      ncsData.push(elem.neuclear_properties.neutron_cross_section);
    }
  }
});

export default labelData;
export { ncsData };
