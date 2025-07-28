import React from 'react'
import TvShowsHeader from './TvShowsHeader';
import TvShowContent from './TvShowContent';

const TvShowsPage = () => {

    return (
        <div className='flex items-center flex-col gap-5'>
            <TvShowsHeader/>
            <TvShowContent/>
        </div>
    )
}

export default TvShowsPage