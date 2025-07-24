import React, { useEffect } from 'react'
import MediaContainer from '../components/media/MediaContainer'
import useSetMediaTypeOnLoad from '../hooks/useSetMediaTypeOnLoad'
import SearchResultsText from '../components/utilComponents/SearchResultsText';

const SearchPage = () => {
  useSetMediaTypeOnLoad('ALL');
  return (
    <div className='flex items-center flex-col pt-13 gap-5'>
      <SearchResultsText />
      <MediaContainer />
    </div>
  )
}

export default SearchPage