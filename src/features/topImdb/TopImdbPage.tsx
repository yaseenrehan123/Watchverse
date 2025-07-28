import React from 'react'
import TopImdbHeader from './TopImdbHeader'
import TopImdbContent from './TopImdbContent';

const TopImdbPage = () => {

    return (
        <div className='flex items-center flex-col gap-5'>
            <TopImdbHeader />
            <TopImdbContent/>
        </div>
    )
}

export default TopImdbPage