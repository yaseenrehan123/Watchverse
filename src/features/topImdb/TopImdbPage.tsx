import React from 'react'
import TopImdbHeader from './TopImdbHeader'
import TopImdbContent from './TopImdbContent';
import useClearSearchOnLoad from '../../hooks/useClearSearchOnLoad';
import { useResetPaginationOnLoad } from '../../hooks/useResetPaginationOnLoad';
import useSetMediaTypeOnLoad from '../../hooks/useSetMediaTypeOnLoad';
import useSetMediaFilterOnLoad from '../../hooks/useSetMediaFilterOnLoad';

const TopImdbPage = () => {
    useClearSearchOnLoad();
    useResetPaginationOnLoad();
    useSetMediaTypeOnLoad('MOVIE');
    useSetMediaFilterOnLoad('TOP_IMDB');
    return (
        <div className='flex items-center flex-col gap-5'>
            <TopImdbHeader />
            <TopImdbContent/>
        </div>
    )
}

export default TopImdbPage