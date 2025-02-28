import { DropdownOption } from '@/components/Buttons/DropdownBtn/DropdownBtn';
import apiInstance from '@/services/apiInstance';
import {
  GET_ALL_CONTINENT_QUERY_KEY,
  GET_ALL_COUNTRY_QUERY_KEY,
  GET_COUNTRY_DETAILS_QUERY_KEY,
} from '@/services/keys';
import { Country } from '@/services/models/Countries.dto';
import {
  GET_ALL_CONTINENTS,
  GET_ALL_COUNTRIES,
  GET_COUNTRY_BY_REGION,
} from '@/services/url';
import { WHITELISTED_OBJ_FIELDS } from '@/utils/config';
import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';

export const useGetAllCountriesQuery = () => {
  const load = useCallback(async () => {
    const res = await apiInstance.get(
      `${GET_ALL_COUNTRIES}?field=${WHITELISTED_OBJ_FIELDS.join(',')}`
    );
    return res.data;
  }, []);

  return useQuery<Country[]>({
    queryKey: [...GET_ALL_COUNTRY_QUERY_KEY],
    queryFn: load,
    initialData: [] as Country[],
  });
};

export const useGetAllContinentsQuery = () => {
  const load = useCallback(async () => {
    const res = await apiInstance.get(`${GET_ALL_CONTINENTS}`);

    // Extract unique continents and format as dropdown options
    const uniqueContinents = Array.from(
      new Set(
        res.data.map(
          (country: { continents: string[] }) => country.continents[0]
        )
      )
    ).sort() as string[];

    uniqueContinents.unshift('All Continents');

    const continents: DropdownOption[] = uniqueContinents.map((continent) => ({
      label: continent,
      value: continent.toLowerCase().replace(/\s+/g, '_'), // Format value
    }));

    return continents;
  }, []);

  return useQuery<DropdownOption[]>({
    queryKey: [...GET_ALL_CONTINENT_QUERY_KEY],
    queryFn: load,
    initialData: [],
  });
};

export const useGetCountryDetails = (countryData) => {
  const load = useCallback(async () => {
    const { data } = await apiInstance.get(
      `${GET_COUNTRY_BY_REGION}/${countryData.continent}?field=${WHITELISTED_OBJ_FIELDS.join(',')}`
    );
    const country = data.find(
      (country) =>
        country.name.common === countryData.name && country.cca2 === countryData.cca2
    );


    return country;
  }, [countryData]);

  return useQuery<Country>({
    queryKey: [...GET_COUNTRY_DETAILS_QUERY_KEY],
    queryFn: load,
    initialData: {} as Country,
    enabled: Boolean(countryData.name && countryData.continent && countryData.cca2)
  });
};
