import React, { useEffect, useState } from 'react'
import HomeHeader from './HomeHeader'
import HomeContent from './HomeContent'

const HomePage = () => {;
    return (
        <div className='flex items-center flex-col gap-5'>
            <HomeHeader />
            <HomeContent/>
        </div>
    )
}

export default HomePage