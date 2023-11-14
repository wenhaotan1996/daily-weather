import { Divider } from "@tremor/react";
import WeatherCodeHelper from "./weatherCode";
import Image from "next/image";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { Weather } from "@/graphql/types";
import CityPicker from "./CityPicker";

type Props = {
  city: string;
  lat: string;
  long: string;
  data: Weather;
};

export default function InformationPanel({ city, lat, long, data }: Props) {
  return (
    <div className="bg-gradient-to-br from-[#394F68] to-[#183B7E] p-10">
      <div className="pb-5 text-white">
        <h1 className="text-6xl font-bold">{decodeURI(city)}</h1>
        <p className="mt-2 text-sm text-gray-400">
          Long/Lat: {Number(long).toFixed(2)}, {Number(lat).toFixed(2)}
        </p>
      </div>
      <CityPicker />
      <Divider className="my-10" />
      <div className="sapce-x-10 mb-5 flex items-center justify-between text-white">
        <div>
          <p className="text-xl">
            {new Date().toLocaleDateString(
              Intl.DateTimeFormat().resolvedOptions().locale,
              {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              },
            )}
          </p>
          <p className="font-extralight">
            Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </p>
        </div>
        <p className="ml-4 text-xl font-bold uppercase">
          {new Date().toLocaleTimeString(
            Intl.DateTimeFormat().resolvedOptions().locale,
            {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            },
          )}
        </p>
      </div>
      <Divider className="" />
      <div className="flex w-full items-center text-white">
        <div>
          <Image
            className="mx-auto"
            src={`https://www.weatherbit.io/static/img/icons/${
              WeatherCodeHelper[data.daily.weathercode[0]].image
            }.png`}
            width={75}
            height={75}
            alt={WeatherCodeHelper[data.daily.weathercode[0]].label}
          />
          <p className="text-6xl font-semibold">{`${data.current_temperature}${data.unit.temperature}`}</p>
        </div>
        <p className="flex-1 text-right text-lg font-extralight">{`${
          WeatherCodeHelper[data.daily.weathercode[0]].label
        }`}</p>
      </div>
      <div className="mt-4 space-y-2 py-5">
        <div className="flex space-x-2 rounded-md border border-[#6F90CD] bg-[#405885] px-4 py-3 text-white">
          <SunIcon className="h-10 w-10 text-gray-400" />
          <div className="flex flex-1 items-center justify-between">
            <p>Sunrise</p>
            <p>
              {new Date(data.daily.sunrise[0]).toLocaleString(
                Intl.DateTimeFormat().resolvedOptions().locale,
                {
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
                },
              )}
            </p>
          </div>
        </div>
        <div className="flex space-x-2 rounded-md border border-[#6F90CD] bg-[#405885] px-4 py-3 text-white">
          <MoonIcon className="h-10 w-10 text-gray-400" />
          <div className="flex flex-1 items-center justify-between">
            <p>Sunset</p>
            <p>
              {new Date(data.daily.sunset[0]).toLocaleString(
                Intl.DateTimeFormat().resolvedOptions().locale,
                {
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
                },
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
