"use client";
import { cn } from "@/lib/utils";
import { useContext } from "react";

import data from "@/constant/GraphData/AdiabaticIndex";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  dark: {
    label: "Dark",
    color: "var(--bg_dark)",
  },
  light: {
    label: "Light",
    color: "var(--bg_light)",
  },
} satisfies ChartConfig;

const Page = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <Card
      className={cn(
        "relative w-[95%] h-[32rem] mt-10",
        theme === "dark"
          ? "bg-bg_dark text-bg_light_placeholder"
          : "bg-bg_light text-bg_dark_placeholder"
      )}
    >
      <CardHeader>
        <CardTitle>Adiabatic Index</CardTitle>
        <CardDescription>
          Explore This Property For Various Element
        </CardDescription>
      </CardHeader>
      <CardContent className="relative h-[25rem] w-full">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <LineChart
            accessibilityLayer
            data={data}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="label" tickMargin={2} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
              labelClassName="text-bg_dark_placeholder"
            />
            <Line
              dataKey="value"
              type="natural"
              stroke={
                theme === "dark" ? "var(--color-light)" : "var(--color-dark)"
              }
              strokeWidth={2}
              dot={{
                fill:
                  theme === "dark" ? "var(--color-light)" : "var(--color-dark)",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default Page;
