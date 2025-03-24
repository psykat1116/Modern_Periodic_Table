"use client";
import { cn } from "@/lib/utils";
import { useContext } from "react";

import data from "@/constant/GraphData/VickersHardness";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Graph from "@/components/Graph";

const Page = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <Card
      className={cn(
        "relative w-[95%] h-[30rem] mt-6",
        theme === "dark"
          ? "bg-bg_dark text-bg_light_placeholder"
          : "bg-bg_light text-bg_dark_placeholder"
      )}
    >
      <CardHeader>
        <CardTitle>Vickers Hardness (MPa)</CardTitle>
        <CardDescription>
          Material hardness measured using a diamond pyramid indenter under
          load, assessing resistance to indentation.
        </CardDescription>
      </CardHeader>
      <CardContent className="relative h-[25rem] w-full">
        <Graph data={data} />
      </CardContent>
    </Card>
  );
};

export default Page;
