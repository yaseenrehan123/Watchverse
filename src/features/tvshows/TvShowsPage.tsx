import React from 'react'
import useClearSearchOnLoad from '../../hooks/useClearSearchOnLoad';
import { useResetPaginationOnLoad } from '../../hooks/useResetPaginationOnLoad';
import useSetMediaFilterOnLoad from '../../hooks/useSetMediaFilterOnLoad';
import useSetMediaTypeOnLoad from '../../hooks/useSetMediaTypeOnLoad';
import TvShowsHeader from './TvShowsHeader';
import TvShowContent from './TvShowContent';

const TvShowsPage = () => {
    useClearSearchOnLoad();
    useResetPaginationOnLoad();
    useSetMediaTypeOnLoad('TV');
    useSetMediaFilterOnLoad('POPULAR');
    return (
        <div className='flex items-center flex-col gap-5'>
            <TvShowsHeader/>
            <TvShowContent/>
        </div>
    )
}

export default TvShowsPage