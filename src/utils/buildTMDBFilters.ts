import type { SortFilter } from "../types";

export default function buildTMDBFilters({ sort, genre, year, country }: { sort: SortFilter, genre: string, year: string, country: string }) {
    const filters: string[] = [];
    const sortValue: string =
        sort === 'popularity' ? 'popularity.desc'
            : sort === 'trending' ? 'vote_average.desc'
                : sort === 'new' ? `release_date.desc`
                    : sort === 'top_imdb' ? 'vote_average.desc'
                        : 'sort_by=popularity.desc'; //DEFAULT
    if (sort === 'new') filters.push(`primary_release_date.lte=${new Date().toISOString().split('T')[0]}`);
    if (sort === 'top_imdb') filters.push(`vote_count.gte=1000`);
    if (sort) filters.push(`sort_by=${sortValue}`);
    if (genre) filters.push(`with_genres=${genre}`);
    if (year) filters.push(`primary_release_year=${year}`);
    if (country) filters.push(`with_origin_country=${country}`);
    return filters;
}