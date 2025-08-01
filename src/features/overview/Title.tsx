import React from 'react'
import { useOverviewDataStore } from '../../zustand-stores/useOverviewDataStore';

const Title = () => {
    const title = useOverviewDataStore((s)=>s.value.title);
    return (
        <div className='flex items-center justify-center'>
            <span className='font-anton text-3xl tracking-wider'>{title}</span>
        </div>
    )
}

export default Title