import React from "react";
import Hydrogen from "./Orbit/Hydrogen";
import Helium from "./Orbit/Helium";
import Neon from "./Orbit/Neon";
import Lithium from "./Orbit/Lithium";
import Beryllium from "./Orbit/Beryllium";
import Carbon from "./Orbit/Carbon";
import Boron from "./Orbit/Boron";
import Nitrogen from "./Orbit/Nitrogen";
import Oxygen from "./Orbit/Oxygen";
import Fluorine from "./Orbit/Fluorine";
import Sodium from "./Orbit/Sodium";
import Magnesium from "./Orbit/Magnesium";
import Aluminium from "./Orbit/Aluminium";
import Silicon from "./Orbit/Silicon";
import Phosphorus from "./Orbit/Phosphorus";
import Sulphur from "./Orbit/Sulphur";
import Chlorine from "./Orbit/Chlorine";
import Argon from "./Orbit/Argon";
import Potassium from "./Orbit/Potassium";
import Calcium from "./Orbit/Calcium";
import Scandium from "./Orbit/Scandium";
import Titanium from "./Orbit/Titanium";
import Vanadium from "./Orbit/Vanadium";
import Chromium from "./Orbit/Chromium";
import Manganese from "./Orbit/Manganese";
import Iron from "./Orbit/Iron";

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
    default:
      return <Hydrogen />;
      break;
  }
};

export default GetOrbit;
