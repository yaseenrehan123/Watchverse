import React from 'react'
import MediaFilterDropdown from '../reusable/MediaFilterDropdown'
import MediaContainer from '../reusable/MediaContainer'
import MediaPagination from '../reusable/MediaPagination'

const MoviesContent = () => {
  return (
    <div className='flex items-center flex-col gap-5'>
        <div className={`flex flex-col sm:flex-row pl-0 sm:pl-24 items-center  gap-5 w-full`}>
            <MediaFilterDropdown/>
        </div>
        <MediaContainer/>
    </div>
  )
}

export default MoviesContent