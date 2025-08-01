import React, { useState } from 'react'
import { useOverviewDataStore } from '../../zustand-stores/useOverviewDataStore';

const Poster = () => {
    const [posterImgError, setPosterImgError] = useState<boolean>(false);
    const posterImgSrc = useOverviewDataStore((s)=>s.value.posterImgSrc);
    return (
        <div className='h-80 w-56 shadow-black shadow-2xl scale-75 lg:scale-100'>
            {(!posterImgError && posterImgSrc)
                ? (<img src={`https://image.tmdb.org/t/p/w500${posterImgSrc}`} alt='Poster Image'
                    onError={() => setPosterImgError(true)} className='w-full h-full' />)
                : (<div className='w-full h-full bg-gray-600 flex items-center justify-center'>
                    <span>No Poster Available</span>
                </div>)
            }
        </div>
    )
}

export default Poster