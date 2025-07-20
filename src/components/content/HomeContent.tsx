import React, { useState } from 'react'
import type { TMDBFetchType, TMDBFilterType } from '../../types';
import MediaFilterDropdown from '../reusable/MediaFilterDropdown';
import ContentTypeSelection from '../reusable/ContentTypeSelection';
import MediaContainer from '../reusable/MediaContainer';

const HomeContent = () => {
  return (
    <div className='flex items-center flex-col gap-5'>
      <div className={`flex flex-col sm:flex-row pl-0 sm:pl-24 items-center  gap-5 w-screen`}>
        <MediaFilterDropdown />
        <ContentTypeSelection />
      </div>
      <MediaContainer />

    </div>
  )
}

export default HomeContent