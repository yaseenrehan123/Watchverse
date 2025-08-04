import React, { useState } from 'react'
import type { TMDBMovieData, TMDBTVData, UseFetchMediaDataResult } from '../../types'
import LoadingText from '../utilComponents/LoadingText';
import ErrorText from '../utilComponents/ErrorText';
import ShowCard from './ShowCard';
import useFetchMediaData from '../../hooks/fetch/useFetchMediaData';
import MediaPagination from './MediaPagination';

const MediaContainer = () => {
    const { data, status }: UseFetchMediaDataResult = useFetchMediaData();
    if (status.state === 'Loading') {
        return <LoadingText content='Loading...' />
    }
    if (status.state === 'Error') {
        return <ErrorText content={`${status.message}`} />
    }
    if (status.state === 'Success') {
        console.log(data);
        return (
            <div className='flex items-center justify-center gap-5 flex-wrap w-full'>
                {data?.results.map((item: TMDBMovieData | TMDBTVData) => {
                    let itemData:{
                        imgSrc:string,
                        rating:string,
                        year:string,
                        title:string,
                        link:string
                    };
                    if('title' in item){
                        itemData = {
                            imgSrc:`https://image.tmdb.org/t/p/w500${item.poster_path}`,
                            rating:typeof item.vote_average === 'number' ? item.vote_average.toFixed(1) : 'N/A',
                            year:item.release_date?.split('-')[0] ?? 'N/A',
                            title:item.title,
                            link:`/overview/movie/${item.id}`
                        }
                    }
                    else{
                        itemData = {
                            imgSrc:`https://image.tmdb.org/t/p/w500${item.poster_path}`,
                            rating:typeof item.vote_average === 'number' ? item.vote_average.toFixed(1) : 'N/A',
                            year:item.first_air_date?.split('-')[0] ?? 'N/A',
                            title:item.name,
                            link:`/overview/tv/${item.id}`
                        }
                    }
                    return (<ShowCard
                        key={item.id}
                        {...itemData}
                    />)
                })}
                <MediaPagination />
            </div>
        )
    }
    return null;
}

export default MediaContainer