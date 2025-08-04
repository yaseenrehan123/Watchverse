import { useEffect, useState } from "react";
import type { CategoryFilter, SortFilter, Status, FetchMediaResult, UseFetchMediaDataResult } from "../../types";
import { useSearchParams } from "react-router-dom";
import useMediaFilters from "../useMediaFilters";
import getTMDBFetchOptions from "../../utils/getTMDBFetchOptions";
import { usePaginationStore } from "../../zustand-stores/usePaginationStore";
import { useQuery } from "@tanstack/react-query";
import buildTMDBFilters from "../../utils/buildTMDBFilters";
import getTMDBUrl from "../../utils/getTMDBUrl";

export default function useFetchMediaData(): UseFetchMediaDataResult {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const rawPage: number = Number(searchParams.get('page'));
    const currentPage: number = rawPage && Number(rawPage) > 0 ? Number(rawPage) : 1;
    const [filters] = useMediaFilters();
    const category: CategoryFilter = filters?.category ?? 'movie';
    const sort: SortFilter = filters?.sort ?? 'popularity';
    const genre: string = filters?.genre ?? '';
    const year: string = filters?.year ?? '';
    const country: string = filters?.country ?? '';
    const setTotalPages = usePaginationStore((state) => state.setTotalPages);
    const fetchMedia = async (): Promise<FetchMediaResult> => {
        const baseURL = getTMDBUrl(category, query);
        const filters = buildTMDBFilters({ sort, genre, year, country });
        const queryString: string = query ? `query=${encodeURIComponent(query)}` : '';
        const endpoint = `${baseURL}?${queryString}&page=${currentPage}&${filters.join('&')}`
        
        const response = await fetch(endpoint, getTMDBFetchOptions());
        if (!response.ok) {
            throw new Error("RESPONSE FAILED!");
        }
        const data: FetchMediaResult = await response.json();
        return data;

    };
    const { data, isLoading, isSuccess, isError, error } = useQuery({
        queryFn: () => fetchMedia(),
        queryKey: [category, sort, genre, year, country, currentPage, query,"fetchMediaData"]
    });
    const status: Status = isLoading
        ? { state: 'Loading' }
        : isError ? { state: 'Error', message: error.message }
            : isSuccess ? { state: 'Success' }
                : { state: 'Error', message: 'Unidentified State' }
    useEffect(() => {
        if (isSuccess && data?.total_pages)
            setTotalPages(data.total_pages);
    }, [isSuccess]);

    const result: UseFetchMediaDataResult = {
        data: data,
        status: status!
    };
    return result;
}