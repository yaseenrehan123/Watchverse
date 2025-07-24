import React, { useEffect, useState } from 'react'
import HomeHeader from './HomeHeader'
import HomeContent from './HomeContent'
//import useClearSearchOnLoad from '../../hooks/useClearSearchOnLoad'
import { useResetPaginationOnLoad } from '../../hooks/useResetPaginationOnLoad'
import useSetMediaTypeOnLoad from '../../hooks/useSetMediaTypeOnLoad'
import useSetMediaFilterOnLoad from '../../hooks/useSetMediaFilterOnLoad'

const HomePage = () => {
    //useClearSearchOnLoad();
    useResetPaginationOnLoad();
    useSetMediaTypeOnLoad('MOVIE');
    useSetMediaFilterOnLoad('POPULAR');
    return (
        <div className='flex items-center flex-col gap-5'>
            <HomeHeader />
            <HomeContent/>
        </div>
    )
}

export default HomePage