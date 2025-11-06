"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

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
import { useContext } from "react";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import { ChartData } from "@/types/BoxTypes";
import { cn } from "@/lib/utils";
import { ResponsiveContainer } from "recharts";

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

interface GraphProps {
  title: string;
  data: ChartData[];
  description: string;
}

const Graph = ({ data, title, description }: GraphProps) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <Card
      className={cn(
        "relative w-full max-md:min-h-screen mt-6",
        theme === "dark"
          ? "bg-bg_dark text-bg_light_placeholder"
          : "bg-bg_light text-bg_dark_placeholder"
      )}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="overflow-scroll">
        <ChartContainer config={chartConfig} className="max-md:h-screen">
          <ResponsiveContainer>
            <BarChart
              data={data}
              layout="vertical"
              accessibilityLayer
              margin={{ right: 16 }}
            >
              <CartesianGrid horizontal={false} />
              <YAxis
                type="category"
                dataKey="label"
                tickMargin={10}
                tickLine={false}
                axisLine={false}
              />
              <XAxis dataKey="value" type="number" />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Bar
                radius={4}
                dataKey="value"
                layout="vertical"
                fill={
                  theme === "dark" ? "var(--color-light)" : "var(--color-dark)"
                }
                className="h-full"
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default Graph;
