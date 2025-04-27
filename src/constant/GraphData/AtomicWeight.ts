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
