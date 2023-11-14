import { AreaChart, Card, Color, Title } from "@tremor/react";

type Props = {
  xAxis: any[];
  yAxis: any[];
  title: string;
  xName?: string;
  yName?: string;
  showX?: boolean;
  color?: Color;
};

export default function Chart({
  xAxis,
  yAxis,
  title,
  xName = "x",
  yName = "y",
  color = "amber",
}: Props) {
  const chartData: any = xAxis.map((item, i) => ({
    [xName]: item,
    [yName]: yAxis[i],
  }));
  return (
    <Card>
      <Title>{title}</Title>
      <AreaChart
        className="mt-6"
        data={chartData}
        index={xName}
        showLegend
        categories={[yName]}
        yAxisWidth={40}
        colors={[color]}
      />
    </Card>
  );
}
