import { useEffect, useState } from "react";
import type {FetchGenresResult, Status, UseFetchMediaGenresResult } from "../types";
import getTMDBFetchOptions from "../utils/getTMDBFetchOptions";
import { useQuery } from "@tanstack/react-query";

export default function useFetchMediaGenres():UseFetchMediaGenresResult {
    const fetchGenres = async ():Promise<FetchGenresResult> => {
        const response = await fetch('https://api.themoviedb.org/3/genre/movie/list', getTMDBFetchOptions());
        if (!response.ok) {
            throw new Error("RESPONSE NOT OK!");
        }
        const data:FetchGenresResult = await response.json();
        return data;
    }
    const { data, isLoading, isError, error, isSuccess } = useQuery({
        queryFn: () => fetchGenres(),
        queryKey: ["fetchMediaGenres"]
    });
    const status: Status = isLoading
        ? { state: 'Loading' }
        : isError ? { state: 'Error', message: error.message }
            : isSuccess ? { state: 'Success' }
                : { state: 'Error', message: 'Unidentified State' }
    return {
        data,
        status
    };
}