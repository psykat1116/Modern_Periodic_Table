import { LanthanideElem } from "../ElementDetails/LanthanideElem";
import { ActinideElem } from "../ElementDetails/ActinideElem";
import { RowOneElem } from "../ElementDetails/RowOneElem";
import { RowTwoElem } from "../ElementDetails/RowTwoElem";
import { RowThreeElem } from "../ElementDetails/RowThreeElem";
import { RowFourElem } from "../ElementDetails/RowFourElem";
import { RowFiveElem } from "../ElementDetails/RowFiveElem";
import { RowSixElem } from "../ElementDetails/RowSixElem";
import { RowSevenElem } from "../ElementDetails/RowSevenElem";

const nmaData: number[] = [];
const labelData: string[] = [];

RowOneElem.forEach((elem) => {
  if (elem.neuclear_properties?.neutron_mass_absorption) {
    labelData.push(elem.general_properties.symbol);
    nmaData.push(elem.neuclear_properties.neutron_mass_absorption);
  }
});
RowTwoElem.forEach((elem) => {
  if (elem.neuclear_properties?.neutron_mass_absorption) {
    labelData.push(elem.general_properties.symbol);
    nmaData.push(elem.neuclear_properties.neutron_mass_absorption);
  }
});
RowThreeElem.forEach((elem) => {
  if (elem.neuclear_properties?.neutron_mass_absorption) {
    labelData.push(elem.general_properties.symbol);
    nmaData.push(elem.neuclear_properties.neutron_mass_absorption);
  }
});
RowFourElem.forEach((elem) => {
  if (elem.neuclear_properties?.neutron_mass_absorption) {
    labelData.push(elem.general_properties.symbol);
    nmaData.push(elem.neuclear_properties.neutron_mass_absorption);
  }
});
RowFiveElem.forEach((elem) => {
  if (elem.neuclear_properties?.neutron_mass_absorption) {
    labelData.push(elem.general_properties.symbol);
    nmaData.push(elem.neuclear_properties.neutron_mass_absorption);
  }
});
if (RowSixElem[0].neuclear_properties?.neutron_mass_absorption) {
  labelData.push(RowSixElem[0].general_properties.symbol);
  nmaData.push(RowSixElem[0].neuclear_properties.neutron_mass_absorption);
}
if (RowSixElem[1].neuclear_properties?.neutron_mass_absorption) {
  labelData.push(RowSixElem[1].general_properties.symbol);
  nmaData.push(RowSixElem[1].neuclear_properties.neutron_mass_absorption);
}
LanthanideElem.forEach((elem) => {
  if (elem.neuclear_properties?.neutron_mass_absorption) {
    labelData.push(elem.general_properties.symbol);
    nmaData.push(elem.neuclear_properties.neutron_mass_absorption);
  }
});
RowSixElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 72) {
    if (elem.neuclear_properties?.neutron_mass_absorption) {
      labelData.push(elem.general_properties.symbol);
      nmaData.push(elem.neuclear_properties.neutron_mass_absorption);
    }
  }
});
if (RowSevenElem[0].neuclear_properties?.neutron_mass_absorption) {
  labelData.push(RowSevenElem[0].general_properties.symbol);
  nmaData.push(RowSevenElem[0].neuclear_properties.neutron_mass_absorption);
}
if (RowSevenElem[1].neuclear_properties?.neutron_mass_absorption) {
  labelData.push(RowSevenElem[1].general_properties.symbol);
  nmaData.push(RowSevenElem[1].neuclear_properties.neutron_mass_absorption);
}
ActinideElem.forEach((elem) => {
  if (elem.neuclear_properties?.neutron_mass_absorption) {
    labelData.push(elem.general_properties.symbol);
    nmaData.push(elem.neuclear_properties.neutron_mass_absorption);
  }
});
RowSevenElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 104) {
    if (elem.neuclear_properties?.neutron_mass_absorption) {
      labelData.push(elem.general_properties.symbol);
      nmaData.push(elem.neuclear_properties.neutron_mass_absorption);
    }
  }
});

export default labelData;
export { nmaData };
