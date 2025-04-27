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
  if (elem.material_properties?.mohs_hardness) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.material_properties.mohs_hardness,
    });
  }
});
RowTwoElem.forEach((elem) => {
  if (elem.material_properties?.mohs_hardness) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.material_properties.mohs_hardness,
    });
  }
});
RowThreeElem.forEach((elem) => {
  if (elem.material_properties?.mohs_hardness) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.material_properties.mohs_hardness,
    });
  }
});
RowFourElem.forEach((elem) => {
  if (elem.material_properties?.mohs_hardness) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.material_properties.mohs_hardness,
    });
  }
});
RowFiveElem.forEach((elem) => {
  if (elem.material_properties?.mohs_hardness) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.material_properties.mohs_hardness,
    });
  }
});
if (RowSixElem[0].material_properties?.mohs_hardness) {
  data.push({
    label: RowSixElem[0].general_properties.symbol,
    value: RowSixElem[0].material_properties.mohs_hardness,
  });
}
if (RowSixElem[1].material_properties?.mohs_hardness) {
  data.push({
    label: RowSixElem[1].general_properties.symbol,
    value: RowSixElem[1].material_properties.mohs_hardness,
  });
}
LanthanideElem.forEach((elem) => {
  if (elem.material_properties?.mohs_hardness) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.material_properties.mohs_hardness,
    });
  }
});
RowSixElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 72) {
    if (elem.material_properties?.mohs_hardness) {
      data.push({
        label: elem.general_properties.symbol,
        value: elem.material_properties.mohs_hardness,
      });
    }
  }
});
if (RowSevenElem[0].material_properties?.mohs_hardness) {
  data.push({
    label: RowSevenElem[0].general_properties.symbol,
    value: RowSevenElem[0].material_properties.mohs_hardness,
  });
}
if (RowSevenElem[1].material_properties?.mohs_hardness) {
  data.push({
    label: RowSevenElem[1].general_properties.symbol,
    value: RowSevenElem[1].material_properties.mohs_hardness,
  });
}
ActinideElem.forEach((elem) => {
  if (elem.material_properties?.mohs_hardness) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.material_properties.mohs_hardness,
    });
  }
});
RowSevenElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 104) {
    if (elem.material_properties?.mohs_hardness) {
      data.push({
        label: elem.general_properties.symbol,
        value: elem.material_properties.mohs_hardness,
      });
    }
  }
});

export default data;
