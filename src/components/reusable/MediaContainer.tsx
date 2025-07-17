import React, { useEffect } from 'react'
import type { MediaContainerProps, TMDBItem, useTMDBDataResult } from '../../types'
import MediaLoadingText from '../utilComponents/MediaLoadingText';
import MediaErrorText from '../utilComponents/MediaErrorText';
import ShowCard from './ShowCard';
import useTMDBDATA from '../../Hooks/useTMDBData';

const MediaContainer = ({type,filter}:MediaContainerProps) => {
    const { data, status }: useTMDBDataResult = useTMDBDATA({
        type:type,
        filter:filter
    });
    useEffect(()=>{
        console.log("MEDIA FILTER CHANGED!",filter)
    },[filter])
    if (status.state === 'Loading') {
        return <MediaLoadingText content='Loading...' />
    }
    if (status.state === 'Error') {
        return <MediaErrorText content={`${status.message}`} />
    }
    if (status.state === 'Success') {
        return (
            <div className='flex items-center justify-center gap-5 flex-wrap'>
                {data?.results.map((item:TMDBItem)=>(
                    <ShowCard 
                    key={item.id}
                    imgSrc={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    rating={item.vote_average.toFixed(1)}
                    year={item.release_date?.split('-')[0] ?? 'N/A'}
                    title={item.title}
                    />
                ))}
            </div>
        )
    }
    return null;
}

export default MediaContainer