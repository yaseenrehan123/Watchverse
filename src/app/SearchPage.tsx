import React, { useEffect } from 'react'
import MediaContainer from '../components/media/MediaContainer'
import useSetMediaTypeOnLoad from '../hooks/useSetMediaTypeOnLoad'

const SearchPage = () => {
    useSetMediaTypeOnLoad('ALL');
  return (
    <div className='flex items-center flex-col pt-13'>
        <MediaContainer/>
    </div>
  )
}

export default SearchPage