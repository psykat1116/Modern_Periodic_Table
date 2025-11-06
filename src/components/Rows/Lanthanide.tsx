import React from "react";
import Box from "@/components/Boxes/Box";
import BlankBox from "@/components/Boxes/BlankBox";
import { LanthanideElements } from "@/constant/Elements/Lanthanide";

const Lanthanide = () => {
  return (
    <div className="flex gap-1.5">
      <BlankBox limit=""/>
      <BlankBox limit=""/>
      <BlankBox limit=""/>
      <BlankBox limit=""/>
      {LanthanideElements.map((elements) => {
        return (
          <Box
            id={elements.id}
            key={elements.id}
            category={elements.category}
            name={elements.name}
            groups={elements.groups}
          />
        );
      })}
    </div>
  );
};

export default Lanthanide;
