import React from 'react'

const ErrorText = ({content}:{content:string}) => {
  return (
    <div className='text-2xl text-red-500'>{content}</div>
  )
}

export default ErrorText