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
  if (elem.atomic_properties.covalent_radius) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.atomic_properties.covalent_radius,
    });
  }
});
RowTwoElem.forEach((elem) => {
  if (elem.atomic_properties.covalent_radius) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.atomic_properties.covalent_radius,
    });
  }
});
RowThreeElem.forEach((elem) => {
  if (elem.atomic_properties.covalent_radius) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.atomic_properties.covalent_radius,
    });
  }
});
RowFourElem.forEach((elem) => {
  if (elem.atomic_properties.covalent_radius) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.atomic_properties.covalent_radius,
    });
  }
});
RowFiveElem.forEach((elem) => {
  if (elem.atomic_properties.covalent_radius) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.atomic_properties.covalent_radius,
    });
  }
});
if (RowSixElem[0].atomic_properties.covalent_radius) {
  data.push({
    label: RowSixElem[0].general_properties.symbol,
    value: RowSixElem[0].atomic_properties.covalent_radius,
  });
}
if (RowSixElem[1].atomic_properties.covalent_radius) {
  data.push({
    label: RowSixElem[1].general_properties.symbol,
    value: RowSixElem[1].atomic_properties.covalent_radius,
  });
}
LanthanideElem.forEach((elem) => {
  if (elem.atomic_properties.covalent_radius) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.atomic_properties.covalent_radius,
    });
  }
});
RowSixElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 72) {
    if (elem.atomic_properties.covalent_radius) {
      data.push({
        label: elem.general_properties.symbol,
        value: elem.atomic_properties.covalent_radius,
      });
    }
  }
});
if (RowSevenElem[0].atomic_properties.covalent_radius) {
  data.push({
    label: RowSevenElem[0].general_properties.symbol,
    value: RowSevenElem[0].atomic_properties.covalent_radius,
  });
}
if (RowSevenElem[1].atomic_properties.covalent_radius) {
  data.push({
    label: RowSevenElem[1].general_properties.symbol,
    value: RowSevenElem[1].atomic_properties.covalent_radius,
  });
}
ActinideElem.forEach((elem) => {
  if (elem.atomic_properties.covalent_radius) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.atomic_properties.covalent_radius,
    });
  }
});
RowSevenElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 104) {
    if (elem.atomic_properties.covalent_radius) {
      data.push({
        label: elem.general_properties.symbol,
        value: elem.atomic_properties.covalent_radius,
      });
    }
  }
});

export default data;
