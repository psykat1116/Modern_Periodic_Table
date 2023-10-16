import React from "react";
import Box from "./Box";
import { LanthanideElements } from "@/constant/Lanthanide";

const Lanthanide = () => {
  return (
    <div className="flex gap-1.5">
      {LanthanideElements.map((elements) => {
        return (
          <Box
            id={elements.id}
            key={elements.id}
            category={elements.category}
            name={elements.name}
          />
        );
      })}
    </div>
  );
};

export default Lanthanide;
