import { TabPanel } from "@tremor/react";
import SevenDayTempTable from "./SevenDayTempTable";
import { Weather } from "@/graphql/types";
import Chart from "./Chart";

type Props = {
  weather: Weather;
};

export default function ForecastPanel({ weather }: Props) {
  const timeAxisForCharts = weather.daily.sunrise.map((time) =>
    new Date(time).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
    }),
  );
  return (
    <TabPanel className="space-y-4 px-4">
      <SevenDayTempTable daily={weather.daily} />
      <Chart
        title={`Max Temerature (${weather.daily.unit.temperature})`}
        xAxis={timeAxisForCharts}
        yAxis={weather.daily.temperature_max}
        yName="Temperature"
        color="amber"
      />
      <Chart
        title={`Min Temerature (${weather.daily.unit.temperature})`}
        xAxis={timeAxisForCharts}
        yAxis={weather.daily.temperature_min}
        yName="Temperature"
        color="blue"
      />
      <Chart
        title={`UV Index`}
        xAxis={timeAxisForCharts}
        yAxis={weather.daily.uv_index}
        yName="UV Index"
        color="cyan"
      />
      <Chart
        title={`Wind Speed (${weather.daily.unit.wind_speed})`}
        xAxis={timeAxisForCharts}
        yAxis={weather.daily.wind_speed}
        yName="Wind Speed"
        color="pink"
      />
      <Chart
        title={`Wind Direction (${weather.daily.unit.wind_direction})`}
        xAxis={timeAxisForCharts}
        yAxis={weather.hourly.wind_direction}
        yName="Wind Direction"
        color="orange"
      />
    </TabPanel>
  );
}
