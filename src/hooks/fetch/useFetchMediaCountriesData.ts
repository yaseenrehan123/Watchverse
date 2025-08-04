import { useEffect, useState } from "react";
import type { CountriesData, Status } from "../../types";
import getTMDBFetchOptions from "../../utils/getTMDBFetchOptions";
import { useQuery } from "@tanstack/react-query";

export default function useFetchMediaCountriesData(): { data: CountriesData[] | undefined, status: Status } {
    const fetchCountries = async (): Promise<CountriesData[]> => {

        const response = await fetch('https://api.themoviedb.org/3/configuration/countries', getTMDBFetchOptions());
        if (!response.ok) {
            throw new Error("RESPONSE NOT OK!");
        };
        const data: CountriesData[] = await response.json();
        return data;
    };
    
    const {data, isLoading, isSuccess, isError, error } = useQuery({
        queryFn:()=>fetchCountries(),
        queryKey:["fetchMediaCountries"]
    });
     const status: Status = isLoading
        ? { state: 'Loading' }
        : isError ? { state: 'Error', message: error.message }
            : isSuccess ? { state: 'Success' }
                : { state: 'Error', message: 'Unidentified State' }
    return {
        data:data,
        status
    }
}