import React from 'react'

const MediaErrorText = ({content}:{content:string}) => {
  return (
    <div className='text-2xl text-red-500'>{content}</div>
  )
}

export default MediaErrorText