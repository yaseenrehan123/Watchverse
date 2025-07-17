import { useEffect, useState } from "react";
import type { Status, TMDBResponse, useTMDBDATAOptions, useTMDBDataResult } from "../types";
import { useDebouncedSearchContext } from "../contexts/DebouncedSearchContext";

export default function useTMDBDATA({ type, filter }: useTMDBDATAOptions): useTMDBDataResult {
    const [moviesData, setMoviesData] = useState<TMDBResponse | undefined>();
    const [status, setStatus] = useState<Status | undefined>();
    const {debouncedSearchValue} = useDebouncedSearchContext();
    useEffect(() => {
        const query:string = debouncedSearchValue;
        const BASE_URL: string = query ?
            type === 'MOVIE'
                ? 'https://api.themoviedb.org/3/search/movie'
                : 'https://api.themoviedb.org/3/search/tv'
            :
            type === 'MOVIE'
                ? 'https://api.themoviedb.org/3/discover/movie'
                : 'https://api.themoviedb.org/3/discover/tv';
        const FILTER: string =
            filter === 'POPULAR' ? 'sort_by=popularity.desc'
                : filter === 'TRENDING' ? 'sort_by=vote_average.desc'
                    : filter === 'NEW' ? `sort_by=release_date.desc&primary_release_date.lte=${new Date().toISOString().split('T')[0]}`
                        : 'sort_by=popularity.desc'; //DEFAULT
        const API_KEY: string = import.meta.env.VITE_TMDP_API_KEY;
        const OPTIONS = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_KEY}`
            }
        };
        const fetchMovies = async () => {
            try {
                setStatus({ state: 'Loading' });
                const endpoint: string = query  
                    ? `${BASE_URL}?query=${encodeURIComponent(query)}`
                    : `${BASE_URL}?${FILTER}`;
                const response = await fetch(endpoint, OPTIONS);
                if (!response.ok) {
                    setStatus({ state: 'Error', message: 'Something went wrong...' });
                    throw new Error("FAILED TO FETCH DATA FROM TMDB!");
                }
                const data: TMDBResponse = await response.json();
                setMoviesData(data);
                setStatus({ state: 'Success' });
            }
            catch (error) {
                setStatus({ state: 'Error', message: 'Failed to load. Please try again later.' });
                throw new Error("FAILED TO FETCH TMDB DATA! " + error);
            }
        };
        fetchMovies();
    }, [type, filter,debouncedSearchValue]);

    if (!status) {
        return {
            data: undefined,
            status: { state: "Loading" },
        };
    };
    if (status?.state === 'Success') {
        if (moviesData === undefined || status === undefined) {
            throw new Error("RESULT NULL ON SUCCESS!");
        };
    };
    const result: useTMDBDataResult = {
        data: moviesData,
        status: status!
    };
    return result;
}