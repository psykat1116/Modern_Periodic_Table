import React from "react";
import Hydrogen from "./Orbit/Hydrogen";
import Helium from "./Orbit/Helium";

const GetOrbit = ({ id }: { id: string }) => {
  switch (id) {
    case "1":
      return <Hydrogen Symbol="H" />;
      break;
    case "2":
      return <Helium Symbol="He" />;
      break;
    default:
      return <Hydrogen Symbol="H" />;
      break;
  }
};

export default GetOrbit;
