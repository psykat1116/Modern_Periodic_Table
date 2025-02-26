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
  if (elem.reactivity?.ionization_energy) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.reactivity.ionization_energy,
    });
  }
});
RowTwoElem.forEach((elem) => {
  if (elem.reactivity?.ionization_energy) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.reactivity.ionization_energy,
    });
  }
});
RowThreeElem.forEach((elem) => {
  if (elem.reactivity?.ionization_energy) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.reactivity.ionization_energy,
    });
  }
});
RowFourElem.forEach((elem) => {
  if (elem.reactivity?.ionization_energy) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.reactivity.ionization_energy,
    });
  }
});
RowFiveElem.forEach((elem) => {
  if (elem.reactivity?.ionization_energy) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.reactivity.ionization_energy,
    });
  }
});
if (RowSixElem[0].reactivity?.ionization_energy) {
  data.push({
    label: RowSixElem[0].general_properties.symbol,
    value: RowSixElem[0].reactivity.ionization_energy,
  });
}
if (RowSixElem[1].reactivity?.ionization_energy) {
  data.push({
    label: RowSixElem[1].general_properties.symbol,
    value: RowSixElem[1].reactivity.ionization_energy,
  });
}
LanthanideElem.forEach((elem) => {
  if (elem.reactivity?.ionization_energy) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.reactivity.ionization_energy,
    });
  }
});
RowSixElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 72) {
    if (elem.reactivity?.ionization_energy) {
      data.push({
        label: elem.general_properties.symbol,
        value: elem.reactivity.ionization_energy,
      });
    }
  }
});
if (RowSevenElem[0].reactivity?.ionization_energy) {
  data.push({
    label: RowSevenElem[0].general_properties.symbol,
    value: RowSevenElem[0].reactivity.ionization_energy,
  });
}
if (RowSevenElem[1].reactivity?.ionization_energy) {
  data.push({
    label: RowSevenElem[1].general_properties.symbol,
    value: RowSevenElem[1].reactivity.ionization_energy,
  });
}
ActinideElem.forEach((elem) => {
  if (elem.reactivity?.ionization_energy) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.reactivity.ionization_energy,
    });
  }
});
RowSevenElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 104) {
    if (elem.reactivity?.ionization_energy) {
      data.push({
        label: elem.general_properties.symbol,
        value: elem.reactivity.ionization_energy,
      });
    }
  }
});

export default data;
