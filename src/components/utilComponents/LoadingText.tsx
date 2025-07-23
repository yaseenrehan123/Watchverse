import React from 'react'

const LoadingText = ({content}:{content:string}) => {
  return (
    <div className='text-2xl text-yellow-500'>{content}</div>
  )
}

export default LoadingText