import apiInstance from "@/services/apiInstance";
import { GET_COUNTIRES_BY_CONTINENT_MUTATION_KEY } from "@/services/keys";
import { Country } from "@/services/models/Countries.dto";
import { GET_COUNTRY_BY_REGION } from "@/services/url";
import { WHITELISTED_OBJ_FIELDS } from "@/utils/config";
import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";

export const useGetCountryByRegionMutation = () => {
    const request = useCallback(async (region: string) => {
      const { data } = await apiInstance.get(`${GET_COUNTRY_BY_REGION}/${region}?field=${WHITELISTED_OBJ_FIELDS.join(',')}`);
  
      return data; 
    }, []);
  
    return useMutation<Country[], Error, string>({
      mutationFn: request,
      mutationKey: GET_COUNTIRES_BY_CONTINENT_MUTATION_KEY,
    });
  };