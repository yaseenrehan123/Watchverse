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
//STORES
export type SidebarStore = {
  enabled: boolean,
  setEnabled: (val: boolean) => void
}
export type PaginationStore = {
  totalPages: number,
  setTotalPages: (val: number) => void
}
export type GenresDataStore = {
  genres: GenreData[],
  status: Status
}
export type CountriesDataStore = {
  countries: CountriesData[],
  status: Status
}
export type OverviewDataStore = {
  value: OverviewContainerProps
}
//CONTEXT
export type SuggestionsCardContext = {
  value:SearchSuggestionsCardProps
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
  link: string
};
export type MediaPaginationButtonProps = {
  content: string,
  selected: boolean,
  onClick: () => void
}
export type OverviewContainerProps = {
  backdropImgSrc: string,
  posterImgSrc: string,
  title: string,
  overview: string,
  releaseDate: string,
  duration: string,
  genre: string[],
  casts: string[],
  country: string,
  production: string[]
}
export type FilterOptionProps = {
  value: string,
  title: string,
  enabled?: boolean,
  selected?: boolean,
  onClick?: () => void
}
export type FilterOptionsContainerProps = {
  section: string,
  options: { label: string, value: string, onSelected?: Function }[],
  filterKey: keyof FilterParams
  multiple?: boolean,
  enabled: boolean,
  defaultValues?: string[]
}
export type MediaFiltersContainerProps = {
  enableCategoryFilter: boolean,
  enableSortFilter: boolean,
  enableYearFilter: boolean,
  enableGenreFilter: boolean,
  enableCountryFilter: boolean
}
export type SearchSuggestionsCardProps = {
  posterImgSrc:string,
  title:string,
  year:string,
  duration:string,
  category:string,
  link:string
}
export type SearchSuggestionsContainerProps = {
  inputValue:string
}
//UI COMPONENT PROPS
export type StatusTextProps = React.HTMLAttributes<HTMLDivElement> & StatusTextVariants;
export type ResponsiveProps = React.HTMLAttributes<HTMLDivElement> & ResponsiveVariants;
//GENERAL
export type TMDBMovieData = {
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
export type TMDBTVData = {
  adult: boolean;
  backdrop_path: string | null;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  origin_country: string[];
  overview: string;
  popularity: number;
  poster_path: string | null;
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
export type GenreData = {
  id: number,
  name: string
}
export type CountriesData = {
  english_name: string,
  iso_3166_1: string,
  native_name: string
}
export type Status = StatusSuccess | StatusLoading | StatusError;
export type CategoryFilter = "movie" | "tv";
export type SortFilter = 'popularity' | 'trending' | 'new' | 'top_imdb';
export type FilterParams = {
  category?: CategoryFilter,
  sort?: SortFilter,
  genre?: string,
  year?: string,
  country?: string
};
export type FilterOption = {
  label: string,
  value: string
}
export type TMDBMovieSuggestion = TMDBMovieData & {
  media_type:"movie"
}
export type TMDBTVSuggestion = TMDBTVData & {
  media_type:"tv"
}
export type TMDBSuggestion =
  | TMDBMovieSuggestion
  | TMDBTVSuggestion
//RETURN TYPES
export type FetchMediaResult = {
  page: number;
  results: TMDBMovieData[];
  total_pages: number;
  total_results: number;
};
export type FetchGenresResult = {
  genres: GenreData[]
}
export type FetchDetailsResult = TMDBMovieDetails | TMDBTVDetails;
export type FetchCreditsResult = {
  cast:CastItem[],
  crew:any[],
  id:number
}
export type UseFetchMediaDataResult = {
  data: FetchMediaResult | undefined,
  status: Status
};
export type UseFetchMediaGenresResult = {
  data: FetchGenresResult | undefined,
  status: Status
}
export type useFetchMediaDetailsResult = {
  data:FetchDetailsResult | undefined,
  status:Status
}
export type useFetchMediaCreditsResult = {
  data:FetchCreditsResult | undefined,
  status:Status
}
//FUNCTION OPTIONS
export type UseFetchMediaDataOptions = {
  type: CategoryFilter,
  filter?: SortFilter
}
//UI COMPONENT VARIANTS
export type StatusTextVariants = {
  variant?:'default'|'errorText'|'loadingText'|'successText'
}
export type ResponsiveVariants = {
  display?:'block'|'inline'|'inlineBlock'|'flex'|'inlineFlex'|'grid'|'hidden',
  sm?:'default'|'block'|'hidden'|'flex'|'inlineBlock',
  md?:'default'|'block'|'hidden'|'flex'|'inlineBlock',
  lg?:'default'|'block'|'hidden'|'flex'|'inlineBlock',
}