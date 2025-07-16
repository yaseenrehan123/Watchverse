import React from 'react'
import type { MediaContainerProps, TMDBItem, useTMDBDataResult } from '../types'
import useMoviesData from '../Hooks/useMoviesData'
import MediaLoadingText from './utils/MediaLoadingText';
import MediaErrorText from './utils/MediaErrorText';
import ShowCard from './ShowCard';

const MediaContainer = ({ hook, getDisplayData }: MediaContainerProps) => {
    const { data, status }: useTMDBDataResult = hook();

    if (status.state === 'Loading') {
        return <MediaLoadingText content='Loading...' />
    }
    if (status.state === 'Error') {
        return <MediaErrorText content={`${status.message}`} />
    }
    if (status.state === 'Success') {
        return (
            <div className='flex items-center justify-center gap-5 flex-wrap'>
                {data?.results.map((item) => {
                    const props = getDisplayData(item);
                    return <ShowCard key={item.id} {...props} />;
                })}
            </div>
        )
    }
    return null;
}

export default MediaContainer