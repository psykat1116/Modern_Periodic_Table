import { LanthanideElem } from "../ElementDetails/LanthanideElem";
import { ActinideElem } from "../ElementDetails/ActinideElem";
import { RowOneElem } from "../ElementDetails/RowOneElem";
import { RowTwoElem } from "../ElementDetails/RowTwoElem";
import { RowThreeElem } from "../ElementDetails/RowThreeElem";
import { RowFourElem } from "../ElementDetails/RowFourElem";
import { RowFiveElem } from "../ElementDetails/RowFiveElem";
import { RowSixElem } from "../ElementDetails/RowSixElem";
import { RowSevenElem } from "../ElementDetails/RowSevenElem";

import { ChartData } from "@/types/BoxTypes";

const data: ChartData[] = [];

RowOneElem.forEach((elem) => {
  if (elem.material_properties?.density) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.material_properties.density,
    });
  }
});
RowTwoElem.forEach((elem) => {
  if (elem.material_properties?.density) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.material_properties.density,
    });
  }
});
RowThreeElem.forEach((elem) => {
  if (elem.material_properties?.density) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.material_properties.density,
    });
  }
});
RowFourElem.forEach((elem) => {
  if (elem.material_properties?.density) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.material_properties.density,
    });
  }
});
RowFiveElem.forEach((elem) => {
  if (elem.material_properties?.density) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.material_properties.density,
    });
  }
});
if (RowSixElem[0].material_properties?.density) {
  data.push({
    label: RowSixElem[0].general_properties.symbol,
    value: RowSixElem[0].material_properties.density,
  });
}
if (RowSixElem[1].material_properties?.density) {
  data.push({
    label: RowSixElem[1].general_properties.symbol,
    value: RowSixElem[1].material_properties.density,
  });
}
LanthanideElem.forEach((elem) => {
  if (elem.material_properties?.density) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.material_properties.density,
    });
  }
});
RowSixElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 72) {
    if (elem.material_properties?.density) {
      data.push({
        label: elem.general_properties.symbol,
        value: elem.material_properties.density,
      });
    }
  }
});
if (RowSevenElem[0].material_properties?.density) {
  data.push({
    label: RowSevenElem[0].general_properties.symbol,
    value: RowSevenElem[0].material_properties.density,
  });
}
if (RowSevenElem[1].material_properties?.density) {
  data.push({
    label: RowSevenElem[1].general_properties.symbol,
    value: RowSevenElem[1].material_properties.density,
  });
}
ActinideElem.forEach((elem) => {
  if (elem.material_properties?.density) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.material_properties.density,
    });
  }
});
RowSevenElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 104) {
    if (elem.material_properties?.density) {
      data.push({
        label: elem.general_properties.symbol,
        value: elem.material_properties.density,
      });
    }
  }
});

export default data;
