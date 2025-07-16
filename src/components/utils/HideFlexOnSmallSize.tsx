import React from 'react'

const HideFlexOnSmallSize = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='hidden sm:flex'>{children}</div>
  )
}

export default HideFlexOnSmallSize