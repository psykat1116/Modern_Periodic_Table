"use client";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Topbar from "./Topbar";
import Skeleton from "./Skeleton";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Particle from "./Particle";
import getElementData from "@/helper/getElementData";
import ElementDetailsProps from "@/types/ElementTypes";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

const Main = () => {
    const { theme } = useContext(ThemeContext) as ThemeContextType;
  const [elem, setElem] = useState<ElementDetailsProps | null>(null);
  const { id }: { id: string } = useParams();

  useEffect(() => {
    setElem(getElementData(parseInt(id)));
  }, [id]);
  return (
    <div
      className={`flex flex-col min-h-screen w-full ${
        theme === "dark" ? "bg-dark_primary" : "bg-light_primary"
      } justify-start items-center`}
    >
      <div className="absolute w-full min-h-screen">
        <Particle number={id} />
      </div>
      <Topbar elem={elem} />
      {!elem ? (
        <Skeleton />
      ) : (
        <div className="relative w-full h-auto my-2 p-6 flex justify-between items-start z-[5] max-sm:flex-col">
          <LeftSide elem={elem} />
          <RightSide elem={elem} />
        </div>
      )}
    </div>
  );
};

export default Main;
