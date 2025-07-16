import React from 'react'

const ShowFlexOnSmallSize = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='flex sm:hidden'>{children}</div>
  )
}

export default ShowFlexOnSmallSize