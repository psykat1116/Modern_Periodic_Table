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
  data.push({
    label: elem.general_properties.symbol,
    value: elem.atomic_properties.atomic_weight,
  });
});
RowTwoElem.forEach((elem) => {
  data.push({
    label: elem.general_properties.symbol,
    value: elem.atomic_properties.atomic_weight,
  });
});
RowThreeElem.forEach((elem) => {
  data.push({
    label: elem.general_properties.symbol,
    value: elem.atomic_properties.atomic_weight,
  });
});
RowFourElem.forEach((elem) => {
  data.push({
    label: elem.general_properties.symbol,
    value: elem.atomic_properties.atomic_weight,
  });
});
RowFiveElem.forEach((elem) => {
  data.push({
    label: elem.general_properties.symbol,
    value: elem.atomic_properties.atomic_weight,
  });
});
data.push(
  {
    label: RowSixElem[0].general_properties.symbol,
    value: RowSixElem[0].atomic_properties.atomic_weight,
  },
  {
    label: RowSixElem[1].general_properties.symbol,
    value: RowSixElem[1].atomic_properties.atomic_weight,
  }
);
LanthanideElem.forEach((elem) => {
  data.push({
    label: elem.general_properties.symbol,
    value: elem.atomic_properties.atomic_weight,
  });
});
RowSixElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 72) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.atomic_properties.atomic_weight,
    });
  }
});
data.push(
  {
    label: RowSevenElem[0].general_properties.symbol,
    value: RowSevenElem[0].atomic_properties.atomic_weight,
  },
  {
    label: RowSevenElem[1].general_properties.symbol,
    value: RowSevenElem[1].atomic_properties.atomic_weight,
  }
);
ActinideElem.forEach((elem) => {
  data.push({
    label: elem.general_properties.symbol,
    value: elem.atomic_properties.atomic_weight,
  });
});
RowSevenElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 104) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.atomic_properties.atomic_weight,
    });
  }
});

export default data;
