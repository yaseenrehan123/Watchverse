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
  debouncedSearchValue: string
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
  title: string
};
export type MediaContainerProps = {
  type: TMDBFetchType,
  filter?: TMDBFilterType
}
export type MediaFilterDropdownProps = {
  selected: TMDBFilterType,
  onSelect: (value: TMDBFilterType) => void;
}
export type ContentTypeSelectionProps = {
  selected: TMDBFetchType,
  onSelect: (value: TMDBFetchType) => void
}
export type RedirectingSearchbarProps = {
  path: string
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