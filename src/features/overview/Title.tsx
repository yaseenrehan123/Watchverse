import React from 'react'
import { useOverviewDataContext } from '../../contexts/OverviewDataContext'

const Title = () => {
    const {title} = useOverviewDataContext();
    return (
        <div className='flex items-center justify-center'>
            <span className='font-anton text-3xl tracking-wider'>{title}</span>
        </div>
    )
}

export default Title