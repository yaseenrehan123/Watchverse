import React, { useState } from 'react'
import type { TMDBFetchType, TMDBFilterType } from '../../types';
import MediaFilterDropdown from '../reusable/MediaFilterDropdown';
import ContentTypeSelection from '../reusable/ContentTypeSelection';
import MediaContainer from '../reusable/MediaContainer';

const HomeContent = () => {
    const [filter, setFilter] = useState<TMDBFilterType>('POPULAR');
    const [contentType,setContentType] = useState<TMDBFetchType>('MOVIE');
  return (
    <div className='flex items-center flex-col gap-5'>
        <div className='flex items-center pl-24 gap-5 w-full'>
                <MediaFilterDropdown selected={filter} onSelect={setFilter}/>
                <ContentTypeSelection selected={contentType} onSelect={setContentType}/>
            </div>
            
            <MediaContainer type={contentType} filter={filter}/>
    </div>
  )
}

export default HomeContent