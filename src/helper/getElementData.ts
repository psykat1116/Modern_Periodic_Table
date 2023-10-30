import ElementDetailsProps from "@/types/ElementTypes";
import { RowOneElem } from "@/constant/ElementDetails/RowOneElem";
import { RowTwoElem } from "@/constant/ElementDetails/RowTwoElem";
import { RowThreeElem } from "@/constant/ElementDetails/RowThreeElem";
import { RowFourElem } from "@/constant/ElementDetails/RowFourElem";
import { RowFiveElem } from "@/constant/ElementDetails/RowFiveElem";
import { RowSixElem } from "@/constant/ElementDetails/RowSixElem";
import { RowSevenElem } from "@/constant/ElementDetails/RowSevenElem";
import { LanthanideElem } from "@/constant/ElementDetails/LanthanideElem";
import { ActinideElem } from "@/constant/ElementDetails/ActinideElem";

export default function getElementData(id: number) {
  let element: ElementDetailsProps | null = null;
  if (id <= 2) {
    element = RowOneElem.find(
      (elem: ElementDetailsProps) => elem.id === id
    ) as ElementDetailsProps;
  } else if (id >= 3 && id <= 10) {
    element = RowTwoElem.find(
      (elem: ElementDetailsProps) => elem.id === id
    ) as ElementDetailsProps;
  } else if (id >= 11 && id <= 18) {
    element = RowThreeElem.find(
      (elem: ElementDetailsProps) => elem.id === id
    ) as ElementDetailsProps;
  } else if (id >= 19 && id <= 36) {
    element = RowFourElem.find(
      (elem: ElementDetailsProps) => elem.id === id
    ) as ElementDetailsProps;
  } else if (id >= 37 && id <= 54) {
    element = RowFiveElem.find(
      (elem: ElementDetailsProps) => elem.id === id
    ) as ElementDetailsProps;
  } else if (id >= 57 && id <= 71) {
    element = LanthanideElem.find(
      (elem: ElementDetailsProps) => elem.id === id
    ) as ElementDetailsProps;
  } else if (id >= 89 && id <= 103) {
    element = ActinideElem.find(
      (elem: ElementDetailsProps) => elem.id === id
    ) as ElementDetailsProps;
  } else if (id >= 55 && id <= 86) {
    element = RowSixElem.find(
      (elem: ElementDetailsProps) => elem.id === id
    ) as ElementDetailsProps;
  } else if (id >= 87 && id <= 118) {
    element = RowSevenElem.find(
      (elem: ElementDetailsProps) => elem.id === id
    ) as ElementDetailsProps;
  }
  return element;
}
