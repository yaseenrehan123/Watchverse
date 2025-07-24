import { useEffect, useState } from "react";
import type { Status, TMDBMovieData, TMDBResponse, TMDBTVData, useFetchMediaDataOptions, useFetchMediaDataResult } from "../types";
import { useMediaTypeContext } from "../contexts/MediaTypeContext";
import { useMediaFilterContext } from "../contexts/MediaFilterContext";
import { useMediaPaginationContext } from "../contexts/MediaPaginationContext";
import { useParams, useSearchParams } from "react-router-dom";

export default function useFetchMediaData(): useFetchMediaDataResult {
    const [response, setResponse] = useState<TMDBResponse | undefined>();
    const [status, setStatus] = useState<Status | undefined>();
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const rawPage: number = Number(searchParams.get('page'));
    const currentPage:number = rawPage && Number(rawPage) > 0 ? Number(rawPage) : 1;
    const { type } = useMediaTypeContext();
    const { filter } = useMediaFilterContext();
    const { setTotalPages } = useMediaPaginationContext();
    useEffect(() => {
        const MOVIE_URL:string = query 
        ? 'https://api.themoviedb.org/3/search/movie' 
        : 'https://api.themoviedb.org/3/discover/movie';
        const TV_URL:string = query 
        ? 'https://api.themoviedb.org/3/search/tv' 
        : 'https://api.themoviedb.org/3/discover/tv';
        const URLArr: string[] = type === 'MOVIE' ? [MOVIE_URL]
            : type === 'TV' ? [TV_URL]
            : [MOVIE_URL,TV_URL]
        const FILTER: string =
            filter === 'POPULAR' ? 'sort_by=popularity.desc'
                : filter === 'TRENDING' ? 'sort_by=vote_average.desc'
                    : filter === 'NEW' ? `sort_by=release_date.desc&primary_release_date.lte=${new Date().toISOString().split('T')[0]}`
                        : filter === 'TOP_IMDB' ? 'sort_by=vote_average.desc&vote_count.gte=1000'
                            : 'sort_by=popularity.desc'; //DEFAULT
        const API_KEY: string = import.meta.env.VITE_TMDP_API_KEY;
        const OPTIONS = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_KEY}`
            }
        };
        const fetchMedia = async () => {
            try {
                setStatus({ state: 'Loading' });
                const endpoint:string[] = URLArr.map(baseURL => query 
                    ? `${baseURL}?query=${encodeURIComponent(query)}&page=${currentPage}`
                    : `${baseURL}?${FILTER}&page=${currentPage}`
                )
                const responses = await Promise.all(endpoint.map(url => fetch(url,OPTIONS)));

                if(responses.some(response => !response.ok)){
                    throw new Error("ONE OF THE REQUESTS FAILED!")
                }

                const allData:TMDBResponse[] = await Promise.all(responses.map(response => response.json()));
                
                let finalResult:TMDBResponse;

                if(allData.length > 1){
                    const mergedResults:TMDBMovieData[] | TMDBTVData[] = allData.flatMap(data => data.results);
                    const itemsPerPage:number = 20;
                    const totalResults:number = mergedResults.length;
                    const totalPages:number = Math.ceil(totalResults / itemsPerPage);
                    const startIndex:number = (currentPage - 1) * itemsPerPage;
                    const paginatedResults = mergedResults.slice(startIndex,startIndex + itemsPerPage);
                    finalResult = {
                        ...allData[0],
                        results:paginatedResults,
                        total_results:totalResults,
                        total_pages:totalPages
                    }
                }
                else{
                    finalResult = allData[0];
                }
                setResponse(finalResult);
                setStatus({ state: 'Success' });
            }
            catch (error) {
                setStatus({ state: 'Error', message: 'Failed to load. Please try again later.' });
                throw new Error("FAILED TO FETCH TMDB DATA! " + error);
            }
        };
        fetchMedia();
    }, [type, filter, currentPage,query]);

    useEffect(() => {
        if (status?.state === 'Success' && response?.total_pages) {
            setTotalPages(response.total_pages);
        }
    }, [status, response]);

    if (!status) {
        return {
            data: undefined,
            status: { state: "Loading" },
        };
    };
    if (status?.state === 'Success') {
        if (response === undefined || status === undefined) {
            throw new Error("RESULT NULL ON SUCCESS!");
        };
        console.log(response);
    };
    const result: useFetchMediaDataResult = {
        data: response,
        status: status!
    };
    return result;
}