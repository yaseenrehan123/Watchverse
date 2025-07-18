import React, { useEffect, useState } from 'react'
import HomeHeader from '../headers/HomeHeader'
import HomeContent from '../content/HomeContent'
import useClearSearchOnLoad from '../../hooks/useClearSearchOnLoad'

const HomePage = () => {
    useClearSearchOnLoad();
    return (
        <div className='flex items-center flex-col gap-5'>
            <HomeHeader />
            <HomeContent/>
        </div>
    )
}

export default HomePage