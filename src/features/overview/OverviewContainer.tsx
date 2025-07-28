import React, { useState } from 'react'
import BackdropImage from './BackdropImage';
import BackdropGradient from './BackdropGradient';
import Poster from './Poster';
import OverviewDetails from './OverviewDetails';
import Title from './Title';
import Metadata from './Metadata';

const OverviewContainer = () => {
    return (
        <div className='w-screen min-h-screen  flex flex-col items-center gap-5 relative pt-20 pb-2'>
           <BackdropImage/>
            <BackdropGradient/>
            <div className='z-8 flex flex-col justify-start gap-4 lg:flex-row lg:justify-center lg:items-center lg:gap-8 pr-2 pl-2 w-full'>
               <Poster/>
                <div className='flex flex-col gap-5 min-h-full items-start lg:items-center'>
                    <Title/>
                    <OverviewDetails/>
                    <Metadata/>
                </div>
            </div>
        </div>
    )
}

export default OverviewContainer