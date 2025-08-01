import React from 'react'
import { useOverviewDataStore } from '../../zustand-stores/useOverviewDataStore';

const Metadata = () => {
    const releaseDate = useOverviewDataStore((s)=>s.value.releaseDate);
    const genre = useOverviewDataStore((s)=>s.value.genre);
    const casts = useOverviewDataStore((s)=>s.value.casts);
    const duration = useOverviewDataStore((s)=>s.value.duration);
    const country = useOverviewDataStore((s)=>s.value.country);
    const production = useOverviewDataStore((s)=>s.value.production);

    return (
        <div className='grid grid-cols-1 justify-center gap-1.5 max-w-3xl lg:grid-cols-2 lg:gap-20'>
            <div className='flex flex-col gap-1.5 text-left'>
                <div className='flex items-start gap-1'>
                    <div><strong>Released:</strong> <span className='text-neutral-400'>{releaseDate}</span></div>
                </div>
                <div className='flex items-start gap-1'>
                    <div><strong>Genre:</strong> <span className='text-neutral-400'>{genre.join(', ')}</span></div>
                </div>
                <div className='flex items-start gap-1'>
                    <div><strong>Casts:</strong> <span className='text-neutral-400'>{casts.join(', ')}</span></div>
                </div>
            </div>
            <div className='flex flex-col gap-1.5'>
                <div className='flex items-start gap-1'>
                    <div><strong>Duration:</strong> <span className='text-neutral-400'>{duration}</span></div>
                </div>
                <div className='flex items-start gap-1'>
                    <div><strong>Country:</strong> <span className='text-neutral-400'>{country}</span></div>
                </div>
                <div className='flex items-start text-left'>
                    <div><strong>Production:</strong> <span className='text-neutral-400'>{production.join(', ')}</span></div>
                </div>
            </div>
        </div>
    )
}

export default Metadata