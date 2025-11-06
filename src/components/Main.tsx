"use client";

import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";

import Topbar from "@/components/Topbar";
import Skeleton from "@/components/Skeleton";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import getElementData from "@/helper/getElementData";
import type ElementDetailsProps from "@/types/ElementTypes";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

const Main = () => {
  const { id }: { id: string } = useParams();
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  const [elem, setElem] = useState<ElementDetailsProps | null>(null);

  useEffect(() => {
    setElem(getElementData(parseInt(id)));
  }, [id]);

  return (
    <div
      className={`flex items-center justify-center ${
        theme === "dark" ? "bg-dark_primary" : "bg-light_primary"
      }`}
    >
      <div
        className={`flex flex-col min-h-screen md:w-full 2xl:max-w-[80rem] 2xl:border-x-2 w-full ${
          theme === "dark"
            ? "bg-dark_primary border-light_primary"
            : "bg-light_primary border-dark_primary"
        } justify-start items-center`}
      >
        <Topbar elem={elem} />
        {!elem ? (
          <Skeleton />
        ) : (
          <div className="relative w-full my-2 p-6 flex justify-between items-start z-[5] max-sm:flex-col">
            <LeftSide elem={elem} />
            <RightSide elem={elem} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
