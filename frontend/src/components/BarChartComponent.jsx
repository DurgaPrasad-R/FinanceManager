import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", savings: 2500, expenses: 5000 },
  { month: "February", savings: 2000, expenses: 5800 },
  { month: "March", savings: 2200, expenses: 5300 },
  { month: "April", savings: 1700, expenses: 4900 },
  { month: "May", savings: 1600, expenses: 5500 },
  { month: "June", savings: 1800, expenses: 6100 },
];

const chartConfig = {
  savings: {
    label: "Savings",
    color: "#2563eb",
  },
  expenses: {
    label: "Expenses",
    color: "#60a5fa",
  },
};

export default function BarChartComponent() {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Savings and Expense</CardTitle>
        <CardDescription>
          Showing savings and expenses over last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="savings" fill="var(--color-savings)" radius={4} />
            <Bar dataKey="expenses" fill="var(--color-expenses)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
