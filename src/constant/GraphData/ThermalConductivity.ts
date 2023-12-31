import { LanthanideElem } from "../ElementDetails/LanthanideElem";
import { ActinideElem } from "../ElementDetails/ActinideElem";
import { RowOneElem } from "../ElementDetails/RowOneElem";
import { RowTwoElem } from "../ElementDetails/RowTwoElem";
import { RowThreeElem } from "../ElementDetails/RowThreeElem";
import { RowFourElem } from "../ElementDetails/RowFourElem";
import { RowFiveElem } from "../ElementDetails/RowFiveElem";
import { RowSixElem } from "../ElementDetails/RowSixElem";
import { RowSevenElem } from "../ElementDetails/RowSevenElem";

const tcData: number[] = [];
const labelData: string[] = [];

RowOneElem.forEach((elem) => {
  if (elem.material_properties?.thermal_conductivity) {
    labelData.push(elem.general_properties.symbol);
    tcData.push(elem.material_properties?.thermal_conductivity);
  }
});
RowTwoElem.forEach((elem) => {
  if (elem.material_properties?.thermal_conductivity) {
    labelData.push(elem.general_properties.symbol);
    tcData.push(elem.material_properties?.thermal_conductivity);
  }
});
RowThreeElem.forEach((elem) => {
  if (elem.material_properties?.thermal_conductivity) {
    labelData.push(elem.general_properties.symbol);
    tcData.push(elem.material_properties?.thermal_conductivity);
  }
});
RowFourElem.forEach((elem) => {
  if (elem.material_properties?.thermal_conductivity) {
    labelData.push(elem.general_properties.symbol);
    tcData.push(elem.material_properties?.thermal_conductivity);
  }
});
RowFiveElem.forEach((elem) => {
  if (elem.material_properties?.thermal_conductivity) {
    labelData.push(elem.general_properties.symbol);
    tcData.push(elem.material_properties?.thermal_conductivity);
  }
});
if (RowSixElem[0].material_properties?.thermal_conductivity) {
  labelData.push(RowSixElem[0].general_properties.symbol);
  tcData.push(RowSixElem[0].material_properties?.thermal_conductivity);
}
if (RowSixElem[1].material_properties?.thermal_conductivity) {
  labelData.push(RowSixElem[1].general_properties.symbol);
  tcData.push(RowSixElem[1].material_properties?.thermal_conductivity);
}
LanthanideElem.forEach((elem) => {
  if (elem.material_properties?.thermal_conductivity) {
    labelData.push(elem.general_properties.symbol);
    tcData.push(elem.material_properties?.thermal_conductivity);
  }
});
RowSixElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 72) {
    if (elem.material_properties?.thermal_conductivity) {
      labelData.push(elem.general_properties.symbol);
      tcData.push(elem.material_properties?.thermal_conductivity);
    }
  }
});
if (RowSevenElem[0].material_properties?.thermal_conductivity) {
  labelData.push(RowSevenElem[0].general_properties.symbol);
  tcData.push(RowSevenElem[0].material_properties?.thermal_conductivity);
}
if (RowSevenElem[1].material_properties?.thermal_conductivity) {
  labelData.push(RowSevenElem[1].general_properties.symbol);
  tcData.push(RowSevenElem[1].material_properties?.thermal_conductivity);
}
ActinideElem.forEach((elem) => {
  if (elem.material_properties?.thermal_conductivity) {
    labelData.push(elem.general_properties.symbol);
    tcData.push(elem.material_properties?.thermal_conductivity);
  }
});
RowSevenElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 104) {
    if (elem.material_properties?.thermal_conductivity) {
      labelData.push(elem.general_properties.symbol);
      tcData.push(elem.material_properties?.thermal_conductivity);
    }
  }
});

export default labelData;
export { tcData };
