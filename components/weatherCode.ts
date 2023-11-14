const weatherCodeHelper: {
  [key: number]: {
    label: string;
    image: string;
  };
} = {
  0: {
    image: "c01d",
    label: "Clear",
  },
  1: {
    image: "c02d",
    label: "Mainly Clear",
  },
  2: {
    image: "c03d",
    label: "Partly Cloudy",
  },
  3: {
    image: "c04d",
    label: "Cloudy",
  },
  45: {
    image: "a05d",
    label: "Foggy",
  },
  48: {
    image: "a05d",
    label: "Rime Fog",
  },
  51: {
    image: "d01d",
    label: "Light Drizzle",
  },
  53: {
    image: "d02d",
    label: "Drizzle",
  },
  55: {
    image: "d03d",
    label: "Heavy Drizzle",
  },
  56: {
    image: "d03d",
    label: "Light Freezing Drizzle",
  },
  57: {
    image: "d03d",
    label: "Freezing Drizzle",
  },
  61: {
    image: "r01d",
    label: "Light Rain",
  },
  63: {
    image: "r02d",
    label: "Rain",
  },
  65: {
    image: "r03d",
    label: "Heavy Rain",
  },
  66: {
    image: "f01d",
    label: "Light Freezing Rain",
  },
  67: {
    image: "f01d",
    label: "Freezing Rain",
  },
  71: {
    image: "s01d",
    label: "Light Snow",
  },
  73: {
    image: "s02d",
    label: "Snow",
  },
  75: {
    image: "s03d",
    label: "Heavy Snow",
  },
  77: {
    image: "s03d",
    label: "Snow Grains",
  },
  80: {
    image: "r04d",
    label: "Light Showers",
  },
  81: {
    image: "r05d",
    label: "Showers",
  },
  82: {
    image: "r06d",
    label: "Heavy Showers",
  },
  85: {
    image: "s04d",
    label: "Light Snow Showers",
  },
  86: {
    image: "s04d",
    label: "Snow Showers",
  },
  95: {
    image: "t02d",
    label: "Thunderstorm",
  },
  96: {
    image: "t05d",
    label: "Light Thunderstorms With Hail",
  },
  99: {
    image: "t05d",
    label: "Thunderstorm With Hail",
  },
};

export default weatherCodeHelper;
