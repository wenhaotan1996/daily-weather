import CalloutCard from "@/components/CalloutCard";
import ForecastPanel from "@/components/ForecastPanel";
import InformationPanel from "@/components/InformationPanel";
import StatCard from "@/components/StatCard";
import TodayWeatherCharts from "@/components/TodayWeatherPanel";
import client from "@/graphql/client";
import { weatherQuery } from "@/graphql/queries";
import { Weather } from "@/graphql/types";
import { Divider, Tab, TabGroup, TabList, TabPanels } from "@tremor/react";

export const revalidate = 60 * 60;

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

export default async function page({ params: { city, lat, long } }: Props) {
  // const weather: Weather = (
  //   await client.query({
  //     query: weatherQuery,
  //     variables: { latitude: lat, longitude: long },
  //   })
  // )?.data?.weather;
  const weather: Weather = (
    await client.query(weatherQuery, { latitude: lat, longitude: long })
  )?.data.weather;
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <InformationPanel city={city} lat={lat} long={long} data={weather} />
      <div className="flex-1 p-5 lg:p-10">
        <div className="pb-5">
          <h2 className="text-xl font-bold">
            Today&apos;s Weather at {decodeURI(city)}
          </h2>
          <p className="text-sm text-gray-400">
            Last Updated at: {new Date(weather.updated_time).toLocaleString()} (
            {weather.timezone})
          </p>
        </div>
        {/* <div className="m-2 mb-10">
          <CalloutCard message="This is where GPT4 summary would go" />
        </div> */}
        <div className="m-2 grid grid-cols-1 gap-5 xl:grid-cols-2">
          <StatCard
            title="Maximum Tempurature"
            metric={`${weather.daily.temperature_max[0].toFixed(1)}${
              weather.unit.temperature
            }`}
            color="yellow"
          />
          <StatCard
            title="Minimum Tempurature"
            metric={`${weather.daily.temperature_min[0].toFixed(1)}${
              weather.unit.temperature
            }`}
            color="green"
          />
          <div>
            <StatCard
              title="UV Index"
              metric={weather.daily.uv_index[0].toFixed(1)}
              color="rose"
            />
            {weather.daily.uv_index[0] >= 5 && (
              <CalloutCard
                message="The UV is high today, be careful when you are outdoor!"
                warning={true}
              />
            )}
          </div>
          <div className="flex space-x-3">
            <StatCard
              title="Wind Speed"
              metric={`${weather.daily.wind_speed[0].toFixed(1)}${
                weather.unit.wind_speed
              }`}
              color="cyan"
            />
            <StatCard
              title="Wind Direction"
              metric={`${weather.daily.wind_direction[0].toFixed(1)}${
                weather.unit.wind_direction
              }`}
              color="fuchsia"
            />
          </div>
        </div>
        <Divider />
        <TabGroup>
          <TabList className="font-bold">
            <Tab>Today</Tab>
            <Tab>7 day Forecast</Tab>
          </TabList>
          <TabPanels>
            <TodayWeatherCharts weather={weather} />
            <ForecastPanel weather={weather} />
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
