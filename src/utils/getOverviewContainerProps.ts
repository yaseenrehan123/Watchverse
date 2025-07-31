import type { CategoryFilter, OverviewContainerProps, TMDBMovieDetails, TMDBTVDetails } from "../types";

export default function getOverviewContainerProps
    (
        type: CategoryFilter,
        data: TMDBMovieDetails | TMDBTVDetails,
        castNames: string[]
    ): OverviewContainerProps {
    if (type === 'movie') {
        const movieData = data as TMDBMovieDetails;
        return {
            backdropImgSrc: `https://image.tmdb.org/t/p/original${movieData.backdrop_path}`,
            posterImgSrc: `https://image.tmdb.org/t/p/w500${movieData.poster_path}`,
            title: movieData.title,
            overview: movieData.overview,
            releaseDate: movieData.release_date,
            duration: `${movieData.runtime || "?"}min`,
            genre: movieData.genres?.map((g: any) => g.name) || [],
            casts: castNames,
            country: movieData.production_countries?.[0]?.name || "Unknown",
            production: movieData.production_companies?.map((p: any) => p.name) || []
        } as OverviewContainerProps;
    }
    else if (type === 'tv') {
        const tvShowData = data as TMDBTVDetails;
        return {
            backdropImgSrc: `https://image.tmdb.org/t/p/original${tvShowData.backdrop_path}`,
            posterImgSrc: `https://image.tmdb.org/t/p/w500${tvShowData.poster_path}`,
            title: tvShowData.name,
            overview: tvShowData.overview,
            releaseDate: tvShowData.first_air_date,
            duration: `${tvShowData.episode_run_time || "?"}min`,
            genre: tvShowData.genres?.map((g: any) => g.name) || [],
            casts: castNames,
            country: tvShowData.production_countries?.[0]?.name || "Unknown",
            production: tvShowData.production_companies?.map((p: any) => p.name) || []
        } as OverviewContainerProps;
    }
    else {
        return {
            backdropImgSrc: '',
            posterImgSrc: '',
            title: 'Unknown Media',
            overview: '',
            releaseDate: '',
            duration: '',
            genre: [],
            casts: [],
            country: '',
            production: []
        } as OverviewContainerProps;
    }
}