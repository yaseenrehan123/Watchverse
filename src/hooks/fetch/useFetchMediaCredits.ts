import { useEffect, useState } from "react";
import type { Status, CategoryFilter, FetchCreditsResult, useFetchMediaCreditsResult } from "../../types";
import getTMDBFetchOptions from "../../utils/getTMDBFetchOptions";
import { useQuery } from "@tanstack/react-query";

export default function useFetchMediaCredits(type: CategoryFilter, id: string | undefined):useFetchMediaCreditsResult {
    const fetchCredits = async ():Promise<FetchCreditsResult> => {
        const response = await fetch(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=...`, getTMDBFetchOptions());
        if (!response.ok) {
            throw new Error("RESPONSE NOT OK!");
        }
        const data:FetchCreditsResult = await response.json();
        return data;
    };

    const {data, isLoading, isSuccess, isError, error } = useQuery({
        queryFn:()=>fetchCredits(),
        queryKey:["fetchMediaCredits"]
    });
    const status: Status = isLoading
        ? { state: 'Loading' }
        : isError ? { state: 'Error', message: error.message }
            : isSuccess ? { state: 'Success' }
                : { state: 'Error', message: 'Unidentified State' }

    return{
        data,
        status
    };
}