import { useEffect, useState } from "react";
import type { Status, TMDBResponse, useTMDBDataResult } from "../types";

export default function useTVShowsData():useTMDBDataResult {
    const [moviesData, setMoviesData] = useState<TMDBResponse | undefined>();
    const [status, setStatus] = useState<Status | undefined>();
    useEffect(() => {
        const BASE_URL: string = 'https://api.themoviedb.org/3/discover/tv';
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
                const endpoint: string = `${BASE_URL}?sort_by=popularity.desc`;
                const response = await fetch(endpoint, OPTIONS);
                if (!response.ok) {
                    setStatus({ state: 'Error', message: 'Something went wrong...' });
                    throw new Error("FAILED TO FETCH MOVIES!");
                }
                const data: TMDBResponse = await response.json();
                setMoviesData(data);
                setStatus({ state: 'Success' });
            }
            catch (error) {
                setStatus({ state: 'Error', message: 'Failed to load movies. Please try again later.' });
                throw new Error("FAILED TO FETCH MOVIES DATA! " + error);
            }
        };
        fetchMovies();
    }, []);

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