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
  if (elem.neuclear_properties?.neutron_cross_section) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.neuclear_properties.neutron_cross_section,
    });
  }
});
RowTwoElem.forEach((elem) => {
  if (elem.neuclear_properties?.neutron_cross_section) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.neuclear_properties.neutron_cross_section,
    });
  }
});
RowThreeElem.forEach((elem) => {
  if (elem.neuclear_properties?.neutron_cross_section) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.neuclear_properties.neutron_cross_section,
    });
  }
});
RowFourElem.forEach((elem) => {
  if (elem.neuclear_properties?.neutron_cross_section) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.neuclear_properties.neutron_cross_section,
    });
  }
});
RowFiveElem.forEach((elem) => {
  if (elem.neuclear_properties?.neutron_cross_section) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.neuclear_properties.neutron_cross_section,
    });
  }
});
if (RowSixElem[0].neuclear_properties?.neutron_cross_section) {
  data.push({
    label: RowSixElem[0].general_properties.symbol,
    value: RowSixElem[0].neuclear_properties.neutron_cross_section,
  });
}
if (RowSixElem[1].neuclear_properties?.neutron_cross_section) {
  data.push({
    label: RowSixElem[1].general_properties.symbol,
    value: RowSixElem[1].neuclear_properties.neutron_cross_section,
  });
}
LanthanideElem.forEach((elem) => {
  if (elem.neuclear_properties?.neutron_cross_section) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.neuclear_properties.neutron_cross_section,
    });
  }
});
RowSixElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 72) {
    if (elem.neuclear_properties?.neutron_cross_section) {
      data.push({
        label: elem.general_properties.symbol,
        value: elem.neuclear_properties.neutron_cross_section,
      });
    }
  }
});
if (RowSevenElem[0].neuclear_properties?.neutron_cross_section) {
  data.push({
    label: RowSevenElem[0].general_properties.symbol,
    value: RowSevenElem[0].neuclear_properties.neutron_cross_section,
  });
}
if (RowSevenElem[1].neuclear_properties?.neutron_cross_section) {
  data.push({
    label: RowSevenElem[1].general_properties.symbol,
    value: RowSevenElem[1].neuclear_properties.neutron_cross_section,
  });
}
ActinideElem.forEach((elem) => {
  if (elem.neuclear_properties?.neutron_cross_section) {
    data.push({
      label: elem.general_properties.symbol,
      value: elem.neuclear_properties.neutron_cross_section,
    });
  }
});
RowSevenElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 104) {
    if (elem.neuclear_properties?.neutron_cross_section) {
      data.push({
        label: elem.general_properties.symbol,
        value: elem.neuclear_properties.neutron_cross_section,
      });
    }
  }
});

export default data;
