import { useEffect, useState } from "react";
import type { CategoryFilter, FilterParams, SortFilter, Status, TMDBMovieData, TMDBResponse, TMDBTVData, useFetchMediaDataOptions, useFetchMediaDataResult } from "../types";
import { useMediaPaginationContext } from "../contexts/MediaPaginationContext";
import { useParams, useSearchParams } from "react-router-dom";
import useMediaFilters from "./useMediaFilters";
import getTMDBFetchOptions from "../utils/getTMDBFetchOptions";

export default function useFetchMediaData(): useFetchMediaDataResult {
    const [response, setResponse] = useState<TMDBResponse | undefined>();
    const [status, setStatus] = useState<Status | undefined>();
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const rawPage: number = Number(searchParams.get('page'));
    const currentPage: number = rawPage && Number(rawPage) > 0 ? Number(rawPage) : 1;
    const [filters, setFilters] = useMediaFilters();
    const allFilters: string[] = [];
    const category: CategoryFilter = filters?.category ?? 'movie';
    const sort: SortFilter = filters?.sort ?? 'popularity';
    const genre: string = filters?.genre ?? '';
    const year:string = filters?.year ?? '';
    const country:string = filters?.country ?? '';
    const sortValue: string =
        sort === 'popularity' ? 'popularity.desc'
            : sort === 'trending' ? 'vote_average.desc'
                : sort === 'new' ? `release_date.desc`
                    : sort === 'top_imdb' ? 'vote_average.desc'
                        : 'sort_by=popularity.desc'; //DEFAULT
    if (sort === 'new') allFilters.push(`primary_release_date.lte=${new Date().toISOString().split('T')[0]}`);
    if(sort === 'top_imdb') allFilters.push(`vote_count.gte=1000`);
    if (sort) allFilters.push(`sort_by=${sortValue}`);
    if (genre) allFilters.push(`with_genres=${genre}`);
    if(year) allFilters.push(`primary_release_year=${year}`);
    if(country) allFilters.push(`with_origin_country=${country}`);
    const { setTotalPages } = useMediaPaginationContext();
    useEffect(() => {
        const MOVIE_URL: string = query
            ? 'https://api.themoviedb.org/3/search/movie'
            : 'https://api.themoviedb.org/3/discover/movie';
        const TV_URL: string = query
            ? 'https://api.themoviedb.org/3/search/tv'
            : 'https://api.themoviedb.org/3/discover/tv';
        const baseURL: string = category === 'movie'
            ? MOVIE_URL
            : TV_URL;

       const OPTIONS = getTMDBFetchOptions();
        const fetchMedia = async () => {
            try {
                setStatus({ state: 'Loading' });
                const endpoint: string = query
                    ? `${baseURL}?query=${encodeURIComponent(query)}&page=${currentPage}&${allFilters.join('&')}`
                    : `${baseURL}?${allFilters.join('&')}&page=${currentPage}`

                const response = await fetch(endpoint, OPTIONS);
                if (!response.ok) {
                    throw new Error("RESPONSE FAILED!");
                }
                const data = await response.json();
                setResponse(data);
                setStatus({ state: 'Success' });
            }
            catch (error) {
                setStatus({ state: 'Error', message: 'Failed to load. Please try again later.' });
                throw new Error("FAILED TO FETCH TMDB DATA! " + error);
            }
        };
        fetchMedia();
    }, [category, sort, genre, year, country, currentPage, query]);

    useEffect(() => {
        if (status?.state === 'Success' && response?.total_pages) {
            setTotalPages(response.total_pages);
        }
    }, [status, response]);

    if (!status) {
        return {
            data: undefined,
            status: { state: "Loading" },
        };
    };
    if (status?.state === 'Success') {
        if (response === undefined || status === undefined) {
            throw new Error("RESULT NULL ON SUCCESS!");
        };
        console.log(response);
    };
    const result: useFetchMediaDataResult = {
        data: response,
        status: status!
    };
    return result;
}