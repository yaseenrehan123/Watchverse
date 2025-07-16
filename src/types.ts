//PRIVATE
type StatusLoading = {
  state:'Loading'
};
type StatusSuccess = {
  state:'Success'
};
type StatusError = {
  state:'Error',
  message:string
};
//CONTEXT
export type SearchContextType = {
    searchValue:string,
    setSearchValue:Function
};
export type SidebarContextType = {
    enabled:boolean,
    setEnabled:Function
};
//PROPS
export type NavlinkProps = {
    content:string,
    href:string
}
export type ShowCardProps = {
  imgSrc:string,
  rating:string,
  year:string,
  name:string
};
export type MediaContainerProps = {
  hook: ()=> useTMDBDataResult,
  getDisplayData:(item:TMDBItem)=>{
    imgSrc:string,
    rating:string,
    year:string,
    name:string
  }
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
  data:TMDBResponse | undefined,
  status:Status
};