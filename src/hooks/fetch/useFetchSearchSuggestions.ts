import { useQuery } from "@tanstack/react-query";
import type { Status } from "../../types";
import getTMDBFetchOptions from "../../utils/getTMDBFetchOptions";
import { useDebounce } from "react-use";
import { useState } from "react";

export default function useFetchSearchSuggestions(query: string): { data: any, status: Status } {
    const [debouncedQuery, setDebouncedQuery] = useState<string>('');
    useDebounce(() => {
        setDebouncedQuery(query);
    }, 500, [query])
    const fetchSuggestions = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/search/multi?query=${debouncedQuery}&sort_by=popularity.desc`, getTMDBFetchOptions());
        if (!response.ok)
            throw new Error("RESPONSE FAILED!");
        const data = await response.json();
        data.results = data.results.filter((item: any) => {
            const isMovieOrTV = item.media_type === 'movie' || item.media_type === 'tv';

            // Extract release date for movies and first_air_date for TV
            const dateStr = item.media_type === 'movie' ? item.release_date : item.first_air_date;

            // Parse to Date object
            const releaseDate = dateStr ? new Date(dateStr) : null;
            const now = new Date();

            const isReleased = releaseDate ? releaseDate <= now : false;
            const hasPoster = Boolean(item.poster_path);

            return isMovieOrTV && isReleased && hasPoster;
        });

        return data;
    };
    const { data, isLoading, isError, error, isSuccess } = useQuery({
        queryFn: () => fetchSuggestions(),
        queryKey: ['fetchSearchSuggestions', debouncedQuery]
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
