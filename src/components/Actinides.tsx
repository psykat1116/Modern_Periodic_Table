import React from "react";
import Box from "./Box";
import { ActinideElements } from "@/constant/Actinides";

const Actinides = () => {
  return (
    <div className="flex gap-1.5">
      {ActinideElements.map((elements) => {
        return (
          <Box
            key={elements.id}
            category={elements.category}
            id={elements.id}
            name={elements.name}
            color={elements.color}
          />
        );
      })}
    </div>
  );
};

export default Actinides;
