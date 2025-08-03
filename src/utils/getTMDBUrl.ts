import type { CategoryFilter } from "../types";

export default function getTMDBUrl(category:CategoryFilter,query:string):string{
    const type = query ? 'search' : 'discover';
    return `https://api.themoviedb.org/3/${type}/${category}`;
}