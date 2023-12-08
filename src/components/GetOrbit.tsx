import React from "react";
import {
  Hydrogen,
  Helium,
  Lithium,
  Beryllium,
  Boron,
  Carbon,
  Nitrogen,
  Oxygen,
  Fluorine,
  Neon,
  Sodium,
  Magnesium,
  Aluminium,
  Silicon,
  Phosphorus,
  Sulphur,
  Chlorine,
  Argon,
  Potassium,
  Calcium,
  Scandium,
  Titanium,
  Vanadium,
  Chromium,
  Manganese,
  Iron,
  Cobalt,
  Nickel,
  Copper,
  Zinc,
  Gallium,
  Germanium,
  Arsenic,
  Selenium,
  Bromine,
  Krypton,
  Rubidium,
  Strontium,
} from "./Orbit/index";

const GetOrbit = ({ id }: { id: string }) => {
  switch (id) {
    case "1":
      return <Hydrogen />;
      break;
    case "2":
      return <Helium />;
      break;
    case "3":
      return <Lithium />;
      break;
    case "4":
      return <Beryllium />;
      break;
    case "5":
      return <Boron />;
      break;
    case "6":
      return <Carbon />;
      break;
    case "7":
      return <Nitrogen />;
      break;
    case "8":
      return <Oxygen />;
      break;
    case "9":
      return <Fluorine />;
      break;
    case "10":
      return <Neon />;
      break;
    case "11":
      return <Sodium />;
      break;
    case "12":
      return <Magnesium />;
      break;
    case "13":
      return <Aluminium />;
      break;
    case "14":
      return <Silicon />;
      break;
    case "15":
      return <Phosphorus />;
      break;
    case "16":
      return <Sulphur />;
      break;
    case "17":
      return <Chlorine />;
      break;
    case "18":
      return <Argon />;
      break;
    case "19":
      return <Potassium />;
      break;
    case "20":
      return <Calcium />;
      break;
    case "21":
      return <Scandium />;
      break;
    case "22":
      return <Titanium />;
      break;
    case "23":
      return <Vanadium />;
      break;
    case "24":
      return <Chromium />;
      break;
    case "25":
      return <Manganese />;
      break;
    case "26":
      return <Iron />;
      break;
    case "27":
      return <Cobalt />;
      break;
    case "28":
      return <Nickel />;
      break;
    case "29":
      return <Copper />;
      break;
    case "30":
      return <Zinc />;
      break;
    case "31":
      return <Gallium />;
      break;
    case "32":
      return <Germanium />;
      break;
    case "33":
      return <Arsenic />;
      break;
    case "34":
      return <Selenium />;
      break;
    case "35":
      return <Bromine />;
      break;
    case "36":
      return <Krypton />;
      break;
    case "37":
      return <Rubidium />;
      break;
    case "38":
      return <Strontium />;
      break;
    default:
      return <Hydrogen />;
      break;
  }
};

export default GetOrbit;
