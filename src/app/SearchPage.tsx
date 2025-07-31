import React, { useEffect } from 'react'
import MediaContainer from '../components/media/MediaContainer'
import SearchResultsText from '../components/utilComponents/SearchResultsText';
import MediaFiltersContainer from '../components/mediaFilters/MediaFiltersContainer';

const SearchPage = () => {
  return (
    <div className='flex items-center flex-col pt-13 gap-5'>
      <SearchResultsText />
      <div className={`flex pl-10 sm:pl-24  gap-5 w-screen relative`}>
        <MediaFiltersContainer />
      </div>
      <MediaContainer />
    </div>
  )
}

export default SearchPage