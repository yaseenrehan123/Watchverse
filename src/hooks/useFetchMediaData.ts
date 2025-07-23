import { useEffect, useState } from "react";
import type { Status, TMDBResponse, useFetchMediaDataOptions, useFetchMediaDataResult } from "../types";
import { useDebouncedSearchContext } from "../contexts/DebouncedSearchContext";
import { useMediaTypeContext } from "../contexts/MediaTypeContext";
import { useMediaFilterContext } from "../contexts/MediaFilterContext";
import { useMediaPaginationContext } from "../contexts/MediaPaginationContext";

export default function useFetchMediaData(): useFetchMediaDataResult {
    const [moviesData, setMoviesData] = useState<TMDBResponse | undefined>();
    const [status, setStatus] = useState<Status | undefined>();
    const { debouncedSearchValue } = useDebouncedSearchContext();
    const { type } = useMediaTypeContext();
    const { filter } = useMediaFilterContext();
    const { currentPage, setTotalPages } = useMediaPaginationContext();
    useEffect(() => {
        const query: string = debouncedSearchValue;
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
                        : filter === 'TOP_IMDB' ? 'sort_by=vote_average.desc&vote_count.gte=1000'
                            : 'sort_by=popularity.desc'; //DEFAULT
        const API_KEY: string = import.meta.env.VITE_TMDP_API_KEY;
        const OPTIONS = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_KEY}`
            }
        };
        const fetchMedia = async () => {
            try {
                setStatus({ state: 'Loading' });
                const endpoint: string = query
                    ? `${BASE_URL}?query=${encodeURIComponent(query)}&page=${currentPage}`
                    : `${BASE_URL}?${FILTER}&page=${currentPage}`;
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
        fetchMedia();
    }, [type, filter, debouncedSearchValue, currentPage]);

    useEffect(() => {
        if (status?.state === 'Success' && moviesData?.total_pages) {
            setTotalPages(moviesData.total_pages);
        }
    }, [status, moviesData]);

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
    const result: useFetchMediaDataResult = {
        data: moviesData,
        status: status!
    };
    return result;
}