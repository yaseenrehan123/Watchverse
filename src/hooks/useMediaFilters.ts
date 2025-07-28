import { useSearchParams } from "react-router-dom";
import type { CategoryFilter, FilterParams, SortFilter } from "../types";

export default function useMediaFilters(): [FilterParams, (newParams: Partial<FilterParams>) => void] {
    const [searchParams, setSearchParams] = useSearchParams();

    const filters: FilterParams = {
        category: searchParams.get('category') as CategoryFilter || undefined,
        sort: searchParams.get('sort') as SortFilter || undefined,
        genre: searchParams.get('genre') || undefined,
        year: searchParams.get('year') || undefined,
        country: searchParams.get('country') || undefined
    };
    const setFilters = (newParams: Partial<FilterParams>): void => {
        let hasChange = false;
        for (const key in newParams) {
            if (newParams[key as keyof FilterParams]) {
                const value = newParams[key as keyof FilterParams];
                if (value) {
                    searchParams.set(key, value);
                }
                else {
                    searchParams.delete(key, value);
                }
            }
            else {
                searchParams.delete(key);
            }
            hasChange = true;
        }
        if(hasChange){
            setSearchParams(searchParams);
        }
    }
    return [filters, setFilters]
};