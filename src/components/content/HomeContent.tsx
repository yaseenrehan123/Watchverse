import React, { useState } from 'react'
import type { TMDBFetchType, TMDBFilterType } from '../../types';
import MediaFilterDropdown from '../reusable/MediaFilterDropdown';
import ContentTypeSelection from '../reusable/ContentTypeSelection';
import MediaContainer from '../reusable/MediaContainer';

const HomeContent = () => {
  return (
    <div className='flex items-center flex-col gap-5'>
        <div className='flex items-center pl-24 gap-5 w-full'>
                <MediaFilterDropdown/>
                <ContentTypeSelection/>
            </div>
            <div className='flex items-center justify-center w-full'>
                <MediaContainer/>
            </div>
           
    </div>
  )
}

export default HomeContent