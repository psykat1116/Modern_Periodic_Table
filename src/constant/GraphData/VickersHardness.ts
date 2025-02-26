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
  if (elem.material_properties?.vickers_hardness) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.material_properties.vickers_hardness,
    });
  }
});
RowTwoElem.forEach((elem) => {
  if (elem.material_properties?.vickers_hardness) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.material_properties.vickers_hardness,
    });
  }
});
RowThreeElem.forEach((elem) => {
  if (elem.material_properties?.vickers_hardness) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.material_properties.vickers_hardness,
    });
  }
});
RowFourElem.forEach((elem) => {
  if (elem.material_properties?.vickers_hardness) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.material_properties.vickers_hardness,
    });
  }
});
RowFiveElem.forEach((elem) => {
  if (elem.material_properties?.vickers_hardness) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.material_properties.vickers_hardness,
    });
  }
});
if (RowSixElem[0].material_properties?.vickers_hardness) {
  data.push({
    label: RowSixElem[0].general_properties.symbol,
    value: RowSixElem[0].material_properties.vickers_hardness,
  });
}
if (RowSixElem[1].material_properties?.vickers_hardness) {
  data.push({
    label: RowSixElem[1].general_properties.symbol,
    value: RowSixElem[1].material_properties.vickers_hardness,
  });
}
LanthanideElem.forEach((elem) => {
  if (elem.material_properties?.vickers_hardness) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.material_properties.vickers_hardness,
    });
  }
});
RowSixElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 72) {
    if (elem.material_properties?.vickers_hardness) {
      data.push({
        label: elem.general_properties.symbol,
        value: elem.material_properties.vickers_hardness,
      });
    }
  }
});
if (RowSevenElem[0].material_properties?.vickers_hardness) {
  data.push({
    label: RowSevenElem[0].general_properties.symbol,
    value: RowSevenElem[0].material_properties.vickers_hardness,
  });
}
if (RowSevenElem[1].material_properties?.vickers_hardness) {
  data.push({
    label: RowSevenElem[1].general_properties.symbol,
    value: RowSevenElem[1].material_properties.vickers_hardness,
  });
}
ActinideElem.forEach((elem) => {
  if (elem.material_properties?.vickers_hardness) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.material_properties.vickers_hardness,
    });
  }
});
RowSevenElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 104) {
    if (elem.material_properties?.vickers_hardness) {
      data.push({
        label: elem.general_properties.symbol,
        value: elem.material_properties.vickers_hardness,
      });
    }
  }
});

export default data;
