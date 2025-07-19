import React from 'react'
import type { MediaPaginationButtonProps } from '../../types'

const MediaPaginationButton = ({content,selected,onClick}:MediaPaginationButtonProps) => {
  return (
    <div className={`flex justify-center items-center w-10 h-10 ${selected ? 'bg-cyan-500' : 'bg-gray-800 cursor-pointer hover:bg-cyan-800'} rounded-full text-white 
     transition-all duration-150`} onClick={onClick}>
        {content}
    </div>
  )
}

export default MediaPaginationButton