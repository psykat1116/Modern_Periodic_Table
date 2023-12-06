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

const GetOrbit = ({ id }: { id: string }) => {
  switch (id) {
    case "1":
      return <Hydrogen Symbol="H" />;
      break;
    case "2":
      return <Helium Symbol="He" />;
      break;
    case "3":
      return <Lithium Symbol="Li" />;
      break;
    case "4":
      return <Beryllium Symbol="Be" />;
      break;
    case "5":
      return <Boron Symbol="Be" />;
      break;
    case "6":
      return <Carbon Symbol="C" />;
      break;
    case "7":
      return <Nitrogen Symbol="N" />;
      break;
    case "8":
      return <Oxygen Symbol="O" />;
      break;
    case "9":
      return <Fluorine Symbol="F" />;
      break;
    case "10":
      return <Neon Symbol="Ne" />;
      break;
    default:
      return <Hydrogen Symbol="H" />;
      break;
  }
};

export default GetOrbit;
