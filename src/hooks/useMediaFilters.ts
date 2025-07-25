import { useSearchParams } from "react-router-dom";
import type { CategoryFilter, FilterParams, SortFilter } from "../types";

export default function useMediaFilters():[FilterParams,(newParams:Partial<FilterParams>)=>void]{
    const [searchParams,setSearchParams] = useSearchParams();

    const filters:FilterParams = {
        category:searchParams.get('category') as CategoryFilter || undefined,
        sort:searchParams.get('sort') as SortFilter || undefined,
        genreId:searchParams.get('genre') || undefined,
        year:searchParams.get('year') || undefined,
        country:searchParams.get('country') || undefined
    };
    const setFilters = (newParams:Partial<FilterParams>):void=>{
        for (const key in newParams){
            if(newParams[key as keyof FilterParams]){
                searchParams.set(key,newParams[key as keyof FilterParams]!)
            }
            else{
                searchParams.delete(key);
            }
        }
    }
    return [filters,setFilters]
};