"use client";
import { useContext } from "react";

import Graph from "@/components/Graph";
import data from "@/constant/GraphData/CovalentRadius";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

const Page = () => {
  return (
    <Graph
      data={data}
      title="Covalent Radius (Pm)"
      description="alf the distance between two identical atoms bonded covalently, indicating atomic size and bond strength."
    />
  );
};

export default Page;
