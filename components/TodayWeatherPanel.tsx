import React from "react";
import Chart from "./Chart";
import { Weather } from "@/graphql/types";
import { TabPanel } from "@tremor/react";

type Props = {
  weather: Weather;
};

export default function TodayWeatherCharts({ weather }: Props) {
  const timeAxisForCharts = weather.hourly.time.slice(0, 24).map((time) =>
    new Date(time).toLocaleString("en-US", {
      hour12: false,
      minute: "2-digit",
      hour: "numeric",
    }),
  );
  return (
    <TabPanel className="mt-4 space-y-4">
      <Chart
        title={`Temerature (${weather.hourly.unit.temperature})`}
        xAxis={timeAxisForCharts}
        yAxis={weather.hourly.temperature}
        yName="Temperature"
        color="blue"
      />
      <Chart
        title={`UV Index`}
        xAxis={timeAxisForCharts}
        yAxis={weather.hourly.uv_index}
        yName="UV Index"
        color="cyan"
      />
      <Chart
        title={`Rain (${weather.hourly.unit.rain})`}
        xAxis={timeAxisForCharts}
        yAxis={weather.hourly.rain}
        yName="Rain"
        color="fuchsia"
      />
      <Chart
        title={`Humidity (${weather.hourly.unit.relative_humidity})`}
        xAxis={timeAxisForCharts}
        yAxis={weather.hourly.relative_humidity}
        yName="Humidity"
        color="indigo"
      />
      <Chart
        title={`Wind Speed (${weather.hourly.unit.wind_speed})`}
        xAxis={timeAxisForCharts}
        yAxis={weather.hourly.wind_speed}
        yName="Wind Speed"
        color="pink"
      />
      <Chart
        title={`Wind Direction (${weather.hourly.unit.wind_direction})`}
        xAxis={timeAxisForCharts}
        yAxis={weather.hourly.wind_direction}
        yName="Wind Direction"
        color="orange"
      />
    </TabPanel>
  );
}
