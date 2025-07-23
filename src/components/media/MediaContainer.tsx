import React, { useState } from 'react'
import type {  TMDBData, useFetchMediaDataResult } from '../../types'
import LoadingText from '../utilComponents/LoadingText';
import ErrorText from '../utilComponents/ErrorText';
import ShowCard from './ShowCard';
import useFetchMediaData from '../../hooks/useFetchMediaData';
import MediaPagination from './MediaPagination';
import { useMediaTypeContext } from '../../contexts/MediaTypeContext';

const MediaContainer = () => {
    const { data, status }: useFetchMediaDataResult = useFetchMediaData();
    const {type} = useMediaTypeContext();
    if (status.state === 'Loading') {
        return <LoadingText content='Loading...' />
    }
    if (status.state === 'Error') {
        return <ErrorText content={`${status.message}`} />
    }
    if (status.state === 'Success') {
        //console.log(data);
        return (
            <div className='flex items-center justify-center gap-5 flex-wrap w-full'> 
                {data?.results.map((item:TMDBData)=>(
                    <ShowCard 
                    key={item.id}
                    imgSrc={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    rating={typeof item.vote_average === 'number' ? item.vote_average.toFixed(1) : 'N/A'}
                    year={item.release_date?.split('-')[0] ?? 'N/A'}
                    title={item.title}
                    link={`/overview/${type.toLowerCase()}/${item.id}`}
                    />
                ))}
                <MediaPagination/>
            </div>
        )
    }
    return null;
}

export default MediaContainer