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
  if (elem.thermodynamic_properties?.vaporization_heat) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.thermodynamic_properties.vaporization_heat,
    });
  }
});
RowTwoElem.forEach((elem) => {
  if (elem.thermodynamic_properties?.vaporization_heat) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.thermodynamic_properties.vaporization_heat,
    });
  }
});
RowThreeElem.forEach((elem) => {
  if (elem.thermodynamic_properties?.vaporization_heat) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.thermodynamic_properties.vaporization_heat,
    });
  }
});
RowFourElem.forEach((elem) => {
  if (elem.thermodynamic_properties?.vaporization_heat) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.thermodynamic_properties.vaporization_heat,
    });
  }
});
RowFiveElem.forEach((elem) => {
  if (elem.thermodynamic_properties?.vaporization_heat) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.thermodynamic_properties.vaporization_heat,
    });
  }
});
if (RowSixElem[0].thermodynamic_properties?.vaporization_heat) {
  data.push({
    label: RowSixElem[0].general_properties.symbol,
    value: RowSixElem[0].thermodynamic_properties.vaporization_heat,
  });
}
if (RowSixElem[1].thermodynamic_properties?.vaporization_heat) {
  data.push({
    label: RowSixElem[1].general_properties.symbol,
    value: RowSixElem[1].thermodynamic_properties.vaporization_heat,
  });
}
LanthanideElem.forEach((elem) => {
  if (elem.thermodynamic_properties?.vaporization_heat) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.thermodynamic_properties.vaporization_heat,
    });
  }
});
RowSixElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 72) {
    if (elem.thermodynamic_properties?.vaporization_heat) {
      data.push({
        label: elem.general_properties.symbol,
        value: elem.thermodynamic_properties.vaporization_heat,
      });
    }
  }
});
if (RowSevenElem[0].thermodynamic_properties?.vaporization_heat) {
  data.push({
    label: RowSevenElem[0].general_properties.symbol,
    value: RowSevenElem[0].thermodynamic_properties.vaporization_heat,
  });
}
if (RowSevenElem[1].thermodynamic_properties?.vaporization_heat) {
  data.push({
    label: RowSevenElem[1].general_properties.symbol,
    value: RowSevenElem[1].thermodynamic_properties.vaporization_heat,
  });
}
ActinideElem.forEach((elem) => {
  if (elem.thermodynamic_properties?.vaporization_heat) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.thermodynamic_properties.vaporization_heat,
    });
  }
});
RowSevenElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 104) {
    if (elem.thermodynamic_properties?.vaporization_heat) {
      data.push({
        label: elem.general_properties.symbol,
        value: elem.thermodynamic_properties.vaporization_heat,
      });
    }
  }
});

export default data;
