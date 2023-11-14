type Weather = {
  latitude: number;
  longitude: number;
  timezone: string;
  updated_time: string;
  hourly: Hourly;
  unit: Unit;
  current_temperature: number;
  daily: Daily;
};

type Daily = {
  temperature_max: number[];
  temperature_min: number[];
  weathercode: number[];
  uv_index: number[];
  wind_speed: number[];
  wind_direction: number[];
  sunrise: string[];
  sunset: string[];
  unit: DailyUnit;
};

type DailyUnit = {
  temperature: string;
  uv_index: string;
  wind_speed: string;
  wind_direction: string;
};

type Hourly = {
  time: string[];
  temperature: number[];
  relative_humidity: number[];
  rain: number[];
  wind_speed: number[];
  wind_direction: number[];
  uv_index: number[];
  unit: HourlyUnit;
};

type Unit = {
  temperature: string;
  wind_speed: string;
  wind_direction: string;
  uv_index: string;
};

type HourlyUnit = {
  temperature: string;
  relative_humidity: string;
  rain: string;
  wind_speed: string;
  wind_direction: string;
  uv_index: string;
};
export type { Weather, Daily };
