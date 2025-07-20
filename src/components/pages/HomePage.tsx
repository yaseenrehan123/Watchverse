import React, { useEffect, useState } from 'react'
import HomeHeader from '../headers/HomeHeader'
import HomeContent from '../content/HomeContent'
import useClearSearchOnLoad from '../../hooks/useClearSearchOnLoad'
import { resetPaginationOnLoad } from '../../hooks/useResetPaginationOnLoad'

const HomePage = () => {
    useClearSearchOnLoad();
    resetPaginationOnLoad();
    return (
        <div className='flex items-center flex-col gap-5'>
            <HomeHeader />
            <HomeContent/>
        </div>
    )
}

export default HomePage