import React from 'react'
import { useOverviewDataStore } from '../../zustand-stores/useOverviewDataStore';

const OverviewDetails = () => {
    const overview = useOverviewDataStore((s)=>s.value.overview);
    return (
        <div className='flex flex-col items-baseline gap-2'>
            <span className='font-roboto font-bold'>Overview:</span>
            <span className='text-sm leading-relaxed max-w-3xl text-left text-neutral-400 font-montserrat'>{overview}</span>
        </div>
    )
}

export default OverviewDetails