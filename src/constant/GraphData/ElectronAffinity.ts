import type { ChartData } from "@/types/BoxTypes";
import { RowOneElem } from "@/constant/ElementDetails/RowOneElem";
import { RowTwoElem } from "@/constant/ElementDetails/RowTwoElem";
import { RowSixElem } from "@/constant/ElementDetails/RowSixElem";
import { RowFiveElem } from "@/constant/ElementDetails/RowFiveElem";
import { RowFourElem } from "@/constant/ElementDetails/RowFourElem";
import { RowThreeElem } from "@/constant/ElementDetails/RowThreeElem";
import { ActinideElem } from "@/constant/ElementDetails/ActinideElem";
import { RowSevenElem } from "@/constant/ElementDetails/RowSevenElem";
import { LanthanideElem } from "@/constant/ElementDetails/LanthanideElem";

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
