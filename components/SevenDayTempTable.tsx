import { Daily } from "@/graphql/types";
import { List, ListItem } from "@tremor/react";
import Image from "next/image";
import weatherCodeHelper from "./weatherCode";

type Props = { daily: Daily };

export default function SevenDayTempTable({ daily }: Props) {
  return (
    <List className="text-lg font-bold">
      {daily.sunrise.map((t, i) => (
        <ListItem key={t}>
          <p>
            {new Date(t).toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
            })}
          </p>
          <Image
            className="mx-auto"
            src={`https://www.weatherbit.io/static/img/icons/${
              weatherCodeHelper[daily.weathercode[i]].image
            }.png`}
            width={50}
            height={50}
            alt={weatherCodeHelper[daily.weathercode[i]].label}
          />
          <p>{`${daily.temperature_max[i]}${daily.unit.temperature}/${daily.temperature_min[i]}${daily.unit.temperature}`}</p>
        </ListItem>
      ))}
    </List>
  );
}
