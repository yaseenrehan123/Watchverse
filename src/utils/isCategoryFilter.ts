import type { CategoryFilter } from "../types";

export default function isCategoryFilter(value:string):value is CategoryFilter{
    return value === "movie" || value === "tv";
}