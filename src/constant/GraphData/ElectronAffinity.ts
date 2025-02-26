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
  if (elem.reactivity?.electron_affinity) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.reactivity.electron_affinity,
    });
  }
});
RowTwoElem.forEach((elem) => {
  if (elem.reactivity?.electron_affinity) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.reactivity.electron_affinity,
    });
  }
});
RowThreeElem.forEach((elem) => {
  if (elem.reactivity?.electron_affinity) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.reactivity.electron_affinity,
    });
  }
});
RowFourElem.forEach((elem) => {
  if (elem.reactivity?.electron_affinity) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.reactivity.electron_affinity,
    });
  }
});
RowFiveElem.forEach((elem) => {
  if (elem.reactivity?.electron_affinity) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.reactivity.electron_affinity,
    });
  }
});
if (RowSixElem[0].reactivity?.electron_affinity) {
  data.push({
    label: RowSixElem[0].general_properties.symbol,
    value: RowSixElem[0].reactivity.electron_affinity,
  });
}
if (RowSixElem[1].reactivity?.electron_affinity) {
  data.push({
    label: RowSixElem[1].general_properties.symbol,
    value: RowSixElem[1].reactivity.electron_affinity,
  });
}
LanthanideElem.forEach((elem) => {
  if (elem.reactivity?.electron_affinity) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.reactivity.electron_affinity,
    });
  }
});
RowSixElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 72) {
    if (elem.reactivity?.electron_affinity) {
      data.push({
        label: elem.general_properties.symbol,
        value: elem.reactivity.electron_affinity,
      });
    }
  }
});
if (RowSevenElem[0].reactivity?.electron_affinity) {
  data.push({
    label: RowSevenElem[0].general_properties.symbol,
    value: RowSevenElem[0].reactivity.electron_affinity,
  });
}
if (RowSevenElem[1].reactivity?.electron_affinity) {
  data.push({
    label: RowSevenElem[1].general_properties.symbol,
    value: RowSevenElem[1].reactivity.electron_affinity,
  });
}
ActinideElem.forEach((elem) => {
  if (elem.reactivity?.electron_affinity) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.reactivity.electron_affinity,
    });
  }
});
RowSevenElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 104) {
    if (elem.reactivity?.electron_affinity) {
      data.push({
        label: elem.general_properties.symbol,
        value: elem.reactivity.electron_affinity,
      });
    }
  }
});

export default data;
