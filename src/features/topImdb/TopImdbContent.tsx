import React from 'react'
import ContentTypeSelection from '../../components/media/ContentTypeSelection'
import MediaContainer from '../../components/media/MediaContainer'

const TopImdbContent = () => {
  return (
    <div className='flex items-center flex-col gap-5'>
        <div className={`flex flex-col sm:flex-row pl-0 sm:pl-24 items-center  gap-5 w-screen`}>
            <ContentTypeSelection/>
        </div>
        <MediaContainer/>
    </div>
  )
}

export default TopImdbContent