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
  if (elem.material_properties?.shear_modulus) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.material_properties.shear_modulus,
    });
  }
});
RowTwoElem.forEach((elem) => {
  if (elem.material_properties?.shear_modulus) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.material_properties.shear_modulus,
    });
  }
});
RowThreeElem.forEach((elem) => {
  if (elem.material_properties?.shear_modulus) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.material_properties.shear_modulus,
    });
  }
});
RowFourElem.forEach((elem) => {
  if (elem.material_properties?.shear_modulus) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.material_properties.shear_modulus,
    });
  }
});
RowFiveElem.forEach((elem) => {
  if (elem.material_properties?.shear_modulus) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.material_properties.shear_modulus,
    });
  }
});
if (RowSixElem[0].material_properties?.shear_modulus) {
  data.push({
    label: RowSixElem[0].general_properties.symbol,
    value: RowSixElem[0].material_properties.shear_modulus,
  });
}
if (RowSixElem[1].material_properties?.shear_modulus) {
  data.push({
    label: RowSixElem[1].general_properties.symbol,
    value: RowSixElem[1].material_properties.shear_modulus,
  });
}
LanthanideElem.forEach((elem) => {
  if (elem.material_properties?.shear_modulus) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.material_properties.shear_modulus,
    });
  }
});
RowSixElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 72) {
    if (elem.material_properties?.shear_modulus) {
      data.push({
        label: elem.general_properties.symbol,
        value: elem.material_properties.shear_modulus,
      });
    }
  }
});
if (RowSevenElem[0].material_properties?.shear_modulus) {
  data.push({
    label: RowSevenElem[0].general_properties.symbol,
    value: RowSevenElem[0].material_properties.shear_modulus,
  });
}
if (RowSevenElem[1].material_properties?.shear_modulus) {
  data.push({
    label: RowSevenElem[1].general_properties.symbol,
    value: RowSevenElem[1].material_properties.shear_modulus,
  });
}
ActinideElem.forEach((elem) => {
  if (elem.material_properties?.shear_modulus) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.material_properties.shear_modulus,
    });
  }
});
RowSevenElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 104) {
    if (elem.material_properties?.shear_modulus) {
      data.push({
        label: elem.general_properties.symbol,
        value: elem.material_properties.shear_modulus,
      });
    }
  }
});

export default data;
