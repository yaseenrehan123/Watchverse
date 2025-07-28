import React, { useState } from 'react'
import type { MediaType, MediaFilter } from '../../types';
import MediaFilterDropdown from '../../components/media/MediaFilterDropdown';
import ContentTypeSelection from '../../components/media/ContentTypeSelection';
import MediaContainer from '../../components/media/MediaContainer';
import MediaFiltersContainer from '../../components/mediaFilters/MediaFiltersContainer';

const HomeContent = () => {
  return (
    <div className='flex items-center flex-col gap-5'>
      <div className={`flex pl-10 sm:pl-24  gap-5 w-screen relative`}>
        <MediaFiltersContainer/>
      </div>
      <MediaContainer />

    </div>
  )
}

export default HomeContent