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
  if (elem.thermodynamic_properties?.neel_point) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.thermodynamic_properties.neel_point,
    });
  }
});
RowTwoElem.forEach((elem) => {
  if (elem.thermodynamic_properties?.neel_point) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.thermodynamic_properties.neel_point,
    });
  }
});
RowThreeElem.forEach((elem) => {
  if (elem.thermodynamic_properties?.neel_point) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.thermodynamic_properties.neel_point,
    });
  }
});
RowFourElem.forEach((elem) => {
  if (elem.thermodynamic_properties?.neel_point) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.thermodynamic_properties.neel_point,
    });
  }
});
RowFiveElem.forEach((elem) => {
  if (elem.thermodynamic_properties?.neel_point) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.thermodynamic_properties.neel_point,
    });
  }
});
if (RowSixElem[0].thermodynamic_properties?.neel_point) {
  data.push({
    label: RowSixElem[0].general_properties.symbol,
    value: RowSixElem[0].thermodynamic_properties.neel_point,
  });
}
if (RowSixElem[1].thermodynamic_properties?.neel_point) {
  data.push({
    label: RowSixElem[1].general_properties.symbol,
    value: RowSixElem[1].thermodynamic_properties.neel_point,
  });
}
LanthanideElem.forEach((elem) => {
  if (elem.thermodynamic_properties?.neel_point) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.thermodynamic_properties.neel_point,
    });
  }
});
RowSixElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 72) {
    if (elem.thermodynamic_properties?.neel_point) {
      data.push({
        label: elem.general_properties.symbol,
        value: elem.thermodynamic_properties.neel_point,
      });
    }
  }
});
if (RowSevenElem[0].thermodynamic_properties?.neel_point) {
  data.push({
    label: RowSevenElem[0].general_properties.symbol,
    value: RowSevenElem[0].thermodynamic_properties.neel_point,
  });
}
if (RowSevenElem[1].thermodynamic_properties?.neel_point) {
  data.push({
    label: RowSevenElem[1].general_properties.symbol,
    value: RowSevenElem[1].thermodynamic_properties.neel_point,
  });
}
ActinideElem.forEach((elem) => {
  if (elem.thermodynamic_properties?.neel_point) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.thermodynamic_properties.neel_point,
    });
  }
});
RowSevenElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 104) {
    if (elem.thermodynamic_properties?.neel_point) {
      data.push({
        label: elem.general_properties.symbol,
        value: elem.thermodynamic_properties.neel_point,
      });
    }
  }
});

export default data;
