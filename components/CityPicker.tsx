"use client";
import { Country, State, City } from "country-state-city";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Select from "react-select";
import { GlobeIcon } from "@heroicons/react/solid";

type Props = {};

type CountryOption = {
  value: {
    isoCode: string;
  };
  label: string;
} | null;

type StateOption = {
  value: {
    isoCode: string;
  };
  label: string;
} | null;

type CityOption = {
  value: {
    latitude: string | undefined | null;
    longitude: string | undefined | null;
  };
  label: string;
} | null;

const countries = Country.getAllCountries()
  .filter((country) => State.getStatesOfCountry(country.isoCode).length > 0)
  .map((country) => ({
    value: {
      isoCode: country.isoCode,
    },
    label: country.name,
  }));

export default function CityPicker({}: Props) {
  const [selectedCountry, setSelectedCountry] = useState<CountryOption>(null);
  const [selectedState, setSelectedState] = useState<StateOption>(null);
  const [selectedCity, setSelectedCity] = useState<CityOption>(null);
  const router = useRouter();

  function handleCountrySelected(country: CountryOption) {
    setSelectedCountry(country);
    setSelectedCity(null);
    setSelectedState(null);
  }

  function handleStateSelected(state: StateOption) {
    setSelectedState(state);
  }

  function handleCitySelected(city: CityOption) {
    if (city && city.value.latitude && city.value.longitude) {
      setSelectedCity(city);
      router.push(
        `/location/${city.label}/${city.value.latitude}/${city.value.longitude}`,
      );
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex space-x-2 text-white">
          <GlobeIcon className="h-5 w-5 " />
          <label htmlFor="country">Country</label>
        </div>
        <Select
          id="country"
          value={selectedCountry}
          options={countries}
          onChange={handleCountrySelected}
          instanceId={"country"}
        />
      </div>
      {selectedCountry && (
        <div className="space-y-2">
          <div className="flex space-x-2 text-white">
            <GlobeIcon className="h-5 w-5 " />
            <label>State</label>
          </div>
          <Select
            id="state"
            value={selectedState}
            options={State.getStatesOfCountry(selectedCountry.value.isoCode)
              .filter(
                (state) =>
                  City.getCitiesOfState(
                    selectedCountry.value.isoCode,
                    state.isoCode,
                  ).length > 0,
              )
              .map((state) => ({
                value: {
                  isoCode: state.isoCode,
                },
                label: state.name,
              }))}
            onChange={handleStateSelected}
            instanceId={"state"}
          />
        </div>
      )}
      {selectedCountry && selectedState && (
        <div className="space-y-2">
          <div className="flex space-x-2 text-white">
            <GlobeIcon className="h-5 w-5 " />
            <label>city</label>
          </div>
          <Select
            id="city"
            value={selectedCity}
            options={City.getCitiesOfState(
              selectedCountry.value.isoCode,
              selectedState.value.isoCode,
            ).map((city) => ({
              value: {
                latitude: city.latitude,
                longitude: city.longitude,
              },
              label: city.name,
            }))}
            onChange={handleCitySelected}
            instanceId={"city"}
          />
        </div>
      )}
    </div>
  );
}
