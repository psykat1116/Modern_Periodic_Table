import React from "react";
import Box from "@/components/Boxes/Box";
import BlankBox from "@/components/Boxes/BlankBox";
import { ActinideElements } from "@/constant/Elements/Actinides";

const Actinides = () => {
  return (
    <div className="flex gap-1.5">
      <BlankBox limit="" />
      <BlankBox limit="" />
      <BlankBox limit="" />
      <BlankBox limit="" />
      {ActinideElements.map((elements) => {
        return (
          <Box
            key={elements.id}
            category={elements.category}
            id={elements.id}
            name={elements.name}
            groups={elements.groups}
          />
        );
      })}
    </div>
  );
};

export default Actinides;
