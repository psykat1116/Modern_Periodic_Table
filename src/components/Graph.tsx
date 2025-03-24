import { useContext } from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ChartData } from "@/types/BoxTypes";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

interface GraphProps {
  data: ChartData[];
}

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

const Graph = ({ data }: GraphProps) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;

  return (
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
          stroke={theme === "dark" ? "var(--color-light)" : "var(--color-dark)"}
          strokeWidth={2}
          dot={{
            fill: theme === "dark" ? "var(--color-light)" : "var(--color-dark)",
          }}
          activeDot={{
            r: 6,
          }}
        />
      </LineChart>
    </ChartContainer>
  );
};

export default Graph;
