import { useEffect, useState } from "react";
import type { Status, CategoryFilter, TMDBMovieDetails, TMDBTVDetails, FetchDetailsResult, useFetchMediaDetailsResult } from "../../types";
import getTMDBFetchOptions from "../../utils/getTMDBFetchOptions";
import { useQuery } from "@tanstack/react-query";

export default function useFetchMediaDetails(type: CategoryFilter, id: string | undefined): useFetchMediaDetailsResult {
    const fetchDetails = async (): Promise<FetchDetailsResult> => {
        const response = await fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=...`, getTMDBFetchOptions())
        if (!response.ok) {
            throw new Error("FAILED TO LOAD OVERVIEW! RESPONSE NOT OK!")
        }
        const data: FetchDetailsResult = await response.json();
        return data;
    }
    const { data, isLoading, isError, error, isSuccess } = useQuery({
        queryFn: () => fetchDetails(),
        queryKey: [type, id,"fetchMediDetails"],
        enabled: !!type && !!id
    });
    const status: Status = isLoading
        ? { state: 'Loading' }
        : isError ? { state: 'Error', message: error.message }
            : isSuccess ? { state: 'Success' }
                : { state: 'Error', message: 'Unidentified State' }
    return {
        data,
        status
    }
}