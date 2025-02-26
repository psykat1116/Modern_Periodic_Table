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
  if (elem.thermodynamic_properties?.adiabatic_index) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.thermodynamic_properties.adiabatic_index,
    });
  }
});

RowTwoElem.forEach((elem) => {
  if (elem.thermodynamic_properties?.adiabatic_index) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.thermodynamic_properties.adiabatic_index,
    });
  }
});

RowThreeElem.forEach((elem) => {
  if (elem.thermodynamic_properties?.adiabatic_index) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.thermodynamic_properties.adiabatic_index,
    });
  }
});

RowFourElem.forEach((elem) => {
  if (elem.thermodynamic_properties?.adiabatic_index) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.thermodynamic_properties.adiabatic_index,
    });
  }
});

RowFiveElem.forEach((elem) => {
  if (elem.thermodynamic_properties?.adiabatic_index) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.thermodynamic_properties.adiabatic_index,
    });
  }
});

if (RowSixElem[0].thermodynamic_properties?.adiabatic_index) {
  data.push({
    label: RowSixElem[0].general_properties.symbol,
    value: RowSixElem[0].thermodynamic_properties.adiabatic_index,
  });
}

if (RowSixElem[1].thermodynamic_properties?.adiabatic_index) {
  data.push({
    label: RowSixElem[1].general_properties.symbol,
    value: RowSixElem[1].thermodynamic_properties.adiabatic_index,
  });
}

LanthanideElem.forEach((elem) => {
  if (elem.thermodynamic_properties?.adiabatic_index) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.thermodynamic_properties.adiabatic_index,
    });
  }
});

RowSixElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 72) {
    if (elem.thermodynamic_properties?.adiabatic_index) {
      data.push({
        label: elem.general_properties.symbol,
        value: elem.thermodynamic_properties.adiabatic_index,
      });
    }
  }
});

if (RowSevenElem[0].thermodynamic_properties?.adiabatic_index) {
  data.push({
    label: RowSevenElem[0].general_properties.symbol,
    value: RowSevenElem[0].thermodynamic_properties.adiabatic_index,
  });
}

if (RowSevenElem[1].thermodynamic_properties?.adiabatic_index) {
  data.push({
    label: RowSevenElem[1].general_properties.symbol,
    value: RowSevenElem[1].thermodynamic_properties.adiabatic_index,
  });
}

ActinideElem.forEach((elem) => {
  if (elem.thermodynamic_properties?.adiabatic_index) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.thermodynamic_properties.adiabatic_index,
    });
  }
});

RowSevenElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 104) {
    if (elem.thermodynamic_properties?.adiabatic_index) {
      data.push({
        label: elem.general_properties.symbol,
        value: elem.thermodynamic_properties.adiabatic_index,
      });
    }
  }
});

export default data;
