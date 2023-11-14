const weatherQuery = `
  query WeatherQuery($latitude: String!, $longitude: String!) {
    weather(latitude: $latitude, longitude: $longitude) {
      latitude
      longitude
      timezone
      updated_time
      current_temperature
      hourly {
        rain
        time
        temperature
        relative_humidity
        wind_speed
        wind_direction
        uv_index
        unit {
          rain
          temperature
          relative_humidity
          wind_speed
          wind_direction
          uv_index
        }
      }
      unit {
        temperature
        wind_speed
        wind_direction
        uv_index
      }
      daily {
        sunrise
        sunset
        weathercode
        temperature_max
        temperature_min
        wind_speed
        wind_direction
        uv_index
        unit {
          temperature
          uv_index
          wind_direction
          wind_speed
        }
      }
    }
  }
`;

export { weatherQuery };
