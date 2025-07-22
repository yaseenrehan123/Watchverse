import type { TMDB_FILTERS } from "./utils/filters";

//PRIVATE
type StatusLoading = {
  state: 'Loading'
};
type StatusSuccess = {
  state: 'Success'
};
type StatusError = {
  state: 'Error',
  message: string
};
//CONTEXT
export type SearchContextType = {
  searchValue: string,
  setSearchValue: (val:string) => void,
  setSearchAndNavigate: (value: string, path: string) => void,
  searchSubmitted: boolean;
  setSearchSubmitted: (val: boolean) => void;
};
export type SidebarContextType = {
  enabled: boolean,
  setEnabled: Function
};
export type DebouncedSearchContextType = {
  debouncedSearchValue: string,
  setDebouncedSearchValue:(val:string)=>void
}
export type MediaTypeContextType = {
  type:TMDBFetchType,
  setType:(value:TMDBFetchType) => void
}
export type MediaFilterContextType = {
  filter:TMDBFilterType,
  setFilter:(value:TMDBFilterType) => void
}
export type MediaPaginationContextType = {
  totalPages:number,
  setTotalPages:(val:number)=>void,
  currentPage:number,
  setPage:(val:number)=>void;
}
//PROPS
export type NavlinkProps = {
  content: string,
  href: string
}
export type ShowCardProps = {
  imgSrc: string,
  rating: string,
  year: string,
  title: string,
  link:string
};
export type RedirectingSearchbarProps = {
  path: string
}
export type MediaPaginationProps = {
  totalPages:number,
  currentPage:number,
  setPage:(val:number)=>void
}
export type MediaPaginationButtonProps = {
  content:string,
  selected:boolean,
  onClick:()=>void
}
export type OverviewContainerProps = {
  backdropImgSrc:string,
  posterImgSrc:string,
  title:string,
  overview:string,
  releaseDate:string,
  duration:string,
  genre:string[],
  casts:string[],
  country:string,
  production:string[]
}
//HOOK TYPES
export type TMDBResponse = {
  page: number;
  results: TMDBItem[];
  total_pages: number;
  total_results: number;
};
export type Status = StatusSuccess | StatusLoading | StatusError;
//GENERAL
export type TMDBItem = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
export type CastItem = {
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  name: string;
  order: number;
  profile_path: string | null;
};
export type TMDBMovieDetails = {
  id: number;
  title: string;
  overview: string;
  genres: { id: number; name: string }[];
  runtime: number;
  release_date: string;
  poster_path: string | null;
  backdrop_path: string | null;
  production_companies: { name: string; logo_path: string | null }[];
  production_countries: { name: string; iso_3166_1: string }[];
  spoken_languages: { name: string; iso_639_1: string }[];
  budget: number;
  revenue: number;
  status: string;
  tagline: string;
  homepage: string;
  imdb_id: string;
};
export type TMDBTVDetails = {
  id: number;
  name: string;
  original_name: string;
  overview: string;
  genres: { id: number; name: string }[];
  first_air_date: string;
  episode_run_time: number[];
  poster_path: string | null;
  backdrop_path: string | null;
  production_companies: { name: string; logo_path: string | null }[];
  production_countries: { name: string; iso_3166_1: string }[];
  spoken_languages: { name: string; iso_639_1: string }[];
  status: string;
  tagline: string;
  homepage: string;
  in_production: boolean;
  number_of_episodes: number;
  number_of_seasons: number;
  last_air_date: string;
  created_by: { id: number; name: string }[];
};
//RETURN TYPES
export type useTMDBDataResult = {
  data: TMDBResponse | undefined,
  status: Status
};
//FUNCTION OPTIONS
export type useTMDBDATAOptions = {
  type: TMDBFetchType,
  filter?: TMDBFilterType
}
export type TMDBFetchType = 'MOVIE' | 'TV';
export type TMDBFilterType = typeof TMDB_FILTERS[number];