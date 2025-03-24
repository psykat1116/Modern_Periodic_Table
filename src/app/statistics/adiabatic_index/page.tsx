"use client";
import { cn } from "@/lib/utils";
import { useContext } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Graph from "@/components/Graph";
import data from "@/constant/GraphData/AdiabaticIndex";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

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
        <CardTitle>Adiabatic Index</CardTitle>
        <CardDescription>
          Ratio of specific heats, indicating how gases expand or compress
          without heat exchange, affecting thermodynamic processes.
        </CardDescription>
      </CardHeader>
      <CardContent className="relative h-[25rem] w-full">
        <Graph data={data} />
      </CardContent>
    </Card>
  );
};

export default Page;
