import type { SearchSuggestionsCardProps, TMDBMovieData, TMDBSuggestion, TMDBTVData } from "../types";

export default function getSuggestionCardProps(suggestion: TMDBSuggestion): SearchSuggestionsCardProps {
    if (suggestion.media_type === 'movie') {
        return {
            posterImgSrc: suggestion.poster_path
                ? `https://image.tmdb.org/t/p/w200${suggestion.poster_path}`
                : '',
            title: suggestion.title,
            year: suggestion.release_date?.split('-')[0] || '?',
            duration: '', // you usually don’t get runtime in search
            category: 'movie',
            link:`/overview/movie/${suggestion.id}`
        };
    }

    if (suggestion.media_type === 'tv') {
        return {
            posterImgSrc: suggestion.poster_path
                ? `https://image.tmdb.org/t/p/w200${suggestion.poster_path}`
                : '',
            title: suggestion.name,
            year: suggestion.first_air_date?.split('-')[0] || '?',
            duration: '',
            category: 'tv',
            link:`/overview/tv/${suggestion.id}`
        };
    }

    return {
        posterImgSrc: '',
        title: 'Unidentified',
        year: 'Not found',
        duration: 'Not found',
        category: 'Not found',
        link:``
    };
}